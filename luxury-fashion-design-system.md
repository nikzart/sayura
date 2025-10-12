# Luxury Fashion E-commerce Design System

> A comprehensive design system for luxury fashion e-commerce websites, extracted from high-end fashion brand patterns. CMS-agnostic and framework-flexible.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Typography](#typography)
3. [Color Palette](#color-palette)
4. [Spacing System](#spacing-system)
5. [Layout Patterns](#layout-patterns)
6. [Component Library](#component-library)
7. [Navigation](#navigation)
8. [Responsive Design](#responsive-design)
9. [Animation & Interactions](#animation--interactions)
10. [Media & Assets](#media--assets)
11. [E-commerce Patterns](#e-commerce-patterns)
12. [Accessibility](#accessibility)
13. [Performance Guidelines](#performance-guidelines)

---

## Design Principles

### Core Philosophy

**Minimalist Luxury**
- Content-first approach: let product imagery dominate
- Generous whitespace: breathing room conveys premium quality
- Subtle interactions: refined over flashy
- High contrast: clear hierarchy without color dependency
- Timeless aesthetic: avoid trendy effects that date quickly

### Visual Hierarchy
1. **Primary**: Product imagery and videos (full-width, high-quality)
2. **Secondary**: Product names and key information (refined typography)
3. **Tertiary**: Pricing and action buttons (understated but accessible)

### Brand Expression
- **Elegance**: Through restraint and refinement
- **Heritage**: Subtle craftsmanship details
- **Modernity**: Clean, contemporary layouts
- **Prestige**: Premium materials and finishes metaphorically expressed through design

---

## Typography

### Font Stack

**Primary Typeface**: Geometric Sans-Serif
```css
font-family: 'Futura PT', 'Avenir Next', 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
```

**Alternative Options**:
- Futura PT (luxury, geometric)
- Avenir Next (elegant, humanist)
- Montserrat (modern, clean)
- Proxima Nova (versatile, professional)

### Type Scale

Base: 16px (1rem)

```css
/* Display Sizes */
.text-2xl: 2.25rem;    /* 36px - Hero headlines */
.text-xl: 2rem;        /* 32px - Page titles */
.text-lg: 1.625rem;    /* 26px - Section headers */

/* Body Sizes */
.text-base: 1rem;      /* 16px - Body text */
.text-md: 1.125rem;    /* 18px - Large body */
.text-sm: 0.875rem;    /* 14px - Captions */
.text-xs: 0.75rem;     /* 12px - Labels */
.text-2xs: 0.563rem;   /* 9px - Legal text */
```

### Font Weights

**Primary Weight Distribution**:
- **Light (300)**: 60% of text - body copy, descriptions
- **Medium (500)**: 30% of text - emphasis, buttons
- **Semibold (600)**: 8% of text - headings, CTAs
- **Bold (700)**: 2% of text - rare emphasis only

**Rationale**: Lighter weights convey sophistication and elegance

### Letter Spacing

Wide letter-spacing creates a luxury feel:

```css
.tracking-tight: 0.063rem;   /* 1px - Tight spacing */
.tracking-normal: 0.125rem;  /* 2px - Standard */
.tracking-wide: 0.188rem;    /* 3px - Uppercase headers */
.tracking-wider: 0.25rem;    /* 4px - Hero text */
.tracking-widest: 0.375rem;  /* 6px - Special emphasis */
```

**Usage**:
- Uppercase text: Always add letter-spacing (0.188rem+)
- Body text: Minimal or no letter-spacing
- Headlines: Moderate letter-spacing (0.125-0.25rem)

### Line Height

```css
.leading-tight: 1rem;        /* Compact */
.leading-snug: 1.25rem;      /* Headings */
.leading-normal: 1.5rem;     /* Body copy */
.leading-relaxed: 2rem;      /* Spacious */
.leading-loose: 2.75rem;     /* Display text */
```

### Text Transforms

```css
.uppercase  /* Navigation, labels, CTAs */
.capitalize /* Headings, product names */
.lowercase  /* Rare - email addresses */
```

### Typography Examples

**Hero Headline**:
```css
font-size: 2.25rem;
font-weight: 300;
letter-spacing: 0.25rem;
line-height: 2.75rem;
text-transform: uppercase;
```

**Product Name**:
```css
font-size: 1.125rem;
font-weight: 500;
letter-spacing: 0.125rem;
line-height: 1.625rem;
text-transform: capitalize;
```

**Body Text**:
```css
font-size: 1rem;
font-weight: 300;
letter-spacing: 0.063rem;
line-height: 1.5rem;
```

---

## Color Palette

### Primary Colors

**Monochromatic Scheme** (High-end fashion standard)

```css
/* Neutrals */
--color-black: #000000;
--color-white: #FFFFFF;
--color-gray-50: #F9FAFB;
--color-gray-100: #F3F4F6;
--color-gray-200: #E5E7EB;
--color-gray-300: #D1D5DB;
--color-gray-400: #9CA3AF;
--color-gray-500: #6B7280;
--color-gray-600: #4B5563;
--color-gray-700: #374151;
--color-gray-800: #1F2937;
--color-gray-900: #111827;

/* Accent (Optional) */
--color-accent: #182748;  /* Deep navy - use sparingly */
```

### Usage Guidelines

**Black (#000000)**:
- Primary text color (56% of text instances)
- Navigation links
- Headings
- Product names

**White (#FFFFFF)**:
- Secondary text on dark backgrounds (52% of text instances)
- Page backgrounds
- Card backgrounds
- Overlay text

**Gray Scale**:
- Gray-200 to Gray-300: Borders and dividers
- Gray-400 to Gray-500: Secondary text, disabled states
- Gray-600 to Gray-800: Hover states, icons

**Accent Color**:
- Use <5% of total color usage
- Call-to-action buttons (only if needed)
- Special announcements
- Link hover states

### Color Ratios

For luxury aesthetic:
- **Black**: 48%
- **White**: 48%
- **Grays**: 3%
- **Accent**: 1%

### Backgrounds

```css
/* Page background */
background: white;

/* Section backgrounds */
background: white;        /* Default */
background: gray-50;      /* Subtle variation */
background: black;        /* Hero sections, footers */

/* Overlays */
background: rgba(0, 0, 0, 0.3);  /* Dark overlay on images */
background: rgba(0, 0, 0, 0.6);  /* Darker overlay for text legibility */
```

---

## Spacing System

### Base Unit

Base: 8px (0.5rem)

### Scale

```css
/* Spacing Scale (based on 8px grid) */
0.5rem  /* 8px  - Tight */
0.625rem /* 10px - Extra small */
0.75rem  /* 12px - Small */
1rem     /* 16px - Medium */
1.25rem  /* 20px - Medium-large */
1.5rem   /* 24px - Large */
1.875rem /* 30px - Extra large */
2.5rem   /* 40px - 2X large */
3.75rem  /* 60px - 3X large */
5rem     /* 80px - 4X large */
```

### Padding Patterns

**Most Common**:
- `padding: 3.75rem` (60px) - Section padding
- `padding-y: 0.75rem` (12px) - Button padding vertical
- `padding-x: 1.875rem` (30px) - Container padding

**Component Padding**:
```css
/* Buttons */
padding: 0.75rem 1.875rem;  /* 12px 30px */

/* Cards */
padding: 1.875rem;           /* 30px */

/* Sections */
padding: 3.75rem 1.875rem;   /* 60px 30px */

/* Containers */
padding: 0 1.875rem;         /* 0 30px */
```

### Margin & Gaps

**Vertical Spacing**:
```css
/* Between sections */
margin-bottom: 3.75rem;  /* 60px */

/* Between components */
margin-bottom: 1.875rem; /* 30px */

/* Between text elements */
margin-bottom: 1rem;     /* 16px */
```

**Flex/Grid Gaps**:
```css
/* Product grids */
gap: 1.875rem;  /* 30px */

/* Tight layouts */
gap: 1rem;      /* 16px */
```

### Container Widths

```css
/* Max widths */
.container-sm: 640px;
.container-md: 768px;
.container-lg: 1024px;
.container-xl: 1280px;
.container-2xl: 1536px;

/* Default container */
max-width: 1280px;
margin: 0 auto;
padding: 0 1.875rem;
```

---

## Layout Patterns

### Grid System

**Flexbox-Dominant Approach** (174 flex vs 9 grid instances)

**Primary Layout Method**:
```css
display: flex;
flex-direction: row | column;
gap: 1.875rem;
```

**Product Grids**:
```css
/* Desktop */
display: flex;
flex-wrap: wrap;
gap: 1.875rem;

.product-card {
  flex: 0 0 calc(33.333% - 1.25rem);
}

/* Tablet */
.product-card {
  flex: 0 0 calc(50% - 0.938rem);
}

/* Mobile */
.product-card {
  flex: 0 0 100%;
}
```

**Alternative Grid Layout**:
```css
display: grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
gap: 1.875rem;
```

### Section Layouts

**Full-Width Hero**:
```html
<section class="hero">
  <div class="relative w-full h-screen">
    <img/video (full width)>
    <div class="absolute inset-0 bg-black/30">
      <div class="container">
        <h1>Hero Text</h1>
      </div>
    </div>
  </div>
</section>
```

**Standard Section**:
```html
<section class="py-[3.75rem]">
  <div class="container">
    <h2>Section Title</h2>
    <div class="flex gap-[1.875rem]">
      <!-- Content -->
    </div>
  </div>
</section>
```

**Split Layout (Image + Text)**:
```html
<section>
  <div class="flex flex-col md:flex-row">
    <div class="md:w-1/2">
      <img>
    </div>
    <div class="md:w-1/2 p-[3.75rem]">
      <h2>Content</h2>
      <p>Description</p>
    </div>
  </div>
</section>
```

### Z-Index Layers

```css
/* Z-index scale */
z-0: 0;      /* Base layer */
z-10: 10;    /* Dropdowns, tooltips (27 instances) */
z-20: 20;    /* Fixed headers, sticky elements (21 instances) */
z-30: 30;    /* Overlays (20 instances) */
z-40: 40;    /* Modal backgrounds */
z-50: 50;    /* Modals, drawers (6 instances) */
```

**Usage**:
- Header: `z-20`
- Dropdown menus: `z-10`
- Modals: `z-50`
- Modal overlays: `z-40`
- Sticky elements: `z-30`

---

## Component Library

### Buttons

**Primary Button**:
```css
.btn-primary {
  padding: 0.75rem 1.875rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  background: black;
  color: white;
  border: none;
  transition: opacity 0.3s ease;
}

.btn-primary:hover {
  opacity: 0.8;
}
```

**Secondary Button (Outline)**:
```css
.btn-secondary {
  padding: 0.75rem 1.875rem;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.125rem;
  text-transform: uppercase;
  background: transparent;
  color: black;
  border: 1px solid black;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: black;
  color: white;
}
```

**Text Button**:
```css
.btn-text {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 300;
  letter-spacing: 0.063rem;
  background: transparent;
  border: none;
  text-decoration: underline;
  text-underline-offset: 4px;
}
```

**Icon Button**:
```css
.btn-icon {
  width: 2.5rem;
  height: 2.5rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  border-radius: 50%;
  transition: background 0.3s ease;
}

.btn-icon:hover {
  background: rgba(0, 0, 0, 0.1);
}
```

### Cards

**Product Card**:
```html
<div class="product-card">
  <div class="image-container relative overflow-hidden">
    <img class="w-full transition-transform duration-500 hover:scale-105">
    <div class="quick-view absolute inset-0 opacity-0 hover:opacity-100">
      <button>Quick View</button>
    </div>
  </div>
  <div class="p-4">
    <h3 class="text-[1.125rem] font-medium tracking-[0.125rem] uppercase">
      Product Name
    </h3>
    <p class="text-[0.875rem] font-light text-gray-600 mt-2">
      Category
    </p>
    <p class="text-[1rem] font-medium mt-3">
      $000
    </p>
  </div>
</div>
```

**Content Card**:
```html
<div class="content-card bg-white p-[1.875rem]">
  <h3 class="text-[1.25rem] font-medium tracking-[0.125rem] mb-4">
    Title
  </h3>
  <p class="text-[1rem] font-light leading-relaxed">
    Content goes here...
  </p>
  <a href="#" class="btn-text mt-6">Learn More</a>
</div>
```

### Modals

**Structure**:
```html
<div class="modal-overlay fixed inset-0 bg-black/60 z-40">
  <div class="modal-container fixed inset-0 z-50 overflow-y-auto">
    <div class="flex min-h-full items-center justify-center p-4">
      <div class="modal-content bg-white max-w-3xl w-full p-[3.75rem] relative">
        <button class="modal-close absolute top-4 right-4">
          <svg>Close Icon</svg>
        </button>
        <div class="modal-body">
          <!-- Content -->
        </div>
      </div>
    </div>
  </div>
</div>
```

**Modal Behavior**:
- Fade in overlay: `transition: opacity 0.3s ease`
- Scale in content: `transition: transform 0.3s ease, opacity 0.3s ease`
- Prevent body scroll when open
- Close on overlay click
- Close on ESC key

### Carousel/Slider

**Configuration** (Swiper.js-style):
```javascript
{
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    clickable: true,
    dynamicBullets: true
  },
  navigation: {
    prevEl: '.carousel-btn-prev',
    nextEl: '.carousel-btn-next'
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 }
  }
}
```

**Styling**:
```css
.carousel-container {
  position: relative;
  overflow: hidden;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3rem;
  height: 3rem;
  background: white;
  border-radius: 50%;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.carousel-btn-prev { left: 1rem; }
.carousel-btn-next { right: 1rem; }

.carousel-pagination {
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  margin-top: 2rem;
}

.carousel-bullet {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: gray-300;
  transition: all 0.3s ease;
}

.carousel-bullet.active {
  width: 24px;
  border-radius: 4px;
  background: black;
}
```

### Accordion

```html
<div class="accordion">
  <div class="accordion-item border-b border-gray-200">
    <button class="accordion-trigger w-full flex justify-between items-center py-4">
      <span class="text-[1rem] font-medium tracking-[0.125rem] uppercase">
        Title
      </span>
      <svg class="accordion-icon transition-transform duration-300">
        Plus/Minus Icon
      </svg>
    </button>
    <div class="accordion-content hidden">
      <div class="pb-4 text-[1rem] font-light leading-relaxed">
        Content goes here...
      </div>
    </div>
  </div>
</div>
```

**Behavior**:
- Smooth expand/collapse with max-height transition
- Rotate icon on toggle
- Only one item open at a time (optional)

### Tabs

```html
<div class="tabs">
  <div class="tab-list flex border-b border-gray-200">
    <button class="tab-trigger px-6 py-3 text-[1rem] font-medium tracking-[0.125rem] uppercase relative">
      Tab 1
      <span class="tab-indicator absolute bottom-0 left-0 w-full h-0.5 bg-black"></span>
    </button>
    <button class="tab-trigger px-6 py-3">Tab 2</button>
  </div>
  <div class="tab-panels">
    <div class="tab-panel p-6">Panel 1</div>
    <div class="tab-panel hidden p-6">Panel 2</div>
  </div>
</div>
```

### Drawer

**Side Drawer (Cart, Mobile Menu)**:
```html
<div class="drawer-overlay fixed inset-0 bg-black/60 z-40">
  <div class="drawer fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 transform translate-x-full transition-transform duration-300">
    <div class="drawer-header flex justify-between items-center p-6 border-b">
      <h2 class="text-[1.25rem] font-medium tracking-[0.125rem] uppercase">
        Cart
      </h2>
      <button class="drawer-close">Close</button>
    </div>
    <div class="drawer-body p-6 overflow-y-auto">
      <!-- Content -->
    </div>
    <div class="drawer-footer p-6 border-t">
      <!-- Actions -->
    </div>
  </div>
</div>
```

**Animation**:
- Slide in from right: `transform: translateX(0)`
- Fade in overlay
- Close on overlay click or button

### Popover

```html
<div class="popover-trigger relative inline-block">
  <button>Trigger</button>
  <div class="popover absolute top-full left-0 mt-2 bg-white shadow-lg p-4 min-w-[200px] opacity-0 invisible transition-all duration-200">
    <div class="popover-content">
      Content
    </div>
  </div>
</div>
```

**States**:
```css
.popover-trigger:hover .popover,
.popover-trigger:focus-within .popover {
  opacity: 1;
  visibility: visible;
}
```

### Forms

**Input Field**:
```html
<div class="form-group mb-6">
  <label class="block text-[0.875rem] font-medium tracking-[0.125rem] uppercase mb-2">
    Label
  </label>
  <input
    type="text"
    class="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors"
  >
</div>
```

**Select Dropdown**:
```html
<div class="form-group mb-6">
  <label class="block text-[0.875rem] font-medium tracking-[0.125rem] uppercase mb-2">
    Label
  </label>
  <div class="relative">
    <select class="w-full px-4 py-3 border border-gray-300 appearance-none">
      <option>Option 1</option>
    </select>
    <svg class="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
      Chevron Icon
    </svg>
  </div>
</div>
```

**Checkbox**:
```html
<label class="flex items-center gap-3 cursor-pointer">
  <input type="checkbox" class="w-5 h-5 border-2 border-gray-300 rounded-none">
  <span class="text-[1rem] font-light">Label text</span>
</label>
```

---

## Navigation

### Header Structure

**Desktop Header**:
```html
<header class="nav-header w-full lg:absolute top-0 z-20 bg-transparent">
  <div class="container">
    <div class="flex items-center justify-between py-6">
      <!-- Logo -->
      <div class="logo">
        <a href="/">
          <img src="logo.svg" alt="Brand" class="h-8">
        </a>
      </div>

      <!-- Main Navigation -->
      <nav class="hidden lg:flex items-center gap-8">
        <a href="#" class="nav-link text-[1rem] font-light tracking-[0.125rem] uppercase">
          Shop
        </a>
        <a href="#" class="nav-link">Collections</a>
        <a href="#" class="nav-link">About</a>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <button class="btn-icon">Search</button>
        <button class="btn-icon">Account</button>
        <button class="btn-icon">Cart (0)</button>
      </div>
    </div>
  </div>
</header>
```

**Transparent Header** (for hero sections):
```css
.nav-header.transparent {
  background: transparent;
  color: white;
  position: absolute;
  width: 100%;
}

/* Scroll behavior */
.nav-header.scrolled {
  background: white;
  color: black;
  position: fixed;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

### Mega Menu (Desktop)

```html
<div class="mega-menu absolute top-full left-0 w-full bg-white shadow-lg opacity-0 invisible transition-all duration-300">
  <div class="container py-12">
    <div class="flex gap-12">
      <!-- Column 1 -->
      <div class="flex-1">
        <h3 class="text-[1rem] font-medium tracking-[0.125rem] uppercase mb-4">
          Category
        </h3>
        <ul class="space-y-2">
          <li>
            <a href="#" class="text-[0.875rem] font-light hover:underline">
              Subcategory
            </a>
          </li>
        </ul>
      </div>

      <!-- Featured Image -->
      <div class="flex-1">
        <img src="featured.jpg" class="w-full">
      </div>
    </div>
  </div>
</div>
```

### Mobile Menu

**Hamburger Icon**:
```html
<button class="menu-toggle lg:hidden w-10 h-10">
  <span class="hamburger-line block w-6 h-0.5 bg-current mb-1 transition-transform"></span>
  <span class="hamburger-line block w-6 h-0.5 bg-current mb-1"></span>
  <span class="hamburger-line block w-6 h-0.5 bg-current"></span>
</button>
```

**Mobile Drawer Menu**:
```html
<div class="mobile-menu fixed inset-0 z-50 transform -translate-x-full transition-transform duration-300">
  <div class="bg-white h-full overflow-y-auto">
    <div class="p-6">
      <button class="close-menu mb-8">Close</button>
      <nav class="space-y-4">
        <a href="#" class="block text-[1.125rem] font-light tracking-[0.125rem] uppercase py-2 border-b">
          Shop
        </a>
        <!-- Expandable sections -->
      </nav>
    </div>
  </div>
</div>
```

### Breadcrumbs

```html
<nav class="breadcrumbs py-4">
  <ol class="flex items-center gap-2 text-[0.875rem] font-light">
    <li>
      <a href="/" class="hover:underline">Home</a>
    </li>
    <li>/</li>
    <li>
      <a href="/shop" class="hover:underline">Shop</a>
    </li>
    <li>/</li>
    <li class="text-gray-600">Product Name</li>
  </ol>
</nav>
```

### Footer

```html
<footer class="bg-black text-white py-16">
  <div class="container">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
      <!-- Column 1: Brand -->
      <div>
        <img src="logo-white.svg" class="h-8 mb-6">
        <p class="text-[0.875rem] font-light leading-relaxed">
          Brief description
        </p>
      </div>

      <!-- Column 2-4: Links -->
      <div>
        <h4 class="text-[1rem] font-medium tracking-[0.125rem] uppercase mb-4">
          Shop
        </h4>
        <ul class="space-y-2">
          <li>
            <a href="#" class="text-[0.875rem] font-light hover:underline">
              Collections
            </a>
          </li>
        </ul>
      </div>
    </div>

    <!-- Bottom -->
    <div class="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
      <p class="text-[0.75rem] font-light">
        © 2025 Brand Name. All rights reserved.
      </p>
      <div class="flex gap-4">
        <a href="#" class="hover:opacity-80">Instagram</a>
        <a href="#" class="hover:opacity-80">Facebook</a>
      </div>
    </div>
  </div>
</footer>
```

---

## Responsive Design

### Breakpoints

```css
/* Mobile First Approach */
/* Default: 0-639px (mobile) */

/* Small tablets */
@media (min-width: 640px) {  /* sm */
  /* 72 responsive instances */
}

/* Tablets */
@media (min-width: 768px) {  /* md */
  /* 199 responsive instances - PRIMARY breakpoint */
}

/* Desktop */
@media (min-width: 1024px) { /* lg */
  /* 43 responsive instances */
}

/* Large desktop */
@media (min-width: 1280px) { /* xl */
  /* 7 responsive instances */
}
```

### Responsive Patterns

**Product Grid**:
```css
/* Mobile: 1 column */
.product-grid {
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
}

/* Tablet: 2 columns */
@media (min-width: 768px) {
  .product-grid {
    flex-direction: row;
    flex-wrap: wrap;
  }
  .product-card {
    width: calc(50% - 0.938rem);
  }
}

/* Desktop: 3-4 columns */
@media (min-width: 1024px) {
  .product-card {
    width: calc(33.333% - 1.25rem);
  }
}
```

**Typography Scale**:
```css
/* Mobile */
.hero-title {
  font-size: 1.625rem; /* 26px */
}

/* Tablet */
@media (min-width: 768px) {
  .hero-title {
    font-size: 2rem; /* 32px */
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .hero-title {
    font-size: 2.25rem; /* 36px */
  }
}
```

**Spacing Adjustments**:
```css
/* Mobile */
.section {
  padding: 2.5rem 1rem;
}

/* Desktop */
@media (min-width: 1024px) {
  .section {
    padding: 3.75rem 1.875rem;
  }
}
```

### Mobile Navigation

- **<768px**: Hamburger menu with drawer
- **768px-1023px**: Condensed horizontal nav
- **≥1024px**: Full navigation with mega menu

### Image Handling

**Responsive Images**:
```html
<picture>
  <!-- Mobile -->
  <source
    media="(max-width: 767px)"
    srcset="image-mobile-400w.jpg 400w,
            image-mobile-800w.jpg 800w"
  >
  <!-- Tablet -->
  <source
    media="(max-width: 1023px)"
    srcset="image-tablet-600w.jpg 600w,
            image-tablet-1200w.jpg 1200w"
  >
  <!-- Desktop -->
  <img
    src="image-desktop-1200w.jpg"
    srcset="image-desktop-1200w.jpg 1200w,
            image-desktop-1800w.jpg 1800w,
            image-desktop-2400w.jpg 2400w"
    alt="Description"
    loading="lazy"
  >
</picture>
```

---

## Animation & Interactions

### Transition Standards

**Duration**:
```css
/* Fast: UI feedback */
transition-duration: 150ms;  /* Hover states, toggles */

/* Standard: Most interactions */
transition-duration: 300ms;  /* Modals, dropdowns */

/* Slow: Major changes */
transition-duration: 500ms;  /* Page transitions, carousels */
```

**Easing**:
```css
/* Default */
transition-timing-function: ease;

/* Smooth entrance */
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

/* Bounce exit */
transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
```

### Common Transitions

**Button Hover**:
```css
.button {
  transition: opacity 0.3s ease;
}

.button:hover {
  opacity: 0.8;
}
```

**Image Zoom on Hover**:
```css
.image-container {
  overflow: hidden;
}

.image-container img {
  transition: transform 0.5s ease;
}

.image-container:hover img {
  transform: scale(1.05);
}
```

**Fade In**:
```css
.fade-in {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to { opacity: 1; }
}
```

**Slide In**:
```css
.slide-in {
  transform: translateY(20px);
  opacity: 0;
  animation: slideIn 0.5s ease forwards;
}

@keyframes slideIn {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
```

### Hover Effects

**Link Underline**:
```css
.link {
  position: relative;
}

.link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: currentColor;
  transition: width 0.3s ease;
}

.link:hover::after {
  width: 100%;
}
```

**Card Lift**:
```css
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

### Scroll Animations

**Fade in on Scroll** (Intersection Observer):
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
```

### Loading States

**Skeleton Loader**:
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Spinner**:
```css
.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-top-color: black;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
```

---

## Media & Assets

### Image Guidelines

**Format Selection**:
- **Product images**: WebP (with JPG fallback)
- **Hero images**: WebP/JPG at 1920px width minimum
- **Thumbnails**: 250px, 400px, 600px widths
- **Icons**: SVG whenever possible

**Optimization**:
- Compress to 70-85% quality
- Use progressive JPG
- Implement lazy loading (400+ instances)
- Use srcset for responsive images (240 instances)

**Aspect Ratios**:
```css
/* Product images */
aspect-ratio: 3/4;  /* Portrait */

/* Lifestyle images */
aspect-ratio: 16/9; /* Landscape */
aspect-ratio: 4/3;  /* Standard */

/* Square */
aspect-ratio: 1/1;
```

### Video Integration

**Background Video**:
```html
<div class="video-container relative overflow-hidden">
  <video
    class="w-full h-full object-cover"
    autoplay
    muted
    loop
    playsinline
  >
    <source src="video.mp4" type="video/mp4">
  </video>

  <!-- Controls -->
  <div class="video-controls absolute bottom-4 right-4 flex gap-2">
    <button class="btn-icon play-pause">
      <svg>Pause Icon</svg>
    </button>
    <button class="btn-icon sound-toggle">
      <svg>Sound Icon</svg>
    </button>
  </div>

  <!-- Overlay content -->
  <div class="absolute inset-0 bg-black/30">
    <div class="container h-full flex items-center justify-center">
      <h1 class="text-white">Hero Text</h1>
    </div>
  </div>
</div>
```

**Product Video**:
```html
<div class="product-video relative">
  <video
    class="w-full"
    controls
    poster="thumbnail.jpg"
  >
    <source src="product-video.mp4" type="video/mp4">
  </video>
</div>
```

**YouTube Embed**:
```html
<div class="youtube-container relative" style="padding-bottom: 56.25%;">
  <iframe
    class="absolute inset-0 w-full h-full"
    src="https://www.youtube.com/embed/VIDEO_ID"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</div>
```

### Lazy Loading Implementation

**Images**:
```html
<img
  class="lazyload"
  data-src="image-full.jpg"
  data-srcset="image-400w.jpg 400w, image-800w.jpg 800w"
  src="placeholder.jpg"
  alt="Description"
>
```

**JavaScript** (Intersection Observer):
```javascript
const imageObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      if (img.dataset.srcset) {
        img.srcset = img.dataset.srcset;
      }
      img.classList.remove('lazyload');
      imageObserver.unobserve(img);
    }
  });
});

document.querySelectorAll('.lazyload').forEach(img => {
  imageObserver.observe(img);
});
```

---

## E-commerce Patterns

### Product Listing Page

```html
<div class="product-listing">
  <!-- Filters Sidebar -->
  <aside class="filters w-64 pr-8">
    <div class="filter-group mb-8">
      <h3 class="text-[1rem] font-medium tracking-[0.125rem] uppercase mb-4">
        Category
      </h3>
      <ul class="space-y-2">
        <li>
          <label class="flex items-center gap-2">
            <input type="checkbox">
            <span class="text-[0.875rem] font-light">Option</span>
          </label>
        </li>
      </ul>
    </div>
  </aside>

  <!-- Products Grid -->
  <main class="flex-1">
    <div class="flex justify-between items-center mb-8">
      <p class="text-[0.875rem] font-light">120 Products</p>
      <select class="sort-select">
        <option>Newest</option>
        <option>Price: Low to High</option>
        <option>Price: High to Low</option>
      </select>
    </div>

    <div class="product-grid flex flex-wrap gap-[1.875rem]">
      <!-- Product Cards -->
    </div>
  </main>
</div>
```

### Product Detail Page

```html
<div class="product-detail grid grid-cols-1 lg:grid-cols-2 gap-12">
  <!-- Images -->
  <div class="product-images">
    <div class="main-image mb-4">
      <img src="product-1.jpg" class="w-full">
    </div>
    <div class="thumbnails flex gap-2">
      <img src="thumb-1.jpg" class="w-20 cursor-pointer">
      <img src="thumb-2.jpg" class="w-20 cursor-pointer">
    </div>
  </div>

  <!-- Info -->
  <div class="product-info sticky top-24">
    <h1 class="text-[1.625rem] font-medium tracking-[0.125rem] uppercase mb-4">
      Product Name
    </h1>
    <p class="text-[1.25rem] font-light mb-6">$000</p>

    <div class="product-options mb-8">
      <!-- Size selector -->
      <div class="mb-6">
        <label class="block text-[0.875rem] font-medium tracking-[0.125rem] uppercase mb-3">
          Size
        </label>
        <div class="flex gap-2">
          <button class="size-option px-4 py-2 border border-gray-300 hover:border-black">
            S
          </button>
          <button class="size-option selected px-4 py-2 border-2 border-black">
            M
          </button>
        </div>
      </div>
    </div>

    <!-- Add to Cart -->
    <button class="btn-primary w-full mb-4">
      Add to Cart
    </button>

    <!-- Description Accordion -->
    <div class="product-details mt-8">
      <div class="accordion">
        <!-- Details, Materials, Care, etc. -->
      </div>
    </div>
  </div>
</div>
```

### Cart Drawer

```html
<div class="cart-drawer">
  <div class="cart-header flex justify-between items-center p-6 border-b">
    <h2 class="text-[1.25rem] font-medium tracking-[0.125rem] uppercase">
      Cart (2)
    </h2>
    <button class="close-cart">Close</button>
  </div>

  <div class="cart-items p-6 overflow-y-auto flex-1">
    <!-- Cart Item -->
    <div class="cart-item flex gap-4 mb-6 pb-6 border-b">
      <img src="product-thumb.jpg" class="w-24">
      <div class="flex-1">
        <h3 class="text-[1rem] font-medium mb-2">Product Name</h3>
        <p class="text-[0.875rem] text-gray-600 mb-2">Size: M</p>
        <div class="flex items-center gap-4">
          <div class="quantity flex items-center gap-2">
            <button class="w-8 h-8 border">-</button>
            <span>1</span>
            <button class="w-8 h-8 border">+</button>
          </div>
          <p class="text-[1rem] font-medium">$000</p>
        </div>
      </div>
      <button class="text-[0.875rem] text-gray-600 hover:text-black">
        Remove
      </button>
    </div>
  </div>

  <div class="cart-footer p-6 border-t">
    <div class="flex justify-between mb-4">
      <span class="text-[1rem] font-medium">Subtotal</span>
      <span class="text-[1.125rem] font-medium">$000</span>
    </div>
    <button class="btn-primary w-full mb-2">
      Checkout
    </button>
    <button class="btn-secondary w-full">
      View Cart
    </button>
  </div>
</div>
```

### Quick View Modal

```html
<div class="quick-view-modal">
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Image -->
    <div>
      <img src="product.jpg" class="w-full">
    </div>

    <!-- Quick Info -->
    <div>
      <h2 class="text-[1.25rem] font-medium tracking-[0.125rem] uppercase mb-4">
        Product Name
      </h2>
      <p class="text-[1.125rem] font-light mb-6">$000</p>

      <!-- Quick size select -->
      <div class="mb-6">
        <label class="block text-[0.875rem] font-medium tracking-[0.125rem] uppercase mb-3">
          Select Size
        </label>
        <select class="w-full px-4 py-3 border">
          <option>S</option>
          <option>M</option>
          <option>L</option>
        </select>
      </div>

      <button class="btn-primary w-full mb-4">
        Add to Cart
      </button>

      <a href="/products/product-slug" class="btn-text block text-center">
        View Full Details
      </a>
    </div>
  </div>
</div>
```

### Size Calculator/Guide

```html
<button class="size-guide-trigger text-[0.875rem] underline">
  Size Guide
</button>

<div class="size-guide-modal">
  <h2 class="text-[1.5rem] font-medium tracking-[0.125rem] uppercase mb-6">
    Size Guide
  </h2>

  <!-- Size Chart -->
  <table class="w-full text-[0.875rem]">
    <thead class="border-b">
      <tr>
        <th class="py-3 text-left font-medium">Size</th>
        <th class="py-3 text-left font-medium">Chest (in)</th>
        <th class="py-3 text-left font-medium">Waist (in)</th>
        <th class="py-3 text-left font-medium">Hips (in)</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b">
        <td class="py-3 font-light">XS</td>
        <td class="py-3 font-light">32-34</td>
        <td class="py-3 font-light">24-26</td>
        <td class="py-3 font-light">34-36</td>
      </tr>
    </tbody>
  </table>

  <!-- Measurement Guide -->
  <div class="mt-8">
    <h3 class="text-[1rem] font-medium tracking-[0.125rem] uppercase mb-4">
      How to Measure
    </h3>
    <ul class="space-y-2 text-[0.875rem] font-light">
      <li>Chest: Measure around fullest part</li>
      <li>Waist: Measure around natural waistline</li>
    </ul>
  </div>
</div>
```

---

## Accessibility

### Semantic HTML

**Structure**:
```html
<header>Navigation</header>
<main>
  <section aria-labelledby="heading-1">
    <h2 id="heading-1">Section Title</h2>
  </section>
</main>
<aside>Filters</aside>
<footer>Footer content</footer>
```

### ARIA Labels

**Interactive Elements**:
```html
<!-- Buttons -->
<button aria-label="Close modal">
  <svg>Close Icon</svg>
</button>

<!-- Navigation -->
<nav aria-label="Primary navigation">
  <ul>...</ul>
</nav>

<!-- Search -->
<form role="search" aria-label="Site search">
  <input type="search" aria-label="Search products">
</form>

<!-- Cart -->
<button aria-label="Shopping cart, 2 items">
  <svg>Cart Icon</svg>
  <span>2</span>
</button>
```

### Keyboard Navigation

**Focus States**:
```css
/* Visible focus indicator */
*:focus-visible {
  outline: 2px solid black;
  outline-offset: 2px;
}

/* Button focus */
.button:focus-visible {
  outline: 2px solid black;
  outline-offset: 4px;
}

/* Link focus */
a:focus-visible {
  outline: 2px solid black;
  outline-offset: 2px;
}
```

**Tab Order**:
- Logical reading order
- Skip navigation link
- Trapped focus in modals
- Return focus on close

**Modal Focus Management**:
```javascript
// Trap focus within modal
const modal = document.querySelector('.modal');
const focusableElements = modal.querySelectorAll(
  'a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'
);
const firstElement = focusableElements[0];
const lastElement = focusableElements[focusableElements.length - 1];

modal.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    if (e.shiftKey && document.activeElement === firstElement) {
      lastElement.focus();
      e.preventDefault();
    } else if (!e.shiftKey && document.activeElement === lastElement) {
      firstElement.focus();
      e.preventDefault();
    }
  }

  if (e.key === 'Escape') {
    closeModal();
  }
});
```

### Screen Reader Support

**Image Alt Text**:
```html
<!-- Product images -->
<img src="dress.jpg" alt="Black silk evening dress with embroidered details">

<!-- Decorative images -->
<img src="pattern.jpg" alt="" role="presentation">

<!-- Icons with text -->
<button>
  <svg aria-hidden="true">Icon</svg>
  <span>Add to Cart</span>
</button>

<!-- Icons alone -->
<button aria-label="Close">
  <svg aria-hidden="true">X Icon</svg>
</button>
```

**Live Regions**:
```html
<!-- Cart updates -->
<div aria-live="polite" aria-atomic="true" class="sr-only">
  Item added to cart
</div>

<!-- Loading states -->
<div aria-live="polite" aria-busy="true">
  Loading products...
</div>
```

**Screen Reader Only Text**:
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```

### Color Contrast

**WCAG AA Compliance**:
- Normal text (16px): Minimum 4.5:1 contrast ratio
- Large text (18px+): Minimum 3:1 contrast ratio
- UI components: Minimum 3:1 contrast ratio

**Primary Combinations**:
- Black text on white: 21:1 ✓
- White text on black: 21:1 ✓
- Gray-600 (#4B5563) on white: 8.6:1 ✓
- Gray-400 (#9CA3AF) on white: 4.5:1 ✓ (minimum)

---

## Performance Guidelines

### Core Web Vitals Targets

**Largest Contentful Paint (LCP)**:
- Target: < 2.5 seconds
- Strategy: Optimize hero images, lazy load below fold

**First Input Delay (FID)**:
- Target: < 100 milliseconds
- Strategy: Minimize JavaScript execution, code splitting

**Cumulative Layout Shift (CLS)**:
- Target: < 0.1
- Strategy: Set image dimensions, avoid dynamic content insertion

### Image Optimization

**Specifications**:
```
Product images:
- Formats: WebP (primary), JPG (fallback)
- Quality: 75-85%
- Sizes: 400w, 600w, 800w, 1200w, 1800w
- Lazy load: All images below fold (400+ instances)

Hero images:
- Format: WebP/JPG
- Quality: 80-90%
- Max width: 2400px
- Progressive loading
```

**Implementation**:
```html
<picture>
  <source
    type="image/webp"
    srcset="image-400.webp 400w,
            image-800.webp 800w,
            image-1200.webp 1200w"
  >
  <img
    src="image-800.jpg"
    srcset="image-400.jpg 400w,
            image-800.jpg 800w,
            image-1200.jpg 1200w"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
    loading="lazy"
    alt="Description"
  >
</picture>
```

### Code Optimization

**CSS**:
- Purge unused CSS
- Minify and compress
- Critical CSS inline (above fold)
- Defer non-critical CSS

**JavaScript**:
- Code splitting by route
- Lazy load heavy components (carousels, modals)
- Tree shaking unused code
- Minify and compress

**Fonts**:
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="font" type="font/woff2" href="/fonts/futura.woff2" crossorigin>

<style>
@font-face {
  font-family: 'Futura PT';
  font-weight: 300;
  font-style: normal;
  font-display: swap;
  src: url('/fonts/futura-light.woff2') format('woff2');
}
</style>
```

### Caching Strategy

**Static Assets**:
```
Cache-Control: public, max-age=31536000, immutable
```

**Images**:
```
Cache-Control: public, max-age=604800, stale-while-revalidate=86400
```

**HTML**:
```
Cache-Control: public, max-age=0, must-revalidate
```

### Third-Party Scripts

**Load Strategy**:
- Defer analytics
- Async non-critical scripts
- Use façade pattern for heavy embeds (YouTube, social media)

---

## CMS Integration Guidelines

### Content Structure

**Product Schema**:
```javascript
{
  id: "unique-id",
  title: "Product Name",
  slug: "product-name",
  description: "Full description...",
  shortDescription: "Brief description...",
  price: 000,
  compareAtPrice: 000,
  images: [
    {
      url: "image-1.jpg",
      alt: "Description",
      position: 1
    }
  ],
  variants: [
    {
      id: "variant-id",
      size: "M",
      color: "Black",
      sku: "SKU-001",
      inventory: 10,
      price: 000
    }
  ],
  category: "category-slug",
  collections: ["collection-1", "collection-2"],
  metadata: {
    material: "Silk",
    care: "Dry clean only",
    madeIn: "Country"
  }
}
```

**Collection Schema**:
```javascript
{
  id: "collection-id",
  title: "Collection Name",
  slug: "collection-name",
  description: "Description...",
  image: {
    url: "collection-hero.jpg",
    alt: "Description"
  },
  products: ["product-id-1", "product-id-2"],
  metadata: {
    season: "Autumn/Winter 2024",
    featured: true
  }
}
```

**Page Schema**:
```javascript
{
  id: "page-id",
  title: "About Us",
  slug: "about",
  sections: [
    {
      type: "hero",
      content: {
        title: "Our Story",
        image: "hero.jpg",
        video: "hero.mp4"
      }
    },
    {
      type: "textWithImage",
      content: {
        title: "Heritage",
        text: "Content...",
        image: "heritage.jpg",
        imagePosition: "left"
      }
    },
    {
      type: "carousel",
      content: {
        images: [...]
      }
    }
  ]
}
```

### CMS Recommendations

**Headless CMS Options**:
- **Contentful**: Great for structured content, strong API
- **Sanity**: Real-time collaboration, flexible schemas
- **Strapi**: Open-source, self-hosted option
- **Prismic**: Slice-based content modeling

**E-commerce Platforms**:
- **Medusa**: Headless, open-source e-commerce
- **Saleor**: GraphQL-first commerce
- **Commerce.js**: Headless commerce API
- **Vendure**: TypeScript-based commerce framework

### API Endpoints

**Required Endpoints**:
```
GET  /api/products                 # List products
GET  /api/products/:id             # Single product
GET  /api/collections               # List collections
GET  /api/collections/:slug/products # Products by collection
POST /api/cart                      # Add to cart
GET  /api/cart                      # Get cart
PUT  /api/cart/:id                  # Update cart item
DELETE /api/cart/:id                # Remove from cart
POST /api/checkout                  # Create checkout
```

---

## Implementation Checklist

### Phase 1: Foundation
- [ ] Set up project structure
- [ ] Configure build tools (Vite/Webpack)
- [ ] Install Tailwind CSS
- [ ] Set up CMS integration
- [ ] Configure image CDN
- [ ] Implement design tokens

### Phase 2: Core Components
- [ ] Typography system
- [ ] Color system
- [ ] Spacing utilities
- [ ] Button components
- [ ] Card components
- [ ] Form elements
- [ ] Modal system
- [ ] Drawer components
- [ ] Accordion/Tabs
- [ ] Carousel/Slider

### Phase 3: Layout
- [ ] Header with navigation
- [ ] Footer
- [ ] Breadcrumbs
- [ ] Container system
- [ ] Grid layouts
- [ ] Responsive breakpoints

### Phase 4: E-commerce
- [ ] Product listing page
- [ ] Product detail page
- [ ] Cart functionality
- [ ] Quick view
- [ ] Size guide
- [ ] Search functionality
- [ ] Filtering system

### Phase 5: Content Pages
- [ ] Homepage
- [ ] About page
- [ ] Collection pages
- [ ] Contact page
- [ ] Legal pages

### Phase 6: Polish
- [ ] Animations & transitions
- [ ] Loading states
- [ ] Error states
- [ ] Empty states
- [ ] 404 page

### Phase 7: Optimization
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Code splitting
- [ ] Performance audit
- [ ] Accessibility audit
- [ ] SEO optimization
- [ ] Analytics integration

### Phase 8: Testing
- [ ] Cross-browser testing
- [ ] Mobile device testing
- [ ] Accessibility testing
- [ ] Performance testing
- [ ] User testing

---

## Design System Maintenance

### Version Control
- Document all component changes
- Maintain changelog
- Semantic versioning

### Documentation
- Component usage examples
- Do's and don'ts
- Code snippets
- Live preview links

### Updates
- Regular design reviews
- Performance audits
- Accessibility audits
- User feedback integration

---

## References & Resources

### Tools
- **Design**: Figma, Adobe XD
- **Build**: Vite, Tailwind CSS
- **Carousel**: Swiper.js
- **Animations**: GSAP (optional)
- **Forms**: React Hook Form, Formik
- **State**: Zustand, Redux Toolkit

### Typography Resources
- Google Fonts
- Adobe Fonts
- Fontshare

### Image Optimization
- Squoosh (web)
- ImageOptim (Mac)
- Sharp (Node.js)

### Performance Testing
- Lighthouse
- WebPageTest
- GTmetrix

### Accessibility Testing
- axe DevTools
- WAVE
- Screen readers (NVDA, JAWS, VoiceOver)

---

## Conclusion

This design system provides a comprehensive foundation for building a luxury fashion e-commerce website. The minimalist, monochromatic aesthetic with refined typography and generous spacing creates an elegant, premium experience that puts products at the forefront.

Key principles to maintain:
1. **Content First**: Product imagery is the hero
2. **Refined Interactions**: Subtle over flashy
3. **Performance**: Fast loading and smooth animations
4. **Accessibility**: Inclusive design for all users
5. **Consistency**: Maintain design patterns across all pages

Adapt these guidelines to your specific brand while maintaining the core luxury aesthetic principles.
