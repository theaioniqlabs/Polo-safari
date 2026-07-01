import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { PlanMyJourneyWizard } from "@/components/forms/EnquiryForms";

export const metadata: Metadata = {
  title: "Plan My Journey | Polo Safari",
  description:
    "Tell us your trip type, destination, and group size — our team will tailor a proposal within 48 hours. Enquiry-first, no online booking.",
};

export default function PlanMyJourneyPage() {
  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Plan My Journey" },
        ]}
      />
      <section className="bg-surface-muted py-[var(--space-12)]">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h1 className="type-display text-3xl md:text-4xl">Plan My Journey</h1>
            <p className="mt-3 text-text-muted">
              Three quick steps — then our travel experts respond with a tailored proposal. No payment
              or login required.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-xl rounded-[var(--radius-md)] border border-border bg-surface p-6 shadow-[var(--shadow-soft)] md:p-8">
            <PlanMyJourneyWizard />
          </div>
        </Container>
      </section>
    </SiteShell>
  );
}
