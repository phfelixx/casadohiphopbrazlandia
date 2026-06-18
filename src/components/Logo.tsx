import { cn } from "@/lib/cn";

/** Badge brasão — coroa + "CHH" evocando a marca da Casa do Hip Hop. */
export function LogoBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "grid aspect-square place-items-center rounded-full border-2 border-black bg-paper shadow-[3px_3px_0_0_#000]",
        className,
      )}
    >
      <svg viewBox="0 0 48 48" className="h-2/3 w-2/3" role="img" aria-label="Casa do Hip Hop">
        {/* coroa */}
        <path
          d="M9 17l5 5 5-9 5 9 5-9 5 9 5-5-3 15H12L9 17z"
          fill="#0a0a0a"
        />
        <circle cx="9" cy="15" r="2.4" fill="#0a0a0a" />
        <circle cx="24" cy="11" r="2.4" fill="#0a0a0a" />
        <circle cx="39" cy="15" r="2.4" fill="#0a0a0a" />
        {/* base / texto CHH */}
        <text
          x="24"
          y="44"
          textAnchor="middle"
          fontSize="10"
          fontWeight="800"
          fontFamily="Arial, sans-serif"
          fill="#0a0a0a"
        >
          CHH
        </text>
      </svg>
    </span>
  );
}

export function Logo({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={cn("flex items-center gap-3", className)}>
      <LogoBadge className="h-11 w-11 shrink-0" />
      {!compact && (
        <span className="flex flex-col leading-none">
          <span className="font-display text-lg uppercase tracking-tight text-paper">
            Casa do Hip Hop
          </span>
          <span className="font-marker text-sm text-gold -mt-0.5">Brazlândia</span>
        </span>
      )}
    </span>
  );
}
