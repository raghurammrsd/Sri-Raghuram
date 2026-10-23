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
    <section className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 border-b border-white/[0.08] bg-transparent">
      {/* 3D Kinetic Neural Manifold / Topological Tensor Grid */}
      <HeroBackdrop3D />

      {/* Atmospheric Ambient Lighting: Warm White & Electric Orange */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-white/[0.02] rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[650px] h-[650px] bg-electric-orange/[0.06] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center py-2 sm:py-4">
        {/* Availability Tag with Radar Beacon & Kinetic Border */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-charcoal-900/90 border border-white/10 mb-4 sm:mb-6 shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-electric-orange/40 transition-colors"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-electric-orange/[0.08] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-orange"></span>
          </span>
          <span className="font-mono text-[11px] text-warm-white tracking-widest uppercase font-bold">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Dynamic Asymmetrical Kinetic Headline (Cool Stepped Diagonal Trajectory) */}
        <div className="mb-6 sm:mb-8 select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center gap-2 sm:gap-3"
          >
            {/* Stepped Tier 1: Left-Biased Upper Heading + Micro Directive Index + Kinetic Conduit */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 -translate-x-2 sm:-translate-x-14 md:-translate-x-20 lg:-translate-x-28">
              <span className="font-mono text-[10px] sm:text-xs font-bold text-electric-orange tracking-widest uppercase bg-electric-orange/10 border border-electric-orange/30 px-2.5 py-1 rounded inline-flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-pulse" />
                PHASE 01
              </span>

              <h1 className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[6.4rem] font-black tracking-tight uppercase leading-none text-warm-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)]">
                FROM IDEA
              </h1>

              {/* Kinetic Directional Traveling Laser Vector Conduit */}
              <div className="hidden sm:inline-flex items-center gap-1.5 text-electric-orange animate-pulse px-2 py-1 rounded bg-electric-orange/10 border border-electric-orange/25">
                <span className="font-mono text-[10px] font-bold tracking-widest hidden md:inline">COMPILE</span>
                <div className="w-8 md:w-12 h-[2px] bg-gradient-to-r from-electric-orange to-white" />
                <ArrowRight className="w-4 h-4 stroke-[3]" />
              </div>
            </div>

            {/* Stepped Tier 2: Right-Biased High-Voltage Skewed Power Block + Docked Status Badge */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 translate-x-2 sm:translate-x-14 md:translate-x-20 lg:translate-x-28 -mt-1 sm:-mt-2">
              <motion.div
                whileHover={{ scale: 1.04, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="relative group cursor-default transform -skew-x-4 sm:-skew-x-6 sm:-rotate-1"
              >
                {/* Neon Drop Glow */}
                <div className="absolute inset-0 bg-electric-orange blur-2xl opacity-45 group-hover:opacity-65 transition-opacity" />

                {/* Main Angled Power Block */}
                <div
                  style={{ backgroundColor: '#ff5500', color: '#000000' }}
                  className="relative px-6 sm:px-10 lg:px-12 py-1.5 sm:py-2.5 rounded-lg shadow-[0_20px_50px_rgba(255,85,0,0.5)] border-2 border-white/25 overflow-hidden"
                >
                  {/* Dynamic Continuous Sheen Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000" />

                  <span className="font-syne text-4xl sm:text-6xl md:text-7xl lg:text-[6.2rem] font-black tracking-tight uppercase leading-none inline-block whitespace-nowrap">
                    TO IMPACT
                  </span>
                </div>
              </motion.div>

              <span className="font-mono text-[10px] sm:text-xs font-bold text-warm-cream tracking-widest uppercase bg-charcoal-900/90 border border-white/15 px-3 py-1.5 rounded inline-flex items-center gap-2 shadow-xl backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>PRODUCTION READY</span>
              </span>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Stepped Editorial Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto mb-4 sm:mb-5"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            {/* Stepped Upper Tier */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="font-serif italic text-xl sm:text-3xl lg:text-4xl text-warm-cream font-normal">
                Building Systems
              </span>
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/30 px-3 py-0.5 sm:py-1 rounded-full uppercase inline-flex items-center gap-1.5 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
                AT THE INTERSECTION OF
              </span>
            </div>

            {/* Stepped Lower Tier with Elegant Accent Underline */}
            <div className="flex items-center justify-center">
              <span className="font-serif italic text-xl sm:text-3xl lg:text-4xl text-warm-white font-normal underline decoration-electric-orange/60 underline-offset-8">
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
          className="max-w-xl mx-auto mb-6 sm:mb-7"
        >
          <p className="font-sans text-xs sm:text-sm text-warm-cream/90 leading-relaxed">
            AI engineering, intelligent developer tools, and high-concurrency data systems. Built to solve real architectural bottlenecks.
          </p>
        </motion.div>

        {/* Action Row - Highly Visible with No Clipping */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
        >
          <Magnetic strength={0.3}>
            <a
              href="#expertise"
              onClick={() => sound.click()}
              className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider gradient-border-chromatic text-warm-white hover:text-white transition-all flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>EXPLORE EXPERTISE</span>
              <ArrowDown className="w-4 h-4 text-electric-orange" />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={() => sound.click()}
              className="px-7 sm:px-8 py-3 sm:py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider bg-white/[0.05] border border-white/10 hover:border-white/30 text-warm-white transition-all flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>LETS CONTACT</span>
              <ArrowUpRight className="w-4 h-4 text-warm-muted" />
            </a>
          </Magnetic>

          {/* Quick Pip Install Snippet */}
          <div className="inline-flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-charcoal-900/90 border border-white/15 text-xs font-mono shadow-xl backdrop-blur-md hover:border-electric-orange/40 transition-colors">
            <Terminal className="w-3.5 h-3.5 text-electric-orange" />
            <code className="text-warm-cream">pip install codegraph-mcp</code>
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
