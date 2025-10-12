// Brand Constants
export const BRAND_NAME = "SAYURA";

// Navigation Links
export const NAV_LINKS = [
  { label: "Collections", href: "/collections" },
  { label: "New Arrivals", href: "/#new-products" },
  { label: "Store Locator", href: "/stores" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// Social Media Links
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/sayura.in",
  facebook: "#",
  pinterest: "#",
};

// Sample Product Data (Replace with API/CMS data)
export const SAMPLE_PRODUCTS = [
  {
    id: 1,
    name: "Silk Evening Dress",
    category: "Dresses",
    price: 12999,
    image: "/images/products/product-1.jpg",
    slug: "silk-evening-dress",
  },
  {
    id: 2,
    name: "Embroidered Jacket",
    category: "Outerwear",
    price: 15999,
    image: "/images/products/product-2.jpg",
    slug: "embroidered-jacket",
  },
  {
    id: 3,
    name: "Cotton Palazzo Set",
    category: "Sets",
    price: 8999,
    image: "/images/products/product-3.jpg",
    slug: "cotton-palazzo-set",
  },
  {
    id: 4,
    name: "Designer Saree",
    category: "Sarees",
    price: 18999,
    image: "/images/products/product-4.jpg",
    slug: "designer-saree",
  },
];

// Store Locations
export const STORE_LOCATIONS = [
  {
    id: 1,
    name: "SAYURA Mumbai Flagship",
    address: "123 Fashion Street, Bandra West, Mumbai, Maharashtra 400050",
    phone: "+91 22 1234 5678",
    hours: "10:00 AM - 9:00 PM",
    coordinates: { lat: 19.0596, lng: 72.8295 },
  },
  {
    id: 2,
    name: "SAYURA Delhi Store",
    address: "456 Khan Market, New Delhi, Delhi 110003",
    phone: "+91 11 1234 5678",
    hours: "10:00 AM - 8:30 PM",
    coordinates: { lat: 28.6139, lng: 77.2090 },
  },
  {
    id: 3,
    name: "SAYURA Bangalore Store",
    address: "789 MG Road, Bangalore, Karnataka 560001",
    phone: "+91 80 1234 5678",
    hours: "10:30 AM - 9:00 PM",
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
];

// Collection Categories
export const COLLECTIONS = [
  {
    id: 1,
    title: "Spring Summer 2025",
    description: "Ethereal silhouettes meet contemporary design",
    image: "/images/collections/ss25.jpg",
    slug: "spring-summer-2025",
  },
  {
    id: 2,
    title: "Heritage Collection",
    description: "Timeless elegance with traditional craftsmanship",
    image: "/images/collections/heritage.jpg",
    slug: "heritage",
  },
  {
    id: 3,
    title: "Evening Luxe",
    description: "Sophisticated pieces for special occasions",
    image: "/images/collections/evening.jpg",
    slug: "evening-luxe",
  },
];

// Instagram Feed Placeholder (Replace with API data)
export const INSTAGRAM_POSTS = [
  { id: 1, image: "/images/instagram/post-1.jpg", url: SOCIAL_LINKS.instagram },
  { id: 2, image: "/images/instagram/post-2.jpg", url: SOCIAL_LINKS.instagram },
  { id: 3, image: "/images/instagram/post-3.jpg", url: SOCIAL_LINKS.instagram },
  { id: 4, image: "/images/instagram/post-4.jpg", url: SOCIAL_LINKS.instagram },
  { id: 5, image: "/images/instagram/post-5.jpg", url: SOCIAL_LINKS.instagram },
  { id: 6, image: "/images/instagram/post-6.jpg", url: SOCIAL_LINKS.instagram },
  { id: 7, image: "/images/instagram/post-7.jpg", url: SOCIAL_LINKS.instagram },
  { id: 8, image: "/images/instagram/post-8.jpg", url: SOCIAL_LINKS.instagram },
];
