# Technical SEO Audit – Jimbos Cleaning (jimboscleaning.com)

> **Superseded:** Historical notes for a prior brand/domain. The live codebase targets **GlenView Exterior Cleaning** at `glenviewexteriorcleaning.co.uk`. Ignore domain and brand names below unless migrating legacy URLs.

**Business:** Exterior cleaner | **Primary area:** Ayrshire  
**Audit date:** 2025 | **Status:** Implemented fixes + remaining checklist

---

## Phase 1: Crawlability & Indexation

### Issues found & fixes

| Issue | Impact | Status |
|-------|--------|--------|
| **robots.txt Sitemap URL wrong** – pointed to `doubleodetailing.co.uk` | **HIGH** – Search engines could use wrong sitemap or miss URLs. | **FIXED** – Sitemap set to `https://jimboscleaning.com/sitemap.xml`. |
| Thank-you page correctly excluded | N/A | `/thank-you` in `Disallow`, page has `noindex` – correct. |
| XML sitemap exists and is dynamic | OK | `src/pages/sitemap.xml.ts` generates URLs for static pages, locations, location+service. |
| No index bloat from duplicate params | OK | No parameter-based URLs; canonical on all pages. |

### Verification

- **robots.txt:** `Allow: /`, `Disallow: /thank-you`, `Sitemap: https://jimboscleaning.com/sitemap.xml`.
- **Action:** In Google Search Console, submit `https://jimboscleaning.com/sitemap.xml` if not already submitted.

---

## Phase 2: Canonicalization & URL Structure

### Current state

- **Canonical:** Set in `Layout.astro`; homepage `https://jimboscleaning.com/`, others `https://jimboscleaning.com{pathname}` (no trailing slash on subpages).
- **Duplicate URLs:** No parameter duplicates; one canonical per page.
- **Redirect:** `/packages` → `/contact` (intentional); do not add `/packages` to sitemap.

### Recommendation

- Keep current canonical strategy.
- In hosting (e.g. Netlify/Vercel), add 301: `https://www.jimboscleaning.com/*` → `https://jimboscleaning.com/*` if the site is meant to be non-www.

---

## Phase 3: On-Page Technical Signals

### Meta titles & descriptions

- All main pages have unique `<title>` and `<meta name="description">`.
- Titles are within safe length (many under 60 chars); a few location/service pages may be ~55–65 chars – acceptable.
- **Recommendation:** Keep titles under 60 characters where possible; include “Ayrshire” or “Glasgow” on key service pages (already done).

### Heading hierarchy

- **H1:** One main H1 per page (hero or main title).
- **H2:** Section headings (e.g. “Why Choose Jimbos Cleaning?”, “Frequently Asked Questions”).
- **Action:** When adding new pages, ensure single H1 and logical H2 → H3 order.

### Quick wins

- Homepage title: “Jimbos Cleaning - Professional Exterior Cleaning in Ayrshire & Glasgow” – good.
- Service pages: “{Service} - Jimbos Cleaning | Ayrshire & Glasgow” – good for local SEO.

---

## Phase 4: Schema & Structured Data

### Fixes applied

1. **LocalBusiness geo** – Updated to Irvine coordinates (`55.6190`, `-4.6551`) to match “2 West Bowhouse Way, Irvine”.
2. **LocalBusiness → Organization** – Added `parentOrganization: { "@id": "https://jimboscleaning.com/#organization" }` for a clear entity graph.
3. **Meta geo tags** – `geo.position` and `ICBM` updated to same coordinates.

### Already in place

- **LocalBusiness:** name, description, url, logo, image, telephone, address, geo, areaServed, serviceType, priceRange, openingHoursSpecification, sameAs, aggregateRating.
- **WebSite:** SearchAction for contact.
- **Organization:** Used as parent; contactPoint, sameAs.
- **Location pages:** Optional LocalBusiness with location-specific geo and areaServed.

### Validation

- Test with [Google Rich Results Test](https://search.google.com/test/rich-results) and [Schema.org Validator](https://validator.schema.org/).
- Ensure `logo.png` and `image` URLs return 200 and are the official logo.

---

## Phase 5: Performance & Core Web Vitals

### Implemented

- **Lazy loading:** Below-fold image in `LocationServiceIntro` set to `loading="lazy"`.
- **Gallery:** First 3 images eager, rest lazy (already in place).
- **Alt text:** Gallery images given descriptive, keyword-aware alt text (exterior/roof cleaning, Ayrshire, etc.).

### Recommended (next steps)

| Action | Impact | Effort |
|--------|--------|--------|
| **Convert images to WebP** | HIGH – smaller size, better LCP. | Medium – build step or CDN (e.g. Astro image or Cloudinary). |
| **Preload LCP image** | MEDIUM – hero image. | Low – `<link rel="preload" as="image" href="/hero/jimhero.jpg">` for above-the-fold hero. |
| **Defer non-critical JS** | MEDIUM – reduce blocking. | Low – ensure analytics (gtag) is `async` (already is). |
| **Font loading** | MEDIUM – reduce layout shift. | Low – `font-display: swap` on Google Fonts (already in URL). |

### Core Web Vitals

- Use **PageSpeed Insights** and **Chrome DevTools** after deploy.
- Focus on LCP (hero image, fonts), INP/CLS (tap targets, image dimensions).

---

## Phase 6: Mobile & UX Technical Compliance

### Current

- **Viewport:** `width=device-width, initial-scale=1.0` set.
- **Touch targets:** Nav and CTAs are reasonably large; ensure minimum ~48px height for tappable elements where possible.
- **No intrusive interstitials** that block main content.

### Recommendations

- Check **Mobile-Friendly Test** (Google) and fix any tap-target or font-size warnings.
- Avoid layout shift: set `width`/`height` or `aspect-ratio` on images where possible.

---

## Phase 7: Internal Link Architecture

### Current flow

- **Homepage** → Services (section + nav), About, Gallery, Locations (via Service Areas), Contact, Quote section.
- **Nav:** Home, About, Gallery, Services, Contact.
- **Services page** → Individual service pages; location pages link to services.
- **Location pages** → Location-specific service pages; link to contact/quote.

### Recommendations

- Add an explicit “Areas we cover” or “Locations” link from homepage (e.g. in nav or one CTA) to `/locations` if not already prominent.
- Ensure each service page links to “Get a quote”/contact and to 1–2 related services or locations.

---

## Phase 8: Automated / Scaling Checks

### Summary

| Check | Finding | Action |
|-------|---------|--------|
| **Thin pages** | Service/location pages are template-based; add 200+ words unique copy per page where possible. | Add location- or service-specific intro/benefits text. |
| **Image alt** | Key images (logo, gallery, LocationServiceIntro, CoreValues) have alt. | Keep alt descriptive and relevant to “exterior cleaning”, “roof cleaning”, “Ayrshire”. |
| **Duplicate meta** | None; each page has unique title/description. | Maintain when adding new pages. |
| **Broken links** | Internal links use correct paths (`/services`, `/contact`, `/{location}`, etc.). | Periodically check with a crawler (e.g. Screaming Frog). |

### Priority

1. **High:** No critical broken internal links; canonicals and sitemap fixed.
2. **Medium:** Add unique content to thin location/service pages; convert images to WebP.
3. **Low:** Preload LCP image; add more internal links from homepage to locations.

---

## Phase 9: Favicon & Social / SERP Image

### Implemented

- **Favicon:** `Layout.astro` uses `/favicon.svg` (primary) and `/logo.png` as fallback icon.
- **Apple touch icon:** `<link rel="apple-touch-icon" href="/logo.png">` added.
- **OG / Twitter:** `og:image` and `twitter:image` use `fullImageUrl` (default `https://jimboscleaning.com/logo.png`).
- **Schema:** `logo` and `image` point to `https://jimboscleaning.com/logo.png`.

### Required from you

1. **Place in `static/` (site root):**
   - `favicon.svg` – icon for browser tab (SERP).
   - `logo.png` – official logo (used for social, schema, and fallback icon).
2. **Logo specs for social:** 1200×630px or 1.91:1 for best results on Facebook/LinkedIn; square (e.g. 512×512) is fine for Twitter and general use.
3. **Verify:** After deploy, open [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://cards-dev.twitter.com/validator) and confirm image and title/description.

---

## Execution Checklist

- [x] Fix robots.txt Sitemap URL to jimboscleaning.com
- [x] Confirm sitemap includes all indexable routes (no thank-you)
- [x] Canonical and geo meta correct; schema geo and parentOrganization updated
- [x] Favicon + apple-touch-icon + logo.png fallback in Layout
- [x] Lazy loading and descriptive alt on key images
- [ ] **You:** Add `favicon.svg` and `logo.png` (official logo) to `static/`
- [ ] **You:** Submit sitemap in Google Search Console
- [ ] **You:** Add www → non-www 301 if applicable
- [ ] **You:** Run Rich Results Test and Mobile-Friendly Test
- [ ] **Optional:** WebP conversion; LCP preload; more unique copy on location/service pages

---

## Prioritised Issue List (Summary)

| Priority | Issue | Fix | SEO impact |
|----------|--------|-----|------------|
| **High** | Wrong sitemap domain in robots.txt | Use jimboscleaning.com/sitemap.xml | Strong – correct indexing. |
| **High** | LocalBusiness geo/NAP consistency | Geo set to Irvine; meta geo updated | Strong – local relevance. |
| **Medium** | Favicon/OG using official logo | Add logo.png + favicon to static; tags in place | Branding + CTR in SERP/social. |
| **Medium** | Image performance | Lazy load + alt; consider WebP + preload | LCP and accessibility. |
| **Low** | Schema entity graph | parentOrganization added | Clear entity for Google. |
| **Low** | Internal links | Ensure /locations and services well linked | Link equity and crawl depth. |

All code-level fixes above have been applied in the codebase. Complete the “You” items and optional steps for maximum benefit.
