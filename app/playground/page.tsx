"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PlaygroundHeader from "@/components/playground/PlaygroundHeader";
import MobileSnippetsOverlay from "@/components/playground/MobileSnippetsOverlay";
import DesktopSnippetsSidebar from "@/components/playground/DesktopSnippetsSidebar";
import PlaygroundLayout from "@/components/playground/PlaygroundLayout";
import { usePlaygroundCode } from "@/hooks/usePlaygroundCode";

export default function PlaygroundPage() {
  const [showSnippets, setShowSnippets] = useState(false);
  const [isSnippetsCollapsed, setIsSnippetsCollapsed] = useState(false);

  const {
    code,
    output,
    isRunning,
    setCode,
    runCode,
    handleSnippetSelect,
    handleShareCode,
    handleDownloadCode,
  } = usePlaygroundCode();

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <main className="max-w-[1800px] mx-auto px-4 sm:px-6 py-6 pt-20 sm:pt-24">
        <PlaygroundHeader
          onShare={handleShareCode}
          onDownload={handleDownloadCode}
          onOpenSnippets={() => setShowSnippets(true)}
        />

        <MobileSnippetsOverlay
          isOpen={showSnippets}
          onClose={() => setShowSnippets(false)}
          onSnippetSelect={handleSnippetSelect}
        />

        <div className="flex mb-6">
          <DesktopSnippetsSidebar
            isCollapsed={isSnippetsCollapsed}
            onToggleCollapse={() =>
              setIsSnippetsCollapsed(!isSnippetsCollapsed)
            }
            onSnippetSelect={handleSnippetSelect}
          />

          <PlaygroundLayout
            code={code}
            output={output}
            isRunning={isRunning}
            onCodeChange={setCode}
            onRun={runCode}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}
