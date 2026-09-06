import { ProcessSteps } from "@/sections/ProcessSection/components/ProcessSteps";
import type { Location } from "@/data/locations";
import { getLocationProcessIntro } from "@/data/locationPageCopy";

export type ProcessSectionProps = {
  location?: Location;
};

export const ProcessSection = ({ location }: ProcessSectionProps) => {
  const intro = location ? getLocationProcessIntro(location) : null;

  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          <div className="static items-start box-border caret-transparent gap-x-4 flex flex-col max-w-none gap-y-4 top-[100px] md:sticky md:max-w-[332px]">
            <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
              <div className="font-medium box-border caret-transparent leading-[22px]">
                Process
              </div>
            </div>
            <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
              How It Works
            </h2>
            {intro && (
              <p className="text-[15px] text-neutral-700 leading-6 md:text-base">
                {intro}
              </p>
            )}
          </div>
          <ProcessSteps />
        </div>
      </div>
    </section>
  );
};
