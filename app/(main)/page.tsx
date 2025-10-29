import Hero from "@/components/sections/Hero";
import SplitHero from "@/components/sections/SplitHero";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import BentoGridHero from "@/components/sections/BentoGridHero";
import ParallaxHero from "@/components/sections/ParallaxHero";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Newsletter from "@/components/sections/Newsletter";
import {
  getHeroSection,
  getCollections,
  getFeaturedProducts,
  getInstagramPosts,
  getSiteSettings
} from "@/sanity/lib/fetch";

export default async function Home() {
  // Fetch all data in parallel for optimal performance
  const [heroData, collections, featuredProducts, instagramPosts, siteSettings] = await Promise.all([
    getHeroSection(),
    getCollections(),
    getFeaturedProducts(),
    getInstagramPosts(),
    getSiteSettings(),
  ]);

  // Extract Instagram URL from site settings
  const instagramUrl = siteSettings?.socialLinks?.instagram || 'https://instagram.com/sayura.in';

  return (
    <>
      <Hero heroData={heroData} />
      <SplitHero />
      <FeaturedCollection collections={collections.slice(0, 2)} />
      <BentoGridHero />
      <ParallaxHero />
      <InstagramFeed posts={instagramPosts} instagramUrl={instagramUrl} />
      <Newsletter />
    </>
  );
}

export const revalidate = 3600; // Revalidate every hour
