
import React, { useState } from 'react';

const Glossary: React.FC = () => {
  const terms = [
    { word: 'Kinesfera', definition: 'Espacio personal que rodea al cuerpo en reposo o movimiento sin desplazarse, delimitado por el alcance de las extremidades.' },
    { word: 'Proxemia', definition: 'Estudio de la distancia entre las personas y cómo influye en la comunicación y el espacio social.' },
    { word: 'Propiocepción', definition: 'Sentido que informa al organismo de la posición de los músculos y la posición relativa de las partes corporales adyacentes.' },
    { word: 'Trayectoria', definition: 'Línea imaginaria que describe el cuerpo en el espacio al desplazarse (curva, recta, quebrada).' },
    { word: 'Pantomima', definition: 'Representación narrativa mediante gestos, sin el uso de palabras, centrada en la imitación de objetos o acciones.' },
    { word: 'Calidad de Movimiento', definition: 'El matiz expresivo resultante de combinar tiempo, espacio e intensidad (ej. movimiento pesado y rápido).' },
    { word: 'Pulso', definition: 'Latido constante y regular que subyace en cualquier composición rítmica o musical.' },
    { word: 'Esquema Corporal', definition: 'Imagen mental que tenemos de nuestro propio cuerpo, sus segmentos y sus posibilidades de acción.' },
    { word: 'Mudras', definition: 'Gestos simbólicos de las manos utilizados principalmente en las danzas clásicas de la India para comunicar conceptos o deidades.' },
    { word: 'Plano Secuencia', definition: 'Técnica de grabación (vital en LipDubs) donde una escena se filma en una sola toma continua sin cortes.' },
    { word: 'Sensopercepción', definition: 'Método de Patricia Stokoe que busca la conciencia del cuerpo a través de los sentidos y la piel.' },
    { word: 'Eje Corporal', definition: 'Línea imaginaria que atraviesa el cuerpo (vertical u horizontal) sobre la cual se realizan los giros.' },
    { word: 'Disociación', definition: 'Capacidad de mover una parte del cuerpo independientemente de las demás (ej. mover hombros sin mover cadera).' },
    { word: 'Introcepción', definition: 'Capacidad de sentir el estado interno de nuestro cuerpo (respiración, latidos) para regular el movimiento.' },
    { word: 'Foco Mirada', definition: 'Dirección hacia donde se dirige la vista del actor/bailarín, cargada de intención comunicativa.' },
    { word: 'Dinámica', definition: 'Variación de la fuerza y la velocidad en una secuencia de movimientos para evitar la monotonía.' }
  ];

  const [search, setSearch] = useState('');

  const filteredTerms = terms.sort((a, b) => a.word.localeCompare(b.word)).filter(t => 
    t.word.toLowerCase().includes(search.toLowerCase()) || 
    t.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-12 animate-in slide-in-from-right-8 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900 underline decoration-indigo-200 underline-offset-8">Diccionario del Movimiento</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Habla como un profesional. Domina la terminología técnica de la Expresión Corporal y las Artes Escénicas.</p>
      </div>

      <div className="max-w-2xl mx-auto mb-12">
        <div className="relative group">
          <input 
            type="text" 
            placeholder="Buscar término (ej: Proxemia)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-6 bg-white border-2 border-slate-100 rounded-[2.5rem] shadow-sm group-hover:shadow-xl focus:border-indigo-500 focus:ring-4 focus:ring-indigo-50 outline-none transition-all pl-14"
          />
          <svg className="w-6 h-6 absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredTerms.map((term, idx) => (
          <div 
            key={term.word} 
            className="bg-white p-6 rounded-3xl border border-slate-100 hover:shadow-2xl hover:border-indigo-100 transition-all group flex flex-col"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="text-[10px] font-black text-indigo-300 uppercase mb-2 tracking-widest">Término Técnico</div>
            <h4 className="text-lg font-bold text-indigo-600 mb-3 group-hover:scale-105 transition-transform origin-left">{term.word}</h4>
            <p className="text-sm text-slate-500 leading-relaxed flex-grow">{term.definition}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full -mr-32 -mt-32"></div>
        <h3 className="text-3xl font-bold mb-12 text-center font-heading text-indigo-300">Rúbrica de Excelencia Académica</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-white/10">
                <th className="pb-6 font-bold text-slate-400 uppercase tracking-widest text-xs">Criterio</th>
                <th className="pb-6 font-bold text-emerald-400 uppercase tracking-widest text-xs">Experto (5)</th>
                <th className="pb-6 font-bold text-indigo-400 uppercase tracking-widest text-xs">En Proceso (3)</th>
                <th className="pb-6 font-bold text-rose-400 uppercase tracking-widest text-xs">Iniciado (1)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {[
                { label: 'Uso del Espacio', exp: 'Ocupa los 3 niveles y usa trayectorias variadas.', pro: 'Usa bien su espacio próximo pero no se desplaza.', ini: 'Se mantiene estático o bloqueado en un punto.' },
                { label: 'Calidad Laban', exp: 'Diferencia claramente entre firme/ligero y súbito/sostenido.', pro: 'Intenta variar la energía pero no hay contraste.', ini: 'Todos sus movimientos tienen el mismo peso y tiempo.' },
                { label: 'Expresividad', exp: 'El rostro y el cuerpo comunican una emoción clara.', pro: 'Hay movimiento rítmico pero sin intención comunicativa.', ini: 'Muestra indiferencia o timidez extrema.' },
                { label: 'Cooperación', exp: 'Escucha al compañero y se adapta a su movimiento.', pro: 'Baila en grupo pero sin contacto visual ni ajuste.', ini: 'Trabaja solo ignorando la formación grupal.' }
              ].map((row, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="py-8 font-bold text-white pr-4">{row.label}</td>
                  <td className="py-8 text-slate-400 text-xs leading-relaxed pr-6">{row.exp}</td>
                  <td className="py-8 text-slate-400 text-xs leading-relaxed pr-6">{row.pro}</td>
                  <td className="py-8 text-slate-400 text-xs leading-relaxed">{row.ini}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Glossary;
