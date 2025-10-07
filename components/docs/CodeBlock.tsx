import Card from "@/components/ui/Card";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <Card variant="outlined" className="bg-slate-50">
      <div className="overflow-x-auto">
        <pre className="text-sm text-slate-800 font-mono whitespace-pre py-4">
          {code}
        </pre>
      </div>
    </Card>
  );
}
