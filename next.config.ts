import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async redirects() {
    return [
      {
        source: '/gate-valves',
        destination: '/products/gate-valves',
        permanent: true,
      },
      {
        source: '/globe-valves',
        destination: '/products/globe-valves',
        permanent: true,
      },
      {
        source: '/check-valves',
        destination: '/products/non-return-valves',
        permanent: true,
      },
      {
        source: '/ball-valves',
        destination: '/products/ball-valves',
        permanent: true,
      },
      {
        source: '/butterfly-valves',
        destination: '/products/butterfly-valves',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/#contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;