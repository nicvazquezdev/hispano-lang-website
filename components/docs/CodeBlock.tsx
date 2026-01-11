import Card from "@/components/ui/Card";

interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  return (
    <Card variant="outlined" className="bg-slate-900">
      <div className="overflow-x-auto">
        <pre
          className="text-sm text-slate-100 font-mono whitespace-pre py-4"
          style={{ fontVariantLigatures: "none" }}
        >
          {code}
        </pre>
      </div>
    </Card>
  );
}
