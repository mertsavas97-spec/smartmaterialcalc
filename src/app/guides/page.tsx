import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { GuideCard } from "@/components/cards/GuideCard";
import { guides } from "@/data/guides";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Guides & Resources",
  description:
    "Expert home improvement guides — paint, concrete, tile, flooring, and outdoor project planning tips.",
  path: "/guides",
});

export default function GuidesPage() {
  return (
    <PageLayout>
      <Container className="py-10 sm:py-14">
        <header className="max-w-2xl">
          <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
            Guides &amp; Resources
          </h1>
          <p className="mt-3 text-base leading-relaxed text-text-secondary">
            Practical advice to help you plan, measure, and execute your home
            improvement projects with confidence.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </Container>
    </PageLayout>
  );
}
