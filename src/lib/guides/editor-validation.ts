import type { GuideFaq } from "@/types/guide-article";

const SLUG_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export type GuideSeoScore = {
  score: number;
  issues: string[];
  warnings: string[];
};

export function isValidGuideSlug(slug: string): boolean {
  return SLUG_PATTERN.test(slug);
}

export function isValidInternalOrExternalUrl(url: string): boolean {
  if (url.startsWith("/")) {
    return url.length > 1;
  }
  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function calculateGuideSeoScore(input: {
  title: string;
  seoTitle: string | null;
  excerpt: string;
  slug: string;
  heroImage: string;
  faqs: GuideFaq[];
  wordCount: number;
}): GuideSeoScore {
  const issues: string[] = [];
  const warnings: string[] = [];
  let score = 100;

  const metaTitle = input.seoTitle?.trim() || input.title.trim();
  const description = input.excerpt.trim();

  if (!input.title.trim()) {
    issues.push("Title is required.");
    score -= 25;
  }
  if (!description) {
    issues.push("Meta description (excerpt) is required.");
    score -= 20;
  }
  if (!isValidGuideSlug(input.slug)) {
    issues.push("Slug must use lowercase letters, numbers, and hyphens.");
    score -= 15;
  }
  if (!input.heroImage.trim()) {
    issues.push("Hero image is required.");
    score -= 10;
  }
  if (input.wordCount < 300) {
    warnings.push("Article is under 300 words.");
    score -= 10;
  }
  if (metaTitle.length > 60) {
    warnings.push("SEO title exceeds 60 characters.");
    score -= 5;
  }
  if (description.length > 160) {
    warnings.push("Meta description exceeds 160 characters.");
    score -= 5;
  }
  if (input.faqs.length === 0) {
    warnings.push("Add at least one FAQ for rich results.");
    score -= 5;
  }

  return {
    score: Math.max(0, score),
    issues,
    warnings,
  };
}

export function validateGuideEditorInput(input: {
  title: string;
  slug: string;
  excerpt: string;
  heroImage: string;
  thumbnailImage: string;
  bodyMarkdown: string;
  ctaCalculatorSlug: string;
  relatedGuideSlugs: string[];
  relatedCalculatorSlugs: string[];
}): string[] {
  const errors: string[] = [];

  if (!input.title.trim()) {
    errors.push("Title is required.");
  }
  if (!input.bodyMarkdown.trim()) {
    errors.push("Guide body cannot be empty.");
  }
  if (!isValidGuideSlug(input.slug)) {
    errors.push("Slug must use lowercase letters, numbers, and hyphens.");
  }
  if (!input.excerpt.trim()) {
    errors.push("Excerpt is required.");
  }
  if (!input.heroImage.trim()) {
    errors.push("Hero image is required.");
  }
  if (!input.ctaCalculatorSlug.trim()) {
    errors.push("CTA calculator slug is required.");
  }

  const guideSet = new Set<string>();
  for (const slug of input.relatedGuideSlugs) {
    if (guideSet.has(slug)) {
      errors.push(`Duplicate related guide slug: ${slug}`);
    }
    guideSet.add(slug);
  }

  const calculatorSet = new Set<string>();
  for (const slug of input.relatedCalculatorSlugs) {
    if (calculatorSet.has(slug)) {
      errors.push(`Duplicate related calculator slug: ${slug}`);
    }
    calculatorSet.add(slug);
  }

  if (input.thumbnailImage.trim() && !isValidInternalOrExternalUrl(input.thumbnailImage)) {
    errors.push("Thumbnail image URL is invalid.");
  }
  if (!isValidInternalOrExternalUrl(input.heroImage)) {
    errors.push("Hero image URL is invalid.");
  }

  return errors;
}
