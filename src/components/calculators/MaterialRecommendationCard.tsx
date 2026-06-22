import { Package } from "lucide-react";
import type { CalculatorMaterialList } from "@/data/calculator-materials";

type MaterialRecommendationCardProps = {
  materials: CalculatorMaterialList;
};

export function MaterialRecommendationCard({
  materials,
}: MaterialRecommendationCardProps) {
  return (
    <div className="mt-6 rounded-[var(--radius-sm)] border border-card-border bg-white px-4 py-4">
      <div className="flex items-start gap-3">
        <Package
          className="mt-0.5 h-4 w-4 shrink-0 text-primary"
          aria-hidden="true"
        />
        <div>
          <p className="text-sm font-semibold text-text-primary">
            {materials.title}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {materials.materials.map((material) => (
              <li
                key={material}
                className="rounded-full bg-primary-light px-2.5 py-1 text-xs font-medium text-primary-dark"
              >
                {material}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs leading-relaxed text-text-muted">
            {materials.note}
          </p>
        </div>
      </div>
    </div>
  );
}
