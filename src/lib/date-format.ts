const DISPLAY_LOCALE = "en-US";
const NOON_UTC_SUFFIX = "T12:00:00";

export function parseIsoDate(isoDate: string): Date {
  const normalized = isoDate.includes("T") ? isoDate : `${isoDate}${NOON_UTC_SUFFIX}`;
  return new Date(normalized);
}

export function formatDisplayDate(isoDate: string): string {
  return parseIsoDate(isoDate).toLocaleDateString(DISPLAY_LOCALE, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function formatMonthYear(isoDate: string): string {
  return parseIsoDate(isoDate).toLocaleDateString(DISPLAY_LOCALE, {
    month: "short",
    year: "numeric",
  });
}

export function formatIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export function isoDateToLastModified(isoDate: string): Date {
  return parseIsoDate(isoDate);
}
