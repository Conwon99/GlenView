import { BUSINESS_NAME, PHONE_DISPLAY, PHONE_E164 } from "@/constants/site";

export const AdNavbar = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white box-border caret-transparent flex justify-center w-full z-[9999] px-5 py-2 top-0 md:px-[30px] md:py-2">
      <div className="relative bg-white box-border caret-transparent flex items-center justify-between max-w-full w-full z-[5] rounded-[100px] md:max-w-[1140px]">
        <div className="box-border caret-transparent shrink-0">
          <span className="relative text-neutral-900 box-border caret-transparent block h-24 max-h-24 overflow-visible md:h-32 md:max-h-32">
            <img
              src="/logo.png"
              alt={`${BUSINESS_NAME} logo`}
              className="box-border caret-transparent inline-block max-w-full h-24 w-24 object-contain md:h-32 md:w-32"
              width={500}
              height={500}
              decoding="async"
            />
          </span>
        </div>
        <a
          href={`tel:${PHONE_E164}`}
          aria-label={`Call ${BUSINESS_NAME} on ${PHONE_DISPLAY}`}
          className="flex items-center gap-2 font-semibold text-neutral-900 tabular-nums whitespace-nowrap text-base transition-colors hover:text-cta-dark md:gap-2.5 md:text-xl"
        >
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cta-light text-white md:h-9 md:w-9">
            <svg
              className="h-4 w-4 shrink-0 text-current md:h-[18px] md:w-[18px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden
            >
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
          </span>
          {PHONE_DISPLAY}
        </a>
      </div>
    </div>
  );
};
