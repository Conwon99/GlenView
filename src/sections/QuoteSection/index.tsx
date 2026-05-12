import { QuoteForm } from "./components/QuoteForm";
import { TermsAndConditions } from "./components/TermsAndConditions";
import { PHONE_DISPLAY, PHONE_E164 } from "@/constants/site";

function phoneGtag(pathname: string) {
  const gtag =
    typeof window !== "undefined" ? (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag : undefined;
  if (typeof gtag !== "function") return;
  let eventName = "phone_quote";
  if (pathname.includes("/services")) eventName = "phone_services";
  gtag("event", eventName, {
    event_category: "Phone",
    event_label: pathname,
  });
}

export type QuoteSectionProps = {
  showTerms?: boolean;
};

export const QuoteSection = ({ showTerms = true }: QuoteSectionProps) => {
  return (
    <section
      id="contact"
      className="relative bg-neutral-200 pt-[100px] pb-[60px] md:pt-[130px] md:pb-[100px]"
    >
      <div className="relative mx-auto max-w-[1204px] px-5 md:px-8">
        <div className="overflow-hidden rounded-2xl shadow-2xl md:grid md:grid-cols-2 md:min-h-[520px] md:rounded-3xl">
          <div className="relative min-h-[300px] md:min-h-0">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/hero/hero-main.jpg')" }}
            />
            <div className="absolute inset-0 bg-black/45" />
            <div className="relative z-10 flex h-full flex-col justify-center px-8 py-12 md:px-10 md:py-14 lg:px-14">
              <h2 className="max-w-md font-heading text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl lg:text-[2.65rem] lg:leading-[1.12]">
                Get in touch for your free, no-obligation quote
              </h2>
              <a
                href={`tel:${PHONE_E164}`}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    phoneGtag(window.location.pathname);
                  }
                }}
                className="mt-8 inline-flex w-fit items-center gap-3 rounded-full bg-black/65 px-6 py-4 text-xl font-semibold text-white backdrop-blur-md ring-1 ring-white/15 transition hover:bg-black/80 md:text-2xl md:px-7 md:py-[1.125rem]"
              >
                <svg
                  className="h-6 w-6 shrink-0 md:h-8 md:w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          <div className="bg-[#2d2d2d] px-8 py-10 md:flex md:flex-col md:justify-center md:px-10 md:py-12 lg:px-14">
            <QuoteForm />
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-[700px]">
          {showTerms && <TermsAndConditions />}
        </div>
      </div>
    </section>
  );
};
