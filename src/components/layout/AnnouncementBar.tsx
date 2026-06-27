import Link from "next/link";
import type { AnnouncementBar as AnnouncementBarSettings } from "@/lib/cms/types";

type AnnouncementBarProps = AnnouncementBarSettings;

export function AnnouncementBar({
  message,
  linkLabel,
  linkUrl,
}: AnnouncementBarProps) {
  return (
    <div className="border-b border-primary/20 bg-primary-light px-4 py-2 text-center text-sm text-primary-dark">
      <span>{message}</span>
      {linkLabel && linkUrl ? (
        <>
          {" "}
          <Link href={linkUrl} className="font-medium underline hover:text-primary">
            {linkLabel}
          </Link>
        </>
      ) : null}
    </div>
  );
}
