import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Cpu, Server, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [Cpu, Server, Database, Wrench];
  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  const categoryThemes = [
    {
      border: 'border-electric-orange/70 shadow-[0_0_25px_rgba(255,85,0,0.2)]',
      pill: 'bg-electric-orange/15 text-electric-orange border-electric-orange/30',
      text: 'text-electric-orange',
      badge: 'bg-electric-orange/20 text-electric-orange border-electric-orange/30',
      activeTabBorder: 'border-electric-orange/80',
    },
    {
      border: 'border-cyan-400/70 shadow-[0_0_25px_rgba(0,240,255,0.2)]',
      pill: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
      text: 'text-cyan-400',
      badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      activeTabBorder: 'border-cyan-400/80',
    },
    {
      border: 'border-emerald-400/70 shadow-[0_0_25px_rgba(16,185,129,0.2)]',
      pill: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      text: 'text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      activeTabBorder: 'border-emerald-400/80',
    },
    {
      border: 'border-purple-400/70 shadow-[0_0_25px_rgba(168,85,247,0.2)]',
      pill: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      text: 'text-purple-400',
      badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      activeTabBorder: 'border-purple-400/80',
    },
  ];

  const currentTheme = categoryThemes[activeCategoryIndex];

  return (
    <section
      id="skills"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-6 sm:py-8 lg:py-10 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      {/* Background Ambient Aura */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-purple-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Header with Solid Orange Banner (Exact match to User's Screenshot!) */}
        <div className="pb-3 border-b border-white/[0.08]">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[11px] font-bold tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/25 px-2.5 py-0.5 rounded">
              [ 04 / 05 ]
            </span>
            <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
              // TECHNICAL MATRIX & PRODUCTION STACK
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight">
            <span className="text-warm-white">TECHNICAL ARSENAL.</span>
            <span className="bg-electric-orange text-charcoal-950 px-3.5 py-0.5 rounded-sm inline-block shadow-xl">
              ZERO FLUFF. REAL CODE.
            </span>
          </div>

          <p className="font-sans text-warm-muted text-xs sm:text-sm mt-1.5">
            Grounded in systems engineering, deterministic data structures, and production delivery.
          </p>
        </div>

        {/* 4 Interactive Domain Selectors (Exact match to User's Screenshot!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 my-auto py-2">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = activeCategoryIndex === idx;
            const theme = categoryThemes[idx];

            return (
              <motion.button
                key={cat.title}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  sound.click();
                  setActiveCategoryIndex(idx);
                }}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? `bg-charcoal-850/90 ${theme.border} text-warm-white`
                    : 'bg-charcoal-900/70 border-white/[0.08] text-warm-muted hover:border-white/20 hover:text-warm-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className={`font-mono text-[10px] font-black px-2 py-0.5 rounded border ${theme.pill}`}>
                    DOMAIN 0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? theme.text : 'text-warm-dark'}`} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-base sm:text-lg text-warm-white mb-1">{cat.title}</h4>
                  <p className="font-sans text-xs text-warm-muted line-clamp-2 leading-relaxed">{cat.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Domain Skills Matrix: Compact & Fits Screen Height (Zero bullet points!) */}
        <div className="p-5 sm:p-6 rounded-2xl bg-charcoal-900/80 border border-white/[0.09] backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-white/[0.08]">
            <div className="flex items-center gap-2">
              <span className={`font-mono text-xs font-black uppercase ${currentTheme.text}`}>
                // ACTIVE DOMAIN:
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-black text-warm-white">
                {activeCategory.title}
              </h3>
            </div>
            <p className="font-sans text-xs text-warm-muted max-w-md">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {activeCategory.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                  skill.highlight
                    ? `bg-white/[0.05] border-white/20 text-warm-white shadow-md`
                    : 'bg-charcoal-950/70 border-white/[0.06] text-warm-cream hover:border-white/15'
                }`}
              >
                <span className="font-mono text-xs font-semibold truncate mr-1.5">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className={`font-mono text-[9px] px-1.5 py-0.5 rounded font-black tracking-wide shrink-0 ${currentTheme.badge}`}>
                    CORE
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div className="flex items-center gap-2">
            <span className="text-purple-400">●</span>
            <span className="text-warm-muted">NO HALLUCINATIONS · STRICT SCHEMA CONTRACTS · HIGH-THROUGHPUT RUNTIMES</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">STACK MATRIX: 2026 VERIFIED</span>
        </div>
      </div>
    </section>
  );
};
