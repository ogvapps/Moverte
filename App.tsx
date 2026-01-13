
import React, { useState } from 'react';
import { AppSection } from './types';
import Header from './components/Header';
import Home from './components/Home';
import Elements from './components/Elements';
import Techniques from './components/Techniques';
import CreativeLab from './components/CreativeLab';
import RhythmRoom from './components/RhythmRoom';
import PracticeMirror from './components/PracticeMirror';
import TheoryHub from './components/TheoryHub';
import TheoryQuiz from './components/TheoryQuiz';
import StudyCards from './components/StudyCards';
import CoreoLab from './components/CoreoLab';
import TalentStudio from './components/TalentStudio';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);

  const renderSection = () => {
    switch (activeSection) {
      case AppSection.HOME:
        return <Home onNavigate={setActiveSection} />;
      case AppSection.THEORY_HUB:
        return <TheoryHub />;
      case AppSection.TALENT_STUDIO:
        return <TalentStudio />;
      case AppSection.COREO_LAB:
        return <CoreoLab />;
      case AppSection.STUDY_CARDS:
        return <StudyCards />;
      case AppSection.QUIZ:
        return <TheoryQuiz />;
      case AppSection.ELEMENTS:
        return <Elements />;
      case AppSection.TECHNIQUES:
        return <Techniques />;
      case AppSection.RHYTHM_ROOM:
        return <RhythmRoom />;
      case AppSection.MIRROR:
        return <PracticeMirror />;
      case AppSection.CREATIVE_LAB:
        return <CreativeLab />;
      default:
        return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-all duration-300">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderSection()}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
