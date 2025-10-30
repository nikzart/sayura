import { Metadata } from 'next';
import ContactHero from '@/components/sections/ContactHero';
import ContactForm from '@/components/sections/ContactForm';
import { getSiteSettings } from '@/sanity/lib/fetch';

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  const title = siteSettings?.contactPage?.heroTitle
    ? `${siteSettings.contactPage.heroTitle} | ${siteSettings.brandName || 'SAYURA'}`
    : 'Contact Us | SAYURA';
  const description =
    siteSettings?.contactPage?.heroSubtitle ||
    "Get in touch with SAYURA. We're here to help with any questions about our collections, stores, or services.";

  return {
    title,
    description,
  };
}

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();

  // Extract contact page data
  const contactPage = siteSettings?.contactPage;
  const contactForm = siteSettings?.contactForm;

  return (
    <>
      <ContactHero
        title={contactPage?.heroTitle}
        subtitle={contactPage?.heroSubtitle}
        backgroundImage={contactPage?.heroBackgroundImage}
      />
      <ContactForm
        sectionHeading={contactPage?.sectionHeading}
        sectionIntro={contactPage?.sectionIntro}
        contactInfoCards={contactPage?.contactInfoCards}
        formFields={contactForm?.fields}
        successMessage={contactForm?.successMessage}
        errorMessage={contactForm?.errorMessage}
      />
    </>
  );
}

export const revalidate = 3600; // Revalidate every hour
