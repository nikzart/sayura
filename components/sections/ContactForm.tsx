'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="pt-24 md:pt-32 section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="heading-lg mb-6">Get in Touch</h1>
            <p className="body-text text-gray-600 mb-12">
              Have a question or need assistance? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-gray-600">hello@sayura.in</p>
                  <p className="text-gray-600">support@sayura.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Call Us</h3>
                  <p className="text-gray-600">+91 1234 567890</p>
                  <p className="text-sm text-gray-500 mt-1">Mon-Sat, 10:00 AM - 7:00 PM IST</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} className="text-gold" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Fashion Street<br />
                    Bandra West, Mumbai<br />
                    Maharashtra 400050, India
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 p-8 md:p-12"
          >
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg
                    className="w-8 h-8 text-white"
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
                </div>
                <h3 className="heading-sm mb-3">Thank You!</h3>
                <p className="text-gray-600">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />

                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />

                <Input
                  label="Phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />

                <Input
                  label="Subject"
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />

                <div>
                  <label className="block text-sm font-medium tracking-widest-2 uppercase mb-2">
                    Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light resize-none"
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" fullWidth>
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
