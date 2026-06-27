import { categories } from "@/data/categories";
import { popularCalculators } from "@/data/calculators";
import { homepageFaqs } from "@/data/homepage-faqs";
import { guides } from "@/data/guides";
import { SITE } from "@/lib/site";
import type { HomepageSettings, SiteSettings } from "./types";

export function getDefaultHomepageSettings(): HomepageSettings {
  return {
    hero: {
      badge: "Free · No signup required",
      title: "Plan your project with material estimates.",
      subtitle:
        "Instant calculators for paint, concrete, tile, flooring, gravel and more. Built for homeowners, DIYers, and contractors.",
      ctaLabel: "Browse calculators",
      ctaUrl: "/calculators",
    },
    featuredCalculatorSlugs: popularCalculators.map((calculator) => calculator.slug),
    featuredGuideSlugs: guides.slice(0, 3).map((guide) => guide.slug),
    faqs: homepageFaqs,
    trust: {
      headline:
        "{calculatorCount} free calculators. No signup. Planning estimates you can verify.",
      linkLabel: "See how our calculations and assumptions work →",
      linkUrl: "/methodology",
      ctaLabel: "Explore calculators",
      ctaUrl: "/calculators",
    },
    statistics: [
      { value: "{calculatorCount}", label: "Free calculators" },
      { value: "100%", label: "Free to use" },
      { value: "Instant", label: "Planning estimates" },
    ],
    categoryOrder: categories.map((category) => category.slug),
    seo: {
      metaTitle: "Free Home Improvement Calculators | Paint, Concrete, Tile & More",
      metaDescription:
        "Instant material calculators for homeowners, DIYers, and contractors. Estimate how much paint, concrete, gravel, tile, flooring, and other materials you need — free and no signup required.",
      ogTitle: "Free Home Improvement Calculators | Paint, Concrete, Tile & More",
      ogDescription:
        "Instant material calculators for homeowners, DIYers, and contractors. Estimate how much paint, concrete, gravel, tile, flooring, and other materials you need — free and no signup required.",
    },
  };
}

export function getDefaultSiteSettings(): SiteSettings {
  return {
    contactEmail: SITE.email,
    footerCopyright: "SmartMaterialCalc. All rights reserved.",
    announcementBar: {
      enabled: false,
      message: "",
      linkLabel: "",
      linkUrl: "",
    },
    socialLinks: [],
  };
}

export function buildDefaultHomepageSettingsPayload(): HomepageSettings {
  return getDefaultHomepageSettings();
}

export function buildDefaultSiteSettingsPayload(): SiteSettings {
  return getDefaultSiteSettings();
}
