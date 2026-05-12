/**
 * Package data for Packages & Pricing page.
 * Exterior cleaning services – GlenView Exterior Cleaning.
 */

export type PackageSection = {
  heading: string;
  items: string[];
};

export type PackageData = {
  id: string;
  category: "roof-cleaning" | "exterior-clean" | "maintenance";
  title: string;
  tagline?: string;
  subtitle?: string;
  /** Short summary for the packages overview page */
  summary: string;
  sections: PackageSection[];
  /** Optional extras section */
  extras?: PackageSection;
  /** Optional pricing options within the card */
  priceOptions?: string[];
  /** Main price display text */
  priceDisplay: string;
  /** Prerequisite note for maintenance packages */
  note?: string;
  /** Optional image URL (typically under `/portfolio/`). */
  imageUrl?: string;
};

const PRICE_DISCLAIMER =
  "Price/Time can vary based on property size and condition.";

export const PRICE_DISCLAIMER_TEXT = PRICE_DISCLAIMER;

export const packagesData: PackageData[] = [
  {
    id: "roof-steam-full",
    category: "roof-cleaning",
    title: "ROOF STEAM CLEANING",
    tagline: "Full roof clean",
    summary:
      "Safe roof steam cleaning with moss and algae removal from roof tiles. Professional treatment for lasting results and improved curb appeal. Suitable for all roof types across Central Scotland.",
    sections: [
      {
        heading: "SERVICE INCLUDES",
        items: [
          "Safe steam cleaning – no high pressure that can damage tiles",
          "Moss and algae removal from roof",
          "Algae removal from roof tiles",
          "Eco-friendly treatments where appropriate",
          "Full inspection and clear gutters if needed",
        ],
      },
    ],
    priceDisplay: "From £POA",
    imageUrl: "/portfolio/roofclean1.jpg",
  },
  {
    id: "render-softwash",
    category: "roof-cleaning",
    title: "RENDER SOFTWASHING",
    tagline: "Render & wall cleaning",
    summary:
      "Expert render softwashing and stain removal from render surfaces without damage. Restore the look of your property's exterior walls.",
    sections: [
      {
        heading: "SERVICE INCLUDES",
        items: [
          "Softwash treatment for render and painted walls",
          "Stain removal from render (algae, dirt, pollution)",
          "Safe, low-pressure method to protect surfaces",
          "Suitable for residential and commercial properties",
        ],
      },
    ],
    priceDisplay: "From £POA",
    imageUrl: "/portfolio/render-softwash.jpg",
  },
  {
    id: "full-exterior",
    category: "exterior-clean",
    title: "FULL EXTERIOR CLEAN",
    tagline: "Complete property exterior",
    summary:
      "Complete exterior cleaning package: driveway, gutters, PVC fascias and soffits, and windows. One comprehensive service to restore your property's appearance.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Driveway pressure washing and cleaning",
          "Gutter clearing and cleaning",
          "PVC fascias, soffits and gutters cleaned",
          "Window cleaning (external)",
        ],
      },
    ],
    extras: {
      heading: "EXTRAS",
      items: [
        "Roof steam cleaning (add-on)",
        "Render softwashing (add-on)",
      ],
    },
    priceDisplay: "From £POA",
    imageUrl: "/portfolio/beforeafter.jpg",
  },
  {
    id: "driveway-gutter",
    category: "exterior-clean",
    title: "DRIVEWAY & GUTTER CLEAN",
    tagline: "Driveway + gutters",
    summary:
      "Driveway cleaning and gutter clearing in one visit. Ideal for regular maintenance or a one-off refresh of your property's entrance and drainage.",
    sections: [
      {
        heading: "SERVICE INCLUDES",
        items: [
          "Driveway pressure washing",
          "Gutter clearing and inspection",
          "Removal of leaves, debris and blockages",
          "Optional PVC cleaning (quote on request)",
        ],
      },
    ],
    priceDisplay: "From £POA",
    imageUrl: "/portfolio/gutter-cleaning.webp",
  },
  {
    id: "maintenance-plan",
    category: "maintenance",
    title: "MAINTENANCE PLAN",
    tagline: "Regular exterior care",
    summary:
      "Regular exterior cleaning to keep your property looking its best. Schedule gutter cleans, window cleans and driveway refreshes at intervals that suit you.",
    sections: [
      {
        heading: "MAINTENANCE",
        items: [
          "Scheduled gutter cleaning",
          "Window cleaning (external)",
          "Driveway refresh as required",
          "Flexible frequency – monthly, quarterly or as needed",
        ],
      },
    ],
    note: "Ideal after an initial full exterior or roof clean. Contact us to discuss your schedule.",
    priceDisplay: "From £POA",
    imageUrl: "/portfolio/window-cleaning.jpg",
  },
];

export const categoryLabels: Record<PackageData["category"], string> = {
  "roof-cleaning": "Roof & Render Cleaning",
  "exterior-clean": "Exterior Cleaning",
  maintenance: "Maintenance",
};

export function getPackageByCategoryAndId(
  category: PackageData["category"],
  id: string
): PackageData | undefined {
  return packagesData.find((p) => p.category === category && p.id === id);
}
