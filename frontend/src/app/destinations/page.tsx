import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { MediaImage } from "@/components/home/MediaImage";
import { getEntitiesByType } from "@/content/load";
import { stockImageUrl, stockImageUrlFromKeywords } from "@/content/stock-images";
import type { DestinationEntity } from "@/content/types";

export const metadata: Metadata = {
  title: "Destinations | Polo Safari",
  description:
    "Explore India and international destinations — Polo Forest heritage, Gujarat nature retreats, and curated global programs from Ahmedabad.",
};

function destinationHref(d: DestinationEntity): string {
  return `/destinations/${d.region}/${d.id}`;
}

function destinationImage(d: DestinationEntity): string {
  return d.image
    ? stockImageUrl(d.image)
    : stockImageUrlFromKeywords([d.name, d.stateOrCountry ?? ""], "card");
}

export default function DestinationsHubPage() {
  const india = getEntitiesByType<DestinationEntity>("destination").filter(
    (d) => d.region === "india",
  );
  const international = getEntitiesByType<DestinationEntity>("destination").filter(
    (d) => d.region === "international",
  );

  return (
    <SiteShell>
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Destinations" }]} />
      <PageHero
        section={{
          id: "hero",
          heading: "Destinations shaped by experience",
          subheading: "India · International · Polo Forest flagship",
          description:
            "Geographic hubs for our programs — distinct from theme packages. Start with Polo Forest, explore Gujarat and pan-India, or browse international escapes.",
          cta: { label: "Plan My Journey", href: "/plan-my-journey" },
        }}
        imageSrc={stockImageUrlFromKeywords(["india travel landscape group"], "hero")}
      />

      <DestinationGrid title="India" destinations={india.slice(0, 8)} hrefFn={destinationHref} imageFn={destinationImage} />
      <DestinationGrid
        title="International"
        destinations={international.slice(0, 6)}
        hrefFn={destinationHref}
        imageFn={destinationImage}
        muted
      />

      <section className="bg-primary py-[var(--space-12)] text-text-inverse">
        <Container className="text-center">
          <h2 className="type-display text-3xl">Not sure where to start?</h2>
          <p className="mx-auto mt-3 max-w-xl opacity-90">
            Tell us your group type and dates — we&apos;ll recommend destinations and themes.
          </p>
          <Link
            href="/enquire"
            className="mt-6 inline-flex rounded-[var(--radius-button)] bg-surface px-6 py-3 text-sm font-semibold text-text-heading hover:bg-surface-muted"
          >
            Enquire Now
          </Link>
        </Container>
      </section>
    </SiteShell>
  );
}

function DestinationGrid({
  title,
  destinations,
  hrefFn,
  imageFn,
  muted = false,
}: {
  title: string;
  destinations: DestinationEntity[];
  hrefFn: (d: DestinationEntity) => string;
  imageFn: (d: DestinationEntity) => string;
  muted?: boolean;
}) {
  return (
    <section className={`py-[var(--space-12)] ${muted ? "bg-surface-muted" : "bg-surface"}`}>
      <Container>
        <h2 className="type-display text-3xl">{title}</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <Link
              key={d.id}
              href={hrefFn(d)}
              className="group overflow-hidden rounded-[var(--radius-md)] bg-surface shadow-[var(--shadow-soft)]"
            >
              <div className="relative aspect-[16/10]">
                <MediaImage src={imageFn(d)} alt={d.name} sizes="400px" />
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-text-subtle">
                  {d.stateOrCountry}
                </p>
                <h3 className="mt-1 text-lg font-semibold group-hover:text-primary">{d.name}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-text-muted">{d.summary?.trim()}</p>
              </div>
            </Link>
          ))}
        </div>
        {title === "India" && (
          <Link href="/india" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
            View full India catalogue →
          </Link>
        )}
        {title === "International" && (
          <Link href="/international" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
            View international programs →
          </Link>
        )}
      </Container>
    </section>
  );
}
