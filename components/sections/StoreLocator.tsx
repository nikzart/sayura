'use client';

import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { STORE_LOCATIONS } from '@/lib/constants';
import Button from '@/components/ui/Button';

export default function StoreLocator() {
  const [selectedStore, setSelectedStore] = useState(STORE_LOCATIONS[0]);

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
          <h1 className="heading-lg mb-4">Visit Our Stores</h1>
          <p className="body-text text-gray-600">
            Experience SAYURA in person at one of our exclusive boutiques. Our expert stylists are ready to help you find the perfect piece.
          </p>
        </motion.div>
      </div>

      {/* Map and Store List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
        {/* Store List */}
        <div className="bg-gray-50 p-8 md:p-12 overflow-y-auto max-h-[600px]">
          <div className="space-y-6">
            {STORE_LOCATIONS.map((store, index) => (
              <motion.div
                key={store.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 bg-white cursor-pointer transition-all ${
                  selectedStore.id === store.id
                    ? 'border-2 border-gold shadow-lg'
                    : 'border border-gray-200 hover:border-gray-300'
                }`}
                onClick={() => setSelectedStore(store)}
              >
                <h3 className="text-xl font-medium mb-4">{store.name}</h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-gray-600">
                    <MapPin size={18} className="mt-1 flex-shrink-0" />
                    <p className="text-sm">{store.address}</p>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Phone size={18} className="flex-shrink-0" />
                    <p className="text-sm">{store.phone}</p>
                  </div>

                  <div className="flex items-center gap-3 text-gray-600">
                    <Clock size={18} className="flex-shrink-0" />
                    <p className="text-sm">{store.hours}</p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <Button
                    variant="secondary"
                    size="sm"
                    fullWidth
                    onClick={() =>
                      window.open(
                        `https://www.google.com/maps/dir/?api=1&destination=${store.coordinates.lat},${store.coordinates.lng}`,
                        '_blank'
                      )
                    }
                  >
                    Get Directions
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="relative bg-gray-200">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <MapPin size={48} className="mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-2">Interactive Map</p>
              <p className="text-sm text-gray-500">
                Integrate Google Maps API to display store locations
              </p>
              <p className="text-xs text-gray-400 mt-4">
                Selected: {selectedStore.name}
              </p>
            </div>
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
      <div className="bg-black text-white section-padding">
        <div className="container-custom">
          <h2 className="heading-md text-center mb-12">In-Store Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">👗</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Personal Styling</h3>
              <p className="text-gray-400 text-sm">
                Complimentary styling consultations with our expert fashion advisors
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Alterations</h3>
              <p className="text-gray-400 text-sm">
                Professional tailoring services to ensure the perfect fit
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎁</span>
              </div>
              <h3 className="text-xl font-medium mb-2">Gift Services</h3>
              <p className="text-gray-400 text-sm">
                Elegant gift wrapping and personalized styling suggestions
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
