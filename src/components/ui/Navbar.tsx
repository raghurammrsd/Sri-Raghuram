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
    { label: "EXPERTISE", href: "#expertise" },
    { label: "SYSTEMS", href: "#internship" },
    { label: "ARSENAL", href: "#projects" },
    { label: "STACK", href: "#skills" },
    { label: "PEDIGREE", href: "#experience" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-charcoal-950/80 backdrop-blur-2xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Brand Monogram & AI Role Tag */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            onClick={() => sound.click()}
            className="group flex items-center gap-2.5"
          >
            <span className="font-syne text-xl sm:text-2xl font-black tracking-tight text-warm-white group-hover:text-electric-orange transition-colors">
              RAGHURAM
            </span>
            <span className="w-2 h-2 rounded-full bg-electric-orange shadow-[0_0_10px_#ff5500] animate-pulse" />
          </a>

          <div className="hidden lg:flex items-center pl-3 border-l border-white/10 font-mono text-[10px] text-warm-muted uppercase tracking-wider">
            <span className="px-2 py-0.5 rounded-full bg-electric-orange/10 border border-electric-orange/25 text-electric-orange font-bold">
              AI SYSTEMS ARCHITECT
            </span>
          </div>
        </div>

        {/* Center: Luxury Floating Glass Capsule Navigation (Isolated, Clean, Zero Cramping!) */}
        <nav className="hidden xl:flex items-center gap-1 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-white/10 shadow-2xl backdrop-blur-xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.hover()}
              className="px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider text-warm-muted hover:text-warm-white hover:bg-white/[0.06] transition-all relative group flex items-center gap-1.5"
            >
              <span>{link.label}</span>
              <span className="w-1 h-1 rounded-full bg-electric-orange opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          ))}
        </nav>

        {/* Right: Dedicated Time Capsule + Sound + Action Pill */}
        <div className="flex items-center gap-3">
          {/* Real-time IST Clock Capsule */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-charcoal-900/80 border border-white/10 font-mono text-[11px] text-warm-cream shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span className="font-bold text-warm-white">IST</span>
            <span className="text-warm-muted">{time || 'LIVE'}</span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className="p-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-warm-muted hover:text-warm-white transition-all hidden sm:flex items-center justify-center"
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
              className="px-4 py-2 rounded-full border border-electric-orange/40 bg-electric-orange/15 hover:bg-electric-orange text-warm-white hover:text-charcoal-950 font-mono text-xs font-black tracking-wider transition-all flex items-center gap-1.5 shadow-lg shadow-electric-orange/20 cursor-pointer"
            >
              <FileDown className="w-3.5 h-3.5 text-electric-orange group-hover:text-charcoal-950" />
              <span>RESUME</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </a>
          </Magnetic>

          {/* Mobile Menu Toggle Button */}
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
              <span>IST {time}</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.click();
                  setMobileMenuOpen(false);
                }}
                className="font-syne text-xl font-bold tracking-wider text-warm-white hover:text-electric-orange py-1.5 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="font-mono text-xs text-electric-orange">→</span>
              </a>
            ))}

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Mohan_Sri_Raghuram_resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-electric-orange/40 bg-electric-orange/15 text-xs font-mono font-bold text-warm-white"
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
