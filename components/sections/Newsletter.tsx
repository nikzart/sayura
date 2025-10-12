'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement newsletter signup API
    console.log('Newsletter signup:', email);
    setIsSubmitted(true);
    setTimeout(() => {
      setEmail('');
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="section-padding bg-black text-white">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-md mb-4">Join Our Exclusive Circle</h2>
            <p className="body-text text-gray-400 mb-8">
              Be the first to discover new collections, exclusive offers, and style inspiration
            </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-8"
              >
                <div className="inline-flex items-center gap-2 text-gold text-lg">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Thank you for subscribing!
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>
                <Button type="submit" variant="gold" size="md">
                  Subscribe
                </Button>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-6">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
