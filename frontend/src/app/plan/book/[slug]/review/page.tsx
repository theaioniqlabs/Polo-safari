import Link from "next/link";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

type Props = { params: Promise<{ slug: string }> };

export default async function BookingReviewPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title="Book — Step 3: Review"
      description="Order summary, policies, and trust copy before payment."
      specRef="Step 12 · /plan/book/[slug]/review"
    >
      <Link
        href={`/plan/book/${slug}/payment`}
        className="text-sm font-medium text-primary hover:underline"
      >
        Continue to Payment →
      </Link>
    </PagePlaceholder>
  );
}
