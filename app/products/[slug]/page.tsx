import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Heart, MapPin, Share2 } from 'lucide-react';
import { SAMPLE_PRODUCTS } from '@/lib/constants';
import { getProductBySlug, getRelatedProducts, formatPrice } from '@/lib/utils';
import ImageGallery from '@/components/product/ImageGallery';
import BreadcrumbNav from '@/components/product/BreadcrumbNav';
import ProductBadges from '@/components/product/ProductBadges';
import ColorSelector from '@/components/product/ColorSelector';
import ProductTabs from '@/components/product/ProductTabs';
import RelatedProducts from '@/components/product/RelatedProducts';
import Button from '@/components/ui/Button';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug, SAMPLE_PRODUCTS);

  if (!product) {
    return {
      title: 'Product Not Found | SAYURA',
    };
  }

  return {
    title: `${product.name} | SAYURA`,
    description: product.shortDescription,
  };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug, SAMPLE_PRODUCTS);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(product.id, product.category, SAMPLE_PRODUCTS, 4);

  return (
    <div className="min-h-screen">
      {/* Product Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <BreadcrumbNav category={product.category} productName={product.name} />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left: Image Gallery (60%) */}
            <div className="lg:col-span-3">
              <ImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Right: Product Details (40%) */}
            <div className="lg:col-span-2">
              {/* Badges */}
              <ProductBadges
                isNew={product.isNew}
                isBestSeller={product.isBestSeller}
                isLimited={product.isLimited}
                className="mb-6"
              />

              {/* Product Name */}
              <h1 className="text-3xl md:text-4xl font-normal tracking-wide mb-3 font-[family-name:var(--font-giordano)]">
                {product.name}
              </h1>

              {/* Category */}
              <p className="text-sm text-gray-600 tracking-wider uppercase mb-6">
                {product.category}
              </p>

              {/* Short Description */}
              <p className="text-gray-700 leading-relaxed mb-8">
                {product.shortDescription}
              </p>

              {/* Price */}
              <div className="mb-8 pb-8 border-b border-gray-200">
                <p className="text-3xl font-medium text-gold">
                  {formatPrice(product.price)}
                </p>
              </div>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <ColorSelector colors={product.colors} />
              )}

              {/* Product Tags */}
              {product.tags && product.tags.length > 0 && (
                <div className="mb-8">
                  <label className="block text-sm tracking-wide uppercase text-gray-700 mb-3">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {product.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs tracking-wide uppercase"
                      >
                        {tag.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="space-y-4 mb-8">
                <Link href="/stores" className="block">
                  <Button variant="gold" size="lg" className="w-full flex items-center justify-center gap-2">
                    <MapPin size={20} />
                    Visit Our Stores
                  </Button>
                </Link>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300 text-sm tracking-widest uppercase">
                  <Heart size={20} />
                  Add to Wishlist
                </button>
              </div>

              {/* Product Features */}
              <div className="space-y-4 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Handcrafted with premium materials</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Available at all SAYURA stores</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Personal styling consultation available</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-gold mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Made with sustainable practices</span>
                </div>
              </div>

              {/* Share Button */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gold transition-colors">
                  <Share2 size={18} />
                  <span className="tracking-wide uppercase">Share This Product</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Tabs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-5xl">
          <ProductTabs category={product.category} />
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <RelatedProducts products={relatedProducts} />
          </div>
        </section>
      )}
    </div>
  );
}

// Generate static params for all products
export async function generateStaticParams() {
  return SAMPLE_PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}
