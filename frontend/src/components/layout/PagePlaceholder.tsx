import { type ReactNode } from "react";
import { SiteShell } from "@/components/layout/SiteShell";
import { Container } from "@/components/layout/Container";

type PagePlaceholderProps = {
  title: string;
  description: string;
  specRef: string;
  children?: ReactNode;
};

export function PagePlaceholder({
  title,
  description,
  specRef,
  children,
}: PagePlaceholderProps) {
  return (
    <SiteShell>
      <Container className="py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
          {specRef}
        </p>
        <h1 className="mt-2 font-display text-4xl font-semibold">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-text-muted">{description}</p>
        <div className="mt-10 rounded-[var(--radius-lg)] border border-dashed border-border bg-surface p-8">
          {children ?? (
            <p className="text-sm text-text-subtle">
              Page scaffold — content to be built from UX wireframes and UI hifi
              spec.
            </p>
          )}
        </div>
      </Container>
    </SiteShell>
  );
}
