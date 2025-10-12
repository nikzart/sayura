'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function BentoGridHero() {
  const items = [
    {
      id: 1,
      title: 'Heritage',
      subtitle: 'Timeless Traditions',
      image: '/images/bento/bento-1.jpg',
      href: '/collections/heritage',
      span: 'md:col-span-2 md:row-span-2', // Large
    },
    {
      id: 2,
      title: 'Evening Luxe',
      subtitle: 'Elegant Evenings',
      image: '/images/bento/bento-2.jpg',
      href: '/collections/evening-luxe',
      span: 'md:col-span-1 md:row-span-1', // Small
    },
    {
      id: 3,
      title: 'Contemporary',
      subtitle: 'Modern Classics',
      image: '/images/bento/bento-3.jpg',
      href: '/new-arrivals',
      span: 'md:col-span-1 md:row-span-1', // Small
    },
    {
      id: 4,
      title: 'Artisan Craft',
      subtitle: 'Handcrafted Details',
      image: '/images/bento/bento-4.jpg',
      href: '/about',
      span: 'md:col-span-2 md:row-span-1', // Wide
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
            Explore
          </p>
          <h2 className="text-3xl md:text-4xl font-normal tracking-wide font-[family-name:var(--font-giordano)]">
            Curated for You
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[280px]">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={item.span}
            >
              <Link href={item.href} className="group block h-full">
                <div className="relative h-full overflow-hidden bg-gray-900">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs tracking-widest uppercase text-gray-300 mb-1">
                      {item.subtitle}
                    </p>
                    <h3 className="text-2xl font-normal tracking-wide text-white mb-3 font-[family-name:var(--font-giordano)]">
                      {item.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>Discover</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
