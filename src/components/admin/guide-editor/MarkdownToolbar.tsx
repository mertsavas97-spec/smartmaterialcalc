"use client";

import { useRef } from "react";

type MarkdownToolbarProps = {
  onInsert: (snippet: string, cursorOffset?: number) => void;
  onUploadImage: (file: File) => Promise<string | null>;
};

const TOOLBAR_ACTIONS = [
  { label: "H2", snippet: "## Heading\n\n" },
  { label: "H3", snippet: "### Subheading\n\n" },
  { label: "Bold", snippet: "**bold text**" },
  { label: "List", snippet: "- List item\n" },
  { label: "Numbered", snippet: "1. List item\n" },
  {
    label: "Table",
    snippet: "| Column | Value |\n| --- | --- |\n| Example | 100 |\n\n",
  },
  {
    label: "Callout",
    snippet: ":::callout Note\nImportant detail here.\n:::\n\n",
  },
  { label: "Code", snippet: "```\ncode block\n```\n\n" },
  { label: "Link", snippet: "[link text](/calculators)" },
  { label: "Image", snippet: "![Alt text](/images/guides/example.webp)" },
];

export function MarkdownToolbar({ onInsert, onUploadImage }: MarkdownToolbarProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleImageUpload(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;
    const url = await onUploadImage(file);
    if (url) {
      onInsert(`![${file.name}](${url})\n\n`);
    }
  }

  return (
    <div className="flex flex-wrap gap-2 border-b border-card-border bg-[#fafafa] p-3">
      {TOOLBAR_ACTIONS.map((action) => (
        <button
          key={action.label}
          type="button"
          onClick={() => onInsert(action.snippet)}
          className="rounded-[var(--radius-sm)] border border-card-border bg-white px-2.5 py-1.5 text-xs font-medium hover:bg-[#f4f4f4]"
        >
          {action.label}
        </button>
      ))}
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        className="rounded-[var(--radius-sm)] border border-card-border bg-white px-2.5 py-1.5 text-xs font-medium hover:bg-[#f4f4f4]"
      >
        Upload image
      </button>
      <input
        ref={fileRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={(event) => void handleImageUpload(event.target.files)}
      />
    </div>
  );
}
