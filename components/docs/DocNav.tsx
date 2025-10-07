import Card from "@/components/ui/Card";

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
    <Card variant="glass" className="bg-white/80 backdrop-blur-sm">
      <div className="p-4">
        {/* Desktop: Sidebar menu */}
        <div className="hidden lg:block">
          <h3 className="text-lg font-bold text-slate-800 mb-4">Contenido</h3>
          <nav className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                  activeSection === section.id
                    ? "bg-blue-500 text-white"
                    : "text-slate-700 hover:bg-slate-100"
                }`}
              >
                {section.title}
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile: Compact select */}
        <div className="lg:hidden">
          <select
            value={activeSection}
            onChange={(e) => onSectionChange(e.target.value)}
            className="w-full px-4 py-3 bg-white text-slate-800 font-semibold rounded-xl shadow-lg focus:outline-none cursor-pointer"
          >
            {sections.map((section) => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
        </div>
      </div>
    </Card>
  );
}
