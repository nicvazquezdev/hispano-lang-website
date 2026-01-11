import Card from "@/components/ui/Card";
import { SyntaxHighlighter } from "@/components/code";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <Card variant="outlined" className="bg-slate-900">
      <div className="overflow-x-auto">
        <pre className="text-sm whitespace-pre py-4">
          <SyntaxHighlighter code={code} />
        </pre>
      </div>
    </Card>
  );
}
