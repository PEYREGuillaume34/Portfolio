"use client";

import Image from "next/image";
import { useState } from "react";

interface CarouselImage {
  src: string;
  caption?: string;
  isAnimated?: boolean;
  overlayGif?: string;
}

interface ImageCarouselProps {
  images: (string | CarouselImage)[]; // ✅ Accepte string OU objet
  projectName: string;
}

export default function ImageCarousel({
  images,
  projectName,
}: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  // ✅ Normaliser les images en objets
  const normalizedImages: CarouselImage[] = images.map((img) =>
    typeof img === "string" ? { src: img } : img
  );

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % normalizedImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + normalizedImages.length) % normalizedImages.length
    );
  };

  const getPrevIndex = () =>
    (currentIndex - 1 + normalizedImages.length) % normalizedImages.length;
  const getNextIndex = () => (currentIndex + 1) % normalizedImages.length;

  return (
    <div className="w-full py-8">
      {/* Carousel container */}
      <div className="relative flex items-center justify-center gap-2 md:gap-4">
        {/* Image précédente */}
        {normalizedImages.length > 1 && (
          <button
            onClick={prevImage}
            className="hidden sm:block relative w-1/5 md:w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer flex-shrink-0"
          >
            <Image
              src={normalizedImages[getPrevIndex()].src}
              alt={`${projectName} - Image précédente`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 25vw"
            />
          </button>
        )}

        {/* Image centrale + caption */}
        <div className="w-full sm:w-3/5 md:w-1/2 flex flex-col items-center flex-shrink-0">
          {/* Caption au-dessus de l'image */}
          {normalizedImages[currentIndex].caption && (
            <p className="mb-4 text-center text-base md:text-lg font-medium text-gray-700 px-4">
              {normalizedImages[currentIndex].caption}
            </p>
          )}

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
  {/* Si c'est une image animée, créer le fond défilant */}
  {normalizedImages[currentIndex].isAnimated ? (
    <>
      {/* Conteneur du fond défilant */}
      <div className="absolute inset-0 flex">
        <div className="animate-scroll-horizontal flex">
          <img
            src={normalizedImages[currentIndex].src}
            alt="Fond défilant"
            className="h-full min-w-full object-cover"
          />
          <img
            src={normalizedImages[currentIndex].src}
            alt="Fond défilant copie"
            className="h-full min-w-full object-cover"
          />
        </div>
      </div>
      
      {/* GIF de l'oiseau par-dessus */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <img
          src={normalizedImages[currentIndex].overlayGif!}
          alt="Animation"
          className="w-60 h-60 object-contain"
        />
      </div>
    </>
  ) : (
    /* Image normale sans animation */
    <Image
      src={normalizedImages[currentIndex].src}
      alt={`${projectName} - Image ${currentIndex + 1}`}
      fill
      className="object-cover"
      priority
      sizes="(max-width: 640px) 100vw, (max-width: 768px) 60vw, 50vw"
    />
  )}

            {/* Boutons mobile */}
            {normalizedImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="sm:hidden absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                  aria-label="Image précédente"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7"></path>
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="sm:hidden absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
                  aria-label="Image suivante"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </>
            )}
          </div>
        </div>

        {/* Image suivante */}
        {normalizedImages.length > 1 && (
          <button
            onClick={nextImage}
            className="hidden sm:block relative w-1/5 md:w-1/4 aspect-[4/3] rounded-lg overflow-hidden opacity-50 hover:opacity-75 transition-opacity cursor-pointer flex-shrink-0"
          >
            <Image
              src={normalizedImages[getNextIndex()].src}
              alt={`${projectName} - Image suivante`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 20vw, 25vw"
            />
          </button>
        )}
      </div>

      {/* Indicateurs */}
      {normalizedImages.length > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {normalizedImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-800 w-8"
                  : "bg-gray-300 w-2 hover:bg-gray-400"
              }`}
              aria-label={`Aller à l'image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
