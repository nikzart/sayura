'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function FeaturedCollection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Large Featured Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative aspect-[16/9] md:aspect-[21/9] mb-16 overflow-hidden"
        >
          <Image
            src="/images/collections/featured-hero.jpg"
            alt="Spring Summer 2025 Collection"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="heading-lg mb-6 text-shadow-lg">
                Spring Summer 2025
              </h2>
              <p className="text-lg md:text-xl font-light mb-8 max-w-xl mx-auto text-shadow">
                Ethereal silhouettes meet contemporary design in our latest collection
              </p>
              <Button variant="gold" size="lg">
                Explore Collection
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Collection 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/collections/heritage" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <Image
                  src="/images/collections/heritage.jpg"
                  alt="Heritage Collection"
                  fill
                  className="object-cover image-hover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="heading-sm mb-2 group-hover:text-gold transition-colors">
                Heritage Collection
              </h3>
              <p className="text-sm text-gray-600 font-light mb-4">
                Timeless elegance with traditional craftsmanship
              </p>
              <span className="text-sm font-medium tracking-widest-2 uppercase link-underline">
                Discover More
              </span>
            </Link>
          </motion.div>

          {/* Collection 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link href="/collections/evening-luxe" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden mb-4">
                <Image
                  src="/images/collections/evening.jpg"
                  alt="Evening Luxe Collection"
                  fill
                  className="object-cover image-hover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="heading-sm mb-2 group-hover:text-gold transition-colors">
                Evening Luxe
              </h3>
              <p className="text-sm text-gray-600 font-light mb-4">
                Sophisticated pieces for special occasions
              </p>
              <span className="text-sm font-medium tracking-widest-2 uppercase link-underline">
                Discover More
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
