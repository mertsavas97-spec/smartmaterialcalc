import Link from "next/link";

const sections = [
  {
    href: "/admin/guides",
    title: "Guides",
    description: "Create, edit, and publish guide articles.",
  },
  {
    href: "/admin/homepage",
    title: "Homepage",
    description: "Hero, featured content, FAQ, trust copy, and statistics.",
  },
  {
    href: "/admin/seo",
    title: "SEO",
    description: "Homepage meta title, description, and Open Graph fields.",
  },
  {
    href: "/admin/site-settings",
    title: "Site settings",
    description: "Contact email, footer, announcement bar, and social links.",
  },
  {
    href: "/admin/analytics",
    title: "Analytics",
    description: "Users, sessions, traffic sources, and top content from Google Analytics.",
  },
];

export default function AdminDashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p className="mt-1 text-sm text-text-secondary">
        Manage site content from the sections below.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {sections.map((section) => (
          <Link
            key={section.href}
            href={section.href}
            className="rounded-[var(--radius-lg)] border border-card-border bg-white p-6 transition-shadow hover:shadow-sm"
          >
            <h2 className="text-lg font-semibold text-text-primary">{section.title}</h2>
            <p className="mt-2 text-sm text-text-secondary">{section.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
