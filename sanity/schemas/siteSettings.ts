import { defineType } from 'sanity';

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'brandName',
      title: 'Brand Name',
      type: 'string',
      description: 'Your brand name (e.g., "SAYURA")',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Brand Logo',
      type: 'image',
      description: 'Full logo with design',
    },
    {
      name: 'logoMinimized',
      title: 'Minimized Logo',
      type: 'image',
      description: 'Text-only or compact logo for scrolled header',
    },
    {
      name: 'tagline',
      title: 'Brand Tagline',
      type: 'string',
      description: 'Short brand description or tagline',
    },
    {
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      name: 'contactPhone',
      title: 'Contact Phone',
      type: 'string',
    },
    {
      name: 'socialLinks',
      title: 'Social Media Links',
      type: 'object',
      fields: [
        {
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        },
        {
          name: 'pinterest',
          title: 'Pinterest URL',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter/X URL',
          type: 'url',
        },
      ],
    },
    {
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'object',
      fields: [
        {
          name: 'metaTitle',
          title: 'Default Meta Title',
          type: 'string',
        },
        {
          name: 'metaDescription',
          title: 'Default Meta Description',
          type: 'text',
          validation: (Rule) => Rule.max(160),
        },
        {
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
          description: 'Default image for social media sharing',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'brandName',
      subtitle: 'tagline',
      media: 'logo',
    },
  },
});
