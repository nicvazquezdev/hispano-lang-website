'use client';

interface CodeBlockProps {
  code: string;
  title?: string;
}

export default function CodeBlock({ code, title }: CodeBlockProps) {
  const lines = code.split('\n');

  return (
    <div className="rounded-lg border border-slate-700 overflow-hidden bg-slate-900">
      {title && (
        <div className="px-4 py-2 bg-slate-800/50 border-b border-slate-700">
          <span className="text-sm text-slate-400">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto">
        <div className="flex min-w-full">
          {/* Line numbers */}
          <div className="flex-shrink-0 bg-slate-800/30 border-r border-slate-700 select-none py-3">
            {lines.map((_, index) => (
              <div
                key={index}
                className="px-3 text-right text-sm text-slate-500 font-mono h-6 leading-6"
              >
                {index + 1}
              </div>
            ))}
          </div>
          {/* Code content */}
          <div className="flex-1 py-3 px-4 overflow-x-auto">
            <code className="text-sm font-mono">
              {lines.map((line, index) => (
                <div key={index} className="whitespace-pre h-6 leading-6">
                  {highlightSyntax(line)}
                </div>
              ))}
            </code>
          </div>
        </div>
      </div>
    </div>
  );
}

function highlightSyntax(line: string): React.ReactNode {
  const patterns: { regex: RegExp; className: string }[] = [
    { regex: /(\/\/.*)$/, className: 'text-slate-500' },
    { regex: /("[^"]*")/, className: 'text-green-400' },
    { regex: /\b(variable|var|si|sino|mientras|para|funcion|retornar|verdadero|falso|nulo|intentar|capturar|romper|continuar)\b/, className: 'text-purple-400' },
    { regex: /\b(mostrar|leer|longitud|agregar|eliminar|obtener|tipo|raiz|potencia|redondear|aleatorio|seno|coseno|tangente|absoluto|piso|techo|maximo|minimo)\b/, className: 'text-blue-400' },
    { regex: /\b(\d+\.?\d*)\b/, className: 'text-amber-400' },
  ];

  const result: React.ReactNode[] = [];
  let remaining = line;
  let key = 0;

  while (remaining.length > 0) {
    let earliestMatch: { index: number; length: number; className: string; match: string } | null = null;

    for (const pattern of patterns) {
      const match = remaining.match(pattern.regex);
      if (match && match.index !== undefined) {
        if (!earliestMatch || match.index < earliestMatch.index) {
          earliestMatch = {
            index: match.index,
            length: match[1]?.length || match[0].length,
            className: pattern.className,
            match: match[1] || match[0],
          };
        }
      }
    }

    if (earliestMatch) {
      if (earliestMatch.index > 0) {
        result.push(
          <span key={key++} className="text-slate-100">
            {remaining.slice(0, earliestMatch.index)}
          </span>
        );
      }
      result.push(
        <span key={key++} className={earliestMatch.className}>
          {earliestMatch.match}
        </span>
      );
      remaining = remaining.slice(earliestMatch.index + earliestMatch.length);
    } else {
      result.push(
        <span key={key++} className="text-slate-100">
          {remaining}
        </span>
      );
      break;
    }
  }

  return result.length > 0 ? result : <span className="text-slate-100">{line || ' '}</span>;
}
