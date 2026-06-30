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

export const experiencePillars: ExperiencePillar[] = [
  {
    href: "/experiences/heritage",
    label: "Heritage & Culture",
    pillar: "heritage",
    dotColor: "var(--color-pillar-heritage)",
  },
  {
    href: "/education",
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
    href: "/experiences/family",
    label: "Family Getaways",
    pillar: "family",
    dotColor: "var(--color-pillar-family)",
  },
  {
    href: "/experiences/adventure",
    label: "Adventure & Trekking",
    pillar: "adventure",
    dotColor: "var(--color-pillar-adventure)",
  },
];

export const featuredExperiences: FeaturedExperience[] = [
  {
    slug: "polo-forest-heritage-walk",
    title: "Polo Forest Heritage Walk",
    caption: "From ₹1,899 · 1 day",
  },
  {
    slug: "night-safari",
    title: "Night Safari",
    caption: "From ₹2,499 · 1 night",
  },
  {
    slug: "family-camping-weekend",
    title: "Family Camping Weekend",
    caption: "From ₹4,999 · 2D/1N",
  },
];

export const discoverLinks: NavLink[] = [
  { href: "/destinations", label: "Destinations" },
  { href: "/polo-forest", label: "Polo Forest" },
  { href: "/gallery", label: "Gallery" },
  { href: "/blog", label: "Stories & Insights" },
  { href: "/about", label: "About" },
];

export const searchSuggestions = [
  "Night safari",
  "Corporate retreat",
  "School trip",
  "Monsoon",
];

export const searchPlaceholderExperiences = [
  { title: "Polo Forest Heritage Walk", href: "/experiences/polo-forest-heritage-walk" },
  { title: "Polo Forest Night Safari", href: "/experiences/night-safari" },
];
