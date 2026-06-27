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
import { validateConcreteBagsInputs } from "@/lib/calculator-form-utils";
import {
  calculateConcreteBags,
  DEFAULT_CONCRETE_BAGS_INPUTS,
  type ConcreteBagsCalculatorInputs,
} from "@/lib/concrete-bags-calculator";

export function ConcreteBagsCalculatorForm() {
  const [inputs, setInputs] = useState<ConcreteBagsCalculatorInputs>(
    DEFAULT_CONCRETE_BAGS_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateConcreteBags
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateConcreteBagsInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateConcreteBags(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("concrete-bags-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_CONCRETE_BAGS_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof ConcreteBagsCalculatorInputs>(
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
          Enter slab dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Concrete bags calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="bags-length" className="block text-sm font-medium text-text-primary">
              Length (ft)
            </label>
            <input
              id="bags-length"
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
            <label htmlFor="bags-width" className="block text-sm font-medium text-text-primary">
              Width (ft)
            </label>
            <input
              id="bags-width"
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
            <label htmlFor="bags-thickness" className="block text-sm font-medium text-text-primary">
              Thickness (in)
            </label>
            <input
              id="bags-thickness"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.thicknessInches}
              onChange={(e) => updateField("thicknessInches", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="bags-yield" className="block text-sm font-medium text-text-primary">
              Bag yield (ft³)
            </label>
            <input
              id="bags-yield"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.01"
              value={inputs.bagYieldCubicFeet}
              onChange={(e) => updateField("bagYieldCubicFeet", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="bags-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="bags-waste"
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
              subtext="Rounded up to whole bags"
            />
            <CalculatorResultCard
              label="Bags needed"
              value={`${results.bagsNeeded.toFixed(1)} bags`}
            />
            <CalculatorResultCard
              label="Cubic feet"
              value={`${results.cubicFeet.toFixed(1)} ft³`}
            />
            <CalculatorResultCard
              label="Cubic feet with waste"
              value={`${results.cubicFeetWithWaste.toFixed(1)} ft³`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Bag yield assumption: {inputs.bagYieldCubicFeet} ft³ per bag</p>
              <p className="mt-1">Waste assumption: {inputs.wastePercent}%</p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Many standard
              bags yield about 0.45 ft³ — check your bag label. For slabs over
              1 yd³, ready-mix is usually more economical than bags.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
