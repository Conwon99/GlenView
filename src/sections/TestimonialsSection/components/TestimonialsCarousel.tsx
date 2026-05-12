import { TestimonialCard } from "@/sections/TestimonialsSection/components/TestimonialCard";
import { BUSINESS_NAME } from "@/constants/site";

export const TestimonialsCarousel = () => {
  const alt = `${BUSINESS_NAME} — customer photo`;
  return (
    <div className="box-border caret-transparent grid gap-6 md:grid-cols-3">
      <TestimonialCard
        ariaLabel="Testimonial 1"
        imageUrl="/portfolio/gal1.jpg"
        imageAlt={alt}
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-15.svg"
        testimonialText={'"The standard of service was 1st class. Roof and gutters look immaculate—would certainly recommend."'}
        authorName="Elaine Langlands"
      />
      <TestimonialCard
        ariaLabel="Testimonial 2"
        imageUrl="/portfolio/gal2.jpg"
        imageAlt={alt}
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-16.svg"
        testimonialText={'"Roof and gutters look great—the whole property is much tidier. Highly recommend."'}
        authorName="Baxter"
      />
      <TestimonialCard
        ariaLabel="Testimonial 3"
        imageUrl="/portfolio/gal3.jpg"
        imageAlt={alt}
        iconUrl="https://c.animaapp.com/mhnzg6knJo6lE7/assets/icon-16.svg"
        testimonialText={'"Attention to detail is second to none—driveway and windows always look brilliant."'}
        authorName="Katie Lindsay"
      />
    </div>
  );
};
