import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "quickstayapp.com",
      },
      {
        protocol: "https",
        hostname: "shtheme.com",
      },
    ],
  },
};

export default nextConfig;
