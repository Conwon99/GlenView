import {
  BUSINESS_NAME,
  META_AREA_PHRASE,
  PHONE_DISPLAY,
  PHONE_E164,
  REGISTERED_LOCALITY,
  REGISTERED_POSTCODE,
  REGISTERED_STREET,
} from "@/constants/site";

export const AdFooter = () => {
  return (
    <section className="text-white bg-blue-900 box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8 text-center">
        <div className="text-2xl font-bold font-heading uppercase">{BUSINESS_NAME}</div>
        <p className="mt-4 text-[15px] leading-6 text-white/80 md:text-base">
          Professional render cleaning across {META_AREA_PHRASE}.
        </p>
        <div className="mt-6 text-[15px] leading-6 text-white/80 md:text-base">
          <a href={`tel:${PHONE_E164}`} className="font-semibold text-white hover:text-white/90">
            {PHONE_DISPLAY}
          </a>
          <span className="block mt-1">
            {REGISTERED_STREET}, {REGISTERED_LOCALITY}, {REGISTERED_POSTCODE}
          </span>
        </div>
        <div className="box-border caret-transparent border-t border-white/20 mt-8 pt-6 md:mt-10">
          <div className="text-[15px] box-border caret-transparent leading-6 text-white/60 md:text-base">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};
