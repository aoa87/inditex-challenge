import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "i.annihil.us",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
