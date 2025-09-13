import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  distDir: '.next',
  generateBuildId: async () => {
    return new Date().getTime().toString();
  }
};

export default nextConfig;
