export const ServicePageHero = () => {
  return (
    <section className="box-border caret-transparent pt-[120px] md:pt-[150px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent pb-[60px] md:pb-[100px]">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-center md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-none gap-y-4 md:max-w-[555px]">
              <h1 className="text-[44px] font-bold box-border caret-transparent tracking-[-1.44px] leading-[52px] md:text-7xl md:leading-[80px] font-heading normal-case">
                Expert Exterior{" "}
                <span className="text-[44px] box-border caret-transparent leading-[52px] font-heading md:text-7xl md:leading-[80px]">
                  Cleaning Services
                </span>
              </h1>
            </div>
            <div className="box-border caret-transparent flex">
              <a
                href="/contact/"
                className="text-white items-center bg-cta box-border caret-transparent gap-x-5 flex max-w-full gap-y-5 text-center border pl-6 pr-1 py-1 rounded-[100px] border-solid border-transparent hover:bg-white hover:text-neutral-800 hover:border-cta"
              >
                <div className="relative box-border caret-transparent overflow-hidden">
                  <div className="box-border caret-transparent">
                    <div className="relative text-sm font-medium box-border caret-transparent leading-5 z-[2] md:text-base md:leading-6">
                      Message Us
                    </div>
                  </div>
                </div>
                <div className="text-white items-center bg-blue-600 box-border caret-transparent flex h-12 justify-center w-12 overflow-hidden rounded-[50%]">
                  <div className="box-border caret-transparent h-3.5 w-3.5">
                    <img
                      src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-4.svg"
                      alt="Icon"
                      className="box-border caret-transparent h-full w-full"
                      style={{ filter: 'brightness(0) saturate(100%) invert(78%) sepia(45%) saturate(500%) hue-rotate(330deg) brightness(110%) contrast(85%)' }}
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="box-border caret-transparent blur-0 h-[220px] overflow-hidden mt-7 rounded-2xl md:h-[642px] md:mt-10">
            <img
              src="/hero/hero-main.jpg"
              sizes="100vw"
              alt="Exterior cleaning services - roof, render, driveway, gutters, PVC and windows"
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              width={1920}
              height={1080}
              decoding="async"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
