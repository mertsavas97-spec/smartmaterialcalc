const PRODUCTION_HOST = "www.smartmaterialcalc.app";
const APEX_HOST = "smartmaterialcalc.app";
const DEFAULT_SITE_URL = `https://${PRODUCTION_HOST}`;

function normalizeSiteOrigin(input: string): string {
  try {
    const url = new URL(input);
    if (url.hostname === APEX_HOST) {
      url.hostname = PRODUCTION_HOST;
    }
    return url.origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

function resolveSiteUrl(): string {
  return normalizeSiteOrigin(process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL);
}

export const SITE = {
  name: "SmartMaterialCalc",
  domain: PRODUCTION_HOST,
  url: resolveSiteUrl(),
  email: `hello@${APEX_HOST}`,
  editorialTeam: "SmartMaterialCalc Editorial Team",
  tagline: "Free home improvement calculators for homeowners, DIYers, and contractors.",
  defaultDescription:
    "Estimate how much paint, concrete, tile, gravel, mulch, flooring, and other materials you need for home improvement projects. Free, instant, no signup required.",
} as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) {
    try {
      const url = new URL(path);
      if (url.hostname === APEX_HOST) {
        url.hostname = PRODUCTION_HOST;
      }
      return url.toString();
    } catch {
      return path;
    }
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
