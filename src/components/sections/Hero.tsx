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
      {/* Ambient Lighting: Pure Warm White & Electric Orange */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-white/[0.03] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-electric-orange/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center">
        {/* Availability Tag with Kinetic Scanner Glow */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
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

        {/* Kinetic Animated Headline: FROM IDEA TO IMPACT */}
        <div className="mb-6 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[7.4rem] font-black tracking-tight text-warm-white uppercase leading-[0.93] flex flex-wrap items-center justify-center gap-3 sm:gap-6">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
              >
                FROM IDEA
              </motion.span>
              <motion.span
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="bg-electric-orange text-charcoal-950 px-5 sm:px-8 py-0.5 rounded-sm inline-block shadow-2xl"
              >
                TO IMPACT
              </motion.span>
            </h1>
          </motion.div>
        </div>

        {/* Editorial Subtitle with Kinetic Float Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
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
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-xl mx-auto mb-10"
        >
          <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
            AI engineering, intelligent developer tools, and high-concurrency data systems. Built to solve real architectural bottlenecks.
          </p>
        </motion.div>

        {/* Action Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-8"
        >
          <Magnetic strength={0.3}>
            <a
              href="#expertise"
              onClick={() => sound.click()}
              className="px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider gradient-border-chromatic text-warm-white hover:text-white transition-all flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>EXPLORE EXPERTISE</span>
              <ArrowDown className="w-4 h-4 text-electric-orange" />
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
              <text className="text-[9.5px] uppercase font-mono tracking-[0.24em] font-bold">
                <textPath href="#textPath" startOffset="0%">
                  SCROLL DOWN · EXPLORE ARCHITECTURES ·
                </textPath>
              </text>
            </svg>
          </div>
          <ArrowDown className="w-4 h-4 text-electric-orange animate-bounce" />
        </div>
      </div>
    </section>
  );
};
