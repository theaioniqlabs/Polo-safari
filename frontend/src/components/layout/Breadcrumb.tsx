import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

type BreadcrumbProps = {
  items: BreadcrumbItem[];
};

export function Breadcrumb({ items }: BreadcrumbProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="border-b border-border bg-surface py-4">
      <div className="mx-auto max-w-[var(--layout-content)] px-[var(--space-6)]">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.label} className="flex items-center gap-2">
                {index > 0 && (
                  <span className="text-text-subtle" aria-hidden>
                    ›
                  </span>
                )}
                {isLast || !item.href ? (
                  <span className="font-medium text-text-heading" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-primary hover:underline">
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
