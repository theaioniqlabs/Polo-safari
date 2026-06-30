"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "./Container";
import { DiscoverDropdown } from "./navigation/DiscoverDropdown";
import { ExperiencesMegaMenu } from "./navigation/ExperiencesMegaMenu";
import { SearchIcon } from "./navigation/icons";
import { MobileDrawer, MobileHeaderControls } from "./navigation/MobileDrawer";
import { ProfileDropdown } from "./navigation/ProfileDropdown";
import { SearchOverlay } from "./navigation/SearchOverlay";

export function Header({ transparent = false }: { transparent?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [experiencesOpen, setExperiencesOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const isSolid = scrolled || !transparent;

  const closeMenus = () => {
    setExperiencesOpen(false);
    setDiscoverOpen(false);
    setProfileOpen(false);
  };

  const openExperiences = () => {
    setDiscoverOpen(false);
    setProfileOpen(false);
    setExperiencesOpen(true);
  };

  const openDiscover = () => {
    setExperiencesOpen(false);
    setProfileOpen(false);
    setDiscoverOpen(true);
  };

  const navLinkClass = `inline-flex min-h-10 items-center whitespace-nowrap rounded-[var(--radius-button)] px-2 text-[13px] font-medium transition-colors hover:text-primary md:px-2.5 md:text-[14px] xl:px-3 xl:text-[15px] ${
    isSolid ? "text-text-muted" : "text-text-inverse [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]"
  }`;

  const utilityClass = `flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-colors ${
    isSolid
      ? "text-text-muted hover:bg-surface-muted hover:text-primary"
      : "text-text-inverse hover:bg-white/10"
  }`;

  const pillClass = isSolid
    ? "border border-border bg-surface-muted/90"
    : "border border-white/20 bg-white/10 backdrop-blur-md";

  return (
    <>
      <header
        data-zone="header-band"
        className={`transition-all duration-[var(--duration-normal)] ease-[var(--ease-default)] ${
          isSolid
            ? "border-b border-border bg-surface shadow-[var(--shadow-header)]"
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
            className={`hidden min-w-0 justify-self-center md:flex md:items-center md:gap-0.5 md:rounded-[var(--radius-button)] md:px-1.5 md:py-1 ${pillClass}`}
            aria-label="Primary navigation"
          >
            <ExperiencesMegaMenu
              open={experiencesOpen}
              onOpen={openExperiences}
              onClose={() => setExperiencesOpen(false)}
              linkClassName={navLinkClass}
            />
            <DiscoverDropdown
              open={discoverOpen}
              onOpen={openDiscover}
              onClose={() => setDiscoverOpen(false)}
              linkClassName={navLinkClass}
            />
            <Link href="/polo-forest" className={navLinkClass}>
              Polo Forest
            </Link>
            <Link href="/plan" className={navLinkClass}>
              Plan
            </Link>
            <Link href="/about" className={`${navLinkClass} hidden xl:inline-flex`}>
              About
            </Link>
          </nav>

          <div className="flex shrink-0 items-center justify-end gap-1.5 lg:gap-2 xl:gap-3">
            <button
              type="button"
              onClick={() => {
                closeMenus();
                setSearchOpen(true);
              }}
              className={`${utilityClass} hidden md:flex`}
              aria-label="Open search"
            >
              <SearchIcon />
            </button>

            <div className="hidden md:block">
              <ProfileDropdown
                open={profileOpen}
                onOpen={() => {
                  setExperiencesOpen(false);
                  setDiscoverOpen(false);
                  setProfileOpen(true);
                }}
                onClose={() => setProfileOpen(false)}
                isSolid={isSolid}
              />
            </div>

            <Link
              href="/plan"
              className="hidden h-11 shrink-0 items-center rounded-[var(--radius-button)] bg-primary px-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover md:inline-flex xl:px-5"
            >
              <span className="xl:hidden">Plan</span>
              <span className="hidden xl:inline">Plan Your Visit</span>
            </Link>

            <MobileHeaderControls
              isSolid={isSolid}
              onMenuOpen={() => {
                closeMenus();
                setSearchOpen(false);
                setMobileOpen(true);
              }}
              onSearchOpen={() => {
                closeMenus();
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
