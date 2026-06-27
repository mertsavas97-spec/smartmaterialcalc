import type { Metadata } from "next";
import Link from "next/link";
import { getAllGuidesForAdmin } from "@/lib/guides/loader";

export const metadata: Metadata = {
  title: "Guides Admin",
};

export default async function AdminGuidesPage() {
  const guides = await getAllGuidesForAdmin();

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold">Guides</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Manage published and draft guide articles.
          </p>
        </div>
        <Link
          href="/admin/guides/new"
          className="rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
        >
          New guide
        </Link>
      </div>

      <div className="mt-8 overflow-hidden rounded-[var(--radius-lg)] border border-card-border bg-white">
        <table className="min-w-full text-left text-sm">
          <thead className="border-b border-card-border bg-[#fafafa] text-text-secondary">
            <tr>
              <th className="px-4 py-3 font-medium">Title</th>
              <th className="px-4 py-3 font-medium">Slug</th>
              <th className="px-4 py-3 font-medium">Status</th>
              <th className="px-4 py-3 font-medium">Modified</th>
              <th className="px-4 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {guides.map((guide) => (
              <tr key={guide.slug} className="border-b border-card-border last:border-b-0">
                <td className="px-4 py-3">{guide.title}</td>
                <td className="px-4 py-3 font-mono text-xs">{guide.slug}</td>
                <td className="px-4 py-3">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-medium ${
                      guide.status === "published"
                        ? "bg-primary-light text-primary-dark"
                        : "bg-[#fff3e0] text-[#8a4b00]"
                    }`}
                  >
                    {guide.status}
                  </span>
                </td>
                <td className="px-4 py-3">{guide.date_modified}</td>
                <td className="px-4 py-3">
                  <Link
                    href={`/admin/guides/${guide.slug}/edit`}
                    className="font-medium text-primary hover:underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
