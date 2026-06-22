import { calculators, getCalculatorBySlug } from "@/data/calculators";
import { getGuideArticle } from "@/data/guide-articles";
import { getGuideBySlug, guides } from "@/data/guides";

export function getRelatedGuides(slug: string, limit = 3) {
  const calculator = getCalculatorBySlug(slug);
  if (!calculator) return [];

  const linked = calculator.relatedGuideSlugs
    .map((guideSlug) => getGuideBySlug(guideSlug))
    .filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  if (linked.length >= limit) {
    return linked.slice(0, limit);
  }

  const sameCategory = guides.filter(
    (guide) =>
      guide.category === calculator.category &&
      !linked.some((item) => item.slug === guide.slug)
  );

  return [...linked, ...sameCategory].slice(0, limit);
}

export function getRelatedCalculators(slug: string, limit = 3) {
  const calculator = getCalculatorBySlug(slug);
  if (!calculator) return [];

  const fromGuides: NonNullable<ReturnType<typeof getCalculatorBySlug>>[] = [];

  for (const guideSlug of calculator.relatedGuideSlugs) {
    const article = getGuideArticle(guideSlug);
    if (!article) continue;

    const primarySlug = article.calculatorSlug ?? article.cta.calculatorSlug;
    const candidateSlugs = [
      ...(primarySlug && primarySlug !== slug ? [primarySlug] : []),
      ...(article.relatedCalculatorSlugs ?? []).filter(
        (calcSlug) => calcSlug !== slug
      ),
    ];

    for (const calcSlug of candidateSlugs) {
      const item = getCalculatorBySlug(calcSlug);
      if (item && !fromGuides.some((linked) => linked.slug === item.slug)) {
        fromGuides.push(item);
      }
    }
  }

  if (fromGuides.length >= limit) {
    return fromGuides.slice(0, limit);
  }

  const sameCategory = calculators.filter(
    (item) =>
      item.category === calculator.category &&
      item.slug !== slug &&
      !fromGuides.some((linked) => linked.slug === item.slug)
  );

  const combined = [...fromGuides, ...sameCategory];

  if (combined.length >= limit) {
    return combined.slice(0, limit);
  }

  const others = calculators.filter(
    (item) =>
      item.slug !== slug && !combined.some((linked) => linked.slug === item.slug)
  );

  return [...combined, ...others].slice(0, limit);
}

export function getRelatedGuidesForGuide(slug: string, limit = 3) {
  const guide = getGuideBySlug(slug);
  if (!guide) return [];

  const article = getGuideArticle(slug);
  const linkedSlugs = article?.relatedGuideSlugs ?? [];

  const linked = linkedSlugs
    .map((guideSlug) => getGuideBySlug(guideSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  if (linked.length >= limit) {
    return linked.slice(0, limit);
  }

  const sameCategory = guides.filter(
    (item) =>
      item.category === guide.category &&
      item.slug !== slug &&
      !linked.some((link) => link.slug === item.slug)
  );

  return [...linked, ...sameCategory].slice(0, limit);
}

export function getRelatedCalculatorsForGuide(slug: string, limit = 3) {
  const article = getGuideArticle(slug);
  const guide = getGuideBySlug(slug);
  if (!guide) return [];

  const primarySlug = article?.calculatorSlug ?? article?.cta.calculatorSlug;
  const linkedSlugs = [
    ...(primarySlug ? [primarySlug] : []),
    ...(article?.relatedCalculatorSlugs ?? []).filter(
      (calcSlug) => calcSlug !== primarySlug
    ),
  ];

  const linked = linkedSlugs
    .map((calcSlug) => getCalculatorBySlug(calcSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
    .filter(
      (item, index, arr) =>
        arr.findIndex((entry) => entry.slug === item.slug) === index
    );

  if (linked.length >= limit) {
    return linked.slice(0, limit);
  }

  const sameCategory = calculators.filter(
    (item) =>
      item.category === guide.category &&
      !linked.some((link) => link.slug === item.slug)
  );

  return [...linked, ...sameCategory].slice(0, limit);
}
