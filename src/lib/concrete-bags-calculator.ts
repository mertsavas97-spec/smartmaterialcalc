import {
  applyWasteMultiplier,
  inchesToFeet,
  volumeCubicFeet,
} from "./calculator-utils";

export type ConcreteBagsCalculatorInputs = {
  length: number;
  width: number;
  thicknessInches: number;
  bagYieldCubicFeet: number;
  wastePercent: number;
};

export type ConcreteBagsCalculatorResults = {
  cubicFeet: number;
  cubicFeetWithWaste: number;
  bagsNeeded: number;
  recommendedBags: number;
};

export function calculateConcreteBags(
  inputs: ConcreteBagsCalculatorInputs
): ConcreteBagsCalculatorResults {
  const thicknessFeet = inchesToFeet(inputs.thicknessInches);
  const cubicFeet = volumeCubicFeet(
    inputs.length,
    inputs.width,
    thicknessFeet
  );
  const cubicFeetWithWaste = applyWasteMultiplier(
    cubicFeet,
    inputs.wastePercent
  );
  const bagsNeeded =
    inputs.bagYieldCubicFeet > 0
      ? cubicFeetWithWaste / inputs.bagYieldCubicFeet
      : 0;
  const recommendedBags = Math.ceil(bagsNeeded);

  return {
    cubicFeet,
    cubicFeetWithWaste,
    bagsNeeded,
    recommendedBags,
  };
}

export const DEFAULT_CONCRETE_BAGS_INPUTS: ConcreteBagsCalculatorInputs = {
  length: 10,
  width: 10,
  thicknessInches: 4,
  bagYieldCubicFeet: 0.45,
  wastePercent: 10,
};
