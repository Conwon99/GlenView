import { BUSINESS_NAME } from "@/constants/site";

export const WhyChooseSoftTopSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto md:max-w-[700px]">
            <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[600px] md:w-full">
              <img src="/Soft top restoration.jpg" sizes="(max-width: 767px) 100vw, 700px" alt={`${BUSINESS_NAME} - Soft top restoration`} className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full" />
            </div>
          </div>
          <div className="box-border caret-transparent blur-0 basis-[0%] grow max-w-none md:max-w-[544px]">
            <div className="box-border caret-transparent inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid"><div className="font-medium box-border caret-transparent leading-[22px]">About Us</div></div>
            <div className="box-border caret-transparent mt-[18px] mb-4 md:mt-5">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                <span className="text-3xl box-border caret-transparent leading-[35px] font-heading uppercase md:text-[52px] md:leading-[62px]">Why</span>{" "}
                <span className="font-heading uppercase">Choose Our Soft Top Restoration?</span>
              </h2>
            </div>
            <div className="text-neutral-700 box-border caret-transparent space-y-4">
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                Convertible and soft tops take a beating from sun, rain, and dirt. We clean, restore, and protect them with specialist products and, where suitable, a durable coating so they look great and last longer.
              </div>
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                We assess the material and condition first, then clean and treat accordingly. A coating helps repel water and dirt and slows fading. We come to you so your convertible is cared for at your home or workplace.
              </div>
            </div>
            <div className="box-border caret-transparent mt-7 md:mt-10">
              <div className="box-border caret-transparent space-y-3 mb-6">
                <div className="box-border caret-transparent gap-x-3 flex items-start gap-y-2">
                  <div className="text-black items-center bg-neutral-200 box-border caret-transparent flex h-6 justify-center w-6 overflow-hidden rounded-[50%] shrink-0 mt-0.5">
                    <div className="items-center box-border caret-transparent flex h-4 justify-center w-4"><svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg></div>
                  </div>
                  <div className="text-[15px] box-border caret-transparent leading-6 text-neutral-700 md:text-base">Quality Products - Specialist cleaners and coatings for soft tops and convertibles</div>
                </div>
                <div className="box-border caret-transparent gap-x-3 flex items-start gap-y-2">
                  <div className="text-black items-center bg-neutral-200 box-border caret-transparent flex h-6 justify-center w-6 overflow-hidden rounded-[50%] shrink-0 mt-0.5">
                    <div className="items-center box-border caret-transparent flex h-4 justify-center w-4"><svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" /></svg></div>
                  </div>
                  <div className="text-[15px] box-border caret-transparent leading-6 text-neutral-700 md:text-base">Mobile Service - We bring soft top care to you</div>
                </div>
                <div className="box-border caret-transparent gap-x-3 flex items-start gap-y-2">
                  <div className="text-black items-center bg-neutral-200 box-border caret-transparent flex h-6 justify-center w-6 overflow-hidden rounded-[50%] shrink-0 mt-0.5">
                    <div className="items-center box-border caret-transparent flex h-4 justify-center w-4"><svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg></div>
                  </div>
                  <div className="text-[15px] box-border caret-transparent leading-6 text-neutral-700 md:text-base">Insured - We are fully insured to work on your vehicle and at any property</div>
                </div>
              </div>
              <div className="box-border caret-transparent flex flex-wrap gap-3">
                <a href="/contact/" className="text-white items-center bg-cta-dark box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border border-cta-dark px-6 py-4 rounded-[100px] border-solid hover:text-neutral-800 hover:bg-white">
                  <span className="relative text-sm font-medium z-[2] md:text-base md:leading-6">BOOK NOW</span>
                  <span className="box-border caret-transparent"><img src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-8.svg" alt="" className="box-border caret-transparent h-2 w-3 brightness-0 invert" /></span>
                </a>
                <a href="/packages/" className="text-neutral-800 items-center box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border border-cta-dark px-6 py-4 rounded-[100px] border-solid hover:bg-cta-dark hover:text-white">
                  <span className="relative text-sm font-medium z-[2] md:text-base md:leading-6">View Packages</span>
                  <span className="box-border caret-transparent"><img src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-8.svg" alt="" className="box-border caret-transparent h-2 w-3 brightness-0 invert" /></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
