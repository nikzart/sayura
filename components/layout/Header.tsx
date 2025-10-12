'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container-custom">
          {/* Logo - Centered at Top */}
          <div className="flex justify-center mb-6 md:mb-8">
            <Link href="/" className="relative z-50">
              <Image
                src="/sayura-logo.svg"
                alt="SAYURA"
                width={200}
                height={60}
                className={`w-auto transition-all duration-300 ${
                  isScrolled ? 'h-10 md:h-12' : 'h-16 md:h-20 lg:h-24'
                }`}
                priority
              />
            </Link>
          </div>

          {/* Navigation and Icons - Separate Row Below Logo */}
          <div className="flex items-center justify-between">
            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-8 mx-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-light tracking-widest-2 uppercase link-underline transition-colors ${
                    isScrolled ? 'text-black' : 'text-white text-shadow-lg'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Toggle - Absolute Right */}
            <div className="absolute right-6 lg:right-12 flex items-center">
              <button
                className={`lg:hidden p-2 transition-colors ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-40 shadow-2xl overflow-y-auto"
          >
            <div className="p-8 pt-24">
              {/* Mobile Navigation Links */}
              <nav className="space-y-6">
                {NAV_LINKS.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-2xl font-light tracking-wide py-2 border-b border-gray-200 hover:text-gold transition-colors font-[family-name:var(--font-giordano)]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
