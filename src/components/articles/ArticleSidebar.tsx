import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GuideCalculatorCtaLink } from "@/components/articles/GuideCalculatorCtaLink";
import type { Guide } from "@/data/guides";
import type { TocItem } from "@/lib/article-toc";

type ArticleSidebarProps = {
  toc: TocItem[];
  guideSlug: string;
  calculatorSlug: string;
  calculatorTitle: string;
  calculatorDescription: string;
  relatedGuides: Guide[];
};

function SidebarCard({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wide text-primary">
        {label}
      </p>
      <div className="mt-2">{children}</div>
    </section>
  );
}

export function ArticleSidebar({
  toc,
  guideSlug,
  calculatorSlug,
  calculatorTitle,
  calculatorDescription,
  relatedGuides,
}: ArticleSidebarProps) {
  const sidebarGuides = relatedGuides.slice(0, 2);

  return (
    <aside aria-label="Article sidebar" className="hidden self-start lg:block">
      <div className="sticky top-24 space-y-4">
        {toc.length > 0 && (
          <SidebarCard label="What's in this guide">
            <nav aria-label="Table of contents">
              <ul className="space-y-1.5">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block text-sm leading-snug text-text-secondary transition-colors hover:text-primary"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </SidebarCard>
        )}

        <SidebarCard label="Use the calculator">
          <p className="text-sm font-semibold text-text-primary">
            Need a material estimate?
          </p>
          <p className="mt-1.5 line-clamp-3 text-sm leading-snug text-text-secondary">
            {calculatorDescription}
          </p>
          <GuideCalculatorCtaLink
            guideSlug={guideSlug}
            calculatorSlug={calculatorSlug}
            location="sidebar"
            className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            Open {calculatorTitle}
            <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
          </GuideCalculatorCtaLink>
        </SidebarCard>

        {sidebarGuides.length > 0 && (
          <SidebarCard label="Related guides">
            <ul className="space-y-2">
              {sidebarGuides.map((guide) => (
                <li key={guide.slug}>
                  <Link
                    href={`/guides/${guide.slug}`}
                    className="block text-sm leading-snug text-text-secondary transition-colors hover:text-primary"
                  >
                    <span className="font-medium text-text-primary">
                      {guide.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </SidebarCard>
        )}

        <SidebarCard label="Planning note">
          <p className="text-sm leading-snug text-text-secondary">
            Planning estimates only. Verify labels, local codes, and contractor
            guidance before purchasing.
          </p>
        </SidebarCard>
      </div>
    </aside>
  );
}
