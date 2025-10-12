'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Card from './Card';

interface ProductCardEnhancedProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  slug: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimited?: boolean;
  colors?: string[];
}

export default function ProductCardEnhanced({
  name,
  category,
  image,
  slug,
  isNew = false,
  isBestSeller = false,
  isLimited = false,
  colors = [],
}: ProductCardEnhancedProps) {
  return (
    <Link href={`/products/${slug}`}>
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Card className="group cursor-pointer overflow-hidden">
          {/* Image Container */}
          <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
            <Image
              src={image}
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
              {category}
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
                        background: color.toLowerCase().includes('gold') ? '#a17713' :
                                   color.toLowerCase().includes('black') ? '#000' :
                                   color.toLowerCase().includes('white') || color.toLowerCase().includes('ivory') || color.toLowerCase().includes('champagne') ? '#f5f5f5' :
                                   color.toLowerCase().includes('blue') ? '#3b82f6' :
                                   color.toLowerCase().includes('red') || color.toLowerCase().includes('crimson') || color.toLowerCase().includes('wine') || color.toLowerCase().includes('burgundy') || color.toLowerCase().includes('maroon') ? '#dc2626' :
                                   color.toLowerCase().includes('green') || color.toLowerCase().includes('emerald') || color.toLowerCase().includes('teal') ? '#10b981' :
                                   color.toLowerCase().includes('pink') || color.toLowerCase().includes('rose') || color.toLowerCase().includes('coral') || color.toLowerCase().includes('peach') ? '#ec4899' :
                                   color.toLowerCase().includes('purple') || color.toLowerCase().includes('lavender') || color.toLowerCase().includes('plum') ? '#a855f7' :
                                   color.toLowerCase().includes('grey') || color.toLowerCase().includes('gray') || color.toLowerCase().includes('charcoal') ? '#6b7280' :
                                   color.toLowerCase().includes('beige') || color.toLowerCase().includes('camel') ? '#d4a574' :
                                   color.toLowerCase().includes('mint') ? '#6ee7b7' :
                                   '#9ca3af'
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
