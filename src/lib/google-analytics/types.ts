export type AnalyticsDateRange = "today" | "7d" | "28d" | "90d";

export type AnalyticsMetricRow = {
  label: string;
  value: number;
};

export type AnalyticsTrendPoint = {
  date: string;
  users: number;
  sessions: number;
  views: number;
};

export type AnalyticsSummary = {
  users: number;
  sessions: number;
  views: number;
  engagementRate: number;
  averageEngagementTimeSeconds: number;
};

export type AnalyticsDashboardData = {
  configured: boolean;
  error?: string;
  range: AnalyticsDateRange;
  rangeLabel: string;
  summary: AnalyticsSummary;
  realtimeUsers: number;
  dailyTrend: AnalyticsTrendPoint[];
  topPages: AnalyticsMetricRow[];
  topGuides: AnalyticsMetricRow[];
  topCalculators: AnalyticsMetricRow[];
  landingPages: AnalyticsMetricRow[];
  trafficSources: AnalyticsMetricRow[];
  countries: AnalyticsMetricRow[];
  devices: AnalyticsMetricRow[];
  browsers: AnalyticsMetricRow[];
};

export const ANALYTICS_DATE_RANGES: AnalyticsDateRange[] = [
  "today",
  "7d",
  "28d",
  "90d",
];

export const ANALYTICS_RANGE_LABELS: Record<AnalyticsDateRange, string> = {
  today: "Today",
  "7d": "Last 7 days",
  "28d": "Last 28 days",
  "90d": "Last 90 days",
};
