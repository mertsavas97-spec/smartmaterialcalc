import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { SearchBar } from "@/components/ui/SearchBar";
import { CalculatorCard } from "@/components/cards/CalculatorCard";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { CategoryChipLink } from "@/components/categories/CategoryChipLink";
import { categories, filterChips, getCategorySlugByName } from "@/data/categories";
import { calculators, mostUsedCalculators } from "@/data/calculators";
import { createPageMetadata } from "@/lib/metadata";

type PageProps = {
  searchParams: Promise<{ category?: string; q?: string }>;
};

export const metadata = createPageMetadata({
  title: "All Calculators",
  description:
    "Browse all free home improvement calculators — paint, concrete, flooring, outdoor, lumber, roofing and more.",
  path: "/calculators",
});

export default async function CalculatorsPage({ searchParams }: PageProps) {
  const { category, q } = await searchParams;
  const activeCategory =
    category && category !== "All" ? decodeURIComponent(category) : null;
  const searchQuery = q?.trim() ?? "";

  let filteredCalculators = activeCategory
    ? calculators.filter((calc) => calc.category === activeCategory)
    : calculators;

  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filteredCalculators = filteredCalculators.filter(
      (calc) =>
        calc.title.toLowerCase().includes(query) ||
        calc.shortDescription.toLowerCase().includes(query) ||
        calc.category.toLowerCase().includes(query)
    );
  }

  return (
    <PageLayout>
      <Container className="py-10 sm:py-14">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
            All Calculators
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Free planning tools for every home improvement project. No signup
            required — enter your measurements for material estimates you can
            verify before purchase.
          </p>
        </header>

        <div className="mt-8 max-w-xl">
          <SearchBar
            id="calculators-search"
            defaultValue={searchQuery}
            placeholder="Search calculators... e.g. paint, gravel, tile"
          />
        </div>

        <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {filterChips.map((chip) => {
            const isActive =
              chip === "All" ? !activeCategory : activeCategory === chip;
            const categorySlug =
              chip === "All" ? undefined : getCategorySlugByName(chip);
            const href =
              chip === "All"
                ? "/calculators"
                : `/categories/${categorySlug ?? chip.toLowerCase()}`;

            return (
              <CategoryChipLink
                key={chip}
                href={href}
                categorySlug={categorySlug}
                isActive={isActive}
              >
                {chip}
              </CategoryChipLink>
            );
          })}
        </div>

        <section className="mt-10" aria-labelledby="all-calculators-heading">
          <h2 id="all-calculators-heading" className="text-xl font-bold text-text-primary">
            {searchQuery
              ? `Search results for "${searchQuery}"`
              : activeCategory
                ? `${activeCategory} Calculators`
                : "All Calculators"}
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            {filteredCalculators.length} free tools — click any calculator to get started.
          </p>
          {filteredCalculators.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCalculators.map((calc) => (
                <CalculatorCard key={calc.slug} calculator={calc} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-[var(--radius-lg)] border border-card-border bg-white p-8 text-center">
              <p className="text-sm text-text-secondary">
                No calculators match your search. Try a different keyword or browse
                by category.
              </p>
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button href="/calculators" variant="outline">
                  Clear search
                </Button>
                <Button href="/categories" variant="ghost">
                  Browse categories
                </Button>
              </div>
            </div>
          )}
        </section>

        <section className="mt-14" aria-labelledby="categories-heading">
          <h2 id="categories-heading" className="text-xl font-bold text-text-primary">
            Browse by Category
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((categoryItem) => (
              <CategoryCard key={categoryItem.slug} category={categoryItem} />
            ))}
          </div>
        </section>

        <section className="mt-14" aria-labelledby="most-used-heading">
          <h2 id="most-used-heading" className="text-xl font-bold text-text-primary">
            Most Used Calculators
          </h2>
          <p className="mt-1 text-sm text-text-secondary">
            Popular starting points for common home improvement projects.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mostUsedCalculators.map((calc) => (
              <CalculatorCard key={calc.slug} calculator={calc} />
            ))}
          </div>
        </section>

        <div className="mt-14 rounded-[var(--radius-lg)] border border-card-border bg-white p-8 text-center shadow-sm">
          <h2 className="text-lg font-semibold text-text-primary">
            Don&apos;t see the calculator you need?
          </h2>
          <p className="mt-2 text-sm text-text-secondary">
            We&apos;re adding new tools regularly. Browse our guides or suggest
            a calculator.
          </p>
          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button href="/guides" variant="outline">
              Browse guides
            </Button>
            <Button href="/contact" variant="ghost">
              Request a calculator
            </Button>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
