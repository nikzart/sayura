import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['scontent.cdninstagram.com', 'instagram.com', 'cdn.sanity.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
