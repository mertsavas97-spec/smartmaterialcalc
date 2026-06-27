import { sendAnalyticsEvent } from "@/lib/analytics/gtag";

const isDevelopment = process.env.NODE_ENV === "development";
const MAX_SEARCH_TERM_LENGTH = 80;

function debugEvent(event: string, payload: Record<string, string>) {
  if (isDevelopment) {
    console.debug(`[analytics] ${event}`, payload);
  }
}

function sanitizeSearchTerm(query: string): string {
  return query.trim().slice(0, MAX_SEARCH_TERM_LENGTH);
}

export function trackCalculatorSubmit(calculatorSlug: string) {
  debugEvent("calculator_use", { calculator_slug: calculatorSlug });
  sendAnalyticsEvent("calculator_use", { calculator_slug: calculatorSlug });
}

export function trackSearch(query: string) {
  const search_term = sanitizeSearchTerm(query);
  if (!search_term) {
    return;
  }

  debugEvent("search", { search_term });
  sendAnalyticsEvent("search", { search_term });
}

export function trackGuideView(guideSlug: string) {
  debugEvent("guide_view", { guide_slug: guideSlug });
  sendAnalyticsEvent("guide_view", { guide_slug: guideSlug });
}

export function trackGuideCTA(
  guideSlug: string,
  targetSlug: string,
  location: "article" | "sidebar" = "article"
) {
  debugEvent("cta_click", {
    guide_slug: guideSlug,
    target_slug: targetSlug,
    cta_location: location,
  });
  sendAnalyticsEvent("cta_click", {
    guide_slug: guideSlug,
    target_slug: targetSlug,
    cta_location: location,
  });
}

export function trackPageNotFound(pagePath: string) {
  const page_path = pagePath.split("?")[0] ?? pagePath;
  debugEvent("page_not_found", { page_path });
  sendAnalyticsEvent("page_not_found", { page_path });
}

export function trackCategoryNavigation(categorySlug: string) {
  debugEvent("category_navigation", { category_slug: categorySlug });
  sendAnalyticsEvent("category_navigation", { category_slug: categorySlug });
}
