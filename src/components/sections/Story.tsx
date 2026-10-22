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
      glow: 'group-hover:shadow-[0_0_25px_rgba(255,85,0,0.15)]',
    },
    {
      border: 'hover:border-cyan-400/50',
      badge: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
      icon: 'text-cyan-400',
      glow: 'group-hover:shadow-[0_0_25px_rgba(0,240,255,0.15)]',
    },
    {
      border: 'hover:border-emerald-400/50',
      badge: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/30',
      icon: 'text-emerald-400',
      glow: 'group-hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]',
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
    <section id="story" className="scroll-mt-20 py-16 sm:py-24 border-b border-white/[0.08] relative bg-charcoal-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 01 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // PHILOSOPHY & MANIFESTO
          </span>
        </div>

        {/* Oversized Headline with Radiant Gradient */}
        <div className="max-w-4xl mb-8">
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-warm-white uppercase leading-[0.96]">
            Not just models.
            <br />
            <span className="bg-gradient-to-r from-electric-orange via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Systems that work.
            </span>
          </h2>
        </div>

        {/* Narrative Statement */}
        <div className="max-w-3xl mb-12">
          <p className="font-sans text-base sm:text-xl text-warm-cream leading-relaxed font-normal">
            {STORY_SECTION.narrativeText}
          </p>
        </div>

        {/* Multi-Colored Animated Marquee */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.08] bg-white/[0.015] mb-14">
          <div className="animate-marquee flex gap-8 items-center">
            {ticker.concat(ticker).map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0">
                <span className={`font-mono text-xs sm:text-sm tracking-widest font-bold uppercase ${item.color}`}>
                  {item.label}
                </span>
                <span className="text-warm-dark text-xs">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Moving Engineering Pillars with Colored Accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STORY_SECTION.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            const style = pillarStyles[idx % pillarStyles.length];

            return (
              <div
                key={pillar.number}
                className={`group p-6 sm:p-8 rounded-2xl bg-charcoal-850/90 border border-white/[0.08] ${style.border} ${style.glow} transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`font-mono text-xs tracking-widest font-black px-2.5 py-1 rounded border ${style.badge}`}>
                      PILLAR // {pillar.number}
                    </span>
                    <Icon className={`w-5 h-5 ${style.icon}`} />
                  </div>
                  <h3 className="font-syne text-xl sm:text-2xl font-extrabold text-warm-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-warm-muted text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] font-mono text-xs text-warm-dark flex items-center justify-between">
                  <span>GROUND TRUTH</span>
                  <span className={style.icon}>100% VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
