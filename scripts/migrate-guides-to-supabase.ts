import "./load-env";

import { createClient } from "@supabase/supabase-js";
import { buildStaticGuideUpsertInputs } from "../src/lib/guides/static-fallback";
import { guideUpsertToRow } from "../src/lib/guides/types";

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

  const inputs = buildStaticGuideUpsertInputs();
  const rows = inputs.map((input) => ({
    ...guideUpsertToRow(input),
    updated_at: new Date().toISOString(),
  }));

  const { error } = await supabase.from("guides").upsert(rows, {
    onConflict: "slug",
  });

  if (error) {
    throw new Error(`Guide migration failed: ${error.message}`);
  }

  console.log(`Migrated ${rows.length} guides to Supabase.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
