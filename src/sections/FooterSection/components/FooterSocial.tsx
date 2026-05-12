import {
  BUSINESS_NAME,
  PHONE_E164,
  PHONE_DISPLAY,
  REGISTERED_LOCALITY,
  REGISTERED_POSTCODE,
  REGISTERED_STREET,
  META_AREA_PHRASE,
  FACEBOOK_PROFILE_URL,
} from "@/constants/site";

export const FooterSocial = () => {
  return (
    <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[250px]">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
        Contact & Info
      </div>
      <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3">
        <div className="text-[15px] box-border caret-transparent leading-6 text-white/80 md:text-base">
          <div className="font-medium text-white mb-1">Service area</div>
          <div>
            {META_AREA_PHRASE}
            <br />
            {REGISTERED_STREET}, {REGISTERED_LOCALITY}, {REGISTERED_POSTCODE}
          </div>
        </div>
        <div className="text-[15px] box-border caret-transparent leading-6 text-white/80 md:text-base">
          <div className="font-medium text-white mb-1">Phone</div>
          <div>
            <a href={`tel:${PHONE_E164}`} className="hover:text-white">
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-4 flex gap-y-0 mt-4">
          <a
            href={FACEBOOK_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${BUSINESS_NAME} on Facebook`}
            className="text-white/80 hover:text-white"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
