"use client";

import { LogoLoop, type LogoItem } from "@/components/LogoLoop";
import type { ClientEntity } from "@/content/types";

type CorporateLogoLoopProps = {
  clients: ClientEntity[];
  variant?: "default" | "muted" | "dark";
};

const FADE_COLORS: Record<NonNullable<CorporateLogoLoopProps["variant"]>, string> = {
  default: "var(--color-surface)",
  muted: "var(--color-surface-muted)",
  dark: "var(--color-surface-dark-elevated)",
};

function toLogoItems(clients: ClientEntity[]): LogoItem[] {
  return clients
    .filter((client) => client.logoSrc)
    .map((client) => {
      const label = client.name ?? client.logoPlaceholder;
      return {
        src: client.logoSrc!,
        alt: `${label} logo`,
        title: client.industry ? `${label} — ${client.industry}` : label,
      };
    });
}

export function CorporateLogoLoop({ clients, variant = "default" }: CorporateLogoLoopProps) {
  const logos = toLogoItems(clients);

  if (logos.length === 0) return null;

  return (
    <div className="-mx-6 mt-8 sm:mx-0">
      <LogoLoop
        logos={logos}
        speed={50}
        direction="left"
        logoHeight={48}
        gap={40}
        pauseOnHover
        fadeOut
        fadeOutColor={FADE_COLORS[variant]}
        scaleOnHover
        ariaLabel="Corporate client logos"
        className="py-2"
      />
    </div>
  );
}
