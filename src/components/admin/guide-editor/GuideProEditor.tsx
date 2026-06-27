"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { FaqEditor } from "@/components/admin/FaqEditor";
import { GuideEditorSidebar } from "@/components/admin/guide-editor/GuideEditorSidebar";
import { ImageUploader } from "@/components/admin/guide-editor/ImageUploader";
import { MarkdownToolbar } from "@/components/admin/guide-editor/MarkdownToolbar";
import { RelatedPicker } from "@/components/admin/guide-editor/RelatedPicker";
import {
  autosaveGuideAction,
  deleteGuideFromEditorAction,
  publishGuideFromEditorAction,
  saveGuideFromEditorAction,
  type GuideEditorPayload,
} from "@/lib/admin/guide-editor-actions";
import { uploadGuideImageAction } from "@/lib/admin/guide-actions";
import { getEditorMarkdown } from "@/lib/guides/markdown";
import type { GuideRecord, GuideStatus } from "@/lib/guides/types";
import type { GuideFaq } from "@/types/guide-article";

const CATEGORIES = ["Paint", "Concrete", "Flooring", "Outdoor", "Lumber", "Roofing"];

type GuideProEditorProps = {
  guide?: GuideRecord;
  guideOptions: Array<{ slug: string; title: string }>;
  calculatorOptions: Array<{ slug: string; title: string }>;
  error?: string;
  saved?: string;
};

type SaveState = "idle" | "dirty" | "saving" | "saved" | "error";

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function createDefaultContent() {
  return {
    intro: "",
    whyItMatters: { heading: "Why this matters", paragraphs: [""] },
    sections: [{ heading: "Section heading", paragraphs: [""] }],
    examples: [],
    commonMistakes: [],
    recommendedAssumptions: [],
    faqs: [] as GuideFaq[],
    cta: {
      title: "Use the calculator",
      description: "",
      calculatorSlug: "",
      buttonText: "Open Calculator",
    },
    internalLinks: [],
  };
}

export function GuideProEditor({
  guide,
  guideOptions,
  calculatorOptions,
  error,
  saved,
}: GuideProEditorProps) {
  const isEdit = Boolean(guide);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [title, setTitle] = useState(guide?.title ?? "");
  const [slug, setSlug] = useState(guide?.slug ?? "");
  const [slugTouched, setSlugTouched] = useState(isEdit);
  const [seoTitle, setSeoTitle] = useState(guide?.seo_title ?? "");
  const [status, setStatus] = useState<GuideStatus>(guide?.status ?? "draft");
  const [excerpt, setExcerpt] = useState(guide?.excerpt ?? "");
  const [category, setCategory] = useState(guide?.category ?? "Paint");
  const [heroImage, setHeroImage] = useState(
    guide?.hero_image ?? "/images/guides/example.webp"
  );
  const [thumbnailImage, setThumbnailImage] = useState(
    guide?.content.thumbnailImage ?? guide?.hero_image ?? ""
  );
  const [datePublished, setDatePublished] = useState(
    guide?.date_published ?? new Date().toISOString().slice(0, 10)
  );
  const [dateModified, setDateModified] = useState(
    guide?.date_modified ?? new Date().toISOString().slice(0, 10)
  );
  const [calculatorSlug, setCalculatorSlug] = useState(guide?.calculator_slug ?? "");
  const [relatedGuideSlugs, setRelatedGuideSlugs] = useState<string[]>(
    guide?.related_guide_slugs ?? []
  );
  const [relatedCalculatorSlugs, setRelatedCalculatorSlugs] = useState<string[]>(
    guide?.related_calculator_slugs ?? []
  );
  const [bodyMarkdown, setBodyMarkdown] = useState(
    guide ? getEditorMarkdown(guide.content) : getEditorMarkdown(createDefaultContent())
  );
  const [faqs, setFaqs] = useState<GuideFaq[]>(guide?.content.faqs ?? []);
  const [ctaTitle, setCtaTitle] = useState(guide?.content.cta.title ?? "Use the calculator");
  const [ctaDescription, setCtaDescription] = useState(guide?.content.cta.description ?? "");
  const [ctaCalculatorSlug, setCtaCalculatorSlug] = useState(
    guide?.content.cta.calculatorSlug ?? ""
  );
  const [ctaButtonText, setCtaButtonText] = useState(
    guide?.content.cta.buttonText ?? "Open Calculator"
  );
  const [saveState, setSaveState] = useState<SaveState>(saved === "1" ? "saved" : "idle");
  const [saveMessage, setSaveMessage] = useState<string | null>(error ?? null);

  const payload = useMemo<GuideEditorPayload>(
    () => ({
      originalSlug: guide?.slug,
      slug,
      status,
      title,
      seoTitle: seoTitle || null,
      excerpt,
      category,
      datePublished,
      dateModified,
      heroImage,
      thumbnailImage,
      calculatorSlug: calculatorSlug || null,
      relatedGuideSlugs,
      relatedCalculatorSlugs,
      bodyMarkdown,
      faqs,
      cta: {
        title: ctaTitle,
        description: ctaDescription,
        calculatorSlug: ctaCalculatorSlug,
        buttonText: ctaButtonText,
      },
      internalLinks: guide?.content.internalLinks ?? [],
      contentBase: guide?.content ?? createDefaultContent(),
    }),
    [
      guide,
      slug,
      status,
      title,
      seoTitle,
      excerpt,
      category,
      datePublished,
      dateModified,
      heroImage,
      thumbnailImage,
      calculatorSlug,
      relatedGuideSlugs,
      relatedCalculatorSlugs,
      bodyMarkdown,
      faqs,
      ctaTitle,
      ctaDescription,
      ctaCalculatorSlug,
      ctaButtonText,
    ]
  );

  const markDirty = useCallback(() => {
    setSaveState((current) => (current === "saving" ? current : "dirty"));
  }, []);

  useEffect(() => {
    if (saveState !== "dirty") return;
    if (!slug.trim() || !title.trim() || !bodyMarkdown.trim()) return;

    const timer = window.setTimeout(async () => {
      setSaveState("saving");
      const result = await autosaveGuideAction(payload);
      if (result.ok) {
        setSaveState("saved");
        setSaveMessage(null);
      } else {
        setSaveState("error");
        setSaveMessage(result.error ?? "Autosave failed.");
      }
    }, 2500);
    return () => window.clearTimeout(timer);
  }, [payload, saveState, slug, title, bodyMarkdown]);

  function insertMarkdown(snippet: string) {
    const textarea = textareaRef.current;
    if (!textarea) {
      setBodyMarkdown((current) => `${current}${snippet}`);
      markDirty();
      return;
    }

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const next = `${bodyMarkdown.slice(0, start)}${snippet}${bodyMarkdown.slice(end)}`;
    setBodyMarkdown(next);
    markDirty();
    window.requestAnimationFrame(() => {
      textarea.focus();
      const cursor = start + snippet.length;
      textarea.setSelectionRange(cursor, cursor);
    });
  }

  async function uploadInlineImage(file: File) {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("slug", slug || "draft");
    const result = await uploadGuideImageAction(formData);
    return result.ok ? result.url ?? null : null;
  }

  async function handleSaveDraft() {
    setSaveState("saving");
    const result = await saveGuideFromEditorAction({ ...payload, status: "draft" });
    if (result.ok) {
      setSaveState("saved");
      setSaveMessage(null);
      if (result.slug && result.slug !== slug) {
        window.location.href = `/admin/guides/${result.slug}/edit?saved=1`;
      }
    } else {
      setSaveState("error");
      setSaveMessage(result.error ?? "Save failed.");
    }
  }

  async function handlePublish() {
    await publishGuideFromEditorAction({ ...payload, status: "published" });
  }

  const previewPath = `/admin/guides/${slug || "draft"}/preview`;
  const draftLabel =
    saveState === "saving"
      ? "Saving draft..."
      : saveState === "saved"
        ? "Draft saved"
        : saveState === "dirty"
          ? "Unsaved changes"
          : saveState === "error"
            ? "Save error"
            : status === "published"
              ? "Published"
              : "Draft";

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-lg)] border border-card-border bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ${
              status === "published"
                ? "bg-primary-light text-primary-dark"
                : "bg-[#fff3e0] text-[#8a4b00]"
            }`}
          >
            {draftLabel}
          </span>
          <span className="text-xs text-text-muted">Autosave keeps a draft every few seconds.</span>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={previewPath}
            className="rounded-[var(--radius-sm)] border border-card-border px-3 py-2 text-sm font-medium hover:bg-[#fafafa]"
          >
            Preview
          </a>
          <button
            type="button"
            onClick={() => void handleSaveDraft()}
            className="rounded-[var(--radius-sm)] border border-card-border px-3 py-2 text-sm font-medium hover:bg-[#fafafa]"
          >
            Save draft
          </button>
          <button
            type="button"
            onClick={() => void handlePublish()}
            className="rounded-[var(--radius-sm)] bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Publish
          </button>
        </div>
      </div>

      {saveMessage ? (
        <p className="rounded-[var(--radius-sm)] bg-red-50 px-4 py-3 text-sm text-red-700">
          {saveMessage}
        </p>
      ) : null}
      {saved === "1" && !saveMessage ? (
        <p className="rounded-[var(--radius-sm)] bg-primary-light px-4 py-3 text-sm text-primary-dark">
          Guide saved successfully.
        </p>
      ) : null}

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_340px]">
        <div className="space-y-6">
          <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
            <h2 className="text-lg font-semibold">Guide details</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm md:col-span-2">
                <span className="font-medium">Title</span>
                <input
                  value={title}
                  onChange={(event) => {
                    const value = event.target.value;
                    setTitle(value);
                    if (!slugTouched) {
                      setSlug(slugify(value));
                    }
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Slug</span>
                <input
                  value={slug}
                  onChange={(event) => {
                    setSlugTouched(true);
                    setSlug(slugify(event.target.value));
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Status</span>
                <select
                  value={status}
                  onChange={(event) => {
                    setStatus(event.target.value as GuideStatus);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                >
                  <option value="draft">Draft</option>
                  <option value="published">Published</option>
                </select>
              </label>
              <label className="block text-sm md:col-span-2">
                <span className="font-medium">SEO title</span>
                <input
                  value={seoTitle}
                  onChange={(event) => {
                    setSeoTitle(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
              <label className="block text-sm md:col-span-2">
                <span className="font-medium">Excerpt</span>
                <textarea
                  rows={3}
                  value={excerpt}
                  onChange={(event) => {
                    setExcerpt(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Category</span>
                <select
                  value={category}
                  onChange={(event) => {
                    setCategory(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                >
                  {CATEGORIES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-medium">Primary calculator</span>
                <select
                  value={calculatorSlug}
                  onChange={(event) => {
                    setCalculatorSlug(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                >
                  <option value="">None</option>
                  {calculatorOptions.map((option) => (
                    <option key={option.slug} value={option.slug}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-medium">Date published</span>
                <input
                  type="date"
                  value={datePublished}
                  onChange={(event) => {
                    setDatePublished(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Date modified</span>
                <input
                  type="date"
                  value={dateModified}
                  onChange={(event) => {
                    setDateModified(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
            </div>
          </section>

          <section className="overflow-hidden rounded-[var(--radius-lg)] border border-card-border bg-white">
            <div className="border-b border-card-border px-4 py-3">
              <h2 className="text-lg font-semibold">Guide body</h2>
            </div>
            <MarkdownToolbar onInsert={insertMarkdown} onUploadImage={uploadInlineImage} />
            <textarea
              ref={textareaRef}
              value={bodyMarkdown}
              onChange={(event) => {
                setBodyMarkdown(event.target.value);
                markDirty();
              }}
              onDrop={(event) => {
                event.preventDefault();
                const file = event.dataTransfer.files?.[0];
                if (file) {
                  void uploadInlineImage(file).then((url) => {
                    if (url) insertMarkdown(`![${file.name}](${url})\n\n`);
                  });
                }
              }}
              rows={24}
              className="w-full resize-y border-0 px-4 py-4 font-mono text-sm outline-none"
            />
          </section>

          <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
            <h2 className="text-lg font-semibold">FAQ</h2>
            <div className="mt-4">
              <FaqEditor
                initialFaqs={faqs}
                onChange={(value) => {
                  setFaqs(value);
                  markDirty();
                }}
              />
            </div>
          </section>

          <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
            <h2 className="text-lg font-semibold">CTA block</h2>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <label className="block text-sm md:col-span-2">
                <span className="font-medium">Title</span>
                <input
                  value={ctaTitle}
                  onChange={(event) => {
                    setCtaTitle(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
              <label className="block text-sm md:col-span-2">
                <span className="font-medium">Description</span>
                <textarea
                  rows={3}
                  value={ctaDescription}
                  onChange={(event) => {
                    setCtaDescription(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
              <label className="block text-sm">
                <span className="font-medium">Calculator slug</span>
                <select
                  value={ctaCalculatorSlug}
                  onChange={(event) => {
                    setCtaCalculatorSlug(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                >
                  <option value="">Select calculator</option>
                  {calculatorOptions.map((option) => (
                    <option key={option.slug} value={option.slug}>
                      {option.title}
                    </option>
                  ))}
                </select>
              </label>
              <label className="block text-sm">
                <span className="font-medium">Button text</span>
                <input
                  value={ctaButtonText}
                  onChange={(event) => {
                    setCtaButtonText(event.target.value);
                    markDirty();
                  }}
                  className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
                />
              </label>
            </div>
          </section>

          <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
            <RelatedPicker
              label="Related guides"
              options={guideOptions.filter((option) => option.slug !== slug)}
              selected={relatedGuideSlugs}
              onChange={(value) => {
                setRelatedGuideSlugs(value);
                markDirty();
              }}
            />
          </section>

          <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
            <RelatedPicker
              label="Related calculators"
              options={calculatorOptions}
              selected={relatedCalculatorSlugs}
              onChange={(value) => {
                setRelatedCalculatorSlugs(value);
                markDirty();
              }}
            />
          </section>

          <section className="grid gap-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6 md:grid-cols-2">
            <ImageUploader
              label="Hero image"
              value={heroImage}
              onChange={(value) => {
                setHeroImage(value);
                markDirty();
              }}
              slug={slug || "draft"}
            />
            <ImageUploader
              label="Thumbnail image"
              value={thumbnailImage}
              onChange={(value) => {
                setThumbnailImage(value);
                markDirty();
              }}
              slug={slug || "draft"}
              hint="Optional. Defaults to hero image on the public site."
            />
          </section>

          {isEdit ? (
            <button
              type="button"
              onClick={() => void deleteGuideFromEditorAction(slug)}
              className="rounded-[var(--radius-sm)] border border-red-200 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
            >
              Delete guide
            </button>
          ) : null}
        </div>

        <GuideEditorSidebar
          title={title}
          seoTitle={seoTitle}
          excerpt={excerpt}
          slug={slug || "draft"}
          heroImage={heroImage}
          bodyMarkdown={bodyMarkdown}
          faqs={faqs}
          datePublished={datePublished}
          dateModified={dateModified}
          previewPath={previewPath}
        />
      </div>
    </div>
  );
}
