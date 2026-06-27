import type { AnalyticsDateRange } from "./types";
import { ANALYTICS_RANGE_LABELS } from "./types";

export function parseAnalyticsDateRange(value: string | undefined): AnalyticsDateRange {
  if (value === "today" || value === "7d" || value === "28d" || value === "90d") {
    return value;
  }
  return "7d";
}

export function getGaDateRange(range: AnalyticsDateRange): {
  startDate: string;
  endDate: string;
} {
  switch (range) {
    case "today":
      return { startDate: "today", endDate: "today" };
    case "7d":
      return { startDate: "7daysAgo", endDate: "today" };
    case "28d":
      return { startDate: "28daysAgo", endDate: "today" };
    case "90d":
      return { startDate: "90daysAgo", endDate: "today" };
  }
}

export function formatCompactNumber(value: number): string {
  return new Intl.NumberFormat("en-US", {
    notation: value >= 10_000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${(value * 100).toFixed(1)}%`;
}

export function formatDuration(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds <= 0) {
    return "0s";
  }

  const totalSeconds = Math.round(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  if (minutes === 0) {
    return `${remainingSeconds}s`;
  }

  if (minutes < 60) {
    return `${minutes}m ${remainingSeconds}s`;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours}h ${remainingMinutes}m`;
}

export function getRangeLabel(range: AnalyticsDateRange): string {
  return ANALYTICS_RANGE_LABELS[range];
}

export function formatPagePath(path: string): string {
  if (!path || path === "(not set)") {
    return "Unknown";
  }
  return path.length > 48 ? `${path.slice(0, 45)}...` : path;
}
