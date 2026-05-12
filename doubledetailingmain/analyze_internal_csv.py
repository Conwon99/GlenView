"""Screaming Frog internal_all.csv SEO summary (run: python analyze_internal_csv.py)."""
from __future__ import annotations

import csv
import json
import sys
from collections import Counter, defaultdict
from pathlib import Path

CSV_PATH = Path(__file__).resolve().parent / "internal_all.csv"


def nint(row: dict, key: str, default: int = 0) -> int:
    v = (row.get(key) or "").strip()
    if not v:
        return default
    try:
        return int(float(v))
    except ValueError:
        return default


def nfloat(row: dict, key: str, default: float = 0.0) -> float:
    v = (row.get(key) or "").strip()
    if not v:
        return default
    try:
        return float(v)
    except ValueError:
        return default


def is_html(row: dict) -> bool:
    return "text/html" in (row.get("Content Type") or "").lower()


def main() -> None:
    if not CSV_PATH.exists():
        print("Missing", CSV_PATH, file=sys.stderr)
        sys.exit(1)

    rows: list[dict] = []
    with CSV_PATH.open(newline="", encoding="utf-8-sig") as f:
        rows = list(csv.DictReader(f))

    html = [r for r in rows if is_html(r)]
    html_200 = [r for r in html if r.get("Status Code") == "200"]

    def wc(r: dict) -> int:
        return nint(r, "Word Count")

    thin_300 = [r for r in html_200 if 0 < wc(r) < 300]
    no_h1 = [r for r in html_200 if not (r.get("H1-1") or "").strip()]
    no_h2 = [r for r in html_200 if not (r.get("H2-1") or "").strip()]
    missing_meta = [r for r in html_200 if nint(r, "Meta Description 1 Length") == 0]
    short_meta = [
        r
        for r in html_200
        if 0 < nint(r, "Meta Description 1 Length") < 120
    ]
    long_meta = [r for r in html_200 if nint(r, "Meta Description 1 Length") > 160]

    titles = Counter(
        (r.get("Title 1") or "").strip()
        for r in html_200
        if (r.get("Title 1") or "").strip()
    )
    dup_titles = {t: c for t, c in titles.items() if c > 1}

    metas = Counter(
        (r.get("Meta Description 1") or "").strip()
        for r in html_200
        if (r.get("Meta Description 1") or "").strip()
    )
    dup_metas = {m: c for m, c in metas.items() if c > 1}

    low_text = [
        (r["Address"], nfloat(r, "Text Ratio"), wc(r))
        for r in html_200
        if nfloat(r, "Text Ratio") > 0 and nfloat(r, "Text Ratio") < 2.0 and wc(r) > 50
    ]

    orphans = [
        r
        for r in html
        if r.get("Indexability") == "Indexable" and nint(r, "Unique Inlinks") == 0
    ]
    high_out = [r for r in html_200 if nint(r, "Unique Outlinks") > 100]
    deep = [r for r in html_200 if nint(r, "Crawl Depth") > 3]

    r404 = [r for r in rows if r.get("Status Code") == "404"]
    redir_all = [r for r in rows if r.get("Status Code") in ("301", "302", "307", "308")]
    redir_302 = [r for r in rows if r.get("Status Code") == "302"]

    non_html_indexable = [
        r
        for r in rows
        if r.get("Indexability") == "Indexable" and not is_html(r)
    ]

    long_titles = sorted(
        [r for r in html_200 if nint(r, "Title 1 Length") > 65],
        key=lambda x: -nint(x, "Title 1 Length"),
    )

    # Canonical: 200 HTML missing canonical or trailing mismatch (heuristic)
    canon_missing = [
        r
        for r in html_200
        if not (r.get("Canonical Link Element 1") or "").strip()
    ]

    out = {
        "summary": {
            "total_rows": len(rows),
            "html_200": len(html_200),
            "thin_content_under_300_words": len(thin_300),
            "missing_h1": len(no_h1),
            "missing_h2_first": len(no_h2),
            "missing_meta_description": len(missing_meta),
            "meta_under_120_chars": len(short_meta),
            "meta_over_160_chars": len(long_meta),
            "duplicate_title_value_count": len(dup_titles),
            "duplicate_meta_value_count": len(dup_metas),
            "orphans_indexable_zero_unique_inlinks": len(orphans),
            "html200_unique_outlinks_over_100": len(high_out),
            "html200_crawl_depth_over_3": len(deep),
            "response_404": len(r404),
            "redirects_any_code": len(redir_all),
            "response_302": len(redir_302),
            "non_html_but_indexable": len(non_html_indexable),
            "html200_missing_canonical_tag": len(canon_missing),
            "low_text_ratio_under_2pct_wc_gt50": len(low_text),
        },
        "thin_300_urls": sorted(
            ((wc(r), r["Address"]) for r in thin_300), key=lambda x: x[0]
        )[:40],
        "duplicate_titles": {},
        "duplicate_metas_sample": {},
        "orphan_urls": [r["Address"] for r in orphans[:50]],
        "high_outlinks": [
            (nint(r, "Unique Outlinks"), r["Address"]) for r in high_out
        ],
        "depth_over_3": [
            (nint(r, "Crawl Depth"), r["Address"]) for r in deep[:40]
        ],
        "urls_404": [r["Address"] for r in r404],
        "redirects_301_sample": [
            {
                "from": r["Address"],
                "to": r.get("Redirect URL", ""),
                "type": r.get("Redirect Type", ""),
                "ms": r.get("Response Time", ""),
            }
            for r in rows
            if r.get("Status Code") == "301"
        ][:25],
        "non_html_indexable_sample": [
            {
                "url": r["Address"],
                "type": r.get("Content Type"),
                "code": r.get("Status Code"),
            }
            for r in non_html_indexable[:40]
        ],
        "long_titles_sample": [
            (nint(r, "Title 1 Length"), r["Address"]) for r in long_titles[:25]
        ],
    }

    # Fill duplicate title groups (cap URLs per title)
    for t, c in sorted(dup_titles.items(), key=lambda x: -x[1])[:20]:
        urls = [r["Address"] for r in html_200 if (r.get("Title 1") or "").strip() == t][
            :15
        ]
        out["duplicate_titles"][t[:120]] = {"count": c, "urls": urls}

    for m, c in sorted(dup_metas.items(), key=lambda x: -x[1])[:12]:
        urls = [
            r["Address"]
            for r in html_200
            if (r.get("Meta Description 1") or "").strip() == m
        ][:8]
        out["duplicate_metas_sample"][m[:100]] = {"count": c, "urls": urls}

    print(json.dumps(out, indent=2))


if __name__ == "__main__":
    main()
