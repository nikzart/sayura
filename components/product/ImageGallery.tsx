'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import { getSanityImageUrl } from '@/lib/sanityHelpers';

interface ImageGalleryProps {
  images: any[]; // Can be string[] or Sanity image objects
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);

  // Handle both string URLs and Sanity image objects
  const getImageUrl = (image: any, width: number = 1200, height?: number) => {
    if (typeof image === 'string') {
      return image; // Static image path
    }
    return getSanityImageUrl(image, width, height); // Sanity image
  };

  const activeImage = images[activeIndex] || images[0];

  const openLightbox = () => {
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      {/* Main Gallery */}
      <div className="space-y-4">
        {/* Main Image */}
        <div
          className="relative aspect-[3/4] overflow-hidden bg-gray-100 cursor-zoom-in group"
          onClick={openLightbox}
          onMouseEnter={() => setIsZoomed(true)}
          onMouseLeave={() => setIsZoomed(false)}
        >
          <Image
            src={getImageUrl(activeImage, 1200, 1600)}
            alt={`${productName} - Image ${activeIndex + 1}`}
            fill
            className={`object-cover transition-transform duration-500 ${
              isZoomed ? 'scale-110' : 'scale-100'
            }`}
            sizes="(max-width: 768px) 100vw, 60vw"
            priority
          />

          {/* Zoom Indicator */}
          <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ZoomIn size={20} />
          </div>
        </div>

        {/* Thumbnail Gallery */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-3">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`relative aspect-square overflow-hidden bg-gray-100 rounded transition-all duration-300 ${
                  activeIndex === index
                    ? 'ring-2 ring-gold scale-105'
                    : 'hover:ring-2 hover:ring-gray-300'
                }`}
              >
                <Image
                  src={getImageUrl(image, 300, 300)}
                  alt={`${productName} - Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 25vw, 15vw"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-6 left-6 text-white text-sm tracking-wider z-10">
                {activeIndex + 1} / {images.length}
              </div>
            )}

            {/* Main Lightbox Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-[3/4]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={getImageUrl(activeImage, 1920, 2560)}
                alt={`${productName} - Full view`}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors"
                  aria-label="Previous image"
                >
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gold transition-colors"
                  aria-label="Next image"
                >
                  <svg
                    className="w-12 h-12"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
