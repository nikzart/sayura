# Sanity CMS Integration Guide for SAYURA

## Overview

Sanity CMS has been successfully integrated into the SAYURA website to manage all content dynamically. This document provides a complete guide to using and maintaining the CMS.

---

## Quick Start

### Accessing Sanity Studio

1. **Local Development**: http://localhost:3000/studio
2. **Login**: Use your Sanity credentials to access the Studio

### Environment Variables

The following environment variables are configured in `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=7x4tky5p
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk9PgNb...
```

**⚠️ Important**: The `.env.local` file is gitignored and contains sensitive credentials.

---

## Content Schemas

### 1. Hero Section (`heroSection`)

Manages the main hero section on the homepage.

**Fields:**
- `title` - Main heading (e.g., "TIMELESS ELEGANCE")
- `subtitle` - Descriptive text below title
- `ctaText` - Button text (e.g., "EXPLORE")
- `ctaLink` - Button destination URL
- `backgroundVideo` - Video file for background
- `backgroundImage` - Fallback image
- `posterImage` - Image shown before video loads

**Usage:** Create ONE hero section document. The homepage will automatically use it.

---

### 2. Collections (`collection`)

Manages bridal collections (Lehenga, Saree, Gown).

**Fields:**
- `title` - Collection name
- `slug` - URL-friendly identifier
- `description` - Short description
- `longDescription` - Detailed rich text content
- `image` - Main collection image (with hotspot)
- `gallery` - Additional images
- `order` - Display order (0, 1, 2, etc.)
- `isActive` - Toggle visibility

**Usage:**
- Create one document per collection
- Set `order` to control display sequence
- Use hotspot on images to choose focus point

---

### 3. Products (`product`)

Manages showcase products.

**Fields:**
- `name` - Product name
- `slug` - URL identifier
- `category` - Reference to category document
- `price` - Price in INR
- `images` - Array of product images (with hotspot)
- `colors` - Available color options
- `badges` - Object containing:
  - `isNew` - Show "New" badge
  - `isFeatured` - Feature this product
  - `isBestSeller` - Show "Best Seller" badge
  - `isLimited` - Show "Limited Edition" badge
- `shortDescription` - Brief description
- `description` - Full rich text description
- `craftsmanship` - Details about how it's made
- `styling` - Styling tips
- `care` - Care instructions
- `dateAdded` - Date product was added

**Usage:**
- Create as many products as needed
- Use badges to control where products appear
- Fill all tabs (description, craftsmanship, styling, care) for complete product pages

---

### 4. Categories (`category`)

Product categories (Dresses, Sarees, Sets, etc.).

**Fields:**
- `name` - Category name
- `slug` - URL identifier
- `description` - Category description

**Usage:**
- Create categories before adding products
- Products reference these categories

---

### 5. Store Locations (`storeLocation`)

Manages physical store information.

**Fields:**
- `name` - Store name
- `address` - Full address
- `phone` - Contact number
- `email` - Store email
- `hours` - Operating hours
- `coordinates` - Object with `lat` and `lng`
- `image` - Store photo

**Usage:**
- Add one document per store location
- Coordinates are used for map integration

---

### 6. About Sections (`aboutSection`)

Manages content sections on the About page.

**Fields:**
- `title` - Section identifier
- `heading` - Display heading
- `content` - Rich text content
- `image` - Section image
- `imagePosition` - Left, Right, or Full Width
- `order` - Display order

**Usage:**
- Create multiple sections for the About page
- Control layout with `imagePosition`
- Set `order` to sequence sections

---

### 7. Site Settings (`siteSettings`)

Global website settings.

**Fields:**
- `brandName` - Your brand name
- `logo` - Full logo image
- `logoMinimized` - Compact logo for scrolled header
- `tagline` - Brand tagline
- `contactEmail` - Contact email
- `contactPhone` - Contact phone
- `socialLinks` - Object with Instagram, Facebook, Pinterest, Twitter URLs
- `seo` - Default SEO settings object

**Usage:**
- Create ONE site settings document
- Update social links and contact info here
- Changes apply site-wide

---

### 8. Instagram Posts (`instagramPost`)

Manages Instagram feed display.

**Fields:**
- `image` - Post image
- `caption` - Post caption
- `url` - Link to Instagram post
- `order` - Display order
- `isActive` - Show/hide on website

**Usage:**
- Add posts you want to feature
- Set `order` to control display sequence
- Toggle `isActive` to temporarily hide posts

---

## Using Sanity Data in Components

### Fetching Data

Use the provided fetch functions in `sanity/lib/fetch.ts`:

```typescript
import { getHeroSection, getCollections, getProducts } from '@/sanity/lib/fetch';

// In a Server Component
export default async function HomePage() {
  const heroData = await getHeroSection();
  const collections = await getCollections();
  const products = await getProducts();

  return (
    // Use the data...
  );
}
```

### Image Optimization

Use the `urlFor` helper to optimize images:

```typescript
import { urlFor } from '@/sanity/lib/image';

// Generate optimized image URL
const imageUrl = urlFor(sanityImage)
  .width(800)
  .height(600)
  .fit('crop')
  .url();

// Or use with Next.js Image component
<Image
  src={urlFor(sanityImage).width(800).height(600).url()}
  alt="Description"
  width={800}
  height={600}
/>
```

### Available Queries

All queries are in `sanity/lib/queries.ts` and exported as functions in `sanity/lib/fetch.ts`:

- `getHeroSection()` - Get hero section data
- `getCollections()` - Get all active collections
- `getCollectionBySlug(slug)` - Get specific collection
- `getProducts()` - Get all products
- `getProductBySlug(slug)` - Get specific product
- `getNewArrivals()` - Get products with isNew badge
- `getFeaturedProducts()` - Get featured products
- `getProductsByCategory(categorySlug)` - Get products by category
- `getRelatedProducts(categorySlug, currentSlug)` - Get related products
- `getCategories()` - Get all categories
- `getStoreLocations()` - Get all store locations
- `getAboutSections()` - Get about page sections
- `getSiteSettings()` - Get global settings
- `getInstagramPosts()` - Get Instagram feed

---

## Content Management Workflow

### Adding a New Collection

1. Go to http://localhost:3000/studio
2. Click "Collection" in the left sidebar
3. Click "Create new Collection"
4. Fill in all fields:
   - Title: "Bridal Lehenga"
   - Click "Generate" next to Slug
   - Add description
   - Upload featured image (use hotspot to set focus)
   - Set order number (0 for first, 1 for second, etc.)
   - Check "Active" checkbox
5. Click "Publish"

### Adding a New Product

1. **First, ensure category exists**
2. Go to "Product" in Studio
3. Click "Create new Product"
4. Fill in all fields:
   - Name, generate slug
   - Select category from dropdown
   - Enter price
   - Upload multiple images
   - Add color options (one per line)
   - Check relevant badges
   - Fill all description tabs
5. Click "Publish"

### Updating Hero Section

1. Go to "Hero Section" in Studio
2. Should only be ONE document - click to edit
3. Update title, subtitle, CTA text
4. Upload new video or images if needed
5. Click "Publish"

### Managing Store Locations

1. Go to "Store Location" in Studio
2. Create or edit a store
3. Fill in address, contact info
4. Add coordinates (use Google Maps to find lat/lng)
5. Upload store photo
6. Click "Publish"

---

## Image Best Practices

### Image Sizes

- **Hero Images**: 1920x1080px or larger
- **Collection Images**: 1200x1600px (3:4 ratio)
- **Product Images**: 1200x1600px (3:4 ratio)
- **Store Images**: 1200x800px (3:2 ratio)
- **Instagram Posts**: 1080x1080px (square)

### Format

- Use JPEG for photographs
- Use PNG for graphics with transparency
- Sanity will automatically optimize and serve WebP when supported

### Hotspot

- Always use hotspot feature for important images
- This ensures the focal point is preserved when images are cropped

---

## Development Workflow

### Local Development

```bash
# Start Next.js dev server (includes Sanity Studio)
npm run dev

# Access website: http://localhost:3000
# Access Sanity Studio: http://localhost:3000/studio
```

### Deploying

When deploying to production:

1. Ensure environment variables are set on hosting platform
2. Build the project: `npm run build`
3. Studio will be available at: `yourdomain.com/studio`

---

## Migrating from Static Data

The old static data is still in `lib/constants.ts`. To fully migrate:

1. **Create all categories in Sanity** (match existing categories)
2. **Create collections** with data from `COLLECTIONS` constant
3. **Create products** using data from `SAMPLE_PRODUCTS` constant
4. **Update components** to use Sanity fetch functions instead of importing constants
5. **Upload all images** from `/public/images` to Sanity
6. **Update image references** in components to use Sanity images

### Migration Steps (Example: Hero Section)

**Before:**
```typescript
// components/sections/Hero.tsx
<h1>TIMELESS ELEGANCE</h1>
```

**After:**
```typescript
// components/sections/Hero.tsx
import { getHeroSection } from '@/sanity/lib/fetch';

export default async function Hero() {
  const heroData = await getHeroSection();

  return <h1>{heroData.title}</h1>;
}
```

---

## Troubleshooting

### Studio Not Loading

- Check if `npm run dev` is running
- Verify `.env.local` has correct credentials
- Clear browser cache and reload

### Images Not Showing

- Ensure `cdn.sanity.io` is in `next.config.ts` domains
- Check if image fields have data in Studio
- Verify `urlFor()` function is used correctly

### Content Not Updating

- Make sure you clicked "Publish" in Studio (not just save)
- In development, Next.js may cache data - restart dev server
- Check if filters (like `isActive == true`) might be hiding content

### Credentials Issues

- Verify project ID matches in `.env.local` and `sanity.config.ts`
- Ensure API token has correct permissions
- Check dataset name is "production"

---

## Next Steps

1. **Populate Content**: Add all your collections, products, and store info in Sanity Studio
2. **Migrate Components**: Update components one by one to fetch from Sanity instead of constants
3. **Test Thoroughly**: Verify all pages work with Sanity data
4. **Remove Static Data**: Once fully migrated, remove unused data from `lib/constants.ts`
5. **Deploy**: Push changes to production

---

## Resources

- **Sanity Documentation**: https://www.sanity.io/docs
- **GROQ Query Guide**: https://www.sanity.io/docs/groq
- **Next.js Integration**: https://www.sanity.io/docs/next-js
- **Image Pipeline**: https://www.sanity.io/docs/image-urls

---

**Last Updated**: October 30, 2025
**Sanity Project ID**: 7x4tky5p
**Dataset**: production
