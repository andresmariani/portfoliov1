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
  const [prevIndex, setPrevIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const checkImages = async () => {
      const found: number[] = [];
      for (let i = 0; i <= 2; i++) {
        try {
          const res = await fetch(`/images/${projectId}/${i}.webp`, { method: 'HEAD' });
          if (res.ok) {
            found.push(i);
          }
        } catch (e) {
          // Ignorar
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
      setCurrentIndex(prev => {
        setPrevIndex(prev);
        return 1;
      });
      
      timerRef.current = setInterval(() => {
        setCurrentIndex(prev => {
          setPrevIndex(prev);
          return (prev + 1) % availableImages.length;
        });
      }, 4500); 
    } else {
      setCurrentIndex(prev => {
        setPrevIndex(prev);
        return 0;
      });
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
      {availableImages.map((imgIndex) => {
        const isCurrent = currentIndex === imgIndex;
        const isPrev = prevIndex === imgIndex;
        
        // El secreto del crossfade perfecto:
        // La imagen anterior se mantiene al 100% de opacidad pero en el fondo (z-0)
        // La nueva imagen hace un fade-in suave por encima (z-10)
        // Esto evita el molesto parpadeo gris donde ambas imágenes estaban al 50% de opacidad.
        const opacityClass = (isCurrent || isPrev) ? 'opacity-100' : 'opacity-0';
        const zIndexClass = isCurrent ? 'z-10' : 'z-0';

        return (
          <Image 
            key={imgIndex}
            src={`/images/${projectId}/${imgIndex}.webp`}
            alt={`${title} - vista ${imgIndex}`}
            fill
            className={`object-cover transition-opacity duration-[3500ms] ease-in-out ${opacityClass} ${zIndexClass}`}
          />
        );
      })}
      
      {availableImages.length === 0 && (
        <span className="text-xs text-gray-400 tracking-widest uppercase relative z-20">Imagen en proceso</span>
      )}
    </div>
  );
}