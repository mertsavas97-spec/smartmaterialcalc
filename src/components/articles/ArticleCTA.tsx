import { GuideCalculatorCtaLink } from "./GuideCalculatorCtaLink";

type ArticleCTAProps = {
  title: string;
  description: string;
  calculatorSlug: string;
  guideSlug: string;
  buttonText?: string;
};

export function ArticleCTA({
  title,
  description,
  calculatorSlug,
  guideSlug,
  buttonText = "Open calculator",
}: ArticleCTAProps) {
  return (
    <div className="my-10 rounded-[var(--radius-lg)] border border-card-border bg-primary-light p-6">
      <h2 className="text-lg font-semibold text-primary-dark">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      <GuideCalculatorCtaLink
        guideSlug={guideSlug}
        calculatorSlug={calculatorSlug}
        location="article"
        className="mt-4 inline-flex items-center justify-center rounded-[var(--radius-sm)] bg-cta px-6 py-3 text-base font-medium text-white transition-colors hover:bg-[#E65100] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cta focus-visible:ring-offset-2"
      >
        {buttonText}
      </GuideCalculatorCtaLink>
    </div>
  );
}
