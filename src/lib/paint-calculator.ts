export type PaintCalculatorInputs = {
  roomWidth: number;
  roomLength: number;
  ceilingHeight: number;
  coats: number;
  doors: number;
  windows: number;
  coveragePerGallon: number;
  overagePercent: number;
};

export type PaintCalculatorResults = {
  wallArea: number;
  doorDeduction: number;
  windowDeduction: number;
  netWallArea: number;
  totalPaintableArea: number;
  paintNeededGallons: number;
  recommendedPurchaseGallons: number;
};

export function calculatePaint(
  inputs: PaintCalculatorInputs
): PaintCalculatorResults {
  const wallArea =
    2 * (inputs.roomWidth + inputs.roomLength) * inputs.ceilingHeight;
  const doorDeduction = inputs.doors * 20;
  const windowDeduction = inputs.windows * 15;
  const netWallArea = Math.max(wallArea - doorDeduction - windowDeduction, 0);
  const totalPaintableArea = netWallArea * inputs.coats;
  const paintNeededGallons =
    inputs.coveragePerGallon > 0
      ? totalPaintableArea / inputs.coveragePerGallon
      : 0;
  const recommendedPurchaseGallons = Math.ceil(
    paintNeededGallons * (1 + inputs.overagePercent / 100)
  );

  return {
    wallArea,
    doorDeduction,
    windowDeduction,
    netWallArea,
    totalPaintableArea,
    paintNeededGallons,
    recommendedPurchaseGallons,
  };
}

export const DEFAULT_PAINT_INPUTS: PaintCalculatorInputs = {
  roomWidth: 12,
  roomLength: 14,
  ceilingHeight: 8,
  coats: 2,
  doors: 1,
  windows: 2,
  coveragePerGallon: 375,
  overagePercent: 15,
};
