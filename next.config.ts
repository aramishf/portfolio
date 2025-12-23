import type { NextConfig } from "next";

// ============================================
// NEXT.JS CONFIGURATION FOR GITHUB PAGES
// ============================================
// This configures Next.js to export as a static site
// compatible with GitHub Pages hosting
// ============================================

const nextConfig: NextConfig = {
  // Enable static HTML export
  output: 'export',

  // Disable image optimization for static export
  // (GitHub Pages doesn't support Next.js Image Optimization API)
  images: {
    unoptimized: true,
  },

  // Base path for GitHub Pages (if using project pages)
  // Format: https://username.github.io/repository-name
  // If using user pages (username.github.io), leave basePath empty
  basePath: '/portfolio',

  // Asset prefix for proper loading
  assetPrefix: '/portfolio',
};

export default nextConfig;
