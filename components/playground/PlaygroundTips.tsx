import { FiCommand, FiBookOpen, FiLayers } from "react-icons/fi";

export default function PlaygroundTips() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="hidden md:block">
          <div className="flex items-center space-x-2 mb-3">
            <FiCommand className="w-4 h-4 text-purple-600" />
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
              Atajos
            </h4>
          </div>
          <ul className="text-xs text-slate-600 space-y-1.5">
            <li className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">
                Cmd
              </kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">
                Enter
              </kbd>
              <span className="text-slate-400">Ejecutar</span>
            </li>
            <li className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-slate-100 border border-slate-200 rounded text-[10px] font-mono">
                Tab
              </kbd>
              <span className="text-slate-400">Indentar</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <FiLayers className="w-4 h-4 text-purple-600" />
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
              Funciones
            </h4>
          </div>
          <ul className="text-xs text-slate-600 space-y-1.5">
            <li>Compartir código vía URL</li>
            <li>Descargar como archivo .txt</li>
            <li>Historial de ejecuciones</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <FiBookOpen className="w-4 h-4 text-purple-600" />
            <h4 className="font-semibold text-slate-900 text-xs uppercase tracking-wide">
              Recursos
            </h4>
          </div>
          <ul className="text-xs space-y-1.5">
            <li>
              <a
                href="/documentacion"
                className="text-purple-600 hover:text-purple-700 flex items-center space-x-1"
              >
                <span>Documentación</span>
              </a>
            </li>
            <li>
              <a
                href="/lecciones"
                className="text-purple-600 hover:text-purple-700 flex items-center space-x-1"
              >
                <span>Lecciones</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
