interface FormattedTextProps {
  text: string;
  className?: string;
}

// Helper function to format text with bold markers
function formatTextWithBold(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function FormattedText({
  text,
  className = "",
}: FormattedTextProps) {
  return (
    <div className={className}>
      {text.split("\n").map((line, index) => {
        // Handle bullet points
        if (line.trim().startsWith("•")) {
          return (
            <div key={index} className="flex items-center mb-2">
              <span className="text-slate-500 mr-2 mt-1">•</span>
              <span>{formatTextWithBold(line.trim().substring(1).trim())}</span>
            </div>
          );
        }
        // Handle regular lines
        return (
          line.trim() && (
            <p key={index} className="mb-2">
              {formatTextWithBold(line)}
            </p>
          )
        );
      })}
    </div>
  );
}
