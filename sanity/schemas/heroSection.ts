import { defineType } from 'sanity';

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Hero Title',
      type: 'string',
      description: 'Main heading text (e.g., "TIMELESS ELEGANCE")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Descriptive text below the title',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      description: 'Call-to-action button text (e.g., "EXPLORE")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      description: 'Where the button should link to (e.g., "/collections")',
    },
    {
      name: 'backgroundVideo',
      title: 'Background Video',
      type: 'file',
      description: 'Hero background video (MP4 format recommended)',
      options: {
        accept: 'video/*',
      },
    },
    {
      name: 'backgroundImage',
      title: 'Background Image (Fallback)',
      type: 'image',
      description: 'Fallback image if video is not available',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'posterImage',
      title: 'Video Poster Image',
      type: 'image',
      description: 'Image shown before video loads',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'posterImage',
    },
  },
});
