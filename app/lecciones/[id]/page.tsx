import { notFound } from "next/navigation";
import { getLessonContent, getAllLessonIds } from "@/lib/content";
import LessonPage from "@/components/lessons/LessonPage";

export function generateStaticParams() {
  return getAllLessonIds().map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const lesson = getLessonContent(id);

  if (!lesson) {
    notFound();
  }

  return <LessonPage {...lesson} />;
}
