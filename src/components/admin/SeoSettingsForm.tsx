import { CharCountField } from "@/components/admin/CharCountField";
import { saveHomepageSeoAction } from "@/lib/admin/cms-actions";
import type { HomepageSettings } from "@/lib/cms/types";

type SeoSettingsFormProps = {
  settings: HomepageSettings;
};

export function SeoSettingsForm({ settings }: SeoSettingsFormProps) {
  return (
    <form action={saveHomepageSeoAction} className="space-y-6">
      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Homepage SEO</h2>
        <CharCountField
          label="Meta title"
          name="metaTitle"
          defaultValue={settings.seo.metaTitle}
          warningAt={60}
          required
        />
        <CharCountField
          label="Meta description"
          name="metaDescription"
          defaultValue={settings.seo.metaDescription}
          warningAt={160}
          rows={3}
          required
        />
        <CharCountField
          label="OG title"
          name="ogTitle"
          defaultValue={settings.seo.ogTitle}
          warningAt={60}
          required
        />
        <CharCountField
          label="OG description"
          name="ogDescription"
          defaultValue={settings.seo.ogDescription}
          warningAt={160}
          rows={3}
          required
        />
        <p className="text-xs text-text-muted">
          Warnings appear when title exceeds 60 characters or description exceeds 160
          characters. You can still save with warnings.
        </p>
      </section>

      <button
        type="submit"
        className="rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
      >
        Save SEO settings
      </button>
    </form>
  );
}
