import { notFound } from "next/navigation";
import { lessonsContent } from "@/lib/lessons/content";
import LessonPage from "@/components/lessons/LessonPage";

export function generateStaticParams() {
  return Object.keys(lessonsContent).map((id) => ({
    id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const lesson = lessonsContent[id];

  if (!lesson) {
    notFound();
  }

  return <LessonPage {...lesson} />;
}
