
import React from 'react';

const Practice: React.FC = () => {
  const activities = [
    { name: 'Acrosport', val: 40, color: 'bg-indigo-600', icon: '🤸‍♂️', desc: 'Habilidades acrobáticas y pirámides humanas.' },
    { name: 'Danza', val: 28, color: 'bg-purple-600', icon: '💃', desc: 'Salsa, Country y movimiento rítmico.' },
    { name: 'Teatro', val: 14, color: 'bg-pink-600', icon: '🎭', desc: 'Interpretación de personajes y drama.' },
    { name: 'Cuerdas', val: 10, color: 'bg-blue-600', icon: '🎸', desc: 'Coordinación grupal con música.' },
    { name: 'Aerobic', val: 4, color: 'bg-green-600', icon: '🏃‍♀️', desc: 'Actividad rítmica de alta energía.' },
  ];

  return (
    <div className="space-y-12 animate-in slide-in-from-left-8 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Actividades más Populares</h2>
        <p className="text-slate-500">Preferencias del alumnado según investigaciones recientes.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          {activities.map((a) => (
            <div key={a.name} className="space-y-2">
              <div className="flex justify-between items-end">
                <span className="font-bold text-slate-700 flex items-center gap-2">
                  <span className="text-xl">{a.icon}</span> {a.name}
                </span>
                <span className="text-sm font-semibold text-slate-400">{a.val}%</span>
              </div>
              <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${a.color} transition-all duration-1000 ease-out`}
                  style={{ width: `${a.val}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {activities.map((a) => (
            <div key={a.name} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4 ${a.color}`}>
                {a.icon}
              </div>
              <h4 className="font-bold text-slate-800 mb-1">{a.name}</h4>
              <p className="text-xs text-slate-500 leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 pt-8">
        <div className="bg-rose-50 p-8 rounded-[2rem] border border-rose-100">
          <h3 className="text-xl font-bold text-rose-900 mb-4 flex items-center gap-2">
            ⚠️ Desafíos en Secundaria
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-rose-800/80">
              <span className="font-bold">33%</span> Falta de utilidad percibida.
            </li>
            <li className="flex gap-3 text-sm text-rose-800/80">
              <span className="font-bold">21%</span> Aburrimiento o falta de interés.
            </li>
            <li className="flex gap-3 text-sm text-rose-800/80">
              <span className="font-bold">20%</span> Vergüenza o timidez.
            </li>
          </ul>
        </div>
        <div className="bg-emerald-50 p-8 rounded-[2rem] border border-emerald-100">
          <h3 className="text-xl font-bold text-emerald-900 mb-4 flex items-center gap-2">
            ✅ Estrategias de Éxito
          </h3>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-emerald-800/80 text-left">
              Actitud alegre y simpática del profesor.
            </li>
            <li className="flex gap-3 text-sm text-emerald-800/80">
              Clima de seguridad y aceptación.
            </li>
            <li className="flex gap-3 text-sm text-emerald-800/80 text-left">
              Justificación clara de los objetivos.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Practice;
