import Link from "next/link";
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
import { categories } from "@/data/categories";
import { homepageFaqs } from "@/data/homepage-faqs";
import { popularCalculators } from "@/data/calculators";
import { createPageMetadata } from "@/lib/metadata";
import { getPublishedGuides } from "@/lib/guides/loader";
import { getCalculatorCount } from "@/lib/sitemap";
import { buildFaqSchema } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Free Home Improvement Calculators | Paint, Concrete, Tile & More",
  description:
    "Instant material calculators for homeowners, DIYers, and contractors. Estimate how much paint, concrete, gravel, tile, flooring, and other materials you need — free and no signup required.",
  path: "/",
  absoluteTitle: true,
});

export default async function HomePage() {
  const guides = await getPublishedGuides();
  const featuredGuides = guides.slice(0, 3);
  const calculatorCount = getCalculatorCount();

  return (
    <PageLayout>
      <JsonLd data={buildFaqSchema(homepageFaqs)} />

      {/* Hero */}
      <section className="bg-hero">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full bg-primary-light px-4 py-1.5 text-xs font-medium text-primary-dark">
              Free · No signup required
            </span>
            <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl lg:text-5xl">
              Plan your project with material estimates.
            </h1>
            <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
              Instant calculators for paint, concrete, tile, flooring, gravel
              and more. Built for homeowners, DIYers, and contractors.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <SearchBar
                placeholder="Search calculators... e.g. paint, gravel, tile"
                className="flex-1 sm:max-w-md"
                id="hero-search"
                action="/calculators"
              />
              <Button href="/calculators" variant="cta" size="lg" className="shrink-0">
                Browse calculators
              </Button>
            </div>
          </div>

          <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
            <StatCard value={`${calculatorCount}`} label="Free calculators" />
            <StatCard value="100%" label="Free to use" />
            <StatCard value="Instant" label="Planning estimates" />
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
            {popularCalculators.map((calc) => (
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
            {categories.map((category) => (
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
            faqs={homepageFaqs}
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
                {calculatorCount} free calculators. No signup. Planning estimates you can verify.
              </p>
              <Link
                href="/methodology"
                className="mt-2 inline-block text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                See how our calculations and assumptions work →
              </Link>
            </div>
            <Button href="/calculators" variant="primary" size="lg" className="shrink-0">
              Explore calculators
            </Button>
          </div>
        </Container>
      </section>
    </PageLayout>
  );
}
