import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Add image CDN domains here later
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Required for Three.js (prevents SSR issues)
  transpilePackages: ['three'],

  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
    ]
  },

  // Gzip compression
  compress: true,

  // Strict mode for catching issues early
  reactStrictMode: true,
}

export default nextConfig