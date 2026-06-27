"use server";

import { requireAdmin } from "@/lib/admin/auth";
import { createAdminClient } from "@/lib/supabase/admin";
import { isSupabaseAdminConfigured } from "@/lib/supabase/env";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/gif"]);

export async function uploadGuideImageAction(formData: FormData): Promise<{
  ok: boolean;
  url?: string;
  error?: string;
}> {
  await requireAdmin();

  if (!isSupabaseAdminConfigured()) {
    return { ok: false, error: "Supabase is not configured for image uploads." };
  }

  const file = formData.get("file");
  const slug = String(formData.get("slug") ?? "draft").trim() || "draft";

  if (!(file instanceof File)) {
    return { ok: false, error: "No file provided." };
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return { ok: false, error: "Only JPG, PNG, WebP, and GIF images are allowed." };
  }
  if (file.size > MAX_FILE_SIZE) {
    return { ok: false, error: "Image must be 5 MB or smaller." };
  }

  const extension = file.name.split(".").pop()?.toLowerCase() || "webp";
  const path = `${slug}/${Date.now()}-${Math.random().toString(36).slice(2)}.${extension}`;

  const supabase = createAdminClient();
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error } = await supabase.storage.from("guide-images").upload(path, buffer, {
    contentType: file.type,
    upsert: false,
  });

  if (error) {
    return { ok: false, error: error.message };
  }

  const {
    data: { publicUrl },
  } = supabase.storage.from("guide-images").getPublicUrl(path);

  return { ok: true, url: publicUrl };
}
