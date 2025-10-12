import { Metadata } from 'next';
import CollectionsHero from '@/components/sections/CollectionsHero';
import LookbookGrid from '@/components/sections/LookbookGrid';

export const metadata: Metadata = {
  title: 'Collections | SAYURA',
  description: 'Explore SAYURA\'s curated collections featuring exquisite designs and timeless elegance.',
};

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHero />
      <LookbookGrid />
    </>
  );
}
