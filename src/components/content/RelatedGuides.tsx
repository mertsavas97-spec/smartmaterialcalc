import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { getGuideReadingTimeLabel, type Guide } from "@/data/guides";

type RelatedGuidesProps = {
  guides: Guide[];
};

export function RelatedGuides({ guides }: RelatedGuidesProps) {
  if (guides.length === 0) return null;

  return (
    <section
      className="mt-10 rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="related-guides-heading"
    >
      <h2 id="related-guides-heading" className="text-xl font-bold text-text-primary">
        Related guides
      </h2>
      <ul className="mt-5 space-y-4">
        {guides.map((guide) => (
          <li key={guide.slug}>
            <Link
              href={`/guides/${guide.slug}`}
              className="group flex gap-4 rounded-[var(--radius-sm)] border border-card-border p-4 transition-colors hover:border-primary hover:bg-primary-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <div className="relative hidden aspect-[16/9] w-28 shrink-0 overflow-hidden rounded-[var(--radius-sm)] bg-primary-light sm:block">
                <Image
                  src={guide.thumbnail}
                  alt=""
                  fill
                  sizes="112px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {guide.category}
                </span>
                <p className="mt-1 font-semibold text-text-primary group-hover:text-primary">
                  {guide.title}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{guide.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-2 text-xs text-text-muted">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {getGuideReadingTimeLabel(guide.slug)}
                  <ArrowRight className="h-3.5 w-3.5 text-primary" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
