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
    <section className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-between py-10 sm:py-14 border-b border-white/[0.08] overflow-hidden bg-charcoal-950">
      {/* Background Subtle Striped Texture (from Image 2) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[repeating-linear-gradient(90deg,#fff,#fff_1px,transparent_1px,transparent_40px)]" />

      {/* Dual Chromatic Ambient Lighting: Blue on left, Red on right (from Image 2) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/[0.06] rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-red-500/[0.06] rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center">
        {/* Massive Headline: FROM CODE [Center Glow] TO IMPACT (Exact match to Image 2) */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-6 font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-black tracking-tight uppercase leading-none">
            <span className="text-warm-white">FROM</span>
            <span className="text-warm-dark">CODE</span>

            {/* Center Cybernetic Visual Cutout with Red & Blue rim-lights (matching Image 2) */}
            <div className="relative w-20 h-28 sm:w-28 sm:h-40 md:w-36 md:h-48 rounded-2xl overflow-hidden border border-white/20 shadow-2xl mx-2 sm:mx-4 flex items-center justify-center bg-charcoal-900 group">
              {/* Dual-color vertical rim-lights */}
              <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400 opacity-90 shadow-[0_0_15px_#00f0ff]" />
              <div className="absolute top-0 right-0 w-2 h-full bg-red-500 opacity-90 shadow-[0_0_15px_#ff2200]" />
              <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-electric-orange animate-spin">
                <Sparkles className="w-6 h-6" />
              </div>
            </div>

            <span className="text-warm-dark">TO</span>
            <span className="text-warm-white">IMPACT</span>
          </div>
        </div>

        {/* Editorial Subtitle (from Image 2) */}
        <div className="max-w-3xl mx-auto mb-4">
          <h2 className="font-serif italic text-2xl sm:text-4xl text-warm-cream font-normal leading-tight">
            Building Systems at the Intersection of AI, Determinism & Technology
          </h2>
        </div>

        {/* Body pitch */}
        <div className="max-w-xl mx-auto mb-10">
          <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
            AI engineering, intelligent developer tools, and high-concurrency data systems. Built to solve real production bottlenecks.
          </p>
        </div>

        {/* Center Pill Button with Dual Chromatic Border (from Image 2) */}
        <div className="flex justify-center mb-8">
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={() => sound.click()}
              className="px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider gradient-border-chromatic text-warm-white hover:text-white transition-all flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>LETS CONTACT</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </a>
          </Magnetic>
        </div>

        {/* Quick Pip Install Snippet */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-charcoal-900/90 border border-white/[0.08] text-xs font-mono">
          <Terminal className="w-3.5 h-3.5 text-electric-orange" />
          <code className="text-warm-cream">pip install codegraph-mcp</code>
          <button
            onClick={() => {
              sound.click();
              onCopyPip();
            }}
            className="p-1 rounded hover:bg-white/10 text-warm-muted hover:text-warm-white"
            title="Copy command"
          >
            {pipCopied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Bottom Bar with Rotating Circular Scroll Badge (from Image 2) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex items-center justify-between font-mono text-xs text-warm-muted border-t border-white/[0.06] relative z-10">
        <div>
          <span>MOHAN SRI RAGHURAM · THE AI SIGNAL / ONE ATLAS · B.TECH CSE (AI)</span>
        </div>

        {/* Rotating Circular Scroll Down Badge (Exact match to Image 2 bottom-right!) */}
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
