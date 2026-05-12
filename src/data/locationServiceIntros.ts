/**
 * Unique intro copy for each location + service page.
 * Variants per service so pages don’t repeat the same line; placeholders filled with location + neighborhoods.
 */

import type { Location } from "./locations";
import type { Service } from "./services";

export type LocationServiceIntro = {
  heading: string;
  paragraphs: string[];
};

/** Intro variants per service slug. Use {location}, {n1}, {n2} for placeholders. */
const introVariants: Record<
  string,
  { heading: string; paragraphs: string[] }[]
> = {
  "roof-steam-cleaning": [
    {
      heading: "Roof steam cleaning in {location}",
      paragraphs: [
        "We’ve done plenty of roof cleans in and around {location}—moss and algae build up fast here with the weather. Whether you’re in the town itself or out towards {n1} or {n2}, we bring the same steam cleaning and moss treatment we use across Central Scotland.",
        "No high pressure, so your tiles stay in good nick. Get in touch for a free quote and we’ll sort a date that suits you.",
      ],
    },
    {
      heading: "{location} roof cleaning",
      paragraphs: [
        "Folks in {location} often ask about roof cleaning—especially after a wet spell. We cover {n1}, {n2} and the surrounding areas, so you’re not left waiting.",
        "We use steam and the right treatments to clear moss and algae without damaging your roof. Drop us a line for a quote.",
      ],
    },
    {
      heading: "Moss and algae removal in {location}",
      paragraphs: [
        "If your roof’s looking green or black round {location}, we can sort it. We’re out this way regularly for jobs in {n1}, {n2} and nearby.",
        "Steam cleaning gets the growth off without wrecking the tiles. Give us a shout and we’ll come have a look.",
      ],
    },
  ],
  "render-softwashing": [
    {
      heading: "Render cleaning in {location}",
      paragraphs: [
        "Rendered walls in {location} take a battering from rain and algae. We softwash them—no pressure washers that can blow the render—so you get a clean finish that lasts.",
        "We’re in {n1} and {n2} often. Get a free quote and we’ll fit you in.",
      ],
    },
    {
      heading: "Softwashing render in and around {location}",
      paragraphs: [
        "Green or dirty render round {location}? We use low-pressure softwash so the surface isn’t damaged. Works on painted and unpainted render.",
        "Covering {n1}, {n2} and the area. Tell us about your property and we’ll give you a price.",
      ],
    },
    {
      heading: "{location} render cleaning",
      paragraphs: [
        "We’ve cleaned a lot of render in the {location} area—including {n1} and {n2}. Algae and dirt come off without stripping or damaging the surface.",
        "If your walls are looking tired, we can give them a proper clean. Just get in touch.",
      ],
    },
  ],
  "driveway-cleaning": [
    {
      heading: "Driveway cleaning in {location}",
      paragraphs: [
        "Block paving and concrete driveways in {location} get grimy and slippery. We pressure wash them properly—moss, dirt and stains—so they look sharp again and are safer underfoot.",
        "We cover {n1}, {n2} and nearby. Free quote, no hassle.",
      ],
    },
    {
      heading: "{location} driveways—cleaned and restored",
      paragraphs: [
        "We’re out in {location} and the surrounds a lot for driveway jobs. Whether it’s block paving, concrete or tarmac, we use the right pressure and method so we don’t damage anything.",
        "Folks in {n1} and {n2} have used us for years. Drop us a line for a quote.",
      ],
    },
    {
      heading: "Pressure washing driveways in {location}",
      paragraphs: [
        "If your driveway round {location} is green or stained, we can sort it. We bring our kit to you and get it cleaned up in a day.",
        "Serving {n1}, {n2} and the area. Get in touch for a free quote.",
      ],
    },
  ],
  "gutter-cleaning": [
    {
      heading: "Gutter cleaning in {location}",
      paragraphs: [
        "Blocked gutters in {location} cause overflow and damp. We clear them by hand and with the right tools—leaves, debris, the lot—and we’ll point out any damage so you know what’s what.",
        "We’re in {n1} and {n2} regularly. Book a slot and we’ll get you sorted.",
      ],
    },
    {
      heading: "Clear gutters in and around {location}",
      paragraphs: [
        "We do a lot of gutter clears round {location}. If yours are full of leaves or sludge, we get them flowing again and check nothing’s broken.",
        "Covering {n1}, {n2} and the surrounding areas. Free quote when you’re ready.",
      ],
    },
    {
      heading: "{location} gutter clearing",
      paragraphs: [
        "Gutters that don’t drain properly can wreck your walls and foundations. In {location}, {n1} and {n2} we clear them out and leave them working as they should.",
        "We work safely at height and don’t leave a mess. Give us a shout for a quote.",
      ],
    },
  ],
  "pvc-white-cleaning": [
    {
      heading: "PVC cleaning in {location}",
      paragraphs: [
        "Green fascias and soffits are common round {location}. We clean them with the right products—no harsh pressure—so the white comes back without damaging the PVC or seals.",
        "We’re in {n1} and {n2} often. Get in touch for a free quote.",
      ],
    },
    {
      heading: "Fascias and soffits in {location}",
      paragraphs: [
        "We’ve cleaned a lot of white PVC in the {location} area. Algae and dirt come off and the house looks smarter without risking the fittings.",
        "Covering {n1}, {n2} and nearby. Tell us what you’ve got and we’ll give you a price.",
      ],
    },
    {
      heading: "{location} fascia and soffit cleaning",
      paragraphs: [
        "If your fascias or soffits round {location} have gone green or grey, we can bring them back. Gentle cleaning that works and doesn’t wreck the plastic.",
        "We do {n1}, {n2} and the surrounds. Drop us a line when you’re ready.",
      ],
    },
  ],
  "window-cleaning": [
    {
      heading: "Window cleaning in {location}",
      paragraphs: [
        "We do regular and one-off window cleans in {location}—residential and commercial. Streak-free, and we turn up when we say we will.",
        "Covering {n1}, {n2} and the area. Get a quote and we’ll fit you in.",
      ],
    },
    {
      heading: "{location} window cleaning",
      paragraphs: [
        "Folks in {location} use us for windows inside and out. We’re out this way often, including {n1} and {n2}, so booking is straightforward.",
        "One-off or on a schedule—your choice. Give us a shout for a free quote.",
      ],
    },
    {
      heading: "Window washing in and around {location}",
      paragraphs: [
        "We’ve been cleaning windows in the {location} area for years. Same standard every time: clear glass, no streaks, reliable dates.",
        "Serving {n1}, {n2} and nearby. Contact us for a quote.",
      ],
    },
  ],
};

/** Simple numeric hash from string for picking a variant. */
function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (h << 5) - h + s.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Returns unique intro content for a location + service page.
 * Uses location name and up to 2 neighborhoods; picks a variant so different pages get different copy.
 */
export function getLocationServiceIntro(
  location: Location,
  service: Service
): LocationServiceIntro {
  const variants = introVariants[service.slug];
  const n = (variants?.length ?? 1);
  const index = n > 0 ? hash(location.slug + service.slug) % n : 0;
  const template = variants?.[index] ?? {
    heading: `${service.title} in {location}`,
    paragraphs: [
      `We offer ${service.title.toLowerCase()} in {location} and the surrounding areas, including {n1} and {n2}. Get in touch for a free quote.`,
    ],
  };

  const n1 = location.neighborhoods?.[0] ?? "the surrounding area";
  const n2 = location.neighborhoods?.[1] ?? "nearby";

  const replace = (s: string) =>
    s
      .replace(/\{location\}/g, location.name)
      .replace(/\{n1\}/g, n1)
      .replace(/\{n2\}/g, n2);

  return {
    heading: replace(template.heading),
    paragraphs: template.paragraphs.map(replace),
  };
}
