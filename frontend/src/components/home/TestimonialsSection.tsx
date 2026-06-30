import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const featured = {
  quote:
    "Our school's ecology trip was flawlessly organised — the naturalists kept 120 students engaged for two full days.",
  name: "Meera Patel",
  role: "Principal, Ahmedabad Public School",
  badge: "Educational Tour",
};

const supporting = [
  {
    quote: "Corporate offsite exceeded expectations",
    name: "Rajesh K · HR",
    badge: "Corporate",
  },
  {
    quote: "Kids still talk about the night safari",
    name: "Shah Family",
    badge: "Family",
  },
  {
    quote: "Heritage walk was deeply moving",
    name: "Ananya V",
    badge: "Heritage",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-surface py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          Guest stories
        </p>
        <h2 className="mt-2 font-display text-3xl font-semibold">
          What travellers say about Polo Safari
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] lg:col-span-5">
            <MediaImage
              src={homeImages.testimonialSchool}
              alt="School group at Polo Forest"
              sizes="(max-width:1024px) 100vw, 40vw"
            />
          </div>
          <blockquote className="flex flex-col justify-center border-l-4 border-primary pl-6 lg:col-span-7">
            <p className="font-display text-2xl italic leading-relaxed text-text-heading md:text-3xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-6">
              <cite className="not-italic">
                <span className="font-semibold text-text">{featured.name}</span>
                <span className="text-text-muted"> · {featured.role}</span>
              </cite>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-primary">
                {featured.badge}
              </p>
            </footer>
          </blockquote>
        </div>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
          {supporting.map((item) => (
            <figure
              key={item.name}
              className="w-[260px] shrink-0 snap-start rounded-[var(--radius-md)] bg-surface-muted p-5 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-3 h-10 w-10 rounded-full bg-primary-subtle" aria-hidden />
              <blockquote className="text-sm text-text">&ldquo;{item.quote}&rdquo;</blockquote>
              <figcaption className="mt-3 text-xs text-text-muted">
                {item.name} · {item.badge}
              </figcaption>
            </figure>
          ))}
        </div>

        <Link href="/reviews" className="mt-8 inline-block text-sm font-semibold text-primary hover:underline">
          Read all guest reviews →
        </Link>
      </Container>
    </section>
  );
}
