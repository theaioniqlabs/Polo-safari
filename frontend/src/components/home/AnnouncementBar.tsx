"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const ANNOUNCEMENT_HEIGHT = "40px";

type AnnouncementBarProps = {
  message: string;
  linkLabel: string;
  href: string;
};

export function AnnouncementBar({ message, linkLabel, href }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("polo-announcement-dismissed") === "1") {
      setDismissed(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--announcement-height",
      dismissed ? "0px" : ANNOUNCEMENT_HEIGHT,
    );
    return () => {
      document.documentElement.style.setProperty("--announcement-height", "0px");
    };
  }, [dismissed]);

  if (dismissed) return null;

  return (
    <div
      role="region"
      aria-label="Announcement"
      data-zone="announcement-strip"
      className="border-b border-primary-subtle bg-primary-subtle text-center text-sm text-text"
      style={{ minHeight: ANNOUNCEMENT_HEIGHT }}
    >
      <div className="mx-auto flex h-10 max-w-[var(--layout-max)] items-center justify-center gap-2 px-4 sm:px-6">
        <p className="truncate">
          {message}{" "}
          <Link href={href} className="font-semibold text-primary hover:underline">
            {linkLabel} →
          </Link>
        </p>
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem("polo-announcement-dismissed", "1");
            setDismissed(true);
          }}
          className="ml-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-text-muted hover:bg-black/5 hover:text-text"
          aria-label="Dismiss announcement"
        >
          ×
        </button>
      </div>
    </div>
  );
}
