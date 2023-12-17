/** @type {import('next').NextConfig} */

const API_BASE_ENDPOINT = process.env.NEXT_PUBLIC_BASE_URL;

const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**",
      },
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/:slug*",
        destination: `${API_BASE_ENDPOINT}/:slug*`,
      },
    ];
  },
};

module.exports = nextConfig;
