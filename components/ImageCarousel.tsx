'use client';

import Image from 'next/image';
import { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  projectName: string;
}

export default function ImageCarousel({ images, projectName }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const getPrevIndex = () => (currentIndex - 1 + images.length) % images.length;
  const getNextIndex = () => (currentIndex + 1) % images.length;

  return (
    <div className="w-full py-8">
      {/* Carousel container */}
      <div className="relative flex items-center justify-center gap-2 md:gap-4">
        {/* Image précédente (masquée sur mobile si une seule image) */}
        {images.length > 1 && (
          <button
            onClick={prevImage}
            className="hidden sm:block relative w-1/5 md:w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer flex-shrink-0"
          >
            <Image
              src={images[getPrevIndex()]}
              alt={`${projectName} - Image précédente`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 25vw"
            />
          </button>
        )}

        {/* Image principale */}
        <div className="relative w-full sm:w-3/5 md:w-1/2 aspect-[4/3] rounded-xl overflow-hidden shadow-2xl flex-shrink-0">
          <Image
            src={images[currentIndex]}
            alt={`${projectName} - Image ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, 50vw"
          />
          
          {/* Boutons de navigation sur mobile */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                aria-label="Image précédente"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                aria-label="Image suivante"
              >
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Image suivante (masquée sur mobile) */}
        {images.length > 1 && (
          <button
            onClick={nextImage}
            className="hidden sm:block relative w-1/5 md:w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer flex-shrink-0"
          >
            <Image
              src={images[getNextIndex()]}
              alt={`${projectName} - Image suivante`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 25vw"
            />
          </button>
        )}
      </div>

      {/* Indicateurs */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-gray-800 w-8' 
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}