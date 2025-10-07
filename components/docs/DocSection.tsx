import Card from "@/components/ui/Card";
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
}

export default function DocSection({
  title,
  description,
  subsections,
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
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <code className="text-blue-800 font-mono">
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
      </div>
    </Card>
  );
}
