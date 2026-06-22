import { applyWasteMultiplier } from "./calculator-utils";

export type WallpaperCalculatorInputs = {
  roomLength: number;
  roomWidth: number;
  wallHeight: number;
  rollCoverageSqFt: number;
  wastePercent: number;
};

export type WallpaperCalculatorResults = {
  wallAreaSqFt: number;
  areaWithWasteSqFt: number;
  rollsNeeded: number;
  recommendedRolls: number;
};

export function calculateWallpaper(
  inputs: WallpaperCalculatorInputs
): WallpaperCalculatorResults {
  const wallAreaSqFt =
    2 * (inputs.roomLength + inputs.roomWidth) * inputs.wallHeight;
  const areaWithWasteSqFt = applyWasteMultiplier(
    wallAreaSqFt,
    inputs.wastePercent
  );
  const rollsNeeded =
    inputs.rollCoverageSqFt > 0
      ? areaWithWasteSqFt / inputs.rollCoverageSqFt
      : 0;
  const recommendedRolls = Math.ceil(rollsNeeded);

  return {
    wallAreaSqFt,
    areaWithWasteSqFt,
    rollsNeeded,
    recommendedRolls,
  };
}

export const DEFAULT_WALLPAPER_INPUTS: WallpaperCalculatorInputs = {
  roomLength: 12,
  roomWidth: 10,
  wallHeight: 8,
  rollCoverageSqFt: 30,
  wastePercent: 15,
};
