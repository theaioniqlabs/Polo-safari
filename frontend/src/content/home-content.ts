import { getEntity, getPage, getSection, resolveEntityRefs } from "@/content/load";
import { parseFaqFromContentNotes } from "@/content/parse-faq";
import { stockImageUrl, stockImageUrlFromKeywords } from "@/content/stock-images";
import type {
  AwardEntity,
  ClientEntity,
  CompanyEntity,
  DestinationEntity,
  GalleryCategoryEntity,
  Section,
  TestimonialEntity,
  ThemeEntity,
  TimelineEventEntity,
} from "@/content/types";

export const HOME_SECTION_IDS = [
  "hero",
  "search",
  "why-polo-safari",
  "specializations",
  "featured-tours",
  "corporate",
  "educational",
  "international",
  "domestic",
  "adventure",
  "awards",
  "trust",
  "clients",
  "testimonials",
  "gallery-preview",
  "stories",
  "newsletter-cta",
  "footer-content",
] as const;

export type HomeSectionId = (typeof HOME_SECTION_IDS)[number];

export type HomeSectionContent = {
  id: HomeSectionId;
  heading: string;
  subheading?: string;
  description?: string;
  cta?: { label: string; href: string };
  image?: string;
};

function trimText(value?: string): string | undefined {
  return value?.trim();
}

export function getHomeContent() {
  const page = getPage("home");
  return {
    page,
    section: (id: string) => getSection("home", id),
  };
}

export function homeSectionImage(sectionId: string): string | undefined {
  const section = getSection("home", sectionId);
  if (!section?.stockImage) return undefined;
  return stockImageUrl(section.stockImage);
}

export function homeSectionContent(sectionId: HomeSectionId): HomeSectionContent {
  const section = getSection("home", sectionId);
  return {
    id: sectionId,
    heading: section?.heading ?? "",
    subheading: section?.subheading,
    description: trimText(section?.description),
    cta: section?.cta,
    image: section?.stockImage ? stockImageUrl(section.stockImage) : undefined,
  };
}

function sectionEntities<T>(sectionId: HomeSectionId): T[] {
  const section = getSection("home", sectionId);
  return resolveEntityRefs(section?.entityRefs) as T[];
}

function destinationImage(d: DestinationEntity): string {
  return d.image
    ? stockImageUrl(d.image)
    : stockImageUrlFromKeywords([d.name, d.stateOrCountry ?? ""], "card");
}

function destinationHref(d: DestinationEntity): string {
  return d.region === "india" ? "/india" : "/international";
}

/** Split "Title—subtitle" or "Title - subtitle" hero headings for carousel display. */
function splitHeroHeading(heading: string): { title: string; titleItalic: string } {
  const emDash = heading.split("—");
  if (emDash.length > 1) {
    return { title: emDash[0].trim(), titleItalic: emDash.slice(1).join("—").trim() };
  }
  const hyphen = heading.split(" - ");
  if (hyphen.length > 1) {
    return { title: hyphen[0].trim(), titleItalic: hyphen.slice(1).join(" - ").trim() };
  }
  const words = heading.split(" ");
  if (words.length > 4) {
    return {
      title: words.slice(0, Math.ceil(words.length / 2)).join(" "),
      titleItalic: words.slice(Math.ceil(words.length / 2)).join(" "),
    };
  }
  return { title: heading, titleItalic: "" };
}

export type HeroSlideContent = {
  id: string;
  overline: string;
  title: string;
  titleItalic: string;
  body: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
  caption: string;
  image: string;
};

export function getHeroSlides(): HeroSlideContent[] {
  const configs: { sectionId: HomeSectionId; id: string; overline: string; caption: string }[] = [
    { sectionId: "hero", id: "heritage", overline: "POLO FOREST HERITAGE", caption: "Eleven years · Award-backed programs since 2014" },
    { sectionId: "corporate", id: "corporate", overline: "CORPORATE RETREATS", caption: "Custom pricing · Tailored proposal" },
    { sectionId: "educational", id: "education", overline: "EDUCATIONAL TOURS", caption: "Custom proposal — faculty-supported planning" },
  ];

  const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;

  return configs.map(({ sectionId, id, overline, caption }) => {
    const section = getSection("home", sectionId)!;
    const { title, titleItalic } = splitHeroHeading(section.heading ?? "");
    const image = section.stockImage
      ? stockImageUrl(section.stockImage)
      : stockImageUrlFromKeywords(["polo forest"], "hero");

    const secondaryHref =
      sectionId === "hero"
        ? "/about"
        : sectionId === "corporate"
          ? "/corporate"
          : "/schools-colleges";

    const secondaryLabel =
      sectionId === "hero"
        ? "Our story →"
        : sectionId === "corporate"
          ? "View Corporate Programs →"
          : "Learn More →";

    return {
      id,
      overline,
      title,
      titleItalic,
      body: trimText(section.description) ?? company?.tagline ?? "",
      primary: {
        label: section.cta?.label ?? "Explore",
        href: section.cta?.href ?? "/",
      },
      secondary: { label: secondaryLabel, href: secondaryHref },
      caption,
      image,
    };
  });
}

export type SearchChip = { label: string; href: string };

export function getSearchContent() {
  const section = homeSectionContent("search");
  const chips: SearchChip[] = [
    { label: "Corporate", href: "/corporate" },
    { label: "Schools", href: "/schools-colleges" },
    { label: "Family", href: "/theme-tour-packages#family-getaways" },
    { label: "Adventure", href: "/theme-tour-packages#adventure-trekking" },
    { label: "Polo Forest", href: "/india" },
  ];
  return { ...section, chips, browseHref: section.cta?.href ?? "/theme-tour-packages" };
}

export function getSpecializationsContent() {
  return homeSectionContent("specializations");
}

export type FeaturedTourCard = {
  id: string;
  title: string;
  summary: string;
  badge: string;
  image: string;
  href: string;
  large?: boolean;
};

export function getFeaturedToursContent() {
  const section = homeSectionContent("featured-tours");
  const destinations = sectionEntities<DestinationEntity>("featured-tours");
  const cards: FeaturedTourCard[] = destinations.map((d, i) => ({
    id: d.id,
    title: d.name,
    summary: trimText(d.summary) ?? "",
    badge: d.stateOrCountry ?? (d.region === "india" ? "India" : "International"),
    image: destinationImage(d),
    href: destinationHref(d),
    large: i === 0,
  }));
  return { ...section, cards };
}

export type TrustStat = {
  value: string;
  label: string;
  platform?: string;
};

export function getTrustStatsContent() {
  const section = homeSectionContent("trust");
  const testimonials = sectionEntities<TestimonialEntity>("trust");
  const google = testimonials.find((t) => t.id === "google-reviews-stat");
  const recommend = testimonials.find((t) => t.id === "recommend-rate-stat");
  const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
  const years = company?.foundedYear
    ? new Date().getFullYear() - company.foundedYear + 1
    : 11;

  const stats: TrustStat[] = [
    google && {
      value: "4.7",
      label: "1,304+ reviews",
      platform: "Google Reviews",
    },
    recommend && {
      value: "96%",
      label: "253 reviews recommend",
      platform: "Guest recommendations (platform TBC)",
    },
    {
      value: `${years}+`,
      label: `Years since ${company?.foundedYear ?? 2014}`,
      platform: undefined,
    },
    {
      value: "4+",
      label: "Gujarat Tourism awards",
      platform: undefined,
    },
  ].filter((s): s is TrustStat => Boolean(s));

  return { ...section, stats };
}

export type TestimonialCard = {
  id: string;
  quote: string;
  name: string;
  role: string;
  badge: string;
};

export function getTestimonialsContent() {
  const section = homeSectionContent("testimonials");
  const entities = sectionEntities<TestimonialEntity>("testimonials");
  const cards: TestimonialCard[] = entities.map((t) => ({
    id: t.id,
    quote: trimText(t.quote) ?? "",
    name: t.author ?? "Guest",
    role: [t.role, t.organization].filter(Boolean).join(" · ") || "Polo Safari guest",
    badge:
      t.segment === "corporate"
        ? "Corporate"
        : t.segment === "education"
          ? "Educational Tour"
          : t.segment === "family"
            ? "Family"
            : "Guest",
  }));
  const featured = cards[0];
  const supporting = cards.slice(1);
  return { ...section, featured, supporting };
}

export function getAwardsContent() {
  const section = homeSectionContent("awards");
  const awards = sectionEntities<AwardEntity>("awards");
  return {
    ...section,
    awards: awards.map((a) => ({
      id: a.id,
      title: a.title,
      issuer: a.issuer,
      scope: a.scope,
      label: [a.issuer, a.scope].filter(Boolean).join(" · ") || a.title,
    })),
  };
}

export function getCorporateContent() {
  const section = homeSectionContent("corporate");
  const destinations = sectionEntities<DestinationEntity>("corporate").slice(0, 3);
  const cards =
    destinations.length > 0
      ? destinations.map((d) => ({
          title: d.name,
          image: destinationImage(d),
        }))
      : [
          { title: "Team building", image: section.image ?? stockImageUrlFromKeywords(["corporate team building"], "card") },
          { title: "Leadership labs", image: stockImageUrlFromKeywords(["leadership offsite"], "card") },
          { title: "MICE events", image: stockImageUrlFromKeywords(["corporate retreat"], "card") },
        ];
  return { ...section, cards };
}

export function getEducationalContent() {
  const section = homeSectionContent("educational");
  const keywords = getSection("home", "educational")?.stockImage?.keywords ?? [
    "school field trip",
    "outdoor learning",
    "college educational tour",
    "ecology camp",
  ];
  const steps = [
    { title: "Curriculum-aligned programs", body: "Std 5–12 · Gujarat board compatible" },
    { title: "Hands-on field studies", body: "Biodiversity · Heritage · Archaeology" },
    { title: "Expert naturalists", body: "30–500 students per program" },
    { title: "Outcomes that last", body: "Field journals · Certificates" },
  ].map((step, i) => ({
    ...step,
    image: stockImageUrlFromKeywords([keywords[i] ?? keywords[0]], "full-width"),
    align: (i % 2 === 0 ? "left" : "right") as "left" | "right",
  }));
  return { ...section, steps };
}

export function getInternationalContent() {
  const section = homeSectionContent("international");
  const destinations = sectionEntities<DestinationEntity>("international");
  return {
    ...section,
    destinations: destinations.map((d) => ({
      id: d.id,
      name: d.name,
      summary: trimText(d.summary),
      image: destinationImage(d),
      href: "/international",
    })),
  };
}

export function getDomesticContent() {
  const section = homeSectionContent("domestic");
  const destinations = sectionEntities<DestinationEntity>("domestic");
  return {
    ...section,
    destinations: destinations.map((d) => ({
      id: d.id,
      name: d.name,
      image: destinationImage(d),
      href: "/india",
    })),
  };
}

export function getAdventureContent() {
  const section = homeSectionContent("adventure");
  const entities = resolveEntityRefs(getSection("home", "adventure")?.entityRefs);
  const adventures = entities
    .filter((e): e is DestinationEntity | ThemeEntity => e.entityType === "destination" || e.entityType === "theme")
    .map((e) => {
      if (e.entityType === "destination") {
        const d = e as DestinationEntity;
        return {
          title: d.name,
          slug: d.id,
          image: destinationImage(d),
          href: "/india",
        };
      }
      const t = e as ThemeEntity;
      return {
        title: t.name,
        slug: t.id,
        image: stockImageUrlFromKeywords(["adventure trek"], "card"),
        href: `/theme-tour-packages#${t.anchorSlug ?? t.id}`,
      };
    });

  const fallback = [
    { title: "Polo Forest trails", slug: "polo-forest", image: stockImageUrlFromKeywords(["polo forest trek"], "card"), href: "/india" },
    { title: "Bakor day programs", slug: "bakor", image: stockImageUrlFromKeywords(["adventure gujarat"], "card"), href: "/india" },
    { title: "Manali camps", slug: "manali", image: stockImageUrlFromKeywords(["manali trek"], "card"), href: "/india" },
  ];

  return {
    ...section,
    adventures: adventures.length > 0 ? adventures : fallback,
    heroImage: section.image ?? stockImageUrlFromKeywords(["mountain trek group india"], "full-width"),
  };
}

export function getWhyPoloSafariContent() {
  const section = homeSectionContent("why-polo-safari");
  const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
  const values = company?.values ?? [];
  const chapters = values.map((v, i) => {
    const [label, body] = v.split("—").map((s) => s.trim());
    const keywords = getSection("home", "why-polo-safari")?.stockImage?.keywords ?? ["heritage storytelling"];
    return {
      id: `value-${i}`,
      label: label || `Pillar ${i + 1}`,
      title: label || section.heading,
      body: body || trimText(section.description) || "",
      image: stockImageUrlFromKeywords([keywords[i] ?? keywords[0]], "full-width"),
    };
  });

  if (chapters.length === 0) {
    chapters.push({
      id: "why",
      label: "Why us",
      title: section.heading,
      body: section.description ?? "",
      image: section.image ?? stockImageUrlFromKeywords(["professional tour guide"], "full-width"),
    });
  }

  return { ...section, chapters };
}

export function getClientsContent() {
  const section = homeSectionContent("clients");
  const clients = sectionEntities<ClientEntity>("clients");
  return {
    ...section,
    clients: clients.map((c) => ({
      id: c.id,
      name: c.name ?? c.logoPlaceholder,
      label: c.name ?? c.logoPlaceholder,
    })),
  };
}

export function getGalleryPreviewContent() {
  const section = homeSectionContent("gallery-preview");
  const categories = sectionEntities<GalleryCategoryEntity>("gallery-preview");
  const keywords = getSection("home", "gallery-preview")?.stockImage?.keywords ?? ["travel photography"];
  const galleryThemes = [
    ["corporate retreat", "team"],
    ["school field trip", "education"],
    ["adventure trek", "mountain"],
    ["polo forest", "heritage"],
    ["campfire", "evening"],
    ["drone aerial", "landscape"],
    ["family travel", "outdoor"],
    ["international tour", "group"],
  ];
  const images = galleryThemes.map(([a, b], i) =>
    stockImageUrlFromKeywords(categories[i] ? [categories[i].name, ...keywords] : [a, b, ...keywords], "gallery"),
  );
  return { ...section, categories, images };
}

export function getStoriesContent() {
  const section = homeSectionContent("stories");
  const keywords = getSection("home", "stories")?.stockImage?.keywords ?? ["travel blog"];
  const featured = {
    slug: "polo-forest-insights",
    title: section.heading,
    date: "Latest",
    image: section.image ?? stockImageUrlFromKeywords(keywords, "card"),
  };
  const supporting = [
    { slug: "corporate-offsite-playbook", title: "Corporate offsite playbooks", date: "Insights" },
    { slug: "field-study-ideas", title: "Educational field-study ideas", date: "Insights" },
    { slug: "polo-forest-research", title: "Polo Forest heritage notes", date: "Insights" },
  ];
  return { ...section, featured, supporting };
}

export function getNewsletterCtaContent() {
  const section = homeSectionContent("newsletter-cta");
  return {
    ...section,
    backgroundImage: section.image ?? stockImageUrlFromKeywords(["email newsletter travel"], "background"),
    secondaryCtas: [
      { label: "Corporate RFP", href: "/corporate#rfp" },
      { label: "Educational RFP", href: "/schools-colleges#rfp" },
      { label: "WhatsApp", href: "https://wa.me/919408510911" },
    ],
  };
}

export function getFooterContent() {
  const section = homeSectionContent("footer-content");
  const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
  return {
    ...section,
    company,
    contactLine:
      section.description ??
      [
        company?.contact?.address,
        `${company?.contact?.city ?? "Ahmedabad"} ${company?.contact?.postalCode ?? ""}`.trim(),
        company?.contact?.phones?.[0],
        company?.contact?.email,
      ]
        .filter(Boolean)
        .join(" · "),
    directionsHref: section.cta?.href ?? "/contact",
  };
}

export function getHomeSectionById(id: string): Section | undefined {
  return getSection("home", id);
}

function themeSectionImage(sectionId: string): string | undefined {
  const section = getSection("theme-tour-packages", sectionId);
  if (!section?.stockImage) return undefined;
  return stockImageUrl(section.stockImage);
}

function themeSectionDuration(sectionId: string): string {
  const notes = getSection("theme-tour-packages", sectionId)?.contentNotes ?? "";
  if (notes.includes("1-day only")) return "1 day";
  if (sectionId === "heritage-polo-forest") return "1-day · Weekend";
  if (sectionId === "family-getaways") return "Weekend · Multi-day";
  return "Custom duration";
}

export function getFamilyContent() {
  const section = getSection("theme-tour-packages", "family-getaways");
  const theme = getEntity("theme", "family-getaways") as ThemeEntity | undefined;
  const image =
    themeSectionImage("family-getaways") ??
    stockImageUrlFromKeywords(["family campfire", "nature holiday"], "card");

  return {
    heading: section?.heading ?? theme?.name ?? "Family Getaways",
    subheading: section?.subheading ?? "Family travel",
    description: trimText(section?.description) ?? trimText(theme?.summary) ?? "",
    cta: section?.cta ?? {
      label: "View family packages",
      href: "/theme-tour-packages#family-getaways",
    },
    image,
  };
}

export type ThemePackageCard = {
  id: string;
  title: string;
  duration: string;
  summary: string;
  image: string;
  href: string;
};

export function getPackagesContent() {
  const themeHero = getSection("theme-tour-packages", "hero");
  const packageSectionIds = ["one-day-picnics", "family-getaways", "heritage-polo-forest"] as const;

  const cards: ThemePackageCard[] = packageSectionIds.map((id) => {
    const section = getSection("theme-tour-packages", id);
    const themeRef = section?.entityRefs?.find((r) => r.entityType === "theme");
    const theme = themeRef
      ? (getEntity("theme", themeRef.entityId) as ThemeEntity | undefined)
      : undefined;
    const anchor = theme?.anchorSlug ?? id;

    return {
      id,
      title: section?.heading ?? theme?.name ?? id,
      duration: themeSectionDuration(id),
      summary: trimText(section?.subheading) ?? trimText(theme?.summary) ?? "",
      image:
        themeSectionImage(id) ??
        stockImageUrlFromKeywords(section?.stockImage?.keywords ?? [id], "card"),
      href: `/theme-tour-packages#${anchor}`,
    };
  });

  return {
    heading: themeHero?.heading ?? "Theme tour packages",
    subheading: themeHero?.subheading ?? "Curated programs",
    description: trimText(themeHero?.description),
    cta: themeHero?.cta ?? { label: "Compare themes", href: "/theme-tour-packages" },
    cards,
  };
}

export type TimelineMilestone = {
  id: string;
  year: number;
  label: string;
  detail: string;
};

export function getJourneyTimelineContent() {
  const section = getSection("awards", "awards-timeline");
  const events = resolveEntityRefs(section?.entityRefs).filter(
    (e): e is TimelineEventEntity => e.entityType === "timeline-event",
  );

  const previewIds = [
    "timeline-2014-founded",
    "timeline-2018-corporate-education",
    "timeline-2020-international-outbound",
    "timeline-2025-gt-season7",
    "timeline-2025-eleven-years",
  ];
  const preview = previewIds
    .map((id) => events.find((e) => e.id === id))
    .filter((e): e is TimelineEventEntity => Boolean(e));

  const milestones: TimelineMilestone[] = (preview.length > 0 ? preview : events.slice(0, 5)).map(
    (e) => ({
      id: e.id,
      year: e.year,
      label: e.title,
      detail: trimText(e.description) ?? "",
    }),
  );

  return {
    heading: section?.heading ?? "Eleven years of milestones",
    subheading: section?.subheading ?? "Our journey",
    description: trimText(section?.description),
    milestones,
    awardsHref: "/awards",
    aboutHref: "/about#how-we-started",
  };
}

export type FaqPreviewItem = {
  question: string;
  answer: string;
  href?: string;
};

export function getFaqPreviewContent() {
  const hero = getSection("faq", "hero");
  const previewSectionIds = [
    "faq-families",
    "faq-corporate",
    "faq-booking-payment",
    "faq-adventure",
  ] as const;

  const faqs: FaqPreviewItem[] = previewSectionIds.flatMap((id) => {
    const section = getSection("faq", id);
    const parsed = parseFaqFromContentNotes(section?.contentNotes);
    if (parsed.length === 0) return [];
    const item = parsed[0];
    const href = item.answer.includes("/legal/cancellation") ? "/legal/cancellation" : undefined;
    return [{ question: item.question, answer: item.answer, href }];
  });

  return {
    heading: hero?.heading ?? "Frequently asked questions",
    subheading: hero?.subheading ?? "FAQ",
    faqs,
    viewAllHref: "/faq" as const,
  };
}

export function getAnnouncementContent() {
  const section = homeSectionContent("newsletter-cta");
  return {
    message: section.subheading ?? "Trip ideas, seasonal offers, and Polo Forest updates",
    linkLabel: section.cta?.label ?? "Contact Us",
    href: section.cta?.href ?? "/contact",
  };
}
