import { cn } from "@/lib/utils";

/**
 * @param {"accent"|"outline"|"ghost"|"neutral"} variant
 * @param {"sm"|"md"|"lg"} size
 * @param {boolean} pill - rounded-full if true
 */
export default function Button({
  children,
  variant = "accent",
  size = "md",
  pill = true,
  className = "",
  href,
  external = false,
  ...props
}) {
  const base = "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-95";

  const variants = {
    accent: "btn btn-accent",
    outline: "btn btn-outline btn-accent",
    ghost: "btn btn-ghost",
    neutral: "btn btn-neutral",
  };

  const sizes = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  const classes = cn(
    base,
    variants[variant],
    sizes[size],
    pill && "rounded-full",
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        download={!external ? true : undefined}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
