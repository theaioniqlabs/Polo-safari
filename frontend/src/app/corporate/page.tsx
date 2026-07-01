import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { SiteShell } from "@/components/layout/SiteShell";
import { PageSections } from "@/components/sections/PageSections";
import { getPage } from "@/content/load";
import { pageMetadata } from "@/content/metadata";
import type { Metadata } from "next";

export function generateMetadata(): Metadata {
  return pageMetadata(getPage("corporate"));
}

export default function CorporatePage() {
  const page = getPage("corporate");
  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Corporate Retreats" },
        ]}
      />
      <PageSections page={page} rfpType="corporate" />
    </SiteShell>
  );
}
