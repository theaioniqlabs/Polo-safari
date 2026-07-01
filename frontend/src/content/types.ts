export type RoutePath = `/${string}` | "/";

export type Cta = {
  label: string;
  href: RoutePath | `#${string}`;
};

export type InternalLink = {
  label: string;
  href: RoutePath;
  anchor?: `#${string}`;
};

export type ImageOrientation = "landscape" | "portrait" | "square";
export type ImageAspectRatio = "16:9" | "4:5" | "1:1" | "21:9" | "3:2" | "4:3";
export type ImageUsage =
  | "hero"
  | "card"
  | "thumbnail"
  | "full-width"
  | "background"
  | "gallery";

export type StockImage = {
  keywords: string[];
  orientation: ImageOrientation;
  aspectRatio: ImageAspectRatio;
  usage: ImageUsage;
};

export type EntityType =
  | "company"
  | "founder"
  | "award"
  | "destination"
  | "theme"
  | "service"
  | "client"
  | "testimonial"
  | "gallery-category"
  | "blog-category"
  | "contact"
  | "credential"
  | "partner"
  | "timeline-event"
  | "faq-item";

export type EntityRef = {
  entityType: EntityType;
  entityId: string;
};

export type Section = {
  id: string;
  heading?: string;
  subheading?: string;
  description?: string;
  cta?: Cta;
  contentNotes?: string;
  seoNotes?: string;
  stockImage?: StockImage;
  replacementNote?: string;
  entityRefs?: EntityRef[];
};

export type Seo = {
  title: string;
  metaDescription: string;
  slug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  internalLinks: InternalLink[];
  ctaSuggestions: Cta[];
};

export type Page = {
  id: string;
  slug: string;
  route?: RoutePath;
  title: string;
  status?: "draft" | "review" | "published";
  seo: Seo;
  sections: Section[];
};

export type CompanyEntity = {
  id: "polo-safari";
  entityType: "company";
  legalName?: string;
  tagline?: string;
  foundedYear: number;
  headquarters: string;
  story?: string;
  vision?: string;
  mission?: string;
  values?: string[];
  specializations?: string[];
  credentials?: string[];
  contact?: {
    address?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    country?: string;
    phones?: string[];
    email?: string;
    website?: string;
    mapEmbedUrl?: string;
  };
  milestones?: TimelineEventEntity[];
};

export type FounderEntity = {
  id: string;
  entityType: "founder";
  name: string;
  title?: string;
  origin?: string;
  bio?: string;
  quote?: string;
  photo?: StockImage;
};

export type AwardEntity = {
  id: string;
  entityType: "award";
  title: string;
  issuer?: string;
  year?: number;
  season?: string;
  category?: string;
  scope?: string;
  description?: string;
  imagePlaceholder?: string;
};

export type DestinationEntity = {
  id: string;
  entityType: "destination";
  name: string;
  region: "india" | "international";
  stateOrCountry?: string;
  summary?: string;
  themes?: string[];
  pdfConfirmed?: boolean;
  image?: StockImage;
};

export type ThemeEntity = {
  id: string;
  entityType: "theme";
  name: string;
  summary?: string;
  anchorSlug?: string;
  relatedRoutes?: RoutePath[];
};

export type ServiceEntity = {
  id: string;
  entityType: "service";
  name: string;
  summary?: string;
  pdfConfirmed?: boolean;
  availability?: "included" | "on-request" | "add-on";
};

export type ClientEntity = {
  id: string;
  entityType: "client";
  name?: string;
  segment: "corporate" | "education" | "government" | "partner";
  logoPlaceholder: string;
  logoSrc?: string;
  certificateSrc?: string;
  industry?: string;
  featured?: boolean;
  verified?: boolean;
};

export type TestimonialEntity = {
  id: string;
  entityType: "testimonial";
  quote?: string;
  author?: string;
  role?: string;
  organization?: string;
  segment?: "corporate" | "education" | "family" | "general";
  source?: "google" | "survey" | "letter" | "other";
  assetPlaceholder?: string;
  assetSrc?: string;
};

export type GalleryCategoryEntity = {
  id: string;
  entityType: "gallery-category";
  name: string;
  description?: string;
  sortOrder?: number;
};

export type BlogCategoryEntity = {
  id: string;
  entityType: "blog-category";
  name: string;
  description?: string;
  sortOrder?: number;
};

export type TimelineEventEntity = {
  id: string;
  entityType: "timeline-event";
  year: number;
  title: string;
  description?: string;
};

export type FaqItemEntity = {
  id: string;
  entityType: "faq-item";
  question: string;
  answer: string;
  audience:
    | "families"
    | "corporate"
    | "schools-colleges"
    | "adventure"
    | "booking"
    | "safety"
    | "general";
};

export type PartnerEntity = {
  id: string;
  entityType: "partner";
  name?: string;
  logoPlaceholder: string;
  type?: "association" | "industry" | "media" | "other";
};

export type EntityRecord =
  | CompanyEntity
  | FounderEntity
  | AwardEntity
  | DestinationEntity
  | ThemeEntity
  | ServiceEntity
  | ClientEntity
  | TestimonialEntity
  | GalleryCategoryEntity
  | BlogCategoryEntity
  | TimelineEventEntity
  | FaqItemEntity
  | PartnerEntity;

export type EntityFile = {
  entityFile: string;
  version?: string;
  updatedAt?: string;
  items: EntityRecord[];
};
