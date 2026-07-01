import { MediaImage } from "@/components/home/MediaImage";
import type { TimelineEventEntity } from "@/content/types";
import { stockImageUrlFromKeywords } from "@/content/stock-images";

type TimelineStepperProps = {
  events: TimelineEventEntity[];
};

export function TimelineStepper({ events }: TimelineStepperProps) {
  const sorted = [...events].sort((a, b) => a.year - b.year);

  return (
    <ol className="mt-8 space-y-8 border-l-2 border-primary/30 pl-8">
      {sorted.map((event) => (
        <li key={event.id} className="relative">
          <span className="absolute -left-[calc(2rem+5px)] flex h-3 w-3 rounded-full bg-primary" />
          <p className="text-sm font-semibold text-primary">{event.year}</p>
          <h3 className="mt-1 text-xl font-semibold">{event.title}</h3>
          {event.description && (
            <p className="mt-2 text-text-muted">{event.description.trim()}</p>
          )}
        </li>
      ))}
    </ol>
  );
}

type GalleryGridProps = {
  images: string[];
  columns?: 2 | 3 | 4;
};

export function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const colClass =
    columns === 4
      ? "grid-cols-2 md:grid-cols-4"
      : columns === 2
        ? "grid-cols-2"
        : "grid-cols-2 md:grid-cols-3";

  return (
    <div className={`mt-8 grid gap-3 ${colClass}`}>
      {images.map((src, i) => (
        <div
          key={i}
          className={`relative overflow-hidden rounded-[var(--radius-md)] ${
            i % 5 === 0 ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-video"
          }`}
        >
          <MediaImage src={src} alt={`Gallery image ${i + 1}`} sizes="(max-width: 768px) 50vw, 400px" />
        </div>
      ))}
    </div>
  );
}

export function galleryImagesFromKeywords(keywords: string[], count = 8): string[] {
  const themes = [
    ["corporate retreat", "team"],
    ["school field trip", "education"],
    ["adventure trek", "mountain"],
    ["polo forest", "heritage"],
    ["campfire", "evening"],
    ["drone aerial", "landscape"],
    ["family travel", "outdoor"],
    ["international tour", "group"],
  ];
  return themes.slice(0, count).map(([a, b], i) =>
    stockImageUrlFromKeywords(keywords.length ? keywords : [a, b], i % 3 === 0 ? "gallery" : "card"),
  );
}

export function SplitEditorial({
  heading,
  subheading,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
}: {
  heading?: string;
  subheading?: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}) {
  return (
    <div
      className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}
    >
      <div className={reverse ? "lg:[direction:ltr]" : ""}>
        {subheading && (
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
            {subheading}
          </p>
        )}
        {heading && (
          <h2 className="mt-2 type-display text-3xl">{heading}</h2>
        )}
        {description && (
          <p className="mt-4 text-lg text-text-muted whitespace-pre-line">{description.trim()}</p>
        )}
      </div>
      <div
        className={`relative aspect-video overflow-hidden rounded-[var(--radius-lg)] ${reverse ? "lg:[direction:ltr]" : ""}`}
      >
        <MediaImage src={imageSrc} alt={imageAlt} sizes="50vw" />
      </div>
    </div>
  );
}
