import { defineType } from 'sanity';

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Price (INR)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    },
    {
      name: 'colors',
      title: 'Available Colors',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., Champagne, Midnight Blue',
    },
    {
      name: 'badges',
      title: 'Product Badges',
      type: 'object',
      fields: [
        {
          name: 'isNew',
          title: 'New Arrival',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'isFeatured',
          title: 'Featured',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'isBestSeller',
          title: 'Best Seller',
          type: 'boolean',
          initialValue: false,
        },
        {
          name: 'isLimited',
          title: 'Limited Edition',
          type: 'boolean',
          initialValue: false,
        },
      ],
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      description: 'Brief product description (1-2 sentences)',
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'Detailed product description',
    },
    {
      name: 'craftsmanship',
      title: 'Craftsmanship Details',
      type: 'text',
      description: 'Information about how the product is made',
    },
    {
      name: 'styling',
      title: 'Styling Tips',
      type: 'text',
      description: 'How to style this product',
    },
    {
      name: 'care',
      title: 'Care Instructions',
      type: 'text',
      description: 'How to care for this product',
    },
    {
      name: 'dateAdded',
      title: 'Date Added',
      type: 'date',
      validation: (Rule) => Rule.required(),
      initialValue: () => new Date().toISOString().split('T')[0],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category.name',
      media: 'images.0',
    },
  },
});
