import type { BeforeAfterPair } from "@/sections/CoreValuesSection/components/BeforeAfterSlideshow";

export const beforeAfterGalleries: Record<string, BeforeAfterPair[]> = {
  "render-softwashing": [
    {
      before: "/portfolio/render-before-after/gable-before.jpg",
      after: "/portfolio/render-before-after/gable-after.jpg",
      alt: "Render softwashing on gable wall",
    },
    {
      before: "/portfolio/render-before-after/rear-elevation-before.jpg",
      after: "/portfolio/render-before-after/rear-elevation-after.jpg",
      alt: "Render softwashing on rear elevation",
    },
  ],
};

export function getBeforeAfterGallery(serviceSlug: string): BeforeAfterPair[] | undefined {
  return beforeAfterGalleries[serviceSlug];
}
