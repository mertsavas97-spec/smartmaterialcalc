import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { DOCUMENT_CACHE_HEADERS } from "@/lib/document-cache";
import { shouldNoIndexRequest } from "@/lib/indexing";
import { getSupabaseAnonKey, getSupabaseUrl, isSupabaseConfigured } from "./env";

function applyDocumentCacheHeaders(response: NextResponse) {
  for (const [key, value] of Object.entries(DOCUMENT_CACHE_HEADERS)) {
    response.headers.set(key, value);
  }
}

function applyNoIndexHeaders(request: NextRequest, response: NextResponse) {
  const host = request.headers.get("host") ?? "";

  if (shouldNoIndexRequest(host) || request.nextUrl.pathname.startsWith("/admin")) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }
}

function applyResponseHeaders(request: NextRequest, response: NextResponse) {
  applyDocumentCacheHeaders(response);
  applyNoIndexHeaders(request, response);
}

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  applyResponseHeaders(request, supabaseResponse);

  if (!isSupabaseConfigured()) {
    return supabaseResponse;
  }

  const supabase = createServerClient(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        supabaseResponse = NextResponse.next({
          request,
        });
        applyResponseHeaders(request, supabaseResponse);
        cookiesToSet.forEach(({ name, value, options }) => {
          supabaseResponse.cookies.set(name, value, options);
        });
      },
    },
  });

  await supabase.auth.getUser();
  return supabaseResponse;
}
