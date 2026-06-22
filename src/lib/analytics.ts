const isDevelopment = process.env.NODE_ENV === "development";

function debugEvent(event: string, payload: Record<string, string>) {
  if (isDevelopment) {
    console.debug(`[analytics] ${event}`, payload);
  }
}

export function trackCalculatorSubmit(calculatorSlug: string) {
  debugEvent("calculator_submit", { calculatorSlug });
}

export function trackSearch(query: string) {
  debugEvent("search", { query: query.trim() });
}

export function trackGuideCTA(guideSlug: string, targetSlug: string) {
  debugEvent("guide_cta", { guideSlug, targetSlug });
}

export function trackCategoryNavigation(categorySlug: string) {
  debugEvent("category_navigation", { categorySlug });
}
