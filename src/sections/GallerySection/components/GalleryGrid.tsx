import { BUSINESS_NAME, META_AREA_PHRASE } from "@/constants/site";

export const GalleryGrid = () => {
  const images = [
    {
      src: "/portfolio/gal1.jpg",
      alt: `Roof and exterior cleaning — ${META_AREA_PHRASE}`,
    },
    {
      src: "/portfolio/gal2.jpg",
      alt: `Professional roof and property cleaning — ${BUSINESS_NAME}`,
    },
    {
      src: "/portfolio/gal3.jpg",
      alt: "Render softwashing and exterior cleaning results",
    },
    {
      src: "/portfolio/gal4.jpg",
      alt: `Driveway and gutter cleaning — ${META_AREA_PHRASE}`,
    },
    {
      src: "/portfolio/gal5.jpg",
      alt: "Roof steam cleaning and moss removal — before and after",
    },
    {
      src: "/portfolio/gal6.jpg",
      alt: `PVC and window cleaning — ${BUSINESS_NAME} gallery`,
    },
  ];

  return (
    <div className="box-border caret-transparent gap-x-[18px] grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-[18px] mt-10 md:gap-x-5 md:grid-cols-[1fr_1fr_1fr] md:gap-y-5 md:mt-14">
      {images.map((image, index) => (
        <a
          key={index}
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className={`relative box-border caret-transparent blur-0 overflow-hidden rounded-lg md:rounded-xl block cursor-pointer hover:opacity-90 transition-opacity ${
            index === 0
              ? "col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[400px] md:row-end-[span_2] md:row-start-[span_2] md:h-auto"
              : index === images.length - 1 && images.length % 3 === 1
              ? "col-end-[span_1] col-start-[span_1] row-end-[span_1] row-start-[span_1] h-[277px] md:col-end-[span_2] md:col-start-[span_2]"
              : "h-[277px]"
          }`}
        >
          <img
            src={image.src}
            sizes="100vw"
            alt={image.alt}
            className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
            width={1200}
            height={900}
            loading={index === 0 ? "eager" : "lazy"}
            decoding="async"
            onError={(e) => {
              console.error("Failed to load image:", image.src);
            }}
          />
        </a>
      ))}
    </div>
  );
};
