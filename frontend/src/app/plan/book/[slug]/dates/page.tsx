import Link from "next/link";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

const steps = [
  { step: 1, path: "dates", label: "Dates & guests" },
  { step: 2, path: "details", label: "Guest details" },
  { step: 3, path: "review", label: "Review" },
  { step: 4, path: "payment", label: "Payment" },
];

type Props = { params: Promise<{ slug: string }> };

export default async function BookingDatesPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title="Book — Step 1: Dates"
      description="Select dates and party size. Login required before this step in production."
      specRef="Step 12 · /plan/book/[slug]/dates"
    >
      <nav className="flex flex-wrap gap-2">
        {steps.map((s) => (
          <Link
            key={s.path}
            href={`/plan/book/${slug}/${s.path}`}
            className="rounded-[var(--radius-button)] border border-border px-4 py-2 text-sm hover:border-primary hover:text-primary"
          >
            Step {s.step}: {s.label}
          </Link>
        ))}
      </nav>
    </PagePlaceholder>
  );
}
