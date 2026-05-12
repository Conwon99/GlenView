import { useEffect, useRef } from "react";
import { ServiceAreaMap } from "./ServiceAreaMap";
import {
  LOCATION_REGION_ORDER,
  locationsInRegion,
} from "@/data/locations";
import { META_AREA_PHRASE } from "@/constants/site";

const DESKTOP_BREAKPOINT = 1024;

export const ServiceAreasSection = () => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    const mql = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
    const updateOpen = () => {
      if (detailsRef.current) detailsRef.current.open = mql.matches;
    };
    updateOpen();
    mql.addEventListener("change", updateOpen);
    return () => mql.removeEventListener("change", updateOpen);
  }, []);

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">Service Areas</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
            Areas We Cover
          </h2>
          <p className="text-[15px] text-neutral-700 leading-6 md:text-base max-w-[640px]">
            We cover {META_AREA_PHRASE} with professional exterior cleaning—roof, render, driveway, gutters, PVC and windows. Get in touch to confirm we cover your area or to book a free quote.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <details ref={detailsRef} open className="box-border group">
              <summary className="font-heading uppercase text-lg font-bold text-black cursor-pointer list-none [&::-webkit-details-marker]:hidden flex items-center gap-2 before:content-[''] before:inline-block before:border-t-2 before:border-r-2 before:border-black before:w-2 before:h-2 before:rotate-45 before:shrink-0 before:transition-transform group-open:before:rotate-[-135deg]">
                Locations
              </summary>
              <div className="mt-4 space-y-8">
                {LOCATION_REGION_ORDER.map((region) => (
                  <div key={region.id}>
                    <h3 className="font-heading uppercase text-sm font-bold text-neutral-900 mb-3">
                      {region.title}
                    </h3>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-[15px] leading-6 text-neutral-700 md:text-base pl-0 list-none lg:gap-x-6">
                      {locationsInRegion(region.id).map((loc) => (
                        <li key={loc.slug} className="flex items-center gap-2">
                          <span className="text-neutral-800 shrink-0" aria-hidden>
                            •
                          </span>
                          <a
                            href={`/${loc.slug}/`}
                            className="hover:text-neutral-800 hover:underline transition-colors"
                          >
                            {loc.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </details>
            <div className="box-border w-full relative rounded-xl overflow-hidden aspect-[4/3] min-h-[280px] lg:min-h-[320px]">
              <ServiceAreaMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
