
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-lg font-heading">M</div>
              <span className="text-lg font-bold font-heading text-slate-800">Moverte</span>
            </div>
            <p className="text-slate-500 text-sm max-w-sm">
              Una plataforma educativa para transformar la Educación Física a través de la expresión corporal y el movimiento consciente.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-4">Etapas</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Primaria (5º-6º)</li>
              <li>ESO (1º-2º)</li>
              <li>ESO (3º-4º)</li>
              <li>Post-obligatoria</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-4">Recursos</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>Guías para Docentes</li>
              <li>Banco de Actividades</li>
              <li>Laboratorio Creativo</li>
              <li>Bibliografía</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© 2024 Moverte App. Diseñado para estudiantes de Primaria y ESO.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Términos</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Contacto</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
