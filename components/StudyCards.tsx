
import React, { useState } from 'react';
import { Flashcard } from '../types';

const cards: Flashcard[] = [
  { category: "Espacio", front: "Kinesfera", back: "Espacio personal que rodea al cuerpo, delimitado por el alcance de las extremidades sin desplazarse." },
  { category: "Tiempo", front: "Pulso", back: "Latido constante y regular que subyace en cualquier composición rítmica." },
  { category: "Energía", front: "8 Movimientos de Laban", back: "Golpear, deslizar, azotar, flotar, golpetear, presionar, oscilar y torcer." },
  { category: "Comunicación", front: "Proxemia", back: "Estudio de la distancia entre las personas y cómo influye en la comunicación." },
  { category: "Cuerpo", front: "Esquema Corporal", back: "Imagen mental que tenemos de nuestro propio cuerpo y sus posibilidades de acción." },
  { category: "Espacio", front: "Trayectoria", back: "Línea imaginaria que describe el cuerpo en el espacio al desplazarse (curva, recta, etc)." },
  { category: "Danza", front: "Mudra", back: "Gestos simbólicos con las manos en danzas orientales para narrar sin palabras." },
  { category: "Escena", front: "Presencia Escénica", back: "Capacidad de atraer y mantener la atención del público mediante el control corporal." },
  { category: "Metodología", front: "Sensopercepción", back: "Aprender a través de la piel y los sentidos para descubrir el propio cuerpo." }
];

const StudyCards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length);
    }, 150);
  };

  const prevCard = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    }, 150);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4 px-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900 underline decoration-indigo-200 underline-offset-8">Gimnasia Mental 🧠</h2>
        <p className="text-slate-500">Memoriza los términos técnicos antes de tu examen de Educación Física.</p>
      </div>

      <div className="perspective-1000 h-[450px] px-4">
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`relative w-full h-full transition-all duration-700 transform-style-3d cursor-pointer ${isFlipped ? 'rotate-y-180' : ''}`}
        >
          {/* Front */}
          <div className="absolute inset-0 backface-hidden bg-white border-2 border-slate-100 rounded-[3.5rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center group overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-indigo-600"></div>
            <span className="text-[10px] font-black text-indigo-500 uppercase tracking-[0.3em] mb-6">{cards[currentIndex].category}</span>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-800 group-hover:scale-110 transition-transform font-heading">
              {cards[currentIndex].front}
            </h3>
            <div className="mt-12 flex flex-col items-center gap-2">
               <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Toca para descubrir</p>
               <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-xl animate-bounce">🔄</div>
            </div>
          </div>

          {/* Back */}
          <div className="absolute inset-0 backface-hidden bg-indigo-600 rotate-y-180 rounded-[3.5rem] shadow-2xl flex flex-col items-center justify-center p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <h4 className="text-xs font-black mb-8 border-b-2 border-indigo-400 pb-2 uppercase tracking-[0.4em] relative z-10">Significado Técnico</h4>
            <p className="text-2xl leading-relaxed font-medium relative z-10">
              {cards[currentIndex].back}
            </p>
            <div className="mt-10 flex gap-3 relative z-10">
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Aprendido ✅</span>
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Repasar ❌</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 px-4">
        <button 
          onClick={prevCard} 
          className="p-5 bg-white border-2 border-slate-100 text-slate-700 rounded-3xl font-bold hover:border-indigo-400 hover:text-indigo-600 transition-all flex items-center gap-3 shadow-sm"
        >
          <span className="text-xl">←</span> 
        </button>
        <div className="text-slate-400 font-black text-xs uppercase tracking-widest">
          {currentIndex + 1} / {cards.length}
        </div>
        <button 
          onClick={nextCard} 
          className="px-10 py-5 bg-indigo-600 text-white rounded-3xl font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 flex items-center gap-3"
        >
          Siguiente <span className="text-xl">→</span>
        </button>
      </div>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>
    </div>
  );
};

export default StudyCards;
