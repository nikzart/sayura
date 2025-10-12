'use client';

import { useState, useMemo } from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import NewArrivalsHero from '@/components/sections/NewArrivalsHero';
import FilterBar from '@/components/sections/FilterBar';
import FeaturedShowcase from '@/components/sections/FeaturedShowcase';
import SeasonalBanner from '@/components/sections/SeasonalBanner';
import ProductCardEnhanced from '@/components/ui/ProductCardEnhanced';
import { SAMPLE_PRODUCTS } from '@/lib/constants';

export default function NewArrivalsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');

  // Get featured products for showcase
  const featuredProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter(p => p.isFeatured).slice(0, 3);
  }, []);

  // Get new arrivals only
  const newProducts = useMemo(() => {
    return SAMPLE_PRODUCTS.filter(p => p.isNew);
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let products = [...newProducts];

    // Filter by category
    if (activeCategory !== 'All') {
      products = products.filter(p => p.category === activeCategory);
    }

    // Sort products
    products.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'featured':
          return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
        default:
          return 0;
      }
    });

    return products;
  }, [newProducts, activeCategory, sortBy]);

  return (
    <>
      {/* Hero Section */}
      <NewArrivalsHero />

      {/* Featured Showcase */}
      {featuredProducts.length > 0 && (
        <FeaturedShowcase products={featuredProducts} />
      )}

      {/* Filter Bar */}
      <FilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />

      {/* Products Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Results Count */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mb-8"
          >
            <p className="text-sm text-gray-600">
              Showing <span className="font-medium">{filteredAndSortedProducts.length}</span> products
              {activeCategory !== 'All' && ` in ${activeCategory}`}
            </p>
          </motion.div>

          {/* Products Grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <ProductCardEnhanced {...product} />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Seasonal Banner - After first 8 products */}
      {filteredAndSortedProducts.length > 8 && <SeasonalBanner />}

      {/* Remaining Products */}
      {filteredAndSortedProducts.length > 8 && (
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredAndSortedProducts.slice(8).map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <ProductCardEnhanced {...product} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
