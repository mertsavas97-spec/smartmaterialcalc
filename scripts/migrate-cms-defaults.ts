import "./load-env";

import { createClient } from "@supabase/supabase-js";
import {
  buildDefaultHomepageSettingsPayload,
  buildDefaultSiteSettingsPayload,
} from "../src/lib/cms/defaults";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

async function main() {
  const url = requireEnv("NEXT_PUBLIC_SUPABASE_URL");
  const serviceRoleKey = requireEnv("SUPABASE_SERVICE_ROLE_KEY");

  const supabase = createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });

  const homepageSettings = buildDefaultHomepageSettingsPayload();
  const siteSettings = buildDefaultSiteSettingsPayload();
  const now = new Date().toISOString();

  const { error: homepageError } = await supabase.from("homepage_settings").upsert(
    {
      id: 1,
      settings: homepageSettings,
      updated_at: now,
    },
    { onConflict: "id" }
  );

  if (homepageError) {
    throw new Error(`Homepage settings migration failed: ${homepageError.message}`);
  }

  const { error: siteError } = await supabase.from("site_settings").upsert(
    {
      id: 1,
      settings: siteSettings,
      updated_at: now,
    },
    { onConflict: "id" }
  );

  if (siteError) {
    throw new Error(`Site settings migration failed: ${siteError.message}`);
  }

  console.log("Migrated homepage and site settings defaults to Supabase.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
