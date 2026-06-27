import { FaqEditor } from "@/components/admin/FaqEditor";
import { StatisticsEditor } from "@/components/admin/StatisticsEditor";
import { saveHomepageContentAction } from "@/lib/admin/cms-actions";
import type { HomepageSettings } from "@/lib/cms/types";

type HomepageSettingsFormProps = {
  settings: HomepageSettings;
};

export function HomepageSettingsForm({ settings }: HomepageSettingsFormProps) {
  return (
    <form action={saveHomepageContentAction} className="space-y-8">
      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Hero</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm md:col-span-2">
            <span className="font-medium">Badge</span>
            <input
              name="heroBadge"
              defaultValue={settings.hero.badge}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm md:col-span-2">
            <span className="font-medium">Title (H1)</span>
            <input
              name="heroTitle"
              required
              defaultValue={settings.hero.title}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm md:col-span-2">
            <span className="font-medium">Subtitle</span>
            <textarea
              name="heroSubtitle"
              rows={3}
              defaultValue={settings.hero.subtitle}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">CTA label</span>
            <input
              name="heroCtaLabel"
              required
              defaultValue={settings.hero.ctaLabel}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">CTA URL</span>
            <input
              name="heroCtaUrl"
              required
              defaultValue={settings.hero.ctaUrl}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>
        </div>
      </section>

      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Featured content order</h2>
        <label className="block text-sm">
          <span className="font-medium">Featured calculator slugs</span>
          <input
            name="featuredCalculatorSlugs"
            defaultValue={settings.featuredCalculatorSlugs.join(", ")}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Featured guide slugs</span>
          <input
            name="featuredGuideSlugs"
            defaultValue={settings.featuredGuideSlugs.join(", ")}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium">Category display order</span>
          <input
            name="categoryOrder"
            defaultValue={settings.categoryOrder.join(", ")}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
          />
        </label>
        <p className="text-xs text-text-muted">
          Comma-separated slugs. Duplicates are rejected on save.
        </p>
      </section>

      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Homepage FAQ</h2>
        <FaqEditor initialFaqs={settings.faqs} />
      </section>

      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Trust section</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm md:col-span-2">
            <span className="font-medium">Headline</span>
            <textarea
              name="trustHeadline"
              rows={2}
              defaultValue={settings.trust.headline}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Link label</span>
            <input
              name="trustLinkLabel"
              defaultValue={settings.trust.linkLabel}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Link URL</span>
            <input
              name="trustLinkUrl"
              defaultValue={settings.trust.linkUrl}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">CTA label</span>
            <input
              name="trustCtaLabel"
              required
              defaultValue={settings.trust.ctaLabel}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">CTA URL</span>
            <input
              name="trustCtaUrl"
              required
              defaultValue={settings.trust.ctaUrl}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>
        </div>
      </section>

      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Homepage statistics</h2>
        <StatisticsEditor initialStatistics={settings.statistics} />
      </section>

      <button
        type="submit"
        className="rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
      >
        Save homepage
      </button>
    </form>
  );
}
