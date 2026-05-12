import { META_AREA_PHRASE } from "@/constants/site";

export const HeroText = () => {
  return (
    <div className="box-border caret-transparent basis-[0%] grow max-w-[650px]">
      <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4">
        <h1 className="text-[44px] font-bold box-border caret-transparent blur-0 leading-[52px] md:text-7xl md:leading-[80px] font-heading normal-case">
          <div>Roof Cleaning <span className="text-blue-300">Central Scotland</span></div>
        </h1>
        <div className="text-base box-border caret-transparent blur-0 leading-[26px] md:text-lg font-figtree">
          Expert exterior cleaning: roof steam cleaning, render softwashing, driveway, gutter, PVC and window cleaning. Safe, professional service across {META_AREA_PHRASE}.
        </div>
      </div>
      <div className="items-center box-border caret-transparent gap-x-5 flex blur-0 flex-wrap gap-y-5 mt-6 md:gap-x-6 md:gap-y-6 md:mt-7">
        <div className="box-border caret-transparent flex">
          <a
            href="/contact/"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).gtag) {
                (window as any).gtag('event', 'quoteButton_hero', {
                  event_category: 'CTA',
                  event_label: 'Hero Section'
                });
              }
            }}
            className="text-white items-center bg-cta box-border caret-transparent gap-x-5 flex max-w-full gap-y-5 text-center border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-cta-dark hover:text-black"
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
        <div className="box-border caret-transparent flex">
          <a
            href="/services/"
            className="relative items-center box-border caret-transparent gap-x-2 flex max-w-full gap-y-2 overflow-hidden"
          >
            <div className="text-[15px] font-medium box-border caret-transparent leading-6 md:text-base">
              View Services
            </div>
            <div className="relative box-border caret-transparent h-6 w-6 overflow-hidden">
              <div className="box-border caret-transparent">
                <div className="box-border caret-transparent h-6 w-6 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                  <img
                    src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-5.svg"
                    alt="Icon"
                    className="box-border caret-transparent"
                  />
                </div>
              </div>
              <div className="absolute box-border caret-transparent -left-full -bottom-full">
                <div className="box-border caret-transparent h-6 w-6 before:accent-auto before:caret-transparent before:text-white before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:col-end-2 before:col-start-1 before:row-end-2 before:row-start-1 before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:pointer-events-auto before:text-start before:indent-[0px] before:normal-case before:visible before:border-separate before:font-geist after:accent-auto after:caret-transparent after:clear-both after:text-white after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:col-end-2 after:col-start-1 after:row-end-2 after:row-start-1 after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:pointer-events-auto after:text-start after:indent-[0px] after:normal-case after:visible after:border-separate after:font-geist">
                  <img
                    src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-5.svg"
                    alt="Icon"
                    className="box-border caret-transparent"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-white box-border caret-transparent h-px bottom-[0%] inset-x-[0%]"></div>
          </a>
        </div>
      </div>
    </div>
  );
};
