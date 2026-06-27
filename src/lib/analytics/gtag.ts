import { PRODUCTION_HOST } from "@/lib/indexing";
import { GA_MEASUREMENT_ID, hasGaMeasurementId } from "@/lib/analytics/env";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function isPublicAnalyticsPath(pathname: string): boolean {
  return !pathname.startsWith("/admin");
}

export function isProductionAnalyticsHost(hostname: string): boolean {
  return hostname.split(":")[0] === PRODUCTION_HOST;
}

export function shouldEnableClientAnalytics(pathname?: string): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  if (!hasGaMeasurementId()) {
    return false;
  }

  if (!isProductionAnalyticsHost(window.location.hostname)) {
    return false;
  }

  if (pathname && !isPublicAnalyticsPath(pathname)) {
    return false;
  }

  return true;
}

function gtag(...args: unknown[]) {
  window.gtag?.(...args);
}

let lastPageViewPath: string | null = null;

export function sendPageView(pagePath: string): void {
  const pathname = pagePath.split("?")[0] ?? pagePath;

  if (!shouldEnableClientAnalytics(pathname)) {
    return;
  }

  if (lastPageViewPath === pagePath) {
    return;
  }

  lastPageViewPath = pagePath;

  gtag("event", "page_view", {
    send_to: GA_MEASUREMENT_ID,
    page_path: pagePath,
    page_location: `${window.location.origin}${pagePath.startsWith("/") ? pagePath : `/${pagePath}`}`,
  });
}

export function sendAnalyticsEvent(
  eventName: string,
  params: Record<string, string | number | boolean> = {}
): void {
  if (!shouldEnableClientAnalytics()) {
    return;
  }

  gtag("event", eventName, {
    send_to: GA_MEASUREMENT_ID,
    ...params,
  });
}

export function getGtagConfigScript(): string {
  return `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}', {
  send_page_view: false,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
});
`.trim();
}
