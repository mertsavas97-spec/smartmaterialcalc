import Link from "next/link";
import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/ui/SearchBar";
import { StatCard } from "@/components/ui/StatCard";
import { CalculatorCard } from "@/components/cards/CalculatorCard";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { GuideCard } from "@/components/cards/GuideCard";
import { FAQSection } from "@/components/content/FAQSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { getHomepageSettings } from "@/lib/cms/loader";
import {
  resolveCategoryOrder,
  resolveFeaturedCalculators,
  resolveFeaturedGuides,
  resolveHomepageStatistics,
  resolveTrustHeadline,
} from "@/lib/cms/resolve";
import { createPageMetadata } from "@/lib/metadata";
import { getCalculatorCount } from "@/lib/sitemap";
import { buildFaqSchema } from "@/lib/structured-data";

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getHomepageSettings();

  return createPageMetadata({
    title: settings.seo.metaTitle,
    description: settings.seo.metaDescription,
    openGraphTitle: settings.seo.ogTitle,
    openGraphDescription: settings.seo.ogDescription,
    path: "/",
    absoluteTitle: true,
  });
}

export default async function HomePage() {
  const settings = await getHomepageSettings();
  const calculatorCount = getCalculatorCount();
  const featuredCalculators = resolveFeaturedCalculators(settings.featuredCalculatorSlugs);
  const featuredGuides = await resolveFeaturedGuides(settings.featuredGuideSlugs);
  const orderedCategories = resolveCategoryOrder(settings.categoryOrder);
  const statistics = resolveHomepageStatistics(settings, calculatorCount);
  const trustHeadline = resolveTrustHeadline(settings, calculatorCount);

  return (
    <PageLayout>
      <JsonLd data={buildFaqSchema(settings.faqs)} />

      {/* Hero */}
      <section className="bg-hero">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium text-primary-dark">
              {settings.hero.badge}
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              {settings.hero.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              {settings.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <SearchBar
                placeholder="Search calculators... e.g. paint, gravel, tile"
                className="flex-1 sm:max-w-md"
                id="hero-search"
                action="/calculators"
              />
              <Button
                href={settings.hero.ctaUrl}
                variant="cta"
                size="lg"
                className="shrink-0"
              >
                {settings.hero.ctaLabel}
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            {statistics.map((stat) => (
              <StatCard key={`${stat.value}-${stat.label}`} value={stat.value} label={stat.label} />
            ))}
          </div>
        </Container>
      </section>

      {/* Popular Calculators */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Popular Calculators
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                Start with the tools homeowners and pros use most.
              </p>
            </div>
            <Button href="/calculators" variant="ghost" size="sm" className="self-start sm:self-auto">
              View all →
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredCalculators.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} />
            ))}
          </div>
        </Container>
      </section>

      {/* Browse by Category */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Browse by Category
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                Find calculators and guides grouped by project type.
              </p>
            </div>
            <Button href="/categories" variant="ghost" size="sm" className="self-start sm:self-auto">
              All categories →
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {orderedCategories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </section>

      {/* Helpful Guides */}
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-text-primary">
                Helpful Guides &amp; Resources
              </h2>
              <p className="mt-1 text-sm text-text-secondary">
                Expert tips to help you plan and execute your project.
              </p>
            </div>
            <Button href="/guides" variant="ghost" size="sm" className="self-start sm:self-auto">
              All guides →
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </Container>
      </section>

      {/* Homepage FAQ */}
      <section className="py-12 sm:py-16">
        <Container>
          <FAQSection
            faqs={settings.faqs}
            title="Common questions"
            className="mt-0"
          />
        </Container>
      </section>

      {/* Trust CTA */}
      <section className="border-y border-card-border bg-primary-light py-10">
        <Container>
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="text-lg font-semibold text-primary-dark sm:text-xl">
                {trustHeadline}
              </p>
              {settings.trust.linkLabel && settings.trust.linkUrl ? (
                <Link
                  href={settings.trust.linkUrl}
                  className="mt-2 inline-block text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {settings.trust.linkLabel}
                </Link>
              ) : null}
            </div>
            <Button
              href={settings.trust.ctaUrl}
              variant="primary"
              size="lg"
              className="shrink-0"
            >
              {settings.trust.ctaLabel}
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
