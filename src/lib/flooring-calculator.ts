import { applyWasteMultiplier } from "./calculator-utils";

export type FlooringCalculatorInputs = {
  roomLength: number;
  roomWidth: number;
  wastePercent: number;
  boxCoverageSqFt: number;
};

export type FlooringCalculatorResults = {
  floorAreaSqFt: number;
  areaWithWasteSqFt: number;
  boxesNeeded: number;
  recommendedBoxes: number;
};

export function calculateFlooring(
  inputs: FlooringCalculatorInputs
): FlooringCalculatorResults {
  const floorAreaSqFt = inputs.roomLength * inputs.roomWidth;
  const areaWithWasteSqFt = applyWasteMultiplier(
    floorAreaSqFt,
    inputs.wastePercent
  );
  const boxesNeeded =
    inputs.boxCoverageSqFt > 0
      ? areaWithWasteSqFt / inputs.boxCoverageSqFt
      : 0;
  const recommendedBoxes = Math.ceil(boxesNeeded);

  return {
    floorAreaSqFt,
    areaWithWasteSqFt,
    boxesNeeded,
    recommendedBoxes,
  };
}

export const DEFAULT_FLOORING_INPUTS: FlooringCalculatorInputs = {
  roomLength: 12,
  roomWidth: 10,
  wastePercent: 10,
  boxCoverageSqFt: 20,
};
