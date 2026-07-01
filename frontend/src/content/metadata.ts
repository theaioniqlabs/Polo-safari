import type { Metadata } from "next";
import type { Page } from "./types";

export function pageMetadata(page: Page, options?: { noindex?: boolean }): Metadata {
  return {
    title: page.seo.title,
    description: page.seo.metaDescription,
    ...(options?.noindex
      ? { robots: { index: false, follow: true } }
      : {}),
  };
}
