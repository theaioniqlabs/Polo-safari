import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { EnquiryFormSection } from "@/components/forms/EnquiryForms";

export const metadata: Metadata = {
  title: "Enquire Now | Polo Safari",
  description:
    "General enquiries for corporate retreats, school tours, family travel, and adventure programs. Response within 48 hours.",
};

export default function EnquirePage() {
  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Enquire Now" }]} />
      <EnquiryFormSection
        title="Enquire Now"
        description="Share your requirements — corporate RFPs and school programs also have dedicated forms on their pages."
      />
    </SiteShell>
  );
}
