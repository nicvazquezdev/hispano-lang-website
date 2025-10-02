import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
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
    default: "bg-white shadow-sm",
    outlined: "bg-white border border-gray-200",
    elevated: "bg-white shadow-lg hover:shadow-xl",
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
