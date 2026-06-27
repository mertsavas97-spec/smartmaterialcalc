"use client";

import { useState } from "react";
import type { FaqItem } from "@/data/calculator-faqs";

type FaqEditorProps = {
  initialFaqs: FaqItem[];
  onChange?: (faqs: FaqItem[]) => void;
};

export function FaqEditor({ initialFaqs, onChange }: FaqEditorProps) {
  const [faqs, setFaqs] = useState<FaqItem[]>(initialFaqs);

  function updateFaqs(next: FaqItem[]) {
    setFaqs(next);
    onChange?.(next);
  }

  function updateFaq(index: number, field: keyof FaqItem, value: string) {
    updateFaqs(
      faqs.map((faq, i) => (i === index ? { ...faq, [field]: value } : faq))
    );
  }

  function addFaq() {
    updateFaqs([...faqs, { question: "", answer: "" }]);
  }

  function removeFaq(index: number) {
    updateFaqs(faqs.filter((_, i) => i !== index));
  }

  function moveFaq(index: number, direction: -1 | 1) {
    const next = [...faqs];
    const target = index + direction;
    if (target < 0 || target >= next.length) {
      return;
    }
    [next[index], next[target]] = [next[target], next[index]];
    updateFaqs(next);
  }

  return (
    <div className="space-y-4">
      <input type="hidden" name="faqsJson" value={JSON.stringify(faqs)} readOnly />
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="rounded-[var(--radius-lg)] border border-card-border bg-white p-4"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <p className="text-sm font-medium">FAQ {index + 1}</p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => moveFaq(index, -1)}
                className="text-xs text-text-secondary hover:text-text-primary"
              >
                Up
              </button>
              <button
                type="button"
                onClick={() => moveFaq(index, 1)}
                className="text-xs text-text-secondary hover:text-text-primary"
              >
                Down
              </button>
              <button
                type="button"
                onClick={() => removeFaq(index)}
                className="text-xs text-red-700 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
          <label className="block text-sm">
            <span className="font-medium">Question</span>
            <input
              value={faq.question}
              onChange={(event) => updateFaq(index, "question", event.target.value)}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
          <label className="mt-3 block text-sm">
            <span className="font-medium">Answer</span>
            <textarea
              value={faq.answer}
              rows={3}
              onChange={(event) => updateFaq(index, "answer", event.target.value)}
              className="mt-1 w-full rounded-[var(--radius-sm)] border border-card-border px-3 py-2"
            />
          </label>
        </div>
      ))}
      <button
        type="button"
        onClick={addFaq}
        className="rounded-[var(--radius-sm)] border border-card-border px-4 py-2 text-sm font-medium hover:bg-[#fafafa]"
      >
        Add FAQ
      </button>
    </div>
  );
}
