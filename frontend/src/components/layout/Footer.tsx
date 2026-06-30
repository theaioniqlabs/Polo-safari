import Link from "next/link";
import { Container } from "./Container";
import { experiencePillars } from "./navigation/nav-config";

const destinations = [
  { href: "/polo-forest", label: "Polo Forest" },
  { href: "/destinations/saputara", label: "Saputara" },
  { href: "/destinations/gir", label: "Gir" },
  { href: "/destinations/rann", label: "Rann of Kutch" },
];

const planLinks = [
  { href: "/plan", label: "Plan Your Visit" },
  { href: "/plan", label: "Book online" },
  { href: "/legal/cancellation", label: "Cancellation policy" },
  { href: "/plan/enquire", label: "Enquire" },
];

const contactLinks = [
  { href: "tel:+919876543210", label: "+91 98765 43210" },
  { href: "https://wa.me/919876543210", label: "WhatsApp" },
  { href: "/contact", label: "Ahmedabad office" },
];

const awards = ["Gujarat Tourism", "TripAdvisor 2024", "Safe Travel"];

const social = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "YouTube" },
  { href: "https://wa.me/919876543210", label: "WhatsApp" },
];

export function Footer() {
  return (
    <footer className="bg-surface-dark-elevated text-text-on-dark" aria-label="Site footer">
      <Container className="py-12">
        <div className="mb-10">
          <p className="font-display text-2xl font-semibold">Polo Safari</p>
          <p className="mt-2 max-w-md text-sm text-text-on-dark/80">
            Gujarat&apos;s experiential travel brand — heritage, education, corporate, and adventure
            at Polo Forest.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-on-dark/60">
              Destinations
            </p>
            <ul className="mt-4 space-y-2">
              {destinations.map((link) => (
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
              Experiences
            </p>
            <ul className="mt-4 space-y-2">
              {experiencePillars.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-on-dark/85 transition-colors hover:text-text-inverse"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/experiences"
                  className="text-sm font-semibold text-text-on-dark/85 transition-colors hover:text-text-inverse"
                >
                  View all
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-text-on-dark/60">
              Plan
            </p>
            <ul className="mt-4 space-y-2">
              {planLinks.map((link, i) => (
                <li key={`${link.href}-${i}`}>
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
            </ul>
          </div>
        </div>

        <Link
          href="/polo-forest"
          className="mt-10 block overflow-hidden rounded-[var(--radius-md)] border border-white/10"
        >
          <div className="flex h-32 items-center justify-center bg-primary-subtle/20 text-sm text-text-on-dark/70">
            Mini map — Polo Forest, Idar, Gujarat
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
            <Link href="/sitemap" className="hover:text-text-inverse">
              Sitemap
            </Link>
          </p>
          <div className="flex items-center gap-4">
            <span className="font-medium text-text-on-dark/80">EN</span>
            <button
              type="button"
              className="rounded border border-white/20 px-3 py-1 text-xs text-text-on-dark/80"
              aria-label="Toggle theme"
            >
              Theme
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
}
