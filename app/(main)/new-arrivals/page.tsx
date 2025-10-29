'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion } from 'framer-motion';
import NewArrivalsHero from '@/components/sections/NewArrivalsHero';
import FilterBar from '@/components/sections/FilterBar';
import FeaturedShowcase from '@/components/sections/FeaturedShowcase';
import SeasonalBanner from '@/components/sections/SeasonalBanner';
import ProductCardEnhanced from '@/components/ui/ProductCardEnhanced';
import { getNewArrivals, getFeaturedProducts } from '@/sanity/lib/fetch';

export default function NewArrivalsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [products, setProducts] = useState<any[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const [newProducts, featured] = await Promise.all([
          getNewArrivals(),
          getFeaturedProducts(),
        ]);
        setProducts(newProducts);
        setFeaturedProducts(featured.slice(0, 3));
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Filter by category
    if (activeCategory !== 'All') {
      filtered = filtered.filter(p => {
        const categoryName = typeof p.category === 'string' ? p.category : p.category?.name;
        return categoryName === activeCategory;
      });
    }

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'featured':
          return (b.badges?.isFeatured ? 1 : 0) - (a.badges?.isFeatured ? 1 : 0);
        default:
          return 0;
      }
    });

    return filtered;
  }, [products, activeCategory, sortBy]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading products...</p>
      </div>
    );
  }

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
                  key={product._id || product.id}
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
                  key={product._id || product.id}
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
