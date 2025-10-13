import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated" | "glass" | "interactive";
  padding?: "sm" | "md" | "lg";
  className?: string;
}

export default function Card({
  children,
  variant = "default",
  padding = "md",
  className = "",
  ...props
}: CardProps) {
  const baseClasses = "rounded-2xl transition-all duration-200";

  const variantClasses = {
    default: "bg-slate-800/50 shadow-sm border border-slate-700/50",
    outlined: "bg-slate-800/50 border border-slate-700",
    elevated:
      "bg-slate-800/50 shadow-lg hover:shadow-xl border border-slate-700/50",
    glass:
      "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-lg",
    interactive:
      "bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 shadow-lg hover:scale-105 transition-all duration-300 group",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
}
