import type { Metadata } from "next";
import { AdSenseScript } from "@/components/adsense/AdSenseScript";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { JsonLd } from "@/components/seo/JsonLd";
import { createSiteMetadata } from "@/lib/metadata";
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
} from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = createSiteMetadata();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={[buildOrganizationSchema(), buildWebSiteSchema()]} />
        <GoogleAnalytics />
        <AdSenseScript />
        {children}
      </body>
    </html>
  );
}
