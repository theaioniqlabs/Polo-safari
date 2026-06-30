import { PagePlaceholder } from "@/components/layout/PagePlaceholder";

type Props = { params: Promise<{ slug: string }> };

export default async function ExperienceDetailPage({ params }: Props) {
  const { slug } = await params;

  return (
    <PagePlaceholder
      title={slug.replace(/-/g, " ")}
      description="Experience detail with booking widget, itinerary, and trust signals. See docs/ux-wireframes/04-experience-detail.md."
      specRef={`Step 4 · /experiences/${slug}`}
    >
      <p className="text-sm text-text-muted">
        Book CTA routes to{" "}
        <code className="rounded bg-surface-muted px-1.5 py-0.5">
          /plan/book/{slug}/dates
        </code>
      </p>
    </PagePlaceholder>
  );
}
