# Image Assets Guide

Add your image assets to the appropriate directories below.

## Directory Structure

```
public/images/
├── products/          # Product images
├── collections/       # Collection/lookbook images
├── instagram/         # Instagram feed images
└── about/            # About page images
```

## Required Images

### Hero Section
- `hero-poster.jpg` - Fallback image for hero video (1920x1080px)

### Products (`products/`)
- `product-1.jpg` through `product-4.jpg`
- **Dimensions**: 800x1067px (3:4 aspect ratio)
- **Format**: JPG or WebP

### Collections (`collections/`)
- `featured-hero.jpg` - Large hero image (1920x1080px or 2400x1350px)
- `heritage.jpg` - Heritage collection (800x1000px, 4:5 ratio)
- `evening.jpg` - Evening Luxe collection (800x1000px, 4:5 ratio)
- `ss25.jpg` - Spring Summer collection (800x1000px, 4:5 ratio)
- `collections-hero.jpg` - Collections page hero (1920x1080px)

### Instagram (`instagram/`)
- `post-1.jpg` through `post-8.jpg`
- **Dimensions**: Square format (1080x1080px)
- **Format**: JPG

### About (`about/`)
- `about-hero.jpg` - About page hero (1920x1080px)
- `craftsmanship.jpg` - Craftsmanship section (800x1000px, 4:5 ratio)
- `sustainability.jpg` - Sustainability section (800x1000px, 4:5 ratio)

## Image Optimization Tips

1. **Compress images** to 70-85% quality for web
2. **Use WebP format** when possible (with JPG fallback)
3. **Optimize file sizes** - aim for <500KB per image
4. **Use descriptive filenames** for better SEO
5. **Maintain aspect ratios** to prevent distortion

## Tools for Optimization

- [TinyPNG](https://tinypng.com/) - Online compression
- [Squoosh](https://squoosh.app/) - Google's image optimizer
- [ImageOptim](https://imageoptim.com/) - Mac app
- Sharp (Node.js) - For batch processing
