"use client";

import { useState } from "react";
import { Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { CalculatorResultCard } from "./CalculatorResultCard";
import { CalculatorValidationAlert } from "./CalculatorValidationAlert";
import { CalculatorResultsEmpty } from "./CalculatorResultsEmpty";
import { trackCalculatorSubmit } from "@/lib/analytics";
import { validatePaintInputs } from "@/lib/calculator-form-utils";
import {
  CALCULATOR_INPUT_CLASSNAME,
  parseNumber,
} from "@/lib/calculator-utils";
import {
  calculatePaint,
  DEFAULT_PAINT_INPUTS,
  type PaintCalculatorInputs,
} from "@/lib/paint-calculator";

export function PaintCalculatorForm() {
  const [inputs, setInputs] = useState<PaintCalculatorInputs>(
    DEFAULT_PAINT_INPUTS
  );
  const [results, setResults] = useState<ReturnType<typeof calculatePaint> | null>(
    null
  );
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validatePaintInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculatePaint(inputs));
    setHasCalculated(true);
    trackCalculatorSubmit("paint-calculator");
  }

  function handleReset() {
    setInputs(DEFAULT_PAINT_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof PaintCalculatorInputs>(
    field: K,
    value: string
  ) {
    setInputs((prev) => ({
      ...prev,
      [field]:
        field === "coats" || field === "doors" || field === "windows"
          ? parseInt(value, 10) || 0
          : parseNumber(value, prev[field] as number),
    }));
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Enter room dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Paint calculator inputs"
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="room-width" className="block text-sm font-medium text-text-primary">
              Room width (ft)
            </label>
            <input
              id="room-width"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.roomWidth}
              onChange={(e) => updateField("roomWidth", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="room-length" className="block text-sm font-medium text-text-primary">
              Room length (ft)
            </label>
            <input
              id="room-length"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.roomLength}
              onChange={(e) => updateField("roomLength", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="ceiling-height" className="block text-sm font-medium text-text-primary">
              Ceiling height (ft)
            </label>
            <input
              id="ceiling-height"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.ceilingHeight}
              onChange={(e) => updateField("ceilingHeight", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="coats" className="block text-sm font-medium text-text-primary">
              Number of coats
            </label>
            <select
              id="coats"
              value={inputs.coats}
              onChange={(e) => updateField("coats", e.target.value)}
              className={`${CALCULATOR_INPUT_CLASSNAME} bg-white`}
            >
              <option value="1">1 coat</option>
              <option value="2">2 coats</option>
              <option value="3">3 coats</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="doors" className="block text-sm font-medium text-text-primary">
                Doors
              </label>
              <input
                id="doors"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                value={inputs.doors}
                onChange={(e) => updateField("doors", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="windows" className="block text-sm font-medium text-text-primary">
                Windows
              </label>
              <input
                id="windows"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                value={inputs.windows}
                onChange={(e) => updateField("windows", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="coverage" className="block text-sm font-medium text-text-primary">
                Coverage per gallon (sq ft)
              </label>
              <input
                id="coverage"
                type="number"
                inputMode="numeric"
                min="1"
                step="1"
                value={inputs.coveragePerGallon}
                onChange={(e) => updateField("coveragePerGallon", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="overage" className="block text-sm font-medium text-text-primary">
                Waste / overage (%)
              </label>
              <input
                id="overage"
                type="number"
                inputMode="numeric"
                min="0"
                step="1"
                value={inputs.overagePercent}
                onChange={(e) => updateField("overagePercent", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
          </div>
          <CalculatorValidationAlert message={validationError} />
          <div className="flex items-center gap-4 pt-2">
            <Button
              variant="cta"
              size="lg"
              type="submit"
              className="flex-1 sm:flex-none"
            >
              Calculate
            </Button>
            <button
              type="button"
              onClick={handleReset}
              className="rounded-[var(--radius-sm)] text-sm font-medium text-text-muted hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Reset
            </button>
          </div>
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Paint needed"
              value={`${results.paintNeededGallons.toFixed(1)} gallons`}
              highlight
            />
            <CalculatorResultCard
              label="Recommended purchase"
              value={`${results.recommendedPurchaseGallons} gallons`}
              subtext="Rounded up with overage for store purchase"
            />
            <CalculatorResultCard
              label="Total paintable area"
              value={`${Math.round(results.totalPaintableArea)} sq ft`}
            />
            <CalculatorResultCard
              label="Net wall area"
              value={`${Math.round(results.netWallArea)} sq ft`}
              subtext={`After deducting ${Math.round(results.doorDeduction)} sq ft (doors) and ${Math.round(results.windowDeduction)} sq ft (windows)`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>
                Coverage assumption: {inputs.coveragePerGallon} sq ft per gallon
              </p>
              <p className="mt-1">
                Overage assumption: {inputs.overagePercent}%
              </p>
            </div>

            <div className="flex gap-3 rounded-[var(--radius-sm)] bg-warning p-4">
              <Lightbulb
                className="h-5 w-5 shrink-0 text-[#F9A825]"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-text-secondary">
                <strong className="text-text-primary">Tip:</strong> Walls only —
                ceiling paint is not included. Consider one extra gallon for
                touch-ups and verify coverage on your product label.
              </p>
            </div>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
