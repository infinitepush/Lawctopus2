import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Turbopack expects an absolute path for `root`.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
