"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useSyncExternalStore } from "react";
import { GA_MEASUREMENT_ID, hasGaMeasurementId } from "@/lib/analytics/env";
import {
  getGtagConfigScript,
  isPublicAnalyticsPath,
  sendPageView,
  shouldEnableClientAnalytics,
} from "@/lib/analytics/gtag";

function subscribeToClientMount() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!shouldEnableClientAnalytics(pathname)) {
      return;
    }

    if (!isPublicAnalyticsPath(pathname)) {
      return;
    }

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;
    sendPageView(pagePath);
  }, [pathname, searchParams]);

  return null;
}

function GoogleAnalyticsScripts() {
  const pathname = usePathname();
  const isClient = useSyncExternalStore(
    subscribeToClientMount,
    getClientSnapshot,
    getServerSnapshot
  );

  if (!isClient || !shouldEnableClientAnalytics(pathname)) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {getGtagConfigScript()}
      </Script>
    </>
  );
}

export function GoogleAnalytics() {
  if (!hasGaMeasurementId()) {
    return null;
  }

  return (
    <>
      <GoogleAnalyticsScripts />
      <Suspense fallback={null}>
        <AnalyticsPageView />
      </Suspense>
    </>
  );
}
