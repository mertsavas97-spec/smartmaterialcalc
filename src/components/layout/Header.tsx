"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand/BrandLogo";
import { Container } from "./Container";
import { Button } from "../ui/Button";

const navLinks = [
  { href: "/calculators", label: "Calculators" },
  { href: "/guides", label: "Guides" },
  { href: "/categories", label: "Categories" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-card-border bg-white/95 backdrop-blur-sm">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <BrandLogo />

          <nav
            className="hidden items-center gap-6 md:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-[var(--radius-sm)] text-sm font-medium text-text-secondary transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/calculators"
              className="rounded-[var(--radius-sm)] p-2 text-text-secondary transition-colors hover:bg-primary-light hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Browse calculators"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Button href="/calculators" size="sm">
              All Calculators
            </Button>
          </div>

          <button
            type="button"
            className="rounded-[var(--radius-sm)] p-2 text-text-secondary md:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {mobileOpen && (
          <nav
            className="border-t border-card-border py-4 md:hidden"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-medium text-text-secondary hover:bg-primary-light hover:text-primary"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 px-3">
                <Button href="/calculators" className="w-full">
                  All Calculators
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </Container>
    </header>
  );
}
