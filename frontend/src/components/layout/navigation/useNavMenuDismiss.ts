"use client";

import { useEffect, type RefObject } from "react";

const MENU_ROOT_SELECTOR =
  '[data-nav-menu-trigger], [data-nav-menu-panel], [data-nav-menu-bridge]';

export function useNavMenuDismiss(
  open: boolean,
  onClose: () => void,
  triggerRef: RefObject<HTMLButtonElement | null>,
) {
  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      if (triggerRef.current?.contains(target)) return;
      if (target instanceof Element && target.closest(MENU_ROOT_SELECTOR)) return;

      onClose();
    };

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        triggerRef.current?.focus({ preventScroll: true });
      }
    };

    const pointerTimer = window.setTimeout(() => {
      document.addEventListener("mousedown", onPointerDown);
    }, 100);

    document.addEventListener("keydown", onEscape);
    return () => {
      window.clearTimeout(pointerTimer);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onEscape);
    };
  }, [open, onClose, triggerRef]);
}
