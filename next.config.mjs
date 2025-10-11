/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Needed for GitHub Pages
  },
  basePath: '/portfolio',
  assetPrefix: '/portfolio/',
};

export default nextConfig;
