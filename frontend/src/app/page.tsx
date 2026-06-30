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

export default function HomePage() {
  return (
    <SiteShell transparentHeader>
      <Hero />
      <QuickSearch />
      <CategoryScroll />
      <FeaturedExperiences />
      <TrustStatsBar />
      <TestimonialsSection />
      <TrustWall />
      <EducationJourney />
      <CorporateDark />
      <StorySection />
      <AdventureSection />
      <HeritageSection />
      <FamilySection />
      <DestinationsSection />
      <PackagesSection />
      <GalleryMasonry />
      <BlogMagazine />
      <JourneyTimeline />
      <PartnersMarquee />
      <FaqSection />
      <EmotionalCtaBand />
    </SiteShell>
  );
}
