import Link from "next/link";
import { MaterialStackMark } from "./MaterialStackMark";

type BrandLogoProps = {
  variant?: "header" | "footer";
};

export function BrandLogo({ variant = "header" }: BrandLogoProps) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className="flex items-center gap-2 rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
      aria-label="SmartMaterialCalc home"
    >
      <MaterialStackMark size={32} className="shrink-0 rounded-[var(--radius-sm)]" />
      <span
        className={`text-lg font-bold ${isFooter ? "text-white" : "text-text-primary"}`}
      >
        Smart
        <span className={isFooter ? "text-primary-mid" : "text-primary"}>
          Material
        </span>
        Calc
      </span>
    </Link>
  );
}
