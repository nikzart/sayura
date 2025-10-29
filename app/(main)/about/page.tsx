import { Metadata } from 'next';
import AboutHero from '@/components/sections/AboutHero';
import BrandStory from '@/components/sections/BrandStory';
import Values from '@/components/sections/Values';
import { getAboutPage } from '@/sanity/lib/fetch';

export async function generateMetadata(): Promise<Metadata> {
  const aboutData = await getAboutPage();

  return {
    title: aboutData?.pageTitle || 'About Us | SAYURA',
    description: aboutData?.pageDescription || 'Discover the story behind SAYURA - a brand dedicated to timeless elegance, exceptional craftsmanship, and sustainable luxury.',
  };
}

export default async function AboutPage() {
  const aboutData = await getAboutPage();

  // If no Sanity data, show static content (components have fallbacks)
  if (!aboutData) {
    return (
      <>
        <AboutHero />
        <BrandStory />
        <Values />
      </>
    );
  }

  // If unpublished, show static content
  if (aboutData.isPublished === false) {
    return (
      <>
        <AboutHero />
        <BrandStory />
        <Values />
      </>
    );
  }

  return (
    <>
      <AboutHero
        title={aboutData.heroTitle}
        subtitle={aboutData.heroSubtitle}
        backgroundImage={aboutData.heroBackgroundImage}
      />
      <BrandStory
        introHeading={aboutData.introHeading}
        introContent={aboutData.introContent}
        sections={aboutData.contentSections}
      />
      <Values
        heading={aboutData.valuesHeading}
        description={aboutData.valuesDescription}
        values={aboutData.values}
      />
    </>
  );
}

export const revalidate = 3600; // Revalidate every hour
