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
        <div className="box-border caret-transparent flex flex-col gap-y-4 max-w-[680px] mx-auto text-center">
          <div className="box-border caret-transparent flex justify-center">
            <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid">
              <div className="font-medium box-border caret-transparent leading-[22px]">Softwash vs Pressure Washing</div>
            </div>
          </div>
          <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase">
            Is Your Home Losing Its Curb Appeal?
          </h2>
          <p className="text-[15px] leading-6 text-neutral-600 md:text-base">
            Don't risk it with high pressure. Traditional pressure washing can chip paint, blast away mortar and damage your render or roughcast. We give your property the gentle treatment it deserves.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3 md:gap-5 md:mt-14">
          {benefits.map((benefit, i) => (
            <div key={i} className="rounded-2xl border border-neutral-200 p-6 md:p-8">
              <div className="text-white items-center bg-cta-light box-border caret-transparent flex h-10 w-10 justify-center overflow-hidden rounded-[50%] shrink-0">
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-medium text-black text-lg mt-4">{benefit.title}</div>
              <div className="text-[15px] leading-6 text-neutral-700 mt-2 md:text-base">{benefit.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
