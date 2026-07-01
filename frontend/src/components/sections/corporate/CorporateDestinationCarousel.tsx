"use client";

import * as React from "react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { MediaImage } from "@/components/home/MediaImage";
import type { DestinationEntity } from "@/content/types";
import { stockImageUrl, stockImageUrlFromKeywords } from "@/content/stock-images";
import { cn } from "@/lib/utils";

type CorporateDestinationCarouselProps = {
  destinations: DestinationEntity[];
};

function destinationImage(d: DestinationEntity): string {
  return d.image
    ? stockImageUrl(d.image)
    : stockImageUrlFromKeywords([d.name, d.stateOrCountry ?? ""], "card");
}

function destinationHref(d: DestinationEntity): string {
  return d.region === "india" ? "/india" : "/international";
}

function parseDurationTags(summary?: string): string[] {
  if (!summary) return [];
  const match = summary.match(/Duration tags:\s*(.+?)(?:\.|\n|$)/i);
  if (!match) return [];
  return match[1]
    .split(/[·•]/)
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function summaryWithoutDurationTags(summary?: string): string {
  if (!summary) return "";
  return summary.replace(/Duration tags:\s*[^\n.]+\.?/i, "").trim();
}

export function CorporateDestinationCarousel({
  destinations,
}: CorporateDestinationCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [snapCount, setSnapCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const update = () => {
      setSnapCount(api.scrollSnapList().length);
      setCurrent(api.selectedScrollSnap());
    };

    update();
    api.on("reInit", update);
    api.on("select", update);

    return () => {
      api.off("reInit", update);
      api.off("select", update);
    };
  }, [api]);

  if (destinations.length === 0) return null;

  return (
    <div className="relative mt-8" aria-label="Corporate retreat destinations">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: false,
          dragFree: false,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-3 md:-ml-4">
          {destinations.map((destination) => {
            const tags = parseDurationTags(destination.summary);
            const summary = summaryWithoutDurationTags(destination.summary);
            const href = destinationHref(destination);
            const image = destinationImage(destination);

            return (
              <CarouselItem
                key={destination.id}
                className="basis-[88%] pl-3 sm:basis-[58%] md:basis-[42%] md:pl-4 lg:basis-[31%]"
              >
                <Link
                  href={href}
                  className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-soft)] transition-shadow hover:shadow-md"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <MediaImage
                      src={image}
                      alt={destination.name}
                      sizes="(max-width: 640px) 88vw, (max-width: 1024px) 42vw, 31vw"
                    />
                    {destination.stateOrCountry && (
                      <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                        {destination.stateOrCountry}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-lg font-semibold group-hover:text-primary">
                      {destination.name}
                    </h3>
                    {summary && (
                      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-text-muted">
                        {summary}
                      </p>
                    )}
                    {tags.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-border bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-text-muted"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        <CarouselPrevious
          className="left-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 border-border bg-surface/95 shadow-sm sm:flex"
          variant="outline"
          size="icon"
        />
        <CarouselNext
          className="right-0 top-1/2 z-10 hidden size-9 -translate-y-1/2 border-border bg-surface/95 shadow-sm sm:flex"
          variant="outline"
          size="icon"
        />
      </Carousel>

      {snapCount > 1 && (
        <div
          className="mt-6 flex justify-center gap-2"
          role="tablist"
          aria-label="Destination carousel pagination"
        >
          {Array.from({ length: snapCount }).map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === current ? "true" : "false"}
              aria-label={`Go to slide ${index + 1}`}
              className={cn(
                "size-2 rounded-full transition-colors",
                index === current ? "bg-primary" : "bg-border hover:bg-text-subtle",
              )}
              onClick={() => api?.scrollTo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
