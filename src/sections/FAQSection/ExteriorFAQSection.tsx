import { useState } from "react";
import { getServiceDetail } from "@/data/serviceDetails";
import { getServiceBySlug } from "@/data/services";
import { getSharedFaqs, getSecondLocationFaq } from "@/data/serviceDetailVariants";
import type { Location } from "@/data/locations";

type Props = { serviceSlug: string; location?: Location };

function getLocationFaq(serviceTitle: string, location: Location): { question: string; answer: string } {
  const neighborhoods = location.neighborhoods ?? [];
  const areaPhrase =
    neighborhoods.length >= 3
      ? `including ${neighborhoods[0]}, ${neighborhoods[1]} and ${neighborhoods[2]}`
      : neighborhoods.length
        ? `including ${neighborhoods.join(" and ")}`
        : "";
  const answer = areaPhrase
    ? `Yes. We cover ${location.name} and the surrounding areas ${areaPhrase}. Get in touch for a free quote and we’ll sort a date that suits you.`
    : `Yes. We cover ${location.name} and the surrounding area. Get in touch for a free quote and we’ll sort a date that suits you.`;
  return {
    question: `Do you do ${serviceTitle.toLowerCase()} in ${location.name}?`,
    answer,
  };
}

export const ExteriorFAQSection = ({ serviceSlug, location }: Props) => {
  const detail = getServiceDetail(serviceSlug);
  const service = getServiceBySlug(serviceSlug);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (!detail || !service) return null;
  const faqs = getSharedFaqs(serviceSlug, location);
  const locationFaq = location ? getLocationFaq(service.title, location) : null;
  const secondLocationFaq = location ? getSecondLocationFaq(location, serviceSlug) : null;
  const allFaqs = locationFaq
    ? [locationFaq, ...(secondLocationFaq ? [secondLocationFaq] : []), ...faqs]
    : faqs;

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
            {service.title} FAQs
          </h2>
          <div className="box-border flex flex-col gap-y-0 border border-neutral-200 rounded-xl overflow-hidden">
            {allFaqs.map((faq, index) => (
              <div key={index} className="border-b border-neutral-200 last:border-b-0">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 px-5 md:py-6 md:px-6 hover:bg-neutral-50 transition"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading uppercase text-base md:text-lg font-bold text-black">{faq.question}</span>
                  <span className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform ${openIndex === index ? "rotate-180" : ""}`} aria-hidden>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-200 ${openIndex === index ? "max-h-[500px]" : "max-h-0"}`}>
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[15px] leading-6 text-neutral-700 md:text-base">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
