import Image from 'next/image';
import Link from 'next/link';
import Card from './Card';
import { getSanityImageUrl } from '@/lib/sanityHelpers';

interface ProductCardProps {
  _id?: string;
  id?: number;
  name: string;
  category: string | { name: string; slug: { current: string } };
  price: number;
  image?: string;
  images?: any[];
  slug: string | { current: string };
}

export default function ProductCard({
  name,
  category,
  image,
  images,
  slug,
}: ProductCardProps) {
  // Handle both old static data and new Sanity data
  const imageUrl = image || (images && images[0] ? getSanityImageUrl(images[0], 600, 800) : '');
  const productSlug = typeof slug === 'string' ? slug : slug.current;
  const categoryName = typeof category === 'string' ? category : category.name;

  return (
    <Link href={`/products/${productSlug}`}>
      <Card className="group cursor-pointer">
        {/* Image Container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={name}
            fill
            className="object-cover image-hover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white text-sm font-medium tracking-widest-2 uppercase">
              View Details
            </span>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="text-lg font-medium tracking-wide uppercase mb-2">
            {name}
          </h3>
          <p className="text-sm text-gray-600 font-light">
            {categoryName}
          </p>
        </div>
      </Card>
    </Link>
  );
}
