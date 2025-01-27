import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cloud.appwrite.io'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'png.pngtree.com'
      },
      {
        protocol: 'https',
        hostname: 'cloud-appwrite.io'
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '50mb', // Adjust the size as needed
    },
  },
};

export default nextConfig;
