import {
  applyWasteMultiplier,
  cubicFeetToCubicYards,
  inchesToFeet,
  roundUpToTenth,
  volumeCubicFeet,
} from "./calculator-utils";

export type ConcreteCalculatorInputs = {
  length: number;
  width: number;
  thicknessInches: number;
  wastePercent: number;
};

export type ConcreteCalculatorResults = {
  cubicFeet: number;
  cubicYards: number;
  cubicYardsWithWaste: number;
  recommendedOrder: number;
};

export function calculateConcrete(
  inputs: ConcreteCalculatorInputs
): ConcreteCalculatorResults {
  const thicknessFeet = inchesToFeet(inputs.thicknessInches);
  const cubicFeet = volumeCubicFeet(inputs.length, inputs.width, thicknessFeet);
  const cubicYards = cubicFeetToCubicYards(cubicFeet);
  const cubicYardsWithWaste = applyWasteMultiplier(
    cubicYards,
    inputs.wastePercent
  );
  const recommendedOrder = roundUpToTenth(cubicYardsWithWaste);

  return {
    cubicFeet,
    cubicYards,
    cubicYardsWithWaste,
    recommendedOrder,
  };
}

export const DEFAULT_CONCRETE_INPUTS: ConcreteCalculatorInputs = {
  length: 20,
  width: 20,
  thicknessInches: 4,
  wastePercent: 10,
};
