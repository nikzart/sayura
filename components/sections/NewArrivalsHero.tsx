'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function NewArrivalsHero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <Image
        src="/images/new-arrivals-hero.jpg"
        alt="SAYURA New Arrivals"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Small Label */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm tracking-widest-2 uppercase text-gold mb-4"
            >
              Spring Summer 2025
            </motion.p>

            {/* Main Heading */}
            <h1 className="heading-xl mb-6 text-shadow-lg">
              Latest Arrivals
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto text-shadow leading-relaxed">
              Discover the newest additions to our collection. Exquisite designs crafted for the modern woman.
            </p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex gap-8 justify-center mt-8 text-sm tracking-wider"
            >
              <div>
                <span className="text-gold font-medium">16+</span> New Pieces
              </div>
              <div className="border-l border-white/30 pl-8">
                <span className="text-gold font-medium">3</span> Limited Editions
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        aria-label="Scroll to content"
      >
        <span className="text-xs tracking-widest-2 uppercase">Explore</span>
        <ChevronDown size={24} />
      </motion.button>
    </section>
  );
}
