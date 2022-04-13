/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["assets.acme.com", "i.scdn.co"],
  },
};

module.exports = nextConfig;
