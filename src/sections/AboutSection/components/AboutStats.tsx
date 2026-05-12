import { StatCard } from "@/sections/AboutSection/components/StatCard";

export const AboutStats = () => {
  return (
    <div className="box-border caret-transparent gap-x-4 grid auto-cols-[1fr] grid-cols-[1fr] grid-rows-[auto] gap-y-4 mt-10 md:grid-cols-[1fr_1fr_1fr_1fr] md:mt-14">
      <StatCard
        digits={["7", "8", "9", "0", "2"]}
        animationDigits={["2", "1", "2", "3", "4", "5"]}
        suffix="+"
        title="Happy customers referred and repeat bookings"
        description="Roofs, render, driveways and more—trusted across North Glasgow & Central Scotland."
        hasMultipleRows={true}
      />
      <StatCard
        digits={["7", "8", "9", "0", "2"]}
        animationDigits={["0", "1", "2", "3", "4", "5"]}
        suffix=""
        title="Responsive quotes & scheduling"
        description="We aim to reply quickly so you know cost and timings before work starts."
      />
      <StatCard
        digits={["7", "8", "9", "0", "9"]}
        animationDigits={["8", "1", "2", "3", "4", "5"]}
        suffix="%"
        title="Pride taken on every job"
        description="Careful technique, respectful crews, tidy sites—we treat your property like our own."
      />
      <StatCard
        digits={["7", "8", "9", "0", "5"]}
        animationDigits={["0", "1", "2", "3", "4", "5"]}
        suffix="+"
        title="Neighbourhoods covered weekly"
        description="Serving Bishopbriggs, Falkirk, Stirling, Lanarkshire and surrounds."
        hasMultipleRows={false}
      />
    </div>
  );
};
