"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CalculatorResultCard } from "./CalculatorResultCard";
import type { Calculator } from "@/data/calculators";

const inputClassName =
  "mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

type GenericCalculatorFormProps = {
  calculator: Calculator;
};

export function GenericCalculatorForm({ calculator }: GenericCalculatorFormProps) {
  const [length, setLength] = useState("10");
  const [width, setWidth] = useState("10");
  const [depth, setDepth] = useState("4");
  const [lengthUnit, setLengthUnit] = useState("ft");
  const [depthUnit, setDepthUnit] = useState("in");
  const [showResult, setShowResult] = useState(false);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    setShowResult(true);
  }

  function handleReset() {
    setLength("10");
    setWidth("10");
    setDepth("4");
    setLengthUnit("ft");
    setDepthUnit("in");
    setShowResult(false);
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <div className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-text-primary">
          Enter project dimensions
        </h2>
        <form
          className="mt-5 space-y-4"
          aria-label={`${calculator.title} inputs`}
          onSubmit={handleCalculate}
        >
          <div>
            <label htmlFor="project-length" className="block text-sm font-medium text-text-primary">
              Project length
            </label>
            <div className="mt-1 flex gap-2">
              <input
                id="project-length"
                type="number"
                min="0"
                step="0.1"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className={`${inputClassName} mt-0 flex-1`}
              />
              <select
                value={lengthUnit}
                onChange={(e) => setLengthUnit(e.target.value)}
                className="rounded-[var(--radius-sm)] border border-card-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Length unit"
              >
                <option value="ft">ft</option>
                <option value="m">m</option>
                <option value="in">in</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="project-width" className="block text-sm font-medium text-text-primary">
              Project width
            </label>
            <div className="mt-1 flex gap-2">
              <input
                id="project-width"
                type="number"
                min="0"
                step="0.1"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                className={`${inputClassName} mt-0 flex-1`}
              />
              <select
                value={lengthUnit}
                onChange={(e) => setLengthUnit(e.target.value)}
                className="rounded-[var(--radius-sm)] border border-card-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Width unit"
              >
                <option value="ft">ft</option>
                <option value="m">m</option>
                <option value="in">in</option>
              </select>
            </div>
          </div>
          <div>
            <label htmlFor="project-depth" className="block text-sm font-medium text-text-primary">
              Depth / height
            </label>
            <div className="mt-1 flex gap-2">
              <input
                id="project-depth"
                type="number"
                min="0"
                step="0.1"
                value={depth}
                onChange={(e) => setDepth(e.target.value)}
                className={`${inputClassName} mt-0 flex-1`}
              />
              <select
                value={depthUnit}
                onChange={(e) => setDepthUnit(e.target.value)}
                className="rounded-[var(--radius-sm)] border border-card-border bg-white px-3 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                aria-label="Depth unit"
              >
                <option value="in">in</option>
                <option value="ft">ft</option>
                <option value="cm">cm</option>
              </select>
            </div>
          </div>
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
        {showResult ? (
          <div className="mt-5 space-y-4">
            <CalculatorResultCard
              label="Result"
              value="Estimate coming soon"
              highlight
              subtext={`Full ${calculator.title} formula is being built. Check back soon for accurate results.`}
            />
            {calculator.outputs.map((output) => (
              <CalculatorResultCard
                key={output.id}
                label={output.label}
                value="—"
                subtext={output.unit ? `Expected unit: ${output.unit}` : undefined}
              />
            ))}
          </div>
        ) : (
          <p className="mt-5 text-sm text-text-secondary">
            Enter your project dimensions and click Calculate to preview results.
          </p>
        )}
      </div>
    </div>
  );
}
