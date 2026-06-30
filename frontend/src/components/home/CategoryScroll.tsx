import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";
import { experiencePillars } from "@/components/layout/navigation/nav-config";

const categoryImages: Record<string, string> = {
  heritage: homeImages.categoryHeritage,
  education: homeImages.categoryEducation,
  corporate: homeImages.categoryCorporate,
  family: homeImages.categoryFamily,
  adventure: homeImages.categoryAdventure,
};

const destinationsCard = {
  href: "#popular-destinations",
  label: "Popular Destinations",
  image: homeImages.categoryDestinations,
};

export function CategoryScroll() {
  const items = [...experiencePillars, destinationsCard];

  return (
    <section className="bg-surface-muted py-[var(--space-12)] md:py-[var(--space-15)]">
      <Container>
        <h2 className="max-w-2xl font-display text-3xl font-semibold md:text-4xl">
          How do you want to experience Polo Forest?
        </h2>
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative h-[280px] w-[200px] shrink-0 snap-start overflow-hidden rounded-[var(--radius-md)]"
            >
              <MediaImage
                src={"image" in item ? item.image : categoryImages[item.pillar]}
                alt={item.label}
                sizes="200px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-text-inverse">
                {item.label}
              </p>
            </Link>
          ))}
        </div>
        <Link
          href="/experiences"
          className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
        >
          View all experiences →
        </Link>
      </Container>
    </section>
  );
}
