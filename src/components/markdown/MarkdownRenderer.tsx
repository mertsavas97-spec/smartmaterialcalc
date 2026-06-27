import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArticleCallout } from "@/components/articles/GuideArticleSections";
import { slugifyHeading } from "@/lib/article-toc";

type MarkdownRendererProps = {
  markdown: string;
  className?: string;
};

function preprocessCallouts(markdown: string): string {
  return markdown.replace(
    /:::callout\s+([^\n]+)\n([\s\S]*?):::/g,
    (_match, title: string, body: string) => {
      const lines = body.trim().split("\n").map((line: string) => `> ${line}`);
      return [`> [!CALLOUT:${title.trim()}]`, ...lines].join("\n");
    }
  );
}

function CalloutBlockquote({ children }: { children: React.ReactNode }) {
  const childArray = React.Children.toArray(children);
  const first = childArray[0];
  const firstText =
    typeof first === "string"
      ? first
      : React.isValidElement(first)
        ? String((first.props as { children?: string }).children ?? "")
        : "";

  const calloutMatch = firstText.match(/^\[!CALLOUT:(.+)\]$/);
  if (calloutMatch) {
    return (
      <ArticleCallout title={calloutMatch[1].trim()}>
        <div className="space-y-2">{childArray.slice(1)}</div>
      </ArticleCallout>
    );
  }

  return (
    <blockquote className="border-l-4 border-primary/30 pl-4 text-text-secondary">
      {children}
    </blockquote>
  );
}

export function MarkdownRenderer({ markdown, className }: MarkdownRendererProps) {
  const processed = preprocessCallouts(markdown);

  return (
    <div className={className ?? "prose-calchive guide-markdown"}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h2: ({ children, ...props }) => {
            const label = String(children);
            return (
              <h2
                id={slugifyHeading(label)}
                className="mt-10 scroll-mt-24 text-2xl font-bold text-text-primary"
                {...props}
              >
                {children}
              </h2>
            );
          },
          h3: ({ children, ...props }) => (
            <h3 className="mt-6 text-xl font-semibold text-text-primary" {...props}>
              {children}
            </h3>
          ),
          p: ({ children, ...props }) => (
            <p className="mt-4 text-base leading-relaxed text-text-secondary" {...props}>
              {children}
            </p>
          ),
          ul: ({ children, ...props }) => (
            <ul className="mt-4 list-disc space-y-2 pl-5 text-text-secondary" {...props}>
              {children}
            </ul>
          ),
          ol: ({ children, ...props }) => (
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-text-secondary" {...props}>
              {children}
            </ol>
          ),
          table: ({ children, ...props }) => (
            <div className="mt-4 overflow-x-auto">
              <table
                className="min-w-full border-collapse border border-card-border text-sm"
                {...props}
              >
                {children}
              </table>
            </div>
          ),
          th: ({ children, ...props }) => (
            <th
              className="border border-card-border bg-[#fafafa] px-3 py-2 text-left font-semibold"
              {...props}
            >
              {children}
            </th>
          ),
          td: ({ children, ...props }) => (
            <td className="border border-card-border px-3 py-2" {...props}>
              {children}
            </td>
          ),
          pre: ({ children, ...props }) => (
            <pre
              className="mt-4 overflow-x-auto rounded-[var(--radius-sm)] bg-[#1e1e1e] p-4 text-sm text-white"
              {...props}
            >
              {children}
            </pre>
          ),
          code: ({ className: codeClassName, children, ...props }) => {
            const isBlock = Boolean(codeClassName);
            if (isBlock) {
              return (
                <code className={codeClassName} {...props}>
                  {children}
                </code>
              );
            }
            return (
              <code
                className="rounded bg-[#f4f4f4] px-1.5 py-0.5 font-mono text-sm text-text-primary"
                {...props}
              >
                {children}
              </code>
            );
          },
          img: ({ alt, src, ...props }) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={alt ?? ""}
              src={src}
              className="mt-4 rounded-[var(--radius-lg)] border border-card-border"
              {...props}
            />
          ),
          blockquote: ({ children, ...props }) => (
            <CalloutBlockquote {...props}>{children}</CalloutBlockquote>
          ),
          a: ({ children, href, ...props }) => (
            <a href={href} className="text-primary hover:underline" {...props}>
              {children}
            </a>
          ),
        }}
      >
        {processed}
      </ReactMarkdown>
    </div>
  );
}
