import { FeatureCard } from "@/sections/WhyUsSection/components/FeatureCard";
import { useEffect, useRef, useState } from "react";

export const DesktopGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const section = containerRef.current.closest('section');
      if (!section) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Calculate scroll progress through the section (0 to 1)
      const scrollStart = sectionTop - windowHeight;
      const scrollEnd = sectionTop + sectionHeight - windowHeight;
      const scrollProgress = Math.max(0, Math.min(1, (scrollY - scrollStart) / (scrollEnd - scrollStart)));

      // Calculate horizontal translation
      // Each group is 656px wide (max-w-[656px]) with 16px margin-right (mr-4)
      // Total width for 4 groups: (656 + 16) * 4 = 2688px
      // We want to scroll from 0 to show all 4 groups
      // Max translate should be -(totalWidth - containerWidth)
      const containerWidth = 656; // max-w-[656px]
      const groupWidth = 656; // w-full within 656px container
      const groupMargin = 16; // mr-4 = 16px
      const totalWidth = (groupWidth + groupMargin) * 4 - groupMargin; // Last group has no margin
      const maxTranslate = -(totalWidth - containerWidth);
      const translate = scrollProgress * maxTranslate;

      setTranslateX(translate);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      role="region"
      aria-label="carousel"
      className="relative bg-transparent box-border caret-transparent clear-both hidden opacity-0 text-center mt-10 md:block md:blur-0 md:opacity-100 md:mt-14"
      ref={containerRef}
    >
      <div className="relative box-border caret-transparent max-w-[656px] mx-auto overflow-hidden">
        <div 
          className="relative box-border caret-transparent h-full text-nowrap z-[1] will-change-transform"
          style={{ transform: `translateX(${translateX}px)` }}
        >
        <div
          aria-label="1 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-11.svg"
              title="Built for Scottish exteriors"
              description="Years of hands-on work on mossy roofs, algae-stained render, clogged gutters and tired driveways—we match the method to the substrate, not a one-size wash."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="/portfolio/gal1.jpg"
                sizes="100vw"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="2 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-12.svg"
              title="Straight talking & planning"
              description="You hear from us directly—scope, access and pricing explained up front—so bookings stay predictable and sites stay orderly from arrival to rinse-down."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="/portfolio/gal2.jpg"
                sizes="100vw"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="3 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-13.svg"
              title="Multiple exterior disciplines"
              description="Steam and low-pressure washing, biocide-treated softwashing, gutter clearing, fascia brightening and finishing detail—coordinate everything with one accountable crew."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="/portfolio/gal3.jpg"
                sizes="100vw"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        <div
          aria-label="4 of 4"
          role="group"
          className="relative box-border caret-transparent inline-block h-full text-left align-bottom w-[656px] mr-4 md:align-top"
        >
          <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row">
            <FeatureCard
              iconSrc="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-14.svg"
              title="Respectful of your property"
              description="We treat gardens, patios, paintwork and neighbours with care—protection where it matters and a proper tidy-up when we're finished."
              variant=""
              iconVariant=""
            />
            <div className="box-border caret-transparent basis-auto grow-0 shrink-0 h-[250px] min-h-0 min-w-0 overflow-hidden rounded-lg md:basis-[0%] md:grow md:shrink md:h-[348px] md:min-h-[auto] md:min-w-[auto]">
              <img
                src="/portfolio/gal4.jpg"
                alt="GlenView Exterior Cleaning — our work"
                className="box-border caret-transparent inline-block h-full max-w-full object-cover w-full"
              />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
