'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeaturedProduct {
  name: string;
  category: string;
  image: string;
  slug: string;
  shortDescription: string;
}

interface FeaturedShowcaseProps {
  products: FeaturedProduct[];
}

export default function FeaturedShowcase({ products }: FeaturedShowcaseProps) {
  if (products.length === 0) return null;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Minimal Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
                Editor's Choice
              </p>
              <h2 className="text-3xl md:text-4xl font-normal tracking-wide font-[family-name:var(--font-giordano)]">Featured This Month</h2>
            </div>
          </div>
        </motion.div>

        {/* Minimalist Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Large Featured Product - Spans 2 columns on desktop */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:row-span-2"
          >
            <Link href={`/products/${products[0].slug}`} className="group block h-full">
              <div className="relative h-full min-h-[500px] lg:min-h-[600px] overflow-hidden bg-gray-100">
                <Image
                  src={products[0].image}
                  alt={products[0].name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 66vw, 50vw"
                />

                {/* Minimal Badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-white/90 backdrop-blur-sm text-black text-xs tracking-wider uppercase px-4 py-2">
                    Featured
                  </span>
                </div>

                {/* Minimal Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8">
                  <div className="text-white">
                    <p className="text-xs tracking-widest uppercase opacity-70 mb-2">
                      {products[0].category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-normal tracking-wide mb-3 font-[family-name:var(--font-giordano)]">
                      {products[0].name}
                    </h3>
                    <div className="flex items-center gap-2 text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary Products - Minimal Cards */}
          {products.slice(1, 3).map((product, index) => (
            <motion.div
              key={product.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: (index + 1) * 0.2 }}
              viewport={{ once: true }}
              className="lg:row-span-1"
            >
              <Link href={`/products/${product.slug}`} className="group block h-full">
                <div className="relative h-full min-h-[280px] lg:min-h-[290px] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />

                  {/* Minimal Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                  {/* Clean Bottom Info */}
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-6">
                    <p className="text-xs tracking-wider uppercase text-gray-400 mb-1">
                      {product.category}
                    </p>
                    <h4 className="text-lg font-normal tracking-wide mb-2 group-hover:text-gold transition-colors">
                      {product.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs tracking-wide text-gray-600 group-hover:text-gold transition-colors">
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Optional: Show more link */}
        {products.length > 3 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/new-arrivals"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase hover:text-gold transition-colors"
            >
              View All Featured
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
