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
import { validateRoofingInputs } from "@/lib/calculator-form-utils";
import {
  calculateRoofing,
  DEFAULT_ROOFING_INPUTS,
  type RoofingCalculatorInputs,
} from "@/lib/roofing-calculator";

export function RoofingCalculatorForm() {
  const [inputs, setInputs] = useState<RoofingCalculatorInputs>(
    DEFAULT_ROOFING_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateRoofing
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateRoofingInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateRoofing(inputs));
    setHasCalculated(true);
  }

  function handleReset() {
    setInputs(DEFAULT_ROOFING_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof RoofingCalculatorInputs>(
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
          Enter roof dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Roofing calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="roof-length" className="block text-sm font-medium text-text-primary">
              Roof length (ft)
            </label>
            <input
              id="roof-length"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.roofLength}
              onChange={(e) => updateField("roofLength", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="roof-width" className="block text-sm font-medium text-text-primary">
              Roof width (ft)
            </label>
            <input
              id="roof-width"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.roofWidth}
              onChange={(e) => updateField("roofWidth", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="roof-pitch" className="block text-sm font-medium text-text-primary">
              Pitch multiplier
            </label>
            <input
              id="roof-pitch"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={inputs.pitchMultiplier}
              onChange={(e) => updateField("pitchMultiplier", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="roof-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="roof-waste"
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
          <CalculatorFormActions onReset={handleReset} calculatorSlug="roofing-calculator" />
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Recommended squares"
              value={`${results.recommendedSquares.toFixed(1)} squares`}
              highlight
              subtext="Rounded up to nearest 0.1 square (100 sq ft)"
            />
            <CalculatorResultCard
              label="Roofing squares"
              value={`${results.squares.toFixed(2)} squares`}
            />
            <CalculatorResultCard
              label="Adjusted roof area"
              value={`${Math.round(results.adjustedRoofAreaSqFt)} sq ft`}
            />
            <CalculatorResultCard
              label="Flat area"
              value={`${Math.round(results.flatAreaSqFt)} sq ft`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Pitch multiplier assumption: {inputs.pitchMultiplier}</p>
              <p className="mt-1">Waste assumption: {inputs.wastePercent}%</p>
              <p className="mt-1">
                With waste: {results.squaresWithWaste.toFixed(2)} squares
              </p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> One roofing
              square covers 100 sq ft. A 4/12 pitch uses ~1.06× multiplier; 6/12
              uses ~1.12×. Add extra for hips, valleys, and starter courses.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
