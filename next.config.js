/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript:{
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i0.wp.com', 'lh3.googleusercontent.com'],
  }
  
}

module.exports = nextConfig
