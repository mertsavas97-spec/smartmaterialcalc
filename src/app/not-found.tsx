import Link from "next/link";
import type { Metadata } from "next";
import { PageLayout } from "@/components/layout/PageLayout";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has been moved.",
  noIndex: true,
  omitCanonical: true,
});

export default function NotFound() {
  return (
    <PageLayout>
      <Container className="flex flex-col items-center py-20 text-center sm:py-32">
        <p className="text-6xl font-bold text-primary">404</p>
        <h1 className="mt-4 text-2xl font-bold text-text-primary sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-md text-sm text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Try browsing our calculators instead.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/calculators">Browse calculators</Button>
          <Button href="/" variant="outline">
            Go home
          </Button>
        </div>
        <p className="mt-6 text-xs text-text-muted">
          Need help?{" "}
          <Link href="/contact" className="text-primary hover:underline">
            Contact us
          </Link>
        </p>
      </Container>
    </PageLayout>
  );
}
