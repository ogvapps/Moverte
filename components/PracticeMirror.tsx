
import React, { useRef, useEffect, useState } from 'react';

const PracticeMirror: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activePose, setActivePose] = useState<string | null>(null);

  const poses = [
    { name: 'Flotar', desc: 'Movimiento ligero y multidireccional', icon: '☁️' },
    { name: 'Golpear', desc: 'Movimiento directo, rápido y fuerte', icon: '🔨' },
    { name: 'Oscilar', desc: 'Movimiento péndulo de lado a lado', icon: '↔️' },
    { name: 'Torcer', desc: 'Rotación del eje corporal', icon: '🌀' }
  ];

  useEffect(() => {
    async function setupCamera() {
      try {
        const s = await navigator.mediaDevices.getUserMedia({ 
          video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 720 } },
          audio: false 
        });
        setStream(s);
        if (videoRef.current) {
          videoRef.current.srcObject = s;
        }
      } catch (err) {
        setError('No se pudo acceder a la cámara. Asegúrate de dar permisos.');
      }
    }
    setupCamera();
    return () => {
      stream?.getTracks().forEach(track => track.stop());
    };
  }, []);

  return (
    <div className="space-y-12 animate-in slide-in-from-bottom-8 duration-500">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold font-heading text-slate-900">Espejo de Práctica 🪞</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Mírate mientras practicas. El autoconocimiento visual es clave para mejorar tu expresión corporal.</p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 bg-black rounded-[3rem] overflow-hidden shadow-2xl aspect-video relative">
          {error ? (
            <div className="w-full h-full flex items-center justify-center text-white p-8 text-center bg-slate-900">
              <div className="space-y-4">
                <span className="text-5xl block">⚠️</span>
                <p>{error}</p>
                <button onClick={() => window.location.reload()} className="px-6 py-2 bg-indigo-600 rounded-full font-bold">Reintentar</button>
              </div>
            </div>
          ) : (
            <>
              <video 
                ref={videoRef} autoPlay playsInline muted 
                className="w-full h-full object-cover scale-x-[-1]"
              />
              <div className="absolute top-8 left-8 bg-indigo-600/80 backdrop-blur-md px-6 py-3 rounded-full text-white font-bold animate-pulse">
                Modo Espejo Activo
              </div>
              {activePose && (
                <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-3xl border border-indigo-200 max-w-xs animate-in zoom-in">
                  <h4 className="font-bold text-indigo-700 text-xl mb-1">{activePose}</h4>
                  <p className="text-slate-600 text-sm">Prueba a realizar este movimiento de forma continua frente a la cámara.</p>
                </div>
              )}
            </>
          )}
        </div>

        <div className="space-y-4">
          <h3 className="font-bold text-slate-800 uppercase tracking-widest text-xs mb-4">Selecciona un Guía</h3>
          {poses.map(p => (
            <button
              key={p.name}
              onClick={() => setActivePose(p.name)}
              className={`w-full text-left p-6 rounded-3xl border-2 transition-all group ${
                activePose === p.name ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl group-hover:rotate-12 transition-transform">{p.icon}</span>
                <div>
                  <div className="font-bold text-slate-800">{p.name}</div>
                  <div className="text-[10px] text-slate-400 font-bold uppercase">{p.desc}</div>
                </div>
              </div>
            </button>
          ))}
          
          <div className="p-6 bg-slate-900 rounded-3xl text-white mt-8">
            <h4 className="font-bold text-indigo-400 mb-2">Consejo 💡</h4>
            <p className="text-xs text-slate-400">
              Observa tus manos y tu mirada. Son los puntos que más comunican en un movimiento.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeMirror;
