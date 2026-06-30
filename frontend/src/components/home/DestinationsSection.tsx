import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const destinations = [
  { name: "Polo Forest", slug: "polo-forest", image: homeImages.poloForestPanorama },
  { name: "Harnav River", slug: "harnav-river", image: homeImages.adventurePanorama },
  { name: "Sharaneshwar Temple", slug: "sharaneshwar", image: homeImages.heritageTemple },
  { name: "Jain Deri", slug: "jain-deri", image: homeImages.categoryHeritage },
];

export function DestinationsSection() {
  return (
    <section id="popular-destinations" className="bg-surface-muted py-[var(--space-12)]">
      <div className="relative mb-10 h-[35vh] min-h-[240px] w-full overflow-hidden">
        <MediaImage src={homeImages.poloForestPanorama} alt="Polo Forest panorama" sizes="100vw" />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          Popular Destinations
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold">Places to explore at Polo Forest</h2>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {destinations.map((d) => (
            <Link
              key={d.slug}
              href={`/destinations/${d.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-[var(--radius-md)]"
            >
              <MediaImage src={d.image} alt={d.name} sizes="(max-width:768px) 50vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <p className="absolute bottom-3 left-3 text-sm font-semibold text-text-inverse">
                {d.name}
              </p>
            </Link>
          ))}
        </div>

        <Link
          href="/destinations"
          className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
        >
          View all destinations →
        </Link>
      </Container>
    </section>
  );
}
