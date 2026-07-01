import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { MediaImage } from "@/components/home/MediaImage";
import { getEntity, getEntitiesByType } from "@/content/load";
import { stockImageUrl, stockImageUrlFromKeywords } from "@/content/stock-images";
import type { DestinationEntity, ThemeEntity } from "@/content/types";

type Props = { params: Promise<{ region: string; slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getEntity("destination", slug) as DestinationEntity | undefined;
  if (!destination) return { title: "Destination | Polo Safari" };
  return {
    title: `${destination.name} Tours | Polo Safari`,
    description: destination.summary?.trim().slice(0, 160),
  };
}

export default async function DestinationDetailPage({ params }: Props) {
  const { region, slug } = await params;
  const destination = getEntity("destination", slug) as DestinationEntity | undefined;

  if (!destination || destination.region !== region) {
    notFound();
  }

  const image = destination.image
    ? stockImageUrl(destination.image)
    : stockImageUrlFromKeywords([destination.name], "hero");

  const themes = (destination.themes ?? [])
    .map((id) => getEntity("theme", id) as ThemeEntity | undefined)
    .filter(Boolean) as ThemeEntity[];

  const related = getEntitiesByType<DestinationEntity>("destination")
    .filter((d) => d.region === region && d.id !== slug)
    .slice(0, 3);

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Destinations", href: "/destinations" },
          { label: destination.name },
        ]}
      />
      <PageHero
        section={{
          id: "hero",
          heading: destination.name,
          subheading: destination.stateOrCountry,
          description: destination.summary?.trim() ?? "",
          cta: { label: "Plan My Journey", href: "/plan-my-journey" },
        }}
        imageSrc={image}
      />

      <section className="py-[var(--space-12)]">
        <Container>
          {themes.length > 0 && (
            <>
              <h2 className="type-display text-2xl">Programs at {destination.name}</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {themes.map((t) => (
                  <li key={t.id}>
                    <Link
                      href={`/tour-packages#${t.anchorSlug ?? t.id}`}
                      className="block rounded-[var(--radius-md)] border border-border bg-surface-muted p-5 transition-colors hover:border-primary hover:bg-primary-subtle/30"
                    >
                      <span className="font-semibold text-text-heading">{t.name}</span>
                      {t.summary && (
                        <p className="mt-2 line-clamp-2 text-sm text-text-muted">{t.summary.trim()}</p>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/plan-my-journey"
              className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              Plan My Journey
            </Link>
            <Link
              href="/enquire"
              className="rounded-[var(--radius-button)] border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-muted"
            >
              Enquire Now
            </Link>
            {slug === "polo-forest" && (
              <Link
                href="/corporate#rfp"
                className="rounded-[var(--radius-button)] border border-border px-6 py-3 text-sm font-semibold hover:bg-surface-muted"
              >
                Corporate RFP
              </Link>
            )}
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-muted py-[var(--space-12)]">
          <Container>
            <h2 className="type-display text-2xl">More in {region === "india" ? "India" : "International"}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              {related.map((d) => (
                <Link
                  key={d.id}
                  href={`/destinations/${d.region}/${d.id}`}
                  className="overflow-hidden rounded-[var(--radius-md)] bg-surface shadow-[var(--shadow-soft)]"
                >
                  <div className="relative aspect-[16/10]">
                    <MediaImage
                      src={
                        d.image
                          ? stockImageUrl(d.image)
                          : stockImageUrlFromKeywords([d.name], "card")
                      }
                      alt={d.name}
                      sizes="300px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{d.name}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </SiteShell>
  );
}

export function generateStaticParams() {
  return getEntitiesByType<DestinationEntity>("destination").map((d) => ({
    region: d.region,
    slug: d.id,
  }));
}
