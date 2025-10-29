import { client } from './client';
import {
  heroSectionQuery,
  collectionsQuery,
  collectionBySlugQuery,
  productsQuery,
  productBySlugQuery,
  newArrivalsQuery,
  featuredProductsQuery,
  productsByCategoryQuery,
  relatedProductsQuery,
  categoriesQuery,
  storeLocationsQuery,
  aboutSectionsQuery,
  siteSettingsQuery,
  instagramPostsQuery,
} from './queries';

// Hero Section
export async function getHeroSection() {
  return await client.fetch(heroSectionQuery);
}

// Collections
export async function getCollections() {
  return await client.fetch(collectionsQuery);
}

export async function getCollectionBySlug(slug: string) {
  return await client.fetch(collectionBySlugQuery, { slug });
}

// Products
export async function getProducts() {
  return await client.fetch(productsQuery);
}

export async function getProductBySlug(slug: string) {
  return await client.fetch(productBySlugQuery, { slug });
}

export async function getNewArrivals() {
  return await client.fetch(newArrivalsQuery);
}

export async function getFeaturedProducts() {
  return await client.fetch(featuredProductsQuery);
}

export async function getProductsByCategory(categorySlug: string) {
  return await client.fetch(productsByCategoryQuery, { categorySlug });
}

export async function getRelatedProducts(categorySlug: string, currentSlug: string) {
  return await client.fetch(relatedProductsQuery, { categorySlug, currentSlug });
}

// Categories
export async function getCategories() {
  return await client.fetch(categoriesQuery);
}

// Store Locations
export async function getStoreLocations() {
  return await client.fetch(storeLocationsQuery);
}

// About Sections
export async function getAboutSections() {
  return await client.fetch(aboutSectionsQuery);
}

// Site Settings
export async function getSiteSettings() {
  return await client.fetch(siteSettingsQuery);
}

// Instagram Posts
export async function getInstagramPosts() {
  return await client.fetch(instagramPostsQuery);
}
