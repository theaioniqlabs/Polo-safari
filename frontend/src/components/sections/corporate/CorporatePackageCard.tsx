import Link from "next/link";

const PACKAGES = [
  {
    id: "essential",
    tier: "Essential",
    title: "Day offsite",
    groupSize: "20–50 guests",
    inclusions: [
      "1 facilitated team-building module",
      "Heritage walk at Polo Forest",
      "Lunch & refreshments",
      "Basic AV in hall",
    ],
    price: "Quote on request",
    popular: false,
  },
  {
    id: "premium",
    tier: "Premium",
    title: "2D/1N retreat",
    groupSize: "30–100 guests",
    inclusions: [
      "2 facilitated modules",
      "Resort stay — twin share",
      "Night safari & campfire",
      "Gala dinner setup",
    ],
    price: "Quote on request",
    popular: true,
  },
  {
    id: "executive",
    tier: "Executive",
    title: "Leadership program",
    groupSize: "15–45 senior leaders",
    inclusions: [
      "Custom leadership lab agenda",
      "Executive dining & private sessions",
      "3D/2N resort program",
      "Photography & debrief report",
    ],
    price: "Quote on request",
    popular: false,
  },
];

export function CorporatePackageGrid() {
  return (
    <div id="packages" className="mt-8 grid gap-6 md:grid-cols-3">
      {PACKAGES.map((pkg) => (
        <article
          key={pkg.id}
          className={`flex flex-col rounded-[var(--radius-lg)] border p-6 ${
            pkg.popular
              ? "border-primary bg-surface shadow-md ring-1 ring-primary/20"
              : "border-border bg-surface"
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                pkg.popular ? "bg-primary text-text-inverse" : "bg-surface-muted text-text-muted"
              }`}
            >
              {pkg.tier}
              {pkg.popular && " · Popular"}
            </span>
          </div>
          <h3 className="mt-4 text-xl font-semibold">{pkg.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-text-muted">{pkg.groupSize}</p>
          <ul className="mt-4 flex-1 space-y-2 text-sm leading-relaxed text-text-muted">
            {pkg.inclusions.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary" aria-hidden>
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-base font-semibold text-text-heading">{pkg.price}</p>
          <Link
            href={`#rfp?tier=${pkg.id}`}
            className="mt-4 inline-flex justify-center rounded-[var(--radius-button)] bg-primary px-4 py-2.5 text-sm font-semibold text-text-inverse hover:bg-primary-hover"
          >
            Request Proposal
          </Link>
        </article>
      ))}
    </div>
  );
}
