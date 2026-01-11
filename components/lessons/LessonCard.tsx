import Link from "next/link";
import Card from "@/components/ui/Card";

interface Lesson {
  id: string;
  title: string;
  description: string;
  emoji: string;
  difficulty: string;
  duration: string;
  completed?: boolean;
}

interface LessonCardProps {
  lesson: Lesson;
}

export default function LessonCard({ lesson }: LessonCardProps) {
  const difficultyColors = {
    Principiante: "bg-green-900/40 border border-green-700/50 text-green-300",
    Intermedio: "bg-yellow-900/40 border border-yellow-700/50 text-yellow-300",
    Avanzado: "bg-red-900/40 border border-red-700/50 text-red-300",
  };

  return (
    <Link href={`/lecciones/${lesson.id}`}>
      <Card variant="interactive" className="h-full group cursor-pointer">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{lesson.emoji}</div>
          {lesson.completed && <div className="text-green-400 text-xl">✓</div>}
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-purple-400 transition-colors">
          {lesson.title}
        </h3>

        <p className="text-slate-300 mb-4 leading-relaxed">
          {lesson.description}
        </p>

        <div className="flex items-center justify-between">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${
              difficultyColors[
                lesson.difficulty as keyof typeof difficultyColors
              ]
            }`}
          >
            {lesson.difficulty}
          </span>
          <span className="text-slate-400 text-sm">{lesson.duration}</span>
        </div>
      </Card>
    </Link>
  );
}
