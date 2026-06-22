import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { categories } from "@/data/categories";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Categories",
  description:
    "Browse SmartMaterialCalc calculators by category — paint, concrete, flooring, outdoor, lumber, and roofing.",
  path: "/categories",
});

export default function CategoriesPage() {
  return (
    <PageLayout>
      <Container className="py-10 sm:py-14">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Calculator Categories
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Find the right tool for your project. Every calculator is free, with
            no signup required.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div key={category.slug} id={category.slug}>
              <CategoryCard category={category} />
            </div>
          ))}
        </div>
      </Container>
    </PageLayout>
  );
}
