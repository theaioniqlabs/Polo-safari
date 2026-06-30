import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const featured = [
  {
    slug: "polo-forest-heritage-walk",
    title: "Polo Forest Heritage Walk",
    price: "From ₹1,899",
    badge: "Heritage",
    image: homeImages.featuredHeritage,
    large: true,
  },
  {
    slug: "night-safari",
    title: "Night Safari at Polo Forest",
    price: "From ₹2,499",
    badge: "Adventure",
    image: homeImages.featuredNightSafari,
    large: false,
  },
  {
    slug: "family-camping-weekend",
    title: "Family Camping Weekend",
    price: "From ₹4,999",
    badge: "Family",
    image: homeImages.featuredFamily,
    large: false,
  },
];

export function FeaturedExperiences() {
  const [hero, ...stacked] = featured;

  return (
    <section className="bg-surface-muted py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">Featured</p>
        <h2 className="mt-2 font-display text-3xl font-semibold md:text-4xl">
          Guest favourites at Polo Forest
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <article className="group relative overflow-hidden rounded-[var(--radius-md)] lg:col-span-7">
            <div className="relative aspect-[4/5] w-full">
              <Link href={`/experiences/${hero.slug}`} className="absolute inset-0">
                <MediaImage src={hero.image} alt={hero.title} sizes="(max-width:1024px) 100vw, 60vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </Link>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-text-inverse">
                <span className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  {hero.badge}
                </span>
                <h3 className="mt-2 font-display text-2xl font-semibold text-text-inverse">
                  <Link href={`/experiences/${hero.slug}`}>{hero.title}</Link>
                </h3>
                <p className="mt-1 text-sm text-white/85">{hero.price}</p>
                <Link
                  href={`/plan/book/${hero.slug}/dates`}
                  className="mt-4 inline-flex rounded-[var(--radius-button)] bg-primary px-5 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
                >
                  Book Now
                </Link>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {stacked.map((card) => (
              <article
                key={card.slug}
                className="group flex flex-1 overflow-hidden rounded-[var(--radius-md)] bg-surface shadow-[var(--shadow-soft)]"
              >
                <Link
                  href={`/experiences/${card.slug}`}
                  className="relative h-36 w-2/5 shrink-0 sm:h-auto sm:min-h-[140px]"
                >
                  <MediaImage src={card.image} alt={card.title} sizes="200px" />
                </Link>
                <div className="flex flex-col justify-center p-5">
                  <span className="text-xs font-semibold uppercase tracking-wide text-text-subtle">
                    {card.badge}
                  </span>
                  <h3 className="mt-1 font-display text-lg font-semibold">
                    <Link href={`/experiences/${card.slug}`} className="hover:text-primary">
                      {card.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-text-muted">{card.price}</p>
                  <Link
                    href={`/plan/book/${card.slug}/dates`}
                    className="mt-3 inline-flex w-fit rounded-[var(--radius-button)] bg-primary px-4 py-2 text-xs font-semibold text-text-inverse hover:bg-primary-hover"
                  >
                    Book Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <Link
          href="/experiences"
          className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
        >
          Browse all experiences →
        </Link>
      </Container>
    </section>
  );
}
