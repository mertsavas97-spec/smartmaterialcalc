"use client";

import { useState } from "react";
import type { HomepageStatistic } from "@/lib/cms/types";

type StatisticsEditorProps = {
  initialStatistics: HomepageStatistic[];
};

export function StatisticsEditor({ initialStatistics }: StatisticsEditorProps) {
  const [statistics, setStatistics] = useState(initialStatistics);

  function updateStat(index: number, field: keyof HomepageStatistic, value: string) {
    setStatistics((current) =>
      current.map((stat, i) => (i === index ? { ...stat, [field]: value } : stat))
    );
  }

  function addStat() {
    setStatistics((current) => [...current, { value: "", label: "" }]);
  }

  function removeStat(index: number) {
    setStatistics((current) => current.filter((_, i) => i !== index));
  }

  return (
    <div className="space-y-4">
      <input
        type="hidden"
        name="statisticsJson"
        value={JSON.stringify(statistics)}
        readOnly
      />
      <p className="text-xs text-text-muted">
        Use {"{calculatorCount}"} in values to show the live calculator total.
      </p>
      {statistics.map((stat, index) => (
        <div
          key={index}
          className="grid gap-3 rounded-[var(--radius-lg)] border border-card-border bg-white p-4 md:grid-cols-2"
        >
          <label className="block text-sm">
            <span className="font-medium">Value</span>
            <input
              value={stat.value}
              onChange={(event) => updateStat(index, "value", event.target.value)}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="block text-sm">
            <span className="font-medium">Label</span>
            <input
              value={stat.label}
              onChange={(event) => updateStat(index, "label", event.target.value)}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <div className="md:col-span-2">
            <button
              type="button"
              onClick={() => removeStat(index)}
              className="text-xs text-red-700 hover:underline"
            >
              Remove statistic
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addStat}
        className="rounded-[var(--radius-sm)] border border-card-border px-4 py-2 text-sm font-medium hover:bg-[#fafafa]"
      >
        Add statistic
      </button>
    </div>
  );
}
