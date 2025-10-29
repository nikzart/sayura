'use client';

import { motion } from 'framer-motion';
import { Sparkles, Heart, Leaf, Users } from 'lucide-react';
import ValueIcon from '@/components/ui/ValueIcon';

interface Value {
  icon: string;
  title: string;
  description: string;
  order?: number;
}

interface ValuesProps {
  heading?: string;
  description?: string;
  values?: Value[];
}

// Fallback static values
const defaultValues = [
  {
    icon: 'sparkles',
    title: 'Excellence',
    description: 'We never compromise on quality, ensuring every piece meets our rigorous standards of craftsmanship and design.',
  },
  {
    icon: 'heart',
    title: 'Passion',
    description: 'Our love for fashion and dedication to our craft drives us to create pieces that inspire and delight.',
  },
  {
    icon: 'leaf',
    title: 'Sustainability',
    description: 'We are committed to ethical practices and environmental responsibility in every aspect of our business.',
  },
  {
    icon: 'users',
    title: 'Community',
    description: 'We value the artisans, partners, and customers who make SAYURA possible, fostering meaningful relationships.',
  },
];

export default function Values({
  heading = 'Our Values',
  description = 'The principles that guide us in everything we do',
  values = defaultValues
}: ValuesProps) {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-lg mb-4">{heading}</h2>
          <p className="body-text text-gray-600 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <ValueIcon iconName={value.icon} size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-medium mb-3">{value.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
