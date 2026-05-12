import { packagesData, categoryLabels } from "../../data/packages";
import type { PackageData } from "../../data/packages";
import { PackageCard } from "../PackagesOverview/components/PackageCard";

/** Category hero background images (same as overview card headers) */
const categoryHeroImages: Record<PackageData["category"], string> = {
  "roof-cleaning": "/portfolio/roofclean1.jpg",
  "exterior-clean": "/portfolio/driveway-cleaning.jpg",
  maintenance: "/portfolio/pressure-washing.jpg",
};

type PackageCategorySectionProps = {
  categoryId: PackageData["category"];
};

export const PackageCategorySection = ({ categoryId }: PackageCategorySectionProps) => {
  const label = categoryLabels[categoryId];
  const packages = packagesData.filter((p) => p.category === categoryId);
  const heroImage = categoryHeroImages[categoryId];

  return (
    <>
      {/* Hero with background image - matches packages overview style */}
      <section
        className="relative min-h-[280px] md:min-h-[360px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-[120px] md:pt-[150px]"
        style={{ backgroundImage: `url("${heroImage.replace(/"/g, "%22")}")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-5">
          <a
            href="/packages/"
            className="inline-block text-sm font-figtree text-white/90 hover:text-white mb-4"
          >
            ← Back to Packages
          </a>
          <div className="inline-block border border-white/80 px-3 py-1 rounded-[1000px] mb-4">
            <span className="font-medium leading-[22px] text-white">Packages & Pricing</span>
          </div>
          <div className="w-[80%] mx-auto text-center">
            <h1 className="font-heading uppercase text-3xl font-bold tracking-[-0.52px] leading-tight md:text-5xl md:leading-tight text-white">
              {label}
            </h1>
          </div>
        </div>
      </section>

      <section className="box-border py-[60px] md:py-[100px]">
        <div className="box-border w-full max-w-[1204px] mx-auto px-5 md:px-8">
          <div className="box-border flex flex-col gap-y-10 w-full">
            <div className="flex flex-wrap gap-6 md:gap-8 w-full">
              {packages.map((pkg) => (
                <div key={pkg.id} id={pkg.id} className="flex-[1_1_280px] min-w-[280px] scroll-mt-24">
                  <PackageCard package={pkg} />
                </div>
              ))}
            </div>
            <p className="text-[15px] text-neutral-600 md:text-base text-center max-w-[560px] mx-auto">
              All packages are tailored to your property. Get a quote for exact pricing.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
