/**
 * Extra hash targets for nav-config mega menu links.
 * Primary section ids come from content YAML; aliases avoid renaming published anchors.
 */
export const SECTION_ANCHOR_ALIASES: Record<string, Record<string, string[]>> = {
  corporate: {
    "corporate-retreats": ["offsites", "conferences"],
    activities: ["leadership"],
  },
  "schools-colleges": {
    "industrial-visits": ["industrial"],
    "educational-tours": ["picnics"],
  },
  "theme-tour-packages": {
    "family-getaways": ["group-tours"],
  },
};

export function getSectionAnchorAliases(pageId: string, sectionId: string): string[] {
  return SECTION_ANCHOR_ALIASES[pageId]?.[sectionId] ?? [];
}
