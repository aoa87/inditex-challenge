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
    minimumCacheTTL: +(process.env.CACHE_EXPIRATION_TIME ?? 60),
  },
};

export default nextConfig;
