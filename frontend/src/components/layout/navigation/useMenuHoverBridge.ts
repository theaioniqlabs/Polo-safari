"use client";

import { useLayoutEffect, useState, type RefObject } from "react";
import { NAV_MENU_HOVER_BRIDGE_PX } from "./nav-menu-hover";

export type MenuHoverBridgeRect = {
  top: number;
  left: number;
  width: number;
  height: number;
};

export function useMenuHoverBridge(
  open: boolean,
  triggerRef: RefObject<HTMLButtonElement | null>,
): MenuHoverBridgeRect | null {
  const [bridge, setBridge] = useState<MenuHoverBridgeRect | null>(null);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) {
      setBridge(null);
      return;
    }

    const update = () => {
      const trigger = triggerRef.current;
      if (!trigger) return;

      const rect = trigger.getBoundingClientRect();
      const stack = document.querySelector('[data-zone="site-header-stack"]');
      const stackBottom =
        stack?.getBoundingClientRect().bottom ?? rect.bottom + NAV_MENU_HOVER_BRIDGE_PX;

      setBridge({
        top: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: Math.max(NAV_MENU_HOVER_BRIDGE_PX, stackBottom - rect.bottom + NAV_MENU_HOVER_BRIDGE_PX),
      });
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, triggerRef]);

  return bridge;
}
