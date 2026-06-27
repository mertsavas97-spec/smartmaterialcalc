import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";
import {
  CategoryContentBlock,
  CategoryInternalLinks,
} from "@/components/categories/CategoryHubSections";
import { CalculatorCard } from "@/components/cards/CalculatorCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { FAQSection } from "@/components/content/FAQSection";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCalculatorBySlug } from "@/data/calculators";
import {
  categories,
  getAllCategorySlugs,
  getCategoryBySlug,
} from "@/data/categories";
import { getPublishedGuideBySlug } from "@/lib/guides/loader";
import { createPageMetadata } from "@/lib/metadata";
import { formatMonthYear } from "@/lib/date-format";
import {
  buildBreadcrumbSchema,
  buildCollectionPageSchema,
  buildFaqSchema,
} from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCategorySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return { title: "Category Not Found" };
  }

  return createPageMetadata({
    title: category.metaTitle,
    description: category.metaDescription,
    path: `/categories/${slug}`,
  });
}

export default async function CategoryHubPage({ params }: PageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryCalculators = category.calculatorSlugs
    .map((calcSlug) => getCalculatorBySlug(calcSlug))
    .filter((calc): calc is NonNullable<typeof calc> => Boolean(calc));

  const categoryGuides = (
    await Promise.all(
      category.guideSlugs.map((guideSlug) => getPublishedGuideBySlug(guideSlug))
    )
  ).filter((guide): guide is NonNullable<typeof guide> => Boolean(guide));

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Categories", path: "/categories" },
      { name: category.title, path: `/categories/${slug}` },
    ]),
    buildCollectionPageSchema({
      name: `${category.title} Calculators`,
      description: category.metaDescription,
      path: `/categories/${slug}`,
      numberOfItems: categoryCalculators.length + categoryGuides.length,
    }),
    ...(category.faqs.length > 0 ? [buildFaqSchema(category.faqs)] : []),
  ];

  const internalLinks = [
    { href: "/calculators", label: "All calculators" },
    { href: "/guides", label: "All guides" },
    { href: "/methodology", label: "How we calculate" },
    ...categories
      .filter((item) => item.slug !== slug)
      .slice(0, 3)
      .map((item) => ({
        href: `/categories/${item.slug}`,
        label: `${item.title} calculators`,
      })),
  ];

  return (
    <PageLayout>
      <JsonLd data={structuredData} />
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
              <Link href="/categories" className="hover:text-primary">
                Categories
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-text-primary" aria-current="page">
              {category.title}
            </li>
          </ol>
        </nav>

        <header className="mt-4 max-w-3xl">
          <span className="text-3xl" aria-hidden="true">
            {category.icon}
          </span>
          <h1 className="mt-3 text-3xl font-bold text-text-primary sm:text-4xl">
            {category.title} Calculators
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            {category.longDescription}
          </p>
          <p className="mt-2 text-xs text-text-muted">
            Updated {formatMonthYear(category.updatedAt)} · {category.calculatorCount} calculators
            {categoryGuides.length > 0 &&
              ` · ${categoryGuides.length} guides`}
          </p>
        </header>

        <div className="prose-calchive mt-10 max-w-3xl">
          <CategoryInternalLinks links={internalLinks} />
          <CategoryContentBlock section={category.whatThisCategoryHelps} />
          <CategoryContentBlock section={category.whichCalculator} />
          <CategoryContentBlock section={category.commonMistakes} />
          <CategoryContentBlock section={category.howCalcHiveEstimates} />
        </div>

        <section className="mt-10" aria-labelledby="category-calculators-heading">
          <h2
            id="category-calculators-heading"
            className="text-2xl font-bold text-text-primary"
          >
            {category.title} calculators
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Free tools for {category.title.toLowerCase()} projects — click any
            calculator to get started.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryCalculators.map((calculator) => (
              <CalculatorCard key={calculator.slug} calculator={calculator} />
            ))}
          </div>
        </section>

        {categoryGuides.length > 0 && (
          <section className="mt-14" aria-labelledby="category-guides-heading">
            <h2
              id="category-guides-heading"
              className="text-2xl font-bold text-text-primary"
            >
              Related guides
            </h2>
            <p className="mt-1 text-sm text-text-secondary">
              Planning tips and formulas for {category.title.toLowerCase()}{" "}
              projects.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {categoryGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </section>
        )}

        <FAQSection faqs={category.faqs} />

        <div className="mt-10 rounded-[var(--radius-lg)] border border-card-border bg-primary-light p-8 text-center">
          <h2 className="text-lg font-semibold text-primary-dark">
            Browse all calculators
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            Explore every free SmartMaterialCalc tool across paint, concrete, flooring,
            outdoor, lumber, and roofing.
          </p>
          <Button href="/calculators" variant="primary" className="mt-5">
            View all calculators
          </Button>
        </div>
      </Container>
    </PageLayout>
  );
}
