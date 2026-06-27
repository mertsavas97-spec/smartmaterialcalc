"use client";

import { Button } from "@/components/ui/Button";

type CalculatorFormActionsProps = {
  onReset: () => void;
};

export function CalculatorFormActions({ onReset }: CalculatorFormActionsProps) {
  return (
    <div className="flex items-center gap-4 pt-2">
      <Button
        variant="cta"
        size="lg"
        type="submit"
        className="flex-1 sm:flex-none"
      >
        Calculate
      </Button>
      <button
        type="button"
        onClick={onReset}
        className="rounded-[var(--radius-sm)] text-sm font-medium text-text-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Reset
      </button>
    </div>
  );
}
