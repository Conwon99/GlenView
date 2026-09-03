import { BUSINESS_NAME } from "@/constants/site";

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
          href="/contact/"
          aria-label={`Get a free quote from ${BUSINESS_NAME}`}
          className="text-black items-center bg-cta box-border caret-transparent flex gap-x-2 max-w-full text-center border px-4 py-2 rounded-[100px] border-solid border-transparent font-semibold whitespace-nowrap text-sm transition-colors hover:bg-white hover:border-cta-dark md:text-base"
        >
          Get a Free Quote
        </a>
      </div>
    </div>
  );
};
