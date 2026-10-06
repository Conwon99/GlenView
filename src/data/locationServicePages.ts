/**
 * Location + service pages (/[location]/[service]/) that are still published.
 *
 * Generating every location × service combination produced 300+ near-identical
 * pages, which risks Google's doorway-page policy. Search Console data
 * (May–Oct 2026) showed only the combinations below earning any clicks, so
 * only these are built and listed in the sitemap. Every other combination is
 * 301-redirected in vercel.json to the town page, which covers all services.
 *
 * To add a page back, add the service slug under its location here and remove
 * it from that location's redirect rule in vercel.json.
 */
export const locationServicePages: Record<string, string[]> = {
  bishopbriggs: ["window-cleaning", "driveway-cleaning"],
  robroyston: ["window-cleaning"],
  stepps: ["window-cleaning", "gutter-cleaning", "render-softwashing"],
  kirkintilloch: ["window-cleaning"],
  moodiesburn: ["window-cleaning", "patio-cleaning"],
  muirhead: ["driveway-cleaning"],
  gartcosh: ["window-cleaning"],
  kilsyth: ["window-cleaning", "roof-steam-cleaning", "moss-removal"],
  caldercruix: ["window-cleaning"],
  bonnybridge: ["driveway-cleaning"],
  banknock: ["window-cleaning"],
  falkirk: ["roof-steam-cleaning"],
  larbert: ["roof-steam-cleaning"],
  grangemouth: ["gutter-cleaning"],
  stirling: ["moss-removal"],
  "bridge-of-allan": ["gutter-cleaning"],
  dunblane: ["roof-steam-cleaning", "pvc-white-cleaning"],
};

export function hasLocationServicePage(
  locationSlug: string,
  serviceSlug: string,
): boolean {
  return locationServicePages[locationSlug]?.includes(serviceSlug) ?? false;
}

/** "location/service" paths for getStaticPaths and the sitemap */
export const locationServicePaths: { location: string; service: string }[] =
  Object.entries(locationServicePages).flatMap(([location, serviceSlugs]) =>
    serviceSlugs.map((service) => ({ location, service })),
  );
