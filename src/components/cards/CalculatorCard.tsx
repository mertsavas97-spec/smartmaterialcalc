import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Calculator } from "@/data/calculators";

type CalculatorCardProps = {
  calculator: Calculator;
};

export function CalculatorCard({ calculator }: CalculatorCardProps) {
  return (
    <Link
      href={`/calculators/${calculator.slug}`}
      className="group flex flex-col rounded-[var(--radius-lg)] border border-card-border bg-white p-5 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <span className="text-2xl" aria-hidden="true">
        {calculator.icon}
      </span>
      <h3 className="mt-3 text-base font-semibold text-text-primary group-hover:text-primary">
        {calculator.title}
      </h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-text-secondary">
        {calculator.shortDescription}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Calculate
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
