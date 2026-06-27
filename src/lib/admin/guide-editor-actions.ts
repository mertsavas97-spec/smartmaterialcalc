"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import {
  deleteGuideRecord,
  upsertGuideRecord,
} from "@/lib/guides/loader";
import { syncStructuredFromMarkdown } from "@/lib/guides/markdown";
import { validateGuideEditorInput } from "@/lib/guides/editor-validation";
import type { GuideArticleContent, GuideStatus } from "@/lib/guides/types";
import type { GuideFaq } from "@/types/guide-article";

export type GuideEditorPayload = {
  originalSlug?: string;
  slug: string;
  status: GuideStatus;
  title: string;
  seoTitle: string | null;
  excerpt: string;
  category: string;
  datePublished: string;
  dateModified: string;
  heroImage: string;
  thumbnailImage: string;
  calculatorSlug: string | null;
  relatedGuideSlugs: string[];
  relatedCalculatorSlugs: string[];
  bodyMarkdown: string;
  faqs: GuideFaq[];
  cta: GuideArticleContent["cta"];
  internalLinks: GuideArticleContent["internalLinks"];
  contentBase: GuideArticleContent;
};

function buildContent(payload: GuideEditorPayload): GuideArticleContent {
  const merged = syncStructuredFromMarkdown(payload.bodyMarkdown, {
    ...payload.contentBase,
    faqs: payload.faqs,
    cta: payload.cta,
    internalLinks: payload.internalLinks,
    thumbnailImage: payload.thumbnailImage || undefined,
    bodyMarkdown: payload.bodyMarkdown.trim(),
    useMarkdownBody: true,
  });

  return merged;
}

function validatePayload(payload: GuideEditorPayload): string | null {
  const errors = validateGuideEditorInput({
    title: payload.title,
    slug: payload.slug,
    excerpt: payload.excerpt,
    heroImage: payload.heroImage,
    thumbnailImage: payload.thumbnailImage,
    bodyMarkdown: payload.bodyMarkdown,
    ctaCalculatorSlug: payload.cta.calculatorSlug,
    relatedGuideSlugs: payload.relatedGuideSlugs,
    relatedCalculatorSlugs: payload.relatedCalculatorSlugs,
  });

  return errors[0] ?? null;
}

export async function saveGuideFromEditorAction(
  payload: GuideEditorPayload
): Promise<{ ok: boolean; error?: string; slug?: string }> {
  await requireAdmin();

  const error = validatePayload(payload);
  if (error) {
    return { ok: false, error };
  }

  const slug = payload.slug.trim();
  const content = buildContent(payload);

  await upsertGuideRecord({
    slug,
    status: payload.status,
    title: payload.title.trim(),
    seoTitle: payload.seoTitle?.trim() || null,
    excerpt: payload.excerpt.trim(),
    category: payload.category.trim(),
    datePublished: payload.datePublished,
    dateModified: payload.dateModified,
    heroImage: payload.heroImage.trim(),
    calculatorSlug: payload.calculatorSlug?.trim() || null,
    relatedGuideSlugs: payload.relatedGuideSlugs,
    relatedCalculatorSlugs: payload.relatedCalculatorSlugs,
    content,
  });

  if (payload.originalSlug && payload.originalSlug !== slug) {
    await deleteGuideRecord(payload.originalSlug);
  }

  revalidateGuidePaths(slug, payload.originalSlug);
  return { ok: true, slug };
}

export async function autosaveGuideAction(
  payload: GuideEditorPayload
): Promise<{ ok: boolean; error?: string; savedAt?: string }> {
  await requireAdmin();

  const error = validatePayload(payload);
  if (error) {
    return { ok: false, error };
  }

  const slug = payload.slug.trim();
  const content = buildContent({
    ...payload,
    status: "draft",
  });

  await upsertGuideRecord({
    slug,
    status: "draft",
    title: payload.title.trim(),
    seoTitle: payload.seoTitle?.trim() || null,
    excerpt: payload.excerpt.trim(),
    category: payload.category.trim(),
    datePublished: payload.datePublished,
    dateModified: payload.dateModified,
    heroImage: payload.heroImage.trim(),
    calculatorSlug: payload.calculatorSlug?.trim() || null,
    relatedGuideSlugs: payload.relatedGuideSlugs,
    relatedCalculatorSlugs: payload.relatedCalculatorSlugs,
    content,
  });

  if (payload.originalSlug && payload.originalSlug !== slug) {
    await deleteGuideRecord(payload.originalSlug);
  }

  return { ok: true, savedAt: new Date().toISOString() };
}

export async function publishGuideFromEditorAction(payload: GuideEditorPayload) {
  await requireAdmin();

  const result = await saveGuideFromEditorAction({
    ...payload,
    status: "published",
  });

  if (!result.ok || !result.slug) {
    redirect(
      `/admin/guides/${payload.originalSlug ?? payload.slug}/edit?error=${encodeURIComponent(result.error ?? "Save failed")}`
    );
  }

  redirect(`/admin/guides/${result.slug}/edit?saved=1`);
}

function revalidateGuidePaths(slug: string, originalSlug?: string) {
  revalidatePath("/guides");
  revalidatePath(`/guides/${slug}`);
  if (originalSlug && originalSlug !== slug) {
    revalidatePath(`/guides/${originalSlug}`);
  }
  revalidatePath("/admin/guides");
  revalidatePath(`/admin/guides/${slug}/edit`);
  revalidatePath(`/admin/guides/${slug}/preview`);
  revalidatePath("/sitemap.xml");
}

export async function deleteGuideFromEditorAction(slug: string) {
  await requireAdmin();
  await deleteGuideRecord(slug);
  revalidatePath("/guides");
  revalidatePath(`/guides/${slug}`);
  revalidatePath("/admin/guides");
  revalidatePath("/sitemap.xml");
  redirect("/admin/guides");
}
