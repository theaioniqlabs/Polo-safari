import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const adventures = [
  { title: "River crossing", slug: "river-crossing", image: homeImages.categoryAdventure },
  { title: "Night safari", slug: "night-safari", image: homeImages.featuredNightSafari },
  { title: "Jungle trek", slug: "jungle-trek", image: homeImages.adventurePanorama },
];

export function AdventureSection() {
  return (
    <section className="bg-surface-water py-[var(--space-12)]">
      <div className="relative mb-10 h-[40vh] min-h-[280px] w-full overflow-hidden md:h-[50vh]">
        <MediaImage src={homeImages.adventurePanorama} alt="Adventure at Polo Forest" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e2a24]/60 to-transparent" />
        <Container className="relative flex h-full items-end pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-white/80">
              Adventure
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-text-inverse md:text-4xl">
              Rivers, trails, and open sky
            </h2>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {adventures.map((item) => (
            <Link
              key={item.slug}
              href={`/experiences/${item.slug}`}
              className="group relative h-48 w-64 shrink-0 snap-start overflow-hidden rounded-[var(--radius-md)]"
            >
              <MediaImage src={item.image} alt={item.title} sizes="256px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-4 left-4 font-semibold text-text-inverse">{item.title}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-muted">
            <div className="flex h-64 items-center justify-center bg-primary-subtle text-sm text-text-muted">
              Map embed — Polo Forest trail network
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-text-muted">
              Explore guided river crossings, night safaris, and jungle treks with certified
              naturalists. All adventures depart from Polo Forest base camp.
            </p>
            <Link
              href="/experiences/adventure"
              className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
            >
              Browse adventure experiences →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
