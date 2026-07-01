"use client";

import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { mobileNavSections, utilityNav } from "./nav-config";
import { CloseIcon, ChevronDownIcon, MenuIcon, SearchIcon } from "./icons";
import { useBodyScrollLock, useFocusTrap } from "./useFocusTrap";
import type { MegaMenuConfig, NavDropdownConfig } from "./nav-config";

type MobileDrawerProps = {
  open: boolean;
  onClose: () => void;
  onSearchOpen: () => void;
};

export function MobileDrawer({
  open,
  onClose,
  onSearchOpen,
}: MobileDrawerProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useBodyScrollLock(open);
  useFocusTrap(panelRef, open, onClose);

  if (!open) return null;

  const toggleSection = (id: string) => {
    setExpandedId((current) => (current === id ? null : id));
  };

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
              <span className="sr-only">Search</span>
              <SearchIcon className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-text-subtle" />
              <input
                type="search"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search destinations, packages…"
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
            <DrawerLink href="/" onNavigate={onClose} topLevel>
              Home
            </DrawerLink>

            {mobileNavSections.megas.map((mega) => (
              <MegaAccordion
                key={mega.id}
                mega={mega}
                expanded={expandedId === mega.id}
                onToggle={() => toggleSection(mega.id)}
                onNavigate={onClose}
              />
            ))}

            {mobileNavSections.dropdowns.map((dropdown) => (
              <DropdownAccordion
                key={dropdown.id}
                dropdown={dropdown}
                expanded={expandedId === dropdown.id}
                onToggle={() => toggleSection(dropdown.id)}
                onNavigate={onClose}
              />
            ))}

            {mobileNavSections.links.map((link) => (
              <DrawerLink key={link.href} href={link.href} onNavigate={onClose} topLevel>
                {link.label}
              </DrawerLink>
            ))}
          </nav>
        </div>

        <div className="sticky bottom-0 shrink-0 border-t border-border bg-surface p-4 pb-[max(16px,env(safe-area-inset-bottom))]">
          <Link
            href={utilityNav.planJourney.href}
            onClick={onClose}
            className="flex h-12 w-full items-center justify-center rounded-[var(--radius-button)] bg-primary px-5 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
          >
            {utilityNav.planJourney.label}
          </Link>
          <div className="mt-3 flex items-center justify-center gap-4 text-sm">
            <Link
              href={utilityNav.enquire.href}
              onClick={onClose}
              className="font-medium text-text-muted hover:text-primary"
            >
              {utilityNav.enquire.label}
            </Link>
            <span className="text-border" aria-hidden>
              ·
            </span>
            <Link
              href="/contact"
              onClick={onClose}
              className="font-medium text-text-muted hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MegaAccordion({
  mega,
  expanded,
  onToggle,
  onNavigate,
}: {
  mega: MegaMenuConfig;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const panelId = `mobile-mega-${mega.id}`;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between px-4 py-3 text-base font-semibold text-text-heading"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {mega.label}
        <ChevronDownIcon
          className={`shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div
        id={panelId}
        hidden={!expanded}
        className="pb-2"
      >
        {mega.leftLinks.map((link) => (
          <DrawerLink key={link.href + link.label} href={link.href} onNavigate={onNavigate}>
            {link.label}
          </DrawerLink>
        ))}
        {mega.leftCta && (
          <DrawerLink href={mega.leftCta.href} onNavigate={onNavigate} accent>
            {mega.leftCta.label}
          </DrawerLink>
        )}
      </div>
    </div>
  );
}

function DropdownAccordion({
  dropdown,
  expanded,
  onToggle,
  onNavigate,
}: {
  dropdown: NavDropdownConfig;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const panelId = `mobile-dropdown-${dropdown.id}`;

  return (
    <div className="border-b border-border">
      <button
        type="button"
        className="flex min-h-11 w-full items-center justify-between px-4 py-3 text-base font-semibold text-text-heading"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={onToggle}
      >
        {dropdown.label}
        <ChevronDownIcon
          className={`shrink-0 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
        />
      </button>
      <div id={panelId} hidden={!expanded} className="pb-2">
        {dropdown.links.map((link) => (
          <DrawerLink key={link.href + link.label} href={link.href} onNavigate={onNavigate}>
            {link.label}
          </DrawerLink>
        ))}
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

function DrawerLink({
  href,
  onNavigate,
  children,
  topLevel = false,
  accent = false,
}: {
  href: string;
  onNavigate: () => void;
  children: React.ReactNode;
  topLevel?: boolean;
  accent?: boolean;
}) {
  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`flex min-h-11 items-center text-base text-text transition-colors hover:bg-primary-subtle hover:text-primary ${
        topLevel
          ? "border-b border-border px-4 py-3 font-semibold text-text-heading"
          : accent
            ? "pl-8 pr-4 py-2.5 text-sm font-semibold text-primary"
            : "pl-8 pr-4 py-2.5"
      }`}
    >
      {children}
    </Link>
  );
}
