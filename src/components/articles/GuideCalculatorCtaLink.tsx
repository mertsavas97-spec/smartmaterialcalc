"use client";

import Link from "next/link";
import { trackGuideCTA } from "@/lib/analytics";

type GuideCalculatorCtaLinkProps = {
  guideSlug: string;
  calculatorSlug: string;
  location?: "article" | "sidebar";
  className?: string;
  children: React.ReactNode;
};

export function GuideCalculatorCtaLink({
  guideSlug,
  calculatorSlug,
  location = "article",
  className,
  children,
}: GuideCalculatorCtaLinkProps) {
  return (
    <Link
      href={`/calculators/${calculatorSlug}`}
      className={className}
      onClick={() => trackGuideCTA(guideSlug, calculatorSlug, location)}
    >
      {children}
    </Link>
  );
}
