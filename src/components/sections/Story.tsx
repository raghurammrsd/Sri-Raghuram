import React from 'react';
import { motion } from 'framer-motion';
import { STORY_SECTION } from '../../data/portfolioData';
import { ShieldCheck, Zap, GitBranch, Terminal } from 'lucide-react';

export const Story: React.FC = () => {
  const pillarIcons = [ShieldCheck, Zap, GitBranch];

  const ticker = [
    "DETERMINISTIC CODE INTELLIGENCE",
    "MODEL CONTEXT PROTOCOL",
    "ZERO HALLUCINATIONS",
    "LOCAL-FIRST RUNTIMES",
    "ASYNCIO PIPELINES",
    "FASTAPI BACKENDS",
    "POSTGRESQL & SQLITE INDEXES",
  ];

  return (
    <section id="story" className="py-24 sm:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 01 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // PHILOSOPHY & STORY
          </span>
        </div>

        {/* Oversized Agency Headline */}
        <div className="max-w-5xl mb-12">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-[-0.04em] text-warm-white leading-[0.96] uppercase">
            Not just models.
            <br />
            <span className="text-electric-orange">Systems that work.</span>
          </h2>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 text-warm-muted text-base sm:text-xl font-normal leading-relaxed">
          <div className="lg:col-span-6 space-y-6">
            <p>
              The AI ecosystem is flooded with fragile prototypes: agents that endlessly loop through files, exhaust token limits, and hallucinate non-existent imports.
            </p>
            <p>
              My thesis is simple: <strong className="text-warm-white font-semibold">AI is only as reliable as its ground truth</strong>.
            </p>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <p>
              Instead of relying on probabilistic guessing for critical tasks, I build deterministic systems—leveraging compiler Abstract Syntax Trees, incremental SQLite indexing, and strict schema validation.
            </p>
            <p className="text-warm-white font-medium">
              The result: intelligent developer tools and backend applications that execute with surgical precision.
            </p>
          </div>
        </div>

        {/* Animated Marquee */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.08] bg-white/[0.01] mb-20">
          <div className="animate-marquee flex gap-10 items-center">
            {ticker.concat(ticker).map((item, idx) => (
              <div key={idx} className="flex items-center gap-10 shrink-0">
                <span className="font-mono text-xs sm:text-sm tracking-widest text-warm-white font-semibold uppercase">
                  {item}
                </span>
                <span className="text-electric-orange text-sm">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3 Engineering Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STORY_SECTION.pillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={pillar.number}
                className="group p-8 sm:p-10 rounded-2xl bg-charcoal-850/70 border border-white/[0.08] hover:border-electric-orange/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-electric-orange font-bold">
                      PILLAR // {pillar.number}
                    </span>
                    <Icon className="w-5 h-5 text-warm-muted group-hover:text-electric-orange transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-warm-white mb-4 group-hover:text-white transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-warm-muted text-sm sm:text-base leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] font-mono text-xs text-warm-dark flex items-center justify-between">
                  <span>SYSTEM METRIC</span>
                  <span className="text-electric-orange">VERIFIED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
