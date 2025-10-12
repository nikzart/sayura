'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      <Image
        src="/images/about/about-hero.jpg"
        alt="SAYURA - Our Story"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-xl mb-6 text-shadow-lg">
              Our Story
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto text-shadow leading-relaxed">
              Where heritage meets innovation, and every piece tells a story of passion, dedication, and timeless beauty
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
