import { defineType } from 'sanity';

export default defineType({
  name: 'instagramPost',
  title: 'Instagram Post',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Post Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'caption',
      title: 'Caption',
      type: 'text',
      description: 'Instagram post caption',
    },
    {
      name: 'url',
      title: 'Instagram URL',
      type: 'url',
      description: 'Link to the Instagram post',
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this post appears',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'isActive',
      title: 'Show on Website',
      type: 'boolean',
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
      title: 'caption',
      media: 'image',
      order: 'order',
    },
    prepare({ title, media, order }) {
      return {
        title: title || `Instagram Post ${order}`,
        subtitle: `Order: ${order}`,
        media,
      };
    },
  },
});
