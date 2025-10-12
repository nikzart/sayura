import { Metadata } from 'next';
import StoreLocator from '@/components/sections/StoreLocator';

export const metadata: Metadata = {
  title: 'Store Locator | SAYURA',
  description: 'Find SAYURA stores near you. Visit us for an exclusive shopping experience and personalized styling services.',
};

export default function StoresPage() {
  return <StoreLocator />;
}
