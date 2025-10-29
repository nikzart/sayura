import { defineType } from 'sanity';

export default defineType({
  name: 'aboutSection',
  title: 'About Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'heading',
      title: 'Main Heading',
      type: 'string',
      description: 'Large heading text',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Rich text content for this section',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Section Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
          { title: 'Full Width', value: 'full' },
        ],
      },
      initialValue: 'right',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this section appears',
      validation: (Rule) => Rule.required().min(0),
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
      subtitle: 'heading',
      media: 'image',
    },
  },
});
