import type { Metadata } from "next";
import { ADSENSE_CLIENT_ID } from "@/lib/adsense/env";
import { isProductionDeployment, shouldAllowSearchIndexingMetadata } from "./indexing";
import { absoluteUrl, SITE } from "./site";

/** Bumped when favicon / PWA icon binaries change to bust browser caches. */
export const ICON_ASSET_VERSION = "3";

type CreatePageMetadataOptions = {
  title: string;
  description?: string;
  path?: string;
  noIndex?: boolean;
  absoluteTitle?: boolean;
  omitCanonical?: boolean;
  openGraphType?: "website" | "article";
  openGraphTitle?: string;
  openGraphDescription?: string;
  publishedTime?: string;
  modifiedTime?: string;
  image?: {
    url: string;
    alt: string;
    width?: number;
    height?: number;
  };
};

const DEFAULT_OG_IMAGE = {
  url: absoluteUrl("/opengraph-image"),
  width: 1200,
  height: 630,
  alt: `${SITE.name} — Free Home Improvement Calculators`,
};

export function createPageMetadata({
  title,
  description = SITE.defaultDescription,
  path = "",
  noIndex = false,
  absoluteTitle = false,
  omitCanonical = false,
  openGraphType = "website",
  openGraphTitle,
  openGraphDescription,
  publishedTime,
  modifiedTime,
  image,
}: CreatePageMetadataOptions): Metadata {
  const pageUrl = path ? absoluteUrl(path) : undefined;
  const ogImage = image
    ? {
        url: absoluteUrl(image.url),
        width: image.width ?? 1200,
        height: image.height ?? 675,
        alt: image.alt,
      }
    : DEFAULT_OG_IMAGE;

  const resolvedOgTitle =
    openGraphTitle ?? (absoluteTitle ? title : `${title} | ${SITE.name}`);
  const resolvedOgDescription = openGraphDescription ?? description;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    ...(!omitCanonical &&
      pageUrl && {
        alternates: {
          canonical: pageUrl,
        },
      }),
    openGraph: {
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      ...(pageUrl && !omitCanonical && { url: pageUrl }),
      siteName: SITE.name,
      type: openGraphType,
      locale: "en_US",
      images: [ogImage],
      ...(openGraphType === "article" && {
        publishedTime,
        modifiedTime,
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedOgTitle,
      description: resolvedOgDescription,
      images: [ogImage.url],
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

export function createSiteMetadata(): Metadata {
  const defaultTitle = `Free Home Improvement Calculators | ${SITE.name}`;

  return {
    metadataBase: new URL(SITE.url),
    title: {
      default: defaultTitle,
      template: `%s | ${SITE.name}`,
    },
    description: SITE.defaultDescription,
    keywords: [
      "home improvement calculator",
      "paint calculator",
      "concrete calculator",
      "tile calculator",
      "flooring calculator",
      "DIY calculator",
    ],
    ...(!shouldAllowSearchIndexingMetadata() && {
      robots: {
        index: false,
        follow: false,
      },
    }),
    icons: {
      icon: [
        { url: `/icons/icon-48.png?v=${ICON_ASSET_VERSION}`, sizes: "48x48", type: "image/png" },
        { url: `/icons/icon-192.png?v=${ICON_ASSET_VERSION}`, sizes: "192x192", type: "image/png" },
        { url: `/icons/icon-512.png?v=${ICON_ASSET_VERSION}`, sizes: "512x512", type: "image/png" },
      ],
      shortcut: `/favicon.ico?v=${ICON_ASSET_VERSION}`,
      apple: `/apple-touch-icon.png?v=${ICON_ASSET_VERSION}`,
    },
    openGraph: {
      title: defaultTitle,
      description: SITE.defaultDescription,
      url: SITE.url,
      siteName: SITE.name,
      type: "website",
      locale: "en_US",
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: SITE.defaultDescription,
      images: [DEFAULT_OG_IMAGE.url],
    },
    ...(isProductionDeployment() && {
      other: {
        "google-adsense-account": ADSENSE_CLIENT_ID,
      },
    }),
  };
}
