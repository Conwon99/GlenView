import type { APIRoute } from "astro";
import { locationSlugs } from "../data/locations";
import { serviceSlugs } from "../data/services";
import { SITE_URL } from "../constants/site";

const siteUrl = SITE_URL;

const staticPages: string[] = [
  "",
  "about",
  "contact",
  "gallery",
  "services",
  "roof-steam-cleaning",
  "render-softwashing",
  "driveway-cleaning",
  "gutter-cleaning",
  "pvc-white-cleaning",
  "window-cleaning",
];

function buildLocationPaths(): string[] {
  const paths: string[] = ["locations"];
  for (const loc of locationSlugs) {
    paths.push(loc);
    for (const svc of serviceSlugs) {
      paths.push(`${loc}/${svc}`);
    }
  }
  return paths;
}

const locationPaths = buildLocationPaths();
const allPaths = [...staticPages, ...locationPaths];

function getPriority(path: string): string {
  if (path === "") return "1.0";
  const main = ["about", "services", "contact", "gallery"];
  if (main.includes(path)) return "0.9";
  if (path === "locations" || locationSlugs.includes(path)) return "0.85";
  if (locationPaths.includes(path) && path.includes("/")) return "0.8"; // location-service
  if (
    [
      "roof-steam-cleaning",
      "render-softwashing",
      "driveway-cleaning",
      "gutter-cleaning",
      "pvc-white-cleaning",
      "window-cleaning",
    ].includes(path)
  )
    return "0.85";
  return "0.7";
}

function getChangefreq(path: string): string {
  if (path === "" || path === "gallery") return "weekly";
  if (locationSlugs.includes(path) || locationPaths.includes(path)) return "weekly";
  return "monthly";
}

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split("T")[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${allPaths
  .map((path) => {
    // Match astro.config trailingSlash: 'always' — canonical URLs have trailing slash
    const loc = path ? `${siteUrl}/${path}/` : siteUrl + "/";
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getChangefreq(path)}</changefreq>
    <priority>${getPriority(path)}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  });
};
