import { LessonContent } from "@/lib/lessons/types";

// Lecciones migradas
import { lesson as variablesLesson } from "./variables/lesson";
import { lesson as constantesLesson } from "./constantes/lesson";

export const lessonsContent: Record<string, LessonContent> = {
  "variables": variablesLesson,
  "constantes": constantesLesson,
};

export function getLessonContent(id: string): LessonContent | null {
  return lessonsContent[id] || null;
}

export function getAllLessonIds(): string[] {
  return Object.keys(lessonsContent);
}
