import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Calculator } from "@/data/calculators";

type RelatedCalculatorsProps = {
  calculators: Calculator[];
};

export function RelatedCalculators({ calculators }: RelatedCalculatorsProps) {
  if (calculators.length === 0) return null;

  return (
    <section
      className="mt-10 rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm sm:p-8"
      aria-labelledby="related-calculators-heading"
    >
      <h2 id="related-calculators-heading" className="text-xl font-bold text-text-primary">
        Related calculators
      </h2>
      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {calculators.map((calculator) => (
          <li key={calculator.slug}>
            <Link
              href={`/calculators/${calculator.slug}`}
              className="group flex h-full flex-col rounded-[var(--radius-sm)] border border-card-border p-4 transition-colors hover:border-primary hover:bg-primary-light/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              <span className="text-2xl" aria-hidden="true">
                {calculator.icon}
              </span>
              <p className="mt-2 font-semibold text-text-primary group-hover:text-primary">
                {calculator.title}
              </p>
              <p className="mt-1 flex-1 text-sm text-text-secondary">
                {calculator.shortDescription}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Open
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
