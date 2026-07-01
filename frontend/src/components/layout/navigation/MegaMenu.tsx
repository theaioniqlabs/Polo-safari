"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { homeImages } from "@/lib/home-images";
import type { MegaMenuConfig } from "./nav-config";
import { ChevronDownIcon } from "./icons";
import { MenuHoverBridge } from "./MenuHoverBridge";
import {
  NAV_MENU_HOVER_BRIDGE_PX,
  type NavMenuHoverHandlers,
} from "./nav-menu-hover";
import { useFocusTrap } from "./useFocusTrap";
import { useMenuHoverBridge } from "./useMenuHoverBridge";
import { useNavMenuDismiss } from "./useNavMenuDismiss";

const MENU_TOP =
  "calc(var(--announcement-height, 0px) + var(--current-header-height, var(--header-height)))";

const cardImages = {
  corporateCampfire: homeImages.corporateCampfire,
  categoryEducation: homeImages.categoryEducation,
  familyCampfire: homeImages.familyCampfire,
  poloForestPanorama: homeImages.poloForestPanorama,
  categoryDestinations: homeImages.categoryDestinations,
  featuredHeritage: homeImages.featuredHeritage,
  categoryCorporate: homeImages.categoryCorporate,
  categoryAdventure: homeImages.categoryAdventure,
  heroEducation: homeImages.heroEducation,
  featuredFamily: homeImages.featuredFamily,
} as const;

type MegaMenuProps = {
  config: MegaMenuConfig;
  open: boolean;
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  linkClassName: string;
  triggerActiveClassName: string;
  menuHoverHandlers: NavMenuHoverHandlers;
};

export function MegaMenu({
  config,
  open,
  active,
  onOpen,
  onClose,
  linkClassName,
  triggerActiveClassName,
  menuHoverHandlers,
}: MegaMenuProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
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

  const panel =
    open && mounted
      ? createPortal(
          <>
            <button
              type="button"
              className="pointer-events-none fixed inset-0 z-[240] bg-[#1e2a24]/20 backdrop-blur-[2px] motion-reduce:backdrop-blur-none animate-[mega-fade-slide_180ms_var(--ease-default)] motion-reduce:animate-none"
              style={{ top: MENU_TOP }}
              aria-hidden
              tabIndex={-1}
            />
            <div
              className="pointer-events-none fixed inset-x-0 z-[260] px-4 pb-4 sm:px-6 lg:px-8"
              style={{ top: MENU_TOP }}
            >
              <div
                ref={panelRef}
                data-nav-menu-panel
                role="navigation"
                aria-label={`${config.label} menu`}
                className="pointer-events-auto mx-auto max-w-[var(--layout-content)] overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface shadow-[var(--shadow-medium)] motion-reduce:animate-none animate-[mega-fade-slide_180ms_var(--ease-default)]"
                onMouseEnter={cancelCloseMenu}
                onMouseLeave={scheduleCloseMenu}
              >
                <div className="p-6 lg:p-8">
                  <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                        {config.leftHeading}
                      </p>
                      <ul className="mt-4 space-y-0.5">
                        {config.leftLinks.map((link) => (
                          <li key={link.href + link.label}>
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="group flex items-center gap-3 rounded-[var(--radius-md)] px-3 py-2.5 text-[15px] text-text transition-colors hover:bg-primary-subtle hover:text-primary"
                            >
                              <span
                                className="h-2 w-2 shrink-0 rounded-full ring-2 ring-white"
                                style={{ backgroundColor: link.dotColor }}
                                aria-hidden
                              />
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                      {config.leftCta && (
                        <Link
                          href={config.leftCta.href}
                          onClick={onClose}
                          className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
                        >
                          {config.leftCta.label}
                        </Link>
                      )}
                    </div>

                    <div className="border-t border-border pt-6 lg:col-span-8 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                        {config.rightHeading}
                      </p>
                      <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                        {config.featuredCards.map((card) => (
                          <Link
                            key={card.id}
                            href={card.href}
                            onClick={onClose}
                            className="group overflow-hidden rounded-[var(--radius-md)] border border-border bg-surface transition-shadow hover:shadow-[var(--shadow-medium)]"
                          >
                            <div className="relative aspect-[16/10] overflow-hidden bg-surface-muted">
                              <Image
                                src={cardImages[card.imageKey]}
                                alt={card.title}
                                fill
                                sizes="(max-width:768px) 50vw, 280px"
                                className="object-cover transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transform-none"
                              />
                            </div>
                            <div className="p-4">
                              <p className="text-base font-semibold leading-snug text-text-heading group-hover:text-primary">
                                {card.title}
                              </p>
                              <p className="mt-1 text-sm text-text-muted">{card.caption}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>,
          document.body,
        )
      : null;

  const triggerActive = open || active;

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
          {config.shortLabel ? (
            <>
              <span className="hidden xl:inline">{config.label}</span>
              <span className="xl:hidden">{config.shortLabel}</span>
            </>
          ) : (
            config.label
          )}
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
