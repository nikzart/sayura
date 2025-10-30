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
      name: 'supportEmail',
      title: 'Support Email',
      type: 'string',
      description: 'Secondary email for support inquiries',
      validation: (Rule) => Rule.email(),
    },
    {
      name: 'whatsappNumber',
      title: 'WhatsApp Number',
      type: 'string',
      description: 'WhatsApp number with country code (e.g., +91 1234567890)',
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'string',
      description: 'Operating hours (e.g., "Mon-Sat, 10:00 AM - 7:00 PM IST")',
    },
    {
      name: 'address',
      title: 'Business Address',
      type: 'object',
      fields: [
        {
          name: 'street',
          title: 'Street Address',
          type: 'string',
        },
        {
          name: 'city',
          title: 'City',
          type: 'string',
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string',
        },
        {
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
        },
      ],
    },
    {
      name: 'brandDescription',
      title: 'Brand Description',
      type: 'text',
      description: 'Long-form brand description for About section in footer',
      rows: 3,
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'text',
      description: 'Short text to display in footer',
      rows: 2,
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
      name: 'showSocialInFooter',
      title: 'Show Social Links in Footer',
      type: 'boolean',
      description: 'Toggle visibility of social media icons in footer',
      initialValue: true,
    },
    {
      name: 'contactPage',
      title: 'Contact Page Content',
      type: 'object',
      fields: [
        {
          name: 'heroTitle',
          title: 'Hero Title',
          type: 'string',
          description: 'Main heading for contact page hero section',
        },
        {
          name: 'heroSubtitle',
          title: 'Hero Subtitle',
          type: 'text',
          description: 'Subtitle text below hero title',
          rows: 2,
        },
        {
          name: 'heroBackgroundImage',
          title: 'Hero Background Image',
          type: 'image',
          description: 'Background image for hero section',
        },
        {
          name: 'sectionHeading',
          title: 'Section Heading',
          type: 'string',
          description: 'Heading above contact info cards',
        },
        {
          name: 'sectionIntro',
          title: 'Section Introduction',
          type: 'text',
          description: 'Introductory text above contact info cards',
          rows: 2,
        },
        {
          name: 'contactInfoCards',
          title: 'Contact Info Cards',
          type: 'array',
          description: 'Cards displaying contact methods (email, phone, location, whatsapp)',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'icon',
                  title: 'Icon',
                  type: 'string',
                  description: 'Icon type for this card',
                  options: {
                    list: [
                      { title: 'Email', value: 'email' },
                      { title: 'Phone', value: 'phone' },
                      { title: 'Location', value: 'location' },
                      { title: 'WhatsApp', value: 'whatsapp' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'title',
                  title: 'Card Title',
                  type: 'string',
                  description: 'Title for this contact card (e.g., "Email Us")',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'lines',
                  title: 'Content Lines',
                  type: 'array',
                  description: 'Lines of text to display (e.g., email addresses, phone numbers)',
                  of: [{ type: 'string' }],
                  validation: (Rule) => Rule.min(1),
                },
                {
                  name: 'order',
                  title: 'Display Order',
                  type: 'number',
                  description: 'Order of this card (lower numbers appear first)',
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  icon: 'icon',
                  order: 'order',
                },
                prepare({ title, icon, order }) {
                  return {
                    title: title || 'Untitled Card',
                    subtitle: `Icon: ${icon || 'none'} | Order: ${order || 0}`,
                  };
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'contactForm',
      title: 'Contact Form Configuration',
      type: 'object',
      description: 'Configure contact form fields and messages',
      fields: [
        {
          name: 'recipientEmail',
          title: 'Recipient Email',
          type: 'string',
          description: 'Email address to receive form submissions',
          validation: (Rule) => Rule.email(),
        },
        {
          name: 'successMessage',
          title: 'Success Message',
          type: 'string',
          description: 'Message shown after successful form submission',
        },
        {
          name: 'errorMessage',
          title: 'Error Message',
          type: 'string',
          description: 'Message shown if form submission fails',
        },
        {
          name: 'fields',
          title: 'Form Fields',
          type: 'array',
          description: 'Configure form fields, their order, and properties',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'name',
                  title: 'Field Name',
                  type: 'string',
                  description: 'Internal field name (lowercase, no spaces)',
                  validation: (Rule) => Rule.required().regex(/^[a-z]+$/, {
                    name: 'lowercase letters only',
                    invert: false,
                  }),
                },
                {
                  name: 'label',
                  title: 'Field Label',
                  type: 'string',
                  description: 'Label shown to users',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'type',
                  title: 'Field Type',
                  type: 'string',
                  options: {
                    list: [
                      { title: 'Text', value: 'text' },
                      { title: 'Email', value: 'email' },
                      { title: 'Phone', value: 'tel' },
                      { title: 'Textarea', value: 'textarea' },
                    ],
                  },
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'placeholder',
                  title: 'Placeholder',
                  type: 'string',
                  description: 'Placeholder text (optional)',
                },
                {
                  name: 'required',
                  title: 'Required Field',
                  type: 'boolean',
                  description: 'Is this field required?',
                  initialValue: false,
                },
                {
                  name: 'order',
                  title: 'Display Order',
                  type: 'number',
                  description: 'Order of this field (lower numbers appear first)',
                  validation: (Rule) => Rule.required().min(0),
                },
              ],
              preview: {
                select: {
                  label: 'label',
                  type: 'type',
                  required: 'required',
                  order: 'order',
                },
                prepare({ label, type, required, order }) {
                  return {
                    title: label || 'Untitled Field',
                    subtitle: `${type || 'text'} | ${required ? 'Required' : 'Optional'} | Order: ${order || 0}`,
                  };
                },
              },
            },
          ],
        },
      ],
    },
    {
      name: 'footerLinks',
      title: 'Footer Navigation Links',
      type: 'object',
      description: 'Configure footer navigation sections',
      fields: [
        {
          name: 'customerCare',
          title: 'Customer Care Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Link Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'href',
                  title: 'Link URL',
                  type: 'string',
                  description: 'Internal path (e.g., /shipping) or full URL',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'external',
                  title: 'External Link',
                  type: 'boolean',
                  description: 'Opens in new tab if true',
                  initialValue: false,
                },
              ],
              preview: {
                select: {
                  title: 'label',
                  href: 'href',
                },
              },
            },
          ],
        },
        {
          name: 'legal',
          title: 'Legal Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'label',
                  title: 'Link Label',
                  type: 'string',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'href',
                  title: 'Link URL',
                  type: 'string',
                  description: 'Internal path (e.g., /privacy) or full URL',
                  validation: (Rule) => Rule.required(),
                },
                {
                  name: 'external',
                  title: 'External Link',
                  type: 'boolean',
                  description: 'Opens in new tab if true',
                  initialValue: false,
                },
              ],
              preview: {
                select: {
                  title: 'label',
                  href: 'href',
                },
              },
            },
          ],
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
