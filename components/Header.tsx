
import React, { useState } from 'react';
import { AppSection } from '../types';

interface HeaderProps {
  activeSection: AppSection;
  setActiveSection: (section: AppSection) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: AppSection.HOME, label: 'Inicio' },
    { id: AppSection.THEORY_HUB, label: 'Teoría' },
    { id: AppSection.TALENT_STUDIO, label: 'Talent 🌟' },
    { id: AppSection.COREO_LAB, label: 'CoreoLab' },
    { id: AppSection.STUDY_CARDS, label: 'Repaso' },
    { id: AppSection.QUIZ, label: 'Quiz' },
    { id: AppSection.MIRROR, label: 'Espejo' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => setActiveSection(AppSection.HOME)} className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform shadow-lg shadow-indigo-100">
                M
              </div>
              <span className="text-xl font-bold font-heading text-slate-800">Moverte</span>
            </button>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                  activeSection === item.id 
                    ? 'bg-indigo-600 text-white shadow-md' 
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-slate-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => { setActiveSection(item.id); setIsMenuOpen(false); }}
              className={`block w-full text-left px-4 py-3 rounded-xl text-base font-bold ${
                activeSection === item.id ? 'bg-indigo-50 text-indigo-700' : 'text-slate-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
