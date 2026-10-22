import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FileDown, Menu, X, ArrowUpRight, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) sound.click();
  };

  const navLinks = [
    { label: "EXPERTISE", href: "#expertise", index: "01" },
    { label: "PRODUCTION", href: "#internship", index: "02" },
    { label: "ARSENAL", href: "#projects", index: "03" },
    { label: "STACK", href: "#skills", index: "04" },
    { label: "PEDIGREE", href: "#experience", index: "05" },
    { label: "CONTACT", href: "#contact", index: "06" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal-950/85 backdrop-blur-2xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand & Monogram */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            onClick={() => sound.click()}
            className="group flex items-center gap-2"
          >
            <span className="font-syne text-2xl sm:text-3xl font-black tracking-tight text-warm-white group-hover:text-electric-orange transition-colors">
              RAGHURAM
            </span>
            <span className="w-2 h-2 rounded-full bg-electric-orange shadow-[0_0_10px_#ff5500] animate-pulse" />
          </a>

          <div className="hidden lg:flex items-center gap-2.5 pl-4 border-l border-white/10 font-mono text-[11px] text-warm-muted uppercase">
            <span className="px-2 py-0.5 rounded bg-electric-orange/15 border border-electric-orange/30 text-electric-orange font-bold">
              FOUNDING AI ENGINEER
            </span>
            <span>·</span>
            <span>{time || 'IST'}</span>
          </div>
        </div>

        {/* Center Minimalist Anchor Links */}
        <nav className="hidden xl:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.hover()}
              className="font-mono text-xs tracking-widest text-warm-muted hover:text-warm-white transition-all py-1 flex items-center gap-1.5 group"
            >
              <span className="text-warm-dark group-hover:text-electric-orange transition-colors">
                [{link.index}]
              </span>
              <span className="font-semibold">{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Actions & Controls */}
        <div className="flex items-center gap-3">
          {/* Sound Effect Toggle */}
          <button
            onClick={toggleSound}
            className="p-2.5 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-warm-muted hover:text-warm-white transition-all hidden sm:flex items-center justify-center"
            title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-electric-orange" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>

          {/* Resume PDF Download Pill */}
          <Magnetic strength={0.25}>
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Mohan_Sri_Raghuram_resume.pdf"
              onClick={() => sound.click()}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-electric-orange/30 bg-electric-orange/10 hover:bg-electric-orange/20 text-warm-white text-xs font-mono font-semibold tracking-wider transition-all"
              data-cursor-text="PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-electric-orange" />
              <span>RESUME (PDF)</span>
            </a>
          </Magnetic>

          {/* Direct Contact Button */}
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={() => sound.click()}
              className="px-5 py-2.5 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs font-black tracking-wider hover:bg-electric-orange hover:text-white transition-all shadow-lg flex items-center gap-1.5"
            >
              <span>LET'S TALK</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Magnetic>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => {
              sound.click();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2 rounded-lg text-warm-muted hover:text-warm-white hover:bg-white/5 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-charcoal-950/98 px-6 py-8 backdrop-blur-3xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 font-mono text-xs text-warm-muted">
              <span className="text-electric-orange font-bold">{PERSONAL_INFO.status}</span>
              <span>{time}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.click();
                  setMobileMenuOpen(false);
                }}
                className="font-syne text-xl font-bold tracking-wider text-warm-white hover:text-electric-orange py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-warm-dark">[{link.index}]</span>
              </a>
            ))}

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Mohan_Sri_Raghuram_resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-electric-orange/40 bg-electric-orange/10 text-xs font-mono font-bold text-warm-white"
              >
                <FileDown className="w-4 h-4 text-electric-orange" />
                <span>DOWNLOAD RESUME (PDF)</span>
              </a>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3.5 rounded-xl bg-electric-orange text-white font-mono text-xs font-black tracking-wider"
              >
                CONTACT DIRECTLY →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
