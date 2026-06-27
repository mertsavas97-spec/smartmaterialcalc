import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import type { Metadata } from "next";
import { GuideViewTracker } from "@/components/analytics/GuideViewTracker";
import { ArticleSidebar } from "@/components/articles/ArticleSidebar";
import { GuideArticleBody } from "@/components/articles/GuideArticleBody";
import { RelatedCalculators } from "@/components/content/RelatedCalculators";
import { RelatedGuides } from "@/components/content/RelatedGuides";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { JsonLd } from "@/components/seo/JsonLd";
import { getCalculatorBySlug } from "@/data/calculators";
import { formatGuideDate } from "@/data/guides";
import {
  getAllGuideSlugsForBuild,
  getPublishedGuideArticle,
  getPublishedGuideBySlug,
} from "@/lib/guides/loader";
import { buildArticleNavigation } from "@/lib/article-toc";
import { createPageMetadata } from "@/lib/metadata";
import { getArticleReadingTime } from "@/lib/reading-time";
import {
  getRelatedCalculatorsForGuide,
  getRelatedGuidesForGuide,
} from "@/lib/related-content";
import { SITE } from "@/lib/site";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllGuideSlugsForBuild();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = await getPublishedGuideBySlug(slug);

  if (!guide) {
    return { title: "Guide Not Found" };
  }

  return createPageMetadata({
    title: guide.title,
    description: guide.excerpt,
    path: `/guides/${slug}`,
    openGraphType: "article",
    publishedTime: guide.datePublished,
    modifiedTime: guide.dateModified,
    image: {
      url: guide.heroImage,
      alt: guide.title,
      width: 1200,
      height: 675,
    },
  });
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = await getPublishedGuideBySlug(slug);
  const article = await getPublishedGuideArticle(slug);

  if (!guide || !article) {
    notFound();
  }

  const readingTime = getArticleReadingTime(article);
  const relatedGuides = await getRelatedGuidesForGuide(slug);
  const relatedCalculators = await getRelatedCalculatorsForGuide(slug);
  const { toc } = buildArticleNavigation(article);
  const calculator = getCalculatorBySlug(article.cta.calculatorSlug);
  const calculatorTitle = calculator?.title ?? "Calculator";
  const calculatorDescription =
    article.cta.description ||
    calculator?.shortDescription ||
    "Use our free calculator to estimate materials for your project.";
  const showUpdatedDate = guide.dateModified !== guide.datePublished;

  const structuredData = [
    buildBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Guides", path: "/guides" },
      { name: guide.title, path: `/guides/${slug}` },
    ]),
    buildArticleSchema({
      headline: guide.title,
      description: guide.excerpt,
      path: `/guides/${slug}`,
      datePublished: guide.datePublished,
      dateModified: guide.dateModified,
      image: guide.heroImage,
      wordCount: readingTime.wordCount,
    }),
    ...(article.faqs.length > 0 ? [buildFaqSchema(article.faqs)] : []),
  ];

  return (
    <PageLayout>
      <GuideViewTracker guideSlug={slug} />
      <JsonLd data={structuredData} />
      <Container className="max-w-[1180px] py-8 sm:py-10">
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
              <Link href="/guides" className="hover:text-primary">
                Guides
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-4 w-4" />
            </li>
            <li className="font-medium text-text-primary" aria-current="page">
              {guide.title}
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

            <RelatedGuides guides={relatedGuides} />
            <RelatedCalculators calculators={relatedCalculators} />
          </div>

          <ArticleSidebar
            toc={toc}
            guideSlug={slug}
            calculatorSlug={article.cta.calculatorSlug}
            calculatorTitle={calculatorTitle}
            calculatorDescription={calculatorDescription}
            relatedGuides={relatedGuides}
          />
        </div>
      </Container>
    </PageLayout>
  );
}
