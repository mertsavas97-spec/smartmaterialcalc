export const SITE = {
  name: "SmartMaterialCalc",
  domain: "smartmaterialcalc.app",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://smartmaterialcalc.app",
  email: "hello@smartmaterialcalc.app",
  editorialTeam: "SmartMaterialCalc Editorial Team",
  tagline: "Free home improvement calculators for homeowners, DIYers, and contractors.",
  defaultDescription:
    "Estimate how much paint, concrete, tile, gravel, mulch, flooring, and other materials you need for home improvement projects. Free, instant, no signup required.",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    return path;
  }
  return `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const AFFILIATE_RETAILERS = {
  homeDepot: {
    name: "Home Depot",
    url: "https://www.homedepot.com/",
  },
  lowes: {
    name: "Lowe's",
    url: "https://www.lowes.com/",
  },
} as const;
