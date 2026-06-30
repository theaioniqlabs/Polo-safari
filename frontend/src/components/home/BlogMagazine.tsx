import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const featured = {
  slug: "monsoon-ecology-polo-forest",
  title: "Monsoon ecology at Polo Forest",
  date: "12 Jun",
  image: homeImages.blogFeatured,
};

const supporting = [
  { slug: "school-trip-checklist", title: "School trip checklist", date: "3 Jun" },
  { slug: "temple-architecture-polo", title: "Temple architecture at Polo", date: "28 May" },
  { slug: "night-safari-guide", title: "Your first night safari guide", date: "15 May" },
];

export function BlogMagazine() {
  return (
    <section className="bg-surface py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          Stories &amp; Insights
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold">From the Polo Forest journal</h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <Link
            href={`/blog/${featured.slug}`}
            className="group overflow-hidden rounded-[var(--radius-md)] lg:col-span-7"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <MediaImage
                src={featured.image}
                alt={featured.title}
                sizes="(max-width:1024px) 100vw, 60vw"
              />
            </div>
            <p className="mt-4 text-xs text-text-subtle">{featured.date}</p>
            <h3 className="mt-1 font-display text-2xl font-semibold group-hover:text-primary">
              {featured.title}
            </h3>
          </Link>

          <div className="flex flex-col gap-4 lg:col-span-5">
            {supporting.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
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

        <Link href="/blog" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
          All stories →
        </Link>
      </Container>
    </section>
  );
}
