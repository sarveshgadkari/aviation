import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Keep root on this project, not the parent lockfile at C:\Users\Lenovo
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
