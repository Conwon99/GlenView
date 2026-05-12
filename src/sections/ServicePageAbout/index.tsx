import { BUSINESS_NAME } from "@/constants/site";

export const ServicePageAbout = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="box-border caret-transparent max-w-[988px]">
              <div className="text-3xl font-medium box-border caret-transparent blur-0 tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                At{" "}
                <span className="text-3xl box-border caret-transparent leading-[35px] font-figtree md:text-[52px] md:leading-[62px]">
                  {BUSINESS_NAME}
                </span>{" "}
                we deliver professional exterior cleaning with clear pricing and careful technique—
                <span className="text-neutral-400 text-3xl box-border caret-transparent leading-[35px] md:text-[52px] md:leading-[62px]">
                  from roof steam cleaning and render softwashing to gutters, PVC, windows and drives.
                </span>
              </div>
            </div>
          </div>
          <div className="items-end box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 mt-[18px] md:gap-x-10 md:flex-row md:gap-y-10 md:mt-5">
            <div className="box-border caret-transparent gap-x-[18px] flex blur-0 flex-col max-w-[488px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
              <div className="box-border caret-transparent flex">
                <div className="text-4xl font-semibold box-border caret-transparent leading-[48px] md:text-5xl md:leading-[60px]">
                  24h
                </div>
                <div className="text-neutral-700 box-border caret-transparent ml-2">
                  <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                    Quote response aim
                  </div>
                </div>
              </div>
              <div className="text-neutral-700 box-border caret-transparent">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  We plan access, plant and protection with you—ideal for mossy roofs, stained render,
                  clogged gutters and tired driveways. Book a survey or send photos and we'll outline
                  the safest approach for your property.
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent blur-0 h-[300px] overflow-hidden rounded-2xl md:h-[400px] md:w-[500px]">
              <img
                src="/portfolio/roofclean1.jpg"
                sizes="(max-width: 767px) 100vw, 500px"
                alt={`${BUSINESS_NAME} — exterior cleaning`}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
