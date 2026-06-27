import { getDefaultHomepageSettings, getDefaultSiteSettings } from "./defaults";
import type { HomepageSettings, SiteSettings } from "./types";

export function mergeHomepageSettings(
  partial: Partial<HomepageSettings> | null | undefined
): HomepageSettings {
  const defaults = getDefaultHomepageSettings();
  if (!partial) {
    return defaults;
  }

  return {
    hero: { ...defaults.hero, ...partial.hero },
    featuredCalculatorSlugs:
      partial.featuredCalculatorSlugs ?? defaults.featuredCalculatorSlugs,
    featuredGuideSlugs: partial.featuredGuideSlugs ?? defaults.featuredGuideSlugs,
    faqs: partial.faqs ?? defaults.faqs,
    trust: { ...defaults.trust, ...partial.trust },
    statistics: partial.statistics ?? defaults.statistics,
    categoryOrder: partial.categoryOrder ?? defaults.categoryOrder,
    seo: { ...defaults.seo, ...partial.seo },
  };
}

export function mergeSiteSettings(
  partial: Partial<SiteSettings> | null | undefined
): SiteSettings {
  const defaults = getDefaultSiteSettings();
  if (!partial) {
    return defaults;
  }

  return {
    contactEmail: partial.contactEmail ?? defaults.contactEmail,
    footerCopyright: partial.footerCopyright ?? defaults.footerCopyright,
    announcementBar: {
      ...defaults.announcementBar,
      ...partial.announcementBar,
    },
    socialLinks: partial.socialLinks ?? defaults.socialLinks,
  };
}
