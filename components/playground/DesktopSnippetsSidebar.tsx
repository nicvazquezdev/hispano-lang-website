import CodeSnippets from "./CodeSnippets";

interface DesktopSnippetsSidebarProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onSnippetSelect: (code: string) => void;
}

export default function DesktopSnippetsSidebar({
  isCollapsed,
  onToggleCollapse,
  onSnippetSelect,
}: DesktopSnippetsSidebarProps) {
  return (
    <>
      {/* Sidebar */}
      <div
        className={`hidden lg:block flex-shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
          isCollapsed ? "w-0" : "w-80 mr-4"
        }`}
      >
        <div className="h-[calc(100vh-280px)] min-h-[500px] w-80">
          <CodeSnippets
            onSnippetSelect={onSnippetSelect}
            onCollapse={onToggleCollapse}
            showCollapseButton={true}
          />
        </div>
      </div>

      {/* Expand button when collapsed */}
      {isCollapsed && (
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex items-center justify-center w-10 h-20 bg-slate-800 border border-slate-700 rounded-lg hover:bg-slate-700 hover:border-purple-500 transition-all shadow-sm mr-4"
          title="Mostrar ejemplos"
        >
          <svg
            className="w-4 h-4 text-slate-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
