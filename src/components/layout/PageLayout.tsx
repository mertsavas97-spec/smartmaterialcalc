import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { getSiteSettings } from "@/lib/cms/loader";

type PageLayoutProps = {
  children: React.ReactNode;
};

export async function PageLayout({ children }: PageLayoutProps) {
  const siteSettings = await getSiteSettings();

  return (
    <>
      {siteSettings.announcementBar.enabled && siteSettings.announcementBar.message ? (
        <AnnouncementBar {...siteSettings.announcementBar} />
      ) : null}
      <Header />
      <div className="flex-1">{children}</div>
      <Footer
        copyrightText={siteSettings.footerCopyright}
        socialLinks={siteSettings.socialLinks}
      />
    </>
  );
}
