"use client";

import { createPortal } from "react-dom";
import type { MenuHoverBridgeRect } from "./useMenuHoverBridge";
import type { NavMenuHoverHandlers } from "./nav-menu-hover";

type MenuHoverBridgeProps = {
  bridge: MenuHoverBridgeRect | null;
  mounted: boolean;
  menuHoverHandlers: NavMenuHoverHandlers;
};

export function MenuHoverBridge({ bridge, mounted, menuHoverHandlers }: MenuHoverBridgeProps) {
  const { cancelCloseMenu } = menuHoverHandlers;

  if (!mounted || !bridge) return null;

  return createPortal(
    <div
      data-nav-menu-bridge
      className="pointer-events-auto fixed z-[250]"
      style={{
        top: bridge.top,
        left: bridge.left,
        width: bridge.width,
        height: bridge.height,
      }}
      onMouseEnter={cancelCloseMenu}
      aria-hidden
    />,
    document.body,
  );
}
