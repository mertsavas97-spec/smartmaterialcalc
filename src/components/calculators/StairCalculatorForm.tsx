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
import { validateStairInputs } from "@/lib/calculator-form-utils";
import {
  calculateStair,
  DEFAULT_STAIR_INPUTS,
  type StairCalculatorInputs,
} from "@/lib/stair-calculator";

export function StairCalculatorForm() {
  const [inputs, setInputs] = useState<StairCalculatorInputs>(
    DEFAULT_STAIR_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateStair
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateStairInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateStair(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("stair-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_STAIR_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof StairCalculatorInputs>(
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
          Enter stair dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Stair calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="stair-rise" className="block text-sm font-medium text-text-primary">
              Total rise (in)
            </label>
            <input
              id="stair-rise"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.totalRiseInches}
              onChange={(e) => updateField("totalRiseInches", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="stair-riser" className="block text-sm font-medium text-text-primary">
              Ideal riser height (in)
            </label>
            <input
              id="stair-riser"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.idealRiserHeightInches}
              onChange={(e) => updateField("idealRiserHeightInches", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="stair-tread" className="block text-sm font-medium text-text-primary">
              Tread depth (in)
            </label>
            <input
              id="stair-tread"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.treadDepthInches}
              onChange={(e) => updateField("treadDepthInches", e.target.value)}
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
              label="Number of risers"
              value={`${results.numberOfRisers} risers`}
              highlight
            />
            <CalculatorResultCard
              label="Actual riser height"
              value={`${results.actualRiserHeightInches.toFixed(2)} in`}
            />
            <CalculatorResultCard
              label="Number of treads"
              value={`${results.numberOfTreads} treads`}
            />
            <CalculatorResultCard
              label="Total run"
              value={`${Math.round(results.totalRunInches)} in (${results.totalRunFeet.toFixed(1)} ft)`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Ideal riser target: {inputs.idealRiserHeightInches} in</p>
              <p className="mt-1">Tread depth: {inputs.treadDepthInches} in</p>
              <p className="mt-1">
                Total rise: {inputs.totalRiseInches} in ({(inputs.totalRiseInches / 12).toFixed(1)} ft)
              </p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Building codes
              typically require risers between 4&quot; and 7.75&quot; and tread depth
              at least 10&quot;. The formula 2R + T ≈ 25 helps check comfort.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
