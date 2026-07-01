import type {
  AwardEntity,
  ClientEntity,
  CompanyEntity,
  DestinationEntity,
  FaqItemEntity,
  FounderEntity,
  Page,
  PartnerEntity,
  Section,
  TestimonialEntity,
  TimelineEventEntity,
} from "@/content/types";
import { getEntity, getEntitiesByType, resolveEntityRefs } from "@/content/load";
import { PageHero } from "./PageHero";
import { SectionBlock } from "./PageHero";
import { CardGrid } from "./CardGrid";
import {
  StatStrip,
  buildCompanyStats,
  buildCorporateTrustStats,
  buildReviewStats,
} from "./StatStrip";
import { LogoGrid, clientLogos, partnerLogos } from "./LogoGrid";
import { FaqAccordion } from "./FaqAccordion";
import { ContentFaqAccordion } from "./ContentFaqAccordion";
import { parseFaqFromContentNotes } from "@/content/parse-faq";
import { CtaBand, RfpForm } from "./CtaBand";
import { TeamBuildingGrid } from "./corporate/TeamBuildingGrid";
import { ActivityShowcase } from "./corporate/ActivityShowcase";
import { CaseStudyGrid } from "./corporate/CaseStudyCard";
import { CorporatePackageGrid } from "./corporate/CorporatePackageCard";
import { AppreciationLettersGrid } from "./corporate/AppreciationLettersGrid";
import { CorporateRfpForm } from "./corporate/CorporateRfpForm";
import { CorporateLogoLoop } from "./corporate/CorporateLogoLoop";
import { CorporateDestinationCarousel } from "./corporate/CorporateDestinationCarousel";
import {
  GalleryGrid,
  TimelineStepper,
  SplitEditorial,
  galleryImagesFromKeywords,
} from "./TimelineStepper";
import { stockImageUrl } from "@/content/stock-images";
import type { EntityRecord } from "@/content/types";

function isHeroSection(section: Section, index: number): boolean {
  return index === 0 && section.id === "hero";
}

function isRfpSection(section: Section): boolean {
  return (
    section.id.includes("rfp") ||
    section.id.includes("enquiry") ||
    section.id.includes("contact-form")
  );
}

function isTrustSection(section: Section): boolean {
  return section.id === "trust" || section.id.includes("review-stats");
}

function isGallerySection(section: Section): boolean {
  return section.id.includes("gallery");
}

function isFaqSection(section: Section): boolean {
  return section.id.startsWith("faq-");
}

function isTimelineSection(section: Section): boolean {
  return (
    section.id.includes("timeline") ||
    section.id.includes("journey") ||
    section.id.includes("milestones") ||
    section.id.includes("history")
  );
}

function isCtaBandSection(section: Section): boolean {
  return (
    section.id.includes("newsletter") ||
    section.id.includes("cta") ||
    section.id === "footer-content" ||
    section.id.includes("get-started")
  );
}

function isLogoSection(section: Section): boolean {
  return (
    section.id === "clients" ||
    section.id === "corporate-clients" ||
    section.id.includes("client-logos") ||
    section.id.includes("partners") ||
    section.id.includes("associations")
  );
}

function sectionVariant(index: number): "default" | "muted" {
  return index % 2 === 0 ? "default" : "muted";
}

function imagePosition(index: number): "left" | "right" | "top" | "none" {
  if (index % 3 === 0) return "right";
  if (index % 3 === 1) return "left";
  return "top";
}

type PageSectionsProps = {
  page: Page;
  rfpType?: "corporate" | "education" | "general";
};

export function PageSections({ page, rfpType }: PageSectionsProps) {
  return (
    <>
      {page.sections.map((section, index) => (
        <SectionRenderer
          key={section.id}
          section={section}
          pageId={page.id}
          index={index}
          rfpType={rfpType}
        />
      ))}
    </>
  );
}

function SectionRenderer({
  section,
  pageId,
  index,
  rfpType,
}: {
  section: Section;
  pageId: string;
  index: number;
  rfpType?: "corporate" | "education" | "general";
}) {
  const entities = resolveEntityRefs(section.entityRefs);

  if (isHeroSection(section, index)) {
    if (pageId === "corporate") {
      const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
      return (
        <PageHero
          section={section}
          trustStats={buildCorporateTrustStats(company?.foundedYear)}
          secondaryCta={{ label: "View packages", href: "#packages" }}
        />
      );
    }
    return <PageHero section={section} />;
  }

  if (isRfpSection(section)) {
    if (pageId === "corporate" || rfpType === "corporate") {
      return <CorporateRfpForm section={section} />;
    }
    const type =
      rfpType ??
      (pageId === "schools-colleges" ? "education" : "general");
    return <RfpForm section={section} type={type} />;
  }

  if (section.id === "team-building") {
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="top">
        <TeamBuildingGrid />
      </SectionBlock>
    );
  }

  if (section.id === "activities") {
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        <ActivityShowcase />
      </SectionBlock>
    );
  }

  if (section.id === "case-studies") {
    const clients = entities.filter((e) => e.entityType === "client") as ClientEntity[];
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        <CaseStudyGrid clients={clients} />
      </SectionBlock>
    );
  }

  if (section.id === "packages") {
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        <CorporatePackageGrid />
      </SectionBlock>
    );
  }

  if (pageId === "corporate" && section.id === "corporate-retreats") {
    const destinations = entities.filter(
      (e) => e.entityType === "destination",
    ) as DestinationEntity[];
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        <CorporateDestinationCarousel destinations={destinations} />
      </SectionBlock>
    );
  }

  if (section.id === "appreciation-letters") {
    const letters = entities.filter(
      (e) => e.entityType === "testimonial",
    ) as TestimonialEntity[];
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        <AppreciationLettersGrid letters={letters} />
      </SectionBlock>
    );
  }

  if (isTrustSection(section)) {
    const testimonialEntities = entities.filter(
      (e) => e.entityType === "testimonial",
    ) as TestimonialEntity[];
    const stats = buildReviewStats(testimonialEntities);
    return (
      <SectionBlock pageId={pageId} section={section} variant="muted" imagePosition="none">
        <StatStrip stats={stats} />
      </SectionBlock>
    );
  }

  if (isFaqSection(section)) {
    const parsedFaq = parseFaqFromContentNotes(section.contentNotes);
    if (parsedFaq.length > 0) {
      return (
        <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
          <ContentFaqAccordion items={parsedFaq} />
        </SectionBlock>
      );
    }
    const faqItems =
      entities.length > 0
        ? (entities as FaqItemEntity[])
        : getEntitiesByType<FaqItemEntity>("faq-item");
    if (faqItems.length === 0) return null;
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        <FaqAccordion items={faqItems} />
      </SectionBlock>
    );
  }

  if (isTimelineSection(section)) {
    const events =
      entities.length > 0
        ? (entities as TimelineEventEntity[])
        : (getEntity("company", "polo-safari") as CompanyEntity | undefined)
            ?.milestones ?? [];
    return (
      <SectionBlock pageId={pageId} section={section} variant="muted" imagePosition="none">
        {events.length > 0 && <TimelineStepper events={events} />}
      </SectionBlock>
    );
  }

  if (isGallerySection(section)) {
    const images = galleryImagesFromKeywords(
      section.stockImage?.keywords ?? ["travel gallery"],
      8,
    );
    return (
      <SectionBlock pageId={pageId} section={section} variant="dark" imagePosition="none">
        <GalleryGrid images={images} />
      </SectionBlock>
    );
  }

  if (isLogoSection(section)) {
    const clients =
      entities.filter((e) => e.entityType === "client").length > 0
        ? (entities.filter((e) => e.entityType === "client") as ClientEntity[])
        : section.id === "corporate-clients"
          ? getEntitiesByType<ClientEntity>("client").filter((c) => c.segment === "corporate")
          : [];
    const partners = entities.filter((e) => e.entityType === "partner") as PartnerEntity[];

    if (section.id === "corporate-clients") {
      const variant = sectionVariant(index);
      return (
        <SectionBlock pageId={pageId} section={section} variant={variant} imagePosition="none">
          {clients.length > 0 && <CorporateLogoLoop clients={clients} variant={variant} />}
        </SectionBlock>
      );
    }

    const logos =
      clients.length > 0
        ? clientLogos(clients)
        : partners.length > 0
          ? partnerLogos(partners)
          : [];
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        {logos.length > 0 && <LogoGrid items={logos} columns={4} />}
      </SectionBlock>
    );
  }

  if (isCtaBandSection(section)) {
    return <CtaBand section={section} variant="primary" />;
  }

  if (section.id === "founder-message" || section.id === "founder") {
    const founder = getEntity("founder", "chirag-shah") as FounderEntity | undefined;
    const img = founder?.photo
      ? stockImageUrl(founder.photo)
      : section.stockImage
        ? stockImageUrl(section.stockImage)
        : "";
    return (
      <section id="founder-message" className="scroll-mt-24 bg-surface py-[var(--space-12)]">
        <div className="mx-auto max-w-[var(--layout-content)] px-[var(--space-6)]">
          <SplitEditorial
            heading={section.heading ?? founder?.name}
            subheading={section.subheading ?? founder?.title}
            description={section.description ?? founder?.bio ?? founder?.quote}
            imageSrc={img}
            imageAlt={founder?.name ?? "Founder"}
          />
        </div>
      </section>
    );
  }

  if (section.id === "benefits" || section.id.includes("benefits")) {
    const benefits = [
      {
        title: "Stronger collaboration",
        body: "Unfamiliar outdoor settings break silos and build trust through shared challenge.",
      },
      {
        title: "Leadership in nature",
        body: "Strategy conversations happen on trails and around campfires—not only in meeting rooms.",
      },
      {
        title: "Measurable engagement",
        body: "Teams return with stories and connection that lift morale back at work.",
      },
      {
        title: "Logistics handled",
        body: "Transport, meals, facilitation, and resort coordination—one accountable team from Ahmedabad.",
      },
    ];
    return (
      <SectionBlock pageId={pageId} section={section} variant="muted" imagePosition="top">
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-[var(--radius-md)] border border-border bg-surface p-5"
            >
              <p className="font-semibold">{b.title}</p>
              <p className="mt-1 text-sm text-text-muted">{b.body}</p>
            </div>
          ))}
        </div>
      </SectionBlock>
    );
  }

  if (section.id.includes("credentials") || section.id === "why-choose-polo-safari") {
    const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
    const awards = entities.filter((e) => e.entityType === "award") as AwardEntity[];
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="right">
        {company?.credentials && (
          <div className="mt-6 flex flex-wrap gap-2">
            {company.credentials.map((c) => (
              <span
                key={c}
                className="rounded-full border border-border bg-surface-muted px-3 py-1 text-xs font-medium"
              >
                {c}
              </span>
            ))}
          </div>
        )}
        {awards.length > 0 && <CardGrid entities={awards as EntityRecord[]} columns={2} />}
      </SectionBlock>
    );
  }

  if (section.id.includes("testimonial")) {
    const testimonials = entities.filter(
      (e) => e.entityType === "testimonial" && !e.id.includes("stat"),
    );
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="none">
        {testimonials.length > 0 && (
          <CardGrid entities={testimonials as EntityRecord[]} columns={2} />
        )}
      </SectionBlock>
    );
  }

  if (section.id === "office-address" || section.id === "contact-details") {
    const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
    const contact = company?.contact;
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="right">
        {contact && (
          <address className="mt-6 not-italic text-text-muted">
            <p>
              {contact.address}
              <br />
              {contact.city}, {contact.state} {contact.postalCode}
            </p>
            {contact.phones?.map((phone) => (
              <p key={phone} className="mt-2">
                <a href={`tel:${phone.replace(/\s/g, "")}`} className="text-primary hover:underline">
                  {phone}
                </a>
              </p>
            ))}
            {contact.email && (
              <p className="mt-2">
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
              </p>
            )}
          </address>
        )}
      </SectionBlock>
    );
  }

  if (section.id === "google-map") {
    const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
    const address = company?.contact
      ? `${company.contact.address}, ${company.contact.city}`
      : "Ganesh Glory 11, Jagatpur, Ahmedabad";
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    return (
      <SectionBlock pageId={pageId} section={section} variant="muted" imagePosition="none">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex h-64 items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-border bg-surface-muted text-sm text-text-muted hover:border-primary"
        >
          Open in Google Maps — {address}
        </a>
      </SectionBlock>
    );
  }

  if (section.id === "whatsapp") {
    return (
      <SectionBlock pageId={pageId} section={section} variant={sectionVariant(index)} imagePosition="left">
        <a
          href="https://wa.me/919408510911"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-[var(--radius-button)] bg-[#25D366] px-6 py-3 text-sm font-semibold text-white hover:opacity-90"
        >
          Chat on WhatsApp
        </a>
      </SectionBlock>
    );
  }

  if (section.id === "vision-mission-values" || section.id === "values") {
    const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
    return (
      <SectionBlock pageId={pageId} section={section} variant="muted" imagePosition="none">
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {company?.vision && (
            <div>
              <h3 className="text-xl font-semibold">Vision</h3>
              <p className="mt-2 text-text-muted whitespace-pre-line">{company.vision.trim()}</p>
            </div>
          )}
          {company?.mission && (
            <div>
              <h3 className="text-xl font-semibold">Mission</h3>
              <p className="mt-2 text-text-muted whitespace-pre-line">{company.mission.trim()}</p>
            </div>
          )}
        </div>
      </SectionBlock>
    );
  }

  if (section.id === "stats" || section.id.includes("company-stats")) {
    const company = getEntity("company", "polo-safari") as CompanyEntity | undefined;
    return (
      <SectionBlock pageId={pageId} section={section} variant="muted" imagePosition="none">
        <StatStrip stats={buildCompanyStats(company?.foundedYear)} />
      </SectionBlock>
    );
  }

  if (entities.length > 0) {
    const hasDestinations = entities.some((e) => e.entityType === "destination");
    const hasThemes = entities.some((e) => e.entityType === "theme");
    const hasServices = entities.some((e) => e.entityType === "service");
    const hasAwards = entities.some((e) => e.entityType === "award");
    const hasGallery = entities.some((e) => e.entityType === "gallery-category");
    const hasBlog = entities.some((e) => e.entityType === "blog-category");

    if (hasDestinations || hasThemes || hasServices || hasAwards || hasGallery || hasBlog) {
      const cols = hasDestinations ? 3 : hasAwards ? 2 : 3;
      return (
        <SectionBlock
          pageId={pageId}
          section={section}
          variant={sectionVariant(index)}
          imagePosition={entities.length > 2 ? "none" : imagePosition(index)}
        >
          <CardGrid entities={entities as EntityRecord[]} columns={cols as 2 | 3 | 4} />
        </SectionBlock>
      );
    }
  }

  if (pageId === "privacy" || pageId === "terms") {
    return (
      <SectionBlock pageId={pageId} section={section} variant="default" imagePosition="none">
        {section.contentNotes && (
          <p className="mt-4 text-sm text-text-subtle italic">{section.contentNotes}</p>
        )}
      </SectionBlock>
    );
  }

  if (pageId === "not-found") {
    return (
      <SectionBlock pageId={pageId} section={section} variant="default" imagePosition="top">
        {section.cta && (
          <a
            href={section.cta.href}
            className="mt-6 inline-flex rounded-[var(--radius-button)] bg-primary px-6 py-3 text-sm font-semibold text-text-inverse"
          >
            {section.cta.label}
          </a>
        )}
      </SectionBlock>
    );
  }

  return (
    <SectionBlock
      pageId={pageId}
      section={section}
      variant={sectionVariant(index)}
      imagePosition={section.stockImage ? imagePosition(index) : "none"}
    />
  );
}
