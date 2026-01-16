import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import logoImage from 'figma:asset/b6d45c3d47991b9a3f395251564db109bf3a2dfe.png';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="flex items-center">
              <img src={logoImage} alt="Creativivs" className="h-10" />
            </a>
            <div className="flex gap-6">
              {['About', 'Education', 'Experience', 'Skills', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-600 hover:text-slate-900 transition-colors text-sm font-medium"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </div>
  );
}