import Link from "next/link";
import {
  ANALYTICS_DATE_RANGES,
  ANALYTICS_RANGE_LABELS,
  type AnalyticsDateRange,
} from "@/lib/google-analytics/types";

type AnalyticsDateFilterProps = {
  activeRange: AnalyticsDateRange;
};

export function AnalyticsDateFilter({ activeRange }: AnalyticsDateFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {ANALYTICS_DATE_RANGES.map((range) => {
        const isActive = range === activeRange;
        return (
          <Link
            key={range}
            href={`/admin/analytics?range=${range}`}
            className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-primary text-white"
                : "border border-card-border bg-white text-text-secondary hover:text-text-primary"
            }`}
          >
            {ANALYTICS_RANGE_LABELS[range]}
          </Link>
        );
      })}
    </div>
  );
}
