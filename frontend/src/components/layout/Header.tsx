"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "./Container";
import { MegaMenu } from "./navigation/MegaMenu";
import { MobileDrawer, MobileHeaderControls } from "./navigation/MobileDrawer";
import { NavDropdown } from "./navigation/NavDropdown";
import { NAV_MENU_CLOSE_DELAY_MS } from "./navigation/nav-menu-hover";
import { SearchIcon } from "./navigation/icons";
import { SearchOverlay } from "./navigation/SearchOverlay";
import {
  isNavItemActive,
  primaryNavItems,
  type PrimaryNavItem,
  utilityNav,
} from "./navigation/nav-config";

export function Header({ transparent = false }: { transparent?: boolean }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const cancelCloseMenu = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const scheduleCloseMenu = useCallback(() => {
    cancelCloseMenu();
    closeTimerRef.current = setTimeout(() => {
      setOpenMenuId(null);
      closeTimerRef.current = null;
    }, NAV_MENU_CLOSE_DELAY_MS);
  }, [cancelCloseMenu]);

  useEffect(() => () => cancelCloseMenu(), [cancelCloseMenu]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--current-header-height",
      scrolled ? "var(--header-height-condensed)" : "var(--header-height)",
    );
  }, [scrolled]);

  useEffect(() => {
    setOpenMenuId(null);
  }, [pathname]);

  const isSolid = scrolled || !transparent;

  const hideClass = (hideBelow?: "xl" | "lg") => {
    if (hideBelow === "xl") return "hidden xl:inline-flex";
    if (hideBelow === "lg") return "hidden lg:inline-flex";
    return "inline-flex";
  };

  const triggerActiveClass = isSolid
    ? "bg-primary-subtle text-primary shadow-sm"
    : "bg-white/20 text-text-inverse shadow-none";

  const navLinkClass = (item: PrimaryNavItem, active: boolean) => {
    const hide = hideClass(item.kind === "link" ? item.hideBelow : item.hideBelow);
    const activeClass = active ? triggerActiveClass : "";
    const colorClass = isSolid
      ? "text-text-muted"
      : "text-text-inverse [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]";

    return `${hide} inline-flex min-h-10 items-center whitespace-nowrap rounded-[var(--radius-button)] px-2 text-[13px] font-medium transition-colors hover:text-primary md:px-2.5 md:text-[14px] xl:px-3 xl:text-[15px] ${colorClass} ${activeClass}`;
  };

  const utilityClass = `flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
    isSolid
      ? "text-text-muted hover:bg-surface-muted hover:text-primary"
      : "text-text-inverse hover:bg-white/10"
  }`;

  const pillClass = isSolid
    ? "border border-border/80 bg-surface/95 backdrop-blur-[var(--glass-blur)]"
    : "border border-white/20 bg-white/10 backdrop-blur-[var(--glass-blur)]";

  const openMenu = useCallback(
    (id: string) => {
      cancelCloseMenu();
      setOpenMenuId(id);
    },
    [cancelCloseMenu],
  );
  const closeMenu = useCallback(() => {
    cancelCloseMenu();
    setOpenMenuId(null);
  }, [cancelCloseMenu]);

  const menuHoverHandlers = { cancelCloseMenu, scheduleCloseMenu };

  const renderNavItem = (item: PrimaryNavItem) => {
    const active = isNavItemActive(pathname, item);
    const linkClass = navLinkClass(item, active);

    if (item.kind === "mega") {
      return (
        <MegaMenu
          key={item.config.id}
          config={item.config}
          open={openMenuId === item.config.id}
          active={active}
          onOpen={() => openMenu(item.config.id)}
          onClose={closeMenu}
          linkClassName={linkClass}
          triggerActiveClassName={triggerActiveClass}
          menuHoverHandlers={menuHoverHandlers}
        />
      );
    }

    if (item.kind === "dropdown") {
      return (
        <NavDropdown
          key={item.config.id}
          config={item.config}
          open={openMenuId === item.config.id}
          active={active}
          onOpen={() => openMenu(item.config.id)}
          onClose={closeMenu}
          linkClassName={linkClass}
          triggerActiveClassName={triggerActiveClass}
          menuHoverHandlers={menuHoverHandlers}
        />
      );
    }

    return (
      <Link key={item.href} href={item.href} className={linkClass}>
        {item.label}
      </Link>
    );
  };

  return (
    <>
      <header
        data-zone="header-band"
        className={`transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] ${
          isSolid
            ? "border-b border-border bg-surface/95 shadow-[var(--shadow-header)] backdrop-blur-[var(--glass-blur)]"
            : "border-b border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-[var(--glass-blur)]"
        }`}
        style={{
          height: scrolled ? "var(--header-height-condensed)" : "var(--header-height)",
        }}
      >
        <Container
          as="div"
          flat
          narrow
          className="grid h-full grid-cols-[auto_1fr_auto] items-center gap-3 px-4 sm:px-6 md:gap-4 xl:gap-6"
        >
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/polo-safari-logo.svg"
              alt="Polo Safari"
              width={140}
              height={40}
              className="h-8 w-auto max-h-9 lg:h-9"
              priority
            />
          </Link>

          <nav
            className={`relative z-[1] hidden min-w-0 max-w-full justify-self-center overflow-visible md:flex md:items-center md:gap-0.5 md:rounded-[var(--radius-button)] md:px-1.5 md:py-1 ${pillClass}`}
            aria-label="Primary navigation"
          >
            {primaryNavItems.map(renderNavItem)}
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-1.5 lg:gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className={`${utilityClass} hidden md:flex`}
              aria-label="Open search"
            >
              <SearchIcon />
            </button>

            <Link
              href={utilityNav.planJourney.href}
              className="inline-flex h-9 shrink-0 items-center rounded-[var(--radius-button)] bg-primary px-2.5 text-xs font-semibold text-text-inverse transition-colors hover:bg-primary-hover sm:h-10 sm:px-3 sm:text-sm md:h-11 xl:px-5"
            >
              <span className="sm:hidden">Plan</span>
              <span className="hidden sm:inline xl:hidden">Plan Journey</span>
              <span className="hidden xl:inline">{utilityNav.planJourney.label}</span>
            </Link>

            <MobileHeaderControls
              isSolid={isSolid}
              onMenuOpen={() => {
                setSearchOpen(false);
                setMobileOpen(true);
              }}
              onSearchOpen={() => {
                setMobileOpen(false);
                setSearchOpen(true);
              }}
            />
          </div>
        </Container>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        onSearchOpen={() => setSearchOpen(true)}
      />
    </>
  );
}
