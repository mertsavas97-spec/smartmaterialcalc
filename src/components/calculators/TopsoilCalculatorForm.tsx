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
import { validateTopsoilInputs } from "@/lib/calculator-form-utils";
import {
  calculateTopsoil,
  DEFAULT_TOPSOIL_INPUTS,
  type TopsoilCalculatorInputs,
} from "@/lib/topsoil-calculator";

export function TopsoilCalculatorForm() {
  const [inputs, setInputs] = useState<TopsoilCalculatorInputs>(
    DEFAULT_TOPSOIL_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateTopsoil
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateTopsoilInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateTopsoil(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("topsoil-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_TOPSOIL_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof TopsoilCalculatorInputs>(
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
          aria-label="Topsoil calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="topsoil-length" className="block text-sm font-medium text-text-primary">
              Length (ft)
            </label>
            <input
              id="topsoil-length"
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
            <label htmlFor="topsoil-width" className="block text-sm font-medium text-text-primary">
              Width (ft)
            </label>
            <input
              id="topsoil-width"
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
            <label htmlFor="topsoil-depth" className="block text-sm font-medium text-text-primary">
              Depth (in)
            </label>
            <input
              id="topsoil-depth"
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
            <label htmlFor="topsoil-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="topsoil-waste"
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
              label="Recommended topsoil"
              value={`${results.recommendedCubicYards.toFixed(1)} yd³`}
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
              <strong className="text-text-primary">Tip:</strong> New lawns
              typically need 4–6 inches of topsoil; garden beds need 6–12
              inches. Bulk delivery is cheaper than bags above ~1 yd³.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
