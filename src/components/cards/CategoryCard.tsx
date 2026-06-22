"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/data/categories";
import { trackCategoryNavigation } from "@/lib/analytics";

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      onClick={() => trackCategoryNavigation(category.slug)}
      className="group flex flex-col rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm transition-shadow hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <span className="text-3xl" aria-hidden="true">
        {category.icon}
      </span>
      <h3 className="mt-3 text-lg font-semibold text-text-primary group-hover:text-primary">
        {category.name}
      </h3>
      <p className="mt-1 flex-1 text-sm leading-relaxed text-text-secondary">
        {category.description}
      </p>
      <p className="mt-3 text-xs text-text-muted">
        {category.calculatorCount} calculators
      </p>
      <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
        Browse
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
