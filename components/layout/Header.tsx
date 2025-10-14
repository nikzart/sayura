'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { motion, AnimatePresence, useSpring } from 'framer-motion';

// Helper function to interpolate between two colors
const interpolateColor = (color1: string, color2: string, progress: number): string => {
  const rgb1 = color1.match(/\d+/g)?.map(Number) || [255, 255, 255];
  const rgb2 = color2.match(/\d+/g)?.map(Number) || [0, 0, 0];

  const r = Math.round(rgb1[0] + (rgb2[0] - rgb1[0]) * progress);
  const g = Math.round(rgb1[1] + (rgb2[1] - rgb1[1]) * progress);
  const b = Math.round(rgb1[2] + (rgb2[2] - rgb1[2]) * progress);

  return `rgb(${r}, ${g}, ${b})`;
};

export default function Header() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const rafRef = useRef<number | null>(null);

  // Spring-based smooth scroll progress with physics (0 to 1 over 200px)
  const springConfig = { stiffness: 80, damping: 20, mass: 0.5 };
  const smoothProgress = useSpring(scrollProgress, springConfig);

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }

      rafRef.current = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = 200; // Extended: Complete transition over 200px
        const progress = Math.min(scrollY / maxScroll, 1);
        setScrollProgress(progress);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
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

  // Smooth interpolation using spring progress
  const headerPadding = 24 - (scrollProgress * 12); // 24px to 12px
  const logoMarginBottom = 32 - (scrollProgress * 16); // 32px to 16px
  const headerOpacity = scrollProgress; // 0 to 1 for white background
  const shadowOpacity = scrollProgress; // 0 to 1 for shadow

  // Smooth logo scale and opacity (starts fading at 40%, completes at 60%)
  const fullLogoOpacity = Math.max(0, Math.min(1, 1 - (scrollProgress - 0.4) / 0.2));
  const miniLogoOpacity = Math.max(0, Math.min(1, (scrollProgress - 0.4) / 0.2));
  const logoScale = 1 - (scrollProgress * 0.15); // Subtle scale down

  // Smooth color transitions (white to black)
  const textColor = interpolateColor('rgb(255, 255, 255)', 'rgb(0, 0, 0)', scrollProgress);
  const textShadowOpacity = Math.max(0, 1 - scrollProgress * 2);

  return (
    <>
      <motion.header
        className="fixed top-0 w-full z-50"
        style={{
          paddingTop: `${headerPadding}px`,
          paddingBottom: `${headerPadding}px`,
          backgroundColor: `rgba(255, 255, 255, ${headerOpacity})`,
          boxShadow: `0 2px 8px rgba(0, 0, 0, ${shadowOpacity * 0.1})`,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
      >
        <div className="container-custom">
          {/* Logo - Centered at Top with Opacity Crossfade */}
          <motion.div
            className="flex justify-center"
            style={{ marginBottom: `${logoMarginBottom}px` }}
            transition={{ type: 'spring', stiffness: 80, damping: 20 }}
          >
            <Link href="/" className="relative z-50">
              <motion.div
                className="relative"
                style={{ scale: logoScale }}
                transition={{ type: 'spring', stiffness: 80, damping: 20 }}
              >
                {/* Full Logo */}
                <motion.div
                  style={{ opacity: fullLogoOpacity }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Image
                    src="/sayura-logo.svg"
                    alt="SAYURA"
                    width={200}
                    height={80}
                    className="w-auto h-16 md:h-20 lg:h-24"
                    priority
                  />
                </motion.div>

                {/* Minimized Logo */}
                <motion.div
                  style={{ opacity: miniLogoOpacity }}
                  className="flex items-center justify-center"
                >
                  <Image
                    src="/sayura-logo-minimized.svg"
                    alt="SAYURA"
                    width={200}
                    height={50}
                    className="w-auto h-10 md:h-12"
                    priority
                  />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>

          {/* Navigation and Icons - Separate Row Below Logo */}
          <div className="flex items-center justify-between">
            {/* Desktop Navigation - Centered */}
            <nav className="hidden lg:flex items-center gap-8 mx-auto">
              {NAV_LINKS.map((link) => (
                <motion.div key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light tracking-widest-2 uppercase link-underline"
                    style={{
                      color: textColor,
                      textShadow: `0 2px 4px rgba(0, 0, 0, ${textShadowOpacity * 0.8})`,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Mobile Menu Toggle - Absolute Right */}
            <div className="absolute right-6 lg:right-12 flex items-center">
              <motion.button
                className="lg:hidden p-2"
                style={{ color: textColor }}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

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
