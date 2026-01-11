import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "light" | "dark";
  badge?: { emoji: string; text: string };
  title?: string;
  titleGradient?: string;
  description?: string;
}

export default function Section({
  children,
  className = "",
  background = "light",
  badge,
  title,
  titleGradient,
  description,
}: SectionProps) {
  const textClasses = {
    light: {
      badge: "text-slate-200",
      title: "text-slate-100",
      description: "text-slate-300",
    },
    dark: {
      badge: "text-white/90",
      title: "text-white",
      description: "text-white/80",
    },
  };

  return (
    <section className={`py-20 relative overflow-hidden ${className}`}>
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header opcional */}
        {(badge || title || description) && (
          <div className="text-center mb-16">
            {badge && (
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 ${textClasses[background].badge} mb-6`}>
                <span>{badge.emoji}</span>
                <span className="text-sm font-medium">{badge.text}</span>
              </div>
            )}
            {title && (
              <h2
                className={`text-4xl lg:text-5xl font-bold ${textClasses[background].title} mb-6`}
              >
                {title}
                {titleGradient && (
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {titleGradient}
                  </span>
                )}
              </h2>
            )}

            {description && (
              <p
                className={`text-xl ${textClasses[background].description} max-w-3xl mx-auto leading-relaxed`}
              >
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
