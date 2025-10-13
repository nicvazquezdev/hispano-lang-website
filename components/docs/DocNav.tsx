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
      <Card
        variant="glass"
        className="hidden lg:block bg-slate-800/80 backdrop-blur-sm"
      >
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Contenido</h3>
          <nav className="space-y-2">
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
      </Card>

      {/* Mobile: Floating menu */}
      <DocNavMobile
        sections={sections}
        activeSection={activeSection}
        onSectionChange={onSectionChange}
      />
    </>
  );
}
