'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function SeasonalBanner() {
  return (
    <section className="relative w-full h-[60vh] overflow-hidden">
      <Image
        src="/images/collections/featured-hero.jpg"
        alt="Spring Summer Collection"
        fill
        className="object-cover"
        sizes="100vw"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest-2 uppercase text-gold mb-4">
              Spring Summer 2025
            </p>
            <h2 className="text-4xl md:text-5xl font-normal tracking-wide mb-6 text-shadow-lg font-[family-name:var(--font-giordano)]">
              Seasonal Essentials
            </h2>
            <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto text-shadow mb-8">
              Discover the perfect pieces for the season ahead. Timeless designs crafted with exceptional attention to detail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gold" size="lg">
                Shop the Collection
              </Button>
              <Button variant="secondary" size="lg">
                View Lookbook
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
