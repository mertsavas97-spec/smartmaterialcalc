import type { NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

export async function middleware(request: NextRequest) {
  return updateSession(request);
}

/**
 * Bypass middleware for crawler/static files:
 * ads.txt, robots.txt, security.txt, humans.txt (.txt),
 * sitemap.xml, favicon.ico, manifest.webmanifest,
 * images, and Next.js static assets.
 */
export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|manifest\\.webmanifest|sitemap\\.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|webmanifest|txt)$).*)",
  ],
};
