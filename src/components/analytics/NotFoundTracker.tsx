"use client";

import { useEffect, useRef } from "react";
import { trackPageNotFound } from "@/lib/analytics";

export function NotFoundTracker() {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) {
      return;
    }

    tracked.current = true;
    trackPageNotFound(
      `${window.location.pathname}${window.location.search}`
    );
  }, []);

  return null;
}
