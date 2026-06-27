import { BetaAnalyticsDataClient } from "@google-analytics/data";
import { getGaCredentials, getGaPropertyId } from "./env";

let analyticsClient: BetaAnalyticsDataClient | null = null;

export function getAnalyticsClient(): BetaAnalyticsDataClient {
  if (!analyticsClient) {
    const { clientEmail, privateKey } = getGaCredentials();
    analyticsClient = new BetaAnalyticsDataClient({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
    });
  }

  return analyticsClient;
}

export function getAnalyticsPropertyName(): string {
  return `properties/${getGaPropertyId()}`;
}
