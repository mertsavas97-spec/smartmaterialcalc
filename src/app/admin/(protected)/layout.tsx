import type { Metadata } from "next";
import Link from "next/link";
import { requireAdmin } from "@/lib/admin/auth";
import { signOutAction } from "@/lib/admin/actions";
import { isSupabaseConfigured } from "@/lib/supabase/env";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await requireAdmin();

  return (
    <div className="min-h-screen bg-[#f4f6f4] text-text-primary">
      <header className="border-b border-card-border bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
              SmartMaterialCalc Admin
            </p>
            <p className="text-sm text-text-secondary">
              {isSupabaseConfigured() ? "Supabase connected" : "Static fallback mode"}
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm">
            <Link href="/admin" className="font-medium text-primary hover:underline">
              Dashboard
            </Link>
            <Link href="/admin/guides" className="font-medium text-primary hover:underline">
              Guides
            </Link>
            <Link href="/admin/homepage" className="font-medium text-primary hover:underline">
              Homepage
            </Link>
            <Link href="/admin/seo" className="font-medium text-primary hover:underline">
              SEO
            </Link>
            <Link
              href="/admin/site-settings"
              className="font-medium text-primary hover:underline"
            >
              Site
            </Link>
            <Link href="/admin/analytics" className="font-medium text-primary hover:underline">
              Analytics
            </Link>
            <form action={signOutAction}>
              <button
                type="submit"
                className="text-text-secondary hover:text-text-primary"
              >
                Sign out
              </button>
            </form>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">{children}</main>
    </div>
  );
}
