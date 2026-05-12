import { FeatureCard } from "@/sections/WhyUsSection/components/FeatureCard";

export const MobileCarousel = () => {
  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative bg-transparent box-border caret-transparent clear-both block blur-0 opacity-100 text-center mt-10 md:hidden md:opacity-0 md:mt-14"
    >
      <div className="relative box-border caret-transparent h-full max-w-[656px] text-nowrap z-[1] inset-x-0">
        <div
          aria-label="1 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-11.svg"
              title="Built for Scottish exteriors"
              description="Hands-on experience with mossy roofs, stained render, gutters and driveways—we pick the right method for each surface."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="/portfolio/gal1.jpg"
                sizes="100vw"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="2 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-12.svg"
              title="Straight talking & scheduling"
              description="Clear scopes and pricing—you deal with us directly, so there are fewer surprises once we’re on site."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="/portfolio/gal2.jpg"
                sizes="100vw"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="3 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-13.svg"
              title="Wide-ranging exterior skills"
              description="Steam cleaning, render softwashing, pressure washing, gutter clearing and PVC detailing—coordinate it all together."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="/portfolio/gal3.jpg"
                sizes="100vw"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="4 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-full mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-14.svg"
              title="Respectful crews"
              description="We guard landscaping, cladding and finishes like they’re our own and leave walkways safe before we clock off."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-[auto] min-w-[auto] overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-0 md:min-w-0">
              <img
                src="/portfolio/gal4.jpg"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute text-white text-[11px] bottom-[-47px] box-border caret-transparent h-10 z-[5] m-auto pt-2.5 inset-x-0 md:text-sm md:z-[2] md:bottom-0">
        <div
          aria-label="Show slide 1 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 2 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 3 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
        <div
          aria-label="Show slide 4 of 4"
          role="button"
          className="relative text-[11px] bg-neutral-800/40 box-border caret-transparent inline-block h-[11px] w-[11px] mb-[5.5px] mx-[3px] rounded-[100%] md:text-sm md:h-3.5 md:w-3.5 md:mb-[7px]"
        ></div>
      </div>
    </div>
  );
};
