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
import { validateDrywallInputs } from "@/lib/calculator-form-utils";
import {
  calculateDrywall,
  DEFAULT_DRYWALL_INPUTS,
  type DrywallCalculatorInputs,
} from "@/lib/drywall-calculator";

export function DrywallCalculatorForm() {
  const [inputs, setInputs] = useState<DrywallCalculatorInputs>(
    DEFAULT_DRYWALL_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateDrywall
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateDrywallInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateDrywall(inputs));
    setHasCalculated(true);
  }

  function handleReset() {
    setInputs(DEFAULT_DRYWALL_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof DrywallCalculatorInputs>(
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
          Enter room and sheet dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Drywall calculator inputs"
          onSubmit={handleCalculate}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="drywall-length" className="block text-sm font-medium text-text-primary">
                Room length (ft)
              </label>
              <input
                id="drywall-length"
                type="number"
                min="0"
                step="0.1"
                value={inputs.roomLength}
                onChange={(e) => updateField("roomLength", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="drywall-width" className="block text-sm font-medium text-text-primary">
                Room width (ft)
              </label>
              <input
                id="drywall-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.roomWidth}
                onChange={(e) => updateField("roomWidth", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div>
            <label htmlFor="drywall-height" className="block text-sm font-medium text-text-primary">
              Wall height (ft)
            </label>
            <input
              id="drywall-height"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.wallHeight}
              onChange={(e) => updateField("wallHeight", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="drywall-sheet-width" className="block text-sm font-medium text-text-primary">
                Sheet width (ft)
              </label>
              <input
                id="drywall-sheet-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.sheetWidth}
                onChange={(e) => updateField("sheetWidth", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="drywall-sheet-height" className="block text-sm font-medium text-text-primary">
                Sheet height (ft)
              </label>
              <input
                id="drywall-sheet-height"
                type="number"
                min="0"
                step="0.1"
                value={inputs.sheetHeight}
                onChange={(e) => updateField("sheetHeight", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div>
            <label htmlFor="drywall-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="drywall-waste"
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
          <CalculatorFormActions onReset={handleReset} calculatorSlug="drywall-calculator" />
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Recommended sheets"
              value={`${results.recommendedSheets} sheets`}
              highlight
              subtext="Rounded up with waste allowance"
            />
            <CalculatorResultCard
              label="Sheets needed"
              value={`${results.sheetsNeeded.toFixed(1)} sheets`}
            />
            <CalculatorResultCard
              label="Wall area"
              value={`${Math.round(results.wallAreaSqFt)} sq ft`}
            />
            <CalculatorResultCard
              label="Sheet area"
              value={`${Math.round(results.sheetAreaSqFt)} sq ft`}
              subtext="Per 4×8 sheet (default)"
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Waste assumption: {inputs.wastePercent}%</p>
              <p className="mt-1">
                Sheet size assumption: {inputs.sheetWidth}×{inputs.sheetHeight} ft
              </p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Standard
              4×8 sheets cover 32 sq ft. Add 10–15% for cuts around doors,
              windows, and outlets. Ceiling drywall is not included in this
              estimate.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
