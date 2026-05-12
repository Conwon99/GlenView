import {
  BUSINESS_NAME,
  REGISTERED_GEO,
  REGISTERED_LOCALITY,
} from "@/constants/site";

const DEFAULT_MAP = {
  lat: REGISTERED_GEO.latitude,
  lng: REGISTERED_GEO.longitude,
  name: `${BUSINESS_NAME}, ${REGISTERED_LOCALITY}`,
};

export type FooterMapProps = {
  /** When provided (e.g. on location pages), show this location. Otherwise show business location. */
  mapLocation?: {
    lat: string;
    lng: string;
    name: string;
  };
};

function getEmbedUrl(lat: string, lng: string): string {
  const latNum = parseFloat(lat);
  const lngNum = parseFloat(lng);
  const delta = 0.02;
  const bbox = [lngNum - delta, latNum - delta, lngNum + delta, latNum + delta].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export const FooterMap = ({ mapLocation }: FooterMapProps) => {
  const { lat, lng, name } = mapLocation ?? DEFAULT_MAP;
  const embedUrl = getEmbedUrl(lat, lng);

  return (
    <div className="box-border caret-transparent w-full mt-10 md:mt-14">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-3 md:text-xl">
        {mapLocation ? `Map – ${name}` : "Our location"}
      </div>
      <div className="box-border caret-transparent rounded-xl overflow-hidden border border-white/20 aspect-[16/9] min-h-[200px] md:min-h-[220px]">
        <iframe
          title={mapLocation ? `Map of ${name}` : `${BUSINESS_NAME} — Bishopbriggs area`}
          src={embedUrl}
          className="box-border w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
};
