import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**.png',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**.jpg',
      },
      {
        protocol: 'https',
        hostname: 'www.microsoft.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'openai.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.anthropic.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
