/** @type {import('next').NextConfig} */
import daisyui from "daisyui";
const nextConfig = {
  images: {
    domains: ["media.licdn.com"],
  },
  plugins: [daisyui],
};

export default nextConfig;
