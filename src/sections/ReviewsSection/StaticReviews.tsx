import { useRef } from "react";
import { GOOGLE_REVIEWS_URL } from "@/constants/site";

const REVIEWS = [
  {
    name: "Elaine Langlands",
    meta: "6 reviews · 3 photos",
    time: "4 months ago",
    initial: "E",
    initialBg: "bg-violet-400",
    text: "The standard of service was 1st class. From early contact and detailed estimate to the finished product. I am absolutely delighted with the care and attention given to my property. The roof and gutters look immaculate. I would certainly recommend and personally will use the company again in future. Mrs E. L",
  },
  {
    name: "Baxter",
    meta: "10 reviews",
    time: "a month ago",
    initial: "B",
    initialBg: "bg-amber-500",
    text: "Professional exterior cleaning from GlenView Exterior Cleaning. Arrived on time, polite and thorough. The roof and gutters look great and the whole property is much tidier. Would recommend for anyone in Central Scotland looking for roof or gutter cleaning.",
  },
  {
    name: "Katie Lindsay",
    meta: "1 review · 3 photos",
    time: "a year ago",
    initial: "K",
    initialBg: "bg-emerald-500",
    text: "5 Star rating. Gordie's attention to detail is second to none. I wouldn't use anyone else for exterior cleaning. The driveway and windows always look brilliant when he's finished. 10/10",
  },
];

function GoogleLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="shrink-0" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function StarRating() {
  return (
    <div className="flex gap-0.5 shrink-0" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function StaticReviews({ linksEnabled = true }: { linksEnabled?: boolean }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = scrollRef.current.clientWidth * 0.9;
    scrollRef.current.scrollBy({ left: dir === "left" ? -step : step, behavior: "smooth" });
  };

  return (
    <section className="bg-neutral-800 py-[60px] md:py-[100px]" aria-label="Customer reviews">
      <div className="max-w-[1204px] mx-auto px-5 md:px-8">
        <h2 className="text-center md:text-left mb-10 md:mb-12">
          {linksEnabled ? (
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase text-white hover:text-white/90 transition-colors"
            >
              What our customers say
            </a>
          ) : (
            <span className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase text-white">
              What our customers say
            </span>
          )}
        </h2>
        <div className="relative flex items-center gap-2 md:gap-4">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-600 transition focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous reviews"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth py-2 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {REVIEWS.map((review) => (
              <article
                key={review.name}
                className="shrink-0 w-[min(100%,320px)] md:w-[360px] snap-center rounded-xl bg-neutral-700/80 border border-neutral-600 p-6 flex flex-col"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div
                    className={`w-12 h-12 rounded-full ${review.initialBg} flex items-center justify-center text-white font-bold text-lg shrink-0`}
                  >
                    {review.initial}
                  </div>
                  <div className="min-w-0">
                    <p className="font-heading font-bold text-white uppercase text-base">{review.name}</p>
                    <p className="text-neutral-400 text-sm">{review.meta}</p>
                    <p className="text-neutral-500 text-sm">{review.time}</p>
                  </div>
                </div>
                <p className="text-white text-[15px] leading-6 md:text-base flex-grow mb-5">{review.text}</p>
                <div className="flex items-center justify-between mt-auto">
                  <StarRating />
                  {linksEnabled ? (
                    <a
                      href={GOOGLE_REVIEWS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0"
                      aria-label="View on Google (opens in new tab)"
                    >
                      <GoogleLogo />
                    </a>
                  ) : (
                    <span className="shrink-0" aria-label="Google review">
                      <GoogleLogo />
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
          <button
            type="button"
            onClick={() => scroll("right")}
            className="hidden md:flex shrink-0 w-12 h-12 items-center justify-center rounded-full bg-neutral-700 text-white hover:bg-neutral-600 transition focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next reviews"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
