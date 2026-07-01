import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/layout/SiteShell";
import { Breadcrumb } from "@/components/layout/Breadcrumb";
import { Container } from "@/components/layout/Container";
import { PageHero } from "@/components/sections/PageHero";
import { getPage, getSection } from "@/content/load";
import { stockImageUrlFromKeywords } from "@/content/stock-images";

type Props = { params: Promise<{ slug: string }> };

const PACKAGE_STUBS: Record<
  string,
  { title: string; summary: string; theme: string; duration: string }
> = {
  "polo-forest-heritage-weekend": {
    title: "Polo Forest Heritage Weekend",
    summary:
      "Temple trails, river walks, and eco-resort stays in the Aravalli — our flagship heritage program from Ahmedabad.",
    theme: "Heritage & Culture",
    duration: "Weekend · 2D/1N",
  },
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const stub = PACKAGE_STUBS[slug];
  return {
    title: stub
      ? `${stub.title} | Polo Safari`
      : "Tour Package | Polo Safari",
    description: stub?.summary,
  };
}

export default async function TourPackageDetailPage({ params }: Props) {
  const { slug } = await params;
  const stub = PACKAGE_STUBS[slug];
  const hubPage = getPage("theme-tour-packages");
  const heroSection = getSection("theme-tour-packages", "hero");

  if (!stub) {
    return (
      <SiteShell>
        <Container className="py-24 text-center">
          <h1 className="type-display text-3xl">Package not found</h1>
          <Link href="/tour-packages" className="mt-4 inline-block text-primary hover:underline">
            Browse all tour packages
          </Link>
        </Container>
      </SiteShell>
    );
  }

  const image = stockImageUrlFromKeywords(["polo forest heritage trail"], "hero");

  return (
    <SiteShell>
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Tour Packages", href: "/tour-packages" },
          { label: stub.title },
        ]}
      />
      <PageHero
        section={{
          ...heroSection!,
          heading: stub.title,
          subheading: stub.duration,
          description: stub.summary,
          cta: { label: "Plan My Journey", href: "/plan-my-journey" },
        }}
        imageSrc={image}
      />
      <section className="py-[var(--space-12)]">
        <Container className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-text-subtle">
            {stub.theme}
          </p>
          <p className="mt-4 text-lg text-text-muted">
            This package detail page is a scaffold stub. Share your dates and group size — our team
            will tailor a proposal within 48 hours. No online booking at this stage.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/plan-my-journey"
              className="rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
            >
              Plan My Journey
            </Link>
            <Link
              href="/enquire"
              className="rounded-[var(--radius-button)] border border-border px-6 py-3 text-sm font-semibold text-text hover:bg-surface-muted"
            >
              Enquire Now
            </Link>
          </div>
          <p className="mt-6 text-sm text-text-muted">
            Hub page:{" "}
            <Link href="/tour-packages" className="text-primary hover:underline">
              {hubPage.title}
            </Link>
          </p>
        </Container>
      </section>
    </SiteShell>
  );
}

export function generateStaticParams() {
  return Object.keys(PACKAGE_STUBS).map((slug) => ({ slug }));
}
