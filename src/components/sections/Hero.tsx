import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { InteractiveNeuralField } from '../canvas/InteractiveNeuralField';
import { ArrowDown, ArrowUpRight, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

interface HeroProps {
  onCopyPip: () => void;
  pipCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPip, pipCopied }) => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-12 pb-14 sm:pt-16 sm:pb-20 border-b border-white/[0.06] overflow-hidden bg-charcoal-950">
      {/* Interactive Generative Neural Particle Canvas */}
      <div className="absolute inset-0 pointer-events-auto opacity-75">
        <InteractiveNeuralField />
      </div>

      {/* Subtle radial ambient spotlight */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-electric-glow rounded-full blur-[170px] pointer-events-none opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto pointer-events-none">
        <div className="max-w-5xl">
          {/* Animated Availability Tag */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-charcoal-900/90 border border-white/10 w-fit mb-8 pointer-events-auto shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
            </span>
            <span className="font-mono text-[11px] text-warm-white tracking-widest uppercase font-semibold">
              {PERSONAL_INFO.status}
            </span>
          </motion.div>

          {/* Author Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-4"
          >
            <span className="font-mono text-sm sm:text-base text-electric-orange uppercase tracking-widest font-black flex items-center gap-2">
              <span>MOHAN SRI RAGHURAM</span>
              <span className="text-warm-dark font-normal">///</span>
              <span className="text-warm-muted font-normal text-xs sm:text-sm">AI SYSTEMS ENGINEER</span>
            </span>
          </motion.div>

          {/* Oversized Honey-Style Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.6rem] font-black tracking-[-0.045em] text-warm-white leading-[0.93] uppercase mb-8"
          >
            I build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-white to-warm-muted">
              intelligence
            </span>
            <br />
            into <span className="underline decoration-electric-orange decoration-[4px] sm:decoration-[6px] underline-offset-8">software</span>.
          </motion.h1>

          {/* Supporting Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-2xl text-warm-muted font-normal leading-relaxed max-w-2xl mb-10"
          >
            {PERSONAL_INFO.supportingText}
          </motion.p>

          {/* Actions & Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 sm:gap-6 mb-8 pointer-events-auto"
          >
            <Magnetic strength={0.3}>
              <a
                href="#projects"
                onClick={() => sound.click()}
                className="px-8 py-4 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-electric-orange hover:text-white transition-all shadow-xl flex items-center gap-2 group"
                data-cursor-text="EXPLORE"
              >
                <span>EXPLORE 4 VERIFIED PROJECTS</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
              </a>
            </Magnetic>

            <Magnetic strength={0.3}>
              <a
                href="#contact"
                onClick={() => sound.click()}
                className="px-8 py-4 rounded-full border border-white/15 bg-charcoal-900/90 hover:bg-white/[0.08] hover:border-white/30 text-warm-white font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2"
                data-cursor-text="HELLO"
              >
                <span>CONTACT ME</span>
                <ArrowUpRight className="w-4 h-4 text-warm-muted" />
              </a>
            </Magnetic>

            {/* Quick Terminal Snippet */}
            <div className="inline-flex items-center gap-3 p-3 rounded-xl bg-charcoal-900/90 border border-white/[0.1] shadow-xl">
              <Terminal className="w-4 h-4 text-electric-orange shrink-0" />
              <code className="font-mono text-xs text-warm-cream">pip install codegraph-mcp</code>
              <button
                onClick={() => {
                  sound.click();
                  onCopyPip();
                }}
                className="p-1 rounded hover:bg-white/10 text-warm-muted hover:text-warm-white transition-colors"
                title="Copy pip command"
                data-cursor-text="COPY"
              >
                {pipCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Status / Pedigree Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-xs text-warm-dark border-t border-white/[0.05] relative z-10">
        <div className="flex items-center gap-2 text-warm-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
          <span>PARUL UNIVERSITY CSE (AI) · CGPA 8.21</span>
          <span className="text-warm-dark">·</span>
          <span>INTERN @ THE AI SIGNAL / ONE ATLAS</span>
        </div>
        <div className="flex items-center gap-2 text-warm-muted">
          <span className="text-electric-orange">✦</span>
          <span>MOVE CURSOR TO INTERACT WITH NEURAL VECTOR FIELD</span>
        </div>
      </div>
    </section>
  );
};
