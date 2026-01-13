
import { MovementIdea, QuizQuestion, ChoreographyProposal, TalentAct } from "../types";

export const getCreativePrompts = async (level: string, technique: string): Promise<MovementIdea[] | null> => {
  return null;
};

export const generateTheoryQuiz = async (topic: string): Promise<QuizQuestion[] | null> => {
  return null;
};

export const generateChoreography = async (level: string, theme: string): Promise<ChoreographyProposal | null> => {
  return null;
};

export const generateTalentAct = async (category: string, level: string, topic: string): Promise<TalentAct | null> => {
  return null;
};

export const getMentorFeedback = async (category: string, description: string): Promise<string> => {
  return "¡Sigue practicando! La constancia es la clave del éxito en la expresión corporal.";
};
