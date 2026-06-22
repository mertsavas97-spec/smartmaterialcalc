import Link from "next/link";
import { Container } from "./Container";
import { PageLayout } from "./PageLayout";

type ContentPageShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export function ContentPageShell({
  title,
  description,
  children,
}: ContentPageShellProps) {
  return (
    <PageLayout>
      <Container className="py-10 sm:py-14">
        <header className="max-w-3xl">
          <h1 className="text-3xl font-bold text-text-primary sm:text-4xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 text-base leading-relaxed text-text-secondary">
              {description}
            </p>
          )}
        </header>
        <article className="prose-calchive mt-10 max-w-3xl">{children}</article>
      </Container>
    </PageLayout>
  );
}

type ContentSectionProps = {
  title: string;
  children: React.ReactNode;
};

export function ContentSection({ title, children }: ContentSectionProps) {
  return (
    <section className="mb-10">
      <h2 className="text-xl font-bold text-text-primary">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-text-secondary">
        {children}
      </div>
    </section>
  );
}

export function ContentLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="text-primary hover:underline">
      {children}
    </Link>
  );
}
