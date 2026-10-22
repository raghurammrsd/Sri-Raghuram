import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Cpu, Server, Database, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [Cpu, Server, Database, Wrench];
  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  const categoryColorThemes = [
    {
      activeBorder: 'border-electric-orange/70 shadow-[0_0_25px_rgba(255,85,0,0.2)]',
      pill: 'bg-electric-orange/15 text-electric-orange border-electric-orange/30',
      iconColor: 'text-electric-orange',
      badge: 'bg-electric-orange/20 text-electric-orange border-electric-orange/30',
      accentGlow: 'from-orange-500/20 via-amber-500/10 to-transparent',
    },
    {
      activeBorder: 'border-cyan-400/70 shadow-[0_0_25px_rgba(0,240,255,0.2)]',
      pill: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30',
      iconColor: 'text-cyan-400',
      badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      accentGlow: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    },
    {
      activeBorder: 'border-emerald-400/70 shadow-[0_0_25px_rgba(16,185,129,0.2)]',
      pill: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
      iconColor: 'text-emerald-400',
      badge: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      accentGlow: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    },
    {
      activeBorder: 'border-purple-400/70 shadow-[0_0_25px_rgba(168,85,247,0.2)]',
      pill: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
      iconColor: 'text-purple-400',
      badge: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      accentGlow: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    },
  ];

  const currentTheme = categoryColorThemes[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 sm:py-36 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[190px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded">
            [ 04 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // TECHNICAL MATRIX & PRODUCTION STACK
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-4">
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-warm-white uppercase leading-[0.96]">
            Technical Arsenal.
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-electric-orange bg-clip-text text-transparent">
              Zero fluff. Real code.
            </span>
          </h2>
          <p className="font-sans text-warm-muted text-base sm:text-lg mt-3">
            Grounded in systems engineering, deterministic data structures, and production delivery.
          </p>
        </div>

        {/* Moving Interactive Domain Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = activeCategoryIndex === idx;
            const theme = categoryColorThemes[idx];

            return (
              <motion.button
                key={cat.title}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  sound.click();
                  setActiveCategoryIndex(idx);
                }}
                className={`p-6 sm:p-7 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? `bg-charcoal-800 ${theme.activeBorder} text-warm-white`
                    : 'bg-charcoal-850/70 border-white/[0.08] text-warm-muted hover:border-white/25 hover:text-warm-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`font-mono text-xs font-black px-2 py-0.5 rounded border ${theme.pill}`}>
                    DOMAIN 0{idx + 1}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? theme.iconColor : 'text-warm-dark'}`} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-lg text-warm-white mb-1.5">{cat.title}</h4>
                  <p className="font-sans text-xs text-warm-muted line-clamp-2">{cat.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Domain Skills Grid with Animated Cards */}
        <div className={`p-8 sm:p-12 rounded-3xl bg-charcoal-850/90 border border-white/[0.1] relative overflow-hidden shadow-2xl`}>
          {/* Subtle gradient glow inside card */}
          <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl ${currentTheme.accentGlow} rounded-full blur-[100px] pointer-events-none`} />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.08] relative z-10">
            <div>
              <span className={`font-mono text-xs font-black uppercase tracking-wider block mb-1 ${currentTheme.iconColor}`}>
                // ACTIVE DOMAIN
              </span>
              <h3 className="font-syne text-2xl sm:text-3xl font-black text-warm-white">
                {activeCategory.title}
              </h3>
            </div>
            <p className="font-sans text-sm text-warm-muted max-w-md">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 relative z-10">
            {activeCategory.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                  skill.highlight
                    ? `bg-white/[0.04] border-white/20 text-warm-white shadow-md`
                    : 'bg-charcoal-950/70 border-white/[0.06] text-warm-cream hover:border-white/15'
                }`}
              >
                <span className="font-mono text-xs sm:text-sm font-semibold">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className={`font-mono text-[9px] px-2 py-0.5 rounded font-black tracking-wide ${currentTheme.badge}`}>
                    CORE
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
