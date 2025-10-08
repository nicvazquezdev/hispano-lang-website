import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  prev?: boolean;
  next?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  prev = false,
  next = false,
  ...props
}: ButtonProps) {
  const baseClasses =
    "font-semibold transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold rounded-xl shadow-2xl transform transition-all duration-300",
    secondary:
      "bg-gray-200 text-gray-700 hover:bg-gray-300 focus:ring-gray-500",
    outline:
      "border-2 border-slate-300 text-slate-700 bg-white hover:bg-slate-50 rounded-xl font-semibold",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={combinedClasses} {...props}>
      <div className={`flex flex-col ${prev ? "items-start" : "items-end"}`}>
        <div
          className={`text-xs ${
            variant === "outline" ? "text-slate-500" : "text-white/80"
          }`}
        >
          {prev ? "← Anterior" : next ? "Siguiente →" : ""}
        </div>
        {children}
      </div>
    </button>
  );
}
