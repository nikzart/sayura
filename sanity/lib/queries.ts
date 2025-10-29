import { groq } from 'next-sanity';

// Hero Section
export const heroSectionQuery = groq`*[_type == "heroSection"][0]{
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundVideo,
  backgroundImage,
  posterImage
}`;

// Collections
export const collectionsQuery = groq`*[_type == "collection" && isActive == true] | order(order asc){
  _id,
  title,
  slug,
  description,
  longDescription,
  image,
  gallery,
  order
}`;

export const collectionBySlugQuery = groq`*[_type == "collection" && slug.current == $slug][0]{
  _id,
  title,
  slug,
  description,
  longDescription,
  image,
  gallery
}`;

// Products
export const productsQuery = groq`*[_type == "product"] | order(dateAdded desc){
  _id,
  name,
  slug,
  category->{name, slug},
  price,
  images,
  colors,
  badges,
  shortDescription,
  dateAdded
}`;

export const productBySlugQuery = groq`*[_type == "product" && slug.current == $slug][0]{
  _id,
  name,
  slug,
  category->{name, slug},
  price,
  images,
  colors,
  badges,
  shortDescription,
  description,
  craftsmanship,
  styling,
  care,
  dateAdded
}`;

export const newArrivalsQuery = groq`*[_type == "product" && badges.isNew == true] | order(dateAdded desc){
  _id,
  name,
  slug,
  category->{name, slug},
  price,
  images,
  colors,
  badges,
  shortDescription,
  dateAdded
}`;

export const featuredProductsQuery = groq`*[_type == "product" && badges.isFeatured == true] | order(dateAdded desc){
  _id,
  name,
  slug,
  category->{name, slug},
  price,
  images,
  colors,
  badges,
  shortDescription,
  dateAdded
}`;

export const productsByCategoryQuery = groq`*[_type == "product" && category->slug.current == $categorySlug] | order(dateAdded desc){
  _id,
  name,
  slug,
  category->{name, slug},
  price,
  images,
  colors,
  badges,
  shortDescription,
  dateAdded
}`;

export const relatedProductsQuery = groq`*[_type == "product" && category->slug.current == $categorySlug && slug.current != $currentSlug][0..3]{
  _id,
  name,
  slug,
  category->{name, slug},
  price,
  images,
  colors,
  badges,
  shortDescription
}`;

// Categories
export const categoriesQuery = groq`*[_type == "category"] | order(name asc){
  _id,
  name,
  slug,
  description
}`;

// Store Locations
export const storeLocationsQuery = groq`*[_type == "storeLocation"] | order(name asc){
  _id,
  name,
  address,
  phone,
  email,
  hours,
  coordinates,
  image
}`;

// About Sections (Legacy)
export const aboutSectionsQuery = groq`*[_type == "aboutSection"] | order(order asc){
  _id,
  title,
  heading,
  content,
  image,
  imagePosition,
  order
}`;

// About Page (New)
export const aboutPageQuery = groq`*[_type == "aboutPage"][0]{
  _id,
  pageTitle,
  pageDescription,
  heroTitle,
  heroSubtitle,
  heroBackgroundImage,
  introHeading,
  introContent,
  contentSections[] | order(order asc) {
    title,
    content,
    image,
    imagePosition,
    order
  },
  valuesHeading,
  valuesDescription,
  values[] | order(order asc) {
    icon,
    title,
    description,
    order
  },
  isPublished
}`;

// Site Settings
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]{
  brandName,
  logo,
  logoMinimized,
  tagline,
  contactEmail,
  contactPhone,
  socialLinks,
  seo
}`;

// Instagram Posts
export const instagramPostsQuery = groq`*[_type == "instagramPost" && isActive == true] | order(order asc){
  _id,
  image,
  caption,
  url,
  order
}`;
