export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim() ?? "";

export function hasGaMeasurementId(): boolean {
  return GA_MEASUREMENT_ID.length > 0 && GA_MEASUREMENT_ID.startsWith("G-");
}
