import { createClient } from 'next-sanity';

export const client = createClient({
  projectId: '7x4tky5p',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
  token: process.env.SANITY_API_TOKEN,
});
