import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FileDown, Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { BespokeLogo } from './BespokeLogo';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState('expertise');
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['expertise', 'internship', 'projects', 'skills', 'experience', 'contact'];
      const scrollPos = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    sound.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) sound.click();
  };

  const navLinks = [
    { num: '01', label: 'EXPERTISE', href: '#expertise', id: 'expertise' },
    { num: '02', label: 'SYSTEMS', href: '#internship', id: 'internship' },
    { num: '03', label: 'ARSENAL', href: '#projects', id: 'projects' },
    { num: '04', label: 'STACK', href: '#skills', id: 'skills' },
    { num: '05', label: 'PEDIGREE', href: '#experience', id: 'experience' },
    { num: '06', label: 'CONTACT', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Single Unified Floating Cybernetic Island Header (Glassomorphic) */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 w-full px-3 sm:px-6 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-7xl mx-auto rounded-full bg-charcoal-950/60 backdrop-blur-3xl border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.12),0_0_30px_rgba(255,85,0,0.08)] px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto"
        >
          {/* Left: Bespoke Motion Graphic Monogram Logo */}
          <div className="flex items-center">
            <BespokeLogo />
          </div>

          {/* Center: Motion Graphic Navigation Dock (Hidden only on small screens) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/10 shadow-inner relative">
            {navLinks.map((link, idx) => {
              const isActive = activeSection === link.id;
              const isHovered = hoveredIndex === idx;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onMouseEnter={() => {
                    sound.hover();
                    setHoveredIndex(idx);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => sound.click()}
                  className="relative px-3 sm:px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all flex items-center gap-1.5 z-10"
                >
                  {/* Magnetic Floating Spotlight Pill */}
                  {isHovered && (
                    <motion.span
                      layoutId="navHoverPill"
                      className="absolute inset-0 bg-white/[0.08] backdrop-blur-md rounded-full -z-10 border border-white/20 shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}

                  {/* Active Indicator Underline / Glow */}
                  {isActive && !isHovered && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-electric-orange/20 backdrop-blur-md rounded-full -z-10 border border-electric-orange/50 shadow-[0_0_15px_rgba(255,85,0,0.35)]"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}

                  <span className={`text-[10px] ${isActive ? 'text-electric-orange font-bold' : 'text-warm-dark'}`}>
                    {link.num}
                  </span>
                  <span className={isActive ? 'text-warm-white font-bold' : 'text-warm-muted'}>
                    {link.label}
                  </span>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-orange shadow-[0_0_6px_#ff5500]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Live Telemetry + Audio Equalizer + Resume Capsule */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Real-time Precision IST Clock */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] backdrop-blur-xl border border-white/15 font-mono text-[11px] text-warm-cream shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
              </span>
              <span className="font-bold text-warm-white">IST</span>
              <span className="text-warm-muted">{time || 'LIVE'}</span>
            </div>

            {/* Interactive Audio Equalizer Waveform Button */}
            <button
              onClick={toggleSound}
              className="px-2.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-xl hover:bg-white/[0.09] hover:border-electric-orange/50 text-warm-muted hover:text-warm-white transition-all flex items-center gap-1.5 shadow-sm"
              title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            >
              {soundEnabled ? (
                <div className="flex items-end gap-[2px] h-3 w-3.5">
                  <span className="w-[2px] h-2 bg-electric-orange animate-[pulse_0.6s_ease-in-out_infinite]" />
                  <span className="w-[2px] h-3 bg-electric-orange animate-[pulse_0.9s_ease-in-out_infinite]" />
                  <span className="w-[2px] h-1.5 bg-electric-orange animate-[pulse_0.4s_ease-in-out_infinite]" />
                </div>
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-warm-dark" />
              )}
              <span className="hidden md:inline font-mono text-[9px] font-bold text-warm-muted">
                {soundEnabled ? 'FX' : 'OFF'}
              </span>
            </button>

            {/* High-Impact Solid Electric Orange Resume Action (Glassomorphic) */}
            <Magnetic strength={0.25}>
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Mohan_Sri_Raghuram_resume.pdf"
                onClick={() => sound.click()}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-electric-orange via-electric-orange to-electric-light text-charcoal-950 font-mono text-xs font-black tracking-wider transition-all flex items-center gap-1.5 shadow-[0_0_25px_rgba(255,85,0,0.45),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_0_35px_rgba(255,85,0,0.7)] backdrop-blur-xl border border-white/30 hover:scale-105 active:scale-95 cursor-pointer"
                data-cursor-text="RESUME"
              >
                <FileDown className="w-3.5 h-3.5 text-charcoal-950 stroke-[2.5]" />
                <span className="font-black">RESUME</span>
                <ArrowUpRight className="w-3 h-3 stroke-[2.5]" />
              </a>
            </Magnetic>

            {/* Mobile Hamburger Button (Strictly on small mobile screens only) */}
            <button
              onClick={() => {
                sound.click();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2 rounded-full border border-white/10 text-warm-muted hover:text-warm-white lg:hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-electric-orange" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-3 top-20 z-40 p-6 rounded-3xl bg-charcoal-950/95 backdrop-blur-2xl border border-white/10 shadow-2xl lg:hidden space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider">
                NAVIGATION MATRIX
              </span>
              <span className="font-mono text-[10px] text-warm-muted">IST {time}</span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    sound.click();
                    setMobileMenuOpen(false);
                  }}
                  className="px-4 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] hover:border-electric-orange/30 border border-transparent font-mono text-sm tracking-wider text-warm-white flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-electric-orange font-bold text-xs">{link.num}</span>
                    <span>{link.label}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-warm-muted" />
                </a>
              ))}
            </nav>

            <div className="pt-2">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Mohan_Sri_Raghuram_resume.pdf"
                onClick={() => sound.click()}
                className="w-full py-3.5 rounded-xl bg-electric-orange text-charcoal-950 font-mono text-xs font-black tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-electric-orange/20"
              >
                <FileDown className="w-4 h-4 stroke-[2.5]" />
                <span>DOWNLOAD VERIFIED RESUME (PDF)</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
