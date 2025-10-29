'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from './Card';
import { getSanityImageUrl } from '@/lib/sanityHelpers';
import { getColorValue } from '@/lib/utils';

interface ProductCardEnhancedProps {
  _id?: string;
  id?: number;
  name: string;
  category: string | { name: string; slug: { current: string } };
  price: number;
  image?: string;
  images?: any[];
  slug: string | { current: string };
  badges?: {
    isNew?: boolean;
    isBestSeller?: boolean;
    isLimited?: boolean;
  };
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimited?: boolean;
  colors?: string[];
}

export default function ProductCardEnhanced({
  name,
  category,
  image,
  images,
  slug,
  badges,
  isNew: isNewProp = false,
  isBestSeller: isBestSellerProp = false,
  isLimited: isLimitedProp = false,
  colors = [],
}: ProductCardEnhancedProps) {
  // Handle both old static data and new Sanity data
  const imageUrl = image || (images && images[0] ? getSanityImageUrl(images[0], 600, 800) : '');
  const productSlug = typeof slug === 'string' ? slug : slug.current;
  const categoryName = typeof category === 'string' ? category : category.name;

  // Handle badges from both formats
  const isNew = badges?.isNew ?? isNewProp;
  const isBestSeller = badges?.isBestSeller ?? isBestSellerProp;
  const isLimited = badges?.isLimited ?? isLimitedProp;
  return (
    <Link href={`/products/${productSlug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="group cursor-pointer overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <Image
              src={imageUrl}
              alt={name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
              {isNew && (
                <span className="bg-gold text-white text-xs font-medium tracking-widest uppercase px-3 py-1">
                  New
                </span>
              )}
              {isLimited && (
                <span className="bg-black text-white text-xs font-medium tracking-widest uppercase px-3 py-1">
                  Limited
                </span>
              )}
              {isBestSeller && (
                <span className="bg-white text-black text-xs font-medium tracking-widest uppercase px-3 py-1">
                  Bestseller
                </span>
              )}
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-sm font-medium tracking-widest-2 uppercase">
                View Details
              </span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <p className="text-xs text-gray-500 tracking-wider uppercase mb-1">
              {categoryName}
            </p>
            <h3 className="text-base font-medium tracking-wide mb-2 group-hover:text-gold transition-colors">
              {name}
            </h3>

            {/* Color Swatches */}
            {colors.length > 0 && (
              <div className="flex gap-2 items-center">
                <span className="text-xs text-gray-400">Colors:</span>
                <div className="flex gap-1">
                  {colors.slice(0, 3).map((color, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 rounded-full border border-gray-300"
                      style={{
                        background: getColorValue(color)
                      }}
                      title={color}
                    />
                  ))}
                  {colors.length > 3 && (
                    <span className="text-xs text-gray-400">+{colors.length - 3}</span>
                  )}
                </div>
              </div>
            )}
          </div>
        </Card>
      </motion.div>
    </Link>
  );
}
