import type { Location } from "@/data/locations";
import { services } from "@/data/services";
import {
  getLocationOpeningParagraphs,
  getLocationLocalKnowledgeParagraphs,
  formatNeighborhoodList,
} from "@/data/locationPageCopy";
import { getLocationServiceIntro } from "@/data/locationServiceIntros";

export type LocationContentSectionProps = {
  location: Location;
};

export const LocationContentSection = ({
  location,
}: LocationContentSectionProps) => {
  const { name } = location;
  const openingParagraphs = getLocationOpeningParagraphs(location);
  const localKnowledge = getLocationLocalKnowledgeParagraphs(location);
  const areaLabel =
    location.neighborhoods && location.neighborhoods.length > 0
      ? formatNeighborhoodList(location)
      : location.name;

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="max-w-[800px] prose prose-neutral">
          <header className="mb-12 not-prose space-y-4">
            {openingParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-[15px] text-neutral-700 leading-6 md:text-base"
              >
                {paragraph}
              </p>
            ))}
          </header>

          {services.map((service) => {
            const intro = getLocationServiceIntro(location, service);
            return (
              <article key={service.slug} className="mb-14 not-prose">
                <h2 className="text-2xl font-bold tracking-tight text-black mb-4 font-heading uppercase">
                  {intro.heading}
                </h2>
                <div className="space-y-4">
                  {intro.paragraphs.map((paragraph, idx) => (
                    <p
                      key={idx}
                      className="text-[15px] text-neutral-700 leading-6 md:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}

          <h2 className="text-2xl font-bold tracking-tight text-black mt-4 mb-4 font-heading uppercase not-prose">
            Why exterior cleaning matters in {name}
          </h2>
          <div className="space-y-4 text-[15px] text-neutral-700 leading-6 md:text-base mb-10 not-prose">
            <p className="font-medium text-neutral-800">
              Local knowledge for homes around {areaLabel}
            </p>
            {localKnowledge.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
