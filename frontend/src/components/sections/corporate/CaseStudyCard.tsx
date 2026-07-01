import Image from "next/image";
import type { ClientEntity } from "@/content/types";
import { stockImageUrlFromKeywords } from "@/content/stock-images";

type CaseStudyCardProps = {
  client: ClientEntity;
  featured?: boolean;
  objective?: string;
  metrics?: { value: string; label: string }[];
  quote?: string;
};

const DEFAULT_OBJECTIVES: Record<string, string> = {
  "client-bdhm": "Cross-team collaboration and annual offsite engagement for engineering consultants.",
  "client-digicorp": "Team cohesion and outdoor problem-solving after hybrid work return.",
  "client-fovera": "Leadership lab for senior managers—strategy and trust-building in nature.",
  "client-inextrix": "Department-wide team building with facilitated debriefs.",
  "client-pragnakalp": "Employee engagement offsite with adventure and wellness modules.",
  "client-unison-globus": "MICE-style summit with team activities and gala dinner.",
};

const DEFAULT_QUOTES: Record<string, string> = {
  "client-bdhm": "Polo Safari handled logistics end to end—from transport to facilitators who understood our team.",
  "client-digicorp": "Our people left Polo Forest more connected than any hotel ballroom could deliver.",
  "client-fovera": "The leadership sessions in nature gave our managers space for conversations that don't happen in meeting rooms.",
};

export function CaseStudyCard({
  client,
  featured = false,
  objective,
  metrics,
  quote,
}: CaseStudyCardProps) {
  const name = client.name ?? "Corporate client";
  const industry = client.industry ?? "Corporate";
  const resolvedObjective = objective ?? DEFAULT_OBJECTIVES[client.id] ?? "Custom corporate offsite program.";
  const resolvedQuote = quote ?? DEFAULT_QUOTES[client.id];
  const imageSrc =
    client.logoSrc ??
    stockImageUrlFromKeywords([name, "corporate team"], featured ? "full-width" : "card");

  if (featured) {
    return (
      <article className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
        <div className="grid lg:grid-cols-12">
          <div className="relative lg:col-span-5 aspect-video lg:aspect-auto lg:min-h-[320px]">
            {client.certificateSrc ? (
              <Image
                src={client.certificateSrc}
                alt={`${name} appreciation letter`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            ) : (
              <Image src={imageSrc} alt={name} fill className="object-cover" sizes="40vw" />
            )}
          </div>
          <div className="flex flex-col justify-center p-6 lg:col-span-7 lg:p-8">
            <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {industry}
            </span>
            <h3 className="mt-3 text-2xl font-semibold">{name}</h3>
            <p className="mt-2 text-text-muted">{resolvedObjective}</p>
            {metrics && metrics.length > 0 && (
              <dl className="mt-4 grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label}>
                    <dt className="type-stat text-xl">{m.value}</dt>
                    <dd className="text-xs text-text-muted">{m.label}</dd>
                  </div>
                ))}
              </dl>
            )}
            {resolvedQuote && (
              <blockquote className="mt-4 border-l-4 border-primary/30 pl-4 text-sm italic text-text-muted">
                &ldquo;{resolvedQuote}&rdquo;
                <footer className="mt-1 not-italic text-xs text-text-subtle">— {name}</footer>
              </blockquote>
            )}
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="rounded-[var(--radius-md)] border border-border bg-surface p-5">
      <span className="inline-flex rounded-full bg-surface-muted px-2.5 py-0.5 text-xs font-medium text-text-muted">
        {industry}
      </span>
      <h3 className="mt-2 text-lg font-semibold">{name}</h3>
      <p className="mt-2 line-clamp-3 text-sm text-text-muted">{resolvedObjective}</p>
      {client.certificateSrc && (
        <p className="mt-3 text-xs font-medium text-primary">Appreciation letter on file</p>
      )}
    </article>
  );
}

type CaseStudyGridProps = {
  clients: ClientEntity[];
};

export function CaseStudyGrid({ clients }: CaseStudyGridProps) {
  const featured = clients.find((c) => c.featured) ?? clients[0];
  const secondary = clients.filter((c) => c.id !== featured?.id).slice(0, 4);

  if (!featured) return null;

  return (
    <div className="mt-8 space-y-6">
      <CaseStudyCard
        client={featured}
        featured
        metrics={[
          { value: "20–200", label: "Guest capacity" },
          { value: "11+", label: "Years partnership" },
          { value: "Verified", label: "Appreciation letter" },
        ]}
      />
      {secondary.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {secondary.map((client) => (
            <CaseStudyCard key={client.id} client={client} />
          ))}
        </div>
      )}
    </div>
  );
}
