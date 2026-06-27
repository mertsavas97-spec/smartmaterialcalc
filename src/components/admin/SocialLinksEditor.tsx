"use client";

import { useState } from "react";
import type { SocialLink } from "@/lib/cms/types";

type SocialLinksEditorProps = {
  initialLinks: SocialLink[];
};

export function SocialLinksEditor({ initialLinks }: SocialLinksEditorProps) {
  const [links, setLinks] = useState<SocialLink[]>(initialLinks);

  function updateLink(index: number, field: keyof SocialLink, value: string) {
    setLinks((current) =>
      current.map((link, i) => (i === index ? { ...link, [field]: value } : link))
    );
  }

  function addLink() {
    setLinks((current) => [...current, { platform: "", url: "" }]);
  }

  function removeLink(index: number) {
    setLinks((current) => current.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <input type="hidden" name="socialLinksJson" value={JSON.stringify(links)} readOnly />
      {links.map((link, index) => (
        <div
          key={index}
          className="grid gap-3 rounded-[var(--radius-lg)] border border-card-border bg-white p-4 md:grid-cols-2"
        >
          <label className="block text-sm">
            <span className="font-medium">Platform</span>
            <input
              value={link.platform}
              onChange={(event) => updateLink(index, "platform", event.target.value)}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">URL</span>
            <input
              value={link.url}
              onChange={(event) => updateLink(index, "url", event.target.value)}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={() => removeLink(index)}
              className="text-xs text-red-700 hover:underline"
            >
              Remove link
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addLink}
        className="rounded-[var(--radius-sm)] border border-card-border px-4 py-2 text-sm font-medium hover:bg-[#fafafa]"
      >
        Add social link
      </button>
    </div>
  );
}
