import { GalleryGrid } from "@/sections/GallerySection/components/GalleryGrid";
import type { Location } from "@/data/locations";
import {
  getLocationGalleryHeading,
  getLocationGalleryImageIndex,
} from "@/data/locationPageCopy";

export type GallerySectionProps = {
  location?: Location;
};

export const GallerySection = ({ location }: GallerySectionProps) => {
  const heading = location
    ? getLocationGalleryHeading(location)
    : "See Our Work - Exterior Cleaning Results";
  const leadIndex = location ? getLocationGalleryImageIndex(location.slug) : 1;

  return (
    <section className="box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
            <div className="box-border caret-transparent flex blur-0 justify-center">
              <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
                <div className="font-medium box-border caret-transparent leading-[22px]">
                  Gallery
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent blur-0 max-w-[680px] text-center mx-auto">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                {heading}
              </h2>
            </div>
          </div>
          <GalleryGrid leadIndex={leadIndex} />
            <div className="box-border caret-transparent mt-8 text-center">
            <div className="box-border caret-transparent flex justify-center">
              <a
                href="/gallery/"
                className="text-white items-center bg-cta box-border caret-transparent gap-x-5 flex max-w-full gap-y-5 text-center border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-cta-dark hover:text-black"
              >
                <div className="relative box-border caret-transparent overflow-hidden">
                  <div className="box-border caret-transparent">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      See Full Gallery
                    </div>
                  </div>
                  <div className="absolute box-border caret-transparent w-full">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      See Full Gallery
                    </div>
                  </div>
                </div>
                <div className="text-white items-center bg-blue-600 box-border caret-transparent flex h-12 justify-center w-12 overflow-hidden rounded-[50%]">
                  <div className="relative box-border caret-transparent">
                    <div className="box-border caret-transparent">
                      <div className="box-border caret-transparent h-3.5 w-3.5 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                        <img
                          src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-full w-full"
                          style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)' }}
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-[-200%] box-border caret-transparent left-[-200%]">
                      <div className="box-border caret-transparent h-3.5 w-3.5 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                        <img
                          src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
                          alt="Icon"
                          className="box-border caret-transparent h-full w-full"
                          style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
