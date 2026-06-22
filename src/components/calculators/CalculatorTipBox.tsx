import { type ReactNode } from "react";
import { Lightbulb } from "lucide-react";

type CalculatorTipBoxProps = {
  children: ReactNode;
};

export function CalculatorTipBox({ children }: CalculatorTipBoxProps) {
  return (
    <div className="flex gap-3 rounded-[var(--radius-sm)] bg-warning p-4">
      <Lightbulb
        className="h-5 w-5 shrink-0 text-[#F9A825]"
        aria-hidden="true"
      />
      <p className="text-sm leading-relaxed text-text-secondary">{children}</p>
    </div>
  );
}
