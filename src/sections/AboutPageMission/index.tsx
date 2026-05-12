import { BUSINESS_NAME } from "@/constants/site";

export const AboutPageMission = () => {
  return (
    <section className="box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-7 flex flex-col justify-center md:justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          <div className="box-border caret-transparent blur-0 basis-[0%] grow max-w-none md:max-w-[544px]">
            <div className="box-border caret-transparent inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
              <div className="font-medium box-border caret-transparent leading-[22px]">
                Qualifications
              </div>
            </div>
            <div className="box-border caret-transparent mt-[18px] mb-4 md:mt-5">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                Qualifications
              </h2>
            </div>
            <div className="text-neutral-700 box-border caret-transparent space-y-4">
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                At {BUSINESS_NAME}, we combine hands-on experience with the right equipment for roofs, render, driveways, gutters, PVC and windows — always prioritising methods that protect your property.
              </div>
              <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                We stay up to date with effective exterior cleaning techniques and treatments. Fully insured and focused on clear communication from quote to completion.
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[400px] md:w-[500px]">
            <img
              src="/about1.jpeg"
              sizes="(max-width: 767px) 100vw, 500px"
              alt={BUSINESS_NAME}
              className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
