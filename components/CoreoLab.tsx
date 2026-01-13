
import React, { useState } from 'react';
import { ChoreographyProposal } from '../types';

const courseTemplates: Record<string, Record<string, ChoreographyProposal>> = {
  '5º Primaria': {
    'libre': {
      title: "Exploración de la Dehesa",
      theme: "Naturaleza y Paisaje",
      level: "5º Primaria",
      musicStyle: "Percusión suave / Viento",
      steps: [
        { phase: "Apertura", formation: "Círculo", action: "Crecimiento desde nivel bajo (suelo) hasta alto con brazos en extensión.", focus: "Control y Niveles" },
        { phase: "Tránsito", formation: "Dispersos", action: "Caminar libremente por el espacio ocupando huecos vacíos.", focus: "Espacio" },
        { phase: "Clímax", formation: "Filas", action: "Movimientos unísonos de brazos simulando ramas.", focus: "Coordinación" }
      ]
    },
    'literal': {
      title: "Traduciendo 'Colores en el Viento'",
      theme: "Descripción narrativa",
      level: "5º Primaria",
      musicStyle: "Pop / BSO",
      steps: [
        { phase: "Estribillo 1", formation: "Parejas", action: "Gesto de 'ver' (dedos en ojos) y 'tierra' (señalar suelo).", focus: "Literalidad" },
        { phase: "Estribillo 2", formation: "Parejas", action: "Gesto de 'viento' (ondulación de brazos) y 'unión' (mano en hombro).", focus: "Narrativa" }
      ]
    }
  },
  '1º ESO': {
    'libre': {
      title: "Esfuerzos Laban 1",
      theme: "Abstracción Técnica",
      level: "1º ESO",
      musicStyle: "Minimalista / Electrónica",
      steps: [
        { phase: "Contraste", formation: "Diagonal", action: "Combinación de 'Flotar' (ligero) y 'Golpear' (fuerte y súbito).", focus: "Dinámicas Laban" },
        { phase: "Final", formation: "Bloque", action: "Movimiento 'Presionar' (fuerte y sostenido) hacia el frente.", focus: "Fuerza y Tiempo" }
      ]
    },
    'literal': {
      title: "Crítica Social Moderna",
      theme: "Letra de Canción Urbana",
      level: "1º ESO",
      musicStyle: "Hip Hop / Rap",
      steps: [
        { phase: "Intro", formation: "Semicírculo", action: "Gestos literales de 'parar' (mano frente) y 'gritar' (manos en boca).", focus: "Expresión Facial" },
        { phase: "Outro", formation: "Escalinata", action: "Traducción gestual de los verbos finales de la letra.", focus: "Sincronía" }
      ]
    }
  }
};

const CoreoLab: React.FC = () => {
  const [level, setLevel] = useState('5º Primaria');
  const [mode, setMode] = useState<'libre' | 'literal'>('libre');

  // Fallback simple para niveles no definidos en el mockup
  const getTemplate = () => {
    const key = level.includes('ESO') ? '1º ESO' : '5º Primaria';
    return courseTemplates[key][mode];
  };

  const proposal = getTemplate();

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900 underline decoration-indigo-200 underline-offset-8">Laboratorio de Diseño 👥</h2>
        <p className="text-slate-500 max-w-2xl mx-auto italic">Selecciona tu nivel y modalidad para ver una estructura de trabajo recomendada.</p>
      </div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-8 h-fit">
          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Nivel Educativo</label>
            <div className="grid grid-cols-1 gap-2">
              {['5º Primaria', '6º Primaria', '1º ESO', '2º ESO', '3º ESO', '4º ESO'].map(l => (
                <button 
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`p-4 rounded-2xl text-sm font-bold transition-all text-left flex justify-between items-center ${level === l ? 'bg-indigo-600 text-white shadow-lg' : 'bg-slate-50 text-slate-600 hover:bg-slate-100'}`}
                >
                  {l}
                  {level === l && <span>✓</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-slate-400 uppercase tracking-widest px-2">Tipo de Coreografía</label>
            <div className="flex p-1 bg-slate-100 rounded-2xl">
              <button 
                onClick={() => setMode('libre')}
                className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${mode === 'libre' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
              >
                Libre
              </button>
              <button 
                onClick={() => setMode('literal')}
                className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all ${mode === 'literal' ? 'bg-white text-indigo-600 shadow-sm' : 'text-slate-500'}`}
              >
                Literal
              </button>
            </div>
            <p className="text-[10px] text-slate-400 px-2 mt-2">
              {mode === 'libre' ? 'Foco en la abstracción y el uso técnico del espacio.' : 'Foco en la traducción gestual de letras musicales.'}
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-2xl space-y-8 animate-in slide-in-from-right-8 duration-500">
            <header className="border-b border-slate-100 pb-8 flex justify-between items-start">
              <div className="space-y-1">
                 <h3 className="text-3xl font-bold text-slate-800 font-heading">{proposal.title}</h3>
                 <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Temática: {proposal.theme}</p>
              </div>
              <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-tighter shadow-sm ${mode === 'libre' ? 'bg-indigo-600 text-white' : 'bg-amber-400 text-white'}`}>
                {mode}
              </span>
            </header>

            <div className="space-y-6">
              {proposal.steps.map((step, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xs shrink-0 shadow-lg">
                      {idx + 1}
                    </div>
                    {idx < proposal.steps.length - 1 && <div className="w-0.5 h-full bg-slate-100 mt-2"></div>}
                  </div>
                  <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 group-hover:bg-white group-hover:shadow-md transition-all flex-grow">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-bold text-indigo-600 uppercase text-[10px] tracking-widest">{step.phase}</h4>
                      <span className="text-[10px] font-bold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-100">
                        {step.formation}
                      </span>
                    </div>
                    <p className="text-slate-700 font-medium mb-3 text-sm">{step.action}</p>
                    <div className="text-[10px] text-slate-500 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                      <span className="font-bold text-slate-400 uppercase">Enfoque:</span> {step.focus}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <footer className="pt-8 border-t border-slate-100 flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-indigo-50 flex items-center justify-center text-xl">🎵</div>
               <div>
                  <p className="text-xs font-bold text-slate-800">Sugerencia Musical:</p>
                  <p className="text-xs text-slate-500 italic">{proposal.musicStyle}</p>
               </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreoLab;
