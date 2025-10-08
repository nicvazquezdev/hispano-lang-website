import { FiShare2, FiDownload, FiMenu } from "react-icons/fi";

interface PlaygroundHeaderProps {
  onShare: () => void;
  onDownload: () => void;
  onOpenSnippets: () => void;
}

export default function PlaygroundHeader({
  onShare,
  onDownload,
  onOpenSnippets,
}: PlaygroundHeaderProps) {
  return (
    <div className="mb-6">
      {/* Desktop buttons */}
      <div className="flex items-center justify-end mb-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={onShare}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 text-sm text-slate-700 hover:text-slate-900 hover:bg-white border border-slate-200 rounded-lg transition-colors"
          >
            <FiShare2 className="w-3.5 h-3.5" />
            <span>Compartir</span>
          </button>
          <button
            onClick={onDownload}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 text-sm text-slate-700 hover:text-slate-900 hover:bg-white border border-slate-200 rounded-lg transition-colors"
          >
            <FiDownload className="w-3.5 h-3.5" />
            <span>Descargar</span>
          </button>
        </div>
      </div>

      {/* Mobile buttons */}
      <div className="flex sm:hidden space-x-2 justify-end">
        <button
          onClick={onOpenSnippets}
          className="flex items-center justify-center p-2 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors gap-2"
        >
          <FiMenu className="w-4 h-4 text-slate-700" />
          <span>Ejemplos</span>
        </button>
        <button
          onClick={onShare}
          className="flex items-center justify-center w-9 h-9 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <FiShare2 className="w-4 h-4 text-slate-700" />
        </button>
        <button
          onClick={onDownload}
          className="flex items-center justify-center w-9 h-9 text-sm bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
        >
          <FiDownload className="w-4 h-4 text-slate-700" />
        </button>
      </div>
    </div>
  );
}
