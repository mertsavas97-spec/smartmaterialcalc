/** Prevent CDN from serving HTML across deployments (stale _next/static chunk refs). */
export const DOCUMENT_CACHE_HEADERS: Record<string, string> = {
  "Cache-Control": "private, no-cache, max-age=0, must-revalidate",
  "CDN-Cache-Control": "no-store",
  "Vercel-CDN-Cache-Control": "no-store",
};
