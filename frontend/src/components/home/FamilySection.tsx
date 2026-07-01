import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getFamilyContent } from "@/content/home-content";

export function FamilySection() {
  const content = getFamilyContent();

  return (
    <section className="bg-surface py-[var(--space-12)]">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
              {content.subheading}
            </p>
            <h2 className="mt-2 type-display text-3xl">{content.heading}</h2>
            {content.description && (
              <p className="mt-4 text-text-muted">{content.description}</p>
            )}
            <Link
              href={content.cta.href}
              className="mt-6 inline-block text-sm font-semibold text-primary hover:underline"
            >
              {content.cta.label} →
            </Link>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-lg)] order-1 lg:order-2 lg:col-span-7">
            <MediaImage
              src={content.image}
              alt={content.heading}
              sizes="(max-width:1024px) 100vw, 45vw"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
