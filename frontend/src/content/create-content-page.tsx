import { SiteShell } from "@/components/layout/SiteShell";
import { PageSections } from "@/components/sections/PageSections";
import { getPage } from "@/content/load";
import { pageMetadata } from "@/content/metadata";
import type { Metadata } from "next";

type ContentPageProps = {
  pageId: string;
  rfpType?: "corporate" | "education" | "general";
  transparentHeader?: boolean;
};

export function createContentPage({
  pageId,
  rfpType,
  transparentHeader = false,
}: ContentPageProps) {
  const page = getPage(pageId);

  function Page() {
    return (
      <SiteShell transparentHeader={transparentHeader}>
        <PageSections page={page} rfpType={rfpType} />
      </SiteShell>
    );
  }

  function generateMetadata(): Metadata {
    return pageMetadata(page);
  }

  return { Page, generateMetadata, page };
}
