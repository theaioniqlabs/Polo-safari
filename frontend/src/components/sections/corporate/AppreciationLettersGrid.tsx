"use client";

import { useState } from "react";
import Image from "next/image";
import type { TestimonialEntity } from "@/content/types";

type AppreciationLettersGridProps = {
  letters: TestimonialEntity[];
};

export function AppreciationLettersGrid({ letters }: AppreciationLettersGridProps) {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const withAssets = letters.filter((l) => l.assetSrc);

  if (withAssets.length === 0) return null;

  return (
    <>
      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {withAssets.map((letter) => (
          <button
            key={letter.id}
            type="button"
            className="group relative aspect-[4/5] overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface-muted transition-shadow hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            onClick={() => letter.assetSrc && setLightboxSrc(letter.assetSrc)}
            aria-label={`View appreciation letter from ${letter.organization ?? letter.author}`}
          >
            <Image
              src={letter.assetSrc!}
              alt={`Appreciation letter — ${letter.organization ?? letter.author}`}
              fill
              className="object-cover object-top transition-transform group-hover:scale-[1.02]"
              sizes="(max-width: 640px) 50vw, 250px"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs font-medium text-white">
              {letter.organization ?? letter.author}
            </span>
          </button>
        ))}
      </div>

      {lightboxSrc && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Appreciation letter preview"
          onClick={() => setLightboxSrc(null)}
          onKeyDown={(e) => e.key === "Escape" && setLightboxSrc(null)}
        >
          <button
            type="button"
            className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-1 text-sm text-white hover:bg-white/20"
            onClick={() => setLightboxSrc(null)}
          >
            Close
          </button>
          <div
            className="relative max-h-[90vh] max-w-3xl w-full aspect-[3/4]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxSrc}
              alt="Appreciation letter full view"
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
