
import React, { useState, useEffect } from 'react';
import { AppSection, DailyChallenge } from '../types';

interface HomeProps {
  onNavigate: (section: AppSection) => void;
}

const challenges: DailyChallenge[] = [
  { id: 1, task: "Muévete como si estuvieras bajo el agua", emotion: "Calma", difficulty: "Fácil" },
  { id: 2, task: "Camina sobre una cuerda floja imaginaria", emotion: "Concentración", difficulty: "Medio" },
  { id: 3, task: "Representa el crecimiento de una flor en 10 segundos", emotion: "Alegría", difficulty: "Fácil" },
  { id: 4, task: "Tus manos son pájaros intentando escapar de una red", emotion: "Desesperación", difficulty: "Difícil" },
  { id: 5, task: "Mueve solo tus articulaciones derechas de forma robótica", emotion: "Rigidez", difficulty: "Medio" }
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const [dailyChallenge, setDailyChallenge] = useState<DailyChallenge>(challenges[0]);

  useEffect(() => {
    const random = Math.floor(Math.random() * challenges.length);
    setDailyChallenge(challenges[random]);
  }, []);

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      {/* Hero Section con Reto del Día */}
      <section className="flex flex-col lg:flex-row items-center gap-12 py-8">
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-sm font-bold tracking-wide uppercase">
            🚀 Tu Aula de Expresión Digital
          </div>
          <h1 className="text-4xl md:text-7xl font-bold font-heading text-slate-900 leading-[1.1]">
            El cuerpo habla <br/> <span className="text-indigo-600">sin palabras</span>
          </h1>
          <p className="text-xl text-slate-500 leading-relaxed max-w-2xl">
            Aprende a dominar el espacio, el tiempo y la energía. Herramientas interactivas para alumnos que quieren explorar su creatividad.
          </p>
          
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-indigo-100/50 relative overflow-hidden group border-l-8 border-l-indigo-500">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-indigo-500 uppercase tracking-widest">Reto del Momento ⚡</span>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                  dailyChallenge.difficulty === 'Fácil' ? 'bg-green-100 text-green-700' :
                  dailyChallenge.difficulty === 'Medio' ? 'bg-amber-100 text-amber-700' : 'bg-red-100 text-red-700'
                }`}>
                  {dailyChallenge.difficulty}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-2">"{dailyChallenge.task}"</h3>
              <p className="text-slate-500 text-sm italic">Emoción objetivo: {dailyChallenge.emotion}</p>
              <button 
                onClick={() => onNavigate(AppSection.MIRROR)}
                className="mt-6 flex items-center gap-2 text-indigo-600 font-bold hover:gap-4 transition-all"
              >
                Hacerlo frente al espejo ➔
              </button>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -mr-12 -mt-12 group-hover:scale-110 transition-transform"></div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <button 
              onClick={() => onNavigate(AppSection.RHYTHM_ROOM)}
              className="px-8 py-4 bg-indigo-600 text-white rounded-2xl font-bold shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              🎵 Entrenar Ritmo
            </button>
            <button 
              onClick={() => onNavigate(AppSection.CREATIVE_LAB)}
              className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:bg-slate-50 transition-all hover:border-slate-300"
            >
              Generar ideas con IA
            </button>
          </div>
        </div>
        
        <div className="flex-1 w-full relative">
           <div className="aspect-square bg-slate-200 rounded-[4rem] overflow-hidden shadow-2xl rotate-3">
              <img 
                src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800" 
                alt="Dance expression" 
                className="w-full h-full object-cover"
              />
           </div>
           {/* Floating elements */}
           <div className="absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
              <span className="text-2xl">💃</span>
           </div>
           <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl animate-bounce" style={{animationDuration: '4s'}}>
              <span className="text-2xl">🎭</span>
           </div>
        </div>
      </section>

      {/* Secciones de exploración rápida */}
      <section className="grid md:grid-cols-3 gap-8">
        {[
          { icon: '📍', title: 'Espacio', text: 'Domina los niveles y las trayectorias en tu kinesfera.', section: AppSection.ELEMENTS },
          { icon: '⏱️', title: 'Tiempo', text: 'Entrena tu pulso y responde a diferentes velocidades.', section: AppSection.RHYTHM_ROOM },
          { icon: '🔥', title: 'Energía', text: 'Controla la intensidad de tus gestos y movimientos.', section: AppSection.ELEMENTS }
        ].map((feat) => (
          <button 
            key={feat.title}
            onClick={() => onNavigate(feat.section)}
            className="text-left bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all group"
          >
            <div className="text-4xl mb-6 group-hover:scale-125 transition-transform inline-block">{feat.icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-slate-800">{feat.title}</h3>
            <p className="text-slate-500 leading-relaxed">{feat.text}</p>
          </button>
        ))}
      </section>
    </div>
  );
};

export default Home;
