import type { Metadata } from "next";
import { AdminStatusBanner } from "@/components/admin/AdminStatusBanner";
import { HomepageSettingsForm } from "@/components/admin/HomepageSettingsForm";
import { getHomepageSettingsForAdmin } from "@/lib/cms/loader";

export const metadata: Metadata = {
  title: "Homepage Admin",
};

type PageProps = {
  searchParams: Promise<{ saved?: string; error?: string; warnings?: string }>;
};

export default async function AdminHomepagePage({ searchParams }: PageProps) {
  const settings = await getHomepageSettingsForAdmin();
  const { saved, error, warnings } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-bold">Homepage</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Edit hero, featured content, FAQ, trust copy, statistics, and category order.
      </p>
      <div className="mt-6">
        <AdminStatusBanner saved={saved} error={error} warnings={warnings} />
        <HomepageSettingsForm settings={settings} />
      </div>
    </div>
  );
}
