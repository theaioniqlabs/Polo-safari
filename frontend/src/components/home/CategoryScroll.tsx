import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { experiencePillars } from "@/components/layout/navigation/nav-config";
import { getSpecializationsContent, homeSectionImage } from "@/content/home-content";
import { stockImageUrlFromKeywords } from "@/content/stock-images";

const pillarKeywords: Record<string, string[]> = {
  heritage: ["polo forest heritage", "temple"],
  education: ["school field trip", "education"],
  corporate: ["corporate team building", "leadership"],
  family: ["family vacation", "campfire"],
  adventure: ["adventure trek", "mountain"],
};

const destinationsCard = {
  href: "#popular-destinations",
  label: "Popular Destinations",
  keywords: ["india map travel destinations", "gujarat tourism"],
};

export function CategoryScroll() {
  const content = getSpecializationsContent();
  const sectionImage = homeSectionImage("specializations");
  const items = [...experiencePillars, destinationsCard];

  return (
    <section className="bg-surface-muted pt-6 pb-[var(--space-12)] md:pt-8 md:pb-[var(--space-15)]">
      <Container>
        <h2 className="max-w-2xl type-display text-3xl md:text-4xl">
          {content.heading}
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">{content.subheading}</p>
        {content.description && (
          <p className="mt-2 max-w-2xl text-[0.9375rem] leading-relaxed text-text-muted">{content.description}</p>
        )}
        <div className="mt-8 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((item) => {
            const image =
              "pillar" in item
                ? stockImageUrlFromKeywords(
                    pillarKeywords[item.pillar] ?? [item.label],
                    "card",
                  )
                : stockImageUrlFromKeywords(item.keywords, "card");
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative h-[280px] w-[200px] shrink-0 snap-start overflow-hidden rounded-[var(--radius-md)]"
              >
                <MediaImage src={image} alt={item.label} sizes="200px" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <p className="absolute bottom-4 left-4 right-4 text-sm font-semibold tracking-tight text-text-inverse">
                  {item.label}
                </p>
              </Link>
            );
          })}
        </div>
        {content.cta && (
          <Link
            href={content.cta.href}
            className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
          >
            {content.cta.label} →
          </Link>
        )}
        {sectionImage && <span className="sr-only">Section imagery available</span>}
      </Container>
    </section>
  );
}
