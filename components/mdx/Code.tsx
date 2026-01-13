import CodeBlock from "@/components/docs/CodeBlock";

interface CodeProps {
  code: string;
}

export default function Code({ code }: CodeProps) {
  return (
    <div className="mb-4">
      <CodeBlock code={code.trim()} />
    </div>
  );
}
