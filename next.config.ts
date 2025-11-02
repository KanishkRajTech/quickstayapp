/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // For external images with specific hostname patterns (Next.js 12+)
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quickstayapp.com",
      },
      {
        protocol: "https",
        hostname: "shtheme.com",
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
        pathname: '/v0/b/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      },
    ],

    // For external image domains (legacy, but still supported)
    domains: ['via.placeholder.com', 'your-image-domain.com'],
  },
};

module.exports = nextConfig;
