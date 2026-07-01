import Link from "next/link";
import { Container } from "./Container";
import { deferredServicesLinks, footerNav, utilityNav } from "./navigation/nav-config";
import { getFooterContent } from "@/content/home-content";

const awards = [
  "Gujarat Tourism S7",
  "Best Corporate Operator",
  "MSME Registered",
];

const social = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "LinkedIn" },
  { href: "https://wa.me/919408510911", label: "WhatsApp" },
];

export function Footer() {
  const footer = getFooterContent();
  const contact = footer.company?.contact;

  const contactLinks = [
    ...(contact?.phones?.slice(0, 1).map((p) => ({
      href: `tel:${p.replace(/\s/g, "")}`,
      label: p,
    })) ?? [{ href: "tel:+919408510911", label: "+91 94085 10911" }]),
    { href: "https://wa.me/919408510911", label: "WhatsApp" },
    { href: footer.directionsHref, label: "Ahmedabad office" },
  ];

  return (
    <footer className="bg-surface-dark-elevated text-text-on-dark" aria-label="Site footer">
      <Container className="py-12">
        <div className="mb-10">
          <p className="text-2xl font-semibold">{footer.heading}</p>
          <p className="mt-2 max-w-md text-sm text-text-on-dark/80">{footer.subheading}</p>
          <p className="mt-3 max-w-xl text-sm text-text-on-dark/70">{footer.contactLine}</p>
          <Link
            href={utilityNav.planJourney.href}
            className="mt-5 inline-flex rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse transition-colors hover:bg-primary-hover"
          >
            {utilityNav.planJourney.label} →
          </Link>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-on-dark/60">
              Explore
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/85 transition-colors hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-on-dark/60">
              Tours
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.tours.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/85 transition-colors hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-on-dark/60">
              Company
            </p>
            <ul className="mt-4 space-y-2">
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/85 transition-colors hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-on-dark/60">
              Future Services
            </p>
            <p className="mt-2 text-xs text-text-on-dark/50">Coming soon — enquiry-only MVP</p>
            <ul className="mt-3 space-y-2">
              {deferredServicesLinks.map((link) => (
                <li key={link.href}>
                  <span className="text-sm text-text-on-dark/50">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-on-dark/60">
              Contact
            </p>
            <ul className="mt-4 space-y-2">
              {contactLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/85 transition-colors hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {footerNav.convert.slice(1).map((link) => (
                <li key={`${link.href}-${link.label}`}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/85 transition-colors hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Link
          href="/destinations/india/polo-forest"
          className="mt-10 block overflow-hidden rounded-[var(--radius-md)] border border-white/10"
        >
          <div className="flex h-32 items-center justify-center bg-primary-subtle/20 text-sm text-text-on-dark/70">
            Polo Forest — heritage heartland and flagship destination
          </div>
        </Link>

        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-3">
            {awards.map((award) => (
              <span
                key={award}
                className="rounded border border-white/15 px-3 py-1.5 text-xs text-text-on-dark/80"
              >
                {award}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            {social.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                aria-label={item.label}
                className="text-sm text-text-on-dark/70 transition-colors hover:text-text-inverse"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-text-on-dark/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Polo Safari ·{" "}
            <Link href="/legal/privacy" className="hover:text-text-inverse">
              Privacy
            </Link>{" "}
            ·{" "}
            <Link href="/legal/terms" className="hover:text-text-inverse">
              Terms
            </Link>{" "}
            ·{" "}
            <Link href="/faq" className="hover:text-text-inverse">
              FAQ
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <span className="font-medium text-text-on-dark/80">EN</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
