import { applyWasteMultiplier } from "./calculator-utils";

export type DrywallCalculatorInputs = {
  roomLength: number;
  roomWidth: number;
  wallHeight: number;
  sheetWidth: number;
  sheetHeight: number;
  wastePercent: number;
};

export type DrywallCalculatorResults = {
  wallAreaSqFt: number;
  sheetAreaSqFt: number;
  sheetsNeeded: number;
  recommendedSheets: number;
};

export function calculateDrywall(
  inputs: DrywallCalculatorInputs
): DrywallCalculatorResults {
  const wallAreaSqFt =
    2 * (inputs.roomLength + inputs.roomWidth) * inputs.wallHeight;
  const sheetAreaSqFt = inputs.sheetWidth * inputs.sheetHeight;
  const sheetsNeeded =
    sheetAreaSqFt > 0 ? wallAreaSqFt / sheetAreaSqFt : 0;
  const recommendedSheets = Math.ceil(
    applyWasteMultiplier(sheetsNeeded, inputs.wastePercent)
  );

  return {
    wallAreaSqFt,
    sheetAreaSqFt,
    sheetsNeeded,
    recommendedSheets,
  };
}

export const DEFAULT_DRYWALL_INPUTS: DrywallCalculatorInputs = {
  roomLength: 12,
  roomWidth: 10,
  wallHeight: 8,
  sheetWidth: 4,
  sheetHeight: 8,
  wastePercent: 10,
};
