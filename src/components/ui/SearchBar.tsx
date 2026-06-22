"use client";

import { Search } from "lucide-react";
import { trackSearch } from "@/lib/analytics";

type SearchBarProps = {
  placeholder?: string;
  className?: string;
  id?: string;
  action?: string;
  defaultValue?: string;
};

export function SearchBar({
  placeholder = "Search calculators...",
  className = "",
  id = "search",
  action = "/calculators",
  defaultValue = "",
}: SearchBarProps) {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    const formData = new FormData(event.currentTarget);
    const query = formData.get("q");

    if (typeof query === "string" && query.trim()) {
      trackSearch(query);
    }
  }

  return (
    <form
      action={action}
      method="get"
      className={`relative ${className}`}
      onSubmit={handleSubmit}
    >
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted"
        aria-hidden="true"
      />
      <input
        id={id}
        name="q"
        type="search"
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="w-full rounded-[var(--radius-sm)] border border-card-border bg-white py-2.5 pl-10 pr-4 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        aria-label="Search calculators"
      />
    </form>
  );
}
