"use client";

import { useEffect, useRef } from "react";
import { trackGuideView } from "@/lib/analytics";

type GuideViewTrackerProps = {
  guideSlug: string;
};

export function GuideViewTracker({ guideSlug }: GuideViewTrackerProps) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) {
      return;
    }

    tracked.current = true;
    trackGuideView(guideSlug);
  }, [guideSlug]);

  return null;
}
