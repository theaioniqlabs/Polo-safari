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
        source: "/theme-tour-packages",
        destination: "/tour-packages",
        permanent: true,
      },
      {
        source: "/theme-tour-packages/:path*",
        destination: "/tour-packages/:path*",
        permanent: true,
      },
      {
        source: "/polo-forest",
        destination: "/destinations/india/polo-forest",
        permanent: true,
      },
      {
        source: "/plan",
        destination: "/plan-my-journey",
        permanent: true,
      },
      {
        source: "/plan/enquire",
        destination: "/enquire",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
