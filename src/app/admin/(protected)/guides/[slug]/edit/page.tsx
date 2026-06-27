import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideProEditor } from "@/components/admin/guide-editor/GuideProEditor";
import { calculators } from "@/data/calculators";
import { getAllGuidesForAdmin, getGuideRecordBySlugForAdmin } from "@/lib/guides/loader";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ saved?: string; error?: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return { title: `Edit ${slug}` };
}

export default async function AdminEditGuidePage({
  params,
  searchParams,
}: PageProps) {
  const { slug } = await params;
  const { saved, error } = await searchParams;
  const [guide, guides] = await Promise.all([
    getGuideRecordBySlugForAdmin(slug),
    getAllGuidesForAdmin(),
  ]);

  if (!guide) {
    notFound();
  }

  return (
    <div>
      <Link href="/admin/guides" className="text-sm text-primary hover:underline">
        ← Back to guides
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Edit guide</h1>
      <div className="mt-6">
        <GuideProEditor
          guide={guide}
          guideOptions={guides.map((item) => ({ slug: item.slug, title: item.title }))}
          calculatorOptions={calculators.map((item) => ({
            slug: item.slug,
            title: item.title,
          }))}
          saved={saved}
          error={error}
        />
      </div>
    </div>
  );
}
