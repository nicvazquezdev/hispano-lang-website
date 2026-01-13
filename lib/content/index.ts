import { LessonContent } from "@/lib/lessons/types";

// Lecciones migradas
import { lesson as variablesLesson } from "./variables/lesson";

export const lessonsContent: Record<string, LessonContent> = {
  "variables": variablesLesson,
};

export function getLessonContent(id: string): LessonContent | null {
  return lessonsContent[id] || null;
}

export function getAllLessonIds(): string[] {
  return Object.keys(lessonsContent);
}
