"use client";

type RelatedPickerProps = {
  label: string;
  options: Array<{ slug: string; title: string }>;
  selected: string[];
  onChange: (selected: string[]) => void;
};

export function RelatedPicker({
  label,
  options,
  selected,
  onChange,
}: RelatedPickerProps) {
  function toggle(slug: string) {
    if (selected.includes(slug)) {
      onChange(selected.filter((item) => item !== slug));
      return;
    }
    onChange([...selected, slug]);
  }

  function move(slug: string, direction: -1 | 1) {
    const index = selected.indexOf(slug);
    if (index < 0) return;
    const target = index + direction;
    if (target < 0 || target >= selected.length) return;
    const next = [...selected];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  }

  return (
    <div className="space-y-3">
      <span className="block text-sm font-medium">{label}</span>
      <div className="grid gap-2 md:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.slug}
            className="flex items-start gap-2 rounded-[var(--radius-sm)] border border-card-border px-3 py-2 text-sm"
          >
            <input
              type="checkbox"
              checked={selected.includes(option.slug)}
              onChange={() => toggle(option.slug)}
              className="mt-1"
            />
            <span>
              <span className="block font-medium">{option.title}</span>
              <span className="font-mono text-xs text-text-muted">{option.slug}</span>
            </span>
          </label>
        ))}
      </div>
      {selected.length > 0 ? (
        <div className="rounded-[var(--radius-sm)] border border-card-border bg-[#fafafa] p-3">
          <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
            Selected order
          </p>
          <ul className="mt-2 space-y-2">
            {selected.map((slug) => {
              const option = options.find((item) => item.slug === slug);
              return (
                <li key={slug} className="flex items-center justify-between gap-2 text-sm">
                  <span>{option?.title ?? slug}</span>
                  <span className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => move(slug, -1)}
                      className="text-xs text-text-secondary hover:text-text-primary"
                    >
                      Up
                    </button>
                    <button
                      type="button"
                      onClick={() => move(slug, 1)}
                      className="text-xs text-text-secondary hover:text-text-primary"
                    >
                      Down
                    </button>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
