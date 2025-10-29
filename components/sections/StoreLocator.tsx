'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock, Sparkles, Scissors, Gift } from 'lucide-react';
import { motion } from 'framer-motion';

interface StoreLocatorProps {
  stores: any[];
}

export default function StoreLocator({ stores }: StoreLocatorProps) {
  const [selectedStore, setSelectedStore] = useState(stores && stores.length > 0 ? stores[0] : null);

  if (!stores || stores.length === 0 || !selectedStore) {
    return null;
  }

  return (
    <section className="pt-24 md:pt-32">
      {/* Header */}
      <div className="container-custom py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="heading-lg mb-4 font-[family-name:var(--font-giordano)]">Visit Our Stores</h1>
          <p className="body-text text-gray-600 leading-relaxed">
            Experience SAYURA in person at one of our exclusive boutiques. Our expert stylists are ready to help you find the perfect piece.
          </p>
        </motion.div>
      </div>

      {/* Map and Store List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Store List */}
        <div className="bg-white p-12 md:p-16 lg:p-20 overflow-y-auto max-h-[600px]">
          <div className="space-y-8">
            {stores.map((store, index) => {
              const storeId = store._id || store.id;
              const selectedId = selectedStore?._id || selectedStore?.id;

              return (
              <motion.div
                key={storeId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`p-8 cursor-pointer transition-all duration-300 ${
                  selectedId === storeId
                    ? 'border border-black'
                    : 'border border-gray-200 hover:border-gray-400'
                }`}
                onClick={() => setSelectedStore(store)}
              >
                <h3 className="text-lg font-normal mb-8 font-[family-name:var(--font-giordano)] tracking-wider uppercase">
                  {store.name}
                </h3>

                <div className="space-y-5">
                  <div className="flex items-start gap-4 text-gray-600">
                    <MapPin size={18} className="flex-shrink-0 mt-0.5" strokeWidth={1} />
                    <p className="text-sm leading-relaxed">{store.address}</p>
                  </div>

                  <div className="flex items-center gap-4 text-gray-600">
                    <Phone size={18} className="flex-shrink-0" strokeWidth={1} />
                    <p className="text-sm">{store.phone}</p>
                  </div>

                  <div className="flex items-center gap-4 text-gray-600">
                    <Clock size={18} className="flex-shrink-0" strokeWidth={1} />
                    <p className="text-sm">{store.hours}</p>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-100">
                  <button
                    className="text-sm uppercase tracking-widest hover:opacity-60 transition-opacity duration-300"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`,
                        '_blank'
                      );
                    }}
                  >
                    Get Directions →
                  </button>
                </div>
              </motion.div>
              );
            })}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative bg-gray-50 flex items-center justify-center">
          <div className="text-center p-12">
            <MapPin size={40} className="mx-auto mb-6 text-gray-300" strokeWidth={1} />

            <p className="text-xs uppercase tracking-widest text-gray-400 mb-4">
              Currently Viewing
            </p>
            <p className="text-sm text-gray-600 font-normal">
              {selectedStore.name}
            </p>
          </div>

          {/* Note: To integrate Google Maps:
              1. Get Google Maps API key
              2. Install @googlemaps/js-api-loader
              3. Create map component with markers for each store
              4. Center map on selected store
          */}
        </div>
      </div>

      {/* Store Services */}
      <div className="bg-white section-padding">
        <div className="container-custom">
          {/* Section header */}
          <div className="text-center mb-20">
            <h2 className="text-2xl font-normal tracking-wider uppercase font-[family-name:var(--font-giordano)]">
              In-Store Services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-20 max-w-5xl mx-auto">
            {/* Personal Styling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Sparkles size={28} className="mx-auto mb-8 text-gray-400" strokeWidth={1} />
              <h3 className="text-sm uppercase tracking-widest mb-4 font-normal">
                Personal Styling
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Complimentary styling consultations with our expert fashion advisors
              </p>
            </motion.div>

            {/* Alterations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Scissors size={28} className="mx-auto mb-8 text-gray-400" strokeWidth={1} />
              <h3 className="text-sm uppercase tracking-widest mb-4 font-normal">
                Alterations
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Professional tailoring services to ensure the perfect fit
              </p>
            </motion.div>

            {/* Gift Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Gift size={28} className="mx-auto mb-8 text-gray-400" strokeWidth={1} />
              <h3 className="text-sm uppercase tracking-widest mb-4 font-normal">
                Gift Services
              </h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Elegant gift wrapping and personalized styling suggestions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
