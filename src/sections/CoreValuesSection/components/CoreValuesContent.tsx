import { BUSINESS_NAME, META_AREA_PHRASE } from "@/constants/site";

export const CoreValuesContent = () => {
  return (
    <div className="box-border caret-transparent blur-0 basis-[0%] grow max-w-none md:max-w-[544px]">
      <div className="box-border caret-transparent inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
        <div className="font-medium box-border caret-transparent leading-[22px]">
          About Us
        </div>
      </div>
      <div className="box-border caret-transparent mt-[18px] mb-4 md:mt-5">
        <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
          <span className="text-3xl box-border caret-transparent leading-[35px] font-heading uppercase md:text-[52px] md:leading-[62px]">Why</span> <span className="font-heading uppercase">Choose {BUSINESS_NAME}?</span>
        </h2>
      </div>
      <div className="text-neutral-700 box-border caret-transparent">
        <p className="text-[15px] box-border caret-transparent leading-6 md:text-base">
          At {BUSINESS_NAME} we deliver professional exterior cleaning across {META_AREA_PHRASE}. From roof steam cleaning and moss removal to render softwashing, driveway, gutter, PVC and window cleaning—we bring safe, effective service to your property. Fully insured and with a focus on quality and customer satisfaction.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3 mt-5">
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
              </svg>
            </span>
            <span className="text-[15px] font-medium text-black md:text-base">21 years experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </span>
            <span className="text-[15px] font-medium text-black md:text-base">500+ Jobs completed</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden>
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </span>
            <span className="text-[15px] font-medium text-black md:text-base">5 Star rated</span>
          </div>
        </div>
      </div>
      <div className="box-border caret-transparent mt-6 pt-6 border-t border-neutral-200">
        <div className="box-border caret-transparent flex pt-6">
          <a
            href="/contact/"
            className="text-white items-center bg-cta-dark box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border border-cta-dark px-6 py-4 rounded-[100px] border-solid hover:text-neutral-800 hover:bg-white"
          >
            <div className="relative box-border caret-transparent overflow-hidden">
              <div className="box-border caret-transparent">
                <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                  BOOK NOW
                </div>
              </div>
              <div className="absolute box-border caret-transparent w-full">
                <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                  BOOK NOW
                </div>
              </div>
            </div>
            <div className="box-border caret-transparent">
              <div className="items-center box-border caret-transparent flex h-4 justify-center w-4 before:accent-auto before:caret-transparent before:text-amber-200 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-center before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-amber-200 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-center after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                <img
                  src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-8.svg"
                  alt="Icon"
                  className="box-border caret-transparent h-2 w-3 brightness-0 invert"
                />
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};
