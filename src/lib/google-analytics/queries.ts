import type { protos } from "@google-analytics/data";
import { getAnalyticsClient, getAnalyticsPropertyName } from "./client";
import { getGaDateRange, getRangeLabel } from "./format";
import { isGoogleAnalyticsConfigured } from "./env";
import type {
  AnalyticsDashboardData,
  AnalyticsDateRange,
  AnalyticsMetricRow,
  AnalyticsSummary,
  AnalyticsTrendPoint,
} from "./types";

type RunReportResponse = protos.google.analytics.data.v1beta.IRunReportResponse;
type Row = protos.google.analytics.data.v1beta.IRow;

function parseMetric(row: Row | undefined, index: number): number {
  const value = row?.metricValues?.[index]?.value;
  const parsed = Number(value ?? 0);
  return Number.isFinite(parsed) ? parsed : 0;
}

function parseDimension(row: Row | undefined, index: number): string {
  return row?.dimensionValues?.[index]?.value?.trim() || "(not set)";
}

function rowsToMetricRows(
  response: RunReportResponse | undefined,
  labelIndex = 0,
  valueIndex = 0
): AnalyticsMetricRow[] {
  return (response?.rows ?? []).map((row) => ({
    label: parseDimension(row, labelIndex),
    value: parseMetric(row, valueIndex),
  }));
}

function emptySummary(): AnalyticsSummary {
  return {
    users: 0,
    sessions: 0,
    views: 0,
    engagementRate: 0,
    averageEngagementTimeSeconds: 0,
  };
}

function emptyDashboard(range: AnalyticsDateRange): AnalyticsDashboardData {
  return {
    configured: false,
    range,
    rangeLabel: getRangeLabel(range),
    summary: emptySummary(),
    realtimeUsers: 0,
    dailyTrend: [],
    topPages: [],
    topGuides: [],
    topCalculators: [],
    landingPages: [],
    trafficSources: [],
    countries: [],
    devices: [],
    browsers: [],
  };
}

async function runReport(
  request: protos.google.analytics.data.v1beta.IRunReportRequest
): Promise<RunReportResponse> {
  const client = getAnalyticsClient();
  const [response] = await client.runReport({
    property: getAnalyticsPropertyName(),
    ...request,
  });
  return response;
}

async function fetchSummary(range: AnalyticsDateRange): Promise<AnalyticsSummary> {
  const { startDate, endDate } = getGaDateRange(range);
  const response = await runReport({
    dateRanges: [{ startDate, endDate }],
    metrics: [
      { name: "activeUsers" },
      { name: "sessions" },
      { name: "screenPageViews" },
      { name: "engagementRate" },
      { name: "userEngagementDuration" },
    ],
  });

  const row = response.rows?.[0];
  const users = parseMetric(row, 0);
  const engagementDuration = parseMetric(row, 4);

  return {
    users,
    sessions: parseMetric(row, 1),
    views: parseMetric(row, 2),
    engagementRate: parseMetric(row, 3),
    averageEngagementTimeSeconds: users > 0 ? engagementDuration / users : 0,
  };
}

async function fetchDailyTrend(range: AnalyticsDateRange): Promise<AnalyticsTrendPoint[]> {
  const { startDate, endDate } = getGaDateRange(range);
  const response = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "date" }],
    metrics: [
      { name: "activeUsers" },
      { name: "sessions" },
      { name: "screenPageViews" },
    ],
    orderBys: [{ dimension: { dimensionName: "date" } }],
  });

  return (response.rows ?? []).map((row) => {
    const rawDate = parseDimension(row, 0);
    const formattedDate =
      rawDate.length === 8
        ? `${rawDate.slice(4, 6)}/${rawDate.slice(6, 8)}`
        : rawDate;

    return {
      date: formattedDate,
      users: parseMetric(row, 0),
      sessions: parseMetric(row, 1),
      views: parseMetric(row, 2),
    };
  });
}

async function fetchTopDimensionReport(
  range: AnalyticsDateRange,
  dimension: string,
  limit = 10,
  dimensionFilter?: protos.google.analytics.data.v1beta.IFilterExpression
): Promise<AnalyticsMetricRow[]> {
  const { startDate, endDate } = getGaDateRange(range);
  const response = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: dimension }],
    metrics: [{ name: "screenPageViews" }],
    dimensionFilter,
    orderBys: [{ metric: { metricName: "screenPageViews" }, desc: true }],
    limit: String(limit),
  });

  return rowsToMetricRows(response);
}

async function fetchTrafficSources(range: AnalyticsDateRange): Promise<AnalyticsMetricRow[]> {
  const { startDate, endDate } = getGaDateRange(range);
  const response = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "sessionDefaultChannelGroup" }],
    metrics: [{ name: "sessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: "10",
  });

  return rowsToMetricRows(response);
}

async function fetchLandingPages(range: AnalyticsDateRange): Promise<AnalyticsMetricRow[]> {
  const { startDate, endDate } = getGaDateRange(range);
  const response = await runReport({
    dateRanges: [{ startDate, endDate }],
    dimensions: [{ name: "landingPagePlusQueryString" }],
    metrics: [{ name: "sessions" }],
    orderBys: [{ metric: { metricName: "sessions" }, desc: true }],
    limit: "10",
  });

  return rowsToMetricRows(response);
}

async function fetchRealtimeUsers(): Promise<number> {
  const client = getAnalyticsClient();
  const [response] = await client.runRealtimeReport({
    property: getAnalyticsPropertyName(),
    metrics: [{ name: "activeUsers" }],
  });

  return parseMetric(response.rows?.[0], 0);
}

function pathPrefixFilter(prefix: string): protos.google.analytics.data.v1beta.IFilterExpression {
  return {
    filter: {
      fieldName: "pagePath",
      stringFilter: {
        matchType: "BEGINS_WITH",
        value: prefix,
      },
    },
  };
}

export async function getAnalyticsDashboard(
  range: AnalyticsDateRange
): Promise<AnalyticsDashboardData> {
  if (!isGoogleAnalyticsConfigured()) {
    return {
      ...emptyDashboard(range),
      error: "Google Analytics is not configured. Add GA_PROPERTY_ID, GA_CLIENT_EMAIL, and GA_PRIVATE_KEY.",
    };
  }

  try {
    const [
      summary,
      dailyTrend,
      topPages,
      topGuides,
      topCalculators,
      landingPages,
      trafficSources,
      countries,
      devices,
      browsers,
      realtimeUsers,
    ] = await Promise.all([
      fetchSummary(range),
      fetchDailyTrend(range),
      fetchTopDimensionReport(range, "pagePath"),
      fetchTopDimensionReport(range, "pagePath", 10, pathPrefixFilter("/guides/")),
      fetchTopDimensionReport(range, "pagePath", 10, pathPrefixFilter("/calculators/")),
      fetchLandingPages(range),
      fetchTrafficSources(range),
      fetchTopDimensionReport(range, "country", 10),
      fetchTopDimensionReport(range, "deviceCategory", 10),
      fetchTopDimensionReport(range, "browser", 10),
      fetchRealtimeUsers(),
    ]);

    return {
      configured: true,
      range,
      rangeLabel: getRangeLabel(range),
      summary,
      realtimeUsers,
      dailyTrend,
      topPages,
      topGuides,
      topCalculators,
      landingPages,
      trafficSources,
      countries,
      devices,
      browsers,
    };
  } catch (error) {
    return {
      ...emptyDashboard(range),
      configured: true,
      error:
        error instanceof Error
          ? error.message
          : "Failed to load Google Analytics data.",
    };
  }
}
