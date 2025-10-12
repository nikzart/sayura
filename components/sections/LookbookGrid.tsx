'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { COLLECTIONS } from '@/lib/constants';

export default function LookbookGrid() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Collections Grid - Magazine Style */}
        <div className="space-y-24">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-dense' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`relative aspect-[3/4] overflow-hidden ${
                  index % 2 === 1 ? 'lg:col-start-2' : ''
                }`}
              >
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Content */}
              <div
                className={`${
                  index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''
                }`}
              >
                <h2 className="heading-lg mb-4">{collection.title}</h2>
                <p className="body-text text-gray-600 mb-8">
                  {collection.description}
                </p>
                <Link href={`/collections/${collection.slug}`}>
                  <Button variant="primary" size="lg">
                    View Collection
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="mt-24 pt-24 border-t border-gray-200">
          <div className="text-center">
            <h3 className="heading-md mb-4">Can't Find What You're Looking For?</h3>
            <p className="body-text text-gray-600 mb-8 max-w-2xl mx-auto">
              Visit our stores to experience the full collection and receive personalized styling assistance
            </p>
            <Link href="/stores">
              <Button variant="secondary" size="lg">
                Find a Store
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
