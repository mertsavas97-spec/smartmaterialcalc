import { createPageMetadata } from "@/lib/metadata";
import { getSiteSettings } from "@/lib/cms/loader";
import {
  ContentLink,
  ContentPageShell,
  ContentSection,
} from "@/components/layout/ContentPageShell";
import { Button } from "@/components/ui/Button";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact SmartMaterialCalc for calculator questions, feedback, or content suggestions. Email our team — we respond within a few business days.",
  path: "/contact",
});

export default async function ContactPage() {
  const siteSettings = await getSiteSettings();

  return (
    <ContentPageShell
      title="Contact"
      description="Questions, feedback, or calculator suggestions — we would like to hear from you."
    >
      <ContentSection title="About SmartMaterialCalc">
        <p>
          SmartMaterialCalc provides free home improvement material calculators
          for homeowners, DIYers, and contractors. We help you estimate paint,
          concrete, tile, gravel, mulch, flooring, and other project materials
          before you buy — so you can plan quantities with fewer surprises at
          the store.
        </p>
      </ContentSection>

      <ContentSection title="Email us">
        <p>
          Reach us at{" "}
          <a
            href={`mailto:${siteSettings.contactEmail}`}
            className="text-primary hover:underline"
          >
            {siteSettings.contactEmail}
          </a>
          . We typically respond within two to three business days.
        </p>
      </ContentSection>

      <ContentSection title="What we can help with">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Calculator feedback</strong> — report confusing inputs,
            missing options, or results that do not match your project.
          </li>
          <li>
            <strong>Content corrections</strong> — flag errors in guides,
            formulas, or material recommendations.
          </li>
          <li>
            <strong>New calculator ideas</strong> — suggest tools you would use
            for upcoming home improvement projects.
          </li>
        </ul>
        <p className="mt-3">
          For how our estimates are built, see our{" "}
          <ContentLink href="/methodology">methodology page</ContentLink>.
        </p>
      </ContentSection>

      <ContentSection title="Send a message">
        <form
          className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm"
          aria-label="Contact form"
          action={`mailto:${siteSettings.contactEmail}`}
          method="post"
          encType="text/plain"
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-text-primary">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-text-primary">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-text-primary">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <Button type="submit" variant="cta">
              Open email to send
            </Button>
          </div>
          <p className="mt-4 text-xs text-text-muted">
            This form opens your email client. No data is stored on our servers.
          </p>
        </form>
      </ContentSection>

      <ContentSection title="Other resources">
        <p>
          Looking for calculator accuracy details? Visit our{" "}
          <ContentLink href="/methodology">methodology page</ContentLink>. For
          legal questions, see our{" "}
          <ContentLink href="/privacy-policy">Privacy Policy</ContentLink> and{" "}
          <ContentLink href="/terms-of-service">Terms of Service</ContentLink>.
        </p>
      </ContentSection>
    </ContentPageShell>
  );
}
