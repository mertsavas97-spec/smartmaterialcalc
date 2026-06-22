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
import { validateGravelInputs } from "@/lib/calculator-form-utils";
import {
  calculateGravel,
  DEFAULT_GRAVEL_INPUTS,
  type GravelCalculatorInputs,
} from "@/lib/gravel-calculator";

export function GravelCalculatorForm() {
  const [inputs, setInputs] = useState<GravelCalculatorInputs>(
    DEFAULT_GRAVEL_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateGravel
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateGravelInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateGravel(inputs));
    setHasCalculated(true);
  }

  function handleReset() {
    setInputs(DEFAULT_GRAVEL_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof GravelCalculatorInputs>(
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
          Enter area dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Gravel calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="gravel-length" className="block text-sm font-medium text-text-primary">
              Length (ft)
            </label>
            <input
              id="gravel-length"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.length}
              onChange={(e) => updateField("length", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="gravel-width" className="block text-sm font-medium text-text-primary">
              Width (ft)
            </label>
            <input
              id="gravel-width"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.width}
              onChange={(e) => updateField("width", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="gravel-depth" className="block text-sm font-medium text-text-primary">
              Depth (in)
            </label>
            <input
              id="gravel-depth"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.depthInches}
              onChange={(e) => updateField("depthInches", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="gravel-density" className="block text-sm font-medium text-text-primary">
              Density (tons per yd³)
            </label>
            <input
              id="gravel-density"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.densityTonsPerCubicYard}
              onChange={(e) => updateField("densityTonsPerCubicYard", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="gravel-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="gravel-waste"
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
          <CalculatorFormActions onReset={handleReset} calculatorSlug="gravel-calculator" />
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Recommended tons"
              value={`${results.recommendedTons.toFixed(1)} tons`}
              highlight
              subtext="Rounded up to nearest 0.1 ton"
            />
            <CalculatorResultCard
              label="Tons needed"
              value={`${results.tons.toFixed(2)} tons`}
            />
            <CalculatorResultCard
              label="Cubic yards"
              value={`${results.cubicYards.toFixed(2)} yd³`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>
                Density assumption: {inputs.densityTonsPerCubicYard} tons per yd³
              </p>
              <p className="mt-1">Waste assumption: {inputs.wastePercent}%</p>
              <p className="mt-1">
                With waste: {results.tonsWithWaste.toFixed(2)} tons
              </p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Driveways
              typically need 3–4 inches of gravel base. Heavier stone types may
              weigh closer to 1.5 tons per cubic yard.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
