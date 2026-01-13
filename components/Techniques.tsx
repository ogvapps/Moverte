
import React, { useState } from 'react';

const Techniques: React.FC = () => {
  const techniques = [
    { 
      title: 'Improvisación', 
      desc: 'Creación espontánea en respuesta a música o temas.', 
      icon: '🎭',
      activity: 'El escultor: Por parejas, uno es barro y el otro el artista que moldea sin tocar.',
      foco: 'Creatividad'
    },
    { 
      title: 'Dramatización', 
      desc: 'Escenificación de roles y personajes.', 
      icon: '🎬',
      activity: 'La foto de grupo: Crear una escena estática sobre un tema (ej: El mercado) al sonar la palmada.',
      foco: 'Interpretación'
    },
    { 
      title: 'Danza Creativa', 
      desc: 'Uso del movimiento para narrar historias.', 
      icon: '💃',
      activity: 'Danza de la tormenta: Grupos que representan el viento, la lluvia y el rayo rítmicamente.',
      foco: 'Ritmo'
    },
    { 
      title: 'Percusión Corporal', 
      desc: 'Tu cuerpo como instrumento.', 
      icon: '🥁',
      activity: 'Eco rítmico: El profesor hace un ritmo con palmadas y pisotones, la clase responde.',
      foco: 'Coordinación'
    },
    { 
      title: 'Juegos de Espejo', 
      desc: 'Reproducir movimientos para ganar empatía.', 
      icon: '🪞',
      activity: 'Espejo deformante: El líder hace un movimiento y el seguidor lo copia a cámara lenta o exagerado.',
      foco: 'Atención'
    },
    { 
      title: 'Cuento Motor', 
      desc: 'Narrativa combinada con teatro.', 
      icon: '📖',
      activity: 'Viaje a Marte: El docente narra y los alumnos deben representar los obstáculos del espacio.',
      foco: 'Imaginación'
    },
    {
      title: 'Mímica Facial',
      desc: 'Expresar sin palabras usando el rostro.',
      icon: '🤪',
      activity: 'El teléfono loco gestual: Pasar una emoción por la fila solo usando la cara.',
      foco: 'Micro-gestos'
    },
    {
      title: 'Introcepción',
      desc: 'Sentir el cuerpo desde el interior.',
      icon: '🧘',
      activity: 'Escáner corporal: Con ojos cerrados, mover solo el dedo meñique, luego el tobillo...',
      foco: 'Propiocepción'
    }
  ];

  return (
    <div className="space-y-12 animate-in zoom-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Métodos y Estrategias Didácticas</h2>
        <p className="text-slate-500">Explora diferentes formas de llevar la expresión corporal al gimnasio o al aula.</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {techniques.map((t, idx) => (
          <div 
            key={t.title} 
            className="group bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-indigo-400 transition-all shadow-sm hover:shadow-2xl flex flex-col"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="w-14 h-14 bg-slate-50 text-3xl flex items-center justify-center rounded-2xl mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 transform group-hover:-rotate-12">
              {t.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-800 mb-2">{t.title}</h3>
            <p className="text-slate-500 text-xs mb-6 flex-grow">{t.desc}</p>
            
            <div className="pt-4 border-t border-slate-50 space-y-3">
              <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest">Actividad Sugerida</div>
              <p className="text-[11px] text-slate-700 italic bg-indigo-50/50 p-3 rounded-xl border border-indigo-100/50">
                {t.activity}
              </p>
              <div className="inline-block px-3 py-1 bg-slate-900 text-white text-[10px] rounded-full font-bold">
                🎯 {t.foco}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-indigo-900 to-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-32 -mt-32"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold font-heading">¿Cómo estructurar una sesión?</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">1</div>
                <div>
                  <div className="font-bold">Desbloqueo (10')</div>
                  <div className="text-sm text-indigo-200">Ejercicios rítmicos y de contacto visual.</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                <div>
                  <div className="font-bold">Desarrollo Temático (30')</div>
                  <div className="text-sm text-indigo-200">Trabajo sobre el elemento (Espacio, Tiempo, etc).</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                <div>
                  <div className="font-bold">Puesta en Común (10')</div>
                  <div className="text-sm text-indigo-200">Observación grupal y feedback constructivo.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
             <h4 className="font-bold mb-4 text-indigo-300">Tips para el Docente</h4>
             <ul className="text-sm space-y-3 text-slate-300">
               <li>• No juzgar la "calidad" artística, sino la intención.</li>
               <li>• Usar música variada (no solo hits actuales).</li>
               <li>• Participar como uno más en los ejercicios de inicio.</li>
               <li>• Permitir el silencio como herramienta expresiva.</li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Techniques;
