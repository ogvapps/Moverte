
import React, { useState, useRef, useEffect } from 'react';

const RhythmRoom: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(100);
  const [type, setType] = useState<'regular' | 'syncopated' | 'heavy'>('regular');
  const audioCtx = useRef<AudioContext | null>(null);
  const timerId = useRef<number | null>(null);

  const playClick = (time: number, freq: number, duration: number = 0.1) => {
    if (!audioCtx.current) return;
    const osc = audioCtx.current.createOscillator();
    const envelope = audioCtx.current.createGain();

    osc.frequency.value = freq;
    envelope.gain.value = 1;
    envelope.gain.exponentialRampToValueAtTime(0.01, time + duration);

    osc.connect(envelope);
    envelope.connect(audioCtx.current.destination);

    osc.start(time);
    osc.stop(time + duration);
  };

  const startMetronome = () => {
    if (!audioCtx.current) {
      audioCtx.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    setIsPlaying(true);
    let nextNoteTime = audioCtx.current.currentTime;
    const scheduleAheadTime = 0.1;
    let beat = 0;

    const scheduler = () => {
      while (nextNoteTime < audioCtx.current!.currentTime + scheduleAheadTime) {
        const secondsPerBeat = 60.0 / bpm;
        
        // Lógica de ritmos
        if (type === 'regular') {
          playClick(nextNoteTime, beat % 4 === 0 ? 880 : 440);
        } else if (type === 'syncopated') {
          playClick(nextNoteTime, 440);
          if (beat % 2 === 0) playClick(nextNoteTime + (secondsPerBeat / 2), 660, 0.05);
        } else if (type === 'heavy') {
          playClick(nextNoteTime, 220, 0.3); // Sonido más bajo y largo
        }

        nextNoteTime += secondsPerBeat;
        beat++;
      }
      timerId.current = window.setTimeout(scheduler, 25);
    };
    scheduler();
  };

  const stopMetronome = () => {
    setIsPlaying(false);
    if (timerId.current) clearTimeout(timerId.current);
  };

  useEffect(() => {
    return () => {
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, []);

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Sala de Ritmos 🎵</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Entrena tu respuesta motriz al tiempo. Selecciona un tipo de ritmo y ajusta la velocidad para practicar.</p>
      </div>

      <div className="max-w-4xl mx-auto bg-white p-10 md:p-16 rounded-[4rem] border border-slate-100 shadow-2xl flex flex-col items-center gap-12 relative overflow-hidden">
        <div className={`absolute inset-0 bg-indigo-500/5 transition-opacity duration-1000 ${isPlaying ? 'opacity-100' : 'opacity-0'} pointer-events-none`}></div>
        
        <div className="flex flex-col items-center gap-4 relative z-10">
          <div className="text-6xl font-bold font-heading text-indigo-600">{bpm} <span className="text-xl text-slate-400">BPM</span></div>
          <input 
            type="range" min="40" max="220" step="1" 
            value={bpm} onChange={(e) => setBpm(parseInt(e.target.value))}
            className="w-64 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
          />
        </div>

        <div className="grid grid-cols-3 gap-4 w-full relative z-10">
          {[
            { id: 'regular', label: 'Regular', icon: '📏' },
            { id: 'syncopated', label: 'Sincopado', icon: '🌀' },
            { id: 'heavy', label: 'Pesado', icon: '🐘' }
          ].map(t => (
            <button
              key={t.id}
              onClick={() => setType(t.id as any)}
              className={`p-6 rounded-3xl border-2 transition-all flex flex-col items-center gap-2 ${
                type === t.id ? 'border-indigo-600 bg-indigo-50 text-indigo-700' : 'border-slate-100 hover:border-slate-200'
              }`}
            >
              <span className="text-2xl">{t.icon}</span>
              <span className="font-bold text-sm">{t.label}</span>
            </button>
          ))}
        </div>

        <button
          onClick={isPlaying ? stopMetronome : startMetronome}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl shadow-2xl transition-all active:scale-90 relative z-10 ${
            isPlaying ? 'bg-red-500 shadow-red-200' : 'bg-indigo-600 shadow-indigo-200'
          }`}
        >
          {isPlaying ? '■' : '▶'}
        </button>

        <div className="bg-slate-900 p-8 rounded-3xl text-white w-full relative z-10">
          <h4 className="font-bold mb-2 text-indigo-400">Guía de Entrenamiento</h4>
          <p className="text-sm text-slate-400">
            {type === 'regular' && 'Practica movimientos fluidos y constantes. Intenta cambiar de nivel en cada acento fuerte (cada 4 pulsos).'}
            {type === 'syncopated' && '¡Sorpresa! Responde a los sonidos entre pulsos con movimientos rápidos y secos (golpeteos).'}
            {type === 'heavy' && 'Siente el peso. Realiza movimientos lentos, de "presión", como si empujaras algo muy pesado.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RhythmRoom;
