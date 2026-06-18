import { cn } from "@/lib/cn";

export function Marquee({
  items,
  reverse = false,
  className,
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  // Duplicated track so the -50% translate loops seamlessly.
  const track = [...items, ...items];
  return (
    <div
      className={cn(
        "group relative flex w-full overflow-hidden border-y-2 border-black bg-gold py-3 select-none",
        className,
      )}
      aria-hidden="true"
    >
      <ul
        className={cn(
          "flex shrink-0 items-center gap-6 whitespace-nowrap pr-6",
          reverse ? "animate-marquee-rev" : "animate-marquee",
          "group-hover:[animation-play-state:paused]",
        )}
      >
        {track.map((word, i) => (
          <li key={i} className="flex items-center gap-6">
            <span className="font-display text-2xl uppercase tracking-tight text-black sm:text-3xl">
              {word}
            </span>
            <span className="text-xl text-black/70" aria-hidden>
              ✶
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
