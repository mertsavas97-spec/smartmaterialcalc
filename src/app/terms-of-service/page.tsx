import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import {
  ContentLink,
  ContentPageShell,
  ContentSection,
} from "@/components/layout/ContentPageShell";

export const metadata = createPageMetadata({
  title: "Terms of Service",
  description: "Terms governing use of SmartMaterialCalc calculators and website content.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <ContentPageShell
      title="Terms of Service"
      description={`Last updated: June 2025. By using ${SITE.name}, you agree to these terms.`}
    >
      <ContentSection title="Calculator estimates disclaimer">
        <p>
          All calculator results are estimates for planning purposes only.
          {SITE.name} does not guarantee accuracy for your specific project,
          site conditions, product specifications, or local building codes.
          Always verify measurements on site before purchasing materials.
        </p>
      </ContentSection>

      <ContentSection title="No professional advice">
        <p>
          SmartMaterialCalc content is general information, not engineering, architectural,
          or legal advice. Consult licensed professionals for structural work,
          code compliance, and safety-critical projects.
        </p>
      </ContentSection>

      <ContentSection title="No warranty">
        <p>
          The site and calculators are provided &quot;as is&quot; without warranties
          of any kind, express or implied, including fitness for a particular
          purpose or accuracy of results.
        </p>
      </ContentSection>

      <ContentSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, {SITE.name} and its operators
          are not liable for any direct, indirect, incidental, or consequential
          damages arising from use of the site, reliance on calculator results,
          or material ordering decisions.
        </p>
      </ContentSection>

      <ContentSection title="Changes">
        <p>
          We may update these terms at any time. Continued use of the site after
          changes constitutes acceptance of the updated terms.
        </p>
      </ContentSection>

      <ContentSection title="Contact">
        <p>
          Questions about these terms? Visit our{" "}
          <ContentLink href="/contact">contact page</ContentLink> or email{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </ContentSection>
    </ContentPageShell>
  );
}
