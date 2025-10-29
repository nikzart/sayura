import { Metadata } from 'next';
import StoresHero from '@/components/sections/StoresHero';
import StoreLocator from '@/components/sections/StoreLocator';
import { getStoreLocations } from '@/sanity/lib/fetch';

export const metadata: Metadata = {
  title: 'Store Locator | SAYURA',
  description: 'Find SAYURA stores near you. Visit us for an exclusive shopping experience and personalized styling services.',
};

export default async function StoresPage() {
  const stores = await getStoreLocations();

  return (
    <>
      <StoresHero />
      <StoreLocator stores={stores} />
    </>
  );
}

export const revalidate = 3600;
