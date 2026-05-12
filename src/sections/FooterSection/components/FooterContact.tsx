import {
  PHONE_E164,
  PHONE_DISPLAY,
  REGISTERED_LOCALITY,
  REGISTERED_POSTCODE,
  REGISTERED_STREET,
} from "@/constants/site";

export const FooterContact = () => {
  return (
    <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[250px]">
      <div className="text-lg font-medium box-border caret-transparent leading-7 mb-4 md:text-xl md:mb-6">
        Contact
      </div>
      <div className="box-border caret-transparent gap-x-0 flex flex-col gap-y-3 text-[15px] text-white/80 md:text-base">
        <a href={`tel:${PHONE_E164}`} className="hover:text-white">
          {PHONE_DISPLAY}
        </a>
        <span>
          {REGISTERED_STREET}, {REGISTERED_LOCALITY}, {REGISTERED_POSTCODE}
        </span>
      </div>
    </div>
  );
};
