import { SocialLinksEditor } from "@/components/admin/SocialLinksEditor";
import { saveSiteSettingsAction } from "@/lib/admin/cms-actions";
import type { SiteSettings } from "@/lib/cms/types";

type SiteSettingsFormProps = {
  settings: SiteSettings;
};

export function SiteSettingsForm({ settings }: SiteSettingsFormProps) {
  return (
    <form action={saveSiteSettingsAction} className="space-y-8">
      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Contact</h2>
        <label className="block text-sm">
          <span className="font-medium">Contact email</span>
          <input
            type="email"
            name="contactEmail"
            required
            defaultValue={settings.contactEmail}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
          />
        </label>
      </section>

      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Footer</h2>
        <label className="block text-sm">
          <span className="font-medium">Copyright text</span>
          <input
            name="footerCopyright"
            required
            defaultValue={settings.footerCopyright}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
          />
          <span className="mt-1 block text-xs text-text-muted">
            Year is added automatically (e.g. © 2026 …).
          </span>
        </label>
      </section>

      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Announcement bar</h2>
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="announcementEnabled"
            defaultChecked={settings.announcementBar.enabled}
          />
          <span>Show announcement bar site-wide</span>
        </label>
        <label className="block text-sm">
          <span className="font-medium">Message</span>
          <input
            name="announcementMessage"
            defaultValue={settings.announcementBar.message}
            className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
          />
        </label>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="block text-sm">
            <span className="font-medium">Link label (optional)</span>
            <input
              name="announcementLinkLabel"
              defaultValue={settings.announcementBar.linkLabel}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Link URL (optional)</span>
            <input
              name="announcementLinkUrl"
              defaultValue={settings.announcementBar.linkUrl}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>
        </div>
      </section>

      <section className="space-y-4 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
        <h2 className="text-lg font-semibold">Social links</h2>
        <SocialLinksEditor initialLinks={settings.socialLinks} />
      </section>

      <button
        type="submit"
        className="rounded-[var(--radius-sm)] bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
      >
        Save site settings
      </button>
    </form>
  );
}
