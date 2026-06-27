"use client";

import { useMemo } from "react";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import { calculateGuideSeoScore } from "@/lib/guides/editor-validation";
import { getMarkdownReadingTime } from "@/lib/guides/markdown";
import { absoluteUrl, SITE } from "@/lib/site";
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from "@/lib/structured-data";
import type { GuideFaq } from "@/types/guide-article";

type GuideEditorSidebarProps = {
  title: string;
  seoTitle: string;
  excerpt: string;
  slug: string;
  heroImage: string;
  bodyMarkdown: string;
  faqs: GuideFaq[];
  datePublished: string;
  dateModified: string;
  previewPath: string;
};

export function GuideEditorSidebar({
  title,
  seoTitle,
  excerpt,
  slug,
  heroImage,
  bodyMarkdown,
  faqs,
  datePublished,
  dateModified,
  previewPath,
}: GuideEditorSidebarProps) {
  const reading = useMemo(() => getMarkdownReadingTime(bodyMarkdown), [bodyMarkdown]);
  const seo = useMemo(
    () =>
      calculateGuideSeoScore({
        title,
        seoTitle: seoTitle || null,
        excerpt,
        slug,
        heroImage,
        faqs,
        wordCount: reading.wordCount,
      }),
    [title, seoTitle, excerpt, slug, heroImage, faqs, reading.wordCount]
  );

  const metaTitle = seoTitle.trim() || title.trim();
  const publicUrl = absoluteUrl(`/guides/${slug}`);
  const previewUrl = absoluteUrl(previewPath);

  const schemaPreview = useMemo(() => {
    return [
      buildBreadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Guides", path: "/guides" },
        { name: title, path: `/guides/${slug}` },
      ]),
      buildArticleSchema({
        headline: title,
        description: excerpt,
        path: `/guides/${slug}`,
        datePublished,
        dateModified,
        image: heroImage,
        wordCount: reading.wordCount,
      }),
      ...(faqs.length > 0 ? [buildFaqSchema(faqs)] : []),
    ];
  }, [
    title,
    excerpt,
    slug,
    datePublished,
    dateModified,
    heroImage,
    reading.wordCount,
    faqs,
  ]);

  return (
    <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
      <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4">
        <h2 className="text-sm font-semibold">Content stats</h2>
        <dl className="mt-3 space-y-2 text-sm">
          <div className="flex justify-between gap-4">
            <dt className="text-text-secondary">Word count</dt>
            <dd className="font-medium">{reading.wordCount}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-text-secondary">Reading time</dt>
            <dd className="font-medium">{reading.label}</dd>
          </div>
          <div className="flex justify-between gap-4">
            <dt className="text-text-secondary">SEO score</dt>
            <dd className="font-medium">{seo.score}/100</dd>
          </div>
        </dl>
        {seo.issues.length > 0 ? (
          <ul className="mt-3 space-y-1 text-xs text-red-700">
            {seo.issues.map((issue) => (
              <li key={issue}>{issue}</li>
            ))}
          </ul>
        ) : null}
        {seo.warnings.length > 0 ? (
          <ul className="mt-3 space-y-1 text-xs text-[#8a4b00]">
            {seo.warnings.map((warning) => (
              <li key={warning}>{warning}</li>
            ))}
          </ul>
        ) : null}
      </section>

      <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4">
        <h2 className="text-sm font-semibold">URLs</h2>
        <div className="mt-3 space-y-3 text-xs">
          <div>
            <p className="font-medium text-text-secondary">Public URL</p>
            <a href={publicUrl} className="break-all text-primary hover:underline">
              {publicUrl}
            </a>
          </div>
          <div>
            <p className="font-medium text-text-secondary">Preview URL</p>
            <a href={previewUrl} className="break-all text-primary hover:underline">
              {previewUrl}
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4">
        <h2 className="text-sm font-semibold">Google search preview</h2>
        <div className="mt-3 rounded-[var(--radius-sm)] border border-card-border p-3">
          <p className="truncate text-sm text-[#1a0dab]">{metaTitle}</p>
          <p className="mt-1 truncate text-xs text-[#006621]">{publicUrl}</p>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#4d5156]">
            {excerpt}
          </p>
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4">
        <h2 className="text-sm font-semibold">Open Graph preview</h2>
        <div className="mt-3 overflow-hidden rounded-[var(--radius-sm)] border border-card-border">
          {heroImage ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={heroImage} alt="" className="aspect-[1.91/1] w-full object-cover" />
          ) : (
            <div className="flex aspect-[1.91/1] items-center justify-center bg-[#f4f4f4] text-xs text-text-muted">
              No hero image
            </div>
          )}
          <div className="space-y-1 p-3">
            <p className="text-[10px] uppercase tracking-wide text-text-muted">
              {SITE.domain}
            </p>
            <p className="line-clamp-2 text-sm font-semibold text-text-primary">{metaTitle}</p>
            <p className="line-clamp-2 text-xs text-text-secondary">{excerpt}</p>
          </div>
        </div>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4">
        <h2 className="text-sm font-semibold">Schema preview</h2>
        <pre className="mt-3 max-h-64 overflow-auto rounded-[var(--radius-sm)] bg-[#111] p-3 text-[11px] leading-relaxed text-[#d8ffd8]">
          {JSON.stringify(schemaPreview, null, 2)}
        </pre>
      </section>

      <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4">
        <h2 className="text-sm font-semibold">Live preview</h2>
        <div className="mt-3 max-h-[420px] overflow-auto rounded-[var(--radius-sm)] border border-card-border p-4">
          <MarkdownRenderer markdown={bodyMarkdown || "_Start writing to preview content._"} />
        </div>
      </section>
    </aside>
  );
}
