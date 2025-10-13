interface InfoBlockProps {
  emoji: string;
  title: string;
  description: string;
  className?: string;
}

export default function InfoBlock({
  emoji,
  title,
  description,
  className = "",
}: InfoBlockProps) {
  return (
    <div
      className={`rounded-2xl p-8 max-w-2xl mx-auto bg-gradient-to-br from-slate-800/90 via-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 shadow-xl ${className}`}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-lg font-semibold text-slate-100 mb-4">{title}</h3>
      <p className="text-slate-300 text-lg leading-relaxed">{description}</p>
    </div>
  );
}
