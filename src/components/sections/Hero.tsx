import React from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { HeroBackdrop3D } from '../3d/HeroBackdrop3D';
import { ArrowDown, ArrowUpRight, Terminal, Copy, Check, Sparkles, Activity, ShieldCheck, ArrowRight } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

interface HeroProps {
  onCopyPip: () => void;
  pipCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPip, pipCopied }) => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10 sm:pb-14 border-b border-white/[0.08] bg-charcoal-950">
      {/* 3D Kinetic Neural Manifold / Topological Tensor Grid */}
      <HeroBackdrop3D />

      {/* Atmospheric Ambient Lighting: Warm White & Electric Orange */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-white/[0.025] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-electric-orange/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center py-4">
        {/* Availability Tag with Radar Beacon & Kinetic Border */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-white/10 mb-5 sm:mb-6 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-electric-orange/40 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-orange/[0.08] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
          </span>
          <span className="font-mono text-[11px] text-electric-orange tracking-widest uppercase font-bold">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Dynamic Asymmetrical Kinetic Headline (Properly Proportioned!) */}
        <div className="mb-6 select-none">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center"
          >
            {/* Stepped Tier 1: Left-Biased Upper Heading + Micro Directive Index */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 sm:-translate-x-6">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-electric-orange tracking-widest uppercase bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded hidden md:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
                PHASE 01
              </span>

              <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-tight uppercase leading-none text-warm-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                FROM IDEA
              </h1>

              {/* Kinetic Directional Vector Arrow */}
              <div className="hidden lg:flex items-center gap-1 text-electric-orange/80 animate-pulse">
                <div className="w-6 h-[2px] bg-electric-orange" />
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </div>
            </div>

            {/* Stepped Tier 2: Right-Biased High-Voltage Skewed Power Block */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 sm:translate-x-6 mt-1 sm:mt-1.5">
              <motion.div
                whileHover={{ scale: 1.03, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative group cursor-default transform -skew-x-3 sm:-skew-x-6 sm:-rotate-1"
              >
                {/* Neon Drop Glow */}
                <div className="absolute inset-0 bg-electric-orange blur-xl opacity-35 group-hover:opacity-55 transition-opacity" />

                {/* Main Angled Power Block */}
                <div
                  style={{ backgroundColor: '#ff5500', color: '#000000' }}
                  className="relative px-5 sm:px-8 py-1 sm:py-2 rounded-lg shadow-[0_15px_40px_rgba(255,85,0,0.4)] border-2 border-white/20 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />

                  <span className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[5.2rem] font-black tracking-tight uppercase leading-none inline-block whitespace-nowrap">
                    TO IMPACT
                  </span>
                </div>
              </motion.div>

              <span className="font-mono text-[10px] sm:text-xs font-bold text-warm-cream tracking-widest uppercase bg-charcoal-900/90 border border-white/10 px-2.5 py-0.5 rounded hidden md:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                PRODUCTION READY
              </span>
            </div>
          </motion.div>
        </div>

        {/* Professional Engineering Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-6"
        >
          <div className="flex flex-col items-center justify-center gap-2.5">
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5">
              <span className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-warm-white tracking-tight">
                Building Systems
              </span>
              <span className="font-mono text-[11px] sm:text-xs font-bold tracking-widest text-electric-orange bg-electric-orange/15 border border-electric-orange/35 px-3 py-1 rounded-full uppercase inline-flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
                AT THE INTERSECTION OF
              </span>
            </div>

            <div className="flex items-center justify-center">
              <span className="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl text-warm-cream tracking-tight border-b-2 border-electric-orange/60 pb-1">
                AI, Determinism & Technology
              </span>
            </div>
          </div>
        </motion.div>

        {/* Supporting Pitch */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="max-w-2xl mx-auto mb-10"
        >
          <p className="font-sans text-sm sm:text-base text-warm-cream/90 leading-relaxed font-normal">
            AI engineering, intelligent developer tools, and high-concurrency data systems. Built to solve real architectural bottlenecks.
          </p>
        </motion.div>

        {/* Action Row - Highly Visible & Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-6"
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
              className="px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider bg-white/[0.05] border border-white/10 hover:border-white/30 text-warm-white transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
            >
              <span>LETS CONTACT</span>
              <ArrowUpRight className="w-4 h-4 text-warm-muted" />
            </a>
          </Magnetic>

          {/* Quick Pip Install Snippet */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl bg-charcoal-900/90 border border-electric-orange/30 text-xs font-mono shadow-xl backdrop-blur-md hover:border-electric-orange/60 transition-colors">
            <Terminal className="w-3.5 h-3.5 text-electric-orange" />
            <code className="text-electric-orange font-bold font-mono">pip install codegraph-mcp</code>
            <button
              onClick={() => {
                sound.click();
                onCopyPip();
              }}
              className="p-1 rounded hover:bg-white/10 text-warm-muted hover:text-warm-white transition-colors cursor-pointer"
              title="Copy pip install command"
            >
              {pipCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-electric-orange" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar with Rotating Circular Scroll Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex items-center justify-between font-mono text-xs text-warm-muted border-t border-white/[0.08] relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-warm-white font-bold">MOHAN SRI RAGHURAM</span>
          <span className="text-electric-orange font-bold">·</span>
          <span className="text-electric-orange font-semibold">THE AI SIGNAL / ONE ATLAS</span>
          <span className="text-electric-orange font-bold">·</span>
          <span className="text-warm-muted font-mono">B.TECH CSE (AI)</span>
        </div>

        {/* Rotating Circular Scroll Down Badge */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite] flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-electric-orange">
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
          <ArrowDown className="w-3.5 h-3.5 text-electric-orange animate-bounce" />
        </div>
      </div>
    </section>
  );
};
