import { CALCULATOR_EMPTY_MESSAGE } from "@/lib/calculator-form-utils";

type CalculatorResultsEmptyProps = {
  message?: string;
};

export function CalculatorResultsEmpty({
  message = CALCULATOR_EMPTY_MESSAGE,
}: CalculatorResultsEmptyProps) {
  return <p className="mt-5 text-sm text-text-secondary">{message}</p>;
}
