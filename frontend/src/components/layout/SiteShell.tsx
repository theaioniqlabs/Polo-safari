import { type ReactNode } from "react";
import { AnnouncementBar } from "@/components/home/AnnouncementBar";
import { Footer } from "./Footer";
import { Header } from "./Header";

type SiteShellProps = {
  children: ReactNode;
  transparentHeader?: boolean;
};

export function SiteShell({ children, transparentHeader = false }: SiteShellProps) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-[var(--radius-button)] focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-text-inverse"
      >
        Skip to main content
      </a>
      <div className="sticky top-0 z-50" data-zone="site-header-stack">
        <AnnouncementBar />
        <Header transparent={transparentHeader} />
      </div>
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
