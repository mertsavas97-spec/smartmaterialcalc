import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import { ArticleSidebar } from "@/components/articles/ArticleSidebar";
import { GuideArticleBody } from "@/components/articles/GuideArticleBody";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { getCalculatorBySlug } from "@/data/calculators";
import { formatGuideDate } from "@/data/guides";
import { getGuideRecordBySlugForAdmin } from "@/lib/guides/loader";
import { buildArticleNavigation } from "@/lib/article-toc";
import { getArticleReadingTime } from "@/lib/reading-time";
import { SITE } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const metadata: Metadata = {
  title: "Guide Preview",
  robots: { index: false, follow: false },
};

export default async function AdminGuidePreviewPage({ params }: PageProps) {
  const { slug } = await params;
  const record = await getGuideRecordBySlugForAdmin(slug);

  if (!record) {
    notFound();
  }

  const guide = {
    slug: record.slug,
    title: record.title,
    category: record.category,
    excerpt: record.excerpt,
    datePublished: record.date_published,
    dateModified: record.date_modified,
    thumbnail: record.content.thumbnailImage ?? record.hero_image,
    heroImage: record.hero_image,
  };

  const article = {
    slug: record.slug,
    calculatorSlug: record.calculator_slug ?? undefined,
    relatedGuideSlugs: record.related_guide_slugs,
    relatedCalculatorSlugs: record.related_calculator_slugs,
    ...record.content,
  };

  const readingTime = getArticleReadingTime(article);
  const { toc } = buildArticleNavigation(article);
  const calculator = getCalculatorBySlug(article.cta.calculatorSlug);
  const showUpdatedDate = guide.dateModified !== guide.datePublished;

  return (
    <PageLayout>
      <div className="border-b border-[#8a4b00] bg-[#fff3e0] py-2 text-center text-sm text-[#8a4b00]">
        Admin preview — {record.status === "draft" ? "Draft" : "Published"} guide
      </div>
      <Container className="max-w-[1180px] py-8 sm:py-10">
        <nav aria-label="Breadcrumb" className="text-sm text-text-muted">
          <ol className="flex flex-wrap items-center gap-1">
            <li>
              <Link href="/admin/guides" className="hover:text-primary">
                Admin guides
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-text-primary" aria-current="page">
              Preview: {guide.title}
            </li>
          </ol>
        </nav>

        <div className="mt-6 grid grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,760px)_300px] lg:gap-16">
          <div className="min-w-0">
            <div className="overflow-hidden rounded-[var(--radius-lg)] border border-card-border">
              <Image
                src={guide.heroImage}
                alt={guide.title}
                width={1200}
                height={675}
                className="aspect-[16/9] w-full object-cover"
                priority
              />
            </div>

            <header className="mt-6">
              <span className="text-xs font-medium uppercase tracking-wide text-primary">
                {guide.category}
              </span>
              <h1 className="mt-2 text-3xl font-bold text-text-primary sm:text-4xl">
                {guide.title}
              </h1>
              <p className="mt-3 text-base leading-relaxed text-text-secondary">
                {guide.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-text-muted">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  {readingTime.label}
                </span>
                <time dateTime={guide.datePublished}>
                  Published {formatGuideDate(guide.datePublished)}
                </time>
                {showUpdatedDate && (
                  <time dateTime={guide.dateModified}>
                    Updated {formatGuideDate(guide.dateModified)}
                  </time>
                )}
                <span>By {SITE.editorialTeam}</span>
              </div>
            </header>

            <div className="mt-10">
              <GuideArticleBody article={article} />
            </div>
          </div>

          <ArticleSidebar
            toc={toc}
            guideSlug={slug}
            calculatorSlug={article.cta.calculatorSlug}
            calculatorTitle={calculator?.title ?? "Calculator"}
            calculatorDescription={
              article.cta.description ||
              calculator?.shortDescription ||
              "Use our free calculator to estimate materials for your project."
            }
            relatedGuides={[]}
          />
        </div>
      </Container>
    </PageLayout>
  );
}
