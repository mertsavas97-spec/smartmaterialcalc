import { applyWasteMultiplier, roundUpToTenth } from "./calculator-utils";

export type RoofingCalculatorInputs = {
  roofLength: number;
  roofWidth: number;
  pitchMultiplier: number;
  wastePercent: number;
};

export type RoofingCalculatorResults = {
  flatAreaSqFt: number;
  adjustedRoofAreaSqFt: number;
  squares: number;
  squaresWithWaste: number;
  recommendedSquares: number;
};

export function calculateRoofing(
  inputs: RoofingCalculatorInputs
): RoofingCalculatorResults {
  const flatAreaSqFt = inputs.roofLength * inputs.roofWidth;
  const adjustedRoofAreaSqFt = flatAreaSqFt * inputs.pitchMultiplier;
  const squares = adjustedRoofAreaSqFt / 100;
  const squaresWithWaste = applyWasteMultiplier(squares, inputs.wastePercent);
  const recommendedSquares = roundUpToTenth(squaresWithWaste);

  return {
    flatAreaSqFt,
    adjustedRoofAreaSqFt,
    squares,
    squaresWithWaste,
    recommendedSquares,
  };
}

export const DEFAULT_ROOFING_INPUTS: RoofingCalculatorInputs = {
  roofLength: 40,
  roofWidth: 25,
  pitchMultiplier: 1.12,
  wastePercent: 10,
};
