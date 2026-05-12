import { packagesData, categoryLabels } from "../../data/packages";
import type { PackageData } from "../../data/packages";

const categoryOrder: PackageData["category"][] = [
  "roof-cleaning",
  "exterior-clean",
  "maintenance",
];

/** Gallery image for packages hero background */
const PACKAGES_HERO_IMAGE = "/gallery/WhatsApp Image 2026-02-02 at 11.18.23 PM (3).jpeg";

/** Service section images from home page - used as section headers */
const categoryImages: Record<PackageData["category"], string> = {
  "roof-cleaning": "/portfolio/roofclean1.jpg",
  "exterior-clean": "/portfolio/driveway-cleaning.jpg",
  maintenance: "/portfolio/pressure-washing.jpg",
};

export const PackagesOverview = () => {
  const byCategory = categoryOrder.map((cat) => ({
    categoryId: cat,
    label: categoryLabels[cat],
    packages: packagesData.filter((p) => p.category === cat),
    imageUrl: categoryImages[cat],
  }));

  return (
    <>
      {/* Hero with background image from gallery - pt clears fixed navbar */}
      <section
        className="relative min-h-[280px] md:min-h-[360px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-[120px] md:pt-[150px]"
        style={{ backgroundImage: `url("${PACKAGES_HERO_IMAGE.replace(/"/g, "%22")}")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-5">
          <div className="inline-block border border-white/80 px-3 py-1 rounded-[1000px] mb-4">
            <span className="font-medium leading-[22px] text-white">Packages & Pricing</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-tight md:text-5xl md:leading-tight font-heading uppercase text-white">
            Packages Overview
          </h2>
        </div>
      </section>

      <section className="box-border py-[60px] md:py-[100px]">
        <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
          <div className="box-border flex flex-col gap-y-16 md:gap-y-20">
            {byCategory.map(({ categoryId, label, packages, imageUrl }) => (
              <div key={categoryId}>
                {/* Section header with image */}
                <div className="relative rounded-xl overflow-hidden border border-blue-800 shadow-lg bg-blue-950 min-h-[100px] md:min-h-[120px] flex items-center justify-center p-6 md:p-8 mb-6 md:mb-8">
                  <img
                    src={imageUrl}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-blue-950/85" />
                  <h3 className="relative font-heading uppercase text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-white text-center">
                    {label}
                  </h3>
                </div>

                {/* Package summary cards - full width, stacked vertically */}
                <div className="flex flex-col gap-6 md:gap-8">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col w-full md:flex-row"
                    >
                      {pkg.imageUrl && (
                        <div className="relative w-full md:w-[320px] lg:w-[380px] md:min-h-[200px] md:shrink-0 aspect-[4/3] md:aspect-auto bg-neutral-100 overflow-hidden">
                          <img
                            src={pkg.imageUrl}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-5 md:p-6 flex-1 flex flex-col min-w-0">
                        <div className="mb-3">
                          <h4 className="font-heading uppercase text-base md:text-lg font-bold text-black leading-tight">
                            {pkg.title}
                          </h4>
                          {pkg.tagline && (
                            <p className="font-heading uppercase text-sm text-neutral-600 mt-0.5">
                              &ldquo;{pkg.tagline}&rdquo;
                            </p>
                          )}
                        </div>
                        <p className="font-figtree text-[15px] text-neutral-700 leading-6 flex-1">
                          {pkg.summary}
                        </p>
                        <p className="font-heading uppercase text-lg font-bold text-black mt-4">
                          {pkg.priceDisplay}
                        </p>
                        <a
                          href={`/packages/${categoryId}/${pkg.id}`}
                          className="mt-4 inline-block text-center text-white font-figtree text-sm font-medium py-2.5 px-4 rounded-lg bg-cta hover:bg-cta-dark border border-transparent transition w-full"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <p className="text-[15px] text-neutral-600 md:text-base text-center max-w-[560px] mx-auto">
              All packages are tailored to your property. Get a quote for exact pricing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
