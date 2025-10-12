'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ProductTabsProps {
  category: string;
}

export default function ProductTabs({ category }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState('description');

  const tabs = [
    { id: 'description', label: 'Description' },
    { id: 'craftsmanship', label: 'Craftsmanship' },
    { id: 'styling', label: 'Styling Tips' },
    { id: 'care', label: 'Care & Size' },
  ];

  return (
    <div className="border-t border-gray-200 pt-12">
      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-8 mb-8 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-sm tracking-wide uppercase transition-colors relative ${
              activeTab === tab.id
                ? 'text-gold font-medium'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="prose prose-gray max-w-none">
        {activeTab === 'description' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-medium tracking-wide mb-4">Product Description</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This exquisite piece embodies the perfect blend of traditional craftsmanship and contemporary design.
              Crafted from premium materials, each garment tells a story of dedication, skill, and timeless beauty.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our artisans have meticulously created this piece with attention to every detail, ensuring
              exceptional quality and a luxurious feel. The elegant silhouette flatters all body types while
              maintaining comfort and ease of movement.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>Premium quality fabric with a luxurious drape</li>
              <li>Intricate detailing and handcrafted embellishments</li>
              <li>Comfortable fit designed for all-day wear</li>
              <li>Versatile styling options for various occasions</li>
              <li>Made with sustainable and ethically sourced materials</li>
            </ul>
          </motion.div>
        )}

        {activeTab === 'craftsmanship' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-medium tracking-wide mb-4">Heritage & Craftsmanship</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Each SAYURA piece is a testament to centuries-old traditions preserved through generations of
              skilled artisans. Our master craftspeople bring decades of experience, passed down through families
              who have dedicated their lives to textile artistry.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              This {category.toLowerCase()} showcases:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
              <li>Hand-embroidered details using traditional techniques</li>
              <li>Carefully selected premium fabrics from trusted suppliers</li>
              <li>Quality construction with reinforced seams and finishing</li>
              <li>Time-honored methods combined with modern precision</li>
              <li>Authentic craftsmanship that honors cultural heritage</li>
            </ul>
            <p className="text-gray-700 leading-relaxed italic">
              "True luxury lies not in excess, but in the details that speak of dedication and artistry."
            </p>
          </motion.div>
        )}

        {activeTab === 'styling' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-medium tracking-wide mb-4">Styling Recommendations</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              This versatile piece can be styled in multiple ways to suit various occasions and personal preferences.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Formal Events</h4>
                <p className="text-gray-700">
                  Pair with statement jewelry and elegant heels for weddings, galas, or special celebrations.
                  Add a clutch and sophisticated hair styling to complete the look.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Casual Elegance</h4>
                <p className="text-gray-700">
                  Style with minimal accessories and comfortable flats or sandals for daytime events or
                  intimate gatherings. Keep makeup natural and hair relaxed.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">Festive Occasions</h4>
                <p className="text-gray-700">
                  Enhance with traditional jewelry, rich colors in accessories, and ornate styling.
                  Perfect for cultural celebrations, festivals, and family functions.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'care' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-medium tracking-wide mb-4">Care Instructions & Size Guide</h3>

            <div className="mb-8">
              <h4 className="font-medium text-gray-900 mb-3">Care Instructions</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Dry clean only for best results</li>
                <li>If hand washing, use cold water and mild detergent</li>
                <li>Do not wring or twist the fabric</li>
                <li>Lay flat to dry in shade, away from direct sunlight</li>
                <li>Iron on low heat while slightly damp</li>
                <li>Store in a cool, dry place with proper ventilation</li>
                <li>Use cotton garment bags for long-term storage</li>
              </ul>
            </div>

            <div>
              <h4 className="font-medium text-gray-900 mb-3">Size Guide</h4>
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-2 border-b text-left text-sm">Size</th>
                      <th className="px-4 py-2 border-b text-left text-sm">Bust (inches)</th>
                      <th className="px-4 py-2 border-b text-left text-sm">Waist (inches)</th>
                      <th className="px-4 py-2 border-b text-left text-sm">Hip (inches)</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="px-4 py-2 border-b">XS</td>
                      <td className="px-4 py-2 border-b">32-34</td>
                      <td className="px-4 py-2 border-b">24-26</td>
                      <td className="px-4 py-2 border-b">34-36</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">S</td>
                      <td className="px-4 py-2 border-b">34-36</td>
                      <td className="px-4 py-2 border-b">26-28</td>
                      <td className="px-4 py-2 border-b">36-38</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">M</td>
                      <td className="px-4 py-2 border-b">36-38</td>
                      <td className="px-4 py-2 border-b">28-30</td>
                      <td className="px-4 py-2 border-b">38-40</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 border-b">L</td>
                      <td className="px-4 py-2 border-b">38-40</td>
                      <td className="px-4 py-2 border-b">30-32</td>
                      <td className="px-4 py-2 border-b">40-42</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2">XL</td>
                      <td className="px-4 py-2">40-42</td>
                      <td className="px-4 py-2">32-34</td>
                      <td className="px-4 py-2">42-44</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-3 italic">
                Note: Measurements are approximate. For custom sizing, please visit one of our stores.
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
