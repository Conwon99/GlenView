/**
 * Production site and business identifiers — single source for Layout, forms, sitemap.
 * Must match the canonical hostname from hosting (https, and apex vs www) plus vercel.json / static/_redirects.
 */
export const SITE_URL = "https://glenviewexteriorcleaning.co.uk";
export const BUSINESS_NAME = "GlenView Exterior Cleaning";
export const PHONE_E164 = "+447862139959";
export const PHONE_DISPLAY = "07862 139959";

/** Registered / correspondence address (no door number). */
export const REGISTERED_STREET = "Kirkintilloch Road";
export const REGISTERED_LOCALITY = "Bishopbriggs";
export const REGISTERED_REGION = "East Dunbartonshire";
export const REGISTERED_POSTCODE = "G64";
export const REGISTERED_GEO = {
  latitude: "55.9040",
  longitude: "-4.2280",
} as const;

/** Short phrase for hero / CTAs (visible copy). */
export const AREA_TAGLINE =
  "North Glasgow, East Dunbartonshire, Lanarkshire, Falkirk & Stirling";

/** Meta descriptions / SEO-friendly coverage phrase. */
export const META_AREA_PHRASE =
  "North Glasgow, East Dunbartonshire, North Lanarkshire, Falkirk and Stirling";

/** Formspree form URL (quote / contact submissions). */
export const FORMSPREE_ENDPOINT = "https://formspree.io/f/xlgzazqg";

/** Formspree form URL for the render cleaning ad landing page. */
export const AD_FORMSPREE_ENDPOINT = "https://formspree.io/f/xeaqzjok";

/** Google Business Profile link (reviews / profile). */
export const GOOGLE_REVIEWS_URL = "https://share.google/WHM6HVMqy1SvwnkkX";

/** Facebook profile (footer + schema sameAs). */
export const FACEBOOK_PROFILE_URL =
  "https://www.facebook.com/profile.php?id=61589064227371&rdid=wMuBW9u13Y8FS2eK";
