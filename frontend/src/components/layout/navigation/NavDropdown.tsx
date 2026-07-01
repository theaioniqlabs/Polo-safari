"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { NavDropdownConfig } from "./nav-config";
import { ChevronDownIcon } from "./icons";
import { MenuHoverBridge } from "./MenuHoverBridge";
import {
  NAV_MENU_HOVER_BRIDGE_PX,
  type NavMenuHoverHandlers,
} from "./nav-menu-hover";
import { useFocusTrap } from "./useFocusTrap";
import { useMenuHoverBridge } from "./useMenuHoverBridge";
import { useNavMenuDismiss } from "./useNavMenuDismiss";

type NavDropdownProps = {
  config: NavDropdownConfig;
  open: boolean;
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  linkClassName: string;
  triggerActiveClassName: string;
  menuHoverHandlers: NavMenuHoverHandlers;
};

export function NavDropdown({
  config,
  open,
  active,
  onOpen,
  onClose,
  linkClassName,
  triggerActiveClassName,
  menuHoverHandlers,
}: NavDropdownProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [panelPosition, setPanelPosition] = useState<{ top: number; left: number } | null>(
    null,
  );
  const { cancelCloseMenu, scheduleCloseMenu } = menuHoverHandlers;
  const bridge = useMenuHoverBridge(open, triggerRef);

  useFocusTrap(
    panelRef,
    open,
    () => {
      onClose();
      triggerRef.current?.focus({ preventScroll: true });
    },
    false,
  );

  useNavMenuDismiss(open, onClose, triggerRef);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = () => {
    cancelCloseMenu();
    onOpen();
  };

  const updatePanelPosition = () => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    setPanelPosition({ top: rect.bottom, left: rect.left });
  };

  useLayoutEffect(() => {
    if (!open) {
      setPanelPosition(null);
      return;
    }
    updatePanelPosition();
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onResize = () => updatePanelPosition();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [open]);

  const triggerActive = open || active;

  const panel =
    open && mounted && panelPosition
      ? createPortal(
          <div
            ref={panelRef}
            data-nav-menu-panel
            role="menu"
            aria-label={`${config.label} menu`}
            className="pointer-events-auto fixed z-[260] min-w-[240px] motion-reduce:transition-none transition-all duration-150 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 animate-[mega-fade-slide_180ms_var(--ease-default)] motion-reduce:animate-none"
            style={{
              top: panelPosition.top,
              left: panelPosition.left,
              paddingTop: NAV_MENU_HOVER_BRIDGE_PX,
            }}
            onMouseEnter={cancelCloseMenu}
            onMouseLeave={scheduleCloseMenu}
          >
            <div className="overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface py-1.5 shadow-[var(--shadow-medium)]">
              {config.links.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  role="menuitem"
                  onClick={onClose}
                  className="block px-4 py-2.5 text-sm text-text transition-colors hover:bg-primary-subtle hover:text-primary"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <>
      <div className="relative" onMouseEnter={handleOpen}>
        <button
          ref={triggerRef}
          type="button"
          data-nav-menu-trigger
          className={`${linkClassName} gap-1 ${triggerActive ? triggerActiveClassName : ""}`}
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => {
            if (open) {
              onClose();
            } else {
              handleOpen();
            }
          }}
        >
          {config.label}
          <ChevronDownIcon
            className={`shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open ? (
          <div
            className="absolute inset-x-0 top-full"
            style={{ height: NAV_MENU_HOVER_BRIDGE_PX }}
            aria-hidden
            onMouseEnter={cancelCloseMenu}
          />
        ) : null}
      </div>
      <MenuHoverBridge bridge={bridge} mounted={mounted} menuHoverHandlers={menuHoverHandlers} />
      {panel}
    </>
  );
}
