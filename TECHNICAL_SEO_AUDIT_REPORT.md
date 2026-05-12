# Technical SEO Audit Report — Jimbos Cleaning

> **Superseded:** Crawl data references a prior domain. Production is **GlenView Exterior Cleaning** (`glenviewexteriorcleaning.co.uk`); image paths have moved from `/jimbos/` to `/portfolio/`.

**Source:** Screaming Frog crawl export (`internal_all.csv`)  
**Total URLs crawled:** 336
**HTML pages:** 317
**200 OK indexable HTML pages:** 159 *(content/meta/title/H1 metrics below use this set)*

---

## Executive Summary

- **Thin content:** 2 HTML page(s) with under 300 words
- **Canonical/URL consistency:** 158 page(s) with canonical pointing to different URL (trailing slash)
- **Low inlinks:** 158 page(s) with ≤2 inlinks
- **Deep crawl depth:** 126 page(s) at depth ≥4
- **Slow redirects (>1s):** 1 URL(s)
- **Meta description too short (<120 chars):** 3 page(s)
- **Meta description too long (>160 chars):** 133 page(s)
- **Non-HTML indexable:** 19 asset(s) (e.g. CSS) marked indexable
- **Missing H1:** 3 HTML page(s)
- **Missing H2:** 1 HTML page(s) with no H2

**Impact:** These issues can dilute link equity, cause duplicate content signals, and reduce crawl efficiency. Fixing canonicals, consolidating duplicates, and addressing thin/orphan pages will have the highest impact.

---

## Why the site may not be indexing

The crawl points to **one main cause** that can stop Google from indexing most pages:

### Canonical vs redirect conflict (critical)

- **Only 1 HTML URL is “Indexable”** in the crawl: the homepage. All other HTML URLs are “Non-Indexable” (either “Redirected” or “Canonicalised”).
- **What’s happening:**
  1. **No trailing slash** (e.g. `jimboscleaning.com/troon`) → **301** → **with trailing slash** (e.g. `jimboscleaning.com/troon/`).
  2. The **trailing-slash URL** returns **200 OK** but has **`<link rel="canonical" href="https://jimboscleaning.com/troon">`** (no slash).
  3. So the **canonical target** (`/troon`) **never returns 200** — it always redirects to `/troon/`.

- **Why that hurts indexing:**  
  Google is told “the canonical version of this page is `/troon`”, but when it requests `/troon` it gets a redirect to `/troon/`. The page that actually loads (`/troon/`) then says “my canonical is `/troon`”. There is no stable URL that both returns 200 and is the declared canonical. Search engines can respond by **not indexing either URL** or by being unsure which to index, which often leads to **poor or no indexing** for those pages.

- **Fix:**  
  Pick a single URL style (either with or without trailing slash). Then:
  - Use **301** from the other style to the chosen one.
  - Set **canonical on every page to the same style** (the final URL after redirects).
  - Use that same style in **internal links and sitemap**.  
  Example: if you keep **trailing slash** as the final URL, set canonical to `https://jimboscleaning.com/troon/` (with slash) on the Troon page and 301 `https://jimboscleaning.com/troon` → `https://jimboscleaning.com/troon/`.

### Other checks (not blocking in this crawl)

- **robots.txt** allows `/` and only disallows `/thank-you`; it is not blocking main content.
- **Meta robots** on the crawled pages are “index, follow”; no noindex on key pages in this export.
- **No 404s** in the crawl; **no 302s** (only 301s), so redirect type is not the issue — the conflict is between **canonical** and **redirect target**.

---

## Detailed Findings

### 1. Thin Content Detection

| Issue | Count | Notes |
|-------|-------|--------|
| Word count < 300 | 2 | Excludes redirects/empty; only pages with word count > 0 |
| Low text ratio (<3%) | 1 | Low content-to-code ratio |
| Missing H1 | 3 | |
| No H2 tags | 1 | |
| Title < 30 chars | 0 | |
| Meta description < 120 chars | 3 | |

**Sample — thin content (word count < 300):**
- [https://jimboscleaning.com/gallery/](https://jimboscleaning.com/gallery/) — 83 words
- [https://jimboscleaning.com/contact/](https://jimboscleaning.com/contact/) — 146 words

**Sample — missing H1:**
- https://jimboscleaning.com/about/
- https://jimboscleaning.com/contact/
- https://jimboscleaning.com/services/


### 2. Duplicate Content Issues

- **Exact duplicate titles:** 0 unique title(s) used on multiple URLs.
- **Duplicate meta descriptions:** 0 meta(s) repeated across URLs.
- **Canonical/URL mismatch (e.g. trailing slash):** 158 page(s). Trailing-slash URLs canonicalise to non-trailing (or vice versa), while 301s may send users to the opposite variant — can confuse crawlers and dilute signals.
  - https://jimboscleaning.com/troon/ → canonical: https://jimboscleaning.com/troon
  - https://jimboscleaning.com/paisley/ → canonical: https://jimboscleaning.com/paisley
  - https://jimboscleaning.com/prestwick/ → canonical: https://jimboscleaning.com/prestwick
  - https://jimboscleaning.com/irvine/ → canonical: https://jimboscleaning.com/irvine
  - https://jimboscleaning.com/largs/ → canonical: https://jimboscleaning.com/largs


### 3. Internal Link Structure

| Metric | Count |
|--------|-------|
| Pages with >100 unique outlinks | 0 |
| Orphan pages (0 inlinks, 200 OK) | 0 |
| Pages with ≤2 inlinks | 158 |
| Pages at crawl depth ≥4 | 126 |

**Sample — deep depth (≥4):**
- https://jimboscleaning.com/troon/window-cleaning/ — depth 4
- https://jimboscleaning.com/troon/gutter-cleaning/ — depth 4
- https://jimboscleaning.com/troon/roof-steam-cleaning/ — depth 4
- https://jimboscleaning.com/troon/driveway-cleaning/ — depth 4
- https://jimboscleaning.com/troon/render-softwashing/ — depth 4
- https://jimboscleaning.com/troon/pvc-white-cleaning/ — depth 4
- https://jimboscleaning.com/paisley/roof-steam-cleaning/ — depth 4
- https://jimboscleaning.com/paisley/gutter-cleaning/ — depth 4
- https://jimboscleaning.com/paisley/pvc-white-cleaning/ — depth 4
- https://jimboscleaning.com/paisley/driveway-cleaning/ — depth 4


### 4. Redirects

- Total redirects (301+302): 158
- Temporary (302): 0 — prefer 301 for permanent moves.
- Slow redirects (response >1s): 1
**Slowest redirects (by response time):**
- https://jimboscleaning.com/renfrew/gutter-cleaning — 1.17s
- https://jimboscleaning.com/cumnock/driveway-cleaning — 0.94s
- https://jimboscleaning.com/locations — 0.93s
- https://jimboscleaning.com/about — 0.91s
- https://jimboscleaning.com/cumnock/gutter-cleaning — 0.89s

*(Redirect chains >3 hops and loops require full redirect chain export; not deducible from this flat URL list.)*


### 5. 404 Errors

No 404s found in this crawl.

*(Internal links pointing to 404s and broken external links require the Links or Response Codes report in Screaming Frog.)*


### 6. Meta Description Issues

| Issue | Count |
|-------|-------|
| No meta description | 0 |
| Too short (<120 chars) | 3 |
| Too long (>160 chars) | 133 |
| Duplicate meta descriptions | 0 |


**Sample — meta >160 chars:**
- https://jimboscleaning.com/about/ — 204 chars
- https://jimboscleaning.com/locations/ — 178 chars
- https://jimboscleaning.com/newton-mearns/ — 161 chars
- https://jimboscleaning.com/west-kilbride/ — 161 chars
- https://jimboscleaning.com/contact/ — 187 chars


### Other: Indexable Non-HTML Resources

**Resources (e.g. CSS) that are indexable:** 19. These should typically be noindex or excluded from indexing.
- https://jimboscleaning.com/jimbos/gal5.jpg (image/jpeg)
- https://jimboscleaning.com/jimbos/drivewaycleaningjimbo.jpg (image/jpeg)
- https://jimboscleaning.com/jimbos/gal6.jpg (image/jpeg)
- https://jimboscleaning.com/jimbos/pvc%20clean%20jimbo.jpg (image/jpeg)
- https://jimboscleaning.com/jimbos/gutter%20cleaning.webp (image/webp)
- https://jimboscleaning.com/jimbos/gal4.jpg (image/jpeg)
- https://jimboscleaning.com/jimbos/gal3.jpg (image/jpeg)
- https://jimboscleaning.com/jimbos/gal2.jpg (image/jpeg)
- https://jimboscleaning.com/logo.png (image/png)
- https://jimboscleaning.com/_astro/_service_.Dgihpmma.css (text/css; charset=UTF-8)

---

## Priority Matrix

| Priority | Issue | SEO impact | Ease of fix |
|----------|--------|------------|--------------|
| **P0** | Canonical/URL consistency (trailing slash vs 301) | High — duplicate signals, crawl waste | Medium — config/redirect alignment |
| **P0** | Duplicate titles & meta descriptions | High — dilution, CTR | Low — unique copy per URL |
| **P1** | Orphan & very low-inlink pages | Medium — discovery, equity | Medium — add internal links |
| **P1** | Missing H1 / thin content / missing meta | Medium — relevance, snippets | Low — content & meta |
| **P1** | 302 → 301 where move is permanent | Medium — link equity | Low — server config |
| **P2** | High outlinks, deep depth | Lower — UX/crawl efficiency | Medium — IA/navigation |
| **P2** | Meta length (short/long), non-HTML indexable | Lower — snippets/crawl | Low — meta & robots |
| **P2** | Slow redirects | Lower — UX | Medium — server/CDN |

---

## Actionable Recommendations

1. **Canonical & trailing slash:** Choose one URL form (with or without trailing slash). Implement 301 from the other form to the chosen one, and set canonical on every page to that same form. Ensure internal links use the chosen form.

2. **Titles & meta:** Give every important HTML page a unique title (50–60 chars) and unique meta description (120–160 chars). Fix duplicate titles and metas first on location/service pages.

3. **Thin content & H1:** Add or expand content on pages with <300 words where the page is meant to rank. Ensure every template has a single, relevant H1; add H2s for structure.

4. **Orphans & inlinks:** Link to key location/service pages from the homepage, main nav, and hub pages (e.g. locations index). Add contextual links in body content.

5. **Redirects:** Replace 302 with 301 for permanent moves. Investigate redirect chains in Screaming Frog (Redirect Chains tab) and collapse to a single hop where possible. Optimise server response time for redirects.

6. **404s:** Add redirects to the most relevant live page or remove/update internal links. For external broken links, fix or remove.

7. **Non-HTML indexable:** Add `X-Robots-Tag: noindex` or ensure robots.txt / meta noindex for CSS/JS if they are being indexed.

---

## Data for Visualisations

Use the counts below to build charts (e.g. bar chart by issue type, pie of indexability, histogram of word count).

| Category | Count |
|----------|-------|
| Thin content (word count <300) | 2 |
| Duplicate titles | 0 |
| Duplicate meta descriptions | 0 |
| Canonical/URL mismatch | 158 |
| Pages with >100 outlinks | 0 |
| Orphan pages | 0 |
| Pages with ≤2 inlinks | 158 |
| Depth ≥4 | 126 |
| 301 redirects | 158 |
| 302 redirects | 0 |
| 404 | 0 |
| Missing meta description | 0 |
| Meta too short | 3 |
| Meta too long | 133 |
| Missing H1 | 3 |
| Indexable non-HTML | 19 |

**Ongoing monitoring:** Re-run Screaming Frog monthly; filter by Indexability Status, Response Code, and the above columns. Set up custom extraction for canonical vs address and word count to track thin content.

### Issue distribution (bar chart)

```mermaid
xychart-beta
    title "Technical SEO issues by count"
    x-axis [Canonical, Meta>160, Depth≥4, Few inlinks, Non-HTML, Thin, Meta short, No H1, No H2]
    y-axis "Count" 0 --> 180
    bar [158, 133, 126, 158, 19, 2, 3, 3, 1]
```

*(Content-related counts are for 200 OK HTML pages only.)*
