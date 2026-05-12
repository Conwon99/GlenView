import { AboutStats } from "@/sections/AboutSection/components/AboutStats";
import { BUSINESS_NAME, META_AREA_PHRASE } from "@/constants/site";

export const AboutContent = () => {
  return (
    <div className="box-border caret-transparent">
      <div className="box-border caret-transparent gap-x-7 flex blur-0 flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
        <div className="box-border caret-transparent flex flex-col gap-y-4">
          <div className="font-medium box-border caret-transparent leading-[22px]">
            About Us
          </div>
          <div className="box-border caret-transparent border-8 border-black p-1 bg-[#D4AF37]">
            <div className="box-border caret-transparent overflow-hidden">
              <img
                src="/portfolio/gal1.jpg"
                alt={`${BUSINESS_NAME} — About us`}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[842px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
          <div className="text-[22px] font-medium box-border caret-transparent leading-[30px] md:text-[28px] md:leading-9">
            <span className="text-[22px] box-border caret-transparent leading-[30px] font-figtree md:text-[28px] md:leading-9">
              {BUSINESS_NAME}{" "}
            </span>
            is a mobile exterior cleaning company covering {META_AREA_PHRASE}.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            We specialise in roof steam cleaning, moss removal, render softwashing, driveway cleaning, gutter clearing, PVC fascia cleaning and window cleaning — carried out at your home or business with minimal disruption.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            Based on Kirkintilloch Road in Bishopbriggs, we’re fully insured and focused on safe methods: low-pressure treatments where they matter, and clear communication from quote to completion.
          </div>
          <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
            Whether you’re in Kirkintilloch, Falkirk, Stirling, Coatbridge or nearby towns on our areas page, we aim to offer reliable scheduling and workmanship you’ll be happy to recommend.
          </div>
        </div>
      </div>
      <AboutStats />
    </div>
  );
};
