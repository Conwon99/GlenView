import { MobileCarousel } from "@/sections/WhyUsSection/components/MobileCarousel";
import { DesktopGrid } from "@/sections/WhyUsSection/components/DesktopGrid";
import { BUSINESS_NAME, META_AREA_PHRASE } from "@/constants/site";

export const WhyUsSection = () => {
  return (
    <section className="bg-white box-border caret-transparent overflow-hidden py-[60px] md:overflow-visible md:py-[100px]">
      <div className="box-border caret-transparent h-auto md:h-[4000px]">
        <div className="static box-border caret-transparent flex flex-col overflow-visible top-[75px] md:sticky md:overflow-hidden">
          <div className="box-border caret-transparent">
            <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
              <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-center md:gap-x-10 md:flex-row md:gap-y-10">
                <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-none gap-y-4 md:max-w-[555px]">
                  <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
                    <div className="font-medium box-border caret-transparent leading-[22px]">
                      Why Choose Us
                    </div>
                  </div>
                  <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                    Why Choose{" "}
                    <span className="text-3xl box-border caret-transparent leading-[35px] font-figtree md:text-[52px] md:leading-[62px]">
                      {BUSINESS_NAME}
                    </span>
                  </h2>
                </div>
                <div className="box-border caret-transparent blur-0 max-w-none md:max-w-[360px]">
                  <div className="text-neutral-700 box-border caret-transparent">
                    <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                      We deliver professional exterior cleaning across {META_AREA_PHRASE}. Fully insured, with the right equipment and methods for roofs, render, driveways, gutters, PVC and windows. Quality, reliability and customer satisfaction on every job.
                    </div>
                  </div>
                </div>
              </div>
              <MobileCarousel />
            </div>
            <div className="box-border caret-transparent overflow-x-hidden md:overflow-x-visible">
              <DesktopGrid />
            </div>
            <div className="bg-amber-900/10 box-border caret-transparent hidden h-1.5 max-w-[200px] overflow-hidden mt-7 mx-auto rounded-[100px] md:block md:mt-10">
              <div className="bg-amber-900 box-border caret-transparent h-full w-6/12 md:w-[0%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
