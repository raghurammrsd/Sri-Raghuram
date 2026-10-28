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
    <section className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 border-b border-[#e5d3af]/50 bg-transparent">
      {/* 3D Kinetic Neural Manifold / Topological Tensor Grid */}
      <HeroBackdrop3D />

      {/* Atmospheric Ambient Lighting: Enhanced Warm Brown at Edges, Soft Sky Blue in Center */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-[600px] h-[600px] bg-[#966b44]/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-[600px] h-[600px] bg-[#966b44]/20 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#7ba4c5]/15 rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center py-4 sm:py-6">
        {/* Availability Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white border-2 border-[#e5d3af] mb-6 sm:mb-8 shadow-sm relative overflow-hidden group hover:border-[#790d16] transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="font-mono text-xs text-black tracking-wider uppercase font-bold">
            {PERSONAL_INFO.status}
          </span>
        </motion.div>

        {/* Clean, Grounded Editorial Headline (Zero horizontal distortion, solid black + burgundy) */}
        <div className="mb-6 sm:mb-8 select-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[7.2rem] font-black tracking-tight uppercase leading-[0.92]">
              <span className="text-black drop-shadow-sm">FROM IDEA</span>
              <span className="block text-[#790d16] mt-1.5">TO IMPACT.</span>
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
          <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-tight mb-3">
            Building Systems at the Intersection of{' '}
            <span className="text-[#790d16] underline decoration-[#e5d3af] decoration-4 underline-offset-4">
              AI, Determinism & Scale
            </span>
          </p>
          <p className="font-sans text-sm sm:text-base text-[#222222] font-semibold max-w-xl mx-auto leading-relaxed">
            AI engineering, intelligent developer tools, and high-concurrency data systems. Built to solve real architectural bottlenecks.
          </p>
        </motion.div>

        {/* Action Row - Clean Palette Buttons & High Contrast Black Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-6 sm:mb-8"
        >
          {/* Primary CTA: Deep Burgundy with White Text */}
          <Magnetic strength={0.3}>
            <a
              href="#expertise"
              onClick={() => sound.click()}
              className="px-7 sm:px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black tracking-wider bg-[#790d16] text-[#ffffff] hover:bg-[#5c0910] transition-all flex items-center gap-2.5 shadow-[0_8px_24px_rgba(121,13,22,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>EXPLORE WORK</span>
              <ArrowDown className="w-4 h-4 text-[#ffffff] stroke-[2.5]" />
            </a>
          </Magnetic>

          {/* Secondary CTA: Soft Slate Blue with Solid Black Text */}
          <Magnetic strength={0.3}>
            <a
              href="#contact"
              onClick={() => sound.click()}
              className="px-7 sm:px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black tracking-wider bg-[#aec4d4] hover:bg-[#9bb6c8] text-black border-2 border-[#aec4d4] transition-all flex items-center gap-2 shadow-sm hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
            </a>
          </Magnetic>

          {/* Quick Pip Install Snippet: Pure White Card with Black Code */}
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white border-2 border-[#e5d3af] hover:border-[#790d16] text-xs font-mono shadow-sm transition-colors">
            <Terminal className="w-4 h-4 text-[#790d16]" />
            <code className="text-black font-bold">pip install codegraph-mcp</code>
            <button
              onClick={() => {
                sound.click();
                onCopyPip();
              }}
              className="p-1 rounded hover:bg-[#e5d3af]/40 text-black hover:text-[#790d16] transition-colors cursor-pointer"
              title="Copy pip install command"
            >
              {pipCopied ? <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" /> : <Copy className="w-4 h-4 text-[#790d16]" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar - Clean & Professional */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4 flex items-center justify-between font-mono text-xs text-[#333333] border-t-2 border-[#e5d3af] relative z-10 font-bold">
        <div className="flex items-center gap-2">
          <span className="text-black font-black">MOHAN SRI RAGHURAM</span>
          <span>·</span>
          <span>THE AI SIGNAL / ONE ATLAS</span>
          <span>·</span>
          <span>B.TECH CSE (AI)</span>
        </div>

        <div className="flex items-center gap-2 text-black hover:text-[#790d16] transition-colors">
          <span className="tracking-wider text-[11px] font-bold">SCROLL TO EXPLORE</span>
          <ArrowDown className="w-3.5 h-3.5 text-[#790d16] animate-bounce" />
        </div>
      </div>
    </section>
  );
};
