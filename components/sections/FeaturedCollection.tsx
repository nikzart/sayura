'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { getSanityImageUrl } from '@/lib/sanityHelpers';

interface FeaturedCollectionProps {
  collections?: any[];
}

export default function FeaturedCollection({ collections = [] }: FeaturedCollectionProps) {
  // Use Sanity collections if available, otherwise fallback to static data
  const displayCollections = collections.length > 0 ? collections : [
    {
      title: 'Heritage Collection',
      description: 'Timeless elegance with traditional craftsmanship',
      slug: { current: 'heritage' },
      image: '/images/collections/heritage.jpg',
    },
    {
      title: 'Evening Luxe',
      description: 'Sophisticated pieces for special occasions',
      slug: { current: 'evening-luxe' },
      image: '/images/collections/evening.jpg',
    },
  ];

  const getImageUrl = (collection: any) => {
    if (typeof collection.image === 'string') {
      return collection.image;
    }
    return collection.image ? getSanityImageUrl(collection.image, 1200, 1500) : '';
  };

  const getCollectionSlug = (slug: string | { current: string }) => {
    return typeof slug === 'string' ? slug : slug.current;
  };

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
              <Link href="/collections">
                <Button variant="gold" size="lg">
                  Explore Collection
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayCollections.map((collection, index) => {
            const slug = getCollectionSlug(collection.slug);
            const imageUrl = getImageUrl(collection);

            return (
              <motion.div
                key={collection._id || slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link href={`/collections/${slug}`} className="group block">
                  <div className="relative aspect-[4/5] overflow-hidden mb-4">
                    <Image
                      src={imageUrl}
                      alt={collection.title}
                      fill
                      className="object-cover image-hover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <h3 className="heading-sm mb-2 group-hover:text-gold transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-gray-600 font-light mb-4">
                    {collection.description}
                  </p>
                  <span className="text-sm font-medium tracking-widest-2 uppercase link-underline">
                    Discover More
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
