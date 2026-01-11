import Card from "@/components/ui/Card";
import DocNavMobile from "./DocNavMobile";

interface NavSection {
  id: string;
  title: string;
}

interface DocNavProps {
  sections: NavSection[];
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export default function DocNav({
  sections,
  activeSection,
  onSectionChange,
}: DocNavProps) {
  return (
    <>
      {/* Desktop: Sidebar menu */}
      <div className="hidden lg:block bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg max-h-[calc(100vh-8rem)] overflow-hidden">
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Contenido</h3>
        </div>
        <nav className="space-y-2 overflow-y-auto max-h-[calc(100vh-14rem)] px-4 pb-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile: Floating menu */}
      <DocNavMobile
        sections={sections}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
    </>
  );
}
