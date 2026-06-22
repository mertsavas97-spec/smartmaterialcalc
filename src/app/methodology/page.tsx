import { createPageMetadata } from "@/lib/metadata";
import {
  ContentLink,
  ContentPageShell,
  ContentSection,
} from "@/components/layout/ContentPageShell";

export const metadata = createPageMetadata({
  title: "How We Calculate",
  description:
    "SmartMaterialCalc methodology — formulas, assumptions, waste factors, and limitations for all calculators.",
  path: "/methodology",
});

export default function MethodologyPage() {
  return (
    <ContentPageShell
      title="How We Calculate"
      description="Transparent methodology behind every SmartMaterialCalc calculator."
    >
      <ContentSection title="Formula approach">
        <p>
          Each calculator uses standard industry estimating formulas published in
          common trade references. Results update instantly in your browser when
          you change inputs — no server-side storage of your measurements.
        </p>
      </ContentSection>

      <ContentSection title="Assumptions and defaults">
        <p>
          Default values reflect typical residential projects — for example, 375
          sq ft per gallon for interior latex paint, 1.4 tons per cubic yard for
          gravel, or 4-inch slab thickness. Every default can be changed in the
          calculator to match your product or plan.
        </p>
      </ContentSection>

      <ContentSection title="Waste and overage factors">
        <p>
          Most material calculators include an adjustable waste percentage.
          Waste accounts for cuts, breakage, spillage, uneven surfaces, and
          ordering in whole units (gallons, boxes, bags). Recommended purchase
          quantities round up so you are less likely to run short mid-project.
        </p>
      </ContentSection>

      <ContentSection title="Material estimates">
        <p>
          Outputs show both raw calculated amounts and recommended purchase
          quantities. Recommended values include your waste setting and standard
          rounding rules — whole gallons, whole boxes, nearest 0.1 cubic yard,
          and similar.
        </p>
      </ContentSection>

      <ContentSection title="Limitations">
        <p>
          Calculators do not account for every site condition — irregular shapes,
          structural requirements, local codes, product-specific coverage on
          every brand, or labor. Use results as a planning starting point, not a
          substitute for on-site verification or professional judgment.
        </p>
      </ContentSection>

      <ContentSection title="Updates">
        <p>
          We review calculators periodically and display an updated date on each
          tool. Suggest improvements via our{" "}
          <ContentLink href="/contact">contact page</ContentLink>.
        </p>
      </ContentSection>
    </ContentPageShell>
  );
}
