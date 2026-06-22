import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";
import {
  ContentLink,
  ContentPageShell,
  ContentSection,
} from "@/components/layout/ContentPageShell";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How SmartMaterialCalc collects, uses, and protects your information.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <ContentPageShell
      title="Privacy Policy"
      description={`Last updated: June 2025. This policy describes how ${SITE.name} handles information when you use ${SITE.domain}.`}
    >
      <ContentSection title="Overview">
        <p>
          SmartMaterialCalc provides free home improvement calculators. We collect minimal
          data and do not require account registration to use our tools.
        </p>
      </ContentSection>

      <ContentSection title="Information we collect">
        <p>
          We may collect anonymous usage data through analytics services (such as
          page views and device type) to improve our calculators and content.
          Calculator inputs you enter are processed in your browser and are not
          stored on our servers unless explicitly stated otherwise.
        </p>
      </ContentSection>

      <ContentSection title="Cookies and analytics">
        <p>
          We may use cookies and similar technologies for analytics, performance
          measurement, and advertising if enabled in the future. You can control
          cookies through your browser settings.
        </p>
      </ContentSection>

      <ContentSection title="Third-party links">
        <p>
          Our site may link to retailer or partner websites. Those sites have
          their own privacy policies. See our{" "}
          <ContentLink href="/affiliate-disclosure">Affiliate Disclosure</ContentLink>{" "}
          for information about commercial relationships.
        </p>
      </ContentSection>

      <ContentSection title="Contact">
        <p>
          Privacy questions? Email{" "}
          <a href={`mailto:${SITE.email}`} className="text-primary hover:underline">
            {SITE.email}
          </a>
          .
        </p>
      </ContentSection>
    </ContentPageShell>
  );
}
