type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-card-border bg-white px-5 py-4 text-center shadow-sm">
      <p className="text-2xl font-bold text-primary sm:text-3xl">{value}</p>
      <p className="mt-1 text-sm text-text-secondary">{label}</p>
    </div>
  );
}
