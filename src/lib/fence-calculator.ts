export type FenceCalculatorInputs = {
  fenceLength: number;
  postSpacing: number;
  railsPerSection: number;
  picketWidthInches: number;
  picketGapInches: number;
};

export type FenceCalculatorResults = {
  sections: number;
  posts: number;
  rails: number;
  pickets: number;
  picketModuleWidthInches: number;
};

export function calculateFence(
  inputs: FenceCalculatorInputs
): FenceCalculatorResults {
  const sections =
    inputs.postSpacing > 0
      ? Math.ceil(inputs.fenceLength / inputs.postSpacing)
      : 0;
  const posts = sections + 1;
  const rails = sections * inputs.railsPerSection;
  const totalInches = inputs.fenceLength * 12;
  const picketModuleWidthInches =
    inputs.picketWidthInches + inputs.picketGapInches;
  const pickets =
    picketModuleWidthInches > 0
      ? Math.ceil(totalInches / picketModuleWidthInches)
      : 0;

  return {
    sections,
    posts,
    rails,
    pickets,
    picketModuleWidthInches,
  };
}

export const DEFAULT_FENCE_INPUTS: FenceCalculatorInputs = {
  fenceLength: 100,
  postSpacing: 8,
  railsPerSection: 2,
  picketWidthInches: 5.5,
  picketGapInches: 0.5,
};
