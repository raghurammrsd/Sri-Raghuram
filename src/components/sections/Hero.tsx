import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroScene } from '../3d/HeroScene';
import { ArrowDown, ArrowUpRight, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

interface HeroProps {
  onCopyPip: () => void;
  pipCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPip, pipCopied }) => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between pt-8 pb-12 sm:pt-12 sm:pb-16 border-b border-white/[0.06] overflow-hidden tech-grid">
      {/* Subtle ambient lighting behind 3D */}
      <div className="absolute right-0 top-1/4 w-[600px] h-[600px] bg-electric-glow rounded-full blur-[160px] pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Animated Availability Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 w-fit mb-6"
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
              className="mb-3"
            >
              <span className="font-mono text-sm sm:text-base text-electric-orange uppercase tracking-widest font-bold">
                {PERSONAL_INFO.name}
              </span>
            </motion.div>

            {/* Oversized Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black tracking-[-0.045em] text-warm-white leading-[0.94] uppercase mb-8"
            >
              I build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-warm-white via-white to-warm-muted">
                intelligence
              </span>
              <br />
              into <span className="underline decoration-electric-orange decoration-[4px] underline-offset-8">software</span>.
            </motion.h1>

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg sm:text-2xl text-warm-muted font-normal leading-relaxed max-w-xl mb-10"
            >
              {PERSONAL_INFO.supportingText}
            </motion.p>

            {/* Action Buttons & Terminal Snippet */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10"
            >
              <Magnetic strength={0.3}>
                <a
                  href="#projects"
                  onClick={() => sound.click()}
                  className="px-7 py-4 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-electric-orange hover:text-white transition-all shadow-xl flex items-center gap-2 group"
                  data-cursor-text="EXPLORE"
                >
                  <span>EXPLORE PROJECTS</span>
                  <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </a>
              </Magnetic>

              <Magnetic strength={0.3}>
                <a
                  href="#contact"
                  onClick={() => sound.click()}
                  className="px-7 py-4 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-warm-white font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2"
                  data-cursor-text="HELLO"
                >
                  <span>CONTACT ME</span>
                  <ArrowUpRight className="w-4 h-4 text-warm-muted" />
                </a>
              </Magnetic>
            </motion.div>

            {/* Quick Terminal Snippet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="inline-flex items-center gap-3 p-3 rounded-xl bg-charcoal-850/80 border border-white/[0.08] w-fit"
            >
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
            </motion.div>
          </div>

          {/* Right Column: Real-Time Interactive 3D Sculpture */}
          <div className="lg:col-span-5 h-[360px] sm:h-[480px] lg:h-[560px] w-full relative flex items-center justify-center">
            <HeroScene />
            {/* 3D Scene Caption / Helper */}
            <div className="absolute bottom-2 right-2 sm:right-6 pointer-events-none">
              <span className="font-mono text-[10px] text-warm-dark tracking-widest uppercase">
                [ REAL-TIME 3D NEURAL CORE · DRAG TO INTERACT ]
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 flex items-center justify-between font-mono text-xs text-warm-dark border-t border-white/[0.05]">
        <div className="flex items-center gap-2 text-warm-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
          <span>PARUL UNIVERSITY CSE (AI) · CGPA 8.21</span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span>SCROLL TO DISCOVER</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-electric-orange" />
        </div>
      </div>
    </section>
  );
};
