/**
 * Alternate phrasings of the Why Choose / Process / FAQ copy in serviceDetails.ts,
 * used ONLY on location+service pages so the 38 towns per service don't read
 * identically to each other or to the standalone service page.
 *
 * serviceDetails.ts stays the canonical text, used as-is by standalone service
 * pages (no location). When a location is supplied, these getters pick one of
 * the alternates below instead, deterministically keyed on location+service so
 * the same town always sees the same copy.
 */

import type { Location } from "./locations";
import { serviceDetails } from "./serviceDetails";
import { pickVariant } from "../utils/contentVariants";

function replace(text: string, location: Location): string {
  const n = location.neighborhoods ?? [];
  const map: Record<string, string> = {
    location: location.name,
    n1: n[0] ?? "the surrounding area",
    n2: n[1] ?? "nearby",
    n3: n[2] ?? n[0] ?? "nearby",
  };
  return text.replace(/\{(\w+)\}/g, (_, k) => map[k] ?? `{${k}}`);
}

/** alternates[serviceSlug][fieldIndex] = list of alternate phrasings (2 each) */
type FieldVariants = Record<string, string[][]>;

const whyChoosePointVariants: FieldVariants = {
  "roof-steam-cleaning": [
    [
      "Steam and the right treatment lift moss and algae from roof tiles round {location} without cracking or dislodging them—a real risk with jet washing.",
      "Homes near {n1} and {n2} keep their tiles intact because we steam clean rather than blast with high pressure.",
    ],
    [
      "A cleaned roof near {location} sheds rainwater properly again, which matters more than most homeowners realise until gutters start overflowing.",
      "Moss left to spread round {n1} works into joints and lifts tiles slightly—an early clean around {location} avoids that.",
    ],
    [
      "We fit round your schedule near {location}, and the job itself is quick once we're on site—no need to clear the day.",
      "Bookings near {n2} run efficiently because we know the access and roof types common to the area.",
    ],
  ],
  "render-softwashing": [
    [
      "We've been softwashing render across {location} and the wider area for 15+ years—long enough to know which coatings need longer dwell times.",
      "That experience means fewer surprises on render jobs near {n1}, whatever the age or condition of the coating.",
    ],
    [
      "Customers near {location} consistently rate the finish and the care taken around windows, doors and paintwork.",
      "Word travels fast round {n2}—a lot of our render jobs there come from a neighbour's recommendation.",
    ],
    [
      "Wherever you are relative to {location}, on mainland Scotland, the same softwash standard applies—no reduced service for being further out.",
      "We travel to {n1} and beyond just as readily as we do the streets right around {location}.",
    ],
    [
      "Every render quote near {location} is free and no-obligation—we'll tell you honestly if a job doesn't need the full treatment.",
      "Getting a price for a property near {n3} costs nothing and doesn't commit you to booking.",
    ],
  ],
  "driveway-cleaning": [
    [
      "A pressure wash brings driveways near {location} back from grey-green to their original colour, and clears the moss that makes them slippery.",
      "Customers round {n1} usually book once algae starts making the surface noticeably slick after rain.",
    ],
    [
      "Block paving, concrete and tarmac all show up round {location}—we adjust pressure and method so each surface gets the right treatment.",
      "Driveways near {n2} vary in age and material more than people expect; we check before we start rather than using one setting for everything.",
    ],
    [
      "We turn up when arranged for jobs near {location} and complete the work to the same standard every time.",
      "Reliability matters more on driveway jobs near {n1}, where a missed slot means cars blocking access for longer than needed.",
    ],
  ],
  "gutter-cleaning": [
    [
      "Blocked gutters near {location} back up fast in wet weather—clearing them properly stops overflow running straight down external walls.",
      "Homes round {n1} with overhanging trees see this more than most; regular clearing avoids the damp patches that follow.",
    ],
    [
      "We work safely at height on gutter jobs near {location}, using proper access equipment rather than balancing on unstable ladders.",
      "Safe access matters just as much on tighter streets round {n2} as it does on detached properties.",
    ],
    [
      "While we're clearing gutters near {location}, we flag any cracked brackets or damaged sections so you know what else might need attention.",
      "A quick inspection during the clear near {n1} often catches small issues before they turn into bigger repairs.",
    ],
  ],
  "pvc-white-cleaning": [
    [
      "Green algae dulls white PVC fast round {location}—our clean brings fascias, soffits and gutters back to a proper bright finish.",
      "Homes near {n1} often assume the PVC needs replacing when really it just needs cleaning.",
    ],
    [
      "We use products and methods near {location} that clean effectively without damaging seals or the PVC itself.",
      "Nothing abrasive goes near fittings on jobs round {n2}—just an effective, safe clean.",
    ],
    [
      "PVC cleaning near {location} is often booked alongside gutter or window cleaning for a fuller exterior refresh.",
      "If you're near {n1}, ask about combining services on the one visit—it usually works out more efficient.",
    ],
  ],
  "window-cleaning": [
    [
      "We clean to a high standard on every job near {location}, leaving a clear, streak-free finish rather than just a quick wipe.",
      "Customers round {n1} notice the difference most on south-facing glass, where streaks show up fastest.",
    ],
    [
      "Whether it's a one-off or a regular round, jobs near {location} are booked to suit you—no fixed schedule required.",
      "Plenty of {n2} customers start with a one-off clean, then move to a regular round once they see the results.",
    ],
    [
      "We're fully insured for window cleaning near {location} and turn up reliably for every booking.",
      "Reliability is exactly why a lot of {n1} customers stick with us for repeat visits.",
    ],
  ],
  "moss-removal": [
    [
      "We use low-pressure removal on jobs near {location}, suited to slate, concrete and clay tiles—no aggressive pressure-washing that risks cracking them.",
      "Roofs round {n1} often have older tile stock, so a gentler method matters even more there.",
    ],
    [
      "A treatment applied after clearing near {location} slows regrowth, so the job lasts noticeably longer than a one-off scrape.",
      "Customers near {n2} who've had a one-off clean before usually notice the difference once treatment's included.",
    ],
    [
      "Moss and algae build up on more than just roofs near {location}—we clear patios and driveways too, where it makes surfaces genuinely dangerous underfoot.",
      "Jobs round {n1} often start as a roof enquiry and end up covering the patio as well once we're on site.",
    ],
  ],
  "patio-cleaning": [
    [
      "Algae on patios near {location} gets slippery fast, especially in shaded corners—cleaning removes the hazard as well as the mess.",
      "Homes round {n1} with tree cover see this build-up quicker than more open gardens.",
    ],
    [
      "Slabs, monoblock, decking and natural stone all turn up on patios near {location}—we adjust pressure and method for each.",
      "Patios round {n2} are rarely just one material; we treat each section on its own merits rather than one blanket setting.",
    ],
    [
      "A clean patio near {location} means the space is actually ready to use, not just presentable from a distance.",
      "Plenty of {n1} customers book ahead of a get-together, once the mess is more obvious up close.",
    ],
  ],
};

const processStepVariants: FieldVariants = {
  "roof-steam-cleaning": [
    [
      "Get in touch about your roof near {location} and we'll arrange a free quote plus a date that works for you.",
      "Booking a roof steam clean near {n1} takes a couple of minutes—just tell us roughly what you're seeing.",
    ],
    [
      "We bring steam cleaning equipment to your property near {location}—no high pressure that risks the tiles.",
      "On site near {n2}, we assess access first, then get started with the steam clean.",
    ],
    [
      "Once finished near {location}, you pay and we leave the roof clean and protected against regrowth.",
      "Jobs near {n1} wrap up with a quick look-over so you can see the results before we go.",
    ],
  ],
  "render-softwashing": [
    [
      "Tell us about your property near {location} and we'll put together a free softwash quote.",
      "Getting a quote for render near {n1} is straightforward—just a few details about the property.",
    ],
    [
      "We bring softwash equipment to your property near {location} and apply the right treatment for the render type.",
      "On jobs near {n2}, dwell time is adjusted depending on how the render's coated and how old it is.",
    ],
    [
      "Payment's on completion for jobs near {location}—you'll see the refreshed finish before settling up.",
      "Customers near {n1} usually comment on the difference before we've even packed the van away.",
    ],
  ],
  "driveway-cleaning": [
    [
      "Send us your driveway's size and surface type near {location} and we'll come back with a free quote.",
      "Quoting for a job near {n1} is quicker with a rough size and material—block paving, concrete or tarmac.",
    ],
    [
      "We bring pressure washing kit to your property near {location} and treat the surface appropriately.",
      "On site near {n2}, we check the surface before choosing pressure and method.",
    ],
    [
      "Pay once the job's done near {location}—you'll see the driveway looking clean and refreshed first.",
      "Jobs near {n1} finish with a walk-round so you can check the results.",
    ],
  ],
  "gutter-cleaning": [
    [
      "Get in touch about gutters near {location}—rough property size and gutter length is enough for a free quote.",
      "Booking near {n1} is simple; we'll ask a couple of quick questions about the property.",
    ],
    [
      "We clear gutters by hand and with the right tools near {location}, removing debris safely.",
      "On site near {n2}, we check brackets and joints while clearing so nothing's missed.",
    ],
    [
      "Payment's on completion for jobs near {location}—gutters left clear and draining properly.",
      "Jobs near {n1} wrap up with a quick explanation of anything we noticed while up there.",
    ],
  ],
  "pvc-white-cleaning": [
    [
      "Let us know the extent of PVC near {location}—fascias, soffits, gutters—and we'll send a free quote.",
      "Quoting for {n1} properties is quicker once we know roughly how much PVC's involved.",
    ],
    [
      "We clean PVC near {location} with the right products, working safely at height where needed.",
      "On jobs near {n2}, we check seals and fixings before choosing a cleaning approach.",
    ],
    [
      "Payment's on completion near {location}—PVC left clean and noticeably brighter.",
      "Customers near {n1} usually see the difference straight away once the job's done.",
    ],
  ],
  "window-cleaning": [
    [
      "Tell us how many windows near {location} and whether it's one-off or regular, and we'll quote for free.",
      "Booking near {n1} is quick—just the property size and preferred frequency.",
    ],
    [
      "We clean windows from outside near {location}, and inside by arrangement.",
      "On rounds near {n2}, we work efficiently so regular customers aren't kept waiting long.",
    ],
    [
      "Payment's on completion or as agreed for regular customers near {location}.",
      "Jobs near {n1} finish with a final check for streaks before we move on.",
    ],
  ],
  "moss-removal": [
    [
      "Get in touch about moss or algae near {location} for a free inspection and quote.",
      "We'll tell you how urgent it looks for a property near {n1} once we've had a look.",
    ],
    [
      "We remove moss and algae near {location} by hand and low-pressure methods, then treat where needed.",
      "On site near {n2}, we choose the gentlest method that'll actually shift the build-up.",
    ],
    [
      "Payment's on completion near {location}—surfaces left clear and protected against regrowth.",
      "Jobs near {n1} wrap up with a quick look at anywhere else moss might return first.",
    ],
  ],
  "patio-cleaning": [
    [
      "Send your patio's size and surface type near {location} and we'll come back with a free quote.",
      "Quoting near {n1} is quicker with a rough size and material—slabs, monoblock or decking.",
    ],
    [
      "We bring pressure washing kit to your property near {location}, cleaning the full area including joints and edges.",
      "On site near {n2}, we work section by section so nothing's missed.",
    ],
    [
      "Pay once the job's done near {location}—your patio left clean and safer underfoot.",
      "Jobs near {n1} finish with a walk-round so you can see the results before we go.",
    ],
  ],
};

const faqAnswerVariants: FieldVariants = {
  "roof-steam-cleaning": [
    [
      "Most properties near {location} need a clean every 2–3 years, though tree cover and exposure can shorten that. We can advise after a look at your roof.",
      "It varies by property, but round {location} 2–3 years is typical for moss and algae. We'll give you a straight answer after an inspection.",
    ],
    [
      "Yes—near {location} we use low-pressure steam and treatments suited to tiles, slates and most common roof surfaces.",
      "It's safe for the roof types we see most round {location}: tiles, slates and similar. We'll flag anything unusual before starting.",
    ],
    [
      "They're closely related low-pressure alternatives to jet washing—on jobs near {location} we combine steam and soft-wash treatment depending on the roof.",
      "Both avoid the damage high pressure can cause; near {location} we pick whichever combination suits your roof type.",
    ],
    [
      "Yes, we can clear and clean gutters near {location} as part of the job or separately—just ask when you get a quote.",
      "Gutters are often done alongside a roof clean near {location}; ask for a combined price.",
    ],
  ],
  "render-softwashing": [
    [
      "Call or use the contact form for a property near {location} and we'll get back with a free, no-obligation quote.",
      "Getting a quote for render near {location} is quick—call us or fill in the form and we'll reply with a price.",
    ],
    [
      "Yes—alongside a one-off clean near {location}, we offer a maintenance plan to keep render looking its best year-round.",
      "A lot of {location} customers move to a maintenance plan after their first softwash, rather than waiting for render to green over again.",
    ],
    [
      "Pressure washing can chip paint and crack render; softwashing near {location} is a gentler, low-pressure method built for render, roughcast and pebbledash.",
      "Unlike jet washing, softwashing near {location} won't blast out mortar or damage the coating—it's designed for exactly this kind of surface.",
    ],
    [
      "Yes—roughcast, pebbledash and smooth render near {location} all respond well, though dwell time varies with coating age.",
      "All the common render finishes round {location} can be softwashed; we just adjust the treatment to suit.",
    ],
    [
      "Cost near {location} depends on property size, condition and render type—we give a free quote so you know the price upfront.",
      "There's no fixed price for render near {location}; every quote reflects the actual size and condition of the property.",
    ],
    [
      "Yes, fully insured for work near {location}—happy to provide details on request.",
      "Insurance details are available on request for any job near {location}.",
    ],
    [
      "No—as long as we can access the exterior and a water supply near {location}, you don't need to be home.",
      "Most customers near {location} aren't home during the clean; access to the outside and water is all we need.",
    ],
    [
      "Yes, mainland Scotland excluding the islands—{location} included, along with anywhere nearby.",
      "We cover the mainland, {location} included—just not the islands.",
    ],
    [
      "Yes—render softwashing near {location} covers homeowners and commercial properties alike.",
      "Both homes and businesses near {location} book render softwashing with us.",
    ],
    [
      "Alongside render softwashing near {location}, we also offer roof steam cleaning, driveway, gutter, PVC and window cleaning.",
      "Render softwashing is one of several services we offer near {location}—roof, driveway, gutter, PVC and windows too.",
    ],
  ],
  "driveway-cleaning": [
    [
      "Yes—near {location} we clean block paving, concrete, tarmac and other surfaces using appropriate pressure and method.",
      "Whatever the surface near {location}, block paving included, we adjust our approach accordingly.",
    ],
    [
      "It depends on size and condition; for a property near {location} we'll give you an estimate at quoting stage.",
      "Timing varies near {location} depending on driveway size—we'll let you know when we quote.",
    ],
  ],
  "gutter-cleaning": [
    [
      "At least once a year near {location}, more often with overhanging trees or heavy leaf fall.",
      "Once a year is typical near {location}; properties with a lot of tree cover may need it more.",
    ],
    [
      "Yes, we can clear downpipes near {location} as part of the service—just mention it when booking.",
      "Downpipes can be included on jobs near {location}; ask when you book.",
    ],
    [
      "Yes—since we're already at gutter height on jobs near {location}, fascias and soffits can be cleaned the same visit.",
      "Ask for a combined quote near {location}; fascia and soffit cleaning pairs naturally with a gutter clear.",
    ],
  ],
  "pvc-white-cleaning": [
    [
      "No—our cleaning near {location} is gentle and safe for PVC, without damaging seals or fixings.",
      "PVC near {location} isn't at risk from our methods; nothing abrasive goes near seals or fittings.",
    ],
    [
      "With normal exposure, PVC near {location} tends to stay looking good for 12–24 months before another clean's needed.",
      "Results near {location} typically hold up well for a year or two before a repeat clean makes sense.",
    ],
  ],
  "window-cleaning": [
    [
      "We can quote for inside and outside near {location}—just let us know when you get in touch.",
      "Inside cleaning is available near {location} on request; mention it when booking.",
    ],
    [
      "Every 4–8 weeks suits many customers near {location}; we can suggest a frequency based on your property.",
      "Near {location}, most regular customers settle on a 4–8 week round, though we'll tailor it to you.",
    ],
  ],
  "moss-removal": [
    [
      "Look for green or grey clumps along ridges and valleys, granules in the gutters, or damp patches on ceilings after rain—common signs near {location}.",
      "Near {location}, the usual signs are visible clumps on the roof, granules collecting in gutters, or damp patches appearing indoors.",
    ],
    [
      "No—near {location} we use low-pressure methods suited to slate, concrete and clay tiles, avoiding pressure-washing that can crack them.",
      "Tiles near {location} are safe with our approach; we deliberately avoid the aggressive pressure that risks damage.",
    ],
    [
      "Yes—algae causes the green staining often seen on roofs, patios and driveways near {location}, and we treat both together.",
      "Moss and algae usually appear together near {location}; we clear and treat for both in the same visit.",
    ],
    [
      "Yes, we cover {location} and the wider area—North Glasgow, East Dunbartonshire, Lanarkshire, Falkirk and Stirling. Get in touch for a free quote.",
      "{location} is within our regular coverage area—get in touch for a free quote and we'll confirm a date.",
    ],
  ],
  "patio-cleaning": [
    [
      "Yes—near {location} we clean monoblock, slabs, natural stone and decking, adjusting pressure to suit each.",
      "Monoblock patios near {location} are a regular job for us; we adjust pressure to the surface.",
    ],
    [
      "No, we use appropriate pressure and technique near {location} so jointing sand and pointing aren't stripped out.",
      "Joints stay intact on patio jobs near {location}—we don't use pressure that risks stripping them.",
    ],
    [
      "Yes, we cover {location} and the wider area—North Glasgow, East Dunbartonshire, Lanarkshire, Falkirk and Stirling. Get in touch for a free quote.",
      "{location} is within our regular coverage—get in touch for a free quote and a convenient date.",
    ],
  ],
};

/** Why Choose points: same titles as serviceDetails.ts, alternate descriptions on location pages. */
export function getWhyChoosePoints(
  serviceSlug: string,
  location?: Location
): { title: string; description: string }[] {
  const detail = serviceDetails[serviceSlug];
  if (!detail) return [];
  const variants = whyChoosePointVariants[serviceSlug];
  return detail.whyChoose.points.map((point, i) => {
    const alts = variants?.[i];
    if (!location || !alts || alts.length === 0) {
      return point;
    }
    const picked = pickVariant(alts, location.slug + serviceSlug, `whychoose-${i}`);
    return { title: point.title, description: replace(picked, location) };
  });
}

/** Process steps: same titles, alternate descriptions on location pages. */
export function getProcessSteps(
  serviceSlug: string,
  location?: Location
): { title: string; description: string }[] {
  const detail = serviceDetails[serviceSlug];
  if (!detail) return [];
  const variants = processStepVariants[serviceSlug];
  return detail.processSteps.map((step, i) => {
    const alts = variants?.[i];
    if (!location || !alts || alts.length === 0) {
      return step;
    }
    const picked = pickVariant(alts, location.slug + serviceSlug, `process-${i}`);
    return { title: step.title, description: replace(picked, location) };
  });
}

/** Shared FAQ answers: same questions, alternate answers on location pages. */
export function getSharedFaqs(
  serviceSlug: string,
  location?: Location
): { question: string; answer: string }[] {
  const detail = serviceDetails[serviceSlug];
  if (!detail) return [];
  const variants = faqAnswerVariants[serviceSlug];
  return detail.faqs.map((faq, i) => {
    const alts = variants?.[i];
    if (!location || !alts || alts.length === 0) {
      return faq;
    }
    const picked = pickVariant(alts, location.slug + serviceSlug, `faq-${i}`);
    return { question: faq.question, answer: replace(picked, location) };
  });
}

const LOCATION_LINE_TEMPLATES = [
  "Serving {location}, {n1}, {n2} and the surrounding area.",
  "Covering {location} and nearby, including {n1} and {n2}.",
  "We're regularly out in {location}, {n1} and {n2} for this job.",
  "Local to {location} and the streets toward {n1} and {n2}.",
];

/** Small variant pool for the "Serving X, Y, Z" line under the Why Choose heading. */
export function getWhyChooseLocationLine(location: Location, serviceSlug: string): string {
  const template =
    location.neighborhoods && location.neighborhoods.length >= 2
      ? pickVariant(LOCATION_LINE_TEMPLATES, location.slug + serviceSlug, "locationline")
      : "Serving {location} and the surrounding area.";
  return replace(template, location);
}

const HERO_TRAILING_CLAUSES = [
  "We come to you in {location} and the surrounding areas.",
  "We bring the job to your door in {location}, {n1} and nearby.",
  "Covering {location} and out toward {n2}—get a free quote.",
  "Based nearby and regularly working in {location} and {n1}.",
];

/** Trailing sentence appended to the service hero description on location+service pages. */
export function getHeroTrailingClause(location: Location, serviceSlug: string): string {
  const template = pickVariant(HERO_TRAILING_CLAUSES, location.slug + serviceSlug, "hero-clause");
  return replace(template, location);
}

const SECOND_LOCATION_FAQ_TEMPLATES = [
  {
    question: "Which parts of {location} do you cover?",
    answer:
      "All of {location}, plus the surrounding streets toward {n1} and {n2}—get in touch if you're unsure and we'll confirm straight away.",
  },
  {
    question: "How quickly can you get out to {location}?",
    answer:
      "We're in and around {location} regularly, so most jobs can be booked within a week or two—sooner if it's urgent.",
  },
  {
    question: "Do you cover {n1} and {n2} as well as {location} itself?",
    answer:
      "Yes—{n1} and {n2} are both within our regular coverage alongside {location}. Get in touch for a free quote.",
  },
];

/** Second location-specific FAQ (in addition to the "Do you do X in {location}?" one), so more of the FAQ block is genuinely local. */
export function getSecondLocationFaq(
  location: Location,
  serviceSlug: string
): { question: string; answer: string } {
  const template = pickVariant(
    SECOND_LOCATION_FAQ_TEMPLATES,
    location.slug + serviceSlug,
    "second-faq"
  );
  return {
    question: replace(template.question, location),
    answer: replace(template.answer, location),
  };
}
