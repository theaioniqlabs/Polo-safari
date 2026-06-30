"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { homeImages } from "@/lib/home-images";
import { experiencePillars, featuredExperiences } from "./nav-config";
import { ChevronDownIcon } from "./icons";
import { useFocusTrap } from "./useFocusTrap";

const featuredImages: Record<string, string> = {
  "polo-forest-heritage-walk": homeImages.featuredHeritage,
  "night-safari": homeImages.featuredNightSafari,
  "family-camping-weekend": homeImages.featuredFamily,
};

const MENU_TOP =
  "calc(var(--announcement-height, 0px) + var(--current-header-height, var(--header-height)))";

type ExperiencesMegaMenuProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  linkClassName: string;
};

export function ExperiencesMegaMenu({
  open,
  onOpen,
  onClose,
  linkClassName,
}: ExperiencesMegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [mounted, setMounted] = useState(false);

  useFocusTrap(panelRef, open, () => {
    onClose();
    triggerRef.current?.focus();
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const cancelClose = () => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const scheduleClose = () => {
    cancelClose();
    closeTimerRef.current = setTimeout(onClose, 120);
  };

  const handleOpen = () => {
    cancelClose();
    onOpen();
  };

  useEffect(() => {
    return () => cancelClose();
  }, []);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node;
      if (
        panelRef.current?.contains(target) ||
        triggerRef.current?.contains(target)
      ) {
        return;
      }
      onClose();
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onEscape);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open, onClose]);

  const panel =
    open && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="fixed inset-0 z-[105] bg-[#1e2a24]/25"
              style={{ top: MENU_TOP }}
              aria-label="Close experiences menu"
              onClick={onClose}
            />
            <div
              ref={panelRef}
              role="navigation"
              aria-label="Experiences menu"
              className="fixed inset-x-0 z-[110] border-t border-border bg-surface shadow-[0_16px_48px_rgba(0,0,0,0.12)]"
              style={{ top: MENU_TOP }}
              onMouseEnter={cancelClose}
              onMouseLeave={scheduleClose}
            >
              <div className="mx-auto max-w-[var(--layout-content)] px-6 py-8 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                      Browse by type
                    </p>
                    <ul className="mt-4 space-y-0.5">
                      {experiencePillars.map((pillar) => (
                        <li key={pillar.href}>
                          <Link
                            href={pillar.href}
                            onClick={onClose}
                            className="group flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-[15px] text-text transition-colors hover:bg-primary-subtle hover:text-primary"
                          >
                            <span
                              className="h-2 w-2 shrink-0 rounded-full ring-2 ring-white"
                              style={{ backgroundColor: pillar.dotColor }}
                              aria-hidden
                            />
                            {pillar.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href="/experiences"
                      onClick={onClose}
                      className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
                    >
                      View all experiences →
                    </Link>
                  </div>

                  <div className="border-t border-border pt-8 lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                      Featured experiences
                    </p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                      {featuredExperiences.map((experience) => (
                        <Link
                          key={experience.slug}
                          href={`/experiences/${experience.slug}`}
                          onClick={onClose}
                          className="group overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface transition-shadow hover:shadow-[var(--shadow-medium)]"
                        >
                          <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                            <Image
                              src={featuredImages[experience.slug]}
                              alt={experience.title}
                              fill
                              sizes="(max-width:768px) 50vw, 280px"
                              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                            />
                          </div>
                          <div className="p-4">
                            <p className="font-display text-base font-semibold leading-snug text-text-heading group-hover:text-primary">
                              {experience.title}
                            </p>
                            <p className="mt-1 text-sm text-text-muted">{experience.caption}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  return (
    <>
      <div
        className="relative"
        onMouseEnter={handleOpen}
        onMouseLeave={scheduleClose}
      >
        <button
          ref={triggerRef}
          type="button"
          className={`${linkClassName} gap-1 ${open ? "bg-primary-subtle/60 text-primary" : ""}`}
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => (open ? onClose() : handleOpen())}
        >
          Experiences
          <ChevronDownIcon
            className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      </div>
      {panel}
    </>
  );
}
