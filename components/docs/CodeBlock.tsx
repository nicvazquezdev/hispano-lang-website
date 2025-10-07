import Card from "@/components/ui/Card";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <Card variant="outlined" className="bg-slate-50">
      <div className="p-4">
        <pre className="text-sm text-slate-800 font-mono whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </Card>
  );
}
