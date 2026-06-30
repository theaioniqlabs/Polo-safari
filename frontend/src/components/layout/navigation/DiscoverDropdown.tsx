"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { discoverLinks } from "./nav-config";
import { ChevronDownIcon } from "./icons";
import { useFocusTrap } from "./useFocusTrap";

type DiscoverDropdownProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  linkClassName: string;
};

export function DiscoverDropdown({
  open,
  onOpen,
  onClose,
  linkClassName,
}: DiscoverDropdownProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(panelRef, open, () => {
    onClose();
    triggerRef.current?.focus();
  });

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

    document.addEventListener("mousedown", onPointerDown);
    return () => document.removeEventListener("mousedown", onPointerDown);
  }, [open, onClose]);

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <button
        ref={triggerRef}
        type="button"
        className={`${linkClassName} gap-1 ${open ? "bg-primary-subtle/60 text-primary" : ""}`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => (open ? onClose() : onOpen())}
      >
        Discover
        <ChevronDownIcon
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        ref={panelRef}
        role="menu"
        aria-label="Discover menu"
        aria-hidden={!open}
        className={`absolute left-0 top-full z-[110] min-w-[240px] pt-2 transition-all duration-150 ease-out ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-1 opacity-0"
        }`}
      >
        <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface py-1.5 shadow-[var(--shadow-medium)]">
          {discoverLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              role="menuitem"
              onClick={onClose}
              className="block px-4 py-2.5 text-sm text-text transition-colors hover:bg-primary-subtle hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
