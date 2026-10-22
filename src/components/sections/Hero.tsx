import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowDown, ArrowUpRight, Terminal, Copy, Check, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

interface HeroProps {
  onCopyPip: () => void;
  pipCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPip, pipCopied }) => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] lg:h-[calc(100vh-5rem)] lg:max-h-[920px] flex flex-col justify-between py-6 sm:py-8 lg:py-10 border-b border-white/[0.08] overflow-hidden bg-charcoal-950">
      {/* Background Subtle Striped Texture */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none bg-[repeating-linear-gradient(90deg,#fff,#fff_1px,transparent_1px,transparent_36px)]" />

      {/* Dual Chromatic Ambient Lighting: Cyan on left, Red on right */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.07] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/[0.07] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center">
        {/* Availability Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-white/10 mb-6 shadow-2xl backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
          </span>
          <span className="font-mono text-[11px] text-warm-white tracking-widest uppercase font-bold">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Clean, Massive, Uninterrupted Headline: FROM IDEA TO IMPACT (No photo, no animation box) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-tight text-warm-white uppercase leading-[0.94] flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            <span>FROM IDEA</span>
            <span className="bg-electric-orange text-charcoal-950 px-4 sm:px-7 py-0.5 rounded-sm inline-block shadow-2xl">
              TO IMPACT
            </span>
          </h1>
        </motion.div>

        {/* Editorial Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-4"
        >
          <h2 className="font-serif italic text-2xl sm:text-4xl text-warm-cream font-normal leading-tight">
            Building Systems at the Intersection of AI, Determinism & Technology
          </h2>
        </motion.div>

        {/* Supporting Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="max-w-xl mx-auto mb-10"
        >
          <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
            AI engineering, intelligent developer tools, and high-concurrency data systems. Built to solve real architectural bottlenecks.
          </p>
        </motion.div>

        {/* Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Magnetic strength={0.3}>
            <a
              href="#expertise"
              onClick={() => sound.click()}
              className="px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider gradient-border-chromatic text-warm-white hover:text-white transition-all flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>EXPLORE EXPERTISE</span>
              <ArrowDown className="w-4 h-4 text-cyan-400" />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={() => sound.click()}
              className="px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider bg-white/[0.05] border border-white/10 hover:border-white/30 text-warm-white transition-all flex items-center gap-2"
            >
              <span>LETS CONTACT</span>
              <ArrowUpRight className="w-4 h-4 text-warm-muted" />
            </a>
          </Magnetic>

          {/* Quick Pip Install Snippet */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-charcoal-900/90 border border-white/[0.08] text-xs font-mono shadow-xl backdrop-blur-md">
            <Terminal className="w-3.5 h-3.5 text-electric-orange" />
            <code className="text-warm-cream">pip install codegraph-mcp</code>
            <button
              onClick={() => {
                sound.click();
                onCopyPip();
              }}
              className="p-1 rounded hover:bg-white/10 text-warm-muted hover:text-warm-white"
              title="Copy pip install command"
            >
              {pipCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar with Rotating Circular Scroll Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex items-center justify-between font-mono text-xs text-warm-muted border-t border-white/[0.06] relative z-10">
        <div>
          <span>MOHAN SRI RAGHURAM · THE AI SIGNAL / ONE ATLAS · B.TECH CSE (AI)</span>
        </div>

        {/* Rotating Circular Scroll Down Badge */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-warm-muted">
              <path
                id="textPath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[10px] uppercase font-mono tracking-widest font-semibold fill-warm-muted">
                <textPath href="#textPath">
                  · SCROLL DOWN · SCROLL DOWN ·
                </textPath>
              </text>
            </svg>
          </div>
          <ArrowDown className="w-4 h-4 text-cyan-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
