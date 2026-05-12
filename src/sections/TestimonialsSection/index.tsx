import { TestimonialsCarousel } from "@/sections/TestimonialsSection/components/TestimonialsCarousel";

export const TestimonialsSection = () => {
  return (
    <section className="box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent">
          <div className="items-start box-border caret-transparent gap-x-7 flex flex-col justify-between gap-y-7 md:items-end md:gap-x-10 md:flex-row md:gap-y-10">
            <div className="items-start box-border caret-transparent gap-x-4 flex blur-0 flex-col max-w-none gap-y-4 md:max-w-[555px]">
              <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
                <div className="font-medium box-border caret-transparent leading-[22px]">
                  Testimonials
                </div>
              </div>
              <h2 className="text-3xl font-medium box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px]">
                <span className="text-3xl box-border caret-transparent leading-[35px] font-figtree md:text-[52px] md:leading-[62px]">What Our Clients Say</span>{" "}
                About Our Service
              </h2>
            </div>
            <div className="box-border caret-transparent blur-0 max-w-none md:max-w-[360px]">
              <div className="text-neutral-700 box-border caret-transparent">
                <div className="text-[15px] box-border caret-transparent leading-6 md:text-base">
                  Trusted by homeowners and businesses across Central Scotland—clients value straight answers, tidy crews, and predictable results on roof, render, driveway and gutter work.
                </div>
              </div>
            </div>
          </div>
          <div className="box-border caret-transparent mt-10 md:mt-14">
            <TestimonialsCarousel />
          </div>
        </div>
      </div>
    </section>
  );
};
