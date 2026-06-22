import { createPageMetadata } from "@/lib/metadata";
import {
  ContentLink,
  ContentPageShell,
  ContentSection,
} from "@/components/layout/ContentPageShell";

export const metadata = createPageMetadata({
  title: "About",
  description:
    "Learn why SmartMaterialCalc exists, who we help, and how our free home improvement calculators work.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <ContentPageShell
      title="About SmartMaterialCalc"
      description="Free home improvement planning tools built for homeowners, DIYers, and contractors."
    >
      <ContentSection title="Why SmartMaterialCalc exists">
        <p>
          SmartMaterialCalc was built to solve a simple problem: people buy the wrong amount
          of materials for home improvement projects. Too little paint stops a
          job mid-way. Too much concrete wastes money. SmartMaterialCalc gives you instant, free material estimates before you shop.
          Verify quantities against product labels and your project layout before
          purchase.
        </p>
      </ContentSection>

      <ContentSection title="Who we help">
        <p>
          Our tools are designed for homeowners planning a weekend project, DIY
          enthusiasts tackling renovations, contractors quoting jobs quickly, and
          anyone who wants a clear material list before visiting the store.
        </p>
      </ContentSection>

      <ContentSection title="How our calculators work">
        <p>
          Each calculator uses industry-standard formulas with adjustable
          assumptions — coverage rates, waste percentages, material density, and
          more. Enter your project dimensions, click Calculate, and get a
          recommended purchase quantity rounded for real-world ordering.
        </p>
        <p>
          Read our <ContentLink href="/methodology">methodology page</ContentLink>{" "}
          for details on formulas, defaults, and limitations.
        </p>
      </ContentSection>

      <ContentSection title="Our commitment to accuracy">
        <p>
          We review calculator logic against common professional estimating
          practices and update tools when standards change. Results are
          estimates — always verify critical measurements on site and consult a
          licensed professional for structural or code-dependent work.
        </p>
      </ContentSection>
    </ContentPageShell>
  );
}
