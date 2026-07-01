import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Avoid long hangs when an upstream Unsplash URL is unavailable.
    dangerouslyAllowSVG: false,
    minimumCacheTTL: 60,
  },
  async redirects() {
    return [
      {
        source: "/stories",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/stories/:slug",
        destination: "/blog/:slug",
        permanent: true,
      },
      {
        source: "/education",
        destination: "/schools-colleges",
        permanent: true,
      },
      {
        source: "/destinations",
        destination: "/india",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
