/**
 * Unique, indexable copy for location landing pages.
 * Combines region context (climate, transport, housing) with per-slug template rotation.
 */

import type { Location, LocationRegionId } from "./locations";
import { LOCATION_REGION_ORDER } from "./locations";
import { hashKey, pickVariant } from "../utils/contentVariants";
import { BUSINESS_NAME, META_AREA_PHRASE } from "../constants/site";

function hashSlug(s: string, salt = ""): number {
  return hashKey(s + salt);
}

function pick<T>(arr: T[], slug: string, salt: string): T {
  return pickVariant(arr, slug, salt);
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
    "Between {name} and {n1}, low cloud sits on rooflines for days at a time—enough for algae to take hold on anything north-facing before it's ever obviously dirty.",
    "Gutters on the {n2} side of {name} fill fastest; overhanging trees plus steady drizzle mean silt and moss build up quicker than a dry summer would suggest.",
    "Driveways round {name} rarely get a proper chance to dry out between fronts rolling in off the Clyde—moss gets a foothold in shaded corners first.",
    "Homes toward {n3} catch the same damp westerly weather as {name} itself—render staining tends to show on the same elevations street after street.",
    "{name} doesn't get the worst of Scotland's weather, but steady year-round rainfall is enough to keep roofs and render permanently a shade damper than they look.",
    "PVC fascias around {name} pick up a grey-green film faster than you'd expect—condensation and drizzle team up even in weeks without heavy rain.",
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
    "Exposed higher ground around {name} and {n1} means driving rain hits harder here than in the sheltered glens further south—roof moss builds up on the windward pitch first.",
    "Between {name} and {n2}, hedgerow and farmland debris blow straight into gutters after autumn winds—blockages show up sooner than in built-up streets.",
    "{name} sits low enough to catch overnight mist off the canal basin—damp mornings keep driveways slick with algae longer into spring than you'd guess.",
    "Homes toward {n3} share the same exposed aspect as {name}—render staining tends to track the prevailing wind rather than any one street.",
    "Cold snaps hit {name} a little harder than the city proper—freeze-thaw cycles work moss and lichen further into roof joints over a winter.",
    "Streets around {name} see plenty of standing puddles after heavy rain—patios and monoblock need a proper rinse before algae gets a grip.",
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
    "{name} and {n1} share the same belt of old mineral workings—ground damp sits a little longer here, and it shows first as green streaking on lower render.",
    "Terraced streets near {name} funnel wind down narrow gaps between houses, driving rain into places a detached home wouldn't catch it—fascias and soffits suffer first.",
    "Toward {n2}, open farmland either side of {name} means driveways collect windblown grit as well as rain—the two together grind into paving joints fast.",
    "{name} sees the same wet-then-dry cycle as the rest of North Lanarkshire, but older gutter runs here back up quicker once leaves from mature street trees get in.",
    "Homes around {n3} and {name} both sit on the same drainage gradient—blocked gutters on one street are usually a sign neighbouring properties need a look too.",
    "Grey, still days are common round {name}—render doesn't dry fast between showers, which is exactly when algae spreads fastest.",
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
    "{name} sits close enough to the Forth that salt-laden air reaches garden walls and low-level glass—PVC and window cleans need doing a little more often than inland towns.",
    "Between {name} and {n1}, flat ground either side of the river holds mist well into the morning—driveways and patios stay greasy with algae longer than you'd expect.",
    "Homes toward {n2} share {name}'s exposure to east coast winds off the Forth—render on the windward gable typically needs attention first.",
    "{name} gets a mix of hill runoff and low-lying damp depending which side of town you're on—we check both before quoting a roof or render job.",
    "Older stonework near {n3} and around {name} holds damp in the pointing—we go gentler with pressure here so we don't force water further into the wall.",
    "Frosty mornings are more common inland toward {name} than on the coast—repeated freeze-thaw is often why moss on north-facing roofs here looks worse by spring.",
  ],
};

const TRANSPORT_LINES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "We plan routes via the M80 and A807 belt so vans reach {name} without burning half the day — handy if you work from home and want a tidy arrival slot.",
    "Most of our {name} calls sit between Bishopbriggs, Lenzie and the city corridor — short hops on the local road grid mean realistic same-week bookings.",
    "Commuters heading toward Glasgow Queen Street often book us from {name} for roof and driveway work that finishes before peak traffic stacks up.",
    "We bunch jobs along the A803 and Milngavie Road approaches — if you're in {name}, we typically pair neighbouring streets to keep travel efficient.",
    "School-run streets around {nearby} are familiar ground: we arrive with ground sheets and hoses sized for tighter driveways.",
    "We keep a rolling list of {name} bookings so a job on your street usually means a neighbour further along {n1} gets offered the same week.",
    "Parking on tighter closes near {name} is factored into how we load the van — we bring only what a job needs so we're not blocking driveways longer than necessary.",
    "Weekday mornings suit most {name} bookings best, before school-run traffic builds along the routes toward {n2}.",
    "If access from {nearby} means a longer hose run to a back garden, we plan for it at quoting stage rather than turning up short.",
    "Return visits to {name} are straightforward — we keep notes on access, gate codes and parking from the first job so follow-ups run quicker.",
  ],
  "cumbernauld-kilsyth": [
    "The M73/M80 roundabout cluster makes {name} a straightforward visit from our northern base — we stage kit for estate roads and quieter cul-de-sacs alike.",
    "We often ladder up on post-war terraces near {name}, then reposition to larger detached plots off the main artery without long dead mileage.",
    "If you border Croy or Castlecary dips, mention it when booking — gradients change how we set water recovery on drive washes.",
    "Kilsyth Road runs and Twechar dips are normal Tuesday routes — {name} customers tend to cluster with neighbouring villages on one visit.",
    "New-town grids near {name} mean predictable gutter lengths; we price fairly because access is usually straightforward once we're onsite.",
    "We batch {name} with jobs toward {n1} on the same day where we can — it keeps travel time down and means we're not rushing either job.",
    "Cul-de-sac layouts common around {name} make van access easy, but we still check overhead cables and low trees before ladders go up.",
    "If your street backs onto {n2}, mention it when booking — we sometimes coordinate two properties sharing a boundary gutter on the one visit.",
    "Roads out toward {nearby} can be quieter for early starts — we offer first-slot bookings for {name} customers who want minimal disruption.",
    "We know which {name} estates have shared driveways or private roads, and plan access and water recovery accordingly before the day of the job.",
  ],
  "north-lanarkshire-east": [
    "We cross the Coatbridge/Airdrie links daily — bookings from {name} usually align with Plains, Chapelhall or Glenboig on the calendar.",
    "Whifflet and Sunnyside crossings are factored into arrival times near {name}; we text if rail bridge traffic shifts the window.",
    "East Lanarkshire semis mean standard ladder setups — crews working {name} keep footprint tight so neighbours retain parking.",
    "We plan around Calder canalside humidity near some {name} postcodes — extra drying passes on fascia cleans when needed.",
    "If you mention Gartcosh business park runs, we can schedule after-shift hours so driveways reopen before the morning commute.",
    "We regularly pair {name} with jobs toward {n1} and {n2} in the same run, which keeps quotes fair on mileage.",
    "Rail crossing closures near {name} are built into our scheduling — we allow a buffer so appointments don't slip on the day.",
    "Terraced streets around {name} often mean tighter parking; we bring compact kit so we're not holding up the street while we work.",
    "If you're just off the main road toward {nearby}, let us know when booking — some back lanes need a shorter hose run planned in advance.",
    "We keep a regular weekly slot for {name} and the surrounding streets, so repeat gutter or window cleans can be booked on a rolling basis.",
  ],
  "falkirk-stirling": [
    "{name} calls often stack along the A9/A91 fingers — we batch Falkirk, Larbert and Polmont days to keep carbon and cost sensible.",
    "Grangemouth industrial breeze can dust cars and patio glass; {name} customers near the Forth notice quicker wins after a window and PVC pass.",
    "Stirling Approach traffic is built into ETA texts for {name} — crews carry enough hose to reach rear gardens off main roads.",
    "Bridge of Allan stone and Linlithgow tight lanes need smaller vans sometimes; mention access when you're central in {name}.",
    "We coordinate around Bo'ness and Brightons dips when hopping from {name} — saves you paying for duplicated travel fees.",
    "We batch {name} bookings with {n1} and {n2} where the calendar allows, which keeps travel costs off your quote.",
    "Riverside and canal-adjacent streets near {name} sometimes need extra care with water recovery — we plan for it before the van arrives.",
    "If you're on one of the older lanes toward {nearby}, let us know the width when booking so we bring the right size of kit.",
    "Commuter-heavy mornings around {name} mean we favour mid-morning or early-afternoon slots to avoid the worst of the A9/A91 traffic.",
    "We keep a running list of regular {name} customers for gutter and window maintenance, so rebooking is a quick message rather than a full requote.",
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
    "Dormer conversions are common on older {name} streets — we check roof access carefully before deciding whether a ladder or tower is the safer option.",
    "Render finished in the last decade round {n1} responds differently to softwash than the original 1970s coats still found nearer {name} centre.",
    "Driveways in {name} range from block paving to plain concrete — we adjust pressure and dwell time so neither surface gets over- or under-treated.",
    "Corner properties toward {n2} often have two exposed elevations rather than one — we quote for both once we've seen the extent of staining.",
    "Flat-roofed extensions common on {name} semis collect their own debris separate from the main roof — worth flagging when you book a gutter clear.",
    "Older sash windows near {nearby} need a gentler touch than modern uPVC frames — we adjust technique rather than treating every window the same.",
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
    "New-build estates near {name} tend to have shallower roof pitches than older stock toward {n1} — that changes how quickly moss can grip.",
    "Semi-detached bungalows common round {name} usually need less scaffolding than the two-storey terraces toward {n2} — we quote each on its own access.",
    "Block-paved driveways near {nearby} are popular enough that we carry joint-safe attachments as standard, not just a bare pressure lance.",
    "Timber-clad porches on some {name} builds need extra care during softwashing — we test a small area first before committing to a full treatment.",
    "Larger plots out toward {n3} often mean longer hose runs to rear patios — factored into the quote rather than a surprise on the day.",
    "PVC soffits on {name}'s newer estates still discolour despite being only a decade or so old — traffic film travels further than people expect.",
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
    "Sandstone terraces near {name} need a different softwash strength to the brick semis further toward {n1} — we check the substrate before quoting.",
    "Bay-fronted villas round {nearby} often have decorative stonework above windows — we work slower and at lower pressure to protect the detailing.",
    "Modern infill housing near {name} sits alongside much older stock toward {n2} — two very different cleaning jobs on the same street sometimes.",
    "Long rear gardens common on {name} plots mean gutter debris and driveway grime build up out of sight until it's pointed out.",
    "Cast-iron guttering still found on some {name} villas needs manual clearing rather than a vacuum system — we check before quoting a price.",
    "Shared closes and back courts near {nearby} need extra care with runoff — we use containment mats so neighbouring doors stay dry.",
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
    "Detached villas around {name} tend to have larger roof areas than the terraces toward {n1} — we scope the job by roof size, not just postcode.",
    "Monocouche render popular on newer {name} builds needs a different dwell time to the older pebbledash still common toward {n2}.",
    "Riverside plots near {nearby} often have longer driveways and more paving overall — worth mentioning square footage when you ask for a quote.",
    "Conservation-area streets in parts of {name} mean we check for listed status before using anything beyond a gentle clean on stonework.",
    "Bungalow estates near {name} are generally quicker ladder-free jobs than the two-storey builds further toward {n3}.",
    "Harled gables common around {nearby} hide moss in the texture itself — a simple rinse doesn't shift it the way a proper softwash does.",
  ],
};

const LOCAL_LANDMARK_ANGLES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "From {name} toward {n1}, you're minutes off the commuter spine into Glasgow—properties here benefit from crews that know pinch points on local A-roads and can plan quiet arrival windows.",
    "Tree-lined approaches near {nearby} mean autumn leaf loads spike hard; we prioritise gutter clearing once sycamore and birch start dropping.",
    "Homes tucked toward {n3} pick up Campsie flank winds—roof moss often gathers on north-west pitches first, which is exactly where homeowners rarely look until stains appear indoors.",
    "If you mention Lenzie Moss or Mugdock approaches, crews factor mud on tyres and kit—driveway protection stays down until washes finish.",
    "Properties backing onto parkland corridors near {name} see squirrels and pine needle debris—manual clearing beats blind vacuuming.",
    "{name}'s canal and rail heritage means some streets still have older drainage runs—we check these don't back up before we start clearing gutters.",
    "Local golf courses and playing fields near {n1} mean mown-grass debris ends up in gutters as much as leaf litter through summer.",
    "Commuters between {name} and {n2} often book us for a weekend job so the property's presentable without taking a day off work.",
    "Established gardens around {name} mean mature trees overhang more rooflines than newer estates—autumn gutter clears matter more here.",
    "Streets closer to {nearby} sit slightly lower than {name} centre—water table effects show up as persistent damp patches on ground-floor render.",
    "Weekend match traffic near local grounds can affect access timing around {name}—we plan bookings around it where relevant.",
  ],
  "cumbernauld-kilsyth": [
    "Between Cumbernauld's roundabout network and hills toward Kilsyth, crews clock extra wind chill on scaffold-free ladder sets—safety pacing keeps {name} jobs smooth.",
    "Wooded slopes toward {nearby} dump pollen films each spring—we pair fascia cleans with rinse-downs where customers see yellow dust on PVC.",
    "Residents off the arterial links into {name} often notice motorway dust on renders facing trunk roads—we softwash with pre-soak dwell to lift it.",
    "Estates bordering Castlecary dips see cold pooling fog—north faces stay damp longer; we document before/after photos for insurance interest where needed.",
    "Twechar and Queenzieburn feeders keep us near {name} weekly—paired scheduling reduces downtime for neighbours wanting the same weekday.",
    "Canal towpath damp near parts of {name} keeps nearby render a shade greener than streets set further back from the water.",
    "Hillside plots toward {n1} catch more direct wind than sheltered {name} streets—we note this when advising how often a roof clean is worth it.",
    "New-town cycle paths and greenways near {name} mean more overhanging trees than older grid layouts—seasonal leaf clearance matters more here.",
    "Properties near {n2} bordering open farmland pick up more windblown dust on render than those tucked further into the estate.",
    "Local quarry and industrial history round {name} means some older aggregates in driveways stain differently—worth a look before quoting a pressure wash.",
    "Community events and school runs near {name} centre mean we favour early or late slots to keep access clear on busy streets.",
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
    "Retail park traffic near {name} kicks up road film that settles on render facing the main road—more frequent washing keeps the front elevation presentable.",
    "Older mining rows toward {n1} sit close together with shared boundary walls—we coordinate carefully so runoff doesn't cross onto a neighbour's path.",
    "Established hedgerows around {name} shed heavily in autumn—gutters here fill faster than on newer, more open estates nearby.",
    "Canal-adjacent stretches near {n2} hold humidity longer after rain—patios and monoblock in these spots need a slightly more frequent clean.",
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
    "Historic routes through {name} mean some driveways are original cobble or setts under later tarmac—pressure is adjusted once we see what's actually there.",
    "Forth-facing streets near {n1} pick up a fine salt haze on windows and PVC that inland properties toward {name} centre don't get as much.",
    "Local parkland and river walks near {name} mean more foot traffic tracking debris onto front paths—regular cleans keep entrances looking cared for.",
    "Distillery and industrial-heritage streets toward {n2} have some of the oldest render in the area—softwash chemistry is tested on a small patch first.",
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
  return [nb, climate];
}

const HERO_TAGLINES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "North Glasgow's roof, render & driveway specialists",
    "Trusted exterior cleaning north of the city",
    "Local crews covering {name} and the Glasgow fringe",
    "Exterior cleaning built for wet west-coast weather",
  ],
  "cumbernauld-kilsyth": [
    "Exterior cleaning for the Cumbernauld & Kilsyth belt",
    "Local specialists for new-town roofs and driveways",
    "Trusted around {name} and the surrounding villages",
    "Weather-proofing homes between Cumbernauld and Kilsyth",
  ],
  "north-lanarkshire-east": [
    "North Lanarkshire's exterior cleaning specialists",
    "Trusted crews from Coatbridge to Airdrie and beyond",
    "Local exterior cleaning for {name} and the surrounds",
    "Roof, render and driveway care across East Lanarkshire",
  ],
  "falkirk-stirling": [
    "Exterior cleaning across the Falkirk & Stirling corridor",
    "Local specialists from the Forth to the Trossachs fringe",
    "Trusted around {name} and the wider corridor",
    "Weather-proofing homes between Falkirk and Stirling",
  ],
};

/** Short tagline pill shown above the hero heading */
export function getLocationHeroTagline(location: Location): string {
  return ph(pick(HERO_TAGLINES[location.regionId], location.slug, "hero-tagline"), location);
}

function nearbyClause(location: Location): string {
  return location.neighborhoods && location.neighborhoods.length > 0
    ? " and nearby areas"
    : "";
}

/** Intro sentence templates for the "Why Choose {BUSINESS_NAME}?" block — coverage + full service list. */
const WHY_CHOOSE_INTRO_TEMPLATES: ((location: Location) => string)[] = [
  (l) =>
    `At ${BUSINESS_NAME} we deliver professional exterior cleaning across ${META_AREA_PHRASE}—including ${l.name}${nearbyClause(l)}. From roof steam cleaning and moss removal to render softwashing, driveway, gutter, PVC and window cleaning, we bring safe, effective service to your property.`,
  (l) =>
    `${BUSINESS_NAME} provides professional exterior cleaning throughout ${META_AREA_PHRASE}, including ${l.name}${nearbyClause(l)}. Our services cover roof steam cleaning, moss removal, render softwashing, driveway, gutter, PVC and window cleaning—all carried out at your property.`,
  (l) =>
    `Homeowners and businesses across ${META_AREA_PHRASE} choose ${BUSINESS_NAME} for professional exterior cleaning, including in ${l.name}${nearbyClause(l)}. We handle roof steam cleaning, moss removal, render softwashing, driveway, gutter, PVC and window cleaning.`,
  (l) =>
    `${BUSINESS_NAME} brings professional exterior cleaning to ${l.name}${nearbyClause(l)} and the rest of ${META_AREA_PHRASE}. That covers roof steam cleaning, moss removal, render softwashing, driveway, gutter, PVC and window cleaning.`,
  (l) =>
    `Serving ${l.name}${nearbyClause(l)} as part of our coverage across ${META_AREA_PHRASE}, ${BUSINESS_NAME} delivers professional exterior cleaning—from roof steam cleaning and moss removal to render softwashing, driveway, gutter, PVC and window cleaning.`,
];

/** Closing assurance line — insured, quality, customer satisfaction. */
const WHY_CHOOSE_ASSURANCE_LINES = [
  "Fully insured and with a focus on quality and customer satisfaction on every job.",
  "Every job is fully insured, with quality and customer satisfaction as the priority.",
  "We're fully insured, and quality plus customer satisfaction come as standard on every visit.",
  "Fully insured throughout, with a genuine focus on getting the quality and the customer experience right.",
  "Insurance is in place on every job, alongside a consistent focus on quality and customer satisfaction.",
];

/** "Why choose us" block — coverage/services intro, then an insured/quality assurance line. */
export function getLocationChooseUsParagraphs(location: Location): string[] {
  const intro = pickVariant(WHY_CHOOSE_INTRO_TEMPLATES, location.slug, "choose-intro")(location);
  const assurance = pickVariant(WHY_CHOOSE_ASSURANCE_LINES, location.slug, "choose-assurance");
  return [intro, assurance];
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

const GALLERY_HEADINGS = [
  "See Our Work Around {name}",
  "{name} Exterior Cleaning Results",
  "Recent Jobs Near {name}",
  "Before & After: {name} and the Surrounding Area",
  "Roofs, Render and Driveways We've Cleaned Near {name}",
];

/** Location-flavoured heading for the gallery section */
export function getLocationGalleryHeading(location: Location): string {
  return ph(pick(GALLERY_HEADINGS, location.slug, "gallery-heading"), location);
}

const PROCESS_INTRO_LINES: Record<LocationRegionId, string[]> = {
  "north-glasgow-surrounds": [
    "Same process whether you're in {name} itself or out toward {n1}—no surprises once we're on site.",
    "We keep booking and payment simple for {name} customers—here's exactly what happens from quote to finish.",
    "Whether it's a first clean or a repeat visit, {name} jobs follow the same three steps below.",
  ],
  "cumbernauld-kilsyth": [
    "Same straightforward process for every {name} booking, from Cumbernauld's estates to quieter Kilsyth-side streets.",
    "We keep it simple for {name} customers—quote, clean, done, with no hidden extras.",
    "Whether you're central in {name} or out toward {n2}, the steps below are exactly the same.",
  ],
  "north-lanarkshire-east": [
    "Same process for every {name} job, whether it's a quick gutter clear or a full exterior refresh.",
    "We keep booking simple for {name} and {n1}—here's what to expect from quote to completion.",
    "No surprises for {name} customers—the three steps below are how every job runs.",
  ],
  "falkirk-stirling": [
    "Same process whether you're in {name} or further out toward {n2}—quote, clean, done.",
    "We keep it simple for {name} customers along the Falkirk/Stirling corridor—here's how it works.",
    "Whether it's a one-off or a repeat booking, {name} jobs follow the steps below.",
  ],
};

/** Short sub-line shown above the generic "How It Works" steps on location hub pages */
export function getLocationProcessIntro(location: Location): string {
  return ph(pick(PROCESS_INTRO_LINES[location.regionId], location.slug, "process-intro"), location);
}

const SERVICE_AREAS_INTRO_LINES = [
  "{name} sits within our regular coverage, alongside {nearby} and the rest of {region}—here's the full list of towns we work in.",
  "We cover {name} as part of {region}; if you're near {nearby} the same crews and pricing apply.",
  "{name} is one of dozens of towns we cover across {region}—see the full directory below.",
  "Based near {name}? You're covered, along with {nearby} and the wider {region} area.",
];

/** Location-flavoured intro line above the static service-areas directory */
export function getLocationServiceAreasIntro(location: Location): string {
  return ph(pick(SERVICE_AREAS_INTRO_LINES, location.slug, "areas-intro"), location);
}

/** Unique meta description (~150–160 chars) */
/** Truncate at the last whole word within maxLen, appending an ellipsis only if cut. */
function truncateAtWord(text: string, maxLen: number): string {
  if (text.length <= maxLen) return text;
  const cut = text.slice(0, maxLen);
  const lastSpace = cut.lastIndexOf(" ");
  return `${(lastSpace > 0 ? cut.slice(0, lastSpace) : cut).trim()}…`;
}

export function getLocationMetaDescription(location: Location): string {
  const climate = ph(pick(CLIMATE_LINES[location.regionId], location.slug, "meta"), location);
  const firstSentence =
    climate.split(/[.—]/)[0]?.trim() || `Exterior cleaning in ${location.name}`;
  const hook = truncateAtWord(firstSentence, 112);
  const nearby =
    location.neighborhoods && location.neighborhoods.length > 0
      ? ` Local to ${location.neighborhoods.slice(0, 2).join(" & ")}.`
      : "";
  const out = `${hook}. Roof steam, softwash render, driveways, gutters & PVC.${nearby} Free quote ${location.name}.`;
  if (out.length <= 160) return out;
  const shortOut = `${hook}. Exterior cleaning ${location.name}: roof, render, drive, gutters, PVC, windows — free quote.`;
  if (shortOut.length <= 160) return shortOut;
  return `${truncateAtWord(hook, 75)} Exterior cleaning ${location.name}: free quote.`;
}
