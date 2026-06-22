import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return getSitemapEntries().map((entry) => ({
    url: `${SITE.url}${entry.url}`,
    ...(entry.lastModified && { lastModified: entry.lastModified }),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
