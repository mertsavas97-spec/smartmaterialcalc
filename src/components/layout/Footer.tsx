import Link from "next/link";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "./Container";
import type { SocialLink } from "@/lib/cms/types";

const footerLinks = {
  calculators: [
    { href: "/calculators/paint-calculator", label: "Paint Calculator" },
    { href: "/calculators/concrete-calculator", label: "Concrete Calculator" },
    { href: "/calculators/tile-calculator", label: "Tile Calculator" },
    { href: "/calculators/flooring-calculator", label: "Flooring Calculator" },
    { href: "/calculators", label: "View all calculators" },
  ],
  categories: [
    { href: "/categories/paint", label: "Paint calculators" },
    { href: "/categories/concrete", label: "Concrete calculators" },
    { href: "/categories/outdoor", label: "Outdoor calculators" },
    { href: "/categories", label: "All categories" },
  ],
  guides: [
    { href: "/guides/how-much-paint-do-i-need", label: "How Much Paint Do I Need?" },
    { href: "/guides/deck-board-spacing-guide", label: "Deck Board Spacing Guide" },
    { href: "/guides/drywall-sheet-size-guide", label: "Drywall Sheet Size Guide" },
    { href: "/guides/roofing-squares-explained", label: "Roofing Squares Explained" },
    { href: "/guides", label: "All guides" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/methodology", label: "Methodology" },
    { href: "/contact", label: "Contact" },
    { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ],
};

type FooterProps = {
  copyrightText?: string;
  socialLinks?: SocialLink[];
};

export function Footer({
  copyrightText = "SmartMaterialCalc. All rights reserved.",
  socialLinks = [],
}: FooterProps) {
  return (
    <footer className="mt-auto bg-footer text-white">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Free home improvement calculators for homeowners, DIYers, and
              contractors. Plan your project with material estimates — verify
              before purchase.
            </p>
            <p className="mt-4 text-xs text-white/50">SmartMaterialCalc.app</p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Calculators
            </h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.calculators.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h2 className="mt-8 text-sm font-semibold uppercase tracking-wide text-white/90">
              Categories
            </h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Guides
            </h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/90">
              Company
            </h2>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          {socialLinks.length > 0 ? (
            <div className="mb-3 flex flex-wrap items-center justify-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={`${link.platform}-${link.url}`}
                  href={link.url}
                  className="text-white/70 transition-colors hover:text-white"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          ) : null}
          <p>
            &copy; {new Date().getFullYear()} {copyrightText}
          </p>
        </div>
      </Container>
    </footer>
  );
}
