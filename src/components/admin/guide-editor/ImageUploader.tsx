"use client";

import { useRef, useState } from "react";
import { uploadGuideImageAction } from "@/lib/admin/guide-actions";

type ImageUploaderProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  slug: string;
  hint?: string;
};

export function ImageUploader({
  label,
  value,
  onChange,
  slug,
  hint,
}: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleFiles(files: FileList | null) {
    const file = files?.[0];
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("slug", slug);

    const result = await uploadGuideImageAction(formData);
    setUploading(false);

    if (!result.ok || !result.url) {
      setError(result.error ?? "Upload failed.");
      return;
    }

    onChange(result.url);
  }

  return (
    <div className="space-y-2">
      <span className="block text-sm font-medium">{label}</span>
      <div
        className="rounded-[var(--radius-lg)] border border-dashed border-card-border bg-[#fafafa] p-4"
        onDragOver={(event) => {
          event.preventDefault();
        }}
        onDrop={(event) => {
          event.preventDefault();
          void handleFiles(event.dataTransfer.files);
        }}
      >
        {value ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={value}
            alt=""
            className="mb-3 max-h-40 rounded-[var(--radius-sm)] border border-card-border object-cover"
          />
        ) : null}
        <input
          ref={inputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp,image/gif"
          className="hidden"
          onChange={(event) => void handleFiles(event.target.files)}
        />
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="rounded-[var(--radius-sm)] border border-card-border bg-white px-3 py-2 text-sm hover:bg-[#f4f4f4]"
          >
            {uploading ? "Uploading..." : "Upload image"}
          </button>
          <input
            value={value}
            onChange={(event) => onChange(event.target.value)}
            placeholder="/images/guides/example.webp"
            className="min-w-0 flex-1 rounded-[var(--radius-sm)] border border-card-border px-3 py-2 font-mono text-xs"
          />
        </div>
        <p className="mt-2 text-xs text-text-muted">
          {hint ?? "Drag and drop an image here, or paste a path/URL."}
        </p>
        {error ? <p className="mt-2 text-xs text-red-700">{error}</p> : null}
      </div>
    </div>
  );
}
