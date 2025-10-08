interface FormattedTextProps {
  text: string;
  className?: string;
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
              <span>{line.trim().substring(1).trim()}</span>
            </div>
          );
        }
        // Handle regular lines
        return (
          line.trim() && (
            <p key={index} className="mb-2">
              {line}
            </p>
          )
        );
      })}
    </div>
  );
}
