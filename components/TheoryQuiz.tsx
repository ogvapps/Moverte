
import React, { useState } from 'react';
import { QuizQuestion } from '../types';

const staticQuizzes: Record<string, QuizQuestion[]> = {
  'Los 4 Elementos Fundamentales': [
    {
      question: "¿Cuál es la unidad básica de la comunicación no verbal y el instrumento principal del movimiento?",
      options: ["La música", "El cuerpo", "El escenario", "El público"],
      correctAnswer: 1,
      explanation: "El cuerpo es nuestro instrumento de comunicación y el pilar sobre el que se construye cualquier acción motriz."
    },
    {
      question: "La Kinesfera se define como:",
      options: ["El espacio total de un gimnasio", "El espacio público", "El espacio personal que rodea al cuerpo sin desplazarse", "La trayectoria curva"],
      correctAnswer: 2,
      explanation: "Rudolf Laban define la kinesfera como la 'burbuja' personal que podemos alcanzar con nuestras extremidades."
    },
    {
      question: "En expresión corporal, el nivel ALTO corresponde a movimientos como:",
      options: ["Saltos y puntillas", "Gateo y rodadas", "Caminar normal", "Sentarse en el suelo"],
      correctAnswer: 0,
      explanation: "El nivel alto se sitúa por encima de la altura de los hombros, implicando elevaciones y saltos."
    }
  ],
  'Técnicas: Improvisación y Mímica': [
    {
      question: "La técnica que consiste en crear movimientos espontáneos sin ensayo previo es:",
      options: ["Dramatización", "Mímica", "Improvisación", "Acrosport"],
      correctAnswer: 2,
      explanation: "La improvisación busca la respuesta motriz inmediata a un estímulo externo (música) o interno (emoción)."
    },
    {
      question: "¿Qué autor es el principal referente del estudio de la calidad del movimiento?",
      options: ["Marta Graham", "Rudolf Laban", "Patricia Stokoe", "Isadora Duncan"],
      correctAnswer: 1,
      explanation: "Laban sistematizó el análisis del movimiento a través de factores como peso, tiempo, espacio y flujo."
    }
  ]
};

const TheoryQuiz: React.FC = () => {
  const [topic, setTopic] = useState('Los 4 Elementos Fundamentales');
  const [questions, setQuestions] = useState<QuizQuestion[] | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const startQuiz = () => {
    setQuestions(staticQuizzes[topic]);
    setFinished(false);
    setScore(0);
    setCurrentStep(0);
    setSelectedOption(null);
    setShowExplanation(false);
  };

  const handleOptionSelect = (idx: number) => {
    if (showExplanation) return;
    setSelectedOption(idx);
    setShowExplanation(true);
    if (idx === questions![currentStep].correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const nextQuestion = () => {
    if (currentStep < questions!.length - 1) {
      setCurrentStep(s => s + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Quiz de Repaso ✍️</h2>
        <p className="text-slate-500">Demuestra lo que has aprendido en las unidades didácticas.</p>
      </div>

      {!questions && (
        <div className="bg-white p-12 rounded-[3rem] border border-slate-100 shadow-xl text-center space-y-8">
          <div className="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto text-3xl">📝</div>
          <div className="space-y-2">
            <h3 className="text-2xl font-bold">Elige un tema para evaluar</h3>
            <select 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full max-w-sm p-4 bg-slate-50 border-2 border-slate-100 rounded-2xl outline-none focus:border-indigo-400"
            >
              {Object.keys(staticQuizzes).map(t => <option key={t}>{t}</option>)}
            </select>
          </div>
          <button 
            onClick={startQuiz}
            className="px-12 py-5 bg-indigo-600 text-white rounded-2xl font-bold shadow-lg hover:bg-indigo-700 transition-all"
          >
            Empezar Quiz
          </button>
        </div>
      )}

      {questions && !finished && (
        <div className="bg-white p-10 md:p-16 rounded-[3rem] border border-slate-100 shadow-2xl space-y-10 relative">
          <div className="flex justify-between items-center text-xs font-bold text-slate-400 uppercase tracking-widest">
            <span>Pregunta {currentStep + 1} de {questions.length}</span>
            <span className="text-indigo-600 font-black">Score: {score}</span>
          </div>

          <h3 className="text-2xl font-bold text-slate-800 leading-tight">
            {questions[currentStep].question}
          </h3>

          <div className="grid gap-4">
            {questions[currentStep].options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                disabled={showExplanation}
                className={`p-6 rounded-2xl border-2 text-left font-bold transition-all ${
                  selectedOption === idx 
                    ? (idx === questions[currentStep].correctAnswer ? 'border-green-500 bg-green-50 text-green-700' : 'border-red-500 bg-red-50 text-red-700')
                    : (showExplanation && idx === questions[currentStep].correctAnswer ? 'border-green-500 bg-green-50 text-green-700' : 'border-slate-100 hover:border-indigo-200 shadow-sm')
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 animate-in slide-in-from-top-4">
              <p className="text-sm text-indigo-900 leading-relaxed italic">
                <span className="font-bold not-italic">Refuerzo:</span> {questions[currentStep].explanation}
              </p>
              <button 
                onClick={nextQuestion}
                className="mt-6 w-full py-4 bg-indigo-600 text-white rounded-xl font-bold hover:bg-indigo-700 shadow-lg"
              >
                {currentStep < questions.length - 1 ? 'Siguiente Pregunta' : 'Ver Resultados'}
              </button>
            </div>
          )}
        </div>
      )}

      {finished && (
        <div className="bg-white p-12 rounded-[3rem] text-center space-y-8 animate-in zoom-in">
          <div className="text-6xl">🏆</div>
          <h3 className="text-3xl font-bold">¡Quiz Completado!</h3>
          <div className="text-5xl font-bold text-indigo-600">
            {score} / {questions?.length}
          </div>
          <p className="text-slate-500">
            {score === questions?.length ? '¡Sobresaliente! Dominas la teoría a la perfección.' : '¡Buen trabajo! Repasa los conceptos fallados para llegar al nivel experto.'}
          </p>
          <div className="flex gap-4 justify-center">
            <button onClick={startQuiz} className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold shadow-lg">Reintentar</button>
            <button onClick={() => setQuestions(null)} className="px-8 py-4 bg-slate-100 text-slate-700 rounded-xl font-bold">Cambiar Tema</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TheoryQuiz;
