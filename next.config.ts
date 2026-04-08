import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://player.cloudinary.com https://res.cloudinary.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
