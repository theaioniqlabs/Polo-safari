import { type ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main" | "header" | "footer";
  narrow?: boolean;
  /** Skip inner max-width wrapper — use for grid layouts (e.g. header). */
  flat?: boolean;
};

export function Container({
  children,
  className = "",
  as: Tag = "div",
  narrow = false,
  flat = false,
}: ContainerProps) {
  const maxWidthClass = narrow
    ? "max-w-[var(--layout-content)]"
    : "max-w-[var(--layout-max)]";
  const paddingClass = flat ? "" : "px-6";
  const outerClass = `mx-auto w-full ${paddingClass} ${maxWidthClass} ${className}`.trim();

  if (flat) {
    return <Tag className={outerClass}>{children}</Tag>;
  }

  return (
    <Tag className={outerClass}>
      <div className="mx-auto max-w-[var(--layout-content)]">{children}</div>
    </Tag>
  );
}
