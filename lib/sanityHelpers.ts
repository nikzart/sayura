import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

/**
 * Generate optimized Sanity image URL with default dimensions
 */
export function getSanityImageUrl(
  image: SanityImageSource,
  width: number = 800,
  height?: number,
  quality: number = 90
): string {
  if (!image) return '';

  let builder = urlFor(image).width(width).quality(quality);

  if (height) {
    builder = builder.height(height).fit('crop');
  }

  return builder.url() || '';
}

/**
 * Get Sanity file URL (for videos, PDFs, etc.)
 */
export function getSanityFileUrl(fileRef: any): string | null {
  if (!fileRef || !fileRef.asset || !fileRef.asset._ref) return null;

  const [, id, extension] = fileRef.asset._ref.split('-');
  return `https://cdn.sanity.io/files/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${process.env.NEXT_PUBLIC_SANITY_DATASET}/${id}.${extension}`;
}

/**
 * Generate placeholder blur data URL for images
 */
export function getSanityBlurDataUrl(image: SanityImageSource): string {
  if (!image) return '';
  return urlFor(image).width(20).blur(10).url() || '';
}
