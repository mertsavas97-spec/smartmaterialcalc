import type { MetadataRoute } from "next";
import { ICON_ASSET_VERSION } from "@/lib/metadata";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "SmartMaterialCalc",
    short_name: "SmartMaterialCalc",
    description:
      "Free home improvement calculators for paint, concrete, tile, flooring, and more.",
    start_url: "/",
    display: "standalone",
    theme_color: "#2e7d32",
    background_color: "#f6fbf4",
    icons: [
      {
        src: `/icons/icon-192.png?v=${ICON_ASSET_VERSION}`,
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: `/icons/icon-512.png?v=${ICON_ASSET_VERSION}`,
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
