'use client';

import { motion } from 'framer-motion';
import ProductCard from '@/components/ui/ProductCard';
import Button from '@/components/ui/Button';
import { SAMPLE_PRODUCTS } from '@/lib/constants';

export default function NewProducts() {
  return (
    <section id="new-products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-lg mb-4">New Arrivals</h2>
            <p className="body-text text-gray-600 max-w-2xl mx-auto">
              Explore the latest additions to our collection, featuring exquisite designs and premium craftsmanship
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {SAMPLE_PRODUCTS.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button variant="secondary" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
}
