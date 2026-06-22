import {
  applyWasteMultiplier,
  cubicFeetToCubicYards,
  inchesToFeet,
  volumeCubicFeet,
} from "./calculator-utils";

export type MulchCalculatorInputs = {
  length: number;
  width: number;
  depthInches: number;
  bagSizeCubicFeet: number;
  wastePercent: number;
};

export type MulchCalculatorResults = {
  cubicFeet: number;
  cubicYards: number;
  bagsNeeded: number;
  recommendedBags: number;
};

export function calculateMulch(
  inputs: MulchCalculatorInputs
): MulchCalculatorResults {
  const depthFeet = inchesToFeet(inputs.depthInches);
  const cubicFeet = volumeCubicFeet(inputs.length, inputs.width, depthFeet);
  const cubicYards = cubicFeetToCubicYards(cubicFeet);
  const bagsNeeded =
    inputs.bagSizeCubicFeet > 0 ? cubicFeet / inputs.bagSizeCubicFeet : 0;
  const recommendedBags = Math.ceil(
    applyWasteMultiplier(bagsNeeded, inputs.wastePercent)
  );

  return {
    cubicFeet,
    cubicYards,
    bagsNeeded,
    recommendedBags,
  };
}

export const DEFAULT_MULCH_INPUTS: MulchCalculatorInputs = {
  length: 12,
  width: 8,
  depthInches: 3,
  bagSizeCubicFeet: 2,
  wastePercent: 10,
};
