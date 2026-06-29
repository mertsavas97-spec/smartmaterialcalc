import type { NextConfig } from "next";
import { DOCUMENT_CACHE_HEADERS } from "./src/lib/document-cache";

const PRODUCTION_ORIGIN = "https://www.smartmaterialcalc.app";

const documentCacheHeaderEntries = Object.entries(DOCUMENT_CACHE_HEADERS).map(
  ([key, value]) => ({ key, value })
);

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source:
          "/:path((?!_next/static|_next/image|favicon\\.ico|.*\\..*).*)",
        headers: documentCacheHeaderEntries,
      },
    ];
  },
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
