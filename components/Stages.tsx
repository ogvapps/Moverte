
import React, { useState } from 'react';

const Stages: React.FC = () => {
  const [tab, setTab] = useState<'primaria' | 'eso'>('primaria');

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Progresión por Etapas</h2>
        <p className="text-slate-500">El currículo evoluciona desde la espontaneidad hasta la autonomía creativa total.</p>
      </div>

      <div className="flex justify-center p-1.5 bg-slate-100 rounded-2xl max-w-xs mx-auto mb-12">
        <button 
          onClick={() => setTab('primaria')}
          className={`flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all ${tab === 'primaria' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Primaria
        </button>
        <button 
          onClick={() => setTab('eso')}
          className={`flex-1 py-3 px-6 rounded-xl text-sm font-bold transition-all ${tab === 'eso' ? 'bg-white text-indigo-600 shadow-md' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Secundaria
        </button>
      </div>

      {tab === 'primaria' ? (
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Ciclo 1 (1º-2º)</span>
            <h3 className="text-xl font-bold">Iniciación</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex gap-2"><span>•</span> Movimiento espontáneo</li>
              <li className="flex gap-2"><span>•</span> Imitación motriz</li>
              <li className="flex gap-2"><span>•</span> Simulación de personas</li>
              <li className="flex gap-2"><span>•</span> Gestos básicos</li>
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Ciclo 2 (3º-4º)</span>
            <h3 className="text-xl font-bold">Consciencia</h3>
            <ul className="space-y-3 text-slate-600 text-sm">
              <li className="flex gap-2"><span>•</span> Expresión de emociones</li>
              <li className="flex gap-2"><span>•</span> Movimientos elaborados</li>
              <li className="flex gap-2"><span>•</span> Intencionalidad expresiva</li>
              <li className="flex gap-2"><span>•</span> Iniciación al drama</li>
            </ul>
          </div>
          <div className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100 shadow-sm space-y-4">
            <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs">Ciclo 3 (5º-6º)</span>
            <h3 className="text-xl font-bold">Composición</h3>
            <ul className="space-y-3 text-indigo-900/70 text-sm">
              <li className="flex gap-2 font-semibold text-indigo-900"><span>•</span> Ritmo y expresión</li>
              <li className="flex gap-2"><span>•</span> Escenificación compleja</li>
              <li className="flex gap-2"><span>•</span> Coreografías simples</li>
              <li className="flex gap-2"><span>•</span> Autonomía creativa</li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-xl font-bold">1-2</div>
            <h3 className="text-2xl font-bold">Cursos Iniciales</h3>
            <p className="text-slate-600 leading-relaxed">
              Transición hacia actividades físicas artístico-expresivas más estructuradas. Se enfoca en el descubrimiento guiado y la exploración de diferentes modalidades de danza.
            </p>
            <div className="pt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
              <div className="text-sm font-medium text-slate-500">Foco: Descubrimiento</div>
              <div className="text-sm font-medium text-slate-500">Guía: Docente alta</div>
            </div>
          </div>
          <div className="bg-indigo-600 p-8 rounded-3xl text-white shadow-xl shadow-indigo-100 space-y-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white text-xl font-bold">3-4</div>
            <h3 className="text-2xl font-bold">Cursos Avanzados</h3>
            <p className="text-indigo-100 leading-relaxed">
              Máximo nivel de autonomía. Los alumnos crean sus propios trabajos por afinidad grupal, improvisan y componen coreografías complejas.
            </p>
            <div className="pt-4 border-t border-indigo-400/30 grid grid-cols-2 gap-4">
              <div className="text-sm font-medium text-indigo-200">Foco: Creación propia</div>
              <div className="text-sm font-medium text-indigo-200">Guía: Autonomía total</div>
            </div>
          </div>
        </div>
      )}
      
      <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-3xl">
        <div className="flex gap-4">
          <div className="text-2xl">💡</div>
          <div>
            <h4 className="font-bold text-amber-900 mb-1">Dato de interés</h4>
            <p className="text-amber-800/80 text-sm">
              En secundaria, la actitud del profesor influye en un 72% en el éxito de las clases. Un ambiente de confianza es vital para superar la vergüenza inicial.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stages;
