import type { Metadata } from "next";
import Link from "next/link";
import { GuideProEditor } from "@/components/admin/guide-editor/GuideProEditor";
import { calculators } from "@/data/calculators";
import { getAllGuidesForAdmin } from "@/lib/guides/loader";

export const metadata: Metadata = {
  title: "New Guide",
};

export default async function AdminNewGuidePage() {
  const guides = await getAllGuidesForAdmin();

  return (
    <div>
      <Link href="/admin/guides" className="text-sm text-primary hover:underline">
        ← Back to guides
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Create guide</h1>
      <div className="mt-6">
        <GuideProEditor
          guideOptions={guides.map((item) => ({ slug: item.slug, title: item.title }))}
          calculatorOptions={calculators.map((item) => ({
            slug: item.slug,
            title: item.title,
          }))}
        />
      </div>
    </div>
  );
}
