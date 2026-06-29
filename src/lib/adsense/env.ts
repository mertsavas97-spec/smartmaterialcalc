import { PRODUCTION_HOST } from "@/lib/indexing";

export const ADSENSE_CLIENT_ID = "ca-pub-4628962707131944";

export function isPublicAdSensePath(pathname: string): boolean {
  return !pathname.startsWith("/admin");
}

export function isProductionAdSenseHost(hostname: string): boolean {
  return hostname.split(":")[0] === PRODUCTION_HOST;
}

export function shouldEnableAdSense(pathname?: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  if (!isProductionAdSenseHost(window.location.hostname)) {
    return false;
  }

  if (pathname && !isPublicAdSensePath(pathname)) {
    return false;
  }

  return true;
}
