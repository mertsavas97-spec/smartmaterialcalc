"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import {
  getHomepageSettingsForAdmin,
  saveHomepageSettings,
  saveSiteSettings,
} from "@/lib/cms/loader";
import type { HomepageSettings, SiteSettings } from "@/lib/cms/types";
import type { FaqItem } from "@/data/calculator-faqs";
import {
  validateHomepageSettings,
  validateSiteSettings,
} from "@/lib/cms/validation";

function parseJsonField<T>(raw: FormDataEntryValue | null, label: string): T {
  if (typeof raw !== "string" || !raw.trim()) {
    throw new Error(`${label} is required.`);
  }
  return JSON.parse(raw) as T;
}

function parseList(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string" || !value.trim()) {
    return [];
  }
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function redirectWithError(path: string, message: string): never {
  redirect(`${path}?error=${encodeURIComponent(message)}`);
}

function redirectWithWarnings(path: string, warnings: string[]): never {
  redirect(`${path}?saved=1&warnings=${encodeURIComponent(warnings.join(" "))}`);
}

function buildHomepageSettingsFromForm(formData: FormData): HomepageSettings {
  const current = {
    hero: {
      badge: String(formData.get("heroBadge") ?? "").trim(),
      title: String(formData.get("heroTitle") ?? "").trim(),
      subtitle: String(formData.get("heroSubtitle") ?? "").trim(),
      ctaLabel: String(formData.get("heroCtaLabel") ?? "").trim(),
      ctaUrl: String(formData.get("heroCtaUrl") ?? "").trim(),
    },
    featuredCalculatorSlugs: parseList(formData.get("featuredCalculatorSlugs")),
    featuredGuideSlugs: parseList(formData.get("featuredGuideSlugs")),
    faqs: parseJsonField<FaqItem[]>(formData.get("faqsJson"), "Homepage FAQ"),
    trust: {
      headline: String(formData.get("trustHeadline") ?? "").trim(),
      linkLabel: String(formData.get("trustLinkLabel") ?? "").trim(),
      linkUrl: String(formData.get("trustLinkUrl") ?? "").trim(),
      ctaLabel: String(formData.get("trustCtaLabel") ?? "").trim(),
      ctaUrl: String(formData.get("trustCtaUrl") ?? "").trim(),
    },
    statistics: parseJsonField<HomepageSettings["statistics"]>(
      formData.get("statisticsJson"),
      "Homepage statistics"
    ),
    categoryOrder: parseList(formData.get("categoryOrder")),
    seo: {
      metaTitle: String(formData.get("metaTitle") ?? "").trim(),
      metaDescription: String(formData.get("metaDescription") ?? "").trim(),
      ogTitle: String(formData.get("ogTitle") ?? "").trim(),
      ogDescription: String(formData.get("ogDescription") ?? "").trim(),
    },
  };

  return current;
}

function buildSiteSettingsFromForm(formData: FormData): SiteSettings {
  return {
    contactEmail: String(formData.get("contactEmail") ?? "").trim(),
    footerCopyright: String(formData.get("footerCopyright") ?? "").trim(),
    announcementBar: {
      enabled: formData.get("announcementEnabled") === "on",
      message: String(formData.get("announcementMessage") ?? "").trim(),
      linkLabel: String(formData.get("announcementLinkLabel") ?? "").trim(),
      linkUrl: String(formData.get("announcementLinkUrl") ?? "").trim(),
    },
    socialLinks: parseJsonField<SiteSettings["socialLinks"]>(
      formData.get("socialLinksJson"),
      "Social links"
    ),
  };
}

async function persistHomepage(settings: HomepageSettings, redirectPath: string) {
  const { errors, warnings } = validateHomepageSettings(settings);
  if (errors.length > 0) {
    redirectWithError(redirectPath, errors[0]);
  }

  await saveHomepageSettings(settings);

  revalidatePath("/");
  revalidatePath("/admin/homepage");
  revalidatePath("/admin/seo");

  if (warnings.length > 0) {
    redirectWithWarnings(redirectPath, warnings);
  }

  redirect(`${redirectPath}?saved=1`);
}

export async function saveHomepageContentAction(formData: FormData) {
  await requireAdmin();
  const settings = await getHomepageSettingsForAdmin();
  const nextSettings: HomepageSettings = {
    ...settings,
    hero: {
      badge: String(formData.get("heroBadge") ?? "").trim(),
      title: String(formData.get("heroTitle") ?? "").trim(),
      subtitle: String(formData.get("heroSubtitle") ?? "").trim(),
      ctaLabel: String(formData.get("heroCtaLabel") ?? "").trim(),
      ctaUrl: String(formData.get("heroCtaUrl") ?? "").trim(),
    },
    featuredCalculatorSlugs: parseList(formData.get("featuredCalculatorSlugs")),
    featuredGuideSlugs: parseList(formData.get("featuredGuideSlugs")),
    faqs: parseJsonField<FaqItem[]>(formData.get("faqsJson"), "Homepage FAQ"),
    trust: {
      headline: String(formData.get("trustHeadline") ?? "").trim(),
      linkLabel: String(formData.get("trustLinkLabel") ?? "").trim(),
      linkUrl: String(formData.get("trustLinkUrl") ?? "").trim(),
      ctaLabel: String(formData.get("trustCtaLabel") ?? "").trim(),
      ctaUrl: String(formData.get("trustCtaUrl") ?? "").trim(),
    },
    statistics: parseJsonField<HomepageSettings["statistics"]>(
      formData.get("statisticsJson"),
      "Homepage statistics"
    ),
    categoryOrder: parseList(formData.get("categoryOrder")),
  };

  await persistHomepage(nextSettings, "/admin/homepage");
}

export async function saveHomepageSeoAction(formData: FormData) {
  await requireAdmin();
  const settings = await getHomepageSettingsForAdmin();
  const nextSettings: HomepageSettings = {
    ...settings,
    seo: {
      metaTitle: String(formData.get("metaTitle") ?? "").trim(),
      metaDescription: String(formData.get("metaDescription") ?? "").trim(),
      ogTitle: String(formData.get("ogTitle") ?? "").trim(),
      ogDescription: String(formData.get("ogDescription") ?? "").trim(),
    },
  };

  await persistHomepage(nextSettings, "/admin/seo");
}

export async function saveSiteSettingsAction(formData: FormData) {
  await requireAdmin();

  const settings = buildSiteSettingsFromForm(formData);
  const { errors, warnings } = validateSiteSettings(settings);
  if (errors.length > 0) {
    redirectWithError("/admin/site-settings", errors[0]);
  }

  await saveSiteSettings(settings);

  revalidatePath("/");
  revalidatePath("/contact");
  revalidatePath("/admin/site-settings");

  if (warnings.length > 0) {
    redirectWithWarnings("/admin/site-settings", warnings);
  }

  redirect("/admin/site-settings?saved=1");
}

export async function saveFullHomepageAction(formData: FormData) {
  await requireAdmin();
  const settings = buildHomepageSettingsFromForm(formData);
  await persistHomepage(settings, "/admin/homepage");
}
