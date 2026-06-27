"use client";

import { useState } from "react";
import { CalculatorFormActions } from "./CalculatorFormActions";
import { CalculatorResultCard } from "./CalculatorResultCard";
import { CalculatorTipBox } from "./CalculatorTipBox";
import { CalculatorValidationAlert } from "./CalculatorValidationAlert";
import { CalculatorResultsEmpty } from "./CalculatorResultsEmpty";
import {
  CALCULATOR_INPUT_CLASSNAME,
  parseNumber,
} from "@/lib/calculator-utils";
import { trackCalculatorSubmit } from "@/lib/analytics";
import { validateDeckInputs } from "@/lib/calculator-form-utils";
import {
  calculateDeck,
  DEFAULT_DECK_INPUTS,
  type DeckCalculatorInputs,
} from "@/lib/deck-calculator";

export function DeckCalculatorForm() {
  const [inputs, setInputs] = useState<DeckCalculatorInputs>(DEFAULT_DECK_INPUTS);
  const [results, setResults] = useState<ReturnType<typeof calculateDeck> | null>(
    null
  );
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateDeckInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateDeck(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("deck-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_DECK_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof DeckCalculatorInputs>(
    field: K,
    value: string
  ) {
    setInputs((prev) => ({
      ...prev,
      [field]: parseNumber(value, prev[field]),
    }));
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Enter deck dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Deck calculator inputs"
          onSubmit={handleCalculate}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="deck-length" className="block text-sm font-medium text-text-primary">
                Deck length (ft)
              </label>
              <input
                id="deck-length"
                type="number"
                min="0"
                step="0.1"
                value={inputs.deckLength}
                onChange={(e) => updateField("deckLength", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="deck-width" className="block text-sm font-medium text-text-primary">
                Deck width (ft)
              </label>
              <input
                id="deck-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.deckWidth}
                onChange={(e) => updateField("deckWidth", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="deck-board-width" className="block text-sm font-medium text-text-primary">
                Board width (in)
              </label>
              <input
                id="deck-board-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.boardWidthInches}
                onChange={(e) => updateField("boardWidthInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="deck-board-gap" className="block text-sm font-medium text-text-primary">
                Board gap (in)
              </label>
              <input
                id="deck-board-gap"
                type="number"
                min="0"
                step="0.001"
                value={inputs.boardGapInches}
                onChange={(e) => updateField("boardGapInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div>
            <label htmlFor="deck-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="deck-waste"
              type="number"
              inputMode="decimal"
              min="0"
              step="1"
              value={inputs.wastePercent}
              onChange={(e) => updateField("wastePercent", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <CalculatorValidationAlert message={validationError} />
          <CalculatorFormActions onReset={handleReset} />
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Recommended linear feet"
              value={`${results.recommendedLinearFeet} linear ft`}
              highlight
              subtext="Rounded up with waste allowance"
            />
            <CalculatorResultCard
              label="Linear feet needed"
              value={`${Math.round(results.linearFeetNeeded)} linear ft`}
            />
            <CalculatorResultCard
              label="Deck area"
              value={`${Math.round(results.deckAreaSqFt)} sq ft`}
            />
            <CalculatorResultCard
              label="Board module width"
              value={`${results.boardModuleWidthFeet.toFixed(3)} ft`}
              subtext="Board width + gap"
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Waste assumption: {inputs.wastePercent}%</p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Standard
              5/4×6 deck boards are 5.5&quot; wide. Leave 1/8&quot; gap for drainage.
              Joists, posts, and hardware are not included in this estimate.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
