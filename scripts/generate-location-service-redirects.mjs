/**
 * Regenerates the 301 redirects in vercel.json for the removed location pages
 * (Nov 2026 spam-update clean-up; see seo/page-pruning-2026-11.md).
 *
 *   /[town]/[service]/  -> /[service]/
 *   /[town]/            -> /
 *   /locations/         -> /
 *
 * Town and service slugs are read from src/data/locations.ts and src/data/services.ts.
 * Each rule matches with or without a trailing slash.
 *
 * Usage: node scripts/generate-location-service-redirects.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => fs.readFileSync(path.join(root, p), "utf8");

// Only `slug: "..."` entries inside the data arrays (skips the `slug: string` type field).
const slugsIn = (src) => [...src.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const towns = slugsIn(read("src/data/locations.ts")).join("|");
const svcs = slugsIn(read("src/data/services.ts")).join("|");

const rules = [
  {
    source: `/:removedTown(${towns})/:removedService(${svcs}){/}?`,
    destination: "/:removedService/",
    permanent: true,
  },
  { source: `/:removedTown(${towns}){/}?`, destination: "/", permanent: true },
  { source: "/locations{/}?", destination: "/", permanent: true },
];

// Rules this script owns are recognised by these markers and replaced on each run.
const owned = (r) =>
  r.source.includes(":removedTown(") ||
  r.source.includes(":removedLocationService(") ||
  r.source === "/locations{/}?";

const vercelPath = path.join(root, "vercel.json");
const vercel = JSON.parse(fs.readFileSync(vercelPath, "utf8"));
vercel.redirects = [...(vercel.redirects ?? []).filter((r) => !owned(r)), ...rules];
fs.writeFileSync(vercelPath, JSON.stringify(vercel, null, 2) + "\n");
console.log(`Wrote ${rules.length} location redirect rules.`);
