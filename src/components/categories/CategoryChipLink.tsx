"use client";

import Link from "next/link";
import { trackCategoryNavigation } from "@/lib/analytics";

type CategoryChipLinkProps = {
  href: string;
  categorySlug?: string;
  isActive?: boolean;
  children: React.ReactNode;
};

export function CategoryChipLink({
  href,
  categorySlug,
  isActive,
  children,
}: CategoryChipLinkProps) {
  function handleClick() {
    if (categorySlug) {
      trackCategoryNavigation(categorySlug);
    }
  }

  return (
    <Link
      href={href}
      onClick={handleClick}
      className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
        isActive
          ? "border-primary bg-primary text-white"
          : "border-card-border bg-white text-text-secondary hover:border-primary hover:text-primary"
      }`}
      aria-current={isActive ? "page" : undefined}
    >
      {children}
    </Link>
  );
}
