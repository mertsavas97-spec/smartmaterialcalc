import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export async function getAdminSession() {
  if (!isSupabaseConfigured()) {
    return null;
  }

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}

export async function isAdminUser(userId: string): Promise<boolean> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("admin_users")
    .select("id")
    .eq("id", userId)
    .maybeSingle();

  if (error) {
    return false;
  }

  return Boolean(data);
}

export async function requireAdmin() {
  if (!isSupabaseConfigured()) {
    redirect("/admin/login?error=supabase-not-configured");
  }

  const user = await getAdminSession();

  if (!user) {
    redirect("/admin/login");
  }

  const allowed = await isAdminUser(user.id);
  if (!allowed) {
    redirect("/admin/login?error=unauthorized");
  }

  return user;
}

export async function getOptionalAdmin() {
  const user = await getAdminSession();
  if (!user) {
    return null;
  }

  const allowed = await isAdminUser(user.id);
  return allowed ? user : null;
}
