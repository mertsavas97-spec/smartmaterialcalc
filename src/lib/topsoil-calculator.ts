import {
  applyWasteMultiplier,
  cubicFeetToCubicYards,
  inchesToFeet,
  roundUpToTenth,
  volumeCubicFeet,
} from "./calculator-utils";

export type TopsoilCalculatorInputs = {
  length: number;
  width: number;
  depthInches: number;
  wastePercent: number;
};

export type TopsoilCalculatorResults = {
  cubicFeet: number;
  cubicYards: number;
  cubicYardsWithWaste: number;
  recommendedCubicYards: number;
};

export function calculateTopsoil(
  inputs: TopsoilCalculatorInputs
): TopsoilCalculatorResults {
  const depthFeet = inchesToFeet(inputs.depthInches);
  const cubicFeet = volumeCubicFeet(inputs.length, inputs.width, depthFeet);
  const cubicYards = cubicFeetToCubicYards(cubicFeet);
  const cubicYardsWithWaste = applyWasteMultiplier(
    cubicYards,
    inputs.wastePercent
  );
  const recommendedCubicYards = roundUpToTenth(cubicYardsWithWaste);

  return {
    cubicFeet,
    cubicYards,
    cubicYardsWithWaste,
    recommendedCubicYards,
  };
}

export const DEFAULT_TOPSOIL_INPUTS: TopsoilCalculatorInputs = {
  length: 12,
  width: 8,
  depthInches: 6,
  wastePercent: 10,
};
