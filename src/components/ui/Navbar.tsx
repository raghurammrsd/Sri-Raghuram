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
    { num: '03', label: 'PROJECTS', href: '#projects', id: 'projects' },
    { num: '04', label: 'STACK', href: '#skills', id: 'skills' },
    { num: '05', label: 'EDUCATION', href: '#experience', id: 'experience' },
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
          className="max-w-7xl mx-auto rounded-full bg-white/80 backdrop-blur-3xl backdrop-saturate-150 border border-[#e5d3af] shadow-[0_12px_40px_rgba(121,13,22,0.06),inset_0_1px_1px_rgba(255,255,255,0.9),0_0_20px_rgba(174,196,212,0.12)] px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between pointer-events-auto"
        >
          {/* Left: Bespoke Motion Graphic Monogram Logo */}
          <div className="flex items-center">
            <BespokeLogo />
          </div>

          {/* Center: Motion Graphic Navigation Dock (Hidden only on small screens) */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#f5efe1] border border-[#e5d3af] shadow-inner relative">
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
                      className="absolute inset-0 bg-[#aec4d4]/30 backdrop-blur-md rounded-full -z-10 border border-[#aec4d4] shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}

                  {/* Active Indicator Underline / Glow */}
                  {isActive && !isHovered && (
                    <motion.span
                      layoutId="navActivePill"
                      className="absolute inset-0 bg-[#e5d3af] backdrop-blur-md rounded-full -z-10 border border-[#790d16]/40 shadow-sm"
                      transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                    />
                  )}

                  <span className={`text-[10px] ${isActive ? 'text-[#790d16] font-black' : 'text-[#444444] font-bold'}`}>
                    {link.num}
                  </span>
                  <span className={isActive ? 'text-black font-black' : 'text-[#222222] font-bold hover:text-[#790d16]'}>
                    {link.label}
                  </span>

                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] shadow-[0_0_6px_#790d16]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right: Live Telemetry + Audio Equalizer + Resume Capsule */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Real-time Precision IST Clock */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/90 border border-[#e5d3af] font-mono text-[11px] text-black shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
              </span>
              <span className="font-bold text-black">IST</span>
              <span className="text-[#333333] font-semibold">{time || 'LIVE'}</span>
            </div>

            {/* Interactive Audio Equalizer Waveform Button */}
            <button
              onClick={toggleSound}
              className="px-2.5 py-1.5 rounded-full border border-[#e5d3af] bg-white/90 hover:bg-[#f5efe1] hover:border-[#790d16]/50 text-black transition-all flex items-center gap-1.5 shadow-sm"
              title={soundEnabled ? "Mute interactive audio" : "Enable interactive audio"}
            >
              {soundEnabled ? (
                <div className="flex items-end gap-[2px] h-3 w-3.5">
                  <span className="w-[2px] h-2 bg-[#790d16] animate-[pulse_0.6s_ease-in-out_infinite]" />
                  <span className="w-[2px] h-3 bg-[#790d16] animate-[pulse_0.9s_ease-in-out_infinite]" />
                  <span className="w-[2px] h-1.5 bg-[#790d16] animate-[pulse_0.4s_ease-in-out_infinite]" />
                </div>
              ) : (
                <VolumeX className="w-3.5 h-3.5 text-black" />
              )}
              <span className="hidden md:inline font-mono text-[9px] font-bold text-black">
                {soundEnabled ? 'FX' : 'OFF'}
              </span>
            </button>

            {/* High-Impact Glassomorphic Resume Action (User Palette: Burgundy & Cream) */}
            <Magnetic strength={0.25}>
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Mohan_Sri_Raghuram_resume.pdf"
                onClick={() => sound.click()}
                className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#790d16] via-[#790d16] to-[#5c0910] text-[#ffffff] font-mono text-xs font-black tracking-wider transition-all flex items-center gap-1.5 shadow-[0_4px_20px_rgba(121,13,22,0.3)] hover:shadow-[0_6px_25px_rgba(121,13,22,0.45)] border border-[#790d16]/30 hover:scale-105 active:scale-95 cursor-pointer"
                data-cursor-text="RESUME"
              >
                <FileDown className="w-3.5 h-3.5 text-[#ffffff] stroke-[2.5]" />
                <span className="font-black text-[#ffffff]">RESUME</span>
                <ArrowUpRight className="w-3 h-3 text-[#ffffff] stroke-[2.5]" />
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
            className="fixed inset-x-3 top-20 z-40 p-6 rounded-3xl bg-[#f5efe1]/95 backdrop-blur-2xl border border-[#e5d3af] shadow-2xl lg:hidden space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#e5d3af]">
              <span className="font-mono text-xs text-[#790d16] font-bold uppercase tracking-wider">
                NAVIGATION MATRIX
              </span>
              <span className="font-mono text-[10px] text-warm-dark">IST {time}</span>
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
                  className="px-4 py-3 rounded-xl bg-white/80 hover:bg-white hover:border-[#790d16]/30 border border-[#e5d3af] font-mono text-sm tracking-wider text-black flex items-center justify-between transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-[#790d16] font-bold text-xs">{link.num}</span>
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
                className="w-full py-3.5 rounded-xl bg-[#790d16] text-[#ffffff] font-mono text-xs font-black tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#790d16]/20"
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
