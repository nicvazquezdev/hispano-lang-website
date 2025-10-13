import Section from "@/components/ui/Section";
import GitHubIcon from "@/components/ui/GitHubIcon";

export default function Footer() {
  return (
    <footer>
      <Section
        background="light"
        title="Proyecto"
        titleGradient=" Open Source"
        description="HispanoLang es libre y abierto. Contribuye, aprende y comparte."
      >
        <div className="text-center">
          {/* Enlaces principales */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-8">
            <a
              href="https://github.com/nicvazquezdev/hispano-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-purple-400 transition-colors text-base sm:text-lg font-medium flex items-center gap-2"
            >
              <GitHubIcon />
              GitHub
            </a>
            <a
              href="https://github.com/nicvazquezdev/hispano-lang/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-purple-400 transition-colors text-base sm:text-lg font-medium"
            >
              Contribuir
            </a>
            <a
              href="https://github.com/nicvazquezdev/hispano-lang/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-purple-400 transition-colors text-base sm:text-lg font-medium"
            >
              Reportar Issue
            </a>
            <a
              href="https://www.npmjs.com/package/hispano-lang"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-300 hover:text-purple-400 transition-colors text-base sm:text-lg font-medium"
            >
              NPM
            </a>
          </div>

          {/* Información adicional */}
          <div className="border-t border-slate-700 pt-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-4">
              <a
                href="https://github.com/nicvazquezdev/hispano-lang/blob/main/LICENSE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
              >
                Licencia MIT
              </a>
              <span className="hidden sm:inline text-slate-600">•</span>
              <a
                href="https://github.com/nicvazquezdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-purple-400 transition-colors text-sm"
              >
                Por @nicvazquezdev
              </a>
            </div>
            <p className="text-slate-400 text-sm sm:text-base">
              © 2025 HispanoLang. Hecho con ❤️ para la comunidad
              hispanohablante.
            </p>
          </div>
        </div>
      </Section>
    </footer>
  );
}
