
import React, { useState } from 'react';
import { MovementIdea } from '../types';

const staticIdeas: Record<string, MovementIdea[]> = {
  'Improvisación': [
    { title: "El escultor ciego", description: "Por parejas, uno moldea al otro sin tocarlo, solo mediante gestos de soplado o atracción magnética.", variation: "Hacerlo en grupos de 3 donde dos esculpen a la vez." },
    { title: "Caminar por texturas", description: "Cruzar el gimnasio imaginando que el suelo es: miel pegajosa, hielo resbaladizo o brasas calientes.", variation: "Cambiar la textura al sonar una palmada." }
  ],
  'Mímica y Gestos': [
    { title: "El teléfono loco gestual", description: "Pasar una acción compleja por una fila solo con gestos faciales y corporales.", variation: "Intentar que la acción se convierta en otra cosa a propósito." },
    { title: "Objetos invisibles", description: "Interactuar con un objeto pesado o frágil que no existe, mostrando su peso con el cuerpo.", variation: "Pasar el objeto a un compañero con cuidado." }
  ]
};

const CreativeLab: React.FC = () => {
  const [technique, setTechnique] = useState('Improvisación');
  const [ideas, setIdeas] = useState<MovementIdea[]>(staticIdeas['Improvisación']);

  const handleSelect = (t: string) => {
    setTechnique(t);
    setIdeas(staticIdeas[t] || []);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Laboratorio de Ideas 🧪</h2>
        <p className="text-slate-500 max-w-2xl mx-auto italic">Inspiración instantánea para tus clases de Expresión Corporal.</p>
      </div>

      <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-8">
        <div className="md:col-span-1 space-y-2">
          {Object.keys(staticIdeas).map(t => (
            <button
              key={t}
              onClick={() => handleSelect(t)}
              className={`w-full p-4 rounded-2xl text-xs font-bold transition-all text-left ${technique === t ? 'bg-indigo-600 text-white shadow-lg' : 'bg-white text-slate-500 border border-slate-100 hover:border-indigo-200'}`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="md:col-span-3 grid gap-6">
          {ideas.map((idea, idx) => (
            <div key={idx} className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-4 hover:border-indigo-200 transition-all">
               <h4 className="text-xl font-bold text-indigo-700">{idea.title}</h4>
               <p className="text-slate-600 text-sm leading-relaxed">{idea.description}</p>
               <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
                  <p className="text-[10px] font-black text-amber-600 uppercase mb-1">Variación Pro</p>
                  <p className="text-xs text-amber-800 italic">{idea.variation}</p>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CreativeLab;
