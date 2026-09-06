import type { Location } from "@/data/locations";
import { services } from "@/data/services";
import { getLocationServiceIntro } from "@/data/locationServiceIntros";
import { ServiceCard } from "@/sections/ServicePageServices/components/ServiceCard";

const ICON_URL = "https://c.animaapp.com/mkllold3CHU3xz/assets/icon-5.svg";

export type LocationServicesSectionProps = {
  location: Location;
};

export const LocationServicesSection = ({
  location,
}: LocationServicesSectionProps) => {
  return (
    <section id="services" className="bg-white box-border pb-[60px] md:pb-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div>
          <div className="items-start box-border gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border gap-x-4 flex flex-col max-w-[740px] gap-y-4">
              <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
                Our services in {location.name}
              </h2>
            </div>
          </div>
          <div
            role="list"
            className="box-border gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-7 mt-10 md:grid-cols-[1fr_1fr_1fr] md:gap-y-4 md:mt-14"
          >
            {services.map((service) => {
              const intro = getLocationServiceIntro(location, service, "card");
              return (
                <ServiceCard
                  key={service.slug}
                  href={`/${location.slug}/${service.slug}`}
                  imageUrl={service.imageUrl}
                  imageSizes="(max-width: 767px) 100vw, 740px"
                  title={service.title}
                  description={intro.paragraphs[0]}
                  iconUrl={ICON_URL}
                  iconAlt="Icon"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
