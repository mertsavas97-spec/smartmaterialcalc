import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseAdminConfigured } from "@/lib/supabase/env";
import type { GuideArticle } from "@/types/guide-article";
import type { Guide } from "@/data/guides";
import {
  getStaticGuideArticle,
  getStaticGuideBySlug,
  getStaticGuideRecordsForAdmin,
  getStaticPublishedGuideSlugs,
  getStaticPublishedGuides,
  guideRecordToArticle,
  guideRecordToGuide,
} from "./static-fallback";
import type { GuideRecord, GuideUpsertInput } from "./types";
import { guideUpsertToRow } from "./types";

async function fetchGuideRows(options?: {
  publishedOnly?: boolean;
}): Promise<GuideRecord[]> {
  const supabase = createAdminClient();
  let query = supabase.from("guides").select("*").order("date_modified", {
    ascending: false,
  });

  if (options?.publishedOnly) {
    query = query.eq("status", "published");
  }

  const { data, error } = await query;
  if (error) {
    throw new Error(`Failed to load guides from Supabase: ${error.message}`);
  }

  return (data ?? []) as GuideRecord[];
}

export async function getPublishedGuides(): Promise<Guide[]> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticPublishedGuides();
  }

  const rows = await fetchGuideRows({ publishedOnly: true });
  return rows.map(guideRecordToGuide);
}

export async function getPublishedGuideSlugs(): Promise<string[]> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticPublishedGuideSlugs();
  }

  const rows = await fetchGuideRows({ publishedOnly: true });
  return rows.map((row) => row.slug);
}

export async function getAllGuideSlugsForBuild(): Promise<string[]> {
  return getPublishedGuideSlugs();
}

export async function getPublishedGuideBySlug(slug: string): Promise<Guide | undefined> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticGuideBySlug(slug);
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("guides")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to load guide ${slug}: ${error.message}`);
  }

  return data ? guideRecordToGuide(data as GuideRecord) : undefined;
}

export async function getPublishedGuideArticle(
  slug: string
): Promise<GuideArticle | undefined> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticGuideArticle(slug);
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("guides")
    .select("*")
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to load guide article ${slug}: ${error.message}`);
  }

  return data ? guideRecordToArticle(data as GuideRecord) : undefined;
}

export async function getAllGuidesForAdmin(): Promise<GuideRecord[]> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticGuideRecordsForAdmin();
  }

  return fetchGuideRows();
}

export async function getGuideRecordBySlugForAdmin(
  slug: string
): Promise<GuideRecord | undefined> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticGuideRecordsForAdmin().find((row) => row.slug === slug);
  }

  const supabase = createAdminClient();
  const { data, error } = await supabase
    .from("guides")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error) {
    throw new Error(`Failed to load admin guide ${slug}: ${error.message}`);
  }

  return (data as GuideRecord | null) ?? undefined;
}

export async function upsertGuideRecord(input: GuideUpsertInput): Promise<void> {
  if (!isSupabaseAdminConfigured()) {
    throw new Error("Supabase is not configured. Guide writes require Supabase.");
  }

  const supabase = createAdminClient();
  const row = {
    ...guideUpsertToRow(input),
    updated_at: new Date().toISOString(),
  };

  const { error } = await supabase.from("guides").upsert(row, {
    onConflict: "slug",
  });

  if (error) {
    throw new Error(`Failed to save guide: ${error.message}`);
  }
}

export async function deleteGuideRecord(slug: string): Promise<void> {
  if (!isSupabaseAdminConfigured()) {
    throw new Error("Supabase is not configured. Guide deletes require Supabase.");
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from("guides").delete().eq("slug", slug);

  if (error) {
    throw new Error(`Failed to delete guide: ${error.message}`);
  }
}
