"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { UserIcon } from "./icons";

type ProfileDropdownProps = {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  isSolid: boolean;
};

export function ProfileDropdown({
  open,
  onOpen,
  onClose,
  isSolid,
}: ProfileDropdownProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

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

  const triggerClass = `flex h-11 items-center gap-1.5 rounded-[var(--radius-button)] px-2.5 text-sm font-medium transition-colors ${
    isSolid
      ? "text-text-muted hover:bg-surface-muted hover:text-primary"
      : "text-text-inverse/90 hover:bg-white/10 hover:text-text-inverse"
  }`;

  return (
    <div className="relative">
      <button
        ref={triggerRef}
        type="button"
        className={triggerClass}
        aria-expanded={open}
        aria-haspopup="true"
        aria-label="Account menu"
        onClick={() => (open ? onClose() : onOpen())}
      >
        <UserIcon className="h-4 w-4 shrink-0" />
        <span className="hidden xl:inline">Login</span>
      </button>

      {open && (
        <div
          ref={panelRef}
          role="menu"
          className="absolute right-0 top-[calc(100%+8px)] z-[60] w-56 rounded-[var(--radius-md)] border border-border bg-surface py-2 shadow-[var(--shadow-medium)]"
        >
          <Link
            href="/login"
            role="menuitem"
            className="block px-4 py-2.5 text-sm font-medium text-text hover:bg-primary-subtle hover:text-primary"
            onClick={onClose}
          >
            Login
          </Link>
          <Link
            href="/register"
            role="menuitem"
            className="block px-4 py-2.5 text-sm text-text hover:bg-primary-subtle hover:text-primary"
            onClick={onClose}
          >
            Create account
          </Link>
          <div className="my-2 border-t border-border" role="separator" />
          <p className="px-4 py-1 text-xs text-text-muted">Login required to book</p>
        </div>
      )}
    </div>
  );
}
