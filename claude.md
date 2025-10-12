# SAYURA - Luxury Fashion E-commerce Website

## Project Overview

SAYURA is a premium luxury fashion e-commerce website built with Next.js 15, featuring a sophisticated design system with custom typography, dynamic animations, and comprehensive product showcase capabilities.

**Repository**: https://github.com/nikzart/sayura.git
**Author**: nikzart (pareekshith1000@gmail.com)
**Tech Stack**: Next.js 15, TypeScript, Tailwind CSS, Framer Motion
**Dev Server**: http://localhost:3001

---

## Recent Updates

### Typography Enhancement
- **Custom Font Integration**: Giordano Gold Serif font applied to all titles and headings throughout the site
- **Location**: `/public/fonts/Giordano Gold Serif.ttf`
- **Implementation**:
  - Added `@font-face` in `app/globals.css`
  - CSS variable `--font-giordano` for easy reference
  - Applied to all heading classes (`.heading-xl`, `.heading-lg`, `.heading-md`, `.heading-sm`)
  - Manually applied to 11 components using direct Tailwind classes

### Dynamic Header Logo
- **Logo Switching**: Header dynamically switches between full and minimized logo on scroll
  - At top: `/sayura-logo.svg` (full logo with gold design)
  - When scrolled: `/sayura-logo-minimized.svg` (text-only)
- **Smooth Transitions**:
  - 0.6s fade out/in with custom easing curve `[0.4, 0, 0.2, 1]`
  - Subtle scale animation (0.98 to 1)
  - `AnimatePresence` with `mode="wait"` for crossfade effect

### Hero Section Enhancements
- **Multiple Hero Variants**:
  - Main Hero: Video background support with mute/unmute controls
  - SplitHero: 50/50 image/content layout
  - BentoGridHero: Asymmetric grid with varying card sizes
  - ParallaxHero: Cinematic parallax scrolling effect

### Product System
- **Product Detail Pages**: Complete dynamic routing with `[slug]` parameter
- **7 Product Components**:
  - BreadcrumbNav: Navigation breadcrumbs
  - ProductBadges: NEW/LIMITED/BESTSELLER badges
  - ColorSelector: Interactive color swatches
  - ImageGallery: Main image + thumbnails with lightbox
  - ProductTabs: Description, Craftsmanship, Styling, Care & Size
  - RelatedProducts: "You May Also Like" section
- **Enhanced ProductCard**: Hover effects, quick view integration

### Page Enhancements
- **New Arrivals Page**: Full page with FilterBar and SeasonalBanner
- **Dedicated Hero Sections**: ContactHero, StoresHero, CollectionsHero, AboutHero
- **About Hero**: Updated to use heritage collection image for better thematic fit

---

## Project Structure

```
sayura/
├── app/
│   ├── about/page.tsx
│   ├── collections/page.tsx
│   ├── contact/page.tsx
│   ├── new-arrivals/page.tsx
│   ├── products/[slug]/page.tsx        # Dynamic product routes
│   ├── stores/page.tsx
│   ├── globals.css                     # Global styles + Giordano Gold font
│   ├── layout.tsx                      # Root layout with fonts
│   └── page.tsx                        # Homepage
├── components/
│   ├── layout/
│   │   ├── Header.tsx                  # Dynamic logo switching
│   │   └── Footer.tsx
│   ├── product/
│   │   ├── BreadcrumbNav.tsx
│   │   ├── ColorSelector.tsx
│   │   ├── ImageGallery.tsx
│   │   ├── ProductBadges.tsx
│   │   ├── ProductTabs.tsx
│   │   └── RelatedProducts.tsx
│   ├── sections/
│   │   ├── Hero.tsx                    # Video hero with controls
│   │   ├── SplitHero.tsx
│   │   ├── BentoGridHero.tsx
│   │   ├── ParallaxHero.tsx
│   │   ├── FeatureGrid.tsx
│   │   ├── FeaturedShowcase.tsx        # Bento grid layout
│   │   ├── FeaturedCollection.tsx
│   │   ├── NewArrivalsHero.tsx
│   │   ├── SeasonalBanner.tsx
│   │   ├── FilterBar.tsx
│   │   ├── InstagramFeed.tsx
│   │   └── Newsletter.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Modal.tsx
│       └── ProductCardEnhanced.tsx
├── lib/
│   ├── constants.ts                    # Product data, navigation
│   └── utils.ts                        # Helper functions
├── public/
│   ├── fonts/
│   │   └── Giordano Gold Serif.ttf
│   ├── images/
│   │   ├── about/                      # About page images
│   │   ├── bento/                      # Bento grid images
│   │   ├── collections/                # Collection images
│   │   ├── featured/                   # Featured products
│   │   ├── heroes/                     # Hero section images
│   │   ├── instagram/                  # Social feed
│   │   └── products/                   # Product images
│   ├── videos/
│   │   └── hero-video.mp4
│   ├── sayura-logo.svg                 # Full logo
│   └── sayura-logo-minimized.svg       # Minimized logo
└── luxury-fashion-design-system.md     # Design system documentation
```

---

## Key Features

### 1. Custom Typography System
- **Giordano Gold**: Luxury serif font for all titles
- **Bodoni Moda**: Fallback elegant serif from Google Fonts
- **Playfair Display**: Serif for body content
- **Montserrat**: Sans-serif for UI elements

### 2. Dynamic Animations
- **Framer Motion**: Used throughout for smooth transitions
- **Scroll Animations**: Parallax effects and fade-ins
- **Hover Effects**: Image zoom, card lift, underline animations
- **Logo Transition**: Smooth crossfade with scale on header scroll

### 3. Product Features
- **Dynamic Routes**: `/products/[slug]` with metadata generation
- **Image Gallery**: Lightbox modal with keyboard navigation
- **Color Selection**: Interactive swatches with color mapping
- **Related Products**: Automatic suggestions from same category
- **Breadcrumb Navigation**: Contextual navigation path

### 4. Layout Patterns
- **Hero Sections**: Multiple variants (video, split, bento, parallax)
- **Bento Grid**: Asymmetric grid layouts for visual interest
- **Split Layouts**: 50/50 image/content combinations
- **Container System**: Consistent max-width and padding

### 5. Responsive Design
- **Mobile-First**: Breakpoints at 640px, 768px, 1024px, 1280px
- **Adaptive Navigation**: Hamburger menu on mobile, full nav on desktop
- **Flexible Grids**: 1 column mobile → 2 columns tablet → 3-4 columns desktop

---

## Component Breakdown

### Header (`components/layout/Header.tsx`)
```typescript
- Dynamic logo switching based on scroll position
- Smooth fade transitions (0.6s with custom easing)
- Mobile menu drawer with Framer Motion
- Transparent on top, solid white when scrolled
```

### Hero Section (`components/sections/Hero.tsx`)
```typescript
- Video background support with poster image
- Mute/unmute controls
- Scroll indicator with animated chevron
- Giordano Gold font for title
```

### Product Page (`app/products/[slug]/page.tsx`)
```typescript
- 60/40 split: Image gallery / Product info
- Dynamic breadcrumbs
- Color selector with hex mapping
- Tabbed content: Description, Craftsmanship, Styling, Care
- Related products section
- Note: Needs async params fix for Next.js 15
```

### Bento Grid Hero (`components/sections/BentoGridHero.tsx`)
```typescript
- Asymmetric grid: Large (2x2), Small (1x1), Wide (2x1)
- Heritage, Evening, Contemporary, Artisan themes
- Dark gradient overlays on images
- Hover reveal for "Discover" CTAs
```

---

## Known Issues

### 1. FilterBar SSR Error
**Location**: `components/sections/FilterBar.tsx:46`
**Issue**: `window is not defined`
**Cause**: Using `window.innerWidth` during server-side rendering
**Fix Needed**: Add `typeof window !== 'undefined'` check or use `useEffect`

### 2. Product Page Async Params
**Location**: `app/products/[slug]/page.tsx:37`
**Issue**: Next.js 15 requires awaiting dynamic route params
**Fix Needed**:
```typescript
// Current
const product = getProductBySlug(params.slug, SAMPLE_PRODUCTS);

// Should be
const { slug } = await params;
const product = getProductBySlug(slug, SAMPLE_PRODUCTS);
```

### 3. Missing Hero Video
**Location**: `/public/videos/hero-video.mp4`
**Issue**: 404 errors in console
**Fix Needed**: Add actual video file or update Hero component to use poster image only

---

## Utility Functions

### `lib/utils.ts`
```typescript
// Get product by slug
getProductBySlug(slug: string, products: any[])

// Get related products
getRelatedProducts(productId, category, products, limit = 4)

// Format price
formatPrice(price: number): string

// Color name to hex mapping
getColorValue(colorName: string): string
```

### `lib/constants.ts`
```typescript
// Navigation links
NAV_LINKS: Array<{href: string, label: string}>

// Sample products data
SAMPLE_PRODUCTS: Array<Product>
```

---

## Design System

### Colors
```css
--gold: #a17713;           /* Primary accent */
--black: #000000;          /* Primary text */
--white: #FFFFFF;          /* Backgrounds */
--gray-[50-900]: ...       /* Neutrals */
```

### Typography Classes
```css
.heading-xl    /* 4xl → 5xl → 6xl | Giordano Gold */
.heading-lg    /* 3xl → 4xl → 5xl | Giordano Gold */
.heading-md    /* 2xl → 3xl → 4xl | Giordano Gold */
.heading-sm    /* xl → 2xl | Giordano Gold */
```

### Spacing
```css
.section-padding    /* py-16 md:py-24 lg:py-32 */
.container-custom   /* max-w-7xl mx-auto px-6 lg:px-12 */
```

### Animations
```css
/* Standard transitions */
duration-300        /* Modals, dropdowns */
duration-500        /* Carousels, page transitions */
duration-600        /* Logo switching */

/* Easing curves */
ease-in-out
cubic-bezier(0.4, 0, 0.2, 1)  /* Custom smooth */
```

---

## Development Workflow

### Running the Project
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run lint         # Run ESLint
```

### Adding New Components
1. Create in `/components/[category]/ComponentName.tsx`
2. Use TypeScript interfaces for props
3. Apply Giordano Gold font to titles via `font-[family-name:var(--font-giordano)]`
4. Add Framer Motion for animations
5. Ensure mobile responsiveness

### Adding New Products
1. Add product object to `SAMPLE_PRODUCTS` in `lib/constants.ts`
2. Include: id, name, slug, price, category, images, colors, etc.
3. Images should be in `/public/images/products/`
4. Product page will auto-generate at `/products/[slug]`

### Updating Images
1. Place images in appropriate `/public/images/` subdirectory
2. Use Next.js `<Image>` component with `fill` or explicit dimensions
3. Add `priority` for above-fold images
4. Use `loading="lazy"` for below-fold images

---

## Git Workflow

### Last Commit
```
Commit: ba914b567c31d6598272316aca28f144ac439c7f
Author: nikzart <pareekshith1000@gmail.com>
Message: Enhance SAYURA website with premium features and design improvements

- Integrated custom Giordano Gold Serif font across all titles and headings
- Added comprehensive product detail pages with image galleries, color selectors, and tabbed content
- Implemented multiple hero section variants: split layout, bento grid, and parallax effects
- Enhanced home page with diversified visual sections and improved layout
- Added new arrivals page with filtering capabilities
- Created dedicated hero sections for contact, stores, collections, and about pages
```

### Branch
- **Main branch**: `main`
- **Origin**: https://github.com/nikzart/sayura.git

---

## Performance Considerations

### Current Optimizations
- Next.js Image component with automatic optimization
- Lazy loading for below-fold images
- Code splitting by route
- Framer Motion animations optimized with `layoutId`
- Font display: swap for custom fonts

### Future Improvements
1. Convert large images to WebP format
2. Implement image CDN (Cloudinary, ImageKit)
3. Add service worker for offline capabilities
4. Optimize Framer Motion bundle size
5. Implement ISR (Incremental Static Regeneration) for product pages

---

## Accessibility

### Current Implementation
- Semantic HTML structure
- Alt text on all images
- Keyboard navigation support
- Focus visible states
- ARIA labels on interactive elements
- Mobile menu with proper focus trapping

### Areas for Improvement
- Add skip navigation link
- Ensure color contrast meets WCAG AA
- Add live regions for dynamic content updates
- Screen reader testing with NVDA/JAWS

---

## Next Steps

### Immediate Tasks
1. Fix FilterBar SSR error with window check
2. Update product page to use async params
3. Add actual hero video file or fallback
4. Test mobile menu on various devices

### Feature Roadmap
1. Shopping cart functionality
2. User authentication
3. Wishlist feature
4. Search functionality
5. Product filtering and sorting
6. Checkout flow
7. Order management
8. Admin panel

---

## Support & Documentation

- **Design System**: See `luxury-fashion-design-system.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs

---

**Last Updated**: October 12, 2025
**Version**: 1.0.0
**Maintained by**: nikzart
