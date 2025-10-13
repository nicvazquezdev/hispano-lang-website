import GitHubIcon from "@/components/ui/GitHubIcon";

interface OpenSourceBadgeProps {
  className?: string;
}

export default function OpenSourceBadge({
  className = "",
}: OpenSourceBadgeProps) {
  return (
    <a
      href="https://github.com/nicvazquezdev/hispano-lang"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-full hover:border-purple-400 hover:shadow-md transition-all duration-300 group ${className}`}
    >
      <GitHubIcon className="w-4 h-4 text-slate-300 group-hover:text-purple-400 transition-colors" />
      <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-purple-400 transition-colors">
        Open Source en GitHub
      </span>
      <svg
        className="w-4 h-4 text-slate-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </a>
  );
}
