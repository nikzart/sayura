'use client';

import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

// Icon mapping for contact cards
const iconMap = {
  email: Mail,
  phone: Phone,
  location: MapPin,
  whatsapp: MessageCircle,
};

interface ContactInfoCard {
  icon: 'email' | 'phone' | 'location' | 'whatsapp';
  title: string;
  lines: string[];
  order: number;
}

interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea';
  placeholder?: string;
  required: boolean;
  order: number;
}

interface ContactFormProps {
  sectionHeading?: string;
  sectionIntro?: string;
  contactInfoCards?: ContactInfoCard[];
  formFields?: FormField[];
  successMessage?: string;
  errorMessage?: string;
}

export default function ContactForm({
  sectionHeading = 'Get in Touch',
  sectionIntro = "Have a question or need assistance? Our team is here to help. Reach out to us and we'll get back to you as soon as possible.",
  contactInfoCards = [
    {
      icon: 'email',
      title: 'Email Us',
      lines: ['hello@sayura.in', 'support@sayura.in'],
      order: 1,
    },
    {
      icon: 'phone',
      title: 'Call Us',
      lines: ['+91 1234 567890', 'Mon-Sat, 10:00 AM - 7:00 PM IST'],
      order: 2,
    },
    {
      icon: 'location',
      title: 'Visit Us',
      lines: ['123 Fashion Street', 'Bandra West, Mumbai', 'Maharashtra 400050, India'],
      order: 3,
    },
  ],
  formFields = [
    { name: 'name', label: 'Name', type: 'text', required: true, order: 1 },
    { name: 'email', label: 'Email', type: 'email', required: true, order: 2 },
    { name: 'phone', label: 'Phone', type: 'tel', required: false, order: 3 },
    { name: 'subject', label: 'Subject', type: 'text', required: true, order: 4 },
    { name: 'message', label: 'Message', type: 'textarea', required: true, order: 5 },
  ],
  successMessage = "Your message has been sent successfully. We'll get back to you soon.",
  errorMessage = 'There was an error sending your message. Please try again.',
}: ContactFormProps) {
  // Initialize form data dynamically based on form fields
  const initialFormData = formFields.reduce((acc, field) => {
    acc[field.name] = '';
    return acc;
  }, {} as Record<string, string>);

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData(initialFormData);
      setIsSubmitted(false);
    }, 3000);
  };

  const handleFieldChange = (fieldName: string, value: string) => {
    setFormData({ ...formData, [fieldName]: value });
  };

  // Sort fields by order
  const sortedFields = [...formFields].sort((a, b) => a.order - b.order);
  const sortedCards = [...contactInfoCards].sort((a, b) => a.order - b.order);

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
            <h1 className="heading-lg mb-6">{sectionHeading}</h1>
            <p className="body-text text-gray-600 mb-12">{sectionIntro}</p>

            <div className="space-y-8">
              {sortedCards.map((card, index) => {
                const IconComponent = iconMap[card.icon] || Mail;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent size={20} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{card.title}</h3>
                      {card.lines.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className={lineIndex === card.lines.length - 1 && card.lines.length > 2 ? 'text-sm text-gray-500 mt-1' : 'text-gray-600'}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
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
                <p className="text-gray-600">{successMessage}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {sortedFields.map((field) => {
                  if (field.type === 'textarea') {
                    return (
                      <div key={field.name}>
                        <label className="block text-sm font-medium tracking-widest-2 uppercase mb-2">
                          {field.label}
                          {field.required && ' *'}
                        </label>
                        <textarea
                          value={formData[field.name] || ''}
                          onChange={(e) => handleFieldChange(field.name, e.target.value)}
                          required={field.required}
                          placeholder={field.placeholder}
                          rows={6}
                          className="w-full px-4 py-3 border border-gray-300 focus:border-black focus:outline-none transition-colors font-light resize-none"
                        />
                      </div>
                    );
                  }

                  return (
                    <Input
                      key={field.name}
                      label={field.label}
                      type={field.type}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleFieldChange(field.name, e.target.value)}
                      required={field.required}
                      placeholder={field.placeholder}
                    />
                  );
                })}

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
