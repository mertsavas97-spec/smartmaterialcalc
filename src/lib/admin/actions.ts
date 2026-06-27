"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/admin/auth";
import {
  deleteGuideRecord,
  upsertGuideRecord,
} from "@/lib/guides/loader";
import type { GuideArticleContent, GuideStatus } from "@/lib/guides/types";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

function parseList(value: FormDataEntryValue | null): string[] {
  if (typeof value !== "string" || !value.trim()) {
    return [];
  }

  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseContent(raw: string): GuideArticleContent {
  const parsed = JSON.parse(raw) as GuideArticleContent;
  if (!parsed.intro || !parsed.whyItMatters || !parsed.sections || !parsed.cta) {
    throw new Error("Guide content JSON is missing required fields.");
  }
  return parsed;
}

export async function signInAction(formData: FormData) {
  if (!isSupabaseConfigured()) {
    redirect("/admin/login?error=supabase-not-configured");
  }

  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    redirect("/admin/login?error=invalid-credentials");
  }

  redirect("/admin/guides");
}

export async function signOutAction() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }

  redirect("/admin/login");
}

export async function saveGuideAction(formData: FormData) {
  await requireAdmin();

  const originalSlug = String(formData.get("originalSlug") ?? "").trim();
  const slug = String(formData.get("slug") ?? "").trim();
  const status = String(formData.get("status") ?? "draft") as GuideStatus;
  const contentRaw = String(formData.get("content") ?? "");

  if (!slug || !contentRaw) {
    throw new Error("Slug and content are required.");
  }

  await upsertGuideRecord({
    slug,
    status,
    title: String(formData.get("title") ?? "").trim(),
    seoTitle: String(formData.get("seoTitle") ?? "").trim() || null,
    excerpt: String(formData.get("excerpt") ?? "").trim(),
    category: String(formData.get("category") ?? "").trim(),
    datePublished: String(formData.get("datePublished") ?? "").trim(),
    dateModified: String(formData.get("dateModified") ?? "").trim(),
    heroImage: String(formData.get("heroImage") ?? "").trim(),
    calculatorSlug: String(formData.get("calculatorSlug") ?? "").trim() || null,
    relatedGuideSlugs: parseList(formData.get("relatedGuideSlugs")),
    relatedCalculatorSlugs: parseList(formData.get("relatedCalculatorSlugs")),
    content: parseContent(contentRaw),
  });

  if (originalSlug && originalSlug !== slug) {
    await deleteGuideRecord(originalSlug);
  }

  revalidatePath("/guides");
  revalidatePath(`/guides/${slug}`);
  if (originalSlug && originalSlug !== slug) {
    revalidatePath(`/guides/${originalSlug}`);
  }
  revalidatePath("/admin/guides");
  revalidatePath(`/admin/guides/${slug}/edit`);
  revalidatePath("/sitemap.xml");

  redirect(`/admin/guides/${slug}/edit?saved=1`);
}

export async function deleteGuideAction(formData: FormData) {
  await requireAdmin();

  const slug = String(formData.get("slug") ?? "").trim();
  if (!slug) {
    throw new Error("Slug is required.");
  }

  await deleteGuideRecord(slug);

  revalidatePath("/guides");
  revalidatePath(`/guides/${slug}`);
  revalidatePath("/admin/guides");
  revalidatePath("/sitemap.xml");

  redirect("/admin/guides");
}
