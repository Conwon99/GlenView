/**
 * Regenerates the 301 redirects in vercel.json for removed /[location]/[service]/ pages.
 *
 * Every location x service combination NOT listed in src/data/locationServicePages.ts
 * is redirected to its location hub (/[location]/). One rule per location; matches
 * with or without a trailing slash.
 *
 * Usage: node scripts/generate-location-service-redirects.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

const slugsIn = (src) => [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const locationSlugs = slugsIn(read("src/data/locations.ts"));
const serviceSlugs = slugsIn(read("src/data/services.ts"));

const keptSrc = read("src/data/locationServicePages.ts");
const kept = {};
for (const m of keptSrc.matchAll(/^\s*"?([a-z0-9-]+)"?:\s*\[([^\]]*)\]/gm)) {
  kept[m[1]] = [...m[2].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

const MARKER = "removedLocationService";
const rules = [];
let removedCount = 0;
for (const loc of locationSlugs) {
  const removed = serviceSlugs.filter((s) => !(kept[loc] ?? []).includes(s));
  if (removed.length === 0) continue;
  removedCount += removed.length;
  rules.push({
    source: `/${loc}/:${MARKER}(${removed.join("|")}){/}?`,
    destination: `/${loc}/`,
    permanent: true,
  });
}

const vercelPath = path.join(root, "vercel.json");
const vercel = JSON.parse(fs.readFileSync(vercelPath, "utf8"));
vercel.redirects = [
  ...(vercel.redirects ?? []).filter((r) => !r.source.includes(`:${MARKER}(`)),
  ...rules,
];
fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + "\n");
console.log(`Wrote ${rules.length} redirect rules covering ${removedCount} removed pages.`);
