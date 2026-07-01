import { type ReactNode } from "react";
import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { getAnnouncementContent } from "@/content/home-content";
import { Footer } from "./Footer";
import { Header } from "./Header";

type SiteShellProps = {
  children: ReactNode;
  transparentHeader?: boolean;
};

export function SiteShell({ children, transparentHeader = false }: SiteShellProps) {
  const announcement = getAnnouncementContent();

  return (
    <>
      <div className="sticky top-0 z-50 isolate" data-zone="site-header-stack">
        <AnnouncementBar
          message={announcement.message}
          linkLabel={announcement.linkLabel}
          href={announcement.href}
        />
        <Header transparent={transparentHeader} />
      </div>
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
