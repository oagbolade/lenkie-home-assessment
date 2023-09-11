/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "e-cdns-images.dzcdn.net"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
