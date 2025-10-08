interface FormattedTextProps {
  text: string;
  className?: string;
}

// Helper function to format text with bold and code markers
function formatTextWithMarkup(text: string) {
  // First handle bold text (**text**)
  const boldParts = text.split(/(\*\*.*?\*\*)/g);

  return boldParts.map((part, boldIndex) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      // This is bold text, now check for code within it
      const boldContent = part.slice(2, -2);
      const codeParts = boldContent.split(/(`.*?`)/g);

      return (
        <strong key={boldIndex} className="font-semibold">
          {codeParts.map((codePart, codeIndex) => {
            if (codePart.startsWith("`") && codePart.endsWith("`")) {
              return (
                <code
                  key={codeIndex}
                  className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm font-mono"
                >
                  {codePart.slice(1, -1)}
                </code>
              );
            }
            return codePart;
          })}
        </strong>
      );
    }

    // This is regular text, check for code markers
    const codeParts = part.split(/(`.*?`)/g);
    return codeParts.map((codePart, codeIndex) => {
      if (codePart.startsWith("`") && codePart.endsWith("`")) {
        return (
          <code
            key={`${boldIndex}-${codeIndex}`}
            className="bg-slate-100 text-slate-800 px-1 py-0.5 rounded text-sm font-mono"
          >
            {codePart.slice(1, -1)}
          </code>
        );
      }
      return codePart;
    });
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
              <span>
                {formatTextWithMarkup(line.trim().substring(1).trim())}
              </span>
            </div>
          );
        }
        // Handle regular lines
        return (
          line.trim() && (
            <p key={index} className="mb-2">
              {formatTextWithMarkup(line)}
            </p>
          )
        );
      })}
    </div>
  );
}
