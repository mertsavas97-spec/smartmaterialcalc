import type { MetadataRoute } from "next";
import { getSitemapEntries } from "@/lib/sitemap";
import { SITE } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = await getSitemapEntries();
  return entries.map((entry) => ({
    url: `${SITE.url}${entry.url}`,
    ...(entry.lastModified && { lastModified: entry.lastModified }),
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
