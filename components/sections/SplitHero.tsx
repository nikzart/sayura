'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function SplitHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative h-[60vh] lg:h-[80vh] overflow-hidden"
          >
            <Image
              src="/images/heroes/split-hero.jpg"
              alt="SAYURA Collection"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
            viewport={{ once: true }}
            className="p-8 lg:p-16 xl:p-24"
          >
            <div className="max-w-lg">
              {/* Small Label */}
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">
                New Season
              </p>

              {/* Heading */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-wide mb-6 leading-tight font-[family-name:var(--font-giordano)]">
                Redefining Luxury
              </h2>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                Discover our carefully curated collection where traditional craftsmanship meets contemporary elegance. Each piece tells a story of timeless beauty.
              </p>

              {/* CTA */}
              <Link
                href="/collections"
                className="inline-flex items-center gap-3 text-sm tracking-widest uppercase hover:text-gold transition-colors group"
              >
                <span>Explore Collections</span>
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
