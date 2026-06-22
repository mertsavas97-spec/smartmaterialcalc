export const CALCULATOR_INPUT_CLASSNAME =
  "mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

export function parseNumber(value: string, fallback: number): number {
  const parsed = parseFloat(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : fallback;
}

export function roundUpToTenth(value: number): number {
  return Math.ceil(value * 10) / 10;
}

export function inchesToFeet(inches: number): number {
  return inches / 12;
}

export function volumeCubicFeet(
  lengthFeet: number,
  widthFeet: number,
  depthFeet: number
): number {
  return lengthFeet * widthFeet * depthFeet;
}

export function cubicFeetToCubicYards(cubicFeet: number): number {
  return cubicFeet / 27;
}

export function applyWasteMultiplier(value: number, wastePercent: number): number {
  return value * (1 + wastePercent / 100);
}
