import { FiCommand, FiBookOpen, FiLayers } from "react-icons/fi";

export default function PlaygroundTips() {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-lg p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="hidden md:block">
          <div className="flex items-center space-x-2 mb-3">
            <FiCommand className="w-4 h-4 text-purple-400" />
            <h4 className="font-semibold text-slate-100 text-xs uppercase tracking-wide">
              Atajos
            </h4>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5">
            <li className="flex items-center space-x-1">
              <kbd className="px-1.5 py-0.5 bg-slate-700 border border-slate-600 rounded text-[10px] font-mono text-slate-200">
                Cmd
              </kbd>
              <span>+</span>
              <kbd className="px-1.5 py-0.5 bg-slate-700 border border-slate-600 rounded text-[10px] font-mono text-slate-200">
                Enter
              </kbd>
              <span className="text-slate-400">Ejecutar</span>
            </li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <FiLayers className="w-4 h-4 text-purple-400" />
            <h4 className="font-semibold text-slate-100 text-xs uppercase tracking-wide">
              Funciones
            </h4>
          </div>
          <ul className="text-xs text-slate-300 space-y-1.5">
            <li>Compartir código vía URL</li>
            <li>Descargar como archivo .txt</li>
            <li>Historial de ejecuciones</li>
          </ul>
        </div>

        <div>
          <div className="flex items-center space-x-2 mb-3">
            <FiBookOpen className="w-4 h-4 text-purple-400" />
            <h4 className="font-semibold text-slate-100 text-xs uppercase tracking-wide">
              Recursos
            </h4>
          </div>
          <ul className="text-xs space-y-1.5">
            <li>
              <a
                href="/documentacion"
                className="text-purple-400 hover:text-purple-300 flex items-center space-x-1"
              >
                <span>Documentación</span>
              </a>
            </li>
            <li>
              <a
                href="/lecciones"
                className="text-purple-400 hover:text-purple-300 flex items-center space-x-1"
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
