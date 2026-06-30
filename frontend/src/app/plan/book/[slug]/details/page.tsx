import Link from "next/link";
import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

type Props = { params: Promise<{ slug: string }> };

export default async function BookingDetailsPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title="Book — Step 2: Guest Details"
      description="Collect lead guest and participant information."
      specRef="Step 12 · /plan/book/[slug]/details"
    >
      <Link
        href={`/plan/book/${slug}/review`}
        className="text-sm font-medium text-primary hover:underline"
      >
        Continue to Review →
      </Link>
    </PagePlaceholder>
  );
}
