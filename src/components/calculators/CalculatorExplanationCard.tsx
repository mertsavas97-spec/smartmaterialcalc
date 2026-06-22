import {
  CalculatorDiagram,
  type DiagramType,
} from "@/components/calculators/diagrams/CalculatorDiagram";

type CalculatorExplanationCardProps = {
  description: string;
  bullets: string[];
  imageLabel: string;
  diagramType: DiagramType;
};

export function CalculatorExplanationCard({
  description,
  bullets,
  imageLabel,
  diagramType,
}: CalculatorExplanationCardProps) {
  return (
    <article className="mt-10 rounded-[var(--radius-lg)] border border-card-border bg-white p-6 shadow-sm sm:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-xl font-bold text-text-primary">
            Understanding the results
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-text-secondary">
            {description}
          </p>
          <ul className="mt-4 space-y-2 text-sm text-text-secondary">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex gap-2">
                <span className="text-primary" aria-hidden="true">
                  •
                </span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
        <CalculatorDiagram type={diagramType} label={imageLabel} />
      </div>
    </article>
  );
}
