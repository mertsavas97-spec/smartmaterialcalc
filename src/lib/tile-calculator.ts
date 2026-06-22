import { applyWasteMultiplier } from "./calculator-utils";

export type TileCalculatorInputs = {
  roomLength: number;
  roomWidth: number;
  tileLengthInches: number;
  tileWidthInches: number;
  wastePercent: number;
};

export type TileCalculatorResults = {
  floorAreaSqFt: number;
  tileAreaSqFt: number;
  tilesNeeded: number;
  recommendedTiles: number;
};

export function calculateTile(
  inputs: TileCalculatorInputs
): TileCalculatorResults {
  const floorAreaSqFt = inputs.roomLength * inputs.roomWidth;
  const tileAreaSqFt =
    (inputs.tileLengthInches * inputs.tileWidthInches) / 144;
  const tilesNeeded =
    tileAreaSqFt > 0 ? floorAreaSqFt / tileAreaSqFt : 0;
  const recommendedTiles = Math.ceil(
    applyWasteMultiplier(tilesNeeded, inputs.wastePercent)
  );

  return {
    floorAreaSqFt,
    tileAreaSqFt,
    tilesNeeded,
    recommendedTiles,
  };
}

export const DEFAULT_TILE_INPUTS: TileCalculatorInputs = {
  roomLength: 12,
  roomWidth: 10,
  tileLengthInches: 12,
  tileWidthInches: 12,
  wastePercent: 10,
};
