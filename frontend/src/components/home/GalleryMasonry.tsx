import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MediaImage } from "@/components/home/MediaImage";
import { homeImages } from "@/lib/home-images";

const spans = [
  "col-span-1 row-span-2",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
];

export function GalleryMasonry() {
  return (
    <section className="bg-surface-muted py-[var(--space-12)]">
      <Container>
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">Gallery</p>
        <h2 className="mt-2 font-display text-3xl font-semibold">Moments from Polo Forest</h2>
      </Container>

      <div className="mx-auto mt-8 grid max-w-[1440px] grid-cols-2 gap-1 px-4 md:grid-cols-4 md:px-6 auto-rows-[140px] md:auto-rows-[180px]">
        {homeImages.gallery.map((src, i) => (
          <div
            key={src}
            className={`relative overflow-hidden ${spans[i] ?? "col-span-1 row-span-1"}`}
          >
            <MediaImage src={src} alt={`Polo Forest gallery ${i + 1}`} sizes="(max-width:768px) 50vw, 25vw" />
            {i === 1 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-text">
                  ▶
                </span>
              </div>
            )}
          </div>
        ))}
      </div>

      <Container>
        <div className="mt-6 text-right">
          <Link href="/gallery" className="text-sm font-semibold text-primary hover:underline">
            View full gallery →
          </Link>
        </div>
      </Container>
    </section>
  );
}
