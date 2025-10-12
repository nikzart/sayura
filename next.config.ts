import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['scontent.cdninstagram.com', 'instagram.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.cdninstagram.com',
      },
    ],
  },
};

export default nextConfig;
