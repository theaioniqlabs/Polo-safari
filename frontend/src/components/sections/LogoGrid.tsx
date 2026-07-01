import Image from "next/image";
import type { ClientEntity, PartnerEntity } from "@/content/types";
import { PlaceholderTile } from "./CardGrid";

export type LogoGridItem = {
  label: string;
  src?: string;
  industry?: string;
};

type LogoGridProps = {
  items: LogoGridItem[];
  columns?: 4 | 6 | 8;
  showIndustry?: boolean;
};

export function LogoGrid({ items, columns = 4, showIndustry = false }: LogoGridProps) {
  const colClass =
    columns === 8
      ? "grid-cols-2 sm:grid-cols-4 lg:grid-cols-8"
      : columns === 6
        ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6"
        : "grid-cols-2 sm:grid-cols-4";

  return (
    <div className={`mt-8 grid gap-4 ${colClass}`}>
      {items.map((item) =>
        item.src ? (
          <div
            key={item.label}
            className="flex min-h-[80px] flex-col items-center justify-center rounded-[var(--radius-md)] border border-border bg-surface p-4"
          >
            <div className="relative h-12 w-full">
              <Image
                src={item.src}
                alt={`${item.label} logo`}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
            {showIndustry && item.industry && (
              <p className="mt-2 text-center text-xs text-text-subtle">{item.industry}</p>
            )}
          </div>
        ) : (
          <PlaceholderTile key={item.label} label={item.label} className="min-h-[80px]" />
        ),
      )}
    </div>
  );
}

export function clientLogos(clients: ClientEntity[]): LogoGridItem[] {
  return clients.map((c) => ({
    label: c.name ?? c.logoPlaceholder,
    src: c.logoSrc,
    industry: c.industry,
  }));
}

export function partnerLogos(partners: PartnerEntity[]): LogoGridItem[] {
  return partners.map((p) => ({ label: p.logoPlaceholder }));
}
