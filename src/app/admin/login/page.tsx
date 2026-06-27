import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { signInAction } from "@/lib/admin/actions";
import { getOptionalAdmin } from "@/lib/admin/auth";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: {
    index: false,
    follow: false,
  },
};

type PageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function AdminLoginPage({ searchParams }: PageProps) {
  const admin = await getOptionalAdmin();
  if (admin) {
    redirect("/admin/guides");
  }

  const { error } = await searchParams;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f4f6f4] px-4">
      <div className="w-full max-w-md rounded-[var(--radius-lg)] border border-card-border bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-text-primary">Admin login</h1>
        <p className="mt-2 text-sm text-text-secondary">
          Owner access only. This area is not indexed.
        </p>

        {!isSupabaseConfigured() && (
          <p className="mt-4 rounded-[var(--radius-sm)] bg-[#fff3e0] px-3 py-2 text-sm text-[#8a4b00]">
            Supabase is not configured. Set environment variables to enable admin
            authentication.
          </p>
        )}

        {error === "invalid-credentials" && (
          <p className="mt-4 text-sm text-red-700">Invalid email or password.</p>
        )}
        {error === "unauthorized" && (
          <p className="mt-4 text-sm text-red-700">
            This account is not authorized for admin access.
          </p>
        )}
        {error === "supabase-not-configured" && (
          <p className="mt-4 text-sm text-red-700">
            Supabase environment variables are missing.
          </p>
        )}

        <form action={signInAction} className="mt-6 space-y-4">
          <label className="block text-sm">
            <span className="font-medium">Email</span>
            <input
              type="email"
              name="email"
              required
              autoComplete="username"
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Password</span>
            <input
              type="password"
              name="password"
              required
              autoComplete="current-password"
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <button
            type="submit"
            className="w-full rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
