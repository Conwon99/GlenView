# Location page pruning — October 2026

Source: Google Search Console export, Web search, "last 16 months" (data runs May–Oct 2026).

## Why

Every location × service combination (38 towns × 8 services = 304 pages) was generated
from the same template. 280 of them earned **zero clicks**, and 16 never appeared in
search at all. A large set of near-identical, low-value local pages is what Google's
doorway-page policy targets, and it can drag down the whole site.

## What changed

| Page type | Before | After | Rule |
| --- | --- | --- | --- |
| Town + service (`/town/service/`) | 304 | 24 | Kept only pages with ≥1 click |
| Town hubs (`/town/`) | 38 | 32 | Removed hubs with 0 clicks (hub + all its service pages) and avg position worse than 60 |
| Total built pages | ~360 | 75 | |

Removed town hubs, merged into the nearest larger town (all 301):

| Removed | Clicks | Impressions | Avg position | Redirects to |
| --- | --- | --- | --- | --- |
| /croy/ | 0 | 392 | 60.7 | /cumbernauld/ |
| /dullatur/ | 0 | 327 | 77.7 | /cumbernauld/ |
| /banton/ | 0 | 598 | 66.2 | /kilsyth/ |
| /haggs/ | 0 | 325 | 68.9 | /banknock/ |
| /camelon/ | 0 | 258 | 74.7 | /falkirk/ |
| /stenhousemuir/ | 0 | 259 | 67.7 | /larbert/ |

Every removed town + service page 301-redirects to its town hub (rules in `vercel.json`).
Town hubs now link a service card to the local page when it exists and to the main
service page (e.g. `/patio-cleaning/`) otherwise. The sitemap lists only published pages.

Kept town + service pages are listed in `src/data/locationServicePages.ts`.

## Next review (Jan 2027)

- Town hubs with 0 clicks that were kept because they still get impressions at
  positions ~40–58 (e.g. Coatbridge 3,076 impr, Falkirk 2,175, Lenzie, Polmont,
  Salsburgh, Queenzieburn, Glenboig, Denny, Linlithgow, Auchinloch): if still 0 clicks,
  merge them the same way.
- Kept town + service pages with only 1 click: drop any that stay at 1 click.
- In Search Console, submit the new sitemap and check "Page with redirect" grows as
  the old URLs drop out.
