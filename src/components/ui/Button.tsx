import { cn } from "@/lib/cn";

type Variant = "solid" | "outline" | "dark";
type Size = "md" | "lg";

const VARIANTS: Record<Variant, string> = {
  solid:
    "bg-gold text-black hover:bg-gold-2 shadow-[6px_6px_0_0_#000] hover:shadow-[3px_3px_0_0_#000] hover:translate-x-[3px] hover:translate-y-[3px]",
  outline:
    "border-2 border-gold text-gold hover:bg-gold hover:text-black",
  dark: "bg-surface text-cream border-2 border-line hover:border-gold hover:text-gold",
};

const SIZES: Record<Size, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  external,
  className,
  ...rest
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const ext = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
  return (
    <a
      href={href}
      {...ext}
      {...rest}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-display uppercase tracking-wide",
        "transition-all duration-150 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-ink",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
    >
      {children}
    </a>
  );
}
