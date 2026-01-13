
import React, { useState } from 'react';

const Elements: React.FC = () => {
  const elements = [
    {
      id: 'cuerpo',
      title: 'El Cuerpo',
      icon: '👤',
      color: 'bg-blue-500',
      textColor: 'text-blue-600',
      lightBg: 'bg-blue-50',
      details: 'Conocimiento y control del esquema corporal. Es tu instrumento de comunicación. Incluye la respiración y la relajación.',
      subConcepts: ['Segmentos corporales', 'Tono muscular', 'Postura', 'Equilibrio']
    },
    {
      id: 'espacio',
      title: 'El Espacio',
      icon: '🌍',
      color: 'bg-green-500',
      textColor: 'text-green-600',
      lightBg: 'bg-green-50',
      details: 'Donde ocurre el movimiento. Se divide en espacio próximo (kinesfera) y espacio total.',
      subConcepts: ['Niveles (Alto/Medio/Bajo)', 'Trayectorias', 'Simetría', 'Direcciones']
    },
    {
      id: 'tiempo',
      title: 'El Tiempo',
      icon: '⏱️',
      color: 'bg-amber-500',
      textColor: 'text-amber-600',
      lightBg: 'bg-amber-50',
      details: 'Organiza el movimiento. Se basa en el ritmo interno (orgánico) y el externo (música).',
      subConcepts: ['Velocidad', 'Duración', 'Acento', 'Pulso/Compás']
    },
    {
      id: 'intensidad',
      title: 'La Intensidad',
      icon: '⚡',
      color: 'bg-red-500',
      textColor: 'text-red-600',
      lightBg: 'bg-red-50',
      details: 'Grado de energía o fuerza empleada. Define la "calidad" del movimiento.',
      subConcepts: ['Flujo libre/conducido', 'Peso', 'Tensión/Relajación', 'Dinámica']
    }
  ];

  const [activeId, setActiveId] = useState(elements[0].id);
  const activeElement = elements.find(e => e.id === activeId)!;

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-8 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Análisis Profundo de los Elementos</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Comprender los componentes básicos permite crear movimientos con significado y precisión técnica.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {elements.map((el) => (
            <button
              key={el.id}
              onClick={() => setActiveId(el.id)}
              className={`p-6 rounded-3xl transition-all duration-300 text-left border-2 ${
                activeId === el.id 
                  ? `border-${el.color.split('-')[1]}-200 ${el.lightBg} ring-4 ring-indigo-50 scale-105` 
                  : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <span className="text-3xl mb-4 block">{el.icon}</span>
              <h3 className={`text-lg font-bold ${activeId === el.id ? el.textColor : 'text-slate-700'}`}>
                {el.title}
              </h3>
            </button>
          ))}
          
          <div className="col-span-1 sm:col-span-2 mt-6 p-6 bg-indigo-900 rounded-3xl text-white shadow-xl">
             <h4 className="font-bold mb-4 flex items-center gap-2">
               <span className="text-xl">📍</span> Geometría del Espacio
             </h4>
             <div className="grid grid-cols-3 gap-2 text-[10px] uppercase font-bold tracking-wider">
                <div className="p-2 border border-white/20 rounded-lg text-center">Planos</div>
                <div className="p-2 border border-white/20 rounded-lg text-center">Ejes</div>
                <div className="p-2 border border-white/20 rounded-lg text-center">Niveles</div>
             </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-2xl relative overflow-hidden flex flex-col min-h-[500px]">
          <div className={`absolute top-0 right-0 w-48 h-48 ${activeElement.lightBg} rounded-bl-[8rem] -mr-12 -mt-12 transition-colors duration-500 opacity-50`}></div>
          
          <div className="relative z-10 space-y-8 flex-grow">
            <div className={`w-20 h-20 ${activeElement.color} text-white rounded-3xl flex items-center justify-center text-4xl shadow-xl shadow-indigo-100`}>
              {activeElement.icon}
            </div>
            <div>
              <h3 className="text-4xl font-bold font-heading text-slate-800 mb-4">{activeElement.title}</h3>
              <p className="text-xl text-slate-600 leading-relaxed italic">
                "{activeElement.details}"
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase text-slate-400 tracking-widest">Conceptos Clave</h4>
              <div className="grid grid-cols-2 gap-3">
                {activeElement.subConcepts.map(sub => (
                  <div key={sub} className="flex items-center gap-2 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className={`w-2 h-2 rounded-full ${activeElement.color}`}></div>
                    <span className="text-sm font-bold text-slate-700">{sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 p-10 rounded-[3rem] text-white">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h4 className="text-2xl font-bold text-indigo-400 font-heading">Los 8 Esfuerzos de Laban</h4>
            <p className="text-slate-400 text-sm">Rudolf Laban identificó 8 movimientos básicos que combinan Espacio, Tiempo y Peso:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['GOLPEAR', 'DESLIZAR', 'AZOTAR', 'FLOTAR', 'GOLPETEAR', 'PRESIONAR', 'OSCILAR', 'TORCER'].map(m => (
                <div key={m} className="bg-white/5 p-3 rounded-xl border border-white/10 text-center text-[10px] font-bold tracking-widest hover:bg-indigo-600 transition-colors cursor-help">
                  {m}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elements;
