'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, User, ArrowRight } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Sparkles,
      title: 'Explore Collections',
      description: 'Discover our carefully curated seasonal collections featuring timeless designs and contemporary elegance.',
      href: '/collections',
      label: 'View Collections',
    },
    {
      icon: MapPin,
      title: 'Visit Our Stores',
      description: 'Experience SAYURA in person. Visit our flagship stores for personalized styling and exclusive in-store services.',
      href: '/stores',
      label: 'Find Stores',
    },
    {
      icon: User,
      title: 'Our Story',
      description: 'Learn about our heritage, craftsmanship, and commitment to sustainable luxury fashion.',
      href: '/about',
      label: 'About Us',
    },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">
            Experience SAYURA
          </p>
          <h2 className="text-3xl md:text-4xl font-normal tracking-wide font-[family-name:var(--font-giordano)]">
            Why Choose Us
          </h2>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Link
                  href={feature.href}
                  className="group block text-center hover:transform hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <Icon size={28} className="text-gold" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-medium tracking-wide mb-4 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                    {feature.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-center gap-2 text-xs tracking-widest uppercase text-gray-700 group-hover:text-gold transition-colors">
                    <span>{feature.label}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
