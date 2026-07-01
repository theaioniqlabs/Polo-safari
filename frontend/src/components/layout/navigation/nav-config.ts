export type NavLink = {
  href: string;
  label: string;
};

export type ExperiencePillar = NavLink & {
  pillar: "heritage" | "education" | "corporate" | "family" | "adventure";
  dotColor: string;
};

export type FeaturedExperience = {
  slug: string;
  title: string;
  caption: string;
};

export const primaryNav: NavLink[] = [
  { href: "/india", label: "India" },
  { href: "/international", label: "International" },
  { href: "/theme-tour-packages", label: "Theme Packages" },
  { href: "/corporate", label: "Corporate" },
  { href: "/schools-colleges", label: "Schools & Colleges" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/awards", label: "Awards" },
  { href: "/clients", label: "Clients" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const experiencePillars: ExperiencePillar[] = [
  {
    href: "/theme-tour-packages#heritage-polo-forest",
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
    href: "/theme-tour-packages#family-getaways",
    label: "Family Getaways",
    pillar: "family",
    dotColor: "var(--color-pillar-family)",
  },
  {
    href: "/theme-tour-packages#adventure-trekking",
    label: "Adventure & Trekking",
    pillar: "adventure",
    dotColor: "var(--color-pillar-adventure)",
  },
];

export const featuredExperiences: FeaturedExperience[] = [
  {
    slug: "polo-forest-heritage-walk",
    title: "Polo Forest Heritage Walk",
    caption: "Weekend · Gujarat",
  },
  {
    slug: "corporate-polo-forest",
    title: "Corporate Polo Forest Offsite",
    caption: "20–200 guests · Custom proposal",
  },
  {
    slug: "school-field-study",
    title: "School Field Study",
    caption: "Curriculum-aligned · Safety briefed",
  },
];

export type MegaMenuProgram = {
  id: string;
  title: string;
  caption: string;
  href: string;
  imageKey: "corporateCampfire" | "categoryEducation" | "familyCampfire";
};

/** Right column of Experiences mega menu — group-oriented programs. */
export const megaMenuPrograms: MegaMenuProgram[] = [
  {
    id: "corporate",
    title: "Corporate Tour",
    caption: "20–200 guests · Custom proposal",
    href: "/corporate#rfp",
    imageKey: "corporateCampfire",
  },
  {
    id: "school",
    title: "School Tour",
    caption: "Curriculum-aligned · Safety briefed",
    href: "/schools-colleges#rfp",
    imageKey: "categoryEducation",
  },
  {
    id: "group",
    title: "Group Tour",
    caption: "10–50 guests · Weekend departures",
    href: "/theme-tour-packages#group-tours",
    imageKey: "familyCampfire",
  },
];

export const discoverLinks: NavLink[] = [
  { href: "/india", label: "India Tours" },
  { href: "/international", label: "International" },
  { href: "/theme-tour-packages", label: "Theme Packages" },
  { href: "/polo-forest", label: "Polo Forest" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Stories & Insights" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

export const searchSuggestions = [
  "Corporate retreat",
  "School trip",
  "Polo Forest",
  "International tour",
];

export const searchPlaceholderExperiences = [
  { title: "Corporate Polo Forest Offsite", href: "/corporate" },
  { title: "School Educational Tour", href: "/schools-colleges" },
  { title: "India Tour Packages", href: "/india" },
];
