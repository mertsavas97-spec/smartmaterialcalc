import { type ReactNode } from "react";

type CalculatorResultCardProps = {
  label: string;
  value: ReactNode;
  highlight?: boolean;
  subtext?: string;
};

export function CalculatorResultCard({
  label,
  value,
  highlight = false,
  subtext,
}: CalculatorResultCardProps) {
  return (
    <div
      className={`rounded-[var(--radius-sm)] p-4 ${
        highlight
          ? "bg-primary-light"
          : "border border-card-border"
      }`}
    >
      <p className="text-sm text-text-secondary">{label}</p>
      <p
        className={`font-bold text-text-primary ${
          highlight ? "text-3xl text-primary-dark" : "text-2xl"
        }`}
      >
        {value}
      </p>
      {subtext && (
        <p className="mt-1 text-xs text-text-muted">{subtext}</p>
      )}
    </div>
  );
}
