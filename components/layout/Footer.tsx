import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook } from 'lucide-react';
import { BRAND_NAME, NAV_LINKS, SOCIAL_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="container-custom section-padding">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
            <Image
              src="/sayura-logo.svg"
              alt={BRAND_NAME}
              width={120}
              height={40}
              className="h-8 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-sm font-light leading-relaxed text-gray-400">
              Discover timeless elegance and exceptional craftsmanship with {BRAND_NAME}'s exclusive collection of premium clothing.
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
              <li>
                <Link href="/shipping" className="text-sm font-light text-gray-400 hover:text-white link-underline transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-sm font-light text-gray-400 hover:text-white link-underline transition-colors">
                  Returns & Exchanges
                </Link>
              </li>
              <li>
                <Link href="/size-guide" className="text-sm font-light text-gray-400 hover:text-white link-underline transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm font-light text-gray-400 hover:text-white link-underline transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-base font-medium tracking-widest-2 uppercase mb-6">
              Connect
            </h4>
            <div className="flex gap-4 mb-6">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-700 hover:border-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-gray-700 hover:border-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
            </div>
            <p className="text-sm font-light text-gray-400 mb-2">
              Email: hello@sayura.in
            </p>
            <p className="text-sm font-light text-gray-400">
              Phone: +91 1234 567890
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs font-light text-gray-500">
              © {currentYear} {BRAND_NAME}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-xs font-light text-gray-500 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-xs font-light text-gray-500 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
