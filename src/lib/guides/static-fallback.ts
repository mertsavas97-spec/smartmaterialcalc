import { getGuideArticle, guideArticles } from "@/data/guide-articles";
import { guides as staticGuides } from "@/data/guides";
import type { GuideArticle } from "@/types/guide-article";
import type { Guide } from "@/data/guides";
import {
  articleToContent,
  guideRecordToArticle,
  guideRecordToGuide,
  type GuideRecord,
  type GuideUpsertInput,
} from "./types";

export function getStaticPublishedGuides(): Guide[] {
  return staticGuides;
}

export function getStaticAllGuideSlugs(): string[] {
  return staticGuides.map((guide) => guide.slug);
}

export function getStaticPublishedGuideSlugs(): string[] {
  return getStaticAllGuideSlugs();
}

export function getStaticGuideBySlug(slug: string): Guide | undefined {
  return staticGuides.find((guide) => guide.slug === slug);
}

export function getStaticGuideArticle(slug: string): GuideArticle | undefined {
  return getGuideArticle(slug);
}

export function buildStaticGuideUpsertInputs(): GuideUpsertInput[] {
  return staticGuides.map((guide) => {
    const article = getGuideArticle(guide.slug);
    if (!article) {
      throw new Error(`Missing static guide article for slug: ${guide.slug}`);
    }

    return {
      slug: guide.slug,
      status: "published",
      title: guide.title,
      excerpt: guide.excerpt,
      category: guide.category,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      heroImage: guide.heroImage,
      calculatorSlug: article.calculatorSlug ?? null,
      relatedGuideSlugs: article.relatedGuideSlugs ?? [],
      relatedCalculatorSlugs: article.relatedCalculatorSlugs ?? [],
      content: articleToContent(article),
    };
  });
}

export function getStaticGuideRecordsForAdmin(): GuideRecord[] {
  const now = new Date().toISOString();
  return buildStaticGuideUpsertInputs().map((input, index) => ({
    id: `static-${index}`,
    ...guideUpsertInputToRecordFields(input),
    created_at: now,
    updated_at: now,
  }));
}

function guideUpsertInputToRecordFields(input: GuideUpsertInput) {
  return {
    slug: input.slug,
    status: input.status,
    title: input.title,
    seo_title: input.seoTitle ?? null,
    excerpt: input.excerpt,
    category: input.category,
    date_published: input.datePublished,
    date_modified: input.dateModified,
    hero_image: input.heroImage,
    calculator_slug: input.calculatorSlug ?? null,
    related_guide_slugs: input.relatedGuideSlugs ?? [],
    related_calculator_slugs: input.relatedCalculatorSlugs ?? [],
    content: input.content,
  };
}

export { guideRecordToArticle, guideRecordToGuide };
