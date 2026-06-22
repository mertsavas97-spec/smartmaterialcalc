import { absoluteUrl, SITE } from "./site";

export type JsonLdValue = Record<string, unknown>;

const ORGANIZATION_LOGO_URL = absoluteUrl("/icons/icon-512.png");

function buildOrganizationLogo(): JsonLdValue {
  return {
    "@type": "ImageObject",
    url: ORGANIZATION_LOGO_URL,
  };
}

function buildPublisherOrganization(): JsonLdValue {
  return {
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: buildOrganizationLogo(),
  };
}

export function buildOrganizationSchema(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
    email: SITE.email,
    logo: buildOrganizationLogo(),
  };
}

export function buildWebSiteSchema(): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.defaultDescription,
    publisher: buildPublisherOrganization(),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaqSchema(faqs: FaqItem[]): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildWebApplicationSchema({
  name,
  description,
  path,
  dateModified,
}: {
  name: string;
  description: string;
  path: string;
  dateModified?: string;
}): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: absoluteUrl(path),
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    ...(dateModified && { dateModified }),
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

export function buildArticleSchema({
  headline,
  description,
  path,
  datePublished,
  dateModified,
  image,
  wordCount,
}: {
  headline: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  image: string;
  wordCount?: number;
}): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [absoluteUrl(image)],
    datePublished,
    dateModified,
    ...(wordCount !== undefined && { wordCount }),
    author: {
      "@type": "Organization",
      name: SITE.editorialTeam,
    },
    publisher: buildPublisherOrganization(),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(path),
    },
  };
}

export function buildCollectionPageSchema({
  name,
  description,
  path,
  numberOfItems,
}: {
  name: string;
  description: string;
  path: string;
  numberOfItems: number;
}): JsonLdValue {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    numberOfItems,
    isPartOf: {
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  };
}
