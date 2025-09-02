import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Ensure JavaScript is included in static export
  distDir: 'out',
  assetPrefix: '',
  basePath: ''
};

export default nextConfig;
