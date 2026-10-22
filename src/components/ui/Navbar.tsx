import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { FileDown, Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "STORY", href: "#story", index: "01" },
    { label: "ARSENAL", href: "#projects", index: "02" },
    { label: "SKILLS", href: "#skills", index: "03" },
    { label: "EXPERIENCE", href: "#experience", index: "04" },
    { label: "CONTACT", href: "#contact", index: "05" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-charcoal-950/85 backdrop-blur-md border-b border-white/[0.06] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand & Identity */}
        <div className="flex items-center gap-5">
          <a
            href="#"
            onClick={() => sound.click()}
            className="group flex items-center gap-1.5 text-xl font-bold tracking-tight text-warm-white hover:text-white transition-colors"
          >
            <span>{PERSONAL_INFO.brand}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-electric-orange group-hover:scale-125 transition-transform" />
          </a>
          <span className="hidden md:inline-block font-mono text-xs text-warm-muted border-l border-white/10 pl-4 uppercase tracking-wider">
            AI ENGINEER
          </span>
          <div className="hidden lg:flex items-center gap-2 pl-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
            </span>
            <span className="font-mono text-[10px] tracking-widest text-warm-muted uppercase">
              {PERSONAL_INFO.status}
            </span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => sound.hover()}
              className="font-mono text-xs tracking-wider text-warm-muted hover:text-warm-white transition-colors py-1 flex items-center gap-1.5 group"
            >
              <span className="text-warm-dark group-hover:text-electric-orange transition-colors">
                [{link.index}]
              </span>
              <span>{link.label}</span>
            </a>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Resume PDF Download */}
          <Magnetic strength={0.25}>
            <a
              href={PERSONAL_INFO.resumePdf}
              download="Mohan_Sri_Raghuram_resume.pdf"
              onClick={() => sound.click()}
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-warm-white text-xs font-mono tracking-wider transition-all"
              data-cursor-text="PDF"
            >
              <FileDown className="w-3.5 h-3.5 text-electric-orange" />
              <span>RESUME</span>
            </a>
          </Magnetic>

          {/* Contact Me CTA */}
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={() => sound.click()}
              className="px-5 py-2.5 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs font-bold tracking-wider hover:bg-electric-orange hover:text-white transition-all shadow-md flex items-center gap-1.5"
            >
              <span>CONTACT ME</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </Magnetic>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              sound.click();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="xl:hidden p-2 rounded-lg text-warm-muted hover:text-warm-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-b border-white/10 bg-charcoal-950/98 px-6 py-6 backdrop-blur-2xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-white/10">
              <span className="w-2 h-2 rounded-full bg-electric-orange" />
              <span className="font-mono text-xs text-warm-muted">{PERSONAL_INFO.status}</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  sound.click();
                  setMobileMenuOpen(false);
                }}
                className="font-mono text-sm tracking-wider text-warm-white hover:text-electric-orange py-1 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-warm-dark">[{link.index}]</span>
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
              <a
                href={PERSONAL_INFO.resumePdf}
                download="Mohan_Sri_Raghuram_resume.pdf"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-white/15 bg-white/5 text-xs font-mono text-warm-white"
              >
                <FileDown className="w-4 h-4 text-electric-orange" />
                <span>Download Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-3 rounded-xl bg-electric-orange text-white font-mono text-xs font-bold tracking-wider"
              >
                CONTACT ME →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
