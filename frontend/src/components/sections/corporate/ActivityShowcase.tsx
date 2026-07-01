import { MediaImage } from "@/components/home/MediaImage";
import { stockImageUrlFromKeywords } from "@/content/stock-images";

const ACTIVITIES = [
  {
    id: "leadership",
    heading: "Leadership labs",
    subheading: "L&D & executive programs",
    description:
      "Leadership walks, strategy-in-nature sessions, and facilitated labs for emerging and senior managers—decision-making, communication, and trust-building away from the office floor.",
    keywords: ["leadership workshop outdoor executive", "corporate strategy session nature"],
  },
  {
    id: "engagement",
    heading: "Employee engagement",
    subheading: "Programs people talk about back at work",
    description:
      "Reward trips, festival celebrations, and engagement offsites mixing recreation, recognition, and shared challenge so teams return with stories, not just selfies.",
    keywords: ["employee engagement event outdoor", "company celebration team trip"],
  },
  {
    id: "adventure",
    heading: "Adventure modules",
    subheading: "Trekking & outdoor challenges — safety first",
    description:
      "Guided treks at Polo Forest and Bakor, multi-day Himalayan modules, and adrenaline activities woven between strategy blocks. Gujarat Tourism Best Adventure & Trekking Tour Operator.",
    keywords: ["corporate adventure trek india", "outdoor team hiking gujarat"],
  },
  {
    id: "wellness",
    heading: "Meditation & yoga",
    subheading: "Reset between strategy blocks",
    description:
      "Guided meditation in forest clearings and instructor-led sunrise yoga at campsites—morning flows before trekking and gentle sessions after travel days.",
    keywords: ["corporate yoga outdoor sunrise", "meditation session outdoor nature corporate"],
  },
  {
    id: "csr",
    heading: "CSR & community",
    subheading: "Available on request",
    description:
      "Community engagement and CSR-aligned activities integrated into your program on request—tell us your objectives in the proposal form and we'll scope options with local partners.",
    keywords: ["corporate social responsibility community india", "volunteer team community project"],
  },
];

export function ActivityShowcase() {
  return (
    <div className="mt-8 space-y-12">
      {ACTIVITIES.map((activity, index) => {
        const imageSrc = stockImageUrlFromKeywords(activity.keywords, "full-width");
        const reverse = index % 2 === 1;
        return (
          <div
            key={activity.id}
            className={`grid items-center gap-8 lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}
          >
            <div
              className={`relative aspect-video overflow-hidden rounded-[var(--radius-lg)] ${reverse ? "lg:[direction:ltr]" : ""}`}
            >
              <MediaImage src={imageSrc} alt={activity.heading} sizes="50vw" />
            </div>
            <div className={reverse ? "lg:[direction:ltr]" : ""}>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-text-subtle">
                {activity.subheading}
              </p>
              <h3 className="mt-2 text-2xl font-semibold">{activity.heading}</h3>
              <p className="mt-3 text-text-muted leading-relaxed">{activity.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
