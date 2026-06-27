export function isGoogleAnalyticsConfigured(): boolean {
  return Boolean(
    process.env.GA_PROPERTY_ID &&
      process.env.GA_CLIENT_EMAIL &&
      process.env.GA_PRIVATE_KEY
  );
}

export function getGaPropertyId(): string {
  const propertyId = process.env.GA_PROPERTY_ID;
  if (!propertyId) {
    throw new Error("GA_PROPERTY_ID is not configured.");
  }
  return propertyId.replace(/^properties\//, "");
}

export function getGaCredentials() {
  const clientEmail = process.env.GA_CLIENT_EMAIL;
  const privateKey = process.env.GA_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!clientEmail || !privateKey) {
    throw new Error("Google Analytics service account credentials are not configured.");
  }

  return { clientEmail, privateKey };
}
