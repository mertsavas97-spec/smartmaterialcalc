import type { GuideArticle } from "@/types/guide-article";

export type TocItem = {
  id: string;
  label: string;
};

export type ArticleSectionIds = {
  whyItMatters: string;
  sections: string[];
  examples: string;
  commonMistakes: string;
  recommendedAssumptions: string;
  faq?: string;
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function buildArticleNavigation(article: GuideArticle): {
  toc: TocItem[];
  sectionIds: ArticleSectionIds;
} {
  if (article.useMarkdownBody && article.bodyMarkdown?.trim()) {
    return buildMarkdownNavigation(article.bodyMarkdown, article.faqs.length > 0);
  }

  const usedIds = new Set<string>();
  const toc: TocItem[] = [];

  function addItem(label: string): string {
    let id = slugifyHeading(label);
    let counter = 2;

    while (usedIds.has(id)) {
      id = `${slugifyHeading(label)}-${counter}`;
      counter += 1;
    }

    usedIds.add(id);
    toc.push({ id, label });
    return id;
  }

  const sectionIds: ArticleSectionIds = {
    whyItMatters: addItem(article.whyItMatters.heading),
    sections: article.sections.map((section) => addItem(section.heading)),
    examples: addItem("Practical examples"),
    commonMistakes: addItem("Common mistakes"),
    recommendedAssumptions: addItem("Recommended assumptions"),
  };

  if (article.faqs.length > 0) {
    sectionIds.faq = "faq-heading";
    toc.push({
      id: "faq-heading",
      label: "Frequently asked questions",
    });
  }

  return { toc, sectionIds };
}

function buildMarkdownNavigation(bodyMarkdown: string, hasFaqs: boolean) {
  const toc: TocItem[] = [];
  const sectionIds: ArticleSectionIds = {
    whyItMatters: "",
    sections: [],
    examples: "",
    commonMistakes: "",
    recommendedAssumptions: "",
  };

  for (const line of bodyMarkdown.split("\n")) {
    const match = line.match(/^##\s+(.+)$/);
    if (!match) continue;
    const label = match[1].trim();
    const id = slugifyHeading(label);
    toc.push({ id, label });
    sectionIds.sections.push(id);
  }

  if (hasFaqs) {
    sectionIds.faq = "faq-heading";
    toc.push({ id: "faq-heading", label: "Frequently asked questions" });
  }

  return { toc, sectionIds };
}
