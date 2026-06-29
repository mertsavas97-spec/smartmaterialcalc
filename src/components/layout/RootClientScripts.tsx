"use client";

import { AdSenseScript } from "@/components/adsense/AdSenseScript";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

/** Single root client boundary for third-party scripts (stable layout chunk). */
export function RootClientScripts() {
  return (
    <>
      <GoogleAnalytics />
      <AdSenseScript />
    </>
  );
}
