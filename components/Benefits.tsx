
import React from 'react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      title: 'Físicos & Motores',
      items: [
        'Mejora de la higiene postural',
        'Desarrollo del equilibrio dinámico',
        'Control respiratorio consciente',
        'Coordinación óculo-pédica y manual'
      ],
      icon: '💪',
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100'
    },
    {
      title: 'Cognitivos',
      items: [
        'Estimulación del pensamiento divergente',
        'Aumento de la capacidad de abstracción',
        'Mejora de la memoria secuencial rítmica',
        'Resolución creativa de problemas motrices'
      ],
      icon: '🧠',
      color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
      title: 'Socio-Emocionales',
      items: [
        'Aumento de la autoconfianza y seguridad',
        'Desarrollo de la empatía grupal',
        'Gestión del miedo al juicio externo',
        'Comunicación asertiva no verbal'
      ],
      icon: '🤝',
      color: 'bg-purple-50 text-purple-700 border-purple-100'
    },
    {
      title: 'Artístico-Culturales',
      items: [
        'Apreciación de la diversidad estética',
        'Conocimiento de danzas del mundo',
        'Capacidad de análisis crítico de obras',
        'Sentido del ritmo y la musicalidad'
      ],
      icon: '🎭',
      color: 'bg-rose-50 text-rose-700 border-rose-100'
    }
  ];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">¿Por qué trabajar la Expresión Corporal?</h2>
        <p className="text-slate-500">Más allá de la diversión, es una herramienta potente para el desarrollo integral del ser humano.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {benefits.map((b) => (
          <div key={b.title} className={`p-8 rounded-[2.5rem] border-2 ${b.color} transition-all hover:scale-[1.02] shadow-sm`}>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-4xl">{b.icon}</div>
              <h3 className="text-2xl font-bold font-heading">{b.title}</h3>
            </div>
            <ul className="space-y-4">
              {b.items.map(item => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-current opacity-40 shrink-0"></span>
                  <span className="font-medium opacity-90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="bg-indigo-600 p-12 rounded-[3rem] text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl shadow-indigo-200">
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-bold font-heading">Impacto en la Inclusión</h3>
          <p className="text-indigo-100 text-lg">
            A diferencia de los deportes competitivos, la expresión corporal elimina barreras. Cada cuerpo es un emisor válido, permitiendo que alumnos con diferentes capacidades encuentren su propio lenguaje de movimiento.
          </p>
          <div className="flex gap-4">
            <div className="bg-white/20 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">Igualdad</div>
            <div className="bg-white/20 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">Adaptabilidad</div>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-3xl border border-white/20">
           <blockquote className="italic text-indigo-50">
             "No se trata de bailar bien o mal, sino de ser capaz de transmitir lo que uno siente."
           </blockquote>
           <div className="mt-4 text-sm font-bold">— Pensamiento Educativo</div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
