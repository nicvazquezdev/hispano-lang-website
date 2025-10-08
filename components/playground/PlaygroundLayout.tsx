import EnhancedCodeEditor from "./EnhancedCodeEditor";
import OutputConsole from "./OutputConsole";
import PlaygroundTips from "./PlaygroundTips";

interface PlaygroundLayoutProps {
  code: string;
  output: string;
  isRunning: boolean;
  onCodeChange: (code: string) => void;
  onRun: () => void;
}

export default function PlaygroundLayout({
  code,
  output,
  isRunning,
  onCodeChange,
  onRun,
}: PlaygroundLayoutProps) {
  return (
    <div className="flex-1 space-y-4">
      {/* Editor and output in two columns on desktop */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
        {/* Code editor */}
        <div className="h-[calc(100vh-280px)] min-h-[500px]">
          <EnhancedCodeEditor
            code={code}
            onChange={onCodeChange}
            onRun={onRun}
            isRunning={isRunning}
          />
        </div>

        {/* Output console */}
        <div className="h-[calc(100vh-280px)] min-h-[500px]">
          <OutputConsole output={output} isRunning={isRunning} />
        </div>
      </div>

      {/* Tips and shortcuts */}
      <PlaygroundTips />
    </div>
  );
}
