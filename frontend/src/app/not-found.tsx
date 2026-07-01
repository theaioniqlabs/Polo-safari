import { SiteShell } from "@/components/layout/SiteShell";
import { PageSections } from "@/components/sections/PageSections";
import { getPage } from "@/content/load";
import { pageMetadata } from "@/content/metadata";
import type { Metadata } from "next";

const page = getPage("not-found");

export const metadata: Metadata = pageMetadata(page, { noindex: true });

export default function NotFoundPage() {
  return (
    <SiteShell>
      <PageSections page={page} />
    </SiteShell>
  );
}
