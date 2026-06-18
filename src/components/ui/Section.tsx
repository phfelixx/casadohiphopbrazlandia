import { cn } from "@/lib/cn";

export function Section({
  id,
  children,
  className,
  as: Tag = "section",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag id={id} className={cn("relative w-full py-20 sm:py-28", className)}>
      {children}
    </Tag>
  );
}
