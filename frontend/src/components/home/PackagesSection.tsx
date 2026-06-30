import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const packages = [
  {
    title: "Day Escape",
    price: "From ₹1,899",
    duration: "1 day",
    image: homeImages.featuredHeritage,
    slug: "day-escape",
  },
  {
    title: "Weekend Retreat",
    price: "From ₹4,999",
    duration: "2D/1N",
    image: homeImages.featuredFamily,
    slug: "weekend-retreat",
  },
  {
    title: "Monsoon Special",
    price: "From ₹2,499",
    duration: "1 day",
    image: homeImages.heroMonsoon,
    slug: "monsoon-special",
  },
];

export function PackagesSection() {
  return (
    <section className="bg-surface py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">Packages</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">Curated stays &amp; experiences</h2>

        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {packages.map((pkg) => (
            <article
              key={pkg.slug}
              className="w-[320px] shrink-0 snap-start overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[16/9]">
                <MediaImage src={pkg.image} alt={pkg.title} sizes="320px" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-xl font-semibold">{pkg.title}</h3>
                <p className="mt-1 text-sm text-text-muted">
                  {pkg.price} · {pkg.duration}
                </p>
                <Link
                  href={`/plan/book/${pkg.slug}/dates`}
                  className="mt-4 inline-flex rounded-[var(--radius-button)] border border-primary px-4 py-2 text-sm font-semibold text-primary hover:bg-primary-subtle"
                >
                  View package
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
