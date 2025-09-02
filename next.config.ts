import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export to preserve JavaScript functionality
  images: {
    unoptimized: true
  }
};

export default nextConfig;
