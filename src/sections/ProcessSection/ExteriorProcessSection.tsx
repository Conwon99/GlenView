import { getServiceDetail } from "@/data/serviceDetails";
import { ProcessCard } from "./components/ProcessCard";
import type { Location } from "@/data/locations";

type Props = { serviceSlug: string; location?: Location };

export const ExteriorProcessSection = ({ serviceSlug, location }: Props) => {
  const detail = getServiceDetail(serviceSlug);
  if (!detail) return null;

  const { processSteps } = detail;
  const defaultImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop";

  return (
    <section className={`box-border caret-transparent py-[60px] md:py-[100px] ${serviceSlug === "render-softwashing" ? "bg-neutral-100" : "bg-white"}`}>
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          <div className="static items-start box-border caret-transparent gap-x-4 flex flex-col max-w-none gap-y-4 top-[100px] md:sticky md:max-w-[332px]">
            <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
              <div className="font-medium box-border caret-transparent leading-[22px]">Process</div>
            </div>
            <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
              How It Works{location ? ` in ${location.name}` : ""}
            </h2>
          </div>
          <div className="box-border caret-transparent gap-x-[18px] flex flex-col max-w-[752px] gap-y-[18px] md:gap-x-5 md:gap-y-5">
            {processSteps.map((step, i) => (
              <ProcessCard
                key={i}
                imageUrl={defaultImage}
                imageAlt={step.title}
                title={`${String(i + 1).padStart(2, "0")}. ${step.title}.`}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
