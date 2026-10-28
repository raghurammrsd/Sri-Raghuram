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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center py-4 sm:py-6">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 mb-6 sm:mb-8 shadow-sm backdrop-blur-md relative overflow-hidden group hover:border-electric-orange/40 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="font-mono text-[11px] text-warm-cream tracking-wider uppercase font-medium">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Clean, Grounded Editorial Headline (Zero horizontal distortion, zero skew) */}
        <div className="mb-6 sm:mb-8 select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-tight uppercase leading-[0.92] text-warm-white">
              <span>FROM IDEA</span>
              <span className="block text-electric-orange mt-1">TO IMPACT.</span>
            </h1>
          </motion.div>
        </div>

        {/* Professional Systems Engineering Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto mb-6 sm:mb-8 text-center"
        >
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-bold text-warm-white tracking-tight mb-3">
            Building Systems at the Intersection of{' '}
            <span className="text-electric-orange border-b-2 border-electric-orange/50 pb-0.5">
              AI, Determinism & Scale
            </span>
          </p>
          <p className="font-sans text-xs sm:text-sm text-warm-muted max-w-xl mx-auto leading-relaxed">
            AI engineering, intelligent developer tools, and high-concurrency data systems. Built to solve real architectural bottlenecks.
          </p>
        </motion.div>

        {/* Action Row - Clean Glassmorphism & High Contrast */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          <Magnetic strength={0.3}>
            <a
              href="#expertise"
              onClick={() => sound.click()}
              className="px-7 sm:px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-2xl border border-white/25 hover:border-electric-orange/60 text-warm-white transition-all flex items-center gap-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,85,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4 text-electric-orange" />
            </a>
          </Magnetic>

          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={() => sound.click()}
              className="px-7 sm:px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider bg-white/[0.04] hover:bg-white/[0.09] backdrop-blur-2xl border border-white/15 hover:border-white/35 text-warm-white transition-all flex items-center gap-2 shadow-[0_8px_24px_rgba(0,0,0,0.35),inset_0_1px_1px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 text-warm-muted" />
            </a>
          </Magnetic>

          {/* Quick Pip Install Snippet (Glassomorphic) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-charcoal-900/60 backdrop-blur-2xl border border-white/15 hover:border-electric-orange/40 text-xs font-mono shadow-[0_8px_24px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-colors">
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

      {/* Bottom Bar - Clean & Professional */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex items-center justify-between font-mono text-xs text-warm-muted border-t border-white/[0.08] relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-warm-white font-medium">MOHAN SRI RAGHURAM</span>
          <span>·</span>
          <span>THE AI SIGNAL / ONE ATLAS</span>
          <span>·</span>
          <span>B.TECH CSE (AI)</span>
        </div>

        <div className="flex items-center gap-2 text-warm-muted hover:text-electric-orange transition-colors">
          <span className="tracking-wider text-[11px]">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-electric-orange animate-bounce" />
        </div>
      </div>
    </section>
  );
};
