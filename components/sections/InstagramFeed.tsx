'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import { INSTAGRAM_POSTS, SOCIAL_LINKS } from '@/lib/constants';
import Modal from '@/components/ui/Modal';

export default function InstagramFeed() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Instagram size={28} />
              <h2 className="heading-md">@sayura.in</h2>
            </div>
            <p className="body-text text-gray-600">
              Follow us on Instagram for style inspiration and behind-the-scenes moments
            </p>
          </motion.div>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {INSTAGRAM_POSTS.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => setSelectedImage(post.image)}
            >
              <Image
                src={post.image}
                alt={`Instagram post ${post.id}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href={SOCIAL_LINKS.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-medium tracking-widest-2 uppercase transition-all duration-300 hover:shadow-lg"
          >
            <Instagram size={20} />
            Follow on Instagram
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        {selectedImage && (
          <div className="relative aspect-square w-full max-w-2xl mx-auto">
            <Image
              src={selectedImage}
              alt="Instagram post"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
