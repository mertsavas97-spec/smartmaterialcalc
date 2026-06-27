import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GuideEditorForm } from "@/components/admin/GuideEditorForm";
import { getGuideRecordBySlugForAdmin } from "@/lib/guides/loader";

type PageProps = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ saved?: string }>;
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
  const { saved } = await searchParams;
  const guide = await getGuideRecordBySlugForAdmin(slug);

  if (!guide) {
    notFound();
  }

  return (
    <div>
      <Link href="/admin/guides" className="text-sm text-primary hover:underline">
        ← Back to guides
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Edit guide</h1>
      {saved === "1" && (
        <p className="mt-2 text-sm text-primary-dark">Guide saved successfully.</p>
      )}
      <div className="mt-6">
        <GuideEditorForm guide={guide} />
      </div>
    </div>
  );
}
