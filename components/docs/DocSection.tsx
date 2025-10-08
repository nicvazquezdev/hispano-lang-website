import Link from "next/link";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import CodeBlock from "@/components/docs/CodeBlock";

interface SubSection {
  title: string;
  description?: string;
  code?: string;
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
    <Card variant="glass" className="bg-white/80 backdrop-blur-sm">
      <div className="md:p-6">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">{title}</h2>

        {description && (
          <p className="text-slate-600 mb-6 text-lg">{description}</p>
        )}

        <div className="space-y-8">
          {subsections.map((subsection, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold text-slate-800 mb-3">
                {subsection.title}
              </h3>

              {subsection.description && (
                <p className="text-slate-600 mb-4">{subsection.description}</p>
              )}

              {subsection.syntax && (
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
                  <code className="text-purple-800 font-mono">
                    {subsection.syntax}
                  </code>
                </div>
              )}

              {subsection.code && (
                <div className="mb-4">
                  <CodeBlock code={subsection.code} />
                </div>
              )}

              {subsection.notes && subsection.notes.length > 0 && (
                <ul className="list-disc list-inside text-slate-600 space-y-2">
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
          <div className="mt-12 pt-8 border-t border-slate-200">
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              {/* Botón Anterior */}
              <div className="flex-1">
                {previousSection ? (
                  <Link href={`/documentacion?seccion=${previousSection.id}`}>
                    <Button
                      variant="outline"
                      className="w-full justify-start group cursor-pointer"
                    >
                      <div className="text-left">
                        <div className="text-xs text-slate-500 mb-1">
                          ← Anterior
                        </div>
                        <div className="font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">
                          {previousSection.title}
                        </div>
                      </div>
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
                      className="w-full justify-end group cursor-pointer"
                    >
                      <div className="text-right">
                        <div className="text-xs text-slate-500 mb-1">
                          Siguiente →
                        </div>
                        <div className="font-semibold text-slate-800 group-hover:text-purple-600 transition-colors">
                          {nextSection.title}
                        </div>
                      </div>
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
