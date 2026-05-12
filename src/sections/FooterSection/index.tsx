import { Logo } from "@/components/Logo";
import { FooterLinks } from "./components/FooterLinks";
import { FooterContact } from "./components/FooterContact";
import { FooterSocial } from "./components/FooterSocial";
import { FooterMap, type FooterMapProps } from "./components/FooterMap";
import { BUSINESS_NAME, META_AREA_PHRASE } from "@/constants/site";

export type FooterSectionProps = FooterMapProps;

export const FooterSection = ({ mapLocation }: FooterSectionProps) => {
  return (
    <section className="text-white bg-blue-900 box-border caret-transparent pt-[60px] pb-7 md:pt-[100px] md:pb-10">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent gap-x-6 flex flex-wrap justify-between gap-y-6 md:gap-x-8 md:gap-y-8">
            <div className="box-border caret-transparent basis-[100%] md:basis-[0%] md:grow md:max-w-[300px]">
              <Logo />
              <div className="box-border caret-transparent mt-6">
                <div className="text-[15px] box-border caret-transparent leading-6 text-white/80 md:text-base">
                  Professional exterior cleaning across {META_AREA_PHRASE}. Roof steam cleaning, render softwashing, driveway, gutter, PVC and window cleaning. We bring safe, effective service to your property.
                </div>
              </div>
            </div>
            <FooterLinks />
            <FooterContact />
            <FooterSocial />
          </div>
          <FooterMap mapLocation={mapLocation} />
          <div className="box-border caret-transparent border-t border-white/20 mt-10 pt-6 md:mt-14 md:pt-8">
            <div className="box-border caret-transparent gap-x-4 flex flex-col gap-y-4 md:flex-row md:justify-between md:gap-y-0">
              <div className="text-[15px] box-border caret-transparent leading-6 text-white/60 md:text-base">
                © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
              </div>
              <div className="box-border caret-transparent gap-x-6 flex flex-wrap gap-y-2 items-center">
                <a
                  href="https://codapixel.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] box-border caret-transparent leading-6 text-white/60 hover:text-white md:text-base"
                >
                  Designed by CodaPixel
                </a>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-[15px] box-border caret-transparent leading-6 text-white/60 hover:text-white md:text-base cursor-not-allowed opacity-70"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
