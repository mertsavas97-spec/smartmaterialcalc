"use client";

import { useState } from "react";

type CharCountFieldProps = {
  label: string;
  name: string;
  defaultValue: string;
  warningAt?: number;
  rows?: number;
  required?: boolean;
};

export function CharCountField({
  label,
  name,
  defaultValue,
  warningAt,
  rows = 1,
  required = false,
}: CharCountFieldProps) {
  const [value, setValue] = useState(defaultValue);
  const count = value.length;
  const isWarning = warningAt ? count > warningAt : false;
  const InputTag = rows > 1 ? "textarea" : "input";

  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      <InputTag
        name={name}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        required={required}
        rows={rows > 1 ? rows : undefined}
        className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
      />
      <span
        className={`mt-1 block text-xs ${isWarning ? "font-medium text-[#8a4b00]" : "text-text-muted"}`}
      >
        {count} characters
        {isWarning && warningAt ? ` — exceeds recommended ${warningAt}` : ""}
      </span>
    </label>
  );
}
