
import React, { useState } from 'react';

interface TaskGuide {
  title: string;
  type: string;
  steps: string[];
  tips: string;
}

interface TheoryBlock {
  title: string;
  icon: string;
  content: React.ReactNode;
  tasks?: TaskGuide[];
}

interface CourseModule {
  id: string;
  course: string;
  mainFocus: string;
  blocks: TheoryBlock[];
}

const TheoryHub: React.FC = () => {
  const [activeCourseId, setActiveCourseId] = useState('primaria-56');
  const [activeBlockIndex, setActiveBlockIndex] = useState(0);

  const curriculum: CourseModule[] = [
    {
      id: 'primaria-56',
      course: '5º y 6º Primaria',
      mainFocus: 'Narrativa y Dualismo Rítmico',
      blocks: [
        {
          title: 'El Doble Desafío Coreográfico',
          icon: '🌗',
          content: (
            <div className="space-y-6">
              <p className="text-slate-600">En el tercer ciclo de Primaria, el objetivo principal es diferenciar entre el movimiento <strong>abstracto (libre)</strong> y el <strong>descriptivo (literal)</strong>.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-6 bg-indigo-50 rounded-[2rem] border border-indigo-100 shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-indigo-700 mb-2 flex items-center gap-2"><span>✨</span> Coreografía Libre</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">No busca contar una historia. Se centra en el placer de moverse, la ocupación de los tres niveles (alto, medio, bajo) y el seguimiento del pulso rítmico.</p>
                </div>
                <div className="p-6 bg-amber-50 rounded-[2rem] border border-amber-100 shadow-sm hover:shadow-md transition-shadow">
                  <h5 className="font-bold text-amber-800 mb-2 flex items-center gap-2"><span>📖</span> Coreografía Literal</h5>
                  <p className="text-xs text-slate-600 leading-relaxed">Es "música para los ojos". Cada frase de la letra debe traducirse a un gesto corporal fiel (ej. "lluvia" -> dedos descendiendo, "corazón" -> manos al pecho).</p>
                </div>
              </div>
              <div className="bg-slate-900 p-6 rounded-3xl text-white">
                <h6 className="font-bold text-indigo-400 text-xs uppercase tracking-widest mb-3">Diccionario de Gestos Base:</h6>
                <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-[10px] opacity-90">
                  <div className="flex justify-between border-b border-white/10 pb-1"><span>"Camino"</span> <span className="text-indigo-200">Brazos trazando línea recta</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-1"><span>"Futuro"</span> <span className="text-indigo-200">Mirada al horizonte con mano en frente</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-1"><span>"Unión"</span> <span className="text-indigo-200">Círculo formado por el grupo</span></div>
                  <div className="flex justify-between border-b border-white/10 pb-1"><span>"Miedo"</span> <span className="text-indigo-200">Contracción del torso y hombros</span></div>
                </div>
              </div>
            </div>
          ),
          tasks: [{
            title: "Proyecto: El Traductor Corporal",
            type: "Individual o Parejas",
            steps: ["Elegir una canción de 2 minutos", "Minuto 1: Movimiento libre (niveles y espacio)", "Minuto 2: Traducción literal de la letra", "Grabación o exhibición final"],
            tips: "Usa movimientos grandes y lentos para que se entiendan bien los gestos literales."
          }]
        },
        {
          title: 'Tradición: El Candil Extremeño',
          icon: '🕯️',
          content: (
            <div className="space-y-4">
              <p className="text-slate-600">Aprendemos nuestras raíces a través de la danza popular de Olivenza.</p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 text-xs text-emerald-800">
                <strong>Claves técnicas:</strong> Ritmo de 3/4 (vals), paso de jota (salto, apoyo, apoyo), brazos en arco y cambios de pareja en formación circular. Mejora la <strong>coordinación óculo-pédica</strong> y el sentido de comunidad.
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'eso-1',
      course: '1º ESO',
      mainFocus: 'Laban y Análisis Crítico',
      blocks: [
        {
          title: 'Los Esfuerzos de Laban',
          icon: '📐',
          content: (
            <div className="space-y-6">
              <p className="text-slate-600">En secundaria profundizamos en la <strong>calidad</strong> del movimiento usando el sistema de Rudolf Laban.</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['GOLPEAR', 'FLOTAR', 'AZOTAR', 'DESLIZAR', 'PRESIONAR', 'GOLPETEAR', 'TORCER', 'OSCILAR'].map(m => (
                  <div key={m} className="p-3 bg-white border border-slate-200 rounded-xl text-center text-[10px] font-black text-slate-400 hover:border-indigo-500 hover:text-indigo-600 transition-colors">
                    {m}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 italic">"No es lo que haces, sino CÓMO lo haces. Un mismo gesto puede ser fuerte y rápido (golpe) o ligero y lento (flotar)."</p>
            </div>
          ),
          tasks: [{
            title: "Exhibición Laban",
            type: "Grupal",
            steps: ["Crear una secuencia de 8 movimientos", "Cada movimiento debe ser un esfuerzo distinto", "Realizarlo al unísono perfecto"],
            tips: "Cierra los ojos y siente el 'peso' del movimiento antes de ejecutarlo."
          }]
        }
      ]
    },
    {
      id: 'eso-2',
      course: '2º ESO',
      mainFocus: 'Atlas de Danzas del Mundo',
      blocks: [
        {
          title: 'Danzas y Culturas',
          icon: '🌍',
          content: (
            <div className="space-y-6">
              <p className="text-slate-600">Exploración de la diversidad cultural a través del baile grupal y cooperativo.</p>
              <div className="space-y-3">
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100 flex gap-4 items-center">
                  <span className="text-2xl">🇳🇿</span>
                  <div>
                    <h6 className="font-bold text-orange-900">Haka (Polinesia)</h6>
                    <p className="text-[10px] text-orange-700">Fuerza, percusión corporal, gestos faciales y cohesión de clan.</p>
                  </div>
                </div>
                <div className="p-4 bg-pink-50 rounded-2xl border border-pink-100 flex gap-4 items-center">
                  <span className="text-2xl">🇮🇳</span>
                  <div>
                    <h6 className="font-bold text-pink-900">Bollywood (India)</h6>
                    <p className="text-[10px] text-pink-700">Mudras (manos), alegría, simetría y ritmos vibrantes.</p>
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 flex gap-4 items-center">
                  <span className="text-2xl">🇿🇦</span>
                  <div>
                    <h6 className="font-bold text-blue-900">Gumboot (Sudáfrica)</h6>
                    <p className="text-[10px] text-blue-700">Ritmo con botas de agua, comunicación sonora y resistencia.</p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'eso-3',
      course: '3º ESO',
      mainFocus: 'Got Talent y LipDub',
      blocks: [
        {
          title: 'Got Talent Individual',
          icon: '🌟',
          content: (
            <div className="space-y-4">
              <p className="text-slate-600">Desafío de autonomía y presencia escénica. Cada alumno elige su talento expresivo:</p>
              <ul className="text-sm space-y-2 list-disc pl-5 text-slate-500">
                <li>Danza contemporánea o urbana.</li>
                <li>Acrobacia o gimnasia rítmica.</li>
                <li>Monólogo gestual o mimo.</li>
                <li>Magia coreografiada.</li>
              </ul>
              <div className="p-4 bg-indigo-600 text-white rounded-2xl text-xs">
                <strong>Clave de Evaluación:</strong> Se valora la "Presencia Escénica" (cómo ocupas el escenario antes, durante y después del acto).
              </div>
            </div>
          )
        },
        {
          title: 'El LipDub Escolar',
          icon: '📹',
          content: (
            <div className="space-y-6">
              <p className="text-slate-600">Un proyecto de cohesión de toda la clase grabado en una sola toma (plano secuencia).</p>
              <div className="p-6 bg-slate-900 rounded-3xl text-white space-y-4">
                <h6 className="font-bold text-indigo-400">Guía de Organización:</h6>
                <div className="space-y-2 text-[11px]">
                  <p><strong>1. Recorrido:</strong> Diseñar el camino por pasillos y aulas.</p>
                  <p><strong>2. Playback:</strong> Sincronización perfecta de labios (Lip-Sync).</p>
                  <p><strong>3. Transiciones:</strong> Cómo se pasa el testigo de un grupo a otro.</p>
                  <p><strong>4. Energía:</strong> Todo el alumnado debe estar en movimiento constante.</p>
                </div>
              </div>
            </div>
          )
        }
      ]
    },
    {
      id: 'eso-4',
      course: '4º ESO',
      mainFocus: 'Compañía de Teatro Físico',
      blocks: [
        {
          title: 'Creación de la Compañía',
          icon: '🎭',
          content: (
            <div className="space-y-6">
              <p className="text-slate-600">Producción teatral completa donde el cuerpo es el narrador principal.</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                  <h6 className="font-bold text-slate-800 text-sm">Género: Leyenda</h6>
                  <p className="text-[10px] text-slate-500">Adaptación de historias tradicionales extremeñas (La Serrana, El Candil) mediante teatro físico.</p>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-2xl">
                  <h6 className="font-bold text-slate-800 text-sm">Género: Guion Original</h6>
                  <p className="text-[10px] text-slate-500">Creación colectiva sobre temas de actualidad social (bullying, redes, ecología).</p>
                </div>
              </div>
              <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 text-[11px] text-emerald-900">
                <strong>Roles necesarios:</strong> Director/a, actores/actrices, técnicos de luz y sonido, responsables de atrezo y guionistas.
              </div>
            </div>
          ),
          tasks: [{
            title: "La Gran Función Final",
            type: "Grupal (Clase)",
            steps: ["Escritura de libreto", "3 ensayos generales", "Montaje de escenografía", "Estreno en salón de actos"],
            tips: "Usa la iluminación para crear atmósferas sin necesidad de decorados costosos."
          }]
        }
      ]
    }
  ];

  const currentCourse = curriculum.find(c => c.id === activeCourseId)!;
  const currentBlock = currentCourse.blocks[activeBlockIndex];

  return (
    <div className="space-y-12 animate-in fade-in duration-700">
      <header className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 leading-tight">
          Hoja de Ruta de <span className="text-indigo-600">Aprendizaje</span>
        </h2>
        <p className="text-lg text-slate-500 italic">
          Contenidos técnicos y prácticos adaptados a cada nivel educativo.
        </p>
      </header>

      {/* Selector de Curso */}
      <div className="flex flex-wrap justify-center gap-3">
        {curriculum.map((course) => (
          <button
            key={course.id}
            onClick={() => { setActiveCourseId(course.id); setActiveBlockIndex(0); }}
            className={`px-8 py-5 rounded-[2.5rem] font-bold text-sm transition-all border-2 flex flex-col items-center gap-1 ${
              activeCourseId === course.id 
                ? 'bg-indigo-600 text-white border-transparent shadow-2xl shadow-indigo-100 scale-105' 
                : 'bg-white text-slate-600 border-slate-50 hover:border-indigo-100 shadow-sm'
            }`}
          >
            <span className="text-[9px] uppercase tracking-tighter font-black opacity-70">
              {course.id.includes('primaria') ? 'Primaria' : 'Secundaria'}
            </span>
            <span>{course.course}</span>
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        {/* Navegación Interna */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-xl space-y-2">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-3 mb-2">Módulos del Curso</p>
            {currentCourse.blocks.map((block, idx) => (
              <button
                key={idx}
                onClick={() => setActiveBlockIndex(idx)}
                className={`w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all ${
                  activeBlockIndex === idx ? 'bg-indigo-50 text-indigo-700 font-bold' : 'text-slate-500 hover:bg-slate-50'
                }`}
              >
                <span className="text-2xl">{block.icon}</span>
                <span className="text-xs">{block.title}</span>
              </button>
            ))}
          </div>

          {currentBlock.tasks && currentBlock.tasks.map((task, i) => (
            <div key={i} className="bg-indigo-900 p-8 rounded-[2.5rem] text-white space-y-6 shadow-2xl shadow-indigo-200">
               <h4 className="text-lg font-bold font-heading text-indigo-300">Reto Práctico 📝</h4>
               <div className="space-y-4">
                  <div>
                    <p className="text-[9px] font-bold text-indigo-400 uppercase tracking-widest">{task.type}</p>
                    <p className="font-bold text-base leading-tight">{task.title}</p>
                  </div>
                  <ul className="space-y-2">
                    {task.steps.map((s, si) => (
                      <li key={si} className="flex gap-2 text-[10px] text-indigo-100/70 leading-relaxed">
                        <span className="text-indigo-400 font-black">›</span> {s}
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-white/10 rounded-2xl border border-white/5 text-[10px] italic text-indigo-200">
                    💡 {task.tips}
                  </div>
               </div>
            </div>
          ))}
        </aside>

        {/* Contenido Principal */}
        <main className="lg:col-span-3">
          <div className="bg-white p-8 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl relative overflow-hidden min-h-[700px]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full -mr-40 -mt-40 opacity-50"></div>
            <div className="relative z-10 space-y-10 animate-in slide-in-from-right-8 duration-500">
              <header className="space-y-4 border-b border-slate-100 pb-10">
                <div className="flex items-center gap-2">
                   <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 rounded-md text-[9px] font-black uppercase">
                     {currentCourse.course}
                   </span>
                   <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">/ {currentCourse.mainFocus}</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-heading text-slate-900 flex items-center gap-4">
                  <span className="text-5xl">{currentBlock.icon}</span>
                  {currentBlock.title}
                </h3>
              </header>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-lg">
                {currentBlock.content}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TheoryHub;
