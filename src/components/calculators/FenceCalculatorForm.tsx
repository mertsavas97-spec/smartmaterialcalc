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
import { validateFenceInputs } from "@/lib/calculator-form-utils";
import {
  calculateFence,
  DEFAULT_FENCE_INPUTS,
  type FenceCalculatorInputs,
} from "@/lib/fence-calculator";

export function FenceCalculatorForm() {
  const [inputs, setInputs] = useState<FenceCalculatorInputs>(
    DEFAULT_FENCE_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateFence
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateFenceInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateFence(inputs));
    setHasCalculated(true);
  }

  function handleReset() {
    setInputs(DEFAULT_FENCE_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof FenceCalculatorInputs>(
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
          Enter fence specifications
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Fence calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="fence-length" className="block text-sm font-medium text-text-primary">
              Fence length (ft)
            </label>
            <input
              id="fence-length"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.fenceLength}
              onChange={(e) => updateField("fenceLength", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="fence-post-spacing" className="block text-sm font-medium text-text-primary">
              Post spacing (ft)
            </label>
            <input
              id="fence-post-spacing"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.postSpacing}
              onChange={(e) => updateField("postSpacing", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="fence-rails" className="block text-sm font-medium text-text-primary">
              Rails per section
            </label>
            <input
              id="fence-rails"
              type="number"
              inputMode="numeric"
              min="0"
              step="1"
              value={inputs.railsPerSection}
              onChange={(e) => updateField("railsPerSection", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="fence-picket-width" className="block text-sm font-medium text-text-primary">
                Picket width (in)
              </label>
              <input
                id="fence-picket-width"
                type="number"
                min="0"
                step="0.1"
                value={inputs.picketWidthInches}
                onChange={(e) => updateField("picketWidthInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="fence-picket-gap" className="block text-sm font-medium text-text-primary">
                Picket gap (in)
              </label>
              <input
                id="fence-picket-gap"
                type="number"
                min="0"
                step="0.1"
                value={inputs.picketGapInches}
                onChange={(e) => updateField("picketGapInches", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <CalculatorValidationAlert message={validationError} />
          <CalculatorFormActions onReset={handleReset} calculatorSlug="fence-calculator" />
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Fence posts"
              value={`${results.posts} posts`}
              highlight
            />
            <CalculatorResultCard
              label="Fence sections"
              value={`${results.sections} sections`}
            />
            <CalculatorResultCard
              label="Rails"
              value={`${results.rails} rails`}
            />
            <CalculatorResultCard
              label="Pickets"
              value={`${results.pickets} pickets`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Post spacing: {inputs.postSpacing} ft</p>
              <p className="mt-1">Rails per section: {inputs.railsPerSection}</p>
              <p className="mt-1">
                Picket module: {results.picketModuleWidthInches}&quot; (width + gap)
              </p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Standard
              wood privacy fences use 4×4 posts every 6–8 feet with two or three
              horizontal rails. Add 2–3 extra pickets and one extra post for
              gates and replacements.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
