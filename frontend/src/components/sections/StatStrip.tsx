export type StatItem = {
  value: string;
  label: string;
  platform?: string;
};

type StatStripProps = {
  stats: StatItem[];
  variant?: "default" | "bordered";
};

export function StatStrip({ stats, variant = "bordered" }: StatStripProps) {
  return (
    <dl
      className={`grid grid-cols-2 gap-6 md:grid-cols-${Math.min(stats.length, 4)} ${
        variant === "bordered" ? "" : ""
      }`}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="text-center md:text-left">
          {stat.platform && (
            <p className="text-xs font-semibold uppercase tracking-wider text-text-subtle">
              {stat.platform}
            </p>
          )}
          <dt className="type-stat text-3xl text-text-heading md:text-4xl">
            {stat.value}
          </dt>
          <dd className="mt-1 text-sm text-text-muted">{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}

export function buildReviewStats(entities: { id: string; quote?: string }[]): StatItem[] {
  const stats: StatItem[] = [];

  const google = entities.find((e) => e.id === "google-reviews-stat");
  const recommend = entities.find((e) => e.id === "recommend-rate-stat");

  if (google) {
    stats.push({
      platform: "Google Reviews",
      value: "4.7",
      label: "1,304+ reviews",
    });
  }

  if (recommend) {
    stats.push({
      platform: "Guest recommendations (platform TBC)",
      value: "96%",
      label: "253 reviews recommend",
    });
  }

  return stats;
}

export function buildCompanyStats(foundedYear = 2014): StatItem[] {
  const years = new Date().getFullYear() - foundedYear + 1;
  return [
    { value: `${years}+`, label: "Years" },
    { value: "Thousands", label: "Travelers served" },
    { value: "4+", label: "Gujarat Tourism awards" },
    { value: "4.7★", label: "Google Reviews" },
  ];
}

export function buildCorporateTrustStats(foundedYear = 2014): StatItem[] {
  const years = new Date().getFullYear() - foundedYear + 1;
  return [
    { value: "200+", label: "Corporate events delivered" },
    { value: "30+", label: "Verified client logos" },
    { value: `${years}+`, label: "Years serving Gujarat" },
    { value: "48hr", label: "Typical proposal turnaround" },
  ];
}
