'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { lessons } from '@/lib/lessons';

interface LessonsSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LessonsSidebar({ isOpen, onClose }: LessonsSidebarProps) {
  const pathname = usePathname();
  const currentLessonId = pathname.split('/').pop();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] transition-opacity backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-slate-900/95 backdrop-blur-md border-l border-slate-700/50 z-[101] transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Lecciones</h2>
            <p className="text-xs text-slate-500 mt-0.5">{lessons.length} lecciones disponibles</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-100 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Lessons list */}
        <nav className="p-3 overflow-y-auto h-[calc(100%-80px)]">
          {lessons.map((lesson, index) => {
            const isActive = currentLessonId === lesson.id;
            return (
              <Link
                key={lesson.id}
                href={`/lecciones/${lesson.id}`}
                onClick={onClose}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl mb-1 transition-all ${
                  isActive
                    ? 'bg-purple-500/20 border border-purple-500/30'
                    : 'hover:bg-slate-800/70 border border-transparent'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg ${
                  isActive ? 'bg-purple-500/30' : 'bg-slate-800'
                }`}>
                  {lesson.emoji}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className={`text-xs ${isActive ? 'text-purple-400' : 'text-slate-500'}`}>
                      {index + 1}.
                    </span>
                    <span className={`text-sm font-medium truncate ${
                      isActive ? 'text-purple-300' : 'text-slate-300'
                    }`}>
                      {lesson.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 truncate mt-0.5">
                    {lesson.description}
                  </p>
                </div>
                {isActive && (
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700/50 bg-slate-900/95">
          <Link
            href="/lecciones"
            onClick={onClose}
            className="flex items-center justify-center gap-2 w-full py-2.5 text-sm text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            Ver todas las lecciones
          </Link>
        </div>
      </div>
    </>
  );
}
