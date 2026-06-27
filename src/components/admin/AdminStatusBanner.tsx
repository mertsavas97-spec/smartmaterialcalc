type AdminStatusBannerProps = {
  saved?: string;
  error?: string;
  warnings?: string;
};

export function AdminStatusBanner({ saved, error, warnings }: AdminStatusBannerProps) {
  if (error) {
    return (
      <p className="mb-6 rounded-[var(--radius-sm)] bg-red-50 px-4 py-3 text-sm text-red-700">
        {error}
      </p>
    );
  }

  if (saved === "1") {
    return (
      <div className="mb-6 space-y-2">
        <p className="rounded-[var(--radius-sm)] bg-primary-light px-4 py-3 text-sm text-primary-dark">
          Settings saved successfully.
        </p>
        {warnings && (
          <p className="rounded-[var(--radius-sm)] bg-[#fff3e0] px-4 py-3 text-sm text-[#8a4b00]">
            {warnings}
          </p>
        )}
      </div>
    );
  }

  return null;
}
