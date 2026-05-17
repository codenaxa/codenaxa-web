import type { NextConfig } from 'next';

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['@mui/material', '@mui/icons-material', 'lucide-react'],
  },
  images: {
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'codenaxa.in',
      },
      {
        protocol: 'https',
        hostname: 'www.codenaxa.in',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
      {
        protocol: 'https',
        hostname: 'codenaxaauth.firebasestorage.app',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
async redirects() {
    return [
      {
        source: '/blog/the-ultimate-guide-to-building-high-performance-websites-in-2026',
        destination: '/blog/high-performance-websites-guide-2026',
        permanent: true,
      },
      {
        source: '/blog/why-nextjs-is-the-game-changer-for-keralas-small-businesses-in-2026',
        destination: '/blog/nextjs-for-small-businesses-kerala',
        permanent: true,
      },
      {
        source: '/blog/how-to-grow-your-business-online-with-a-website-or-codenaxa',
        destination: '/blog/how-to-grow-your-business-online',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
