import { FiX } from "react-icons/fi";
import CodeSnippets from "./CodeSnippets";

interface MobileSnippetsOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onSnippetSelect: (code: string) => void;
}

export default function MobileSnippetsOverlay({
  isOpen,
  onClose,
  onSnippetSelect,
}: MobileSnippetsOverlayProps) {
  const handleSnippetSelect = (code: string) => {
    onSnippetSelect(code);
    onClose();
  };

  return (
    <div
      className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>
      <div
        className={`absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-slate-50 shadow-xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="h-full flex flex-col">
          <div className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
            <h3 className="font-semibold text-slate-900">Ejemplos de Código</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-hidden">
            <CodeSnippets onSnippetSelect={handleSnippetSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}
