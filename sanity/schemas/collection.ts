import { defineType } from 'sanity';

export default defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Collection Title',
      type: 'string',
      description: 'e.g., "Bridal Lehenga"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'URL-friendly version of the title',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Short description of the collection',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed description with rich text formatting',
    },
    {
      name: 'image',
      title: 'Featured Image',
      type: 'image',
      description: 'Main collection image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      description: 'Additional images for the collection',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this collection appears (lower numbers first)',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      description: 'Show this collection on the website',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      media: 'image',
    },
  },
});
