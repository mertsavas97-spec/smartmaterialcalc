import type { GuideRecord } from "@/lib/guides/types";
import { deleteGuideAction, saveGuideAction } from "@/lib/admin/actions";

const CATEGORIES = [
  "Paint",
  "Concrete",
  "Flooring",
  "Outdoor",
  "Lumber",
  "Roofing",
];

const EMPTY_CONTENT = JSON.stringify(
  {
    intro: "",
    whyItMatters: {
      heading: "Why this matters",
      paragraphs: [""],
    },
    sections: [
      {
        heading: "Section heading",
        paragraphs: [""],
      },
    ],
    examples: [],
    commonMistakes: [],
    recommendedAssumptions: [],
    faqs: [],
    cta: {
      title: "Use the calculator",
      description: "",
      calculatorSlug: "",
      buttonText: "Open Calculator",
    },
    internalLinks: [],
  },
  null,
  2
);

type GuideEditorFormProps = {
  guide?: GuideRecord;
};

export function GuideEditorForm({ guide }: GuideEditorFormProps) {
  const isEdit = Boolean(guide);

  return (
    <div className="space-y-6">
      <form action={saveGuideAction} className="space-y-6">
        {isEdit && <input type="hidden" name="originalSlug" value={guide!.slug} />}

        <div className="grid gap-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6 md:grid-cols-2">
          <label className="block text-sm">
            <span className="font-medium">Title</span>
            <input
              name="title"
              required
              defaultValue={guide?.title ?? ""}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">Slug</span>
            <input
              name="slug"
              required
              defaultValue={guide?.slug ?? ""}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">SEO title (optional)</span>
            <input
              name="seoTitle"
              defaultValue={guide?.seo_title ?? ""}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">Status</span>
            <select
              name="status"
              defaultValue={guide?.status ?? "draft"}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>

          <label className="block text-sm md:col-span-2">
            <span className="font-medium">Excerpt</span>
            <textarea
              name="excerpt"
              required
              rows={3}
              defaultValue={guide?.excerpt ?? ""}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">Category</span>
            <select
              name="category"
              defaultValue={guide?.category ?? "Paint"}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            >
              {CATEGORIES.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </label>

          <label className="block text-sm">
            <span className="font-medium">Hero image path</span>
            <input
              name="heroImage"
              required
              defaultValue={guide?.hero_image ?? "/images/guides/example.webp"}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">Date published</span>
            <input
              type="date"
              name="datePublished"
              required
              defaultValue={guide?.date_published ?? ""}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">Date modified</span>
            <input
              type="date"
              name="dateModified"
              required
              defaultValue={guide?.date_modified ?? ""}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">Primary calculator slug</span>
            <input
              name="calculatorSlug"
              defaultValue={guide?.calculator_slug ?? ""}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>

          <label className="block text-sm">
            <span className="font-medium">Related guide slugs</span>
            <input
              name="relatedGuideSlugs"
              defaultValue={(guide?.related_guide_slugs ?? []).join(", ")}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>

          <label className="block text-sm md:col-span-2">
            <span className="font-medium">Related calculator slugs</span>
            <input
              name="relatedCalculatorSlugs"
              defaultValue={(guide?.related_calculator_slugs ?? []).join(", ")}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>
        </div>

        <label className="block text-sm">
          <span className="font-medium">Guide content JSON</span>
          <p className="mt-1 text-xs text-text-muted">
            Body fields: intro, whyItMatters, sections, examples, commonMistakes,
            recommendedAssumptions, faqs, cta, internalLinks.
          </p>
          <textarea
            name="content"
            required
            rows={24}
            defaultValue={
              guide ? JSON.stringify(guide.content, null, 2) : EMPTY_CONTENT
            }
            className="mt-2 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
          />
        </label>

        <div className="flex flex-wrap gap-3">
          <button
            type="submit"
            className="rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Save guide
          </button>
        </div>
      </form>

      {isEdit && (
        <form action={deleteGuideAction}>
          <input type="hidden" name="slug" value={guide!.slug} />
          <button
            type="submit"
            className="rounded-[var(--radius-sm)] border border-red-200 px-4 py-2 text-sm font-medium text-red-700 hover:bg-red-50"
          >
            Delete guide
          </button>
        </form>
      )}
    </div>
  );
}
