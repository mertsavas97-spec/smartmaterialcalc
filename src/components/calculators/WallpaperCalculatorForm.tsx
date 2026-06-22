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
import { validateWallpaperInputs } from "@/lib/calculator-form-utils";
import {
  calculateWallpaper,
  DEFAULT_WALLPAPER_INPUTS,
  type WallpaperCalculatorInputs,
} from "@/lib/wallpaper-calculator";

export function WallpaperCalculatorForm() {
  const [inputs, setInputs] = useState<WallpaperCalculatorInputs>(
    DEFAULT_WALLPAPER_INPUTS
  );
  const [results, setResults] = useState<ReturnType<
    typeof calculateWallpaper
  > | null>(null);
  const [hasCalculated, setHasCalculated] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const error = validateWallpaperInputs(inputs);
    if (error) {
      setValidationError(error);
      setHasCalculated(false);
      setResults(null);
      return;
    }
    setValidationError(null);
    setResults(calculateWallpaper(inputs));
    setHasCalculated(true);
  }

  function handleReset() {
    setInputs(DEFAULT_WALLPAPER_INPUTS);
    setResults(null);
    setHasCalculated(false);
    setValidationError(null);
  }

  function updateField<K extends keyof WallpaperCalculatorInputs>(
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
          Enter room dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label="Wallpaper calculator inputs"
          onSubmit={handleCalculate}
        >
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="wallpaper-length" className="block text-sm font-medium text-text-primary">
                Room length (ft)
              </label>
              <input
                id="wallpaper-length"
                type="number"
                min="0"
                step="0.1"
                value={inputs.roomLength}
                onChange={(e) => updateField("roomLength", e.target.value)}
                className={CALCULATOR_INPUT_CLASSNAME}
              />
            </div>
            <div>
              <label htmlFor="wallpaper-width" className="block text-sm font-medium text-text-primary">
                Room width (ft)
              </label>
              <input
                id="wallpaper-width"
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
            <label htmlFor="wallpaper-height" className="block text-sm font-medium text-text-primary">
              Wall height (ft)
            </label>
            <input
              id="wallpaper-height"
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={inputs.wallHeight}
              onChange={(e) => updateField("wallHeight", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="wallpaper-coverage" className="block text-sm font-medium text-text-primary">
              Roll coverage (sq ft)
            </label>
            <input
              id="wallpaper-coverage"
              type="number"
              inputMode="numeric"
              min="0"
              step="1"
              value={inputs.rollCoverageSqFt}
              onChange={(e) => updateField("rollCoverageSqFt", e.target.value)}
              className={CALCULATOR_INPUT_CLASSNAME}
            />
          </div>
          <div>
            <label htmlFor="wallpaper-waste" className="block text-sm font-medium text-text-primary">
              Waste allowance (%)
            </label>
            <input
              id="wallpaper-waste"
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
          <CalculatorFormActions onReset={handleReset} calculatorSlug="wallpaper-calculator" />
        </form>
      </div>

      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Your estimate
        </h2>
        {hasCalculated && results ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Recommended rolls"
              value={`${results.recommendedRolls} rolls`}
              highlight
              subtext="Rounded up to whole rolls"
            />
            <CalculatorResultCard
              label="Rolls needed"
              value={`${results.rollsNeeded.toFixed(1)} rolls`}
            />
            <CalculatorResultCard
              label="Wall area"
              value={`${Math.round(results.wallAreaSqFt)} sq ft`}
            />
            <CalculatorResultCard
              label="Area with waste"
              value={`${Math.round(results.areaWithWasteSqFt)} sq ft`}
            />
            <div className="rounded-[var(--radius-sm)] border border-card-border px-4 py-3 text-xs text-text-muted">
              <p>Roll coverage assumption: {inputs.rollCoverageSqFt} sq ft per roll</p>
              <p className="mt-1">Waste assumption: {inputs.wastePercent}%</p>
            </div>
            <CalculatorTipBox>
              <strong className="text-text-primary">Tip:</strong> Patterned
              wallpaper needs 15–25% extra for repeat matching. Solid or textured
              rolls often cover 30–35 sq ft. Doors and windows are not deducted.
            </CalculatorTipBox>
          </div>
        ) : (
          <CalculatorResultsEmpty />
        )}
      </div>
    </div>
  );
}
