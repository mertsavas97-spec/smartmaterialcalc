import Image from "next/image";
import Link from "next/link";
import { Clock, ArrowRight } from "lucide-react";
import {
  getGuideReadingTimeLabel,
  type Guide,
} from "@/data/guides";
import { formatDisplayDate } from "@/lib/date-format";

type GuideCardProps = {
  guide: Guide;
};

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-[var(--radius-lg)] border border-card-border bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link
        href={`/guides/${guide.slug}`}
        className="relative block aspect-[16/9] overflow-hidden bg-primary-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      >
        <Image
          src={guide.thumbnail}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <span className="text-xs font-medium uppercase tracking-wide text-primary">
          {guide.category}
        </span>
        <h3 className="mt-2 text-base font-semibold leading-snug text-text-primary">
          <Link
            href={`/guides/${guide.slug}`}
            className="hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            {guide.title}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-secondary">
          {guide.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-text-muted">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            {getGuideReadingTimeLabel(guide.slug)}
          </span>
          <time dateTime={guide.dateModified}>
            Updated {formatDisplayDate(guide.dateModified)}
          </time>
        </div>
        <Link
          href={`/guides/${guide.slug}`}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
        >
          Read article
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
