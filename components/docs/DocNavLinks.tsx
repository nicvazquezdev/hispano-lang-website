"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface NavSection {
  id: string;
  title: string;
}

interface DocNavLinksProps {
  sections: NavSection[];
  activeSection: string;
}

export default function DocNavLinks({ sections, activeSection }: DocNavLinksProps) {
  const router = useRouter();

  return (
    <>
      {/* Desktop: Sidebar menu */}
      <div className="hidden lg:block bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg max-h-[calc(100vh-8rem)] overflow-hidden">
        <div className="p-4">
          <h3 className="text-lg font-bold text-slate-100 mb-4">Contenido</h3>
        </div>
        <nav className="space-y-2 overflow-y-auto max-h-[calc(100vh-14rem)] px-4 pb-4">
          {sections.map((section) => (
            <Link
              key={section.id}
              href={`/documentacion/${section.id}`}
              className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                activeSection === section.id
                  ? "bg-purple-600 text-white"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              {section.title}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile: Simple list for now */}
      <div className="lg:hidden bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700/50 shadow-lg p-4">
        <select
          value={activeSection}
          onChange={(e) => {
            router.push(`/documentacion/${e.target.value}`);
          }}
          className="w-full bg-slate-700 text-slate-100 rounded-lg px-4 py-2 border border-slate-600"
        >
          {sections.map((section) => (
            <option key={section.id} value={section.id}>
              {section.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
