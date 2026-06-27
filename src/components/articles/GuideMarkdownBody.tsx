import {
  ArticleCTA,
  ArticleFAQ,
  ArticleInternalLinks,
} from "./GuideArticleSections";
import { MarkdownRenderer } from "@/components/markdown/MarkdownRenderer";
import type { GuideArticle } from "@/types/guide-article";

type GuideMarkdownBodyProps = {
  article: GuideArticle;
};

export function GuideMarkdownBody({ article }: GuideMarkdownBodyProps) {
  if (!article.bodyMarkdown?.trim()) {
    return null;
  }

  return (
    <article className="prose-calchive">
      <MarkdownRenderer markdown={article.bodyMarkdown} />
      <ArticleInternalLinks links={article.internalLinks} />
      <ArticleCTA
        title={article.cta.title}
        description={article.cta.description}
        calculatorSlug={article.cta.calculatorSlug}
        guideSlug={article.slug}
        buttonText={article.cta.buttonText}
      />
      <ArticleFAQ faqs={article.faqs} />
    </article>
  );
}
