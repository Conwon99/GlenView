import { useEffect, useState } from "react";

export type BeforeAfterPair = {
  before: string;
  after: string;
  alt: string;
};

type Props = {
  pairs: BeforeAfterPair[];
  intervalMs?: number;
};

export const BeforeAfterSlideshow = ({ pairs, intervalMs = 1000 }: Props) => {
  const [index, setIndex] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prevShowAfter) => {
        if (prevShowAfter) {
          setIndex((prevIndex) => (prevIndex + 1) % pairs.length);
        }
        return !prevShowAfter;
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, [pairs.length, intervalMs]);

  if (pairs.length === 0) return null;

  const label = showAfter ? "After" : "Before";

  return (
    <div className="relative h-full w-full">
      {pairs.map((pair, pairIndex) =>
        [pair.before, pair.after].map((src, imgIndex) => {
          const isActive = pairIndex === index && (imgIndex === 1) === showAfter;
          return (
            <img
              key={`${pairIndex}-${imgIndex}`}
              src={src}
              alt={`${pair.alt} — ${imgIndex === 1 ? "after" : "before"}`}
              sizes="(max-width: 767px) 100vw, 700px"
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ease-in-out ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              aria-hidden={!isActive}
            />
          );
        })
      )}
      <span
        key={`${index}-${showAfter}`}
        className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-sm font-medium text-white shadow-md ${
          showAfter ? "bg-emerald-600" : "bg-neutral-800"
        }`}
      >
        {label}
      </span>
      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {pairs.map((_, dotIndex) => (
          <span
            key={dotIndex}
            className={`h-1.5 rounded-full transition-all ${
              dotIndex === index ? "w-5 bg-white" : "w-1.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
