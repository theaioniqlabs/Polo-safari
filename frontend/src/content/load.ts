import fs from "fs";
import path from "path";
import { parse } from "yaml";
import type { EntityFile, EntityRecord, Page } from "./types";

function resolveContentRoot(): string {
  const candidates = [
    path.join(process.cwd(), "content"),
    path.join(process.cwd(), "..", "docs", "content"),
  ];

  for (const candidate of candidates) {
    if (fs.existsSync(path.join(candidate, "pages"))) {
      return candidate;
    }
  }

  throw new Error(
    "Content root not found. Run `pnpm run sync:content` or ensure docs/content exists.",
  );
}

const CONTENT_ROOT = resolveContentRoot();

function readYaml<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf8");
  return parse(raw) as T;
}

const pageCache = new Map<string, Page>();
const entityCache = new Map<string, EntityRecord>();

function loadAllEntities(): EntityRecord[] {
  if (entityCache.size > 0) return Array.from(entityCache.values());

  const entitiesDir = path.join(CONTENT_ROOT, "entities");
  const files = fs.readdirSync(entitiesDir).filter((f) => f.endsWith(".yaml"));

  for (const file of files) {
    const data = readYaml<EntityFile>(path.join(entitiesDir, file));
    for (const item of data.items) {
      entityCache.set(`${item.entityType}:${item.id}`, item);
    }
  }

  return Array.from(entityCache.values());
}

export function getEntity(
  entityType: string,
  entityId: string,
): EntityRecord | undefined {
  loadAllEntities();
  return entityCache.get(`${entityType}:${entityId}`);
}

export function getEntitiesByType<T extends EntityRecord>(
  entityType: T["entityType"],
): T[] {
  loadAllEntities();
  return Array.from(entityCache.values()).filter(
    (e) => e.entityType === entityType,
  ) as T[];
}

export function resolveEntityRefs(refs?: { entityType: string; entityId: string }[]) {
  if (!refs) return [];
  return refs
    .map((ref) => getEntity(ref.entityType, ref.entityId))
    .filter((e): e is EntityRecord => e !== undefined);
}

export function getPage(pageId: string): Page {
  const cached = pageCache.get(pageId);
  if (cached) return cached;

  const filePath = path.join(CONTENT_ROOT, "pages", `${pageId}.yaml`);
  const page = readYaml<Page>(filePath);
  pageCache.set(pageId, page);
  return page;
}

export function getSection(pageId: string, sectionId: string) {
  const page = getPage(pageId);
  return page.sections.find((s) => s.id === sectionId);
}

export function getAllPageIds(): string[] {
  const pagesDir = path.join(CONTENT_ROOT, "pages");
  return fs
    .readdirSync(pagesDir)
    .filter((f) => f.endsWith(".yaml"))
    .map((f) => f.replace(/\.yaml$/, ""));
}
