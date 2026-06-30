import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

export function FamilySection() {
  return (
    <section className="bg-surface py-[var(--space-12)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
              Family Getaways
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Memories made around the campfire
            </h2>
            <p className="mt-4 text-text-muted">
              Kid-friendly camping, nature walks, and stargazing weekends designed for families
              from Ahmedabad and beyond.
            </p>
            <Link
              href="/experiences/family"
              className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
            >
              View family packages →
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] order-1 lg:order-2 lg:col-span-7">
            <MediaImage
              src={homeImages.familyCampfire}
              alt="Family camping at Polo Forest"
              sizes="(max-width:1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
