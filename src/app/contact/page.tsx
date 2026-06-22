import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
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

export default function ContactPage() {
  return (
    <ContentPageShell
      title="Contact"
      description="Questions, feedback, or calculator suggestions — we would like to hear from you."
    >
      <ContentSection title="Email us">
        <p>
          Reach us at{" "}
          <a
            href={`mailto:${SITE.email}`}
            className="text-primary hover:underline"
          >
            {SITE.email}
          </a>
          . We aim to respond within a few business days.
        </p>
      </ContentSection>

      <ContentSection title="Send a message">
        <form
          className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm"
          aria-label="Contact form"
          action={`mailto:${SITE.email}`}
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
