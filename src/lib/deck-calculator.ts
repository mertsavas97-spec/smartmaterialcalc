import { applyWasteMultiplier } from "./calculator-utils";

export type DeckCalculatorInputs = {
  deckLength: number;
  deckWidth: number;
  boardWidthInches: number;
  boardGapInches: number;
  wastePercent: number;
};

export type DeckCalculatorResults = {
  deckAreaSqFt: number;
  boardModuleWidthFeet: number;
  linearFeetNeeded: number;
  linearFeetWithWaste: number;
  recommendedLinearFeet: number;
};

export function calculateDeck(
  inputs: DeckCalculatorInputs
): DeckCalculatorResults {
  const deckAreaSqFt = inputs.deckLength * inputs.deckWidth;
  const boardModuleWidthFeet =
    (inputs.boardWidthInches + inputs.boardGapInches) / 12;
  const linearFeetNeeded =
    boardModuleWidthFeet > 0 ? deckAreaSqFt / boardModuleWidthFeet : 0;
  const linearFeetWithWaste = applyWasteMultiplier(
    linearFeetNeeded,
    inputs.wastePercent
  );
  const recommendedLinearFeet = Math.ceil(linearFeetWithWaste);

  return {
    deckAreaSqFt,
    boardModuleWidthFeet,
    linearFeetNeeded,
    linearFeetWithWaste,
    recommendedLinearFeet,
  };
}

export const DEFAULT_DECK_INPUTS: DeckCalculatorInputs = {
  deckLength: 16,
  deckWidth: 12,
  boardWidthInches: 5.5,
  boardGapInches: 0.125,
  wastePercent: 10,
};
