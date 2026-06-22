import { SITE } from "./site";
import { calculators, getAllCalculatorSlugs } from "@/data/calculators";
import { getAllCategorySlugs, getCategoryBySlug } from "@/data/categories";
import { guides } from "@/data/guides";
import { isoDateToLastModified } from "./date-format";

export type SitemapEntry = {
  url: string;
  lastModified?: Date;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

const STATIC_PAGE_DATES: Record<string, string> = {
  "/": "2026-06-22",
  "/calculators": "2026-06-22",
  "/categories": "2026-06-22",
  "/guides": "2026-06-22",
  "/about": "2025-06-01",
  "/contact": "2025-06-01",
  "/methodology": "2025-06-01",
  "/privacy-policy": "2025-06-01",
  "/terms-of-service": "2025-06-01",
  "/affiliate-disclosure": "2025-06-01",
};

const STATIC_ROUTES: SitemapEntry[] = [
  { url: "/", changeFrequency: "weekly", priority: 1 },
  { url: "/calculators", changeFrequency: "weekly", priority: 0.9 },
  { url: "/categories", changeFrequency: "monthly", priority: 0.8 },
  { url: "/guides", changeFrequency: "weekly", priority: 0.8 },
  { url: "/about", changeFrequency: "monthly", priority: 0.5 },
  { url: "/contact", changeFrequency: "monthly", priority: 0.5 },
  { url: "/methodology", changeFrequency: "monthly", priority: 0.6 },
  { url: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  { url: "/terms-of-service", changeFrequency: "yearly", priority: 0.3 },
  { url: "/affiliate-disclosure", changeFrequency: "yearly", priority: 0.3 },
];

export function getSitemapEntries(): SitemapEntry[] {
  const calculatorRoutes: SitemapEntry[] = getAllCalculatorSlugs().map((slug) => {
    const calculator = calculators.find((entry) => entry.slug === slug);
    return {
      url: `/calculators/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified: calculator
        ? isoDateToLastModified(calculator.updatedAt)
        : undefined,
    };
  });

  const guideRoutes: SitemapEntry[] = guides.map((guide) => ({
    url: `/guides/${guide.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: isoDateToLastModified(guide.dateModified),
  }));

  const categoryHubRoutes: SitemapEntry[] = getAllCategorySlugs().map((slug) => {
    const category = getCategoryBySlug(slug);
    return {
      url: `/categories/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.75,
      lastModified: category
        ? isoDateToLastModified(category.updatedAt)
        : undefined,
    };
  });

  const staticRoutes = STATIC_ROUTES.map((route) => ({
    ...route,
    lastModified: STATIC_PAGE_DATES[route.url]
      ? isoDateToLastModified(STATIC_PAGE_DATES[route.url])
      : undefined,
  }));

  return [...staticRoutes, ...calculatorRoutes, ...guideRoutes, ...categoryHubRoutes];
}

export function getAbsoluteSitemapUrls(): string[] {
  return getSitemapEntries().map((entry) => `${SITE.url}${entry.url}`);
}

export function getCalculatorCount(): number {
  return calculators.length;
}
