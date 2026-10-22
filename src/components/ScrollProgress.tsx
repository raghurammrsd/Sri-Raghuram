import React, { useState, useEffect } from 'react';

const SECTIONS = [
  { id: 'hero', number: '01', title: 'ORIGIN' },
  { id: 'capabilities', number: '02', title: 'CAPABILITIES' },
  { id: 'how-i-work', number: '03', title: 'PROCESS' },
  { id: 'arsenal', number: '04', title: 'ARSENAL' },
  { id: 'contrast', number: '05', title: 'BEFORE/AFTER' },
  { id: 'sprint', number: '06', title: 'SPRINT' },
  { id: 'rules', number: '07', title: 'RULES' },
  { id: 'secret', number: '08', title: 'WEAPON' },
  { id: 'faq', number: '09', title: 'FAQ' },
];

export const ScrollProgress: React.FC = () => {
  const [activeSection, setActiveSection] = useState('01');
  const [activeTitle, setActiveTitle] = useState('ORIGIN');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.35;

      for (let i = SECTIONS.length - 1; i >= 0; i--) {
        const sec = SECTIONS[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sec.number);
          setActiveTitle(sec.title);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-30 hidden md:flex items-center gap-3 px-3.5 py-2 rounded-full bg-[#111114]/90 backdrop-blur-md border border-white/[0.1] shadow-2xl">
      <span className="font-mono text-xs font-bold text-honey-accent tracking-widest">
        [ {activeSection} / 09 ]
      </span>
      <span className="w-1 h-1 rounded-full bg-white/20" />
      <span className="font-mono text-[11px] text-honey-muted uppercase tracking-wider">
        {activeTitle}
      </span>
    </div>
  );
};
