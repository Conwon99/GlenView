const benefits = [
  {
    title: "Safe & Damage-Free",
    description:
      "Gentle, low-pressure treatment that won't chip paint, crack render or blast out mortar joints — unlike high-pressure jet washing.",
  },
  {
    title: "Kills the Root Cause",
    description:
      "Our treatments target and kill algae, moss and mould at the root, not just blast away surface dirt — so your walls don't just look clean, they stay clean.",
  },
  {
    title: "Longer-Lasting Results",
    description:
      "Because we remove the growth rather than just the visible dirt, regrowth is slower — your property stays looking freshly cleaned for longer.",
  },
];

export const SoftwashComparisonSection = () => {
  return (
    <section className="bg-white box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent items-center gap-x-10 flex flex-col gap-y-10 md:flex-row-reverse">
          <div className="box-border caret-transparent w-full md:w-[500px] md:shrink-0">
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src="/portfolio/recent-jobs/job1-before.jpg"
                  alt="Render softwashing before"
                  sizes="(max-width: 767px) 50vw, 250px"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-white shadow-md">
                  Before
                </span>
              </div>
              <div className="relative overflow-hidden rounded-2xl aspect-[3/4]">
                <img
                  src="/portfolio/recent-jobs/job1-after.jpg"
                  alt="Render softwashing after"
                  sizes="(max-width: 767px) 50vw, 250px"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <span className="absolute right-3 top-3 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow-md">
                  After
                </span>
              </div>
            </div>
          </div>

          <div className="box-border caret-transparent flex-1 min-w-0">
            <div className="box-border caret-transparent flex justify-start">
              <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
                <div className="font-medium box-border caret-transparent leading-[22px]">Softwash vs Pressure Washing</div>
              </div>
            </div>
            <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] mt-[18px] mb-4 md:text-[52px] md:leading-[62px] font-heading uppercase md:mt-5">
              Is Your Home Losing Its Curb Appeal?
            </h2>
            <p className="text-[15px] leading-6 text-neutral-600 md:text-base">
              Don't risk it with high pressure. Traditional pressure washing can chip paint, blast away mortar and damage your render or roughcast. We give your property the gentle treatment it deserves.
            </p>
            <div className="box-border caret-transparent space-y-4 mt-7">
              {benefits.map((benefit, i) => (
                <div key={i} className="box-border caret-transparent gap-x-3 flex items-start gap-y-2">
                  <div className="text-white items-center bg-cta-light box-border caret-transparent flex h-8 w-8 justify-center overflow-hidden rounded-[50%] shrink-0 mt-0.5">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-black text-[15px] md:text-base">{benefit.title}</div>
                    <div className="text-[15px] leading-6 text-neutral-700 md:text-base">{benefit.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
