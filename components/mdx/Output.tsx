interface OutputProps {
  text: string;
}

export default function Output({ text }: OutputProps) {
  return (
    <div className="mb-4 bg-slate-900/50 border border-slate-700/50 rounded-lg p-4 overflow-x-auto">
      <span className="text-xs text-slate-500 uppercase tracking-wide">
        Resultado:
      </span>
      <pre
        className="text-sm font-mono mt-2 whitespace-pre text-slate-300"
        style={{ fontVariantLigatures: "none" }}
      >
        {text.trim()}
      </pre>
    </div>
  );
}
