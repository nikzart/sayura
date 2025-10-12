# SAYURA - Premium Clothing Brand Website

A premium, luxury fashion showcase website built with Next.js 15, featuring elegant design, smooth animations, and a magazine-style layout.

## Features

- ✨ **Modern Design**: Luxury fashion aesthetic with monochromatic color scheme and gold accents
- 🎬 **Video Hero Section**: Full-screen video background with overlay content
- 📱 **Fully Responsive**: Mobile-first design that works beautifully on all devices
- 🎨 **Smooth Animations**: Framer Motion powered transitions and scroll animations
- 🛍️ **Product Showcase**: Elegant product cards with hover effects
- 📍 **Store Locator**: Interactive store finder (ready for Google Maps integration)
- 📸 **Instagram Integration**: Display your latest Instagram posts
- 📧 **Newsletter Signup**: Email subscription form
- 📞 **Contact Form**: Get in touch functionality
- ♿ **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: TypeScript
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Playfair Display (serif) & Montserrat (sans-serif) from Google Fonts

## Project Structure

```
sayura/
├── app/                          # Next.js app directory
│   ├── about/                    # About page
│   ├── collections/              # Collections page
│   ├── contact/                  # Contact page
│   ├── stores/                   # Store locator page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home page
│   └── globals.css               # Global styles
├── components/
│   ├── layout/                   # Header, Footer
│   ├── sections/                 # Page sections
│   └── ui/                       # Reusable UI components
├── lib/
│   ├── constants.ts              # Constants and sample data
│   └── utils.ts                  # Utility functions
├── public/                       # Static assets
│   ├── images/                   # Image assets (to be added)
│   ├── videos/                   # Video assets (to be added)
│   └── sayura-logo.svg          # Brand logo
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sayura
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Adding Images and Videos

The project is structured to use images and videos from the `public` directory. You'll need to add:

### Required Images

Create these directories and add your images:

```
public/
├── images/
│   ├── hero-poster.jpg                      # Hero section poster
│   ├── products/
│   │   ├── product-1.jpg
│   │   ├── product-2.jpg
│   │   ├── product-3.jpg
│   │   └── product-4.jpg
│   ├── collections/
│   │   ├── featured-hero.jpg
│   │   ├── heritage.jpg
│   │   ├── evening.jpg
│   │   ├── ss25.jpg
│   │   └── collections-hero.jpg
│   ├── instagram/
│   │   ├── post-1.jpg through post-8.jpg
│   └── about/
│       ├── about-hero.jpg
│       ├── craftsmanship.jpg
│       └── sustainability.jpg
└── videos/
    └── hero-video.mp4                       # Hero section video
```

### Image Guidelines

- **Format**: Use WebP for best performance, with JPG fallbacks
- **Dimensions**:
  - Hero images: 1920x1080px minimum
  - Product images: 800x1067px (3:4 aspect ratio)
  - Collection images: 1600x900px (16:9) for large, 800x1000px (4:5) for grid
- **Optimization**: Compress images to 70-85% quality
- **Alt text**: Update alt attributes in components for accessibility

## Customization

### Brand Colors

Update colors in `tailwind.config.ts`:

```typescript
colors: {
  gold: {
    DEFAULT: '#a17713',  // Your brand gold color
    // Add more shades as needed
  },
}
```

### Fonts

Modify fonts in `app/layout.tsx` and update Tailwind config.

### Content

Update content in:
- `lib/constants.ts` - Products, stores, collections, social links
- Component files - Text content and copy

## Integrations

### Google Maps (Store Locator)

To integrate Google Maps:

1. Get a Google Maps API key
2. Install the package:
```bash
npm install @googlemaps/js-api-loader
```

3. Update `components/sections/StoreLocator.tsx` with map implementation

### Instagram Feed

To integrate real Instagram feed:

1. Set up Instagram Basic Display API
2. Get access token
3. Update `lib/constants.ts` with API integration
4. Fetch posts dynamically in `InstagramFeed.tsx`

### Newsletter/Contact Form

Connect forms to your backend or service:
- Newsletter: Update `components/sections/Newsletter.tsx`
- Contact: Update `components/sections/ContactForm.tsx`

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy automatically

### Other Platforms

Build the project and deploy the `.next` folder to your hosting platform.

## Performance Optimization

- Images are lazy-loaded by default
- Fonts use `display: swap` for optimal loading
- Responsive images with Next.js Image component
- Smooth animations with Framer Motion
- Code splitting with Next.js dynamic imports

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2025 SAYURA. All rights reserved.

## Support

For questions or support, contact: hello@sayura.in
