import { cn } from "@/lib/utils";

/**
 * Responsive centered container
 * @param {"default"|"narrow"|"wide"} size
 */
export default function Container({ children, size = "default", className = "" }) {
  const sizes = {
    default: "max-w-7xl",
    narrow: "max-w-4xl",
    wide: "max-w-screen-2xl",
  };

  return (
    <div className={cn(sizes[size], "mx-auto px-4 sm:px-6 lg:px-8 w-full", className)}>
      {children}
    </div>
  );
}