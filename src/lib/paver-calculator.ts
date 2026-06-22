import { applyWasteMultiplier } from "./calculator-utils";

export type PaverCalculatorInputs = {
  patioLength: number;
  patioWidth: number;
  paverLengthInches: number;
  paverWidthInches: number;
  wastePercent: number;
};

export type PaverCalculatorResults = {
  patioAreaSqFt: number;
  paverAreaSqFt: number;
  paversNeeded: number;
  recommendedPavers: number;
};

export function calculatePaver(
  inputs: PaverCalculatorInputs
): PaverCalculatorResults {
  const patioAreaSqFt = inputs.patioLength * inputs.patioWidth;
  const paverAreaSqFt =
    (inputs.paverLengthInches * inputs.paverWidthInches) / 144;
  const paversNeeded =
    paverAreaSqFt > 0 ? patioAreaSqFt / paverAreaSqFt : 0;
  const recommendedPavers = Math.ceil(
    applyWasteMultiplier(paversNeeded, inputs.wastePercent)
  );

  return {
    patioAreaSqFt,
    paverAreaSqFt,
    paversNeeded,
    recommendedPavers,
  };
}

export const DEFAULT_PAVER_INPUTS: PaverCalculatorInputs = {
  patioLength: 12,
  patioWidth: 10,
  paverLengthInches: 8,
  paverWidthInches: 4,
  wastePercent: 10,
};
