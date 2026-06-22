import Link from "next/link";
import type { CategoryContentSection } from "@/data/categories";

type CategoryContentBlockProps = {
  section: CategoryContentSection;
};

export function CategoryContentBlock({ section }: CategoryContentBlockProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-text-primary">{section.heading}</h2>
      {section.paragraphs.length > 0 && (
        <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-secondary">
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      )}
      {section.listItems && section.listItems.length > 0 && (
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-text-secondary">
          {section.listItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

type CategoryInternalLinksProps = {
  links: { href: string; label: string }[];
};

export function CategoryInternalLinks({ links }: CategoryInternalLinksProps) {
  return (
    <nav
      className="mb-10 rounded-[var(--radius-sm)] border border-card-border bg-white p-4"
      aria-label="Explore SmartMaterialCalc"
    >
      <p className="text-sm font-semibold text-text-primary">Explore SmartMaterialCalc</p>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
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
