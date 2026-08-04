import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";
import { BUSINESS_NAME, META_AREA_PHRASE } from "@/constants/site";

/** Rough polygon [lat, lng] tracing mainland Scotland, excluding the islands. */
const SERVICE_AREA_POLYGON: [number, number][] = [
  [54.97, -3.05], // Solway Firth (border, SW)
  [55.77, -2.03], // Berwick (border/coast, E)
  [56.46, -2.97], // Dundee (E coast)
  [57.15, -2.09], // Aberdeen (E coast)
  [58.44, -3.09], // Wick (NE)
  [58.62, -4.99], // Cape Wrath (N tip)
  [57.90, -5.16], // Ullapool (NW coast)
  [56.82, -5.10], // Fort William (W coast)
  [55.31, -5.79], // Mull of Kintyre (SW tip)
  [54.90, -5.02], // Stranraer (SW coast)
  [54.97, -3.05],
];

const MAP_CENTER: [number, number] = [56.8, -4.2];
const MAP_ZOOM = 6;

export function ServiceAreaMap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<import("leaflet").Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    let cancelled = false;

    void import("leaflet").then((L) => {
      if (cancelled || !containerRef.current) return;

      const map = L.default.map(containerRef.current, {
        center: MAP_CENTER,
        zoom: MAP_ZOOM,
        scrollWheelZoom: true,
      });

      L.default.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const polygon = L.default.polygon(SERVICE_AREA_POLYGON, {
        color: "#0d5c2e",
        weight: 2,
        fillColor: "#0d5c2e",
        fillOpacity: 0.25,
      }).addTo(map);

      map.fitBounds(polygon.getBounds(), { padding: [24, 24] });
      mapRef.current = map;
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const mapLabel = `Map showing ${BUSINESS_NAME} service area (${META_AREA_PHRASE})`;

  return (
    <div className="relative z-0 isolate">
      <div
        ref={containerRef}
        className="w-full h-full min-h-[280px] lg:min-h-[320px] rounded-xl overflow-hidden border border-neutral-200 shadow-sm bg-neutral-100 [&_.leaflet-control]:!z-[100] [&_.leaflet-pane]:!z-[1]"
        aria-label={mapLabel}
      />
    </div>
  );
}
