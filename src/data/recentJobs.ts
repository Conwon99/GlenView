export type RecentJob = {
  before: string;
  after: string;
  alt: string;
};

export const recentJobs: Record<string, RecentJob[]> = {
  "render-softwashing": [
    {
      before: "/portfolio/recent-jobs/job1-before.jpg",
      after: "/portfolio/recent-jobs/job1-after.jpg",
      alt: "Render softwashing job",
    },
    {
      before: "/portfolio/recent-jobs/job2-before.jpg",
      after: "/portfolio/recent-jobs/job2-after.jpg",
      alt: "Render softwashing job",
    },
    {
      before: "/portfolio/recent-jobs/job3-before.jpg",
      after: "/portfolio/recent-jobs/job3-after.jpg",
      alt: "Render softwashing job",
    },
  ],
};

export function getRecentJobs(serviceSlug: string): RecentJob[] | undefined {
  return recentJobs[serviceSlug];
}
