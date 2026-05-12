import { useState } from "react";

const faqs: { question: string; answer: string }[] = [
  {
    question: "What areas do you cover?",
    answer:
      "We cover North Glasgow, East Dunbartonshire, North Lanarkshire and east toward Falkirk and Stirling — including Bishopbriggs, Kirkintilloch, Cumbernauld, Coatbridge, Airdrie, Falkirk, Stirling and surrounding towns listed on our areas page. Get in touch to confirm we cover your postcode.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer roof steam cleaning, render softwashing, driveway cleaning, gutter cleaning, PVC cleaning, and window cleaning. All our exterior cleaning is done at your property—we're fully mobile.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill in the contact form or call us. We'll give you a free quote based on your property and the work you need. No obligation.",
  },
  {
    question: "Do you remove moss and algae from roofs?",
    answer:
      "Yes. Our roof steam cleaning safely removes moss, algae, and dirt from tiles and slates. We use methods that protect your roof and extend its life.",
  },
  {
    question: "Do you bring your own equipment and water?",
    answer:
      "Yes. We bring our own equipment and, where needed, water supply so we can work at your property with minimal disruption to you.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. We're fully insured. We're happy to confirm details when you book.",
  },
];

export const HomeFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border flex flex-col gap-y-8 md:gap-y-10">
          <div className="box-border inline-block border border-blue-200 px-3 py-1 rounded-[1000px] border-solid w-fit">
            <span className="font-medium leading-[22px]">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
            Frequently Asked Questions
          </h2>
          <div className="box-border flex flex-col gap-y-0 border border-blue-200 rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-blue-200 last:border-b-0"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left flex items-center justify-between gap-4 py-5 px-5 md:py-6 md:px-6 hover:bg-blue-50/50 transition"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-heading uppercase text-base md:text-lg font-bold text-black">
                    {faq.question}
                  </span>
                  <span
                    className={`shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? "max-h-[500px]" : "max-h-0"
                  }`}
                >
                  <div className="px-5 pb-5 md:px-6 md:pb-6 pt-0 text-[15px] leading-6 text-neutral-700 md:text-base">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
