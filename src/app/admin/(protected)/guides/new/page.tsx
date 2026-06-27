import type { Metadata } from "next";
import Link from "next/link";
import { GuideEditorForm } from "@/components/admin/GuideEditorForm";

export const metadata: Metadata = {
  title: "New Guide",
};

export default function AdminNewGuidePage() {
  return (
    <div>
      <Link href="/admin/guides" className="text-sm text-primary hover:underline">
        ← Back to guides
      </Link>
      <h1 className="mt-4 text-2xl font-bold">Create guide</h1>
      <div className="mt-6">
        <GuideEditorForm />
      </div>
    </div>
  );
}
