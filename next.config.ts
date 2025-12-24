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
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
