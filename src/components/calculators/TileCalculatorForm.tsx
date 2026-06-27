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
import { validateTileInputs } from "@/lib/calculator-form-utils";
import {
  calculateTile,
  DEFAULT_TILE_INPUTS,
  type TileCalculatorInputs,
} from "@/lib/tile-calculator";

export function TileCalculatorForm() {
  const [inputs, setInputs] = useState<TileCalculatorInputs>(
    DEFAULT_TILE_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateTile
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateTileInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateTile(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("tile-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_TILE_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof TileCalculatorInputs>(
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
          Enter room and tile dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Tile calculator inputs"
          onSubmit={handleCalculate}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="tile-room-length" className="block text-sm font-medium text-text-primary">
                Room length (ft)
              </label>
              <input
                id="tile-room-length"
                type="number"
                min="0"
                step="0.1"
                value={inputs.roomLength}
                onChange={(e) => updateField("roomLength", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="tile-room-width" className="block text-sm font-medium text-text-primary">
                Room width (ft)
              </label>
              <input
                id="tile-room-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.roomWidth}
                onChange={(e) => updateField("roomWidth", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="tile-length" className="block text-sm font-medium text-text-primary">
                Tile length (in)
              </label>
              <input
                id="tile-length"
                type="number"
                min="0"
                step="0.1"
                value={inputs.tileLengthInches}
                onChange={(e) => updateField("tileLengthInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="tile-width" className="block text-sm font-medium text-text-primary">
                Tile width (in)
              </label>
              <input
                id="tile-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.tileWidthInches}
                onChange={(e) => updateField("tileWidthInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div>
            <label htmlFor="tile-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="tile-waste"
              type="number"
              inputMode="numeric"
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
              label="Recommended tiles"
              value={`${results.recommendedTiles} tiles`}
              highlight
              subtext="Rounded up with waste allowance"
            />
            <CalculatorResultCard
              label="Tiles needed"
              value={`${results.tilesNeeded.toFixed(1)} tiles`}
            />
            <CalculatorResultCard
              label="Floor area"
              value={`${Math.round(results.floorAreaSqFt)} sq ft`}
            />
            <CalculatorResultCard
              label="Tile area"
              value={`${results.tileAreaSqFt.toFixed(2)} sq ft`}
              subtext="Per tile"
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Waste assumption: {inputs.wastePercent}%</p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Add 10–15%
              extra for straight layouts; use 15–20% for diagonal or complex
              patterns. Large-format tiles may need more for breakage.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
