'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ParallaxHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  return (
    <section ref={containerRef} className="relative h-[70vh] overflow-hidden bg-black">
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: 'url(/images/heroes/parallax-hero.jpg)',
          }}
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm tracking-widest-2 uppercase text-gold mb-4">
              Experience Luxury
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide mb-6 leading-tight max-w-3xl mx-auto font-[family-name:var(--font-giordano)]">
              Where Tradition Meets Innovation
            </h2>
            <p className="text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto mb-8 opacity-90">
              Every thread tells a story. Every design celebrates heritage.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-sm tracking-widest uppercase hover:text-gold transition-colors group"
            >
              <span>Discover Our Story</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
