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
import { validateConcreteInputs } from "@/lib/calculator-form-utils";
import {
  calculateConcrete,
  DEFAULT_CONCRETE_INPUTS,
  type ConcreteCalculatorInputs,
} from "@/lib/concrete-calculator";

export function ConcreteCalculatorForm() {
  const [inputs, setInputs] = useState<ConcreteCalculatorInputs>(
    DEFAULT_CONCRETE_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateConcrete
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateConcreteInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateConcrete(inputs));
    setHasCalculated(true);
  }

  function handleReset() {
    setInputs(DEFAULT_CONCRETE_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof ConcreteCalculatorInputs>(
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
          aria-label="Concrete calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="concrete-length" className="block text-sm font-medium text-text-primary">
              Length (ft)
            </label>
            <input
              id="concrete-length"
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
            <label htmlFor="concrete-width" className="block text-sm font-medium text-text-primary">
              Width (ft)
            </label>
            <input
              id="concrete-width"
              type="number"
              min="0"
              step="0.1"
              value={inputs.width}
              onChange={(e) => updateField("width", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="concrete-thickness" className="block text-sm font-medium text-text-primary">
              Thickness (in)
            </label>
            <input
              id="concrete-thickness"
              type="number"
              min="0"
              step="0.1"
              value={inputs.thicknessInches}
              onChange={(e) => updateField("thicknessInches", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="concrete-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="concrete-waste"
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
          <CalculatorFormActions onReset={handleReset} calculatorSlug="concrete-calculator" />
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Recommended ready-mix order"
              value={`${results.recommendedOrder.toFixed(1)} yd³`}
              highlight
              subtext="Rounded up to nearest 0.1 cubic yard"
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
              <p>Waste assumption: {inputs.wastePercent}%</p>
              <p className="mt-1">
                With waste: {results.cubicYardsWithWaste.toFixed(2)} yd³
              </p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Order slightly
              more than calculated — short pours are costly. A typical 4&quot; patio
              slab uses about 1 yd³ per 80 sq ft.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
