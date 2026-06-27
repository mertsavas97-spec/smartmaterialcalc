import {
  formatCompactNumber,
  formatDuration,
  formatPercent,
} from "@/lib/google-analytics/format";
import type { AnalyticsSummary } from "@/lib/google-analytics/types";

type AnalyticsSummaryCardsProps = {
  summary: AnalyticsSummary;
  realtimeUsers: number;
};

const cards = [
  { key: "users", label: "Users" },
  { key: "sessions", label: "Sessions" },
  { key: "views", label: "Views" },
  { key: "engagement", label: "Engagement" },
  { key: "avgTime", label: "Avg. engagement time" },
  { key: "realtime", label: "Realtime users" },
] as const;

export function AnalyticsSummaryCards({
  summary,
  realtimeUsers,
}: AnalyticsSummaryCardsProps) {
  const values: Record<(typeof cards)[number]["key"], string> = {
    users: formatCompactNumber(summary.users),
    sessions: formatCompactNumber(summary.sessions),
    views: formatCompactNumber(summary.views),
    engagement: formatPercent(summary.engagementRate),
    avgTime: formatDuration(summary.averageEngagementTimeSeconds),
    realtime: formatCompactNumber(realtimeUsers),
  };

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
      {cards.map((card) => (
        <div
          key={card.key}
          className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4"
        >
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            {card.label}
          </p>
          <p className="mt-2 text-2xl font-bold text-text-primary">{values[card.key]}</p>
        </div>
      ))}
    </div>
  );
}
