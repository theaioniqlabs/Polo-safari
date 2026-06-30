import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

type Props = { params: Promise<{ slug: string }> };

export default async function BookingPaymentPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title="Book — Step 4: Payment"
      description="UPI (GPay, PhonePe, Paytm) and card checkout — placeholder only."
      specRef={`Step 12 · /plan/book/${slug}/payment`}
    >
      <p className="text-sm text-text-muted">
        Confirmation route:{" "}
        <code className="rounded bg-surface-muted px-1.5 py-0.5">
          /plan/book/{slug}/confirmation
        </code>{" "}
        (not scaffolded)
      </p>
    </PagePlaceholder>
  );
}
