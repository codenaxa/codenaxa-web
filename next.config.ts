import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  // output: 'export', // Commented out to enable API routes
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true
  }
}

export default nextConfig;
