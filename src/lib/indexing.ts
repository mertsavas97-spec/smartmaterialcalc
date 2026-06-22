export const PRODUCTION_HOST = "www.smartmaterialcalc.app";

export function isLocalDevelopmentHost(host: string): boolean {
  const hostname = host.split(":")[0];
  return hostname === "localhost" || hostname === "127.0.0.1";
}

export function isProductionDeployment(): boolean {
  return process.env.VERCEL_ENV === "production";
}

/** Whether HTML metadata should allow search indexing (build-time). */
export function shouldAllowSearchIndexingMetadata(): boolean {
  if (process.env.NODE_ENV === "development") {
    return true;
  }
  return isProductionDeployment();
}

/** Whether a live request should be blocked from indexing (runtime). */
export function shouldNoIndexRequest(host: string): boolean {
  if (isLocalDevelopmentHost(host)) {
    return false;
  }

  if (!isProductionDeployment()) {
    return true;
  }

  return host.split(":")[0] !== PRODUCTION_HOST;
}
