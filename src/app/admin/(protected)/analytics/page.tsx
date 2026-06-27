import type { Metadata } from "next";
import { AnalyticsCharts } from "@/components/admin/analytics/AnalyticsCharts";
import { AnalyticsDateFilter } from "@/components/admin/analytics/AnalyticsDateFilter";
import { AnalyticsSummaryCards } from "@/components/admin/analytics/AnalyticsSummaryCards";
import { parseAnalyticsDateRange } from "@/lib/google-analytics/format";
import { getAnalyticsDashboard } from "@/lib/google-analytics/queries";
import { isGoogleAnalyticsConfigured } from "@/lib/google-analytics/env";

export const metadata: Metadata = {
  title: "Analytics",
};

type PageProps = {
  searchParams: Promise<{ range?: string }>;
};

export default async function AdminAnalyticsPage({ searchParams }: PageProps) {
  const { range: rangeParam } = await searchParams;
  const range = parseAnalyticsDateRange(rangeParam);
  const data = await getAnalyticsDashboard(range);

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold">Analytics</h1>
          <p className="mt-1 text-sm text-text-secondary">
            Google Analytics overview for {data.rangeLabel.toLowerCase()}.
          </p>
        </div>
        <AnalyticsDateFilter activeRange={range} />
      </div>

      {!isGoogleAnalyticsConfigured() ? (
        <div className="mt-6 rounded-[var(--radius-lg)] border border-card-border bg-white p-6">
          <h2 className="text-lg font-semibold">Google Analytics not configured</h2>
          <p className="mt-2 text-sm text-text-secondary">
            Add server-only environment variables to enable the dashboard:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-text-secondary">
            <li><code>GA_PROPERTY_ID</code> — GA4 property numeric ID</li>
            <li><code>GA_CLIENT_EMAIL</code> — service account email</li>
            <li><code>GA_PRIVATE_KEY</code> — service account private key</li>
          </ul>
          <p className="mt-3 text-xs text-text-muted">
            Grant the service account Viewer access on the GA4 property. Credentials stay
            server-side only.
          </p>
        </div>
      ) : null}

      {data.error ? (
        <div className="mt-6 rounded-[var(--radius-lg)] border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          {data.error}
        </div>
      ) : null}

      {data.configured && !data.error ? (
        <div className="mt-6 space-y-6">
          <AnalyticsSummaryCards
            summary={data.summary}
            realtimeUsers={data.realtimeUsers}
          />
          <AnalyticsCharts data={data} />
        </div>
      ) : null}
    </div>
  );
}
