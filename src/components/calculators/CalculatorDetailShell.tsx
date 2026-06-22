import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { PageLayout } from "@/components/layout/PageLayout";
import { getCategorySlugByName } from "@/data/categories";
import type { Calculator } from "@/data/calculators";
import { formatMonthYear } from "@/lib/date-format";

type CalculatorDetailShellProps = {
  calculator: Calculator;
  children: React.ReactNode;
  explanation?: React.ReactNode;
  faq?: React.ReactNode;
  relatedContent?: React.ReactNode;
};

export function CalculatorDetailShell({
  calculator,
  children,
  explanation,
  faq,
  relatedContent,
}: CalculatorDetailShellProps) {
  const categorySlug = getCategorySlugByName(calculator.category);
  const categoryHref = categorySlug
    ? `/categories/${categorySlug}`
    : "/categories";

  return (
    <PageLayout>
      <Container className="py-8 sm:py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link href="/calculators" className="hover:text-primary">
                Calculators
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li>
              <Link href={categoryHref} className="hover:text-primary">
                {calculator.category}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-text-primary" aria-current="page">
              {calculator.title}
            </li>
          </ol>
        </nav>

        <header className="mt-4 flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
            {calculator.title}
          </h1>
          {calculator.badge && (
            <span className="rounded-full bg-cta/10 px-3 py-1 text-xs font-medium text-cta">
              {calculator.badge}
            </span>
          )}
          <span className="rounded-full bg-primary-light px-3 py-1 text-xs font-medium text-primary-dark">
            Updated {formatMonthYear(calculator.updatedAt)}
          </span>
        </header>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-secondary">
          {calculator.longDescription}
        </p>

        <div className="mt-8">{children}</div>

        {explanation}

        {!explanation && (
          <article className="mt-10 rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm sm:p-8">
            <h2 className="text-xl font-bold text-text-primary">
              Understanding the results
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-secondary">
              {calculator.longDescription}
            </p>
            {calculator.outputs.length > 0 && (
              <ul className="mt-4 space-y-2 text-sm text-text-secondary">
                {calculator.outputs.map((output) => (
                  <li key={output.id} className="flex gap-2">
                    <span className="text-primary" aria-hidden="true">
                      •
                    </span>
                    {output.label}
                    {output.unit ? ` (${output.unit})` : ""}
                  </li>
                ))}
              </ul>
            )}
          </article>
        )}

        <p className="mt-8 text-xs leading-relaxed text-text-muted">
          Results are planning estimates based on typical assumptions. Verify
          quantities with product labels and your project layout before purchase.{" "}
          <Link href="/methodology" className="text-primary hover:underline">
            How we calculate
          </Link>
        </p>

        {faq}
        {relatedContent}
      </Container>
    </PageLayout>
  );
}
