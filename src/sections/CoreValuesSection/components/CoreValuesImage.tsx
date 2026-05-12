import { BUSINESS_NAME } from "@/constants/site";

export const CoreValuesImage = () => {
  return (
    <div className="box-border caret-transparent gap-y-4 flex flex-col w-full max-w-full md:max-w-none md:w-auto md:max-w-[700px]">
      <div className="box-border caret-transparent blur-0 h-[300px] w-full overflow-hidden rounded-2xl md:h-[600px] md:w-full">
        <img
          src="/portfolio/gal1.jpg"
          sizes="(max-width: 767px) 100vw, 700px"
          alt={`${BUSINESS_NAME} — our work`}
          className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  );
};
