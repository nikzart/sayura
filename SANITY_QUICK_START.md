# Sanity CMS Quick Start

## ✅ Installation Complete!

Sanity CMS has been successfully integrated into your SAYURA website.

---

## 🚀 Getting Started

### 1. Access Sanity Studio

Open your browser and go to:

```
http://localhost:3000/studio
```

Log in with your Sanity credentials.

---

## 📋 What to Do Next

### Step 1: Create Categories (5 minutes)

In Sanity Studio, click **Category** and create these categories:

- Dresses
- Sarees
- Sets
- Outerwear
- Accessories

For each category:
1. Enter name
2. Click "Generate" for slug
3. Add description (optional)
4. Click **Publish**

---

### Step 2: Create Your First Collection (10 minutes)

Click **Collection** and create "Bridal Lehenga":

1. **Title**: Bridal Lehenga
2. **Slug**: Click "Generate"
3. **Description**: Exquisite handcrafted lehengas for your special day
4. **Image**: Upload a beautiful collection image
   - Use the hotspot to select the focus point
5. **Order**: 0 (first position)
6. **Active**: Check the box
7. Click **Publish**

Repeat for:
- Bridal Saree (order: 1)
- Bridal Gown (order: 2)

---

### Step 3: Create Your First Product (15 minutes)

Click **Product** and create a showcase product:

1. **Name**: Your product name
2. **Slug**: Click "Generate"
3. **Category**: Select from dropdown
4. **Price**: Enter price (e.g., 12999)
5. **Images**: Upload 2-4 high-quality images
6. **Colors**: Type colors, one per line (e.g., "Champagne", "Midnight Blue")
7. **Badges**: Check relevant boxes (New, Featured, etc.)
8. **Short Description**: 1-2 sentences
9. **Description Tab**: Write detailed description
10. **Craftsmanship Tab**: Explain how it's made
11. **Styling Tab**: Styling suggestions
12. **Care Tab**: Care instructions
13. Click **Publish**

---

### Step 4: Set Up Hero Section (5 minutes)

Click **Hero Section** and create:

1. **Title**: TIMELESS ELEGANCE
2. **Subtitle**: Discover our exclusive collection of premium clothing, where tradition meets contemporary design
3. **CTA Text**: EXPLORE
4. **CTA Link**: /collections
5. **Poster Image**: Upload a stunning hero image
6. Click **Publish**

---

### Step 5: Add Store Locations (10 minutes per store)

Click **Store Location** and add your stores:

1. **Name**: SAYURA Mumbai Flagship
2. **Address**: Full address
3. **Phone**: +91 ...
4. **Hours**: 10:00 AM - 9:00 PM
5. **Coordinates**:
   - Get from Google Maps (right-click → coordinates)
   - Format: lat: 19.0596, lng: 72.8295
6. **Image**: Upload store photo (optional)
7. Click **Publish**

---

### Step 6: Configure Site Settings (10 minutes)

Click **Site Settings** and create ONE document:

1. **Brand Name**: SAYURA
2. **Tagline**: Your brand tagline
3. **Contact Email**: your@email.com
4. **Contact Phone**: +91 ...
5. **Social Links**:
   - Instagram: https://www.instagram.com/sayura.in
   - Facebook, Pinterest, Twitter (if you have them)
6. **SEO**:
   - Meta Title: SAYURA | Premium Luxury Fashion
   - Meta Description: Discover SAYURA's exclusive collection...
7. Click **Publish**

---

## 🎨 Content Tips

### Images

- **Hero**: 1920x1080px or larger
- **Collections**: 1200x1600px (portrait)
- **Products**: 1200x1600px (portrait)
- Use JPEG for photos, PNG for graphics
- Always use hotspot on important images

### Writing Content

- **Short descriptions**: 1-2 sentences, engaging
- **Full descriptions**: 2-3 paragraphs, detailed
- **Craftsmanship**: Focus on quality, materials, techniques
- **Styling**: Suggest occasions, pairings
- **Care**: Clear, simple instructions

---

## 🔗 Useful Links

- **Sanity Studio**: http://localhost:3000/studio
- **Website**: http://localhost:3000
- **Detailed Guide**: See `SANITY_SETUP.md` in project root

---

## 📦 Project Structure

```
sanity/
├── schemas/           # Content type definitions
│   ├── heroSection.ts
│   ├── collection.ts
│   ├── product.ts
│   ├── category.ts
│   ├── storeLocation.ts
│   ├── aboutSection.ts
│   ├── siteSettings.ts
│   └── instagramPost.ts
│
├── lib/
│   ├── client.ts      # Sanity client
│   ├── image.ts       # Image optimization
│   ├── queries.ts     # GROQ queries
│   ├── fetch.ts       # Fetch functions
│   └── utils.ts       # Helper functions
│
sanity.config.ts       # Main Sanity config
.env.local             # Credentials (DO NOT COMMIT)
```

---

## 🎯 Next Steps After Setup

1. **Populate all content** in Sanity Studio
2. **Test the Studio** - make sure everything works
3. **Update components** to use Sanity data (we'll do this next)
4. **Remove static data** from constants.ts (after migration)

---

## ❓ Need Help?

Check `SANITY_SETUP.md` for:
- Detailed field explanations
- Code examples
- Troubleshooting guide
- Migration instructions

---

**You're all set!** Start by accessing http://localhost:3000/studio and creating your first content.
