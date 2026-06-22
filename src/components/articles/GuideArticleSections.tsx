import Link from "next/link";
import type { ReactNode } from "react";

type ArticleIntroProps = {
  children: ReactNode;
};

export function ArticleIntro({ children }: ArticleIntroProps) {
  return (
    <div className="text-base leading-relaxed text-text-secondary">{children}</div>
  );
}

type ArticleSectionProps = {
  heading: string;
  id?: string;
  children: ReactNode;
};

export function ArticleSection({ heading, id, children }: ArticleSectionProps) {
  return (
    <section id={id} className="mb-10 scroll-mt-24">
      <h2 className="text-xl font-bold text-text-primary">{heading}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-secondary">
        {children}
      </div>
    </section>
  );
}

export function ArticleParagraph({ children }: { children: ReactNode }) {
  return <p>{children}</p>;
}

type ArticleCalloutProps = {
  title?: string;
  children: ReactNode;
};

export function ArticleCallout({ title, children }: ArticleCalloutProps) {
  return (
    <aside className="my-6 rounded-[var(--radius-sm)] border border-card-border bg-warning px-4 py-3">
      {title && (
        <p className="text-sm font-semibold text-text-primary">{title}</p>
      )}
      <div
        className={`text-sm leading-relaxed text-text-secondary ${
          title ? "mt-2" : ""
        }`}
      >
        {children}
      </div>
    </aside>
  );
}

type ArticleExampleProps = {
  title: string;
  scenario: string;
  outcome: string;
};

export function ArticleExample({ title, scenario, outcome }: ArticleExampleProps) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-card-border bg-white p-4 shadow-sm">
      <h3 className="text-sm font-semibold text-text-primary">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        <strong className="text-text-primary">Scenario:</strong> {scenario}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        <strong className="text-text-primary">Result:</strong> {outcome}
      </p>
    </div>
  );
}

export { ArticleCTA } from "./ArticleCTA";

type ArticleInternalLinksProps = {
  links: { href: string; label: string }[];
};

export function ArticleInternalLinks({ links }: ArticleInternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav
      className="mb-10 rounded-[var(--radius-sm)] border border-card-border bg-white p-4"
      aria-label="Related reading"
    >
      <p className="text-sm font-semibold text-text-primary">Related reading</p>
      <ul className="mt-2 space-y-1">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-sm text-primary hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export { FAQSection as ArticleFAQ } from "@/components/content/FAQSection";
