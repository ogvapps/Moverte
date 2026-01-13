
export interface ContentSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export enum AppSection {
  HOME = 'home',
  THEORY_HUB = 'theory',
  STUDY_CARDS = 'study',
  ELEMENTS = 'elements',
  TECHNIQUES = 'techniques',
  QUIZ = 'quiz',
  CREATIVE_LAB = 'lab',
  RHYTHM_ROOM = 'rhythm',
  MIRROR = 'mirror',
  COREO_LAB = 'coreo',
  TALENT_STUDIO = 'talent'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export interface Flashcard {
  front: string;
  back: string;
  category: string;
}

export interface MovementIdea {
  title: string;
  description: string;
  variation: string;
}

export interface ChoreographyStep {
  phase: string;
  formation: string;
  action: string;
  focus: string;
}

export interface ChoreographyProposal {
  title: string;
  theme: string;
  level: string;
  steps: ChoreographyStep[];
  musicStyle: string;
}

export interface TalentAct {
  title: string;
  content: string;
  stageDirections: string;
  tips: string[];
  requirements: {
    music: string;
    props: string[];
    costume: string;
  };
}

export interface DailyChallenge {
  id: number;
  task: string;
  emotion: string;
  difficulty: 'Fácil' | 'Medio' | 'Difícil';
}
