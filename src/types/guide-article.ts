export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideExample = {
  title: string;
  scenario: string;
  outcome: string;
};

export type GuideArticle = {
  slug: string;
  calculatorSlug?: string;
  relatedGuideSlugs?: string[];
  relatedCalculatorSlugs?: string[];
  intro: string;
  whyItMatters: {
    heading: string;
    paragraphs: string[];
  };
  sections: {
    heading: string;
    paragraphs: string[];
  }[];
  examples: GuideExample[];
  commonMistakes: string[];
  recommendedAssumptions: string[];
  faqs: GuideFaq[];
  cta: {
    title: string;
    description: string;
    calculatorSlug: string;
    buttonText?: string;
  };
  internalLinks: {
    href: string;
    label: string;
  }[];
};
