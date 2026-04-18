/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    domains: ['github.blog', 'images.pexels.com', 'placehold.it', 'cdn.sanity.io', 'images.unsplash.com'],
    unoptimized: true,
  },
  compiler: {
    styledComponents: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // --- THE FIX: Force Browser to go to static file ---
  async redirects() {
    return [
      {
        source: '/privacy-policy',
        destination: '/privacy_static.html',
        permanent: false,
      },
      {
        source: '/terms-conditions',
        destination: '/terms_static.html',
        permanent: false,
      },
      {
        source: '/manchester',
        destination: '/manchesternh',
        permanent: true, 
      },
    ];
  },
};

module.exports = nextConfig;