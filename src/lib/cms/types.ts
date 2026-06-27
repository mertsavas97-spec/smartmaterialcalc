import type { FaqItem } from "@/data/calculator-faqs";

export type HomepageHero = {
  badge: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaUrl: string;
};

export type HomepageTrust = {
  headline: string;
  linkLabel: string;
  linkUrl: string;
  ctaLabel: string;
  ctaUrl: string;
};

export type HomepageStatistic = {
  value: string;
  label: string;
};

export type HomepageSeo = {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
};

export type HomepageSettings = {
  hero: HomepageHero;
  featuredCalculatorSlugs: string[];
  featuredGuideSlugs: string[];
  faqs: FaqItem[];
  trust: HomepageTrust;
  statistics: HomepageStatistic[];
  categoryOrder: string[];
  seo: HomepageSeo;
};

export type AnnouncementBar = {
  enabled: boolean;
  message: string;
  linkLabel: string;
  linkUrl: string;
};

export type SocialLink = {
  platform: string;
  url: string;
};

export type SiteSettings = {
  contactEmail: string;
  footerCopyright: string;
  announcementBar: AnnouncementBar;
  socialLinks: SocialLink[];
};

export type HomepageSettingsRow = {
  id: number;
  settings: Partial<HomepageSettings>;
  updated_at: string;
};

export type SiteSettingsRow = {
  id: number;
  settings: Partial<SiteSettings>;
  updated_at: string;
};
