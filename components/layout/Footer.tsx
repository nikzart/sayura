import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { BRAND_NAME, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

interface SiteSettings {
  brandName?: string;
  footerText?: string;
  contactEmail?: string;
  contactPhone?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    pinterest?: string;
    twitter?: string;
  };
  showSocialInFooter?: boolean;
  footerLinks?: {
    customerCare?: FooterLink[];
    legal?: FooterLink[];
  };
}

interface FooterProps {
  siteSettings?: SiteSettings;
}

export default function Footer({ siteSettings }: FooterProps) {
  const currentYear = new Date().getFullYear();

  // Extract settings with fallbacks
  const brandName = siteSettings?.brandName || BRAND_NAME;
  const footerText =
    siteSettings?.footerText ||
    `Discover timeless elegance and exceptional craftsmanship with ${brandName}'s exclusive collection of premium clothing.`;
  const contactEmail = siteSettings?.contactEmail || 'hello@sayura.in';
  const contactPhone = siteSettings?.contactPhone || '+91 1234 567890';
  const socialLinks = siteSettings?.socialLinks || SOCIAL_LINKS;
  const showSocial = siteSettings?.showSocialInFooter !== false;

  // Default customer care links
  const defaultCustomerCare: FooterLink[] = [
    { label: 'Shipping & Delivery', href: '/shipping' },
    { label: 'Returns & Exchanges', href: '/returns' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'FAQ', href: '/faq' },
  ];

  // Default legal links
  const defaultLegal: FooterLink[] = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ];

  const customerCareLinks = siteSettings?.footerLinks?.customerCare || defaultCustomerCare;
  const legalLinks = siteSettings?.footerLinks?.legal || defaultLegal;

  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Image
              src="/sayura-logo.svg"
              alt={brandName}
              width={120}
              height={40}
              className="h-8 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm font-light leading-relaxed text-gray-400">
              {footerText}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-medium tracking-widest-2 uppercase mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-gray-400 hover:text-white link-underline transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-base font-medium tracking-widest-2 uppercase mb-6">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {customerCareLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-gray-400 hover:text-white link-underline transition-colors"
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base font-medium tracking-widest-2 uppercase mb-6">
              Connect
            </h4>
            {showSocial && (socialLinks.instagram || socialLinks.facebook || socialLinks.twitter) && (
              <div className="flex gap-4 mb-6">
                {socialLinks.instagram && (
                  <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-700 hover:border-white transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                )}
                {socialLinks.facebook && (
                  <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-700 hover:border-white transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                )}
                {socialLinks.twitter && (
                  <a
                    href={socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 border border-gray-700 hover:border-white transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter size={20} />
                  </a>
                )}
              </div>
            )}
            <p className="text-sm font-light text-gray-400 mb-2">
              Email: {contactEmail}
            </p>
            <p className="text-sm font-light text-gray-400">
              Phone: {contactPhone}
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-gray-500">
              © {currentYear} {brandName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-xs font-light text-gray-500 hover:text-white transition-colors"
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
