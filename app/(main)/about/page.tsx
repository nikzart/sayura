import { Metadata } from 'next';
import AboutHero from '@/components/sections/AboutHero';
import BrandStory from '@/components/sections/BrandStory';
import Values from '@/components/sections/Values';

export const metadata: Metadata = {
  title: 'About Us | SAYURA',
  description: 'Discover the story behind SAYURA - a brand dedicated to timeless elegance, exceptional craftsmanship, and sustainable luxury.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <BrandStory />
      <Values />
    </>
  );
}
