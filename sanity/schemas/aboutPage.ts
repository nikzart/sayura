import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  // Singleton - only one about page document allowed
  __experimental_singleton: true,
  fields: [
    // SEO Metadata
    defineField({
      name: 'pageTitle',
      title: 'Page Title (SEO)',
      type: 'string',
      description: 'Title for search engines and browser tabs',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pageDescription',
      title: 'Page Description (SEO)',
      type: 'text',
      description: 'Description for search engines (150-160 characters)',
      validation: (Rule) => Rule.required().max(160),
    }),

    // Hero Section
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title displayed in the hero section',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      description: 'Subtitle/description text below the hero title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroBackgroundImage',
      title: 'Hero Background Image',
      type: 'image',
      description: 'Large background image for the hero section',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),

    // Introduction Section
    defineField({
      name: 'introHeading',
      title: 'Introduction Heading',
      type: 'string',
      description: 'Main heading for the introduction section (e.g., "Crafting Elegance Since 2010")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'introContent',
      title: 'Introduction Content',
      type: 'array',
      description: 'Rich text content for the introduction',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                  },
                ],
              },
            ],
          },
        },
      ],
      validation: (Rule) => Rule.required(),
    }),

    // Content Sections (Brand Story)
    defineField({
      name: 'contentSections',
      title: 'Content Sections',
      type: 'array',
      description: 'Main content sections with images (e.g., Heritage & Craftsmanship, Sustainable Luxury)',
      of: [
        {
          type: 'object',
          name: 'contentSection',
          title: 'Content Section',
          fields: [
            {
              name: 'title',
              title: 'Section Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Section Content',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [
                    { title: 'Normal', value: 'normal' },
                    { title: 'H4', value: 'h4' },
                  ],
                  marks: {
                    decorators: [
                      { title: 'Strong', value: 'strong' },
                      { title: 'Emphasis', value: 'em' },
                    ],
                    annotations: [
                      {
                        name: 'link',
                        type: 'object',
                        title: 'Link',
                        fields: [
                          {
                            name: 'href',
                            type: 'url',
                            title: 'URL',
                          },
                        ],
                      },
                    ],
                  },
                },
              ],
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'image',
              title: 'Section Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'imagePosition',
              title: 'Image Position',
              type: 'string',
              options: {
                list: [
                  { title: 'Left', value: 'left' },
                  { title: 'Right', value: 'right' },
                ],
                layout: 'radio',
              },
              initialValue: 'left',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              description: 'Order in which this section appears (lower numbers first)',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              title: 'title',
              order: 'order',
              media: 'image',
            },
            prepare(selection) {
              const { title, order } = selection;
              return {
                ...selection,
                title: `${order}. ${title}`,
              };
            },
          },
        },
      ],
    }),

    // Values Section
    defineField({
      name: 'valuesHeading',
      title: 'Values Section Heading',
      type: 'string',
      description: 'Main heading for the values section (e.g., "Our Values")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'valuesDescription',
      title: 'Values Section Description',
      type: 'text',
      description: 'Short description below the values heading',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'values',
      title: 'Values',
      type: 'array',
      description: 'Core company values (usually 4)',
      of: [
        {
          type: 'object',
          name: 'value',
          title: 'Value',
          fields: [
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: '✨ Sparkles (Excellence)', value: 'sparkles' },
                  { title: '❤️ Heart (Passion)', value: 'heart' },
                  { title: '🌿 Leaf (Sustainability)', value: 'leaf' },
                  { title: '👥 Users (Community)', value: 'users' },
                  { title: '🏆 Award (Achievement)', value: 'award' },
                  { title: '🛡️ Shield (Trust)', value: 'shield' },
                  { title: '⭐ Star (Quality)', value: 'star' },
                  { title: '🎯 Target (Focus)', value: 'target' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Value Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Value Description',
              type: 'text',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'order',
              title: 'Display Order',
              type: 'number',
              validation: (Rule) => Rule.required().min(0),
            },
          ],
          preview: {
            select: {
              title: 'title',
              order: 'order',
              icon: 'icon',
            },
            prepare(selection) {
              const { title, order, icon } = selection;
              return {
                title: `${order}. ${title}`,
                subtitle: `Icon: ${icon}`,
              };
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1).max(6),
    }),

    // Publish Control
    defineField({
      name: 'isPublished',
      title: 'Published',
      type: 'boolean',
      description: 'Toggle to publish/unpublish the about page',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'pageTitle',
    },
    prepare(selection) {
      return {
        title: selection.title || 'About Page',
      };
    },
  },
});
