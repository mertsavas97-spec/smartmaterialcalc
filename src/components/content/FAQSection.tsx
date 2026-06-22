"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/data/calculator-faqs";

type FAQSectionProps = {
  faqs: FaqItem[];
  title?: string;
  className?: string;
};

export function FAQSection({
  faqs,
  title = "Frequently asked questions",
  className = "mt-10",
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <section
      className={`rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm sm:p-8 ${className}`}
      aria-labelledby="faq-heading"
    >
      <h2 id="faq-heading" className="text-xl font-bold text-text-primary">
        {title}
      </h2>
      <div className="mt-6 divide-y divide-card-border">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;
          const buttonId = `faq-button-${index}`;

          return (
            <div key={faq.question}>
              <h3>
                <button
                  id={buttonId}
                  type="button"
                  className="flex w-full items-start justify-between gap-4 py-4 text-left text-sm font-semibold text-text-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`mt-0.5 h-4 w-4 shrink-0 text-text-muted transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!isOpen}
                className="pb-4"
              >
                <p className="text-sm leading-relaxed text-text-secondary">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
