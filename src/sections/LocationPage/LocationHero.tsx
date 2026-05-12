import type { Location } from "@/data/locations";
import { HeroStats } from "@/sections/Hero/components/HeroStats";

const ICON_ARROW =
  "https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg";
const ICON_STYLE =
  "brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)";

export type LocationHeroProps = {
  location: Location;
};

export const LocationHero = ({ location }: LocationHeroProps) => {
  const { name, neighborhoods = [] } = location;
  const areas = neighborhoods.length ? ` in ${name} and nearby areas like ${neighborhoods.slice(0, 3).join(", ")}` : ` in ${name}`;

  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/hero/hero-main.jpg')`,
            backgroundPosition: "40% center",
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1204px] flex-col justify-end px-5 pb-8 pt-32 md:px-8 md:pb-12 md:pt-28 supports-[min-height:100dvh]:min-h-[100dvh]">
        <div className="items-start box-border gap-x-10 flex flex-col justify-between gap-y-10 md:items-end md:gap-x-[60px] md:flex-row md:gap-y-[60px] w-full">
          <div className="box-border basis-[0%] grow max-w-[650px]">
            <div className="box-border gap-x-4 flex flex-col gap-y-4">
              <h1 className="text-[44px] font-bold box-border tracking-[-1.44px] leading-[52px] md:text-7xl md:leading-[80px] font-heading uppercase">
                <div>Exterior</div>
                <div>Cleaning</div>
                <div>
                  <span className="text-white/80">in {name}</span>
                </div>
              </h1>
              <p className="text-base leading-[26px] md:text-lg font-figtree">
                Professional exterior cleaning{areas}. Roof steam cleaning, render softwashing, driveway, gutter, PVC and window cleaning. We bring the service to your property—get a free quote.
              </p>
            </div>
            <div className="items-center box-border gap-x-5 flex flex-wrap gap-y-5 mt-6 md:gap-x-6 md:gap-y-6 md:mt-7">
              <a
                href="/contact/"
                className="text-black items-center bg-cta box-border gap-x-5 flex max-w-full gap-y-5 text-center border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-cta-dark"
              >
                <span className="relative text-sm font-medium z-[2] md:text-base md:leading-6">
                  BOOK NOW
                </span>
                <span className="text-white items-center bg-blue-600 box-border flex h-12 justify-center w-12 overflow-hidden rounded-[50%]">
                  <img
                    src={ICON_ARROW}
                    alt=""
                    className="h-3.5 w-3.5"
                    style={{ filter: ICON_STYLE }}
                  />
                </span>
              </a>
              <a
                href="#services"
                className="relative items-center box-border gap-x-2 flex max-w-full gap-y-2 overflow-hidden"
              >
                <span className="text-[15px] font-medium leading-6 md:text-base">
                  View our services in {name}
                </span>
                <span className="relative h-6 w-6 overflow-hidden">
                  <img
                    src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-5.svg"
                    alt=""
                    className="h-full w-full"
                  />
                </span>
                <span className="absolute bg-white box-border h-px bottom-0 inset-x-0" />
              </a>
            </div>
          </div>
          <HeroStats />
        </div>
      </div>
    </section>
  );
};
