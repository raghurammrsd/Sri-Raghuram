import React from 'react';
import { motion } from 'framer-motion';
import { STORY_SECTION } from '../../data/portfolioData';
import { ShieldCheck, Zap, GitBranch, Sparkles } from 'lucide-react';

export const Story: React.FC = () => {
  const pillarIcons = [ShieldCheck, Zap, GitBranch];

  const pillarStyles = [
    {
      border: 'hover:border-electric-orange/50',
      badge: 'text-electric-orange bg-electric-orange/10 border-electric-orange/30',
      icon: 'text-electric-orange',
      glow: 'hover:shadow-[0_0_30px_rgba(255,85,0,0.18)]',
      accentBar: 'bg-electric-orange',
    },
    {
      border: 'hover:border-cyan-400/50',
      badge: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
      icon: 'text-cyan-400',
      glow: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.18)]',
      accentBar: 'bg-cyan-400',
    },
    {
      border: 'hover:border-emerald-400/50',
      badge: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
      icon: 'text-emerald-400',
      glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.18)]',
      accentBar: 'bg-emerald-400',
    },
  ];

  const ticker = [
    { label: "DETERMINISTIC CODE INTELLIGENCE", color: "text-electric-orange" },
    { label: "MODEL CONTEXT PROTOCOL (MCP)", color: "text-cyan-400" },
    { label: "ZERO HALLUCINATIONS", color: "text-emerald-400" },
    { label: "LOCAL-FIRST AST CACHING", color: "text-amber-400" },
    { label: "ASYNCIO HIGH-THROUGHPUT PIPELINES", color: "text-purple-400" },
    { label: "FASTAPI & PYDANTIC V2 SCHEMAS", color: "text-rose-400" },
  ];

  return (
    <section
      id="story"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-6 sm:py-8 lg:py-10 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      {/* Background Subtle Ambient Aura */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-electric-glow rounded-full blur-[190px] pointer-events-none opacity-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Header with Solid Orange Banner Element */}
        <div className="pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded">
              [ 01 / 05 ]
            </span>
            <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
              // PHILOSOPHY & MANIFESTO
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight">
            <span className="text-warm-white">NOT JUST MODELS.</span>
            <span className="bg-electric-orange text-charcoal-950 px-3.5 py-0.5 rounded-sm inline-block shadow-xl">
              SYSTEMS THAT WORK.
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-warm-cream/90 max-w-3xl mt-2 leading-relaxed">
            {STORY_SECTION.narrativeText}
          </p>
        </div>

        {/* Multi-Colored Kinetic Marquee Ticker */}
        <div className="relative w-full overflow-hidden py-2.5 border-y border-white/[0.08] bg-charcoal-900/60 my-2">
          <div className="animate-marquee flex gap-8 items-center">
            {ticker.concat(ticker).map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0">
                <span className={`font-mono text-xs tracking-widest font-bold uppercase ${item.color}`}>
                  {item.label}
                </span>
                <span className="text-warm-dark text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Kinetic Floating Bento Cards (Zero bullet points!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-auto py-2">
          {STORY_SECTION.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            const style = pillarStyles[idx % pillarStyles.length];

            return (
              <motion.div
                key={pillar.number}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`p-6 sm:p-7 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] ${style.border} ${style.glow} backdrop-blur-xl transition-all duration-300 flex flex-col justify-between shadow-2xl relative overflow-hidden`}
              >
                {/* Glowing Top Laser Stripe */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${style.accentBar} opacity-80`} />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-[10px] tracking-widest font-black px-2.5 py-0.5 rounded border ${style.badge}`}>
                      PILLAR // 0{idx + 1}
                    </span>
                    <Icon className={`w-5 h-5 ${style.icon}`} />
                  </div>

                  <h3 className="font-syne text-xl sm:text-2xl font-black text-warm-white mb-2 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="font-sans text-warm-muted text-xs sm:text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] font-mono text-[11px] text-warm-dark flex items-center justify-between">
                  <span>GROUND TRUTH</span>
                  <span className={`${style.icon} font-bold`}>100% VERIFIED</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div className="flex items-center gap-2">
            <span className="text-electric-orange">●</span>
            <span className="text-warm-muted">ENGINEERING MANIFESTO · DETERMINISTIC CODE & DATA SYSTEMS</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">FRAMEWORK: GROUND-TRUTH FIRST</span>
        </div>
      </div>
    </section>
  );
};
