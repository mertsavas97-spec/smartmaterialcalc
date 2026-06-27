import { getAllCalculatorSlugs } from "@/data/calculators";
import { categories } from "@/data/categories";
import type { HomepageSettings, SiteSettings } from "./types";

export type ValidationResult = {
  errors: string[];
  warnings: string[];
};

export function isValidUrl(url: string): boolean {
  const trimmed = url.trim();
  if (!trimmed) {
    return false;
  }
  if (trimmed.startsWith("/")) {
    return trimmed.length > 1;
  }
  try {
    const parsed = new URL(trimmed);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function assertNoDuplicateSlugs(slugs: string[], label: string, errors: string[]) {
  const seen = new Set<string>();
  for (const slug of slugs) {
    if (seen.has(slug)) {
      errors.push(`Duplicate ${label}: "${slug}"`);
    }
    seen.add(slug);
  }
}

function assertKnownCalculatorSlugs(slugs: string[], errors: string[]) {
  const known = new Set(getAllCalculatorSlugs());
  for (const slug of slugs) {
    if (!known.has(slug)) {
      errors.push(`Unknown calculator slug: "${slug}"`);
    }
  }
}

function assertKnownCategorySlugs(slugs: string[], errors: string[]) {
  const known = new Set(categories.map((category) => category.slug));
  for (const slug of slugs) {
    if (!known.has(slug)) {
      errors.push(`Unknown category slug: "${slug}"`);
    }
  }
}

export function validateHomepageSettings(settings: HomepageSettings): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!settings.hero.title.trim()) {
    errors.push("Hero title (H1) cannot be empty.");
  }
  if (!settings.hero.ctaLabel.trim()) {
    errors.push("Hero CTA label is required.");
  }
  if (!settings.hero.ctaUrl.trim() || !isValidUrl(settings.hero.ctaUrl)) {
    errors.push("Hero CTA URL is invalid.");
  }
  if (!settings.trust.ctaLabel.trim()) {
    errors.push("Trust section CTA label is required.");
  }
  if (!settings.trust.ctaUrl.trim() || !isValidUrl(settings.trust.ctaUrl)) {
    errors.push("Trust section CTA URL is invalid.");
  }
  if (settings.trust.linkUrl.trim() && !isValidUrl(settings.trust.linkUrl)) {
    errors.push("Trust section link URL is invalid.");
  }

  assertNoDuplicateSlugs(settings.featuredCalculatorSlugs, "featured calculator", errors);
  assertNoDuplicateSlugs(settings.featuredGuideSlugs, "featured guide", errors);
  assertKnownCalculatorSlugs(settings.featuredCalculatorSlugs, errors);
  assertKnownCategorySlugs(settings.categoryOrder, errors);

  for (const faq of settings.faqs) {
    if (!faq.question.trim() || !faq.answer.trim()) {
      errors.push("Homepage FAQ questions and answers cannot be empty.");
      break;
    }
  }

  for (const stat of settings.statistics) {
    if (!stat.value.trim() || !stat.label.trim()) {
      errors.push("Homepage statistics require both value and label.");
      break;
    }
  }

  if (settings.seo.metaTitle.length > 60) {
    warnings.push("Meta title exceeds 60 characters.");
  }
  if (settings.seo.metaDescription.length > 160) {
    warnings.push("Meta description exceeds 160 characters.");
  }
  if (settings.seo.ogTitle.length > 60) {
    warnings.push("OG title exceeds 60 characters.");
  }
  if (settings.seo.ogDescription.length > 160) {
    warnings.push("OG description exceeds 160 characters.");
  }

  return { errors, warnings };
}

export function validateSiteSettings(settings: SiteSettings): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (!settings.contactEmail.trim() || !settings.contactEmail.includes("@")) {
    errors.push("Contact email is invalid.");
  }
  if (!settings.footerCopyright.trim()) {
    errors.push("Footer copyright text cannot be empty.");
  }

  if (settings.announcementBar.enabled) {
    if (!settings.announcementBar.message.trim()) {
      errors.push("Announcement bar message is required when enabled.");
    }
    if (
      settings.announcementBar.linkUrl.trim() &&
      !isValidUrl(settings.announcementBar.linkUrl)
    ) {
      errors.push("Announcement bar link URL is invalid.");
    }
  }

  for (const link of settings.socialLinks) {
    if (!link.platform.trim()) {
      errors.push("Social link platform cannot be empty.");
    }
    if (!link.url.trim() || !isValidUrl(link.url)) {
      errors.push(`Social link URL is invalid for "${link.platform || "link"}".`);
    }
  }

  return { errors, warnings };
}
