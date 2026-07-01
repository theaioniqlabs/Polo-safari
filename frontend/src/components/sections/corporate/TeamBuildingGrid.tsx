const MODULES = [
  {
    id: "obstacle-challenge",
    title: "Obstacle challenge circuit",
    duration: "2–3 hours",
    groupSize: "20–200",
    description:
      "Outdoor obstacles, relay races, and problem-solving stations with facilitator debrief connecting play to workplace dynamics.",
  },
  {
    id: "trust-fall",
    title: "Trust & communication games",
    duration: "1–2 hours",
    groupSize: "15–80",
    description:
      "Blindfold challenges, bridge-building, and paired exercises that surface communication patterns in a safe outdoor setting.",
  },
  {
    id: "treasure-hunt",
    title: "Heritage treasure hunt",
    duration: "2–4 hours",
    groupSize: "20–150",
    description:
      "Polo Forest heritage trails turned into team quests—clues, checkpoints, and collaborative scoring across departments.",
  },
  {
    id: "energiser",
    title: "Energiser & icebreaker suite",
    duration: "45–90 min",
    groupSize: "20–200",
    description:
      "High-energy warm-ups and icebreakers to kick off annual meets, new-team formations, or post-travel arrivals.",
  },
];

export function TeamBuildingGrid() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {MODULES.map((mod) => (
        <article
          key={mod.id}
          className="rounded-[var(--radius-md)] border border-border bg-surface p-5"
        >
          <h3 className="text-lg font-semibold">{mod.title}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              {mod.duration}
            </span>
            <span className="rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-text-muted">
              {mod.groupSize} guests
            </span>
          </div>
          <p className="mt-3 text-sm text-text-muted">{mod.description}</p>
        </article>
      ))}
    </div>
  );
}
