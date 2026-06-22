type CalculatorValidationAlertProps = {
  message: string | null;
};

export function CalculatorValidationAlert({
  message,
}: CalculatorValidationAlertProps) {
  if (!message) {
    return null;
  }

  return (
    <p
      className="rounded-[var(--radius-sm)] border border-cta/30 bg-cta/5 px-3 py-2 text-sm text-cta"
      role="alert"
    >
      {message}
    </p>
  );
}
