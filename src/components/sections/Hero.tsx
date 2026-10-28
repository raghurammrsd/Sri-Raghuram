import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowDown, ArrowUpRight, Terminal, Copy, Check } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

interface HeroProps {
  onCopyPip: () => void;
  pipCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPip, pipCopied }) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll tracking: components move smoothly at layered speeds while scrolling
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const badgeY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const headlineScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const buttonsY = useTransform(scrollYProgress, [0, 1], [0, 70]);
  const buttonsOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 border-b-2 border-[#e5d3af]/60 bg-transparent overflow-hidden"
    >
      {/* Clean atmospheric depth */}
      <div className="absolute top-1/2 -left-12 -translate-y-1/2 w-[500px] h-[500px] bg-[#966b44]/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 w-[500px] h-[500px] bg-[#966b44]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto text-center py-2 sm:py-4">
        {/* Availability Status Badge with Parallax Drift */}
        <motion.div
          style={{ y: badgeY }}
          initial={{ opacity: 0, y: -15, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border-2 border-[#e5d3af] mb-5 sm:mb-7 shadow-xs group hover:border-[#790d16] transition-all cursor-default"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span className="font-mono text-[11px] text-black tracking-wider uppercase font-extrabold">
            AVAILABLE FOR MISSIONS
          </span>
          <span className="text-[#c4a47c] font-black">·</span>
          <span className="font-mono text-[11px] text-[#790d16] tracking-wider uppercase font-black">
            AI SYSTEMS ARCHITECT
          </span>
        </motion.div>

        {/* Dynamic Architectural Editorial Headline with Layered Parallax Motion */}
        <div className="mb-5 sm:mb-7 select-none">
          <motion.div
            style={{
              y: headlineY,
              scale: headlineScale,
              opacity: headlineOpacity,
            }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center justify-center text-center"
          >
            <h1 className="font-syne text-5xl sm:text-7xl md:text-8xl lg:text-[7.4rem] font-black tracking-tight uppercase leading-[0.91]">
              <span className="text-black drop-shadow-xs block">FROM IDEA</span>
              <span className="inline-block relative text-[#790d16] mt-1 sm:mt-2">
                TO IMPACT.
                {/* Precision Editorial Accent Rail */}
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
                  className="absolute -bottom-1 sm:-bottom-2 left-0 h-1 sm:h-1.5 bg-gradient-to-r from-[#790d16] via-[#c4a47c] to-transparent rounded-full"
                />
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Sophisticated Architectural Philosophy Lockup with Scroll Motion */}
        <motion.div
          style={{
            y: subtitleY,
            opacity: subtitleOpacity,
          }}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto mb-6 sm:mb-8 text-center"
        >
          {/* Typographic Tagline with Capsule Accents */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-2.5 font-syne text-lg sm:text-2xl font-black text-black tracking-tight">
            <span>Building Systems at the Intersection of</span>
            <div className="inline-flex items-center gap-1.5">
              <span className="px-2.5 py-0.5 rounded-lg bg-[#790d16]/10 border border-[#790d16]/30 text-[#790d16] font-mono text-xs sm:text-sm font-extrabold shadow-xs">
                AI
              </span>
              <span className="text-[#c4a47c] font-black">·</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-[#8da8be]/20 border border-[#8da8be]/40 text-black font-mono text-xs sm:text-sm font-extrabold shadow-xs">
                DETERMINISM
              </span>
              <span className="text-[#c4a47c] font-black">·</span>
              <span className="px-2.5 py-0.5 rounded-lg bg-[#e5d3af]/40 border border-[#e5d3af] text-black font-mono text-xs sm:text-sm font-extrabold shadow-xs">
                SCALE
              </span>
            </div>
          </div>

          <p className="font-sans text-xs sm:text-sm text-[#222222] font-semibold max-w-xl mx-auto leading-relaxed">
            Practical AI engineering, deterministic AST developer tools, and high-concurrency ingestion pipelines. Built for zero runtime drift.
          </p>
        </motion.div>

        {/* Action Row with Smooth Parallax Float */}
        <motion.div
          style={{
            y: buttonsY,
            opacity: buttonsOpacity,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
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
              className="px-7 sm:px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black tracking-wider bg-[#aec4d4] hover:bg-[#9bb6c8] text-black border-2 border-[#aec4d4] transition-all flex items-center gap-2 shadow-xs hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4 text-black stroke-[2.5]" />
            </a>
          </Magnetic>

          {/* Quick Pip Install Snippet: Frosted Glass Capsule */}
          <div className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/80 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] text-xs font-mono shadow-xs transition-colors">
            <Terminal className="w-4 h-4 text-[#790d16]" />
            <code className="text-black font-extrabold">pip install codegraph-engine</code>
            <button
              onClick={() => {
                sound.click();
                onCopyPip();
              }}
              className="p-1 rounded-md hover:bg-[#e5d3af]/40 text-black hover:text-[#790d16] transition-colors cursor-pointer"
              title="Copy pip install command"
            >
              {pipCopied ? <Check className="w-4 h-4 text-emerald-600 stroke-[2.5]" /> : <Copy className="w-4 h-4 text-[#790d16]" />}
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar - Clean & Professional */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-3 flex items-center justify-between font-mono text-xs text-[#333333] border-t-2 border-[#e5d3af] relative z-10 font-bold">
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
