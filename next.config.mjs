/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Required for static export
  images: {
    unoptimized: true, // Needed for GitHub Pages
  },
  basePath: '', 
  assetPrefix: '', 
};

export default nextConfig;
