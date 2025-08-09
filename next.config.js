/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Enables static HTML export
  images: {
    unoptimized: true, // Required for static export
    domains: [], // Add external image domains here if needed
  },
  // No basePath needed for username.github.io repositories
  // basePath: '',
  experimental: {
    mdxRs: true,
  },
};

const withMDX = require('@next/mdx')();

module.exports = withMDX(nextConfig);
