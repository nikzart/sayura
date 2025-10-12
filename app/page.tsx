import Hero from "@/components/sections/Hero";
import SplitHero from "@/components/sections/SplitHero";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import BentoGridHero from "@/components/sections/BentoGridHero";
import ParallaxHero from "@/components/sections/ParallaxHero";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitHero />
      <FeaturedCollection />
      <BentoGridHero />
      <ParallaxHero />
      <InstagramFeed />
      <Newsletter />
    </>
  );
}
