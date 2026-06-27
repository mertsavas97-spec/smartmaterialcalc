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
import { validatePaverInputs } from "@/lib/calculator-form-utils";
import {
  calculatePaver,
  DEFAULT_PAVER_INPUTS,
  type PaverCalculatorInputs,
} from "@/lib/paver-calculator";

export function PaverCalculatorForm() {
  const [inputs, setInputs] = useState<PaverCalculatorInputs>(
    DEFAULT_PAVER_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculatePaver
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validatePaverInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculatePaver(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("paver-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_PAVER_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof PaverCalculatorInputs>(
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
          Enter patio and paver dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Paver calculator inputs"
          onSubmit={handleCalculate}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="paver-patio-length" className="block text-sm font-medium text-text-primary">
                Patio length (ft)
              </label>
              <input
                id="paver-patio-length"
                type="number"
                min="0"
                step="0.1"
                value={inputs.patioLength}
                onChange={(e) => updateField("patioLength", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="paver-patio-width" className="block text-sm font-medium text-text-primary">
                Patio width (ft)
              </label>
              <input
                id="paver-patio-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.patioWidth}
                onChange={(e) => updateField("patioWidth", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="paver-length" className="block text-sm font-medium text-text-primary">
                Paver length (in)
              </label>
              <input
                id="paver-length"
                type="number"
                min="0"
                step="0.1"
                value={inputs.paverLengthInches}
                onChange={(e) => updateField("paverLengthInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="paver-width" className="block text-sm font-medium text-text-primary">
                Paver width (in)
              </label>
              <input
                id="paver-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.paverWidthInches}
                onChange={(e) => updateField("paverWidthInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div>
            <label htmlFor="paver-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="paver-waste"
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
              label="Recommended pavers"
              value={`${results.recommendedPavers} pavers`}
              highlight
              subtext="Rounded up with waste allowance"
            />
            <CalculatorResultCard
              label="Pavers needed"
              value={`${results.paversNeeded.toFixed(1)} pavers`}
            />
            <CalculatorResultCard
              label="Patio area"
              value={`${Math.round(results.patioAreaSqFt)} sq ft`}
            />
            <CalculatorResultCard
              label="Paver area"
              value={`${results.paverAreaSqFt.toFixed(2)} sq ft`}
              subtext="Per paver"
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Waste assumption: {inputs.wastePercent}%</p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Add 5–10%
              extra for straight runs and 10–15% for curves or herringbone
              patterns. Order from the same lot to keep color consistent.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
