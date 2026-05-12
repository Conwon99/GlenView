# SEO Audit – Double O Detailing

> **Superseded:** Historical export. Current site: **GlenView Exterior Cleaning** — `glenviewexteriorcleaning.co.uk`.

**Site:** doubleodetailing.co.uk  
**Audit date:** February 2026  
**Scope:** Technical SEO, on-page SEO, structure, and recommendations.

---

## 1. What’s working well

### 1.1 Meta and technical basics
- **Unique titles** on all audited pages (home, about, services, contact, location and service pages) with brand and topic.
- **Meta descriptions** set per page, length generally 150–160 characters, with location/service keywords.
- **Canonical URLs** set on every page via Layout; no duplicate canonicals found.
- **Robots:** `index, follow` by default; thank-you page correctly uses `noindex={true}`.
- **robots.txt** allows crawling, disallows `/thank-you`, and references the sitemap.

### 1.2 Sitemap and crawlability
- **Dynamic sitemap** (`/sitemap.xml`) includes static pages, `/locations`, all 14 location landings, and all 112 location–service URLs.
- **Priorities** are sensible (home 1.0, location landings 0.8, location–service 0.7).
- **lastmod** and **changefreq** are present.

### 1.3 Structured data
- **LocalBusiness** (main) with name, address, geo, areaServed (all 14 locations + Central Scotland), serviceType, openingHours, aggregateRating, sameAs.
- **Location pages** get an extra LocalBusiness with location-specific name, address, geo, areaServed.
- **Organization** with contactPoint and sameAs.
- Schema is valid JSON-LD and follows common LocalBusiness/Organization patterns.

### 1.4 Social and Open Graph
- **og:title, og:description, og:image, og:url, og:type, og:site_name, og:locale** set.
- **Twitter** card meta (summary_large_image) set.
- Image URL is absolute (site URL + path or full URL).

### 1.5 Content and structure
- **Single H1 per page** on home, about, gallery, services, terms, thank-you, and location/service pages.
- **Breadcrumbs** on location and location–service pages (Home > Locations > [Location] [> Service]); good for UX and SEO.
- **Internal linking:** Locations index, footer locations, homepage “Areas We Cover” link to location pages; location pages link to location–service pages.
- **Mobile:** Viewport meta and responsive layout (Tailwind) in place.
- **Semantic HTML:** `<main>`, `<nav>`, `<section>` used; heading hierarchy generally H1 → H2 → H3.

### 1.6 Analytics and tracking
- Google Analytics (gtag) present; CTA/phone events used for tracking.

---

## 2. Issues and recommendations

### 2.1 Contact page – missing H1 (medium)
- **Issue:** The contact page only has an **H2** (“Request a Free Quote”) in `QuoteSection`; there is no H1.
- **Recommendation:** Add a single H1 on the contact page, e.g. “Contact Us” or “Get a Free Quote”, and keep the current line as H2 or adjust hierarchy so the main heading is H1. Prefer adding it in `contact.astro` above the QuoteSection so the contact page has exactly one H1.

### 2.2 Image alt text (medium)
- **Issue:** Many images use **empty or generic alt (`alt=""` or `alt="Icon"`)**:
  - Service cards (e.g. `ServiceCard.tsx`): main service image has `alt=""`; it should describe the service (e.g. “Machine polishing – paint correction”).
  - Decorative icons (arrow, arrow-8, etc.): `alt=""` is correct for decorative images; a few use `alt="Icon"` – consider `alt=""` and `aria-hidden="true"` where purely decorative.
  - Hero/LocationHero and some CTAs: arrow/chevron images with `alt=""` – fine if decorative.
- **Recommendation:**
  - **Content images** (service photos, gallery, about-us): use short, descriptive alt (e.g. “Ceramic coating application on car paintwork”, “Before and after machine polishing – Glasgow”).
  - **Decorative** icons/arrows: keep `alt=""` and ensure they are not read as critical content.
- **Note:** Gallery grid and LocationServiceIntro already use descriptive or contextual alt in places; extend that pattern to `ServiceCard` and other content images.

### 2.3 Global keywords meta (low)
- **Issue:** Layout uses a **single, global `keywords` meta** (car detailing, Glasgow, etc.) on every page. Search engines largely ignore this tag, and it doesn’t reflect per-page topics.
- **Recommendation:** Either remove the keywords meta (simplest) or make it optional and pass page-specific keywords from important pages (e.g. location name + “car detailing” on location pages). Low priority.

### 2.4 Geo meta is global (low)
- **Issue:** `geo.region`, `geo.placename`, `geo.position` in Layout are fixed to Glasgow. Location pages don’t override these.
- **Recommendation:** For location landing pages, pass optional geo props into Layout and output location-specific geo meta (e.g. for Milngavie, Stirling). Improves local relevance; optional.

### 2.5 Title/description length and consistency
- **Current:** Titles and descriptions are generally within common limits (titles ~50–60 chars, descriptions ~150–160).
- **Recommendation:** Keep titles under ~60 characters and descriptions under ~160 where possible. Location–service titles (e.g. “Machine Polishing Milngavie | Who’s the Best…”) are long; consider trimming if you see truncation in search results, but clarity and keywords are more important than a strict character count.

### 2.6 Sitemap and URL format (low)
- **Current:** Sitemap uses URLs **without** trailing slashes (e.g. `https://doubleodetailing.co.uk/milngavie`). Astro build outputs `index.html` in folders, so live URLs may be with or without trailing slash depending on server config.
- **Recommendation:** Ensure the live server serves a single URL format (either with or without trailing slash) and that canonicals and sitemap match that. Add a redirect from the other form if needed (e.g. `/milngavie/` → `/milngavie` or vice versa).

### 2.7 Page-specific schema (optional)
- **Current:** Service pages (e.g. machine-polishing, ceramic-coatings) and location–service pages don’t output **Service** or **FAQPage** schema.
- **Recommendation:** Consider adding **Service** schema (and optionally **FAQPage** where you have FAQ sections) on main service and location–service pages to support rich results. Nice-to-have, not critical.

### 2.8 Core Web Vitals and performance (informational)
- **Fonts:** Multiple Google Fonts (Figtree, Bungee, Courier Prime, Luckiest Guy, Manrope, Playfair Display); consider reducing to 2–3 and using `font-display: swap` (already using `display=swap` in the link).
- **Images:** Some images are large (e.g. hero, gallery). Consider responsive images (`srcset`/`sizes`) and modern formats (WebP/AVIF) where possible.
- **LCP:** Hero images and above-the-fold content are key; ensure hero images are appropriately sized and lazy-loading is not used for the main hero image.

---

## 3. Checklist summary

| Area                 | Status   | Notes                                              |
|----------------------|----------|----------------------------------------------------|
| Unique titles        | Good     | All pages have unique, relevant titles             |
| Meta descriptions    | Good     | Set and unique per page                            |
| Canonical URLs       | Good     | Set on all pages                                   |
| robots.txt           | Good     | Allows crawl, disallow thank-you, sitemap ref      |
| Sitemap              | Good     | Dynamic, includes all location/service URLs        |
| Noindex thank-you    | Good     | Correctly noindexed                                |
| LocalBusiness schema | Good     | Main + location-specific on location pages         |
| Organization schema  | Good     | Present                                            |
| OG / Twitter         | Good     | Set with absolute image URL                        |
| H1 per page          | Issue    | Contact page has no H1 (only H2)                   |
| Image alt text       | Issue    | Many content images with empty or generic alt      |
| Breadcrumbs          | Good     | On location and location–service pages             |
| Internal linking     | Good     | Locations, services, footer                        |
| Mobile viewport      | Good     | Set and layout responsive                          |

---

## 4. Priority actions

1. **High:** Add a single H1 to the contact page (e.g. in `contact.astro`).
2. **Medium:** Add descriptive `alt` text to content images (especially `ServiceCard` service images and any other key imagery).
3. **Low:** Align sitemap/canonicals with the chosen URL format (trailing slash or not) and add redirects if needed.
4. **Optional:** Per-page or per-location geo meta; Service/FAQPage schema on service pages; trim global keywords or make them page-specific.

---

## 5. Files to touch for fixes

- **Contact H1:** `src/pages/contact.astro` – add an H1 above or within the main content.
- **Service card alt:** `src/sections/ServicePageServices/components/ServiceCard.tsx` – use `alt={props.title}` or a dedicated alt prop (e.g. “Machine polishing service”).
- **Other content images:** Search for `alt=""` and `alt="Icon"` in `src` and update non-decorative images to descriptive alt.
- **Layout (optional):** `src/layouts/Layout.astro` – optional `keywords` and geo overrides for location pages.

This audit is based on a static review of the codebase; for Core Web Vitals, indexation status, and search performance you should use Google Search Console, PageSpeed Insights, and a crawler (e.g. Screaming Frog) on the live site.
