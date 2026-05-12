import { HeroContent } from "@/sections/Hero/components/HeroContent";

export const Hero = () => {
  return (
    <section className="relative text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url('/hero/hero-main.jpg')`,
            backgroundPosition: 'center'
          }}
        ></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1204px] flex-col justify-end px-5 pb-8 pt-32 supports-[min-height:100dvh]:min-h-[100dvh] md:px-8 md:pb-12 md:pt-28">
        <HeroContent />
      </div>
    </section>
  );
};
