import type { GuideArticle } from "@/types/guide-article";

const WORDS_PER_MINUTE = 200;

export function countWords(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export function calculateReadingTimeMinutes(wordCount: number): number {
  return Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
}

export function formatReadingTime(minutes: number): string {
  return `${minutes} min read`;
}

function collectArticleText(article: GuideArticle): string {
  if (article.bodyMarkdown?.trim()) {
    return article.bodyMarkdown;
  }

  const parts = [
    article.intro,
    article.whyItMatters.heading,
    ...article.whyItMatters.paragraphs,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
    ]),
    ...article.examples.flatMap((example) => [
      example.title,
      example.scenario,
      example.outcome,
    ]),
    ...article.commonMistakes,
    ...article.recommendedAssumptions,
    ...article.faqs.flatMap((faq) => [faq.question, faq.answer]),
    article.cta.title,
    article.cta.description,
  ];

  return parts.join(" ");
}

export function getArticleWordCount(article: GuideArticle): number {
  return countWords(collectArticleText(article));
}

export function getArticleReadingTime(article: GuideArticle): {
  minutes: number;
  label: string;
  wordCount: number;
} {
  const wordCount = getArticleWordCount(article);
  const minutes = calculateReadingTimeMinutes(wordCount);
  return {
    minutes,
    label: formatReadingTime(minutes),
    wordCount,
  };
}
