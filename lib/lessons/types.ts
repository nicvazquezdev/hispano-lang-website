export interface LessonStep {
  title: string;
  content: string;
  code: string;
  explanation: string;
  challenge: string;
  summary?: string;
  validation?: {
    expectedOutputs?: string[];
    requiredCode?: string[];
  };
}

export interface LessonNav {
  url: string;
  title: string;
}

export interface LessonContent {
  badge: {
    emoji: string;
    text: string;
  };
  title: string;
  titleGradient: string;
  description: string;
  steps: LessonStep[];
  prev?: LessonNav;
  next?: LessonNav;
}

export interface LessonInfo {
  id: string;
  title: string;
  description: string;
  emoji: string;
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  duration: string;
}
