import Hero from "@/components/sections/Hero";
import NewProducts from "@/components/sections/NewProducts";
import FeaturedCollection from "@/components/sections/FeaturedCollection";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Newsletter from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <NewProducts />
      <FeaturedCollection />
      <InstagramFeed />
      <Newsletter />
    </>
  );
}
