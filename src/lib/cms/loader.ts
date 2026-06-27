import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseAdminConfigured } from "@/lib/supabase/env";
import {
  buildDefaultHomepageSettingsPayload,
  buildDefaultSiteSettingsPayload,
} from "./defaults";
import { mergeHomepageSettings, mergeSiteSettings } from "./merge";
import type { HomepageSettings, SiteSettings } from "./types";

async function fetchHomepageSettingsPartial(): Promise<Partial<HomepageSettings> | null> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("homepage_settings")
      .select("settings")
      .eq("id", 1)
      .maybeSingle();

    if (error) {
      return null;
    }

    return (data?.settings as Partial<HomepageSettings> | undefined) ?? null;
  } catch {
    return null;
  }
}

async function fetchSiteSettingsPartial(): Promise<Partial<SiteSettings> | null> {
  try {
    const supabase = createAdminClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("settings")
      .eq("id", 1)
      .maybeSingle();

    if (error) {
      return null;
    }

    return (data?.settings as Partial<SiteSettings> | undefined) ?? null;
  } catch {
    return null;
  }
}

export async function getHomepageSettings(): Promise<HomepageSettings> {
  if (!isSupabaseAdminConfigured()) {
    return mergeHomepageSettings(null);
  }

  const partial = await fetchHomepageSettingsPartial();
  return mergeHomepageSettings(partial);
}

export async function getSiteSettings(): Promise<SiteSettings> {
  if (!isSupabaseAdminConfigured()) {
    return mergeSiteSettings(null);
  }

  const partial = await fetchSiteSettingsPartial();
  return mergeSiteSettings(partial);
}

export async function saveHomepageSettings(settings: HomepageSettings): Promise<void> {
  if (!isSupabaseAdminConfigured()) {
    throw new Error("Supabase is not configured. Homepage writes require Supabase.");
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from("homepage_settings").upsert(
    {
      id: 1,
      settings,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" }
  );

  if (error) {
    throw new Error(`Failed to save homepage settings: ${error.message}`);
  }
}

export async function saveSiteSettings(settings: SiteSettings): Promise<void> {
  if (!isSupabaseAdminConfigured()) {
    throw new Error("Supabase is not configured. Site settings writes require Supabase.");
  }

  const supabase = createAdminClient();
  const { error } = await supabase.from("site_settings").upsert(
    {
      id: 1,
      settings,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "id" }
  );

  if (error) {
    throw new Error(`Failed to save site settings: ${error.message}`);
  }
}

export function getStaticHomepageSettingsForAdmin(): HomepageSettings {
  return buildDefaultHomepageSettingsPayload();
}

export function getStaticSiteSettingsForAdmin(): SiteSettings {
  return buildDefaultSiteSettingsPayload();
}

export async function getHomepageSettingsForAdmin(): Promise<HomepageSettings> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticHomepageSettingsForAdmin();
  }
  return getHomepageSettings();
}

export async function getSiteSettingsForAdmin(): Promise<SiteSettings> {
  if (!isSupabaseAdminConfigured()) {
    return getStaticSiteSettingsForAdmin();
  }
  return getSiteSettings();
}
