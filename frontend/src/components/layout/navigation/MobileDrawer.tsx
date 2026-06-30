"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  discoverLinks,
  experiencePillars,
} from "./nav-config";
import { CloseIcon, MenuIcon, SearchIcon, UserIcon } from "./icons";
import { useBodyScrollLock, useFocusTrap } from "./useFocusTrap";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
};

type AccordionSection = "experiences" | "discover" | null;

export function MobileDrawer({
  open,
  onClose,
  onSearchOpen,
}: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<AccordionSection>("experiences");
  const [searchQuery, setSearchQuery] = useState("");

  useBodyScrollLock(open);
  useFocusTrap(panelRef, open, onClose);

  const toggleSection = (section: AccordionSection) => {
    setExpanded((current) => (current === section ? null : section));
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] md:hidden" role="presentation">
      <button
        type="button"
        className="absolute inset-0 bg-[rgba(30,42,36,0.5)]"
        aria-label="Close menu"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute right-0 top-0 flex h-full w-full max-w-[400px] flex-col bg-surface shadow-[0_16px_40px_rgba(0,0,0,0.10)] motion-reduce:transition-none animate-[drawer-slide-in_300ms_var(--ease-default)]"
      >
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-4">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/polo-safari-logo.svg"
              alt="Polo Safari"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>
          <button
            type="button"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full text-text-muted transition-colors hover:bg-surface-muted"
            aria-label="Close menu"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="border-b border-border p-4">
            <label className="relative block">
              <span className="sr-only">Search experiences</span>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search experiences, stories..."
                className="h-12 w-full rounded-[var(--radius-input)] border border-border bg-surface-muted pl-11 pr-4 text-sm text-text outline-none focus:shadow-[var(--focus-ring)]"
              />
            </label>
            {searchQuery.trim() && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onSearchOpen();
                }}
                className="mt-2 text-sm font-medium text-primary"
              >
                Search for &ldquo;{searchQuery.trim()}&rdquo;
              </button>
            )}
          </div>

          <nav aria-label="Mobile navigation">
            <AccordionItem
              title="Experiences"
              expanded={expanded === "experiences"}
              onToggle={() => toggleSection("experiences")}
            >
              {experiencePillars.map((pillar) => (
                <DrawerLink key={pillar.href} href={pillar.href} onNavigate={onClose}>
                  {pillar.label}
                </DrawerLink>
              ))}
              <DrawerLink href="/experiences" onNavigate={onClose}>
                View all experiences
              </DrawerLink>
            </AccordionItem>

            <AccordionItem
              title="Discover"
              expanded={expanded === "discover"}
              onToggle={() => toggleSection("discover")}
            >
              {discoverLinks.map((link) => (
                <DrawerLink key={link.href} href={link.href} onNavigate={onClose}>
                  {link.label}
                </DrawerLink>
              ))}
            </AccordionItem>

            <DrawerLink href="/polo-forest" onNavigate={onClose} topLevel>
              Polo Forest
            </DrawerLink>
            <DrawerLink href="/plan" onNavigate={onClose} topLevel>
              Plan
            </DrawerLink>
            <DrawerLink href="/about" onNavigate={onClose} topLevel>
              About
            </DrawerLink>
          </nav>
        </div>

        <div className="sticky bottom-0 shrink-0 border-t border-border bg-surface p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
          <Link
            href="/plan"
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-[var(--radius-button)] bg-primary px-5 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
          >
            Plan Your Visit
          </Link>
          <div className="mt-3 flex flex-col items-center gap-2 text-center text-sm">
            <p className="text-xs text-text-muted">Login required to book</p>
            <div className="flex items-center justify-center gap-4">
              <Link
                href="/contact"
                onClick={onClose}
                className="font-medium text-text-muted hover:text-primary"
              >
                Contact
              </Link>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <Link
                href="/login"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 font-medium text-text-muted hover:text-primary"
              >
                <UserIcon className="h-4 w-4" />
                Login
              </Link>
              <span className="text-border" aria-hidden>
                ·
              </span>
              <Link
                href="/register"
                onClick={onClose}
                className="font-medium text-text-muted hover:text-primary"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileHeaderControls({
  isSolid,
  onMenuOpen,
  onSearchOpen,
}: {
  isSolid: boolean;
  onMenuOpen: () => void;
  onSearchOpen: () => void;
}) {
  const iconClass = isSolid ? "text-text-muted" : "text-text-inverse";

  return (
    <div className="flex items-center gap-0.5 md:hidden">
      <button
        type="button"
        onClick={onSearchOpen}
        className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-black/5 ${iconClass}`}
        aria-label="Open search"
      >
        <SearchIcon />
      </button>
      <button
        type="button"
        onClick={onMenuOpen}
        className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-black/5 ${iconClass}`}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>
    </div>
  );
}

function AccordionItem({
  title,
  expanded,
  onToggle,
  children,
}: {
  title: string;
  expanded: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  const panelId = `drawer-${title.toLowerCase()}`;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex min-h-12 w-full items-center justify-between px-4 py-3 text-left text-base font-semibold text-text-heading"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {title}
        <span
          className={`text-text-muted transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      <div
        id={panelId}
        hidden={!expanded}
        className="pb-2"
      >
        {children}
      </div>
    </div>
  );
}

function DrawerLink({
  href,
  onNavigate,
  children,
  topLevel = false,
}: {
  href: string;
  onNavigate: () => void;
  children: React.ReactNode;
  topLevel?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`flex min-h-11 items-center text-base text-text transition-colors hover:bg-primary-subtle hover:text-primary ${
        topLevel ? "border-b border-border px-4 py-3 font-semibold text-text-heading" : "pl-8 pr-4 py-2.5"
      }`}
    >
      {children}
    </Link>
  );
}
