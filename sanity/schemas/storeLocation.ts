import { defineType } from 'sanity';

export default defineType({
  name: 'storeLocation',
  title: 'Store Location',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Store Name',
      type: 'string',
      description: 'e.g., "SAYURA Mumbai Flagship"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    },
    {
      name: 'hours',
      title: 'Operating Hours',
      type: 'string',
      description: 'e.g., "10:00 AM - 9:00 PM"',
    },
    {
      name: 'coordinates',
      title: 'Map Coordinates',
      type: 'object',
      fields: [
        {
          name: 'lat',
          title: 'Latitude',
          type: 'number',
          validation: (Rule) => Rule.required().min(-90).max(90),
        },
        {
          name: 'lng',
          title: 'Longitude',
          type: 'number',
          validation: (Rule) => Rule.required().min(-180).max(180),
        },
      ],
    },
    {
      name: 'image',
      title: 'Store Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'address',
      media: 'image',
    },
  },
});
