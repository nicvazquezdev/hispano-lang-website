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
      className={`bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto ${className}`}
    >
      <div className="text-4xl mb-4">{emoji}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-600 text-lg leading-relaxed">{description}</p>
    </div>
  );
}
