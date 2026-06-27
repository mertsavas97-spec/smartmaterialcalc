"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { formatPagePath } from "@/lib/google-analytics/format";
import type {
  AnalyticsDashboardData,
  AnalyticsMetricRow,
} from "@/lib/google-analytics/types";

const CHART_COLORS = ["#2e7d32", "#81c784", "#1b5e20", "#ff6f00", "#5c5c5c"];

type AnalyticsChartsProps = {
  data: AnalyticsDashboardData;
};

function MetricBarChart({
  title,
  rows,
  valueLabel,
  formatLabel = formatPagePath,
}: {
  title: string;
  rows: AnalyticsMetricRow[];
  valueLabel: string;
  formatLabel?: (value: string) => string;
}) {
  const chartData = rows.map((row) => ({
    name: formatLabel(row.label),
    value: row.value,
  }));

  return (
    <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4 sm:p-6">
      <h2 className="text-base font-semibold text-text-primary">{title}</h2>
      {chartData.length === 0 ? (
        <p className="mt-4 text-sm text-text-muted">No data for this period.</p>
      ) : (
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={chartData} layout="vertical" margin={{ left: 8, right: 8 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} />
              <XAxis type="number" tickLine={false} axisLine={false} fontSize={12} />
              <YAxis
                type="category"
                dataKey="name"
                width={120}
                tickLine={false}
                axisLine={false}
                fontSize={11}
              />
              <Tooltip formatter={(value) => [value, valueLabel]} />
              <Bar dataKey="value" fill="#2e7d32" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}

function MetricPieChart({
  title,
  rows,
}: {
  title: string;
  rows: AnalyticsMetricRow[];
}) {
  const chartData = rows.map((row, index) => ({
    name: row.label,
    value: row.value,
    fill: CHART_COLORS[index % CHART_COLORS.length],
  }));

  return (
    <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4 sm:p-6">
      <h2 className="text-base font-semibold text-text-primary">{title}</h2>
      {chartData.length === 0 ? (
        <p className="mt-4 text-sm text-text-muted">No data for this period.</p>
      ) : (
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                innerRadius={55}
                outerRadius={95}
                paddingAngle={2}
              >
                {chartData.map((entry) => (
                  <Cell key={entry.name} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </section>
  );
}

export function AnalyticsCharts({ data }: AnalyticsChartsProps) {
  return (
    <div className="space-y-6">
      <section className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4 sm:p-6">
        <h2 className="text-base font-semibold text-text-primary">Traffic trend</h2>
        {data.dailyTrend.length === 0 ? (
          <p className="mt-4 text-sm text-text-muted">No trend data for this period.</p>
        ) : (
          <div className="mt-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.dailyTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" tickLine={false} axisLine={false} fontSize={12} />
                <YAxis tickLine={false} axisLine={false} fontSize={12} />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#2e7d32"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="sessions"
                  stroke="#ff6f00"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="views"
                  stroke="#1b5e20"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </section>

      <div className="grid gap-6 xl:grid-cols-2">
        <MetricBarChart title="Top pages" rows={data.topPages} valueLabel="Views" />
        <MetricBarChart title="Top guides" rows={data.topGuides} valueLabel="Views" />
        <MetricBarChart
          title="Top calculators"
          rows={data.topCalculators}
          valueLabel="Views"
        />
        <MetricBarChart
          title="Landing pages"
          rows={data.landingPages}
          valueLabel="Sessions"
        />
        <MetricBarChart
          title="Traffic sources"
          rows={data.trafficSources}
          valueLabel="Sessions"
          formatLabel={(value) => value}
        />
        <MetricBarChart
          title="Countries"
          rows={data.countries}
          valueLabel="Views"
          formatLabel={(value) => value}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <MetricPieChart title="Devices" rows={data.devices} />
        <MetricPieChart title="Browsers" rows={data.browsers} />
      </div>
    </div>
  );
}
