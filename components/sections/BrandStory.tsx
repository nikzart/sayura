'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import PortableTextRenderer from '@/components/ui/PortableTextRenderer';
import { getSanityImageUrl } from '@/lib/sanityHelpers';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

interface ContentSection {
  title: string;
  content: any; // Portable Text blocks
  image: SanityImageSource | string;
  imagePosition: 'left' | 'right';
  order?: number;
}

interface BrandStoryProps {
  introHeading?: string;
  introContent?: any; // Portable Text blocks
  sections?: ContentSection[];
}

export default function BrandStory({
  introHeading = 'Crafting Elegance Since 2010',
  introContent,
  sections = []
}: BrandStoryProps) {
  // Fallback static intro content if not provided
  const hasIntroContent = introContent && Array.isArray(introContent) && introContent.length > 0;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <h2 className="heading-lg mb-6">{introHeading}</h2>
          {hasIntroContent ? (
            <PortableTextRenderer value={introContent} />
          ) : (
            <>
              <p className="body-text text-gray-600 leading-relaxed mb-4">
                SAYURA was born from a vision to create clothing that transcends trends and celebrates the beauty of craftsmanship. Our journey began with a simple belief: that true luxury lies in the details, the quality of materials, and the skill of artisans who pour their hearts into every stitch.
              </p>
              <p className="body-text text-gray-600 leading-relaxed">
                Today, we continue to honor this vision by creating pieces that empower individuals to express their unique style while embracing timeless elegance.
              </p>
            </>
          )}
        </motion.div>

        {/* Dynamic Content Sections */}
        {sections.length > 0 ? (
          sections.map((section, index) => {
            const imageUrl = typeof section.image === 'string'
              ? section.image
              : getSanityImageUrl(section.image, 800, 1000);

            const isReversed = section.imagePosition === 'right';
            const isLastSection = index === sections.length - 1;

            return (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${!isLastSection ? 'mb-24' : ''}`}
              >
                {/* Image */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={isReversed ? 'lg:order-2' : ''}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={section.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={isReversed ? 'lg:order-1' : ''}
                >
                  <h3 className="heading-md mb-6">{section.title}</h3>
                  <PortableTextRenderer value={section.content} />
                </motion.div>
              </div>
            );
          })
        ) : (
          /* Fallback Static Content */
          <>
            {/* Split Layout 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="/images/about/craftsmanship.jpg"
                  alt="Craftsmanship"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="heading-md mb-6">Heritage & Craftsmanship</h3>
                <p className="body-text text-gray-600 mb-4">
                  Each SAYURA piece is a testament to the centuries-old traditions of textile artistry. We work closely with master artisans who have honed their skills over generations, ensuring that every garment meets our exacting standards of quality and beauty.
                </p>
                <p className="body-text text-gray-600">
                  From hand-embroidered details to carefully selected fabrics, we believe in preserving traditional techniques while embracing modern design sensibilities.
                </p>
              </motion.div>
            </div>

            {/* Split Layout 2 - Reversed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:order-2"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="/images/about/sustainability.jpg"
                    alt="Sustainability"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:order-1"
              >
                <h3 className="heading-md mb-6">Sustainable Luxury</h3>
                <p className="body-text text-gray-600 mb-4">
                  We believe that true luxury should never come at the cost of our planet. That's why we're committed to sustainable practices throughout our supply chain, from sourcing eco-friendly materials to ensuring fair working conditions for our artisans.
                </p>
                <p className="body-text text-gray-600">
                  Every SAYURA garment is designed to last, both in terms of quality and style. We create pieces that you'll cherish for years to come, reducing the need for constant replacement and minimizing environmental impact.
                </p>
              </motion.div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
