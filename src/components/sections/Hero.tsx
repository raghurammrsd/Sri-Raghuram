import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveNeuralField } from '../canvas/InteractiveNeuralField';
import { ArrowDown, ArrowUpRight, Terminal, Copy, Check, Sparkles, Shield, Cpu } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

interface HeroProps {
  onCopyPip: () => void;
  pipCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPip, pipCopied }) => {
  return (
    <section className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-between pt-10 pb-12 sm:pt-16 sm:pb-16 border-b border-white/[0.08] overflow-hidden bg-charcoal-950">
      {/* Interactive Cybernetic Neural Canvas */}
      <div className="absolute inset-0 pointer-events-auto opacity-80">
        <InteractiveNeuralField />
      </div>

      {/* Atmospheric Orange Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-electric-glow rounded-full blur-[190px] pointer-events-none opacity-25" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto pointer-events-none">
        <div className="max-w-5xl">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-charcoal-900/90 border border-white/10 w-fit mb-6 pointer-events-auto shadow-2xl backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
            </span>
            <span className="font-mono text-[11px] text-warm-white tracking-widest uppercase font-bold">
              {PERSONAL_INFO.status}
            </span>
          </motion.div>

          {/* Author Name */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-3"
          >
            <span className="font-mono text-sm sm:text-base text-electric-orange tracking-widest font-black uppercase flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-warm-dark font-normal">///</span>
              <span className="text-warm-muted font-normal text-xs sm:text-sm">AI SYSTEMS & REPO INTELLIGENCE</span>
            </span>
          </motion.div>

          {/* Massive Syne Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[5.8rem] font-black tracking-tight text-warm-white leading-[0.93] uppercase mb-8"
          >
            I build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-white to-warm-muted">
              intelligence
            </span>
            <br />
            into <span className="underline decoration-electric-orange decoration-[5px] sm:decoration-[8px] underline-offset-8">software</span>.
          </motion.h1>

          {/* Supporting Pitch */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-sans text-lg sm:text-2xl text-warm-muted font-normal leading-relaxed max-w-2xl mb-10"
          >
            {PERSONAL_INFO.supportingText}
          </motion.p>

          {/* Interactive CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 pointer-events-auto"
          >
            <Magnetic strength={0.3}>
              <a
                href="#internship"
                onClick={() => sound.click()}
                className="px-8 py-4 rounded-full bg-electric-orange text-white font-mono text-xs sm:text-sm font-black tracking-wider hover:bg-electric-light transition-all shadow-xl shadow-electric-orange/25 flex items-center gap-2 group"
                data-cursor-text="INTERN"
              >
                <span>VIEW INTERNSHIP WORK</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#projects"
                onClick={() => sound.click()}
                className="px-8 py-4 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs sm:text-sm font-black tracking-wider hover:bg-white transition-all shadow-xl flex items-center gap-2"
                data-cursor-text="ARSENAL"
              >
                <span>4 VERIFIED PROJECTS</span>
                <ArrowDown className="w-4 h-4" />
              </a>
            </Magnetic>

            {/* Quick Terminal Snippet */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-charcoal-900/90 border border-white/[0.1] shadow-2xl backdrop-blur-md">
              <Terminal className="w-4 h-4 text-electric-orange shrink-0" />
              <code className="font-mono text-xs text-warm-cream">pip install codegraph-mcp</code>
              <button
                onClick={() => {
                  sound.click();
                  onCopyPip();
                }}
                className="p-1 rounded hover:bg-white/10 text-warm-muted hover:text-warm-white transition-colors"
                title="Copy pip install command"
                data-cursor-text="COPY"
              >
                {pipCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Credentials Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-warm-dark border-t border-white/[0.06] relative z-10">
        <div className="flex flex-wrap items-center gap-3 text-warm-muted">
          <span className="text-electric-orange font-bold">●</span>
          <span>THE AI SIGNAL / ONE ATLAS (AI ENGINEER INTERN)</span>
          <span className="text-warm-dark">·</span>
          <span>PARUL UNIVERSITY CSE (AI) · CGPA 8.21</span>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-warm-muted">
          <span className="text-electric-orange">✦</span>
          <span>INTERACTIVE NEURAL GRAPH · MOVE CURSOR TO RIPGLE</span>
        </div>
      </div>
    </section>
  );
};
