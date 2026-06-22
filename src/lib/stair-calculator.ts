export type StairCalculatorInputs = {
  totalRiseInches: number;
  idealRiserHeightInches: number;
  treadDepthInches: number;
};

export type StairCalculatorResults = {
  numberOfRisers: number;
  actualRiserHeightInches: number;
  numberOfTreads: number;
  totalRunInches: number;
  totalRunFeet: number;
};

export function calculateStair(
  inputs: StairCalculatorInputs
): StairCalculatorResults {
  const numberOfRisers =
    inputs.idealRiserHeightInches > 0
      ? Math.ceil(inputs.totalRiseInches / inputs.idealRiserHeightInches)
      : 0;
  const actualRiserHeightInches =
    numberOfRisers > 0 ? inputs.totalRiseInches / numberOfRisers : 0;
  const numberOfTreads = Math.max(numberOfRisers - 1, 0);
  const totalRunInches = numberOfTreads * inputs.treadDepthInches;
  const totalRunFeet = totalRunInches / 12;

  return {
    numberOfRisers,
    actualRiserHeightInches,
    numberOfTreads,
    totalRunInches,
    totalRunFeet,
  };
}

export const DEFAULT_STAIR_INPUTS: StairCalculatorInputs = {
  totalRiseInches: 108,
  idealRiserHeightInches: 7,
  treadDepthInches: 10,
};
