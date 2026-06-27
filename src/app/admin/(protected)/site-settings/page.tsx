import type { Metadata } from "next";
import { AdminStatusBanner } from "@/components/admin/AdminStatusBanner";
import { SiteSettingsForm } from "@/components/admin/SiteSettingsForm";
import { getSiteSettingsForAdmin } from "@/lib/cms/loader";

export const metadata: Metadata = {
  title: "Site Settings Admin",
};

type PageProps = {
  searchParams: Promise<{ saved?: string; error?: string; warnings?: string }>;
};

export default async function AdminSiteSettingsPage({ searchParams }: PageProps) {
  const settings = await getSiteSettingsForAdmin();
  const { saved, error, warnings } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-bold">Site settings</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Contact email, footer copy, announcement bar, and social links.
      </p>
      <div className="mt-6">
        <AdminStatusBanner saved={saved} error={error} warnings={warnings} />
        <SiteSettingsForm settings={settings} />
      </div>
    </div>
  );
}
