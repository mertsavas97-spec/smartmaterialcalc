import type { GuideArticle } from "@/types/guide-article";
import type { Guide } from "@/data/guides";

export type GuideStatus = "draft" | "published";

export type GuideArticleContent = Omit<
  GuideArticle,
  "slug" | "calculatorSlug" | "relatedGuideSlugs" | "relatedCalculatorSlugs"
>;

export type GuideRecord = {
  id: string;
  slug: string;
  status: GuideStatus;
  title: string;
  seo_title: string | null;
  excerpt: string;
  category: string;
  date_published: string;
  date_modified: string;
  hero_image: string;
  calculator_slug: string | null;
  related_guide_slugs: string[];
  related_calculator_slugs: string[];
  content: GuideArticleContent;
  created_at: string;
  updated_at: string;
};

export type GuideUpsertInput = {
  slug: string;
  status: GuideStatus;
  title: string;
  seoTitle?: string | null;
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  heroImage: string;
  calculatorSlug?: string | null;
  relatedGuideSlugs?: string[];
  relatedCalculatorSlugs?: string[];
  content: GuideArticleContent;
};

export function guideRecordToGuide(row: GuideRecord): Guide {
  return {
    slug: row.slug,
    title: row.title,
    category: row.category,
    excerpt: row.excerpt,
    datePublished: row.date_published,
    dateModified: row.date_modified,
    thumbnail: row.content.thumbnailImage ?? row.hero_image,
    heroImage: row.hero_image,
  };
}

export function guideRecordToArticle(row: GuideRecord): GuideArticle {
  return {
    slug: row.slug,
    calculatorSlug: row.calculator_slug ?? undefined,
    relatedGuideSlugs: row.related_guide_slugs,
    relatedCalculatorSlugs: row.related_calculator_slugs,
    ...row.content,
  };
}

export function guideUpsertToRow(input: GuideUpsertInput): Omit<
  GuideRecord,
  "id" | "created_at" | "updated_at"
> {
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

export function articleToContent(
  article: GuideArticle
): GuideArticleContent {
  const {
    slug: _slug,
    calculatorSlug: _calculatorSlug,
    relatedGuideSlugs: _relatedGuideSlugs,
    relatedCalculatorSlugs: _relatedCalculatorSlugs,
    ...content
  } = article;
  return content;
}
