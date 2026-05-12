import { getServiceDetail } from "@/data/serviceDetails";
import { getServiceBySlug } from "@/data/services";
import type { Location } from "@/data/locations";
import { BUSINESS_NAME } from "@/constants/site";

type Props = { serviceSlug: string; location?: Location };

export const ExteriorWhyChooseSection = ({ serviceSlug, location }: Props) => {
  const detail = getServiceDetail(serviceSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!detail || !service) return null;

  const { whyChoose } = detail;
  const imageUrl = service.imageUrl || "/portfolio/roofclean1.jpg";
  const locationLine =
    location?.neighborhoods?.length &&
    location.neighborhoods.length >= 2
      ? `Serving ${location.name}, ${location.neighborhoods[0]}, ${location.neighborhoods[1]} and the surrounding area.`
      : location
        ? `Serving ${location.name} and the surrounding area.`
        : null;

  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:gap-x-10 md:flex-row md:gap-y-10">
          <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto md:max-w-[700px]">
            <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[600px] md:w-full">
              <img
                src={imageUrl}
                sizes="(max-width: 767px) 100vw, 700px"
                alt={`${BUSINESS_NAME} — ${service.title}`}
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
          <div className="box-border caret-transparent blur-0 basis-[0%] grow max-w-none md:max-w-[544px]">
            <div className="box-border caret-transparent inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
              <div className="font-medium box-border caret-transparent leading-[22px]">About the service</div>
            </div>
            <div className="box-border caret-transparent mt-[18px] mb-4 md:mt-5">
              <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                <span className="font-heading uppercase">{whyChoose.title}</span>
              </h2>
              {locationLine && (
                <p className="mt-3 text-[15px] leading-6 text-neutral-600 md:text-base">
                  {locationLine}
                </p>
              )}
            </div>
            <div className="text-neutral-700 box-border caret-transparent space-y-4">
              {whyChoose.points.map((point, i) => (
                <div key={i} className="box-border caret-transparent gap-x-3 flex items-start gap-y-2">
                  <div className="text-black items-center bg-neutral-200 box-border caret-transparent flex h-6 justify-center w-6 overflow-hidden rounded-[50%] shrink-0 mt-0.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-black text-[15px] md:text-base">{point.title}</div>
                    <div className="text-[15px] box-border caret-transparent leading-6 text-neutral-700 md:text-base">{point.description}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="box-border caret-transparent mt-7 md:mt-10">
              <a
                href="/contact/"
                className="text-white items-center bg-cta-dark box-border caret-transparent gap-x-3 flex max-w-full gap-y-3 text-center border border-cta-dark px-6 py-4 rounded-[100px] border-solid hover:text-neutral-800 hover:bg-white"
              >
                <span className="relative text-sm font-medium z-[2] md:text-base md:leading-6">BOOK NOW</span>
                <span className="box-border caret-transparent">
                  <img src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-8.svg" alt="" className="box-border caret-transparent h-2 w-3 brightness-0 invert" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
