const benefits = [
  {
    title: "Instant Curb Appeal",
    description:
      "Your driveway is the first thing visitors see. Lifting years of dirt, oil and green growth makes the whole front of your home look cared for.",
  },
  {
    title: "Safer Underfoot",
    description:
      "Moss, algae and slimy build-up turn paving dangerously slippery in our wet Scottish weather. A thorough clean cuts the risk of slips and falls.",
  },
  {
    title: "Protects Your Surface",
    description:
      "Weeds and moss roots force blocks apart, trap moisture and speed up frost damage. Clearing them helps your paving, concrete or tarmac last longer.",
  },
  {
    title: "Stops Weeds Taking Hold",
    description:
      "We clear out the dirt and growth packed into joints and cracks, so weeds have nowhere to root and the surface stays tidier for longer.",
  },
  {
    title: "Adds Value When Selling",
    description:
      "A clean driveway gives buyers a great first impression and helps your property look its best in listing photos and on viewings.",
  },
  {
    title: "Cheaper Than Replacing",
    description:
      "Most tired-looking driveways aren't worn out — they're just dirty. Professional cleaning restores the original look for a fraction of the cost of new paving.",
  },
];

export const DrivewayBenefitsSection = () => {
  return (
    <section className="bg-neutral-100 box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent max-w-[760px]">
          <div className="box-border caret-transparent inline-block border border-neutral-300 px-3 py-1 rounded-[1000px] border-solid">
            <div className="font-medium box-border caret-transparent leading-[22px]">Why it matters</div>
          </div>
          <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] mt-[18px] mb-4 md:text-[52px] md:leading-[62px] font-heading uppercase md:mt-5">
            Benefits of Driveway Cleaning
          </h2>
          <p className="text-[15px] leading-6 text-neutral-600 md:text-base">
            A professional driveway clean does more than make your home look good. Here's what you get when we restore your block paving, concrete or tarmac.
          </p>
        </div>
        <div className="box-border caret-transparent grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:mt-12 md:gap-5 lg:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div key={i} className="box-border caret-transparent bg-white rounded-2xl p-6 md:p-7">
              <div className="text-black items-center bg-neutral-200 box-border caret-transparent flex h-8 w-8 justify-center overflow-hidden rounded-[50%]">
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-black text-base mt-4 md:text-lg">{benefit.title}</h3>
              <p className="text-[15px] leading-6 text-neutral-700 mt-2 md:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
