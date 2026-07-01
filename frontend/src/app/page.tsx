import type { Metadata } from "next";
import { SiteShell } from "@/components/layout/SiteShell";
import { Hero } from "@/components/home/Hero";
import { QuickSearch } from "@/components/home/QuickSearch";
import { CategoryScroll } from "@/components/home/CategoryScroll";
import { FeaturedExperiences } from "@/components/home/FeaturedExperiences";
import { TrustStatsBar } from "@/components/home/TrustStatsBar";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { TrustWall } from "@/components/home/TrustWall";
import { EducationJourney } from "@/components/home/EducationJourney";
import { CorporateDark } from "@/components/home/CorporateDark";
import { StorySection } from "@/components/home/StorySection";
import { AdventureSection } from "@/components/home/AdventureSection";
import { HeritageSection } from "@/components/home/HeritageSection";
import { FamilySection } from "@/components/home/FamilySection";
import { DestinationsSection } from "@/components/home/DestinationsSection";
import { PackagesSection } from "@/components/home/PackagesSection";
import { GalleryMasonry } from "@/components/home/GalleryMasonry";
import { BlogMagazine } from "@/components/home/BlogMagazine";
import { JourneyTimeline } from "@/components/home/JourneyTimeline";
import { PartnersMarquee } from "@/components/home/PartnersMarquee";
import { FaqSection } from "@/components/home/FaqSection";
import { EmotionalCtaBand } from "@/components/home/EmotionalCtaBand";
import { getPage } from "@/content/load";
import {
  getFaqPreviewContent,
  getHeroSlides,
  getNewsletterCtaContent,
  getSearchContent,
  getWhyPoloSafariContent,
} from "@/content/home-content";
import { pageMetadata } from "@/content/metadata";

export function generateMetadata(): Metadata {
  return pageMetadata(getPage("home"));
}

export default function HomePage() {
  const heroSlides = getHeroSlides();
  const searchContent = getSearchContent();
  const whyPoloSafari = getWhyPoloSafariContent();
  const newsletterCta = getNewsletterCtaContent();
  const faqPreview = getFaqPreviewContent();

  return (
    <SiteShell transparentHeader>
      <Hero slides={heroSlides} />
      <QuickSearch content={searchContent} />
      <CategoryScroll />
      <FeaturedExperiences />
      <StorySection content={whyPoloSafari} />
      <CorporateDark />
      <EducationJourney />
      <HeritageSection />
      <DestinationsSection />
      <FamilySection />
      <AdventureSection />
      <PackagesSection />
      <TrustWall />
      <TrustStatsBar />
      <TestimonialsSection />
      <PartnersMarquee />
      <GalleryMasonry />
      <BlogMagazine />
      <JourneyTimeline />
      <FaqSection {...faqPreview} />
      <EmotionalCtaBand content={newsletterCta} />
    </SiteShell>
  );
}
