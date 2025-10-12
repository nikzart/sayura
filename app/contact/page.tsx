import { Metadata } from 'next';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us | SAYURA',
  description: 'Get in touch with SAYURA. We\'re here to help with any questions about our collections, stores, or services.',
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactForm />
    </>
  );
}
