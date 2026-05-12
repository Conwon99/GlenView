import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_E164 } from "@/constants/site";

function trackNavPhoneClick() {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
  if (typeof gtag !== "function") return;
  const pathname = window.location.pathname;
  let eventName = "phone_nav";
  if (pathname.includes("/services")) eventName = "phone_services";
  gtag("event", eventName, {
    event_category: "Phone",
    event_label: pathname,
  });
}

export const NavActions = () => {
  return (
    <div className="items-center box-border caret-transparent flex shrink-0 grow-0 basis-auto justify-end justify-self-end gap-3 md:basis-[0%] md:grow md:shrink md:gap-4">
      <a
        href={`tel:${PHONE_E164}`}
        onClick={trackNavPhoneClick}
        className="hidden items-center gap-2 font-semibold text-neutral-900 tabular-nums transition-colors hover:text-cta-dark whitespace-nowrap text-lg md:inline-flex md:gap-2.5 md:text-xl"
        aria-label={`Call ${BUSINESS_NAME} on ${PHONE_DISPLAY}`}
      >
        <svg
          className="h-5 w-5 shrink-0 text-current md:h-6 md:w-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
        {PHONE_DISPLAY}
      </a>

      <div className="hidden md:flex md:items-center">
        <a
          href="/contact/"
          onClick={() => {
            if (typeof window === "undefined") return;
            const gtag = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
            if (typeof gtag === "function") {
              gtag("event", "quoteButton_nav", {
                event_category: "CTA",
                event_label: "Navigation",
              });
            }
          }}
          className="text-black items-center bg-cta box-border caret-transparent flex gap-x-3 max-w-full text-center border px-4 py-2 rounded-[100px] border-solid border-transparent hover:bg-white hover:border-cta-dark"
        >
          <div className="relative box-border caret-transparent overflow-hidden">
            <div className="box-border caret-transparent">
              <div className="relative text-sm font-medium leading-5 z-[2] md:text-base md:leading-6">Message Us</div>
            </div>
            <div className="absolute box-border caret-transparent w-full">
              <div className="relative text-sm font-medium leading-5 z-[2] md:text-base md:leading-6">Message Us</div>
            </div>
          </div>
          <div className="box-border caret-transparent">
            <div className="items-center box-border caret-transparent flex h-4 justify-center w-4">
              <img
                src="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-2.svg"
                alt=""
                className="box-border caret-transparent h-2 w-3"
              />
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
