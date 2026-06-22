import { createPageMetadata } from "@/lib/metadata";
import {
  ContentLink,
  ContentPageShell,
  ContentSection,
} from "@/components/layout/ContentPageShell";

export const metadata = createPageMetadata({
  title: "Affiliate Disclosure",
  description:
    "SmartMaterialCalc affiliate relationships and how we earn compensation from partner links.",
  path: "/affiliate-disclosure",
});

export default function AffiliateDisclosurePage() {
  return (
    <ContentPageShell
      title="Affiliate Disclosure"
      description="Transparency about how SmartMaterialCalc may earn compensation."
    >
      <ContentSection title="FTC disclosure">
        <p>
          SmartMaterialCalc is reader-supported. Some links on this site are affiliate
          links. If you click a link and make a purchase, we may earn a commission
          at no additional cost to you.
        </p>
      </ContentSection>

      <ContentSection title="Our editorial independence">
        <p>
          Affiliate relationships do not influence our calculator formulas or
          recommended quantities. We prioritize accurate estimates and helpful
          content regardless of commercial partnerships.
        </p>
      </ContentSection>

      <ContentSection title="Partner relationships">
        <p>
          We may participate in affiliate programs with home improvement retailers
          and related suppliers. Partner names and logos are trademarks of their
          respective owners.
        </p>
      </ContentSection>

      <ContentSection title="Your support">
        <p>
          Affiliate commissions help keep SmartMaterialCalc free and allow us to maintain
          and improve our calculators. Thank you for supporting the site.
        </p>
      </ContentSection>

      <ContentSection title="Questions">
        <p>
          For questions about this disclosure, contact us via our{" "}
          <ContentLink href="/contact">contact page</ContentLink>.
        </p>
      </ContentSection>
    </ContentPageShell>
  );
}
