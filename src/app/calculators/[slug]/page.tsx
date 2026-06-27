import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalculatorDetailShell } from "@/components/calculators/CalculatorDetailShell";
import { CalculatorExplanationCard } from "@/components/calculators/CalculatorExplanationCard";
import { renderCalculatorForm } from "@/components/calculators/renderCalculatorForm";
import { FAQSection } from "@/components/content/FAQSection";
import { RelatedCalculators } from "@/components/content/RelatedCalculators";
import { RelatedGuides } from "@/components/content/RelatedGuides";
import { JsonLd } from "@/components/seo/JsonLd";
import { MaterialRecommendationCard } from "@/components/calculators/MaterialRecommendationCard";
import { getCalculatorFaqs } from "@/data/calculator-faqs";
import { getCalculatorMaterials } from "@/data/calculator-materials";
import { calculatorExplanations } from "@/data/calculator-explanations";
import {
  getAllCalculatorSlugs,
  getCalculatorBySlug,
} from "@/data/calculators";
import { getCategorySlugByName } from "@/data/categories";
import { createPageMetadata } from "@/lib/metadata";
import {
  getRelatedCalculators,
  getRelatedGuides,
} from "@/lib/related-content";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildWebApplicationSchema,
} from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllCalculatorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    return { title: "Calculator Not Found" };
  }

  return createPageMetadata({
    title: calculator.seoTitle,
    description: calculator.shortDescription,
    path: `/calculators/${slug}`,
  });
}

export default async function CalculatorPage({ params }: PageProps) {
  const { slug } = await params;
  const calculator = getCalculatorBySlug(slug);

  if (!calculator) {
    notFound();
  }

  const explanation = calculatorExplanations[slug];
  const faqs = getCalculatorFaqs(slug);
  const materials = getCalculatorMaterials(slug);
  const relatedGuides = await getRelatedGuides(slug);
  const relatedCalculators = await getRelatedCalculators(slug);

  const categorySlug = getCategorySlugByName(calculator.category);
  const categoryPath = categorySlug
    ? `/categories/${categorySlug}`
    : "/categories";

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Calculators", path: "/calculators" },
      { name: calculator.category, path: categoryPath },
      { name: calculator.title, path: `/calculators/${slug}` },
    ]),
    buildWebApplicationSchema({
      name: calculator.title,
      description: calculator.shortDescription,
      path: `/calculators/${slug}`,
      dateModified: calculator.updatedAt,
    }),
    ...(faqs.length > 0 ? [buildFaqSchema(faqs)] : []),
  ];

  return (
    <>
      <JsonLd data={structuredData} />
      <CalculatorDetailShell
        calculator={calculator}
        explanation={
          explanation ? (
            <CalculatorExplanationCard
              description={explanation.description}
              bullets={explanation.bullets}
              imageLabel={explanation.imageLabel}
              diagramType={explanation.diagramType}
            />
          ) : undefined
        }
        faq={faqs.length > 0 ? <FAQSection faqs={faqs} /> : undefined}
        relatedContent={
          <>
            <RelatedGuides guides={relatedGuides} />
            <RelatedCalculators calculators={relatedCalculators} />
          </>
        }
      >
        <>
          {renderCalculatorForm(slug, calculator)}
          {materials && (
            <div className="mt-6">
              <MaterialRecommendationCard materials={materials} />
            </div>
          )}
        </>
      </CalculatorDetailShell>
    </>
  );
}
