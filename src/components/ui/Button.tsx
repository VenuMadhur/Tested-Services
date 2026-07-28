import { type ReactNode, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  as?: "button" | "a";
  href?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-emerald-600 text-white shadow-glow hover:bg-emerald-500 focus-visible:ring-emerald-400",
  secondary:
    "bg-white text-brand-800 border border-brand-100 shadow-soft hover:border-brand-300 hover:bg-brand-50",
  ghost: "bg-transparent text-white border border-white/30 hover:bg-white/10",
};

export default function Button({
  variant = "primary",
  children,
  className = "",
  as = "button",
  href,
  ...props
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 active:scale-[0.97] ${variants[variant]} ${className}`;

  if (as === "a" && href) {
    return (
      <a href={href} className={classes}>
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
