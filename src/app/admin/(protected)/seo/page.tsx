import type { Metadata } from "next";
import { AdminStatusBanner } from "@/components/admin/AdminStatusBanner";
import { SeoSettingsForm } from "@/components/admin/SeoSettingsForm";
import { getHomepageSettingsForAdmin } from "@/lib/cms/loader";

export const metadata: Metadata = {
  title: "SEO Admin",
};

type PageProps = {
  searchParams: Promise<{ saved?: string; error?: string; warnings?: string }>;
};

export default async function AdminSeoPage({ searchParams }: PageProps) {
  const settings = await getHomepageSettingsForAdmin();
  const { saved, error, warnings } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-bold">SEO</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Manage homepage meta and Open Graph fields.
      </p>
      <div className="mt-6">
        <AdminStatusBanner saved={saved} error={error} warnings={warnings} />
        <SeoSettingsForm settings={settings} />
      </div>
    </div>
  );
}
