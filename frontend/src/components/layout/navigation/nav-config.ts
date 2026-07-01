export type NavLink = {
  href: string;
  label: string;
  /** Hide on smaller desktop breakpoints to fit header */
  hideBelow?: "xl" | "lg";
};

export const utilityNav = {
  enquire: { href: "/enquire", label: "Enquire Now" },
  planJourney: { href: "/plan-my-journey", label: "Plan My Journey" },
  search: { href: "#search", label: "Search" },
} as const;

/** Colored dot link for mega menu left column */
export type MegaMenuDotLink = NavLink & {
  dotColor: string;
};

/** Featured image card for mega menu right column */
export type MegaMenuFeaturedCard = {
  id: string;
  title: string;
  caption: string;
  href: string;
  imageKey:
    | "corporateCampfire"
    | "categoryEducation"
    | "familyCampfire"
    | "poloForestPanorama"
    | "categoryDestinations"
    | "featuredHeritage"
    | "categoryCorporate"
    | "categoryAdventure"
    | "heroEducation"
    | "featuredFamily";
};

export type MegaMenuConfig = {
  id: string;
  label: string;
  /** Shorter label for compact header breakpoints */
  shortLabel?: string;
  baseHref: string;
  leftHeading: string;
  leftLinks: MegaMenuDotLink[];
  leftCta?: NavLink;
  rightHeading: string;
  featuredCards: MegaMenuFeaturedCard[];
};

export type NavDropdownConfig = {
  id: string;
  label: string;
  baseHref?: string;
  links: NavLink[];
};

export type PrimaryNavItem =
  | ({ kind: "link" } & NavLink)
  | ({ kind: "mega"; config: MegaMenuConfig } & { hideBelow?: "xl" | "lg" })
  | ({ kind: "dropdown"; config: NavDropdownConfig } & { hideBelow?: "xl" | "lg" });

/** Tours mega — browse types + featured group packages */
export const toursMegaMenu: MegaMenuConfig = {
  id: "tours",
  label: "Tours",
  baseHref: "/tour-packages",
  leftHeading: "Browse by type",
  leftLinks: [
    {
      href: "/india",
      label: "Domestic Tours",
      dotColor: "var(--color-pillar-heritage)",
    },
    {
      href: "/international",
      label: "International Tours",
      dotColor: "var(--color-pillar-corporate)",
    },
    {
      href: "/theme-tour-packages",
      label: "Theme Tours",
      dotColor: "var(--color-pillar-adventure)",
    },
    {
      href: "/tour-packages",
      label: "All Tour Packages",
      dotColor: "var(--color-pillar-family)",
    },
  ],
  leftCta: { href: "/tour-packages", label: "View all tour packages →" },
  rightHeading: "Featured packages",
  featuredCards: [
    {
      id: "corporate-tour",
      title: "Corporate Tour",
      caption: "20–200 guests · Custom proposal",
      href: "/corporate#rfp",
      imageKey: "corporateCampfire",
    },
    {
      id: "school-tour",
      title: "School Tour",
      caption: "Curriculum-aligned · Safety briefed",
      href: "/schools-colleges#rfp",
      imageKey: "categoryEducation",
    },
    {
      id: "group-tour",
      title: "Group Tour",
      caption: "10–50 guests · Weekend departures",
      href: "/tour-packages#group-tours",
      imageKey: "familyCampfire",
    },
  ],
};

/** Corporate mega — program types + featured retreats */
export const corporateMegaMenu: MegaMenuConfig = {
  id: "corporate",
  label: "Corporate",
  baseHref: "/corporate",
  leftHeading: "Programs",
  leftLinks: [
    {
      href: "/corporate",
      label: "Overview",
      dotColor: "var(--color-pillar-corporate)",
    },
    {
      href: "/corporate#team-building",
      label: "Team Building",
      dotColor: "var(--color-pillar-adventure)",
    },
    {
      href: "/corporate#offsites",
      label: "Offsites & Retreats",
      dotColor: "var(--color-pillar-family)",
    },
    {
      href: "/corporate#leadership",
      label: "Leadership Camps",
      dotColor: "var(--color-pillar-heritage)",
    },
    {
      href: "/corporate#conferences",
      label: "Conferences",
      dotColor: "var(--color-pillar-education)",
    },
    {
      href: "/corporate#rfp",
      label: "Request Proposal",
      dotColor: "var(--color-accent-gold)",
    },
  ],
  leftCta: { href: "/corporate#rfp", label: "Request a corporate proposal →" },
  rightHeading: "Featured retreats",
  featuredCards: [
    {
      id: "polo-offsite",
      title: "Polo Forest Offsite",
      caption: "2–3 days · Team bonding in nature",
      href: "/corporate#rfp",
      imageKey: "poloForestPanorama",
    },
    {
      id: "leadership-retreat",
      title: "Leadership Retreat",
      caption: "Executive programs · Facilitated sessions",
      href: "/corporate#leadership",
      imageKey: "categoryCorporate",
    },
    {
      id: "conference-getaway",
      title: "Conference Getaway",
      caption: "Meetings + experiences · Full logistics",
      href: "/corporate#conferences",
      imageKey: "corporateCampfire",
    },
  ],
};

/** Schools & Colleges mega */
export const schoolsMegaMenu: MegaMenuConfig = {
  id: "schools",
  label: "Schools & Colleges",
  shortLabel: "Schools",
  baseHref: "/schools-colleges",
  leftHeading: "Programs",
  leftLinks: [
    {
      href: "/schools-colleges",
      label: "Educational Tours",
      dotColor: "var(--color-pillar-education)",
    },
    {
      href: "/schools-colleges#nature-camps",
      label: "Nature Camps",
      dotColor: "var(--color-pillar-family)",
    },
    {
      href: "/schools-colleges#industrial",
      label: "Industrial Visits",
      dotColor: "var(--color-pillar-corporate)",
    },
    {
      href: "/schools-colleges#picnics",
      label: "School Picnics",
      dotColor: "var(--color-pillar-adventure)",
    },
    {
      href: "/schools-colleges#rfp",
      label: "Request Proposal",
      dotColor: "var(--color-accent-gold)",
    },
  ],
  leftCta: { href: "/schools-colleges#rfp", label: "Request an educational proposal →" },
  rightHeading: "Featured trips",
  featuredCards: [
    {
      id: "nature-camp",
      title: "Nature Camp",
      caption: "Ecology · Outdoor learning · Polo Forest",
      href: "/schools-colleges#nature-camps",
      imageKey: "poloForestPanorama",
    },
    {
      id: "industrial-visit",
      title: "Industrial Visit",
      caption: "STEM & industry exposure · Custom routes",
      href: "/schools-colleges#industrial",
      imageKey: "heroEducation",
    },
    {
      id: "school-picnic",
      title: "School Picnic",
      caption: "Day trips · Safe, supervised fun",
      href: "/schools-colleges#picnics",
      imageKey: "featuredFamily",
    },
  ],
};

/** Destinations mega */
export const destinationsMegaMenu: MegaMenuConfig = {
  id: "destinations",
  label: "Destinations",
  baseHref: "/destinations",
  leftHeading: "Explore",
  leftLinks: [
    {
      href: "/destinations",
      label: "All Destinations",
      dotColor: "var(--color-pillar-corporate)",
    },
    {
      href: "/destinations/india/polo-forest",
      label: "Polo Forest",
      dotColor: "var(--color-pillar-education)",
    },
    {
      href: "/india",
      label: "India",
      dotColor: "var(--color-pillar-heritage)",
    },
    {
      href: "/international",
      label: "International",
      dotColor: "var(--color-pillar-adventure)",
    },
  ],
  leftCta: { href: "/destinations", label: "View all destinations →" },
  rightHeading: "Featured destinations",
  featuredCards: [
    {
      id: "polo-forest",
      title: "Polo Forest",
      caption: "Heritage temples · Monsoon ecology",
      href: "/destinations/india/polo-forest",
      imageKey: "poloForestPanorama",
    },
    {
      id: "gujarat",
      title: "Gujarat Highlights",
      caption: "Statue of Unity · Saputara · Heritage",
      href: "/india",
      imageKey: "featuredHeritage",
    },
    {
      id: "international",
      title: "International Favourites",
      caption: "Curated group departures · Custom quotes",
      href: "/international",
      imageKey: "categoryDestinations",
    },
  ],
};

/**
 * Services dropdown — MVP enquiry-only services.
 * DEFERRED (footer "Future services"): Flights, Hotels, Car Rental, Visa, Passport, Insurance.
 * Rationale: enquiry-first MVP; ancillary booking requires supplier integrations (Phase 2+).
 */
export const servicesDropdown: NavDropdownConfig = {
  id: "services",
  label: "Services",
  baseHref: "/services",
  links: [
    { href: "/plan-my-journey", label: "Custom Trip Planning" },
    { href: "/services#photography", label: "Photography & Media" },
    { href: "/services#merchandise", label: "Merchandise & Gear" },
    { href: "/services#event-support", label: "Event & Group Support" },
    { href: "/services", label: "All Services" },
  ],
};

export const aboutDropdown: NavDropdownConfig = {
  id: "about",
  label: "About",
  baseHref: "/about",
  links: [
    { href: "/about", label: "Our Story" },
    { href: "/about#founder-message", label: "About the Founder" },
    { href: "/awards", label: "Awards & Recognition" },
    { href: "/clients", label: "Our Clients" },
    { href: "/faq", label: "FAQ" },
  ],
};

/** Header primary navigation — megas + About/Blog/Contact (Services, Gallery, Enquire in footer/mobile) */
export const primaryNavItems: PrimaryNavItem[] = [
  { kind: "mega", config: toursMegaMenu },
  { kind: "mega", config: corporateMegaMenu },
  { kind: "mega", config: schoolsMegaMenu, hideBelow: "lg" },
  { kind: "mega", config: destinationsMegaMenu },
  { kind: "dropdown", config: aboutDropdown, hideBelow: "lg" },
  { kind: "link", href: "/blog", label: "Blog", hideBelow: "xl" },
  { kind: "link", href: "/contact", label: "Contact", hideBelow: "xl" },
];

/** @deprecated Use primaryNavItems — kept for gradual migration */
export const primaryNav: NavLink[] = [
  { href: "/tour-packages", label: "Tours" },
  { href: "/corporate", label: "Corporate" },
  { href: "/schools-colleges", label: "Schools & Colleges" },
  { href: "/destinations", label: "Destinations" },
  { href: "/services", label: "Services", hideBelow: "xl" },
  { href: "/gallery", label: "Gallery", hideBelow: "xl" },
  { href: "/about", label: "About", hideBelow: "lg" },
  { href: "/blog", label: "Blog", hideBelow: "lg" },
  { href: "/contact", label: "Contact", hideBelow: "lg" },
];

/** Footer deferred travel ancillaries — not in header MVP */
export const deferredServicesLinks = [
  { href: "/services#flights", label: "Flights" },
  { href: "/services#hotels", label: "Hotels" },
  { href: "/services#car-rental", label: "Car Rental" },
  { href: "/services#visa", label: "Visa Assistance" },
  { href: "/services#passport", label: "Passport Services" },
  { href: "/services#insurance", label: "Travel Insurance" },
] as const;

export const footerNav = {
  explore: [
    { href: "/destinations", label: "All Destinations" },
    { href: "/destinations/india/polo-forest", label: "Polo Forest" },
    { href: "/india", label: "India" },
    { href: "/international", label: "International" },
  ],
  tours: [
    { href: "/tour-packages", label: "All Tours" },
    { href: "/india", label: "Domestic Tours" },
    { href: "/international", label: "International Tours" },
    { href: "/theme-tour-packages", label: "Theme Tours" },
    { href: "/corporate", label: "Corporate" },
    { href: "/schools-colleges", label: "Schools & Colleges" },
  ],
  company: [
    { href: "/about", label: "Our Story" },
    { href: "/about#founder-message", label: "About the Founder" },
    { href: "/awards", label: "Awards & Recognition" },
    { href: "/clients", label: "Our Clients" },
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ],
  convert: [
    { href: "/plan-my-journey", label: "Plan My Journey" },
    { href: "/enquire", label: "Enquire Now" },
    { href: "/corporate#rfp", label: "Corporate RFP" },
    { href: "/schools-colleges#rfp", label: "Educational RFP" },
  ],
} as const;

/** @deprecated Use footerNav.explore */
export const footerDestinations = footerNav.explore;

/** @deprecated Use footerNav.tours */
export const footerPackages = footerNav.tours;

export const searchSuggestions = [
  "Tours",
  "Corporate retreat",
  "School trip",
  "Polo Forest",
  "Plan My Journey",
  "Destinations",
];

export const searchPlaceholderExperiences = [
  { title: "Tours & Theme Packages", href: "/tour-packages" },
  { title: "Corporate Polo Forest Offsite", href: "/corporate#rfp" },
  { title: "Schools & Colleges Programs", href: "/schools-colleges#rfp" },
  { title: "Polo Forest Destination", href: "/destinations/india/polo-forest" },
  { title: "Plan My Journey", href: "/plan-my-journey" },
  { title: "Domestic Tours — India", href: "/india" },
  { title: "International Tours", href: "/international" },
];

/** Mobile drawer accordion sections */
export const mobileNavSections = {
  megas: [
    toursMegaMenu,
    corporateMegaMenu,
    schoolsMegaMenu,
    destinationsMegaMenu,
  ],
  dropdowns: [aboutDropdown],
  links: [
    { href: "/services", label: "Services" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
    { href: "/enquire", label: "Enquire Now" },
    { href: "/faq", label: "FAQ" },
  ] satisfies NavLink[],
};

function pathMatches(pathname: string, href: string): boolean {
  const path = href.split("#")[0];
  if (!path || path === "/") return pathname === "/";
  return pathname === path || pathname.startsWith(`${path}/`);
}

/** Resolve whether a nav item matches the current path */
export function isNavItemActive(pathname: string, item: PrimaryNavItem): boolean {
  if (item.kind === "link") {
    return pathMatches(pathname, item.href);
  }

  if (item.kind === "mega") {
    const paths = [
      item.config.baseHref,
      ...item.config.leftLinks.map((link) => link.href),
      ...item.config.featuredCards.map((card) => card.href),
    ];
    return paths.some((href) => pathMatches(pathname, href));
  }

  const paths = [
    item.config.baseHref,
    ...item.config.links.map((link) => link.href),
  ].filter(Boolean) as string[];

  return paths.some((href) => pathMatches(pathname, href));
}

/** Theme pillars for homepage category scroll & cross-links */
export type ExperiencePillar = NavLink & {
  pillar: "heritage" | "education" | "corporate" | "family" | "adventure";
  dotColor: string;
};

export const experiencePillars: ExperiencePillar[] = [
  {
    href: "/tour-packages#heritage-polo-forest",
    label: "Heritage & Culture",
    pillar: "heritage",
    dotColor: "var(--color-pillar-heritage)",
  },
  {
    href: "/schools-colleges",
    label: "Educational Tours",
    pillar: "education",
    dotColor: "var(--color-pillar-education)",
  },
  {
    href: "/corporate",
    label: "Corporate Retreats",
    pillar: "corporate",
    dotColor: "var(--color-pillar-corporate)",
  },
  {
    href: "/tour-packages#family-getaways",
    label: "Family Getaways",
    pillar: "family",
    dotColor: "var(--color-pillar-family)",
  },
  {
    href: "/tour-packages#adventure-trekking",
    label: "Adventure & Trekking",
    pillar: "adventure",
    dotColor: "var(--color-pillar-adventure)",
  },
];

/** @deprecated Use toursMegaMenu.featuredCards */
export const megaMenuPrograms = toursMegaMenu.featuredCards;

/** @deprecated Legacy discover links — use footerNav.explore */
export const discoverLinks = footerNav.explore;
