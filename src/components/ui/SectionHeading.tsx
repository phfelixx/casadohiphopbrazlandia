import { cn } from "@/lib/cn";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-marker text-gold text-lg sm:text-xl -rotate-2",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-gold/70" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="font-display uppercase leading-[0.92] text-4xl sm:text-5xl md:text-6xl text-paper">
        {title}
      </h2>
      {lead && (
        <p
          className={cn(
            "max-w-2xl text-base sm:text-lg text-muted leading-relaxed",
            align === "center" && "mx-auto",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
