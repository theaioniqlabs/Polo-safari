import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

export function HeritageSection() {
  return (
    <section className="bg-surface-muted py-[var(--space-12)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="relative aspect-[2/1] overflow-hidden rounded-[var(--radius-lg)] lg:col-span-7">
            <MediaImage
              src={homeImages.heritageTemple}
              alt="Heritage temple at Polo Forest"
              sizes="(max-width:1024px) 100vw, 55vw"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
              Heritage &amp; Culture
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold">
              Temples, trails, and timeless stories
            </h2>
            <p className="mt-4 text-text-muted">
              Walk ancient shrines hidden in teak forest with expert historians. Heritage
              experiences connect archaeology, architecture, and living traditions.
            </p>
            <Link
              href="/experiences/heritage"
              className="mt-6 inline-block rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              Explore Heritage
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
