/**
 * Unique intro copy for each location + service page.
 * Variants per service so pages don’t repeat the same line; placeholders filled with location + neighborhoods.
 */

import type { Location } from "./locations";
import type { Service } from "./services";
import { hashKey } from "../utils/contentVariants";

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
    {
      heading: "{location} roof steam cleaning and moss treatment",
      paragraphs: [
        "Between {location}, {n1} and {n3}, roofs pick up moss and algae at pretty similar rates—same weather, same tile stock in a lot of cases.",
        "We steam clean rather than jet wash, so tiles and slates aren’t put at risk. Get a free quote and we’ll talk you through timing.",
      ],
    },
    {
      heading: "Keeping roofs clear in {location}",
      paragraphs: [
        "A lot of {location} customers get in touch once moss starts showing on ridge lines or granules turn up in the gutters below.",
        "We treat as well as clean, so regrowth is slower—useful if you're near {n2} or anywhere else that stays damp for long stretches.",
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
    {
      heading: "Render and roughcast softwashing near {location}",
      paragraphs: [
        "Roughcast and pebbledash round {location}, {n1} and {n3} all respond well to softwashing—dwell time just varies with the coating.",
        "It's a gentler alternative to jet washing that won't crack render or blow out pointing. Free quote whenever you're ready.",
      ],
    },
    {
      heading: "{location} render, refreshed without damage",
      paragraphs: [
        "Green staining on render is common right across {location} and toward {n2}—it's the damp climate more than anything else.",
        "We softwash rather than pressure wash, so the finish comes back clean without risking the surface underneath.",
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
    {
      heading: "{location} driveway and patio pressure washing",
      paragraphs: [
        "Whether you're central in {location} or out toward {n3}, driveways see the same mix of moss, algae and general grime over a Scottish winter.",
        "We match pressure and method to the surface—block paving, concrete or tarmac—so nothing gets damaged in the process.",
      ],
    },
    {
      heading: "Restoring driveways around {location}",
      paragraphs: [
        "Customers near {location} and {n1} usually book us once a driveway's gone from grey to green, or joints start looking slippery.",
        "One visit brings it back—get in touch for a free quote and a date that suits.",
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
    {
      heading: "Keeping gutters flowing in {location}",
      paragraphs: [
        "Leaf fall and general debris block gutters right across {location}, {n2} and {n3}—usually worse near mature trees.",
        "We clear by hand where needed and flag anything that looks like it needs a repair, not just a clean.",
      ],
    },
    {
      heading: "{location} gutter cleaning and inspection",
      paragraphs: [
        "A blocked gutter in {location} or nearby {n1} causes the same problem everywhere—overflow running straight down the wall.",
        "We clear it, check the brackets and joints while we're up there, and let you know if anything else needs attention.",
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
    {
      heading: "White PVC restoration in {location}",
      paragraphs: [
        "Grey, green-streaked PVC is a common sight round {location} and toward {n3}—usually algae rather than dirt.",
        "We bring the white back without harsh chemicals or high pressure that could damage the seals.",
      ],
    },
    {
      heading: "{location} fascias, soffits and gutters",
      paragraphs: [
        "Since we're often already at gutter height near {location} and {n1}, PVC cleaning is usually booked alongside a gutter clear.",
        "Ask for a combined quote and we'll sort both fascias and gutters in the one visit.",
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
    {
      heading: "{location} window cleaning, inside and out",
      paragraphs: [
        "Customers between {location}, {n2} and {n3} book us for both one-off cleans and regular rounds—whichever suits.",
        "We quote for outside-only or inside-and-out, so let us know what you're after when you get in touch.",
      ],
    },
    {
      heading: "Streak-free windows in {location}",
      paragraphs: [
        "We cover {location} and the streets toward {n1} on a regular round, so slotting in a new customer is usually straightforward.",
        "Residential or commercial, the standard's the same—clear glass and no smears. Get a free quote to get started.",
      ],
    },
  ],
  "moss-removal": [
    {
      heading: "Moss and algae removal in {location}",
      paragraphs: [
        "Moss and algae build up fast on roofs, patios and driveways round {location}, {n1} and {n2}—the damp climate doesn't give surfaces much chance to dry out.",
        "We remove it with low-pressure methods suited to slate, concrete and clay, then treat the surface to slow regrowth. Free quote whenever you're ready.",
      ],
    },
    {
      heading: "{location} moss removal, done without damage",
      paragraphs: [
        "If you're seeing green or grey clumps on a roof near {location} or toward {n3}, it's almost always moss rather than just dirt.",
        "We clear it by hand and low-pressure treatment—no aggressive pressure washing that could crack or dislodge tiles.",
      ],
    },
    {
      heading: "Clearing moss and algae around {location}",
      paragraphs: [
        "Roofs, patios and driveways near {location} and {n2} all pick up moss and algae in similar amounts—it's more about shade and damp than any one surface.",
        "We treat as well as clear, so the job lasts longer than a one-off scrape. Get in touch for a free inspection and quote.",
      ],
    },
    {
      heading: "{location} roof and patio moss treatment",
      paragraphs: [
        "Customers between {location}, {n1} and {n3} usually call once moss starts making patios slippery or roof valleys start shedding granules into gutters.",
        "We clear it safely and apply a treatment afterwards, so regrowth is slower next time round.",
      ],
    },
    {
      heading: "Moss removal near {location}",
      paragraphs: [
        "We cover {location} and the surrounding area, including {n1} and {n2}, for moss and algae removal on roofs, patios and driveways.",
        "Damage-free methods as standard—get in touch for a free quote and we'll tell you how urgent it looks.",
      ],
    },
  ],
  "patio-cleaning": [
    {
      heading: "Patio cleaning in {location}",
      paragraphs: [
        "Patios and monoblock round {location}, {n1} and {n2} get slippery fast once algae and moss take hold—especially in shaded corners.",
        "We pressure wash slabs, monoblock and decking with the right method for each surface, including joints and edges. Free quote whenever suits.",
      ],
    },
    {
      heading: "{location} patio and monoblock cleaning",
      paragraphs: [
        "Whether you're central in {location} or out toward {n3}, patios tend to green over at a similar rate given the local weather.",
        "We clean the full area, not just the visible slabs, so jointing sand and pointing aren't stripped out in the process.",
      ],
    },
    {
      heading: "Safer patios in {location}",
      paragraphs: [
        "Algae on patios near {location} and {n1} isn't just unsightly—it's a genuine slip hazard, especially after rain.",
        "A proper clean sorts both the look and the safety issue. Get in touch for a free quote.",
      ],
    },
    {
      heading: "{location} outdoor space cleaning",
      paragraphs: [
        "We clean slabs, monoblock, decking and natural stone patios round {location}, {n2} and the surrounding streets.",
        "Ready for the next barbecue or get-together, not just presentable—get in touch for a free quote.",
      ],
    },
    {
      heading: "Patio pressure washing near {location}",
      paragraphs: [
        "Customers between {location}, {n1} and {n3} usually book us once a patio's gone from grey to green underfoot.",
        "We adjust pressure and method to the surface so nothing gets damaged—just a clean, safer outdoor space.",
      ],
    },
  ],
};

/** Simple numeric hash from string for picking a variant. */
function hash(s: string): number {
  return hashKey(s);
}

/**
 * Returns unique intro content for a location + service page.
 * Uses location name and up to 3 neighborhoods; picks a variant so different pages get different copy.
 * Pass a `salt` to intentionally pick a different variant than the default call for the
 * same location+service (e.g. a card blurb vs. the full content-section paragraph).
 */
export function getLocationServiceIntro(
  location: Location,
  service: Service,
  salt = ""
): LocationServiceIntro {
  const variants = introVariants[service.slug];
  const n = (variants?.length ?? 1);
  const index = n > 0 ? hash(location.slug + service.slug + salt) % n : 0;
  const template = variants?.[index] ?? {
    heading: `${service.title} in {location}`,
    paragraphs: [
      `We offer ${service.title.toLowerCase()} in {location} and the surrounding areas, including {n1} and {n2}. Get in touch for a free quote.`,
    ],
  };

  const n1 = location.neighborhoods?.[0] ?? "the surrounding area";
  const n2 = location.neighborhoods?.[1] ?? "nearby";
  const n3 = location.neighborhoods?.[2] ?? n1;

  const replace = (s: string) =>
    s
      .replace(/\{location\}/g, location.name)
      .replace(/\{n1\}/g, n1)
      .replace(/\{n2\}/g, n2)
      .replace(/\{n3\}/g, n3);

  return {
    heading: replace(template.heading),
    paragraphs: template.paragraphs.map(replace),
  };
}
