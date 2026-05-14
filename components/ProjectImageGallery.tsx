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
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
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
        if (prev !== 0) {
          setPrevIndex(prev);
        }
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
        
        // El secreto de un crossfade museográfico perfecto:
        // En lugar de hacer que ambas imágenes cambien su opacidad al mismo tiempo (lo que genera un flash gris),
        // la nueva imagen aparece instantáneamente al 100% en el FONDO (z-0).
        // La imagen anterior se mantiene en FRENTE (z-10) y se desvanece suavemente hacia 0%.
        // Resultado: la nueva imagen se revela mágicamente por debajo sin ninguna caída de luz.
        
        let classes = "object-cover absolute inset-0 w-full h-full ";
        
        if (isCurrent) {
          classes += "opacity-100 z-0"; // Sólida en el fondo, lista para ser revelada
        } else if (isPrev) {
          classes += "opacity-0 z-10 transition-opacity duration-[3000ms] ease-in-out"; // Se desvanece lentamente
        } else {
          classes += "opacity-0 z-0"; // Oculta
        }

        return (
          <Image 
            key={imgIndex}
            src={`/images/${projectId}/${imgIndex}.webp`}
            alt={`${title} - vista ${imgIndex}`}
            fill
            className={classes}
          />
        );
      })}
      
      {availableImages.length === 0 && (
        <span className="text-xs text-gray-400 tracking-widest uppercase relative z-20">Imagen en proceso</span>
      )}
    </div>
  );
}