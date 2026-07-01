import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { getStoriesContent } from "@/content/home-content";

export function BlogMagazine() {
  const content = getStoriesContent();

  return (
    <section className="bg-surface py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {content.subheading}
        </p>
        <h2 className="mt-2 type-display text-3xl">{content.heading}</h2>
        {content.description && (
          <p className="mt-3 max-w-2xl text-text-muted">{content.description}</p>
        )}

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <Link
            href="/blog"
            className="group overflow-hidden rounded-[var(--radius-md)] lg:col-span-7"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <MediaImage
                src={content.featured.image}
                alt={content.featured.title}
                sizes="(max-width:1024px) 100vw, 60vw"
              />
            </div>
            <p className="mt-4 text-xs text-text-subtle">{content.featured.date}</p>
            <h3 className="mt-1 text-2xl font-semibold group-hover:text-primary">
              {content.featured.title}
            </h3>
          </Link>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {content.supporting.map((post) => (
              <Link
                key={post.slug}
                href="/blog"
                className="group flex gap-4 rounded-[var(--radius-md)] border border-border p-3 transition-colors hover:border-primary/30"
              >
                <div className="h-16 w-16 shrink-0 rounded bg-primary-subtle" aria-hidden />
                <div>
                  <h3 className="font-semibold group-hover:text-primary">{post.title}</h3>
                  <p className="mt-1 text-xs text-text-subtle">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {content.cta && (
          <Link
            href={content.cta.href}
            className="mt-8 inline-block text-sm font-semibold text-primary hover:underline"
          >
            {content.cta.label} →
          </Link>
        )}
      </Container>
    </section>
  );
}
