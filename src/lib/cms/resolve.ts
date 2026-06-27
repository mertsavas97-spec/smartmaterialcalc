import { getCalculatorBySlug } from "@/data/calculators";
import { categories, type Category } from "@/data/categories";
import type { Guide } from "@/data/guides";
import { getPublishedGuides } from "@/lib/guides/loader";
import type { HomepageSettings } from "./types";

export function resolveTemplateValue(value: string, calculatorCount: number): string {
  return value.replace(/\{calculatorCount\}/g, String(calculatorCount));
}

export function resolveFeaturedCalculators(slugs: string[]) {
  return slugs
    .map((slug) => getCalculatorBySlug(slug))
    .filter((calculator): calculator is NonNullable<typeof calculator> =>
      Boolean(calculator)
    );
}

export async function resolveFeaturedGuides(
  slugs: string[],
  fallbackCount = 3
): Promise<Guide[]> {
  const published = await getPublishedGuides();
  const bySlug = new Map(published.map((guide) => [guide.slug, guide]));

  const ordered = slugs
    .map((slug) => bySlug.get(slug))
    .filter((guide): guide is Guide => Boolean(guide));

  if (ordered.length > 0) {
    return ordered;
  }

  return published.slice(0, fallbackCount);
}

export function resolveCategoryOrder(categoryOrder: string[]): Category[] {
  const bySlug = new Map(categories.map((category) => [category.slug, category]));
  const ordered = categoryOrder
    .map((slug) => bySlug.get(slug))
    .filter((category): category is Category => Boolean(category));
  const remaining = categories.filter(
    (category) => !categoryOrder.includes(category.slug)
  );
  return [...ordered, ...remaining];
}

export function resolveHomepageStatistics(
  settings: HomepageSettings,
  calculatorCount: number
) {
  return settings.statistics.map((stat) => ({
    value: resolveTemplateValue(stat.value, calculatorCount),
    label: stat.label,
  }));
}

export function resolveTrustHeadline(settings: HomepageSettings, calculatorCount: number) {
  return resolveTemplateValue(settings.trust.headline, calculatorCount);
}
