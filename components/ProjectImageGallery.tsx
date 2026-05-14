"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

interface ProjectImageGalleryProps {
  projectId: string;
  title: string;
}

export default function ProjectImageGallery({ projectId, title }: ProjectImageGalleryProps) {
  const [availableImages, setAvailableImages] = useState<number[]>([0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkImages = async () => {
      const found: number[] = [];
      // Buscar secuencialmente hasta 3 imágenes (0, 1, 2)
      for (let i = 0; i <= 2; i++) {
        try {
          const res = await fetch(`/images/${projectId}/${i}.webp`, { method: 'HEAD' });
          if (res.ok) {
            found.push(i);
          }
        } catch (e) {
          // Ignorar si no existe
        }
      }
      
      if (found.length > 0) {
        setAvailableImages(found);
      } else {
        setAvailableImages([]);
      }
    };
    
    checkImages();
  }, [projectId]);

  useEffect(() => {
    if (isHovered && availableImages.length > 1) {
      if (availableImages.length === 2) {
        // Si solo hay 0 y 1, alternamos entre ambas
        setCurrentIndex(1);
        timerRef.current = setInterval(() => {
          setCurrentIndex(prev => (prev === 0 ? 1 : 0));
        }, 3500);
      } else {
        // Si hay más de dos (ej. 0, 1, 2), alternamos entre las secundarias (1, 2)
        setCurrentIndex(1);
        timerRef.current = setInterval(() => {
          setCurrentIndex(prev => {
            let next = prev + 1;
            if (next >= availableImages.length) next = 1;
            return next;
          });
        }, 3500);
      }
    } else {
      // Estado normal: volvemos a la portada
      setCurrentIndex(0);
      if (timerRef.current) clearInterval(timerRef.current);
    }
    
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, availableImages]);

  return (
    <div 
      className="relative aspect-[3/2] bg-[#e5e5e5] flex items-center justify-center border border-gray-200 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {availableImages.map((imgIndex) => (
        <Image 
          key={imgIndex}
          src={`/images/${projectId}/${imgIndex}.webp`}
          alt={`${title} - vista ${imgIndex}`}
          fill
          className={`object-cover transition-opacity duration-[1500ms] ease-in-out ${
            currentIndex === imgIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        />
      ))}
      
      {availableImages.length === 0 && (
        <span className="text-xs text-gray-400 tracking-widest uppercase z-0">Imagen en proceso</span>
      )}
    </div>
  );
}
