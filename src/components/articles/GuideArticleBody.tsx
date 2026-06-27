import {
  ArticleCallout,
  ArticleCTA,
  ArticleExample,
  ArticleFAQ,
  ArticleIntro,
  ArticleInternalLinks,
  ArticleParagraph,
  ArticleSection,
} from "./GuideArticleSections";
import { GuideMarkdownBody } from "./GuideMarkdownBody";
import { buildArticleNavigation } from "@/lib/article-toc";
import { renderInlineLinks } from "@/lib/render-inline-links";
import type { GuideArticle } from "@/types/guide-article";

type GuideArticleBodyProps = {
  article: GuideArticle;
};

export function GuideArticleBody({ article }: GuideArticleBodyProps) {
  if (article.useMarkdownBody && article.bodyMarkdown?.trim()) {
    return <GuideMarkdownBody article={article} />;
  }

  const { sectionIds } = buildArticleNavigation(article);

  return (
    <article className="prose-calchive">
      <ArticleIntro>
        <ArticleParagraph>{renderInlineLinks(article.intro)}</ArticleParagraph>
      </ArticleIntro>

      <ArticleInternalLinks links={article.internalLinks} />

      <ArticleSection
        heading={article.whyItMatters.heading}
        id={sectionIds.whyItMatters}
      >
        {article.whyItMatters.paragraphs.map((paragraph) => (
          <ArticleParagraph key={paragraph}>
            {renderInlineLinks(paragraph)}
          </ArticleParagraph>
        ))}
      </ArticleSection>

      {article.sections.map((section, index) => (
        <ArticleSection
          key={section.heading}
          heading={section.heading}
          id={sectionIds.sections[index]}
        >
          {section.paragraphs.map((paragraph) => (
            <ArticleParagraph key={paragraph}>
              {renderInlineLinks(paragraph)}
            </ArticleParagraph>
          ))}
        </ArticleSection>
      ))}

      <ArticleSection heading="Practical examples" id={sectionIds.examples}>
        <div className="space-y-4">
          {article.examples.map((example) => (
            <ArticleExample
              key={example.title}
              title={example.title}
              scenario={example.scenario}
              outcome={example.outcome}
            />
          ))}
        </div>
      </ArticleSection>

      <ArticleSection heading="Common mistakes" id={sectionIds.commonMistakes}>
        <ul className="list-disc space-y-2 pl-5">
          {article.commonMistakes.map((mistake) => (
            <li key={mistake}>{mistake}</li>
          ))}
        </ul>
      </ArticleSection>

      <ArticleSection
        heading="Recommended assumptions"
        id={sectionIds.recommendedAssumptions}
      >
        <ArticleCallout title="Defaults that work for most projects">
          <ul className="list-disc space-y-2 pl-5">
            {article.recommendedAssumptions.map((assumption) => (
              <li key={assumption}>{assumption}</li>
            ))}
          </ul>
        </ArticleCallout>
      </ArticleSection>

      <ArticleCTA
        title={article.cta.title}
        description={article.cta.description}
        calculatorSlug={article.cta.calculatorSlug}
        guideSlug={article.slug}
        buttonText={article.cta.buttonText}
      />

      <div id={sectionIds.faq} className="scroll-mt-24">
        <ArticleFAQ faqs={article.faqs} />
      </div>
    </article>
  );
}
