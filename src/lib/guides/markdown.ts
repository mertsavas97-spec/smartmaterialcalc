import type { GuideArticleContent } from "@/lib/guides/types";

export function structuredContentToMarkdown(content: GuideArticleContent): string {
  const parts: string[] = [];

  if (content.intro) {
    parts.push(content.intro);
    parts.push("");
  }

  if (content.whyItMatters.heading || content.whyItMatters.paragraphs.length > 0) {
    parts.push(`## ${content.whyItMatters.heading || "Why this matters"}`);
    parts.push("");
    parts.push(...content.whyItMatters.paragraphs);
    parts.push("");
  }

  for (const section of content.sections) {
    parts.push(`## ${section.heading}`);
    parts.push("");
    parts.push(...section.paragraphs);
    parts.push("");
  }

  if (content.examples.length > 0) {
    parts.push("## Practical examples");
    parts.push("");
    for (const example of content.examples) {
      parts.push(`### ${example.title}`);
      parts.push("");
      parts.push(`**Scenario:** ${example.scenario}`);
      parts.push("");
      parts.push(`**Outcome:** ${example.outcome}`);
      parts.push("");
    }
  }

  if (content.commonMistakes.length > 0) {
    parts.push("## Common mistakes");
    parts.push("");
    for (const mistake of content.commonMistakes) {
      parts.push(`- ${mistake}`);
    }
    parts.push("");
  }

  if (content.recommendedAssumptions.length > 0) {
    parts.push("## Recommended assumptions");
    parts.push("");
    parts.push(
      ":::callout Defaults that work for most projects",
      ...content.recommendedAssumptions.map((item) => `- ${item}`),
      ":::",
      ""
    );
  }

  return parts.join("\n").trim();
}

export function getEditorMarkdown(content: GuideArticleContent): string {
  if (content.bodyMarkdown?.trim()) {
    return content.bodyMarkdown.trim();
  }
  return structuredContentToMarkdown(content);
}

export function syncStructuredFromMarkdown(
  markdown: string,
  content: GuideArticleContent
): GuideArticleContent {
  const trimmed = markdown.trim();
  if (!trimmed) {
    return content;
  }

  const sections = trimmed.split(/\n(?=## )/);
  const introBlock = sections[0]?.trim() ?? "";
  const introParagraphs = introBlock.split(/\n\n+/).filter(Boolean);
  const intro = introParagraphs[0] ?? content.intro;

  const parsedSections: GuideArticleContent["sections"] = [];
  let whyItMatters = content.whyItMatters;

  for (const block of sections.slice(1)) {
    const lines = block.split("\n");
    const heading = lines[0]?.replace(/^##\s+/, "").trim() ?? "";
    const body = lines.slice(1).join("\n").trim();
    const paragraphs = body.split(/\n\n+/).filter(Boolean);

    if (/why/i.test(heading)) {
      whyItMatters = { heading, paragraphs };
      continue;
    }

    parsedSections.push({ heading, paragraphs });
  }

  return {
    ...content,
    intro,
    whyItMatters,
    sections: parsedSections.length > 0 ? parsedSections : content.sections,
    bodyMarkdown: trimmed,
    useMarkdownBody: true,
  };
}

export function countMarkdownWords(markdown: string): number {
  return markdown
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/[#>*_\-\[\]()!`|:]/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

export function getMarkdownReadingTime(markdown: string): {
  wordCount: number;
  minutes: number;
  label: string;
} {
  const wordCount = countMarkdownWords(markdown);
  const minutes = Math.max(1, Math.ceil(wordCount / 200));
  return {
    wordCount,
    minutes,
    label: `${minutes} min read`,
  };
}
