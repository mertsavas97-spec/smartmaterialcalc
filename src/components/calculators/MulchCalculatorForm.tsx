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
import { validateMulchInputs } from "@/lib/calculator-form-utils";
import {
  calculateMulch,
  DEFAULT_MULCH_INPUTS,
  type MulchCalculatorInputs,
} from "@/lib/mulch-calculator";

export function MulchCalculatorForm() {
  const [inputs, setInputs] = useState<MulchCalculatorInputs>(
    DEFAULT_MULCH_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateMulch
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateMulchInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateMulch(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("mulch-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_MULCH_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof MulchCalculatorInputs>(
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
          Enter bed dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Mulch calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="mulch-length" className="block text-sm font-medium text-text-primary">
              Length (ft)
            </label>
            <input
              id="mulch-length"
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
            <label htmlFor="mulch-width" className="block text-sm font-medium text-text-primary">
              Width (ft)
            </label>
            <input
              id="mulch-width"
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
            <label htmlFor="mulch-depth" className="block text-sm font-medium text-text-primary">
              Depth (in)
            </label>
            <input
              id="mulch-depth"
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
            <label htmlFor="mulch-bag-size" className="block text-sm font-medium text-text-primary">
              Bag size (ft³)
            </label>
            <input
              id="mulch-bag-size"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.bagSizeCubicFeet}
              onChange={(e) => updateField("bagSizeCubicFeet", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="mulch-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="mulch-waste"
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
              label="Recommended bags"
              value={`${results.recommendedBags} bags`}
              highlight
              subtext="Rounded up with waste allowance"
            />
            <CalculatorResultCard
              label="Bags needed"
              value={`${results.bagsNeeded.toFixed(1)} bags`}
            />
            <CalculatorResultCard
              label="Cubic yards"
              value={`${results.cubicYards.toFixed(2)} yd³`}
            />
            <CalculatorResultCard
              label="Cubic feet"
              value={`${results.cubicFeet.toFixed(1)} ft³`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Bag size assumption: {inputs.bagSizeCubicFeet} ft³ per bag</p>
              <p className="mt-1">Waste assumption: {inputs.wastePercent}%</p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> A 2–3 inch
              mulch layer suppresses weeds and retains moisture. Refresh beds
              annually — you may only need 1–2 inches for top-ups.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
