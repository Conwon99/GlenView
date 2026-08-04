import { getRecentJobs } from "@/data/recentJobs";

type Props = { serviceSlug: string };

export const RecentJobsSection = ({ serviceSlug }: Props) => {
  const jobs = getRecentJobs(serviceSlug);
  if (!jobs || jobs.length === 0) return null;

  return (
    <section className="bg-neutral-100 box-border caret-transparent py-[60px] md:py-[100px]">
      <div className="box-border caret-transparent max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="box-border caret-transparent flex flex-col gap-y-4">
          <div className="box-border caret-transparent flex justify-center">
            <div className="box-border caret-transparent border border-neutral-200 px-3 py-1 rounded-[1000px] border-solid bg-white">
              <div className="font-medium box-border caret-transparent leading-[22px]">Recent Jobs</div>
            </div>
          </div>
          <h2 className="text-3xl font-bold box-border caret-transparent tracking-[-0.52px] leading-[35px] md:text-[52px] md:leading-[62px] font-heading uppercase text-center max-w-[680px] mx-auto">
            Before &amp; After Results
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-10 md:grid-cols-3 md:gap-5 md:mt-14">
          {jobs.map((job, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white border border-neutral-200">
              <div className="grid grid-cols-2">
                <div className="relative aspect-[3/4]">
                  <img
                    src={job.before}
                    alt={`${job.alt} — before`}
                    sizes="(max-width: 767px) 50vw, 200px"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-white shadow-md">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[3/4]">
                  <img
                    src={job.after}
                    alt={`${job.alt} — after`}
                    sizes="(max-width: 767px) 50vw, 200px"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-medium text-white shadow-md">
                    After
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
