import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/docs/CodeBlock";

interface SubSection {
  title: string;
  description?: string;
  code?: string;
  output?: string;
  notes?: string[];
  syntax?: string;
}

interface DocSectionProps {
  title: string;
  description?: string;
  subsections: SubSection[];
  currentSection?: string;
  previousSection?: { id: string; title: string } | null;
  nextSection?: { id: string; title: string } | null;
}

export default function DocSection({
  title,
  description,
  subsections,
  previousSection,
  nextSection,
}: DocSectionProps) {
  return (
    <Card variant="glass" className="bg-slate-800/80 backdrop-blur-sm">
      <div className="md:p-6">
        <h2 className="text-3xl font-bold text-slate-100 mb-4">{title}</h2>

        {description && (
          <p className="text-slate-300 mb-6 text-lg">{description}</p>
        )}

        <div className="space-y-8">
          {subsections.map((subsection, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-slate-100 mb-3">
                {subsection.title}
              </h3>

              {subsection.description && (
                <p className="text-slate-300 mb-4">{subsection.description}</p>
              )}

              {subsection.syntax && (
                <div className="bg-purple-900/30 border border-purple-700/50 rounded-lg p-4 mb-4">
                  <code className="text-purple-300 font-mono">
                    {subsection.syntax}
                  </code>
                </div>
              )}

              {subsection.code && (
                <div className="mb-4">
                  <CodeBlock code={subsection.code} />
                </div>
              )}

              {subsection.output && (
                <div className="mb-4 bg-slate-900/50 border border-slate-700/50 rounded-lg p-4">
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Resultado:</span>
                  <pre className="text-sm text-green-400 font-mono mt-2 whitespace-pre">
                    {subsection.output}
                  </pre>
                </div>
              )}

              {subsection.notes && subsection.notes.length > 0 && (
                <ul className="list-disc list-inside text-slate-300 space-y-2">
                  {subsection.notes.map((note, noteIndex) => (
                    <li key={noteIndex}>{note}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* Navegación Circular */}
        {(previousSection || nextSection) && (
          <div className="mt-12 pt-8 border-t border-slate-700">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {/* Botón Anterior */}
              <div className="flex-1">
                {previousSection ? (
                  <Link href={`/documentacion?seccion=${previousSection.id}`}>
                    <Button
                      variant="outline"
                      className="w-full justify-start"
                      prev
                    >
                      {previousSection.title}
                    </Button>
                  </Link>
                ) : (
                  <div className="h-full"></div>
                )}
              </div>

              {/* Botón Siguiente */}
              <div className="flex-1">
                {nextSection ? (
                  <Link href={`/documentacion?seccion=${nextSection.id}`}>
                    <Button
                      variant="outline"
                      className="w-full justify-end"
                      next
                    >
                      {nextSection.title}
                    </Button>
                  </Link>
                ) : (
                  <div className="h-full"></div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
