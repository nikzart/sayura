import { Metadata } from 'next';
import CollectionsHero from '@/components/sections/CollectionsHero';
import LookbookGrid from '@/components/sections/LookbookGrid';
import { getCollections } from '@/sanity/lib/fetch';

export const metadata: Metadata = {
  title: 'Collections | SAYURA',
  description: 'Explore SAYURA\'s curated collections featuring exquisite designs and timeless elegance.',
};

export default async function CollectionsPage() {
  const collections = await getCollections();

  return (
    <>
      <CollectionsHero />
      <LookbookGrid collections={collections} />
    </>
  );
}

export const revalidate = 3600;
