/**
 * Unique, indexable copy for location landing pages.
 * Combines region context (climate, transport, housing) with per-slug template rotation.
 */

import type { Location, LocationRegionId } from "./locations";
import { LOCATION_REGION_ORDER } from "./locations";

function hashSlug(s: string, salt = ""): number {
  const t = s + salt;
  let h = 0;
  for (let i = 0; i < t.length; i++) {
    h = (h << 5) - h + t.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

function pick<T>(arr: T[], slug: string, salt: string): T {
  if (arr.length === 0) throw new Error("pick: empty array");
  return arr[hashSlug(slug, salt) % arr.length];
}

function regionTitle(regionId: LocationRegionId): string {
  return LOCATION_REGION_ORDER.find((r) => r.id === regionId)?.title ?? "";
}

/** "Lenzie, Kirkintilloch and Bishopbriggs" style */
export function formatNeighborhoodList(location: Location): string {
  const n = location.neighborhoods ?? [];
  if (n.length === 0) return `the ${location.name} area`;
  if (n.length === 1) return n[0];
  if (n.length === 2) return `${n[0]} and ${n[1]}`;
  return `${n.slice(0, -1).join(", ")} and ${n[n.length - 1]}`;
}

function ph(
  text: string,
  location: Location,
  extra: Record<string, string> = {},
): string {
  const n = location.neighborhoods ?? [];
  const map: Record<string, string> = {
    name: location.name,
    n1: n[0] ?? "nearby areas",
    n2: n[1] ?? "surrounding streets",
    n3: n[2] ?? "the next town along",
    nearby: formatNeighborhoodList(location),
    region: regionTitle(location.regionId),
    ...extra,
  };
  return text.replace(/\{(\w+)\}/g, (_, k) => map[k] ?? `{${k}}`);
}

const CLIMATE_LINES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "{name} gets more than its fair share of Atlantic drizzle—roof moss, green render and clogged gutters creep up faster than homeowners expect.",
    "Between showers and drifting damp air off the Campsies, algae loves {name}: you'll spot it on ridge tiles, north-facing walls and fascias quicker than inland towns.",
    "West-of-Scotland weather means rainwater sits on tiles and washes silt down render in {name}. Left alone, moss works into joints and runoff stains driveways.",
    "If you live in {name}, you'll know winters are wet and summers aren't reliably dry—that's textbook conditions for moss, lichen and black streaks across rooflines.",
    "{name} properties catch wind-driven rain straight off open ground toward Glasgow—gutters fill with leaves from street trees faster than coastal spots.",
    "Humid spells after rain are when algae blooms on PVC and patios around {name}. A proper clean restores grip on paving and clears spores before they etch softer stone.",
    "North Glasgow commuter belt rainfall keeps render damp for days—{name} semis and bungalows show green staining long before gutters overflow.",
    "Older tile stock plus constant moisture around {name} means moss can lift slates slightly; steam cleaning and careful treatment protect the roof without blasting tiles.",
  ],
  "cumbernauld-kilsyth": [
    "Open hills and estate layout around {name} funnel wind and rain across roofs—moss often appears on the weather side first, with gutters filling from nearby woodland.",
    "Between the M80 and Kilsyth Hills, {name} sees driving showers in winter; driveways moss over in shaded bays and fascia boards pick up mildew quickly.",
    "New-town housing in the {name} area has long roof runs—one blocked hopper backs water up multiple metres of gutter.",
    "{name} sits where cold air pools overnight; frost thaw cycles widen tiny cracks in render and loosen pointing if algae holds moisture against the wall.",
    "Tree-lined streets feeding into main roads near {name} dump leaves straight into rainwater goods—silent blockages until soffits stain.",
    "Properties stepped up contours around {name} often have asymmetric roof loads from moss—you notice it from the pavement before it shows on the doorstep.",
    "Low winter sun hides north faces from drying out in {name}, so algae clings to render panels that look fine from the front until you walk the gable.",
    "Kilsyth-belt drizzle plus heavy traffic grit means patios and paving near {name} need seasonal washing to avoid slippery green film.",
  ],
  "north-lanarkshire-east": [
    "{name} sits in the North Lanarkshire belt where older stock meets newer builds—roof valleys and shared gables hide moss until it's thick enough to shed into gutters.",
    "Industrial-era terraces and generous semis near {name} often have narrower gardens: debris from boundary trees ends up straight in rainwater systems.",
    "Wind off the Campsies hits {name} from the north-west—first-row roofs take the brunt, and PVC soffits on those elevations dull fastest.",
    "Between Coatbridge and Airdrie commuter traffic, façade dust settles on wet render round {name}; softwashing clears traffic film algae can't shrug off.",
    "{name} driveways cope with tyre grit plus rain—fine silt washes into drainage channels and grips green with moss if pressure washing skips the joints.",
    "Split-level roofs common near {name} trap leaves in valleys; overflowing water tracks down cavity walls before you realise hopper grids are wedged.",
    "Clay and concrete paving near {name} holds moisture longer than sandstone—customers notice green slipper patches after mild, wet spells.",
    "East Lanarkshire weather swings from soggy Atlantic fronts to drying winds—freeze-thaw on north faces of {name} homes rewards regular exterior upkeep.",
  ],
  "falkirk-stirling": [
    "{name} is closer to inland frost corridors toward the Forth and Stirling—render and roof edges hold damp longer after cold snaps, feeding slow algae growth.",
    "Heavier winter frosts inland mean grit and salt spray reach low garden walls and PVC near trunk roads feeding {name}; gentle cleaning restores brightness.",
    "{name} properties along the Falkirk corridor see mix of sandstone, brick and monocouche render—each needs a calibrated clean, especially after wet east winds.",
    "Canal corridors and low ground near parts of {name} increase humidity pockets; patios under tree canopies need more frequent washes than open front drives.",
    "Commuter links toward Edinburgh and Glasgow mean garages and apron paving at {name} pick up motorway film—pressure washing restores contrast on block paving.",
    "Stirling-side elevation exposes {name} to colder night air drifting down glens—condensation linger on gutters and fascias lengthens mildew season.",
    "Historic stone and newer render sit side-by-side round {name}; softwash chemistry has to suit the façade, especially where cement pointing is softer.",
    "Long summer evenings don't necessarily dry north elevations in {name}; moss returns on shaded pitches unless treated properly after cleaning.",
  ],
};

const TRANSPORT_LINES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "We plan routes via the M80 and A807 belt so vans reach {name} without burning half the day — handy if you work from home and want a tidy arrival slot.",
    "Most of our {name} calls sit between Bishopbriggs, Lenzie and the city corridor — short hops on the local road grid mean realistic same-week bookings.",
    "Commuters heading toward Glasgow Queen Street often book us from {name} for roof and driveway work that finishes before peak traffic stacks up.",
    "We bunch jobs along the A803 and Milngavie Road approaches — if you're in {name}, we typically pair neighbouring streets to keep travel efficient.",
    "School-run streets around {nearby} are familiar ground: we arrive with ground sheets and hoses sized for tighter driveways.",
  ],
  "cumbernauld-kilsyth": [
    "The M73/M80 roundabout cluster makes {name} a straightforward visit from our northern base — we stage kit for estate roads and quieter cul-de-sacs alike.",
    "We often ladder up on post-war terraces near {name}, then reposition to larger detached plots off the main artery without long dead mileage.",
    "If you border Croy or Castlecary dips, mention it when booking — gradients change how we set water recovery on drive washes.",
    "Kilsyth Road runs and Twechar dips are normal Tuesday routes — {name} customers tend to cluster with neighbouring villages on one visit.",
    "New-town grids near {name} mean predictable gutter lengths; we price fairly because access is usually straightforward once we're onsite.",
  ],
  "north-lanarkshire-east": [
    "We cross the Coatbridge/Airdrie links daily — bookings from {name} usually align with Plains, Chapelhall or Glenboig on the calendar.",
    "Whifflet and Sunnyside crossings are factored into arrival times near {name}; we text if rail bridge traffic shifts the window.",
    "East Lanarkshire semis mean standard ladder setups — crews working {name} keep footprint tight so neighbours retain parking.",
    "We plan around Calder canalside humidity near some {name} postcodes — extra drying passes on fascia cleans when needed.",
    "If you mention Gartcosh business park runs, we can schedule after-shift hours so driveways reopen before the morning commute.",
  ],
  "falkirk-stirling": [
    "{name} calls often stack along the A9/A91 fingers — we batch Falkirk, Larbert and Polmont days to keep carbon and cost sensible.",
    "Grangemouth industrial breeze can dust cars and patio glass; {name} customers near the Forth notice quicker wins after a window and PVC pass.",
    "Stirling Approach traffic is built into ETA texts for {name} — crews carry enough hose to reach rear gardens off main roads.",
    "Bridge of Allan stone and Linlithgow tight lanes need smaller vans sometimes; mention access when you're central in {name}.",
    "We coordinate around Bo'ness and Brightons dips when hopping from {name} — saves you paying for duplicated travel fees.",
  ],
};

const HOME_STYLE_LINES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "Detached and semi bays with pitched concrete tiles dominate {name}; we treat ridge lines carefully before clearing gutters underneath.",
    "Post-war semis plus newer infill estates mean mixed fascia heights around {name} — scaffolding is rarely needed for standard bungalow cleans.",
    "Some Lenzie-pattern homes near {name} carry deep front drives — we sectional-wash block paving so joints don't lift.",
    "{name} has its share of pebble-dash and monocouche; softwash dosing changes depending on coating age.",
    "Stone-built cottages nearer {nearby} need gentler rinses — we inspect pointing before committing pressure.",
    "Split-level garages in {name} often hide overflowing gutters behind parapets — inspection photos help you prioritise fixes.",
    "Bay windows common on {nearby} streets mean ladder angles vary; crews pad contact points.",
    "{name} rooflines include hip ends that shed moss toward valley gutters — we flush those lengths first.",
  ],
  "cumbernauld-kilsyth": [
    "Townhouse rows and terraces in parts of {name} share long fascia runs — one blocked outlet affects multiple rainwater pipes.",
    "Split-level estates near {name} often step parking bays — we wedge recovery mats to steer runoff downhill safely.",
    "Roughcast elevations around {nearby} need softwash dwell time; pressure alone drives water behind harling.",
    "Detached plots backing woodland near {name} pick up needles as well as broadleaf litter — gutters need hand clearing, not vacuum-only guesses.",
    "Corner plots in {name} catch wind swirl that deposits leaves on flat porch roofs — worth including in gutter scope.",
    "Garage apron slopes toward house door on some {name} builds — driveway cleans angle jets to steer water away from DPC zones.",
    "PVC conservatory shells near {name} stain from splash-back off dirty fascias above — tandem cleans brighten both.",
    "Mono-pitch dormers facing {nearby} hold moss nests — brushed before steam treating main roof fields.",
  ],
  "north-lanarkshire-east": [
    "Red sandstone bays and blond brick terraces in {name} show algae as dark banding — softwash lifts it without blasting mortar.",
    "Back-court terraces near {nearby} mean scaffold-free ladder work — we tarp below to respect shared closes.",
    "Post-industrial soot still leaches from some older masonry round {name} — rinsing direction avoids streaking neighbouring paint.",
    "New-build clusters at {nearby} have shallow gardens; we reclaim grey water from driveway passes where drains are tight.",
    "Chimney breasts on {name} semis harbour moss — small detail brushes matter before rinsing façade.",
    "Cast-iron rainwater goods survive on villas near {name} — delicate pressure and manual clearing only.",
    "Split-level garages along {nearby} create shade pockets where algae survives winter — recurring maintenance plans suit those homes.",
    "Large corner gables on {name} estates catch swirling leaves — gutter guards still need annual checks.",
  ],
  "falkirk-stirling": [
    "Victorian stone villas near {name} need low-angle rinses; we protect delicate mastic at window heads.",
    "Harled new-builds toward {nearby} benefit from softwash plus controlled rinse — never zero-degree tips on fresh coats.",
    "Canal-adjacent humidity in parts of {name} accelerates patio lichen — rotary surface cleaners lift it evenly.",
    "Large rural-style plots outside {name} often use long gravel runs — we keep pressure moderate to avoid scatter.",
    "Split-level townhouses near {nearby} stack gutters — inspection from upper lift points saves repeat callouts.",
    "Coastal Forth breeze deposits salt film on low-level glass in {name} — pure-water window passes cut spotting.",
    "Historic tenement-scale homes in {name} pockets need rope-free ladder discipline — we respect shared closes.",
    "Stone cottage rows toward {nearby} show lime mortar — chemistry choice matches substrate tests.",
  ],
};

const LOCAL_LANDMARK_ANGLES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "From {name} toward {n1}, you're minutes off the commuter spine into Glasgow—properties here benefit from crews that know pinch points on local A-roads and can plan quiet arrival windows.",
    "Tree-lined approaches near {nearby} mean autumn leaf loads spike hard; we prioritise gutter clearing once sycamore and birch start dropping.",
    "Homes tucked toward {n3} pick up Campsie flank winds—roof moss often gathers on north-west pitches first, which is exactly where homeowners rarely look until stains appear indoors.",
    "If you mention Lenzie Moss or Mugdock approaches, crews factor mud on tyres and kit—driveway protection stays down until washes finish.",
    "Properties backing onto parkland corridors near {name} see squirrels and pine needle debris—manual clearing beats blind vacuuming.",
  ],
  "cumbernauld-kilsyth": [
    "Between Cumbernauld's roundabout network and hills toward Kilsyth, crews clock extra wind chill on scaffold-free ladder sets—safety pacing keeps {name} jobs smooth.",
    "Wooded slopes toward {nearby} dump pollen films each spring—we pair fascia cleans with rinse-downs where customers see yellow dust on PVC.",
    "Residents off the arterial links into {name} often notice motorway dust on renders facing trunk roads—we softwash with pre-soak dwell to lift it.",
    "Estates bordering Castlecary dips see cold pooling fog—north faces stay damp longer; we document before/after photos for insurance interest where needed.",
    "Twechar and Queenzieburn feeders keep us near {name} weekly—paired scheduling reduces downtime for neighbours wanting the same weekday.",
  ],
  "north-lanarkshire-east": [
    "{name} sits in the industrious belt between Coatbridge and Airdrie—render faces catch road film, while rear gardens snag leaves from avenues planted decades ago.",
    "Whifflet and Drumpellier corridors influence local traffic—we text realistic ETAs for {name}, especially near school dispersal peaks.",
    "Coatbridge sandstone stock near {nearby} contrasts with darker engineering brick—we adjust softwash strengths accordingly.",
    "Plains elevations catch easterlies straight off farmland—driveway grit blows in differently than city-centric homes.",
    "Chapelhall gables toward Holytown dips often harbour moss ladders—stem removal before detergent saves re-growth rush.",
    "Scottish canalside humidity influences some {nearby} postcodes—paired roof and fascia visits stop algae migrating downward.",
    "Rail-adjacent homes in corners of {name} vibrate fasteners loose over years—we flag rattling gutters before clearing.",
    "Glenboig's brickmaking heritage means some local aggregates stain differently—experience on {name} drives keeps rinse strategy sensible.",
  ],
  "falkirk-stirling": [
    "{name} benefits when crews understand Falkirk's Forth crossings—paired visits with Camelon/Larbert keep pricing fair for detached plots off the motorway strips.",
    "Homes nearer the canal basin in Falkirk wards pick up mooring-town humidity—we extend dwell on softwash for north faces along the cut.",
    "Stirling Approach microclimate means frost pockets near {nearby}; we advise PVC maintenance before salt spray etches plastics.",
    "Linlithgow Palace sightlines neighbourhoods pay attention to front elevation glare—glasswork pricing bundled where fascias drip dirty water.",
    "Grangemouth refinery skyline reminds {name} customers that particulate settles on dewy renders—annual washing protects coatings.",
    "Bridge of Allan stone villas need conservation-minded pacing—crew leads check pointing before ladders lean.",
    "Dunblane riverside breezes swirl leaves oddly on hip roofs—we map debris fall before scaffold-free ladder moves.",
    "Polmont/Inchyra logistics parks generate HGV swirl near some {name} edges—dusty cladding responds well to detergent prefoam.",
  ],
};

/** Conversational hero: climate / local problems, then neighbourhoods / coverage */
export function getLocationHeroParagraphs(location: Location): string[] {
  const climate = ph(pick(CLIMATE_LINES[location.regionId], location.slug, "climate"), location);
  const nb = location.neighborhoods?.length
    ? ph(
        pick(
          [
            "We're in and out of homes from {nearby}, so quoting {name} is routine—not an extra mileage surcharge. Roof steam cleaning, render softwashing, driveway, gutter, PVC and window cleaning—all brought to your door with a proper plan for access and runoff.",
            "Whether you're on a main artery or tucked toward {nearby}, it's usually the same story: mossy ridges, slippery paving and fascia streaking after wet spells—and we tackle the lot without cutting corners.",
            "Jobs cluster with neighbouring streets toward {nearby}; mention your postcode and we'll lock a tidy arrival. Full exterior lineup: roof steam, softwash render, driveway pressure washing, gutter clearing, white PVC revival and streak-free glazing.",
            "Most of our week is within minutes of {nearby}, which keeps emergencies after storms workable. Same services homeowners expect from us citywide—just routed sensibly through {name}.",
          ],
          location.slug,
          "hero-nb",
        ),
        location,
      )
    : ph(
        pick(
          [
            "Across {region}, we quote {name} like home turf—not a bolt-on surcharge. Roof steam cleaning, softwash render, driveways, gutters, PVC fascias and window cleaning handled as one disciplined crew.",
            "{name} sits on regular runs for our vans; roofline, façade and groundwork services all follow the methods on our dedicated service pages—just scheduled for local access.",
            "We roster {name} beside nearby towns every week—you're not stuck chasing a contractor that only remembers the M8 corridor.",
          ],
          location.slug,
          "hero-noreg",
        ),
        location,
      );
  return [climate, nb];
}

/** “Why choose us” block */
export function getLocationChooseUsParagraphs(location: Location): string[] {
  return [
    ph(pick(TRANSPORT_LINES[location.regionId], location.slug, "choose-trans"), location),
    ph(pick(HOME_STYLE_LINES[location.regionId], location.slug, "choose-home"), location),
  ];
}

/** Services section intros */
export function getLocationServicesSectionParagraphs(location: Location): string[] {
  return [
    ph(
      pick(
        [
          "Every property is different, but the pattern around {name} repeats: wet winters, dusty summers, and organic growth that loves damp shade on north faces.",
          "We keep language simple—if you're in {name}, you're probably tired of moss dropping into the driveway and gutters that gurgle after every downpour.",
          "Local weather doesn't negotiate: algae on render, slipped moss on tiles, and patio film are normal maintenance items here — not “you've neglected the place”.",
          "Most {name} customers want two things: work done safely at height, and results that last longer than a quick blast with a rental pressure washer.",
        ],
        location.slug,
        "svcintro-a",
      ),
      location,
    ),
    ph(
      pick(
        [
          "Below is what we actually deliver—each card links to a dedicated page for {name} with pricing context and photos from similar homes.",
          "Tap through for roof, render, driveway, gutter, PVC and window pages tailored to {name}; you'll see how we sequence treatments for local materials.",
          "Pick the job that matches what you're seeing outside today — we'll confirm access, water and waste handling before we book a date.",
          "If you're unsure what's urgent, start with gutters and roofline inspection; blockages upstream cause the expensive damp issues people miss until skirting boards stain.",
        ],
        location.slug,
        "svcintro-b",
      ),
      location,
    ),
  ];
}

/** Opening story paragraphs for detailed content (below reviews) */
export function getLocationOpeningParagraphs(location: Location): string[] {
  return [
    ph(pick(CLIMATE_LINES[location.regionId], location.slug, "open-a"), location),
    ph(
      pick(
        [
          "We're not here to upsell mystery chemicals—just honest exterior cleaning that fits how homes in {name} actually weather.",
          "Quote us photos from the ground if you like; we'll tell you what's algae versus cement staining before we book equipment.",
          "Insurance, method statements and neighbour-friendly setup matter on tight {name} streets—we bring mats, signage and controlled rinse plans as standard.",
          "Most people call after a storm or when the in-laws comment on the driveway—either way, we'll prioritise safety on ladders and roofline work.",
        ],
        location.slug,
        "open-b",
      ),
      location,
    ),
    ph(
      pick(
        [
          "Scroll on for service-by-service detail—each section is written for {name}, not copy-pasted from a national franchise page.",
          "If you share a gable or close with {nearby}, mention it when booking—we often coordinate access politely with neighbours when gutters share a fall.",
          "Postcode notes help us bring the right softwash batch and enough hose for rear gardens off back lanes.",
        ],
        location.slug,
        "open-c",
      ),
      location,
    ),
  ];
}

/** “Why exterior cleaning matters in {name}” — local knowledge */
export function getLocationLocalKnowledgeParagraphs(location: Location): string[] {
  return [
    ph(pick(LOCAL_LANDMARK_ANGLES[location.regionId], location.slug, "lk-lm"), location),
    ph(pick(HOME_STYLE_LINES[location.regionId], location.slug, "lk-home"), location),
    ph(pick(TRANSPORT_LINES[location.regionId], location.slug, "lk-trans"), location),
  ];
}

export function getLocationGalleryImageIndex(locationSlug: string): number {
  return (hashSlug(locationSlug, "gal-img") % 6) + 1;
}

/** Unique meta description (~150–160 chars) */
export function getLocationMetaDescription(location: Location): string {
  const climate = ph(pick(CLIMATE_LINES[location.regionId], location.slug, "meta"), location);
  const firstSentence = climate.split(".")[0]?.trim() ?? `Exterior cleaning in ${location.name}`;
  const hook =
    firstSentence.length > 115 ? `${firstSentence.slice(0, 112).trim()}…` : firstSentence;
  const nearby =
    location.neighborhoods && location.neighborhoods.length > 0
      ? ` Local to ${location.neighborhoods.slice(0, 2).join(" & ")}.`
      : "";
  let out = `${hook}. Roof steam, softwash render, driveways, gutters & PVC.${nearby} Free quote ${location.name}.`;
  if (out.length <= 160) return out;
  out = `${hook.slice(0, Math.max(60, 160 - 85)).trim()}. Exterior cleaning ${location.name}: roof, render, drive, gutters, PVC, windows — free quote.`;
  return out.length <= 160 ? out : out.slice(0, 157).trimEnd() + "...";
}
