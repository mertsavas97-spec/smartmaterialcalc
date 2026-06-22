import {
  applyWasteMultiplier,
  cubicFeetToCubicYards,
  inchesToFeet,
  roundUpToTenth,
  volumeCubicFeet,
} from "./calculator-utils";

export type GravelCalculatorInputs = {
  length: number;
  width: number;
  depthInches: number;
  densityTonsPerCubicYard: number;
  wastePercent: number;
};

export type GravelCalculatorResults = {
  cubicFeet: number;
  cubicYards: number;
  tons: number;
  tonsWithWaste: number;
  recommendedTons: number;
};

export function calculateGravel(
  inputs: GravelCalculatorInputs
): GravelCalculatorResults {
  const depthFeet = inchesToFeet(inputs.depthInches);
  const cubicFeet = volumeCubicFeet(inputs.length, inputs.width, depthFeet);
  const cubicYards = cubicFeetToCubicYards(cubicFeet);
  const tons = cubicYards * inputs.densityTonsPerCubicYard;
  const tonsWithWaste = applyWasteMultiplier(tons, inputs.wastePercent);
  const recommendedTons = roundUpToTenth(tonsWithWaste);

  return {
    cubicFeet,
    cubicYards,
    tons,
    tonsWithWaste,
    recommendedTons,
  };
}

export const DEFAULT_GRAVEL_INPUTS: GravelCalculatorInputs = {
  length: 20,
  width: 10,
  depthInches: 3,
  densityTonsPerCubicYard: 1.4,
  wastePercent: 10,
};
