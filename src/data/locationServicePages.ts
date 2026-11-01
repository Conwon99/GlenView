/**
 * Location + service pages that are published.
 *
 * Only combinations that have earned clicks in Google Search Console are built.
 * All other /[location]/[service]/ URLs were removed (Nov 2026, spam-update
 * clean-up: thin templated doorway pages) and 301 to the location hub via
 * vercel.json. See seo/page-pruning-2026-11.md.
 *
 * If you add or remove an entry here, regenerate the redirects:
 *   node scripts/generate-location-service-redirects.mjs
 */
export const LOCATION_SERVICE_PAGES: Record<string, string[]> = {
  bishopbriggs: ["window-cleaning", "driveway-cleaning"],
  robroyston: ["window-cleaning"],
  stepps: ["window-cleaning", "gutter-cleaning", "render-softwashing"],
  lenzie: ["patio-cleaning"],
  kirkintilloch: ["window-cleaning"],
  moodiesburn: ["window-cleaning", "patio-cleaning"],
  muirhead: ["driveway-cleaning"],
  gartcosh: ["window-cleaning"],
  twechar: ["gutter-cleaning"],
  kilsyth: ["window-cleaning", "patio-cleaning", "roof-steam-cleaning", "moss-removal"],
  caldercruix: ["window-cleaning"],
  bonnybridge: ["driveway-cleaning"],
  banknock: ["window-cleaning"],
  falkirk: ["roof-steam-cleaning", "render-softwashing"],
  camelon: ["window-cleaning"],
  larbert: ["roof-steam-cleaning"],
  grangemouth: ["gutter-cleaning"],
  stirling: ["driveway-cleaning", "moss-removal"],
  "bridge-of-allan": ["gutter-cleaning"],
  dunblane: ["roof-steam-cleaning", "pvc-white-cleaning"],
};

export function hasLocationServicePage(locationSlug: string, serviceSlug: string): boolean {
  return LOCATION_SERVICE_PAGES[locationSlug]?.includes(serviceSlug) ?? false;
}

export const locationServicePagePaths: { location: string; service: string }[] =
  Object.entries(LOCATION_SERVICE_PAGES).flatMap(([location, svcs]) =>
    svcs.map((service) => ({ location, service })),
  );
