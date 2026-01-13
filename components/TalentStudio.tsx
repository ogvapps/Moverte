
import React, { useState } from 'react';
import { TalentAct } from '../types';

const staticActs: Record<string, TalentAct> = {
  'Got Talent Individual (3º)': {
    title: "El Despertar de la Marioneta",
    content: "Inicio: Cuerpo totalmente relajado en el suelo. \nNudo: Empiezan a moverse los hilos invisibles. Movimientos súbitos y descoordinados. \nFinal: La marioneta se corta los hilos y empieza a moverse con fluidez libre.",
    stageDirections: "Luz fría al inicio, luz cálida al final. Sonido de cuerdas rompiéndose.",
    tips: ["Mantén el contacto visual con el jurado", "Controla la respiración para no parecer cansado", "Ocupa todo el escenario"],
    requirements: { music: "Música de piano / Instrumental", props: ["Hilos invisibles"], costume: "Ropa ajustada negra" }
  },
  'LipDub de Clase (3º)': {
    title: "Planificación LipDub Escolar",
    content: "Zona A (Patio): Grupo 1 baila estilo libre. \nZona B (Pasillo): Grupo 2 hace coreografía literal con la letra. \nZona C (Gimnasio): Final con toda la clase junta.",
    stageDirections: "Grabar en una sola toma sin cortes. La cámara debe ser parte del baile.",
    tips: ["¡No dejes de mover los labios!", "Exagera la alegría", "Coordina el relevo entre zonas"],
    requirements: { music: "Hit Pop actual", props: ["Carteles, confeti"], costume: "Temática libre" }
  },
  'Teatro Físico (4º)': {
    title: "Leyenda Extremeña: La Serrana",
    content: "Escena 1: Encuentro en la montaña. Gestos de fuerza y poder. \nEscena 2: El engaño. Mímica facial de falsedad. \nEscena 3: La huida. Persecución coreografiada.",
    stageDirections: "Uso de niveles bajos para el acecho y altos para la montaña.",
    tips: ["Cada gesto debe durar 2 segundos para ser visto", "El silencio es tu mejor aliado", "Usa el cuerpo como escenografía"],
    requirements: { music: "Sonidos de naturaleza", props: ["Manta, bastón"], costume: "Tradicional rural" }
  }
};

const categories = [
  { id: 'Got Talent Individual (3º)', icon: '🌟' },
  { id: 'LipDub de Clase (3º)', icon: '📹' },
  { id: 'Teatro Físico (4º)', icon: '🎭' },
  { id: 'Mimo y Pantomima', icon: '🤫' },
];

const TalentStudio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
  const [act, setAct] = useState<TalentAct>(staticActs[categories[0].id]);
  const [showBuzzer, setShowBuzzer] = useState(false);

  const handleSelect = (id: string) => {
    setSelectedCategory(id);
    setAct(staticActs[id] || staticActs[categories[0].id]);
  };

  const triggerBuzzer = () => {
    setShowBuzzer(true);
    setTimeout(() => setShowBuzzer(false), 2000);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header className="text-center space-y-4">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 underline decoration-indigo-200 underline-offset-8">Estudio de Escenografía 🌟</h2>
        <p className="text-slate-500 max-w-2xl mx-auto italic">Guiones y estructuras para tus representaciones finales de Secundaria.</p>
      </header>

      <div className="grid lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-4">Categorías</p>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleSelect(cat.id)}
                className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all ${
                  selectedCategory === cat.id ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-xs font-bold">{cat.id}</span>
              </button>
            ))}
          </div>
        </aside>

        <main className="lg:col-span-3">
          <div className="bg-white p-8 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-2xl space-y-10 relative overflow-hidden">
             <header className="flex justify-between items-start border-b border-slate-100 pb-8">
                <div>
                  <h3 className="text-3xl font-bold font-heading text-slate-900">{act.title}</h3>
                  <p className="text-indigo-600 font-bold text-sm mt-1">{selectedCategory}</p>
                </div>
                <button onClick={triggerBuzzer} className="p-4 bg-amber-100 text-amber-600 rounded-full hover:scale-110 transition-all">
                  🌟
                </button>
             </header>

             <div className="grid md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Esquema de la Pieza</h4>
                  <div className="bg-slate-50 p-6 rounded-3xl border border-slate-100 text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                    {act.content}
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="space-y-3">
                     <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Acotaciones</h4>
                     <p className="text-xs text-slate-500 italic bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/50">
                       {act.stageDirections}
                     </p>
                  </div>
                  <div className="space-y-3">
                     <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Requisitos</h4>
                     <div className="grid gap-2 text-xs">
                        <div className="p-3 bg-white border border-slate-100 rounded-xl flex items-center gap-3">
                          <span className="text-lg">🎵</span> <span>{act.requirements.music}</span>
                        </div>
                        <div className="p-3 bg-white border border-slate-100 rounded-xl flex items-center gap-3">
                          <span className="text-lg">👕</span> <span>{act.requirements.costume}</span>
                        </div>
                     </div>
                  </div>
                </div>
             </div>

             <div className="pt-8 border-t border-slate-100">
                <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Tips de Evaluación 🏆</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  {act.tips.map((t, i) => (
                    <div key={i} className="p-4 bg-emerald-50 text-emerald-800 rounded-2xl text-[10px] font-medium border border-emerald-100">
                      {t}
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </main>
      </div>

      {showBuzzer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center animate-in zoom-in duration-300 pointer-events-none">
          <div className="bg-amber-400 px-12 py-8 rounded-[3rem] shadow-2xl text-white font-black text-4xl uppercase italic border-8 border-white">
            ¡Pase de Oro!
          </div>
        </div>
      )}
    </div>
  );
};

export default TalentStudio;
