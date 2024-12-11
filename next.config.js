/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove static export for NextAuth.js to work
  images: { unoptimized: true },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig