import type { NextConfig } from "next";

const PRODUCTION_ORIGIN = "https://www.smartmaterialcalc.app";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "smartmaterialcalc.vercel.app",
          },
        ],
        destination: `${PRODUCTION_ORIGIN}/:path*`,
        permanent: true,
      },
      {
        source: "/privacy",
        destination: "/privacy-policy",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/terms-of-service",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
