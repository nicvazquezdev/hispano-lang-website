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
    <Card
      variant="glass"
      className="bg-white/80 backdrop-blur-sm sticky top-24"
    >
      <div className="p-4">
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
    </Card>
  );
}
