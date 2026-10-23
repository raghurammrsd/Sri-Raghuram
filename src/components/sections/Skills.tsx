import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Cpu, Server, Database, Wrench } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [Cpu, Server, Database, Wrench];
  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section
      id="skills"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-8 sm:py-12 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pb-4 border-b border-white/[0.08]"
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded">
              04 · TECHNICAL ARSENAL
            </span>
            <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
              PRODUCTION STACK & RUNTIMES
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
            <span className="text-warm-white">TECHNICAL ARSENAL.</span>
            <span
              style={{ backgroundColor: '#ff5500', color: '#000000' }}
              className="px-4 py-0.5 rounded-sm inline-block font-black shadow-xl"
            >
              ZERO FLUFF. REAL CODE.
            </span>
          </div>

          <p className="font-sans text-xs sm:text-sm text-warm-muted mt-2 max-w-xl">
            Grounded in systems engineering, deterministic data structures, and production delivery.
          </p>
        </motion.div>

        {/* 4 Clean Monochrome Domain Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-auto py-4">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = activeCategoryIndex === idx;

            return (
              <motion.button
                key={cat.title}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  sound.click();
                  setActiveCategoryIndex(idx);
                }}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-charcoal-900 border-electric-orange/60 shadow-xl'
                    : 'bg-charcoal-900/40 border-white/[0.08] hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs font-bold text-warm-dark">
                    0{idx + 1}
                  </span>
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-electric-orange' : 'text-warm-muted'}`} />
                </div>
                <div>
                  <h4 className="font-syne font-bold text-base text-warm-white mb-1">{cat.title}</h4>
                  <p className="font-sans text-xs text-warm-muted line-clamp-2 leading-relaxed">{cat.description}</p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Domain Skills Grid */}
        <div className="p-6 sm:p-8 rounded-2xl bg-charcoal-900/60 border border-white/[0.08] backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 pb-4 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-[10px] text-electric-orange font-bold uppercase tracking-wider block mb-1">
                ACTIVE DOMAIN
              </span>
              <h3 className="font-syne text-xl sm:text-2xl font-black text-electric-orange">
                {activeCategory.title}
              </h3>
            </div>
            <p className="font-sans text-xs text-warm-muted max-w-md">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {activeCategory.skills.map((skill) => (
              <motion.div
                key={skill.name}
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  skill.highlight
                    ? 'bg-white/[0.06] border-electric-orange/40 text-warm-white shadow-md'
                    : 'bg-charcoal-950/70 border-white/[0.06] text-warm-cream hover:border-white/15'
                }`}
              >
                <span className="font-mono text-xs font-semibold truncate mr-2">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="font-mono text-[9px] px-2 py-0.5 rounded font-black tracking-wide bg-electric-orange/15 text-electric-orange border border-electric-orange/30 shrink-0">
                    CORE
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div className="flex items-center gap-2">
            <span className="text-electric-orange">●</span>
            <span className="text-warm-muted">NO HALLUCINATIONS · STRICT SCHEMA CONTRACTS · HIGH-THROUGHPUT RUNTIMES</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">STACK MATRIX · VERIFIED 2026</span>
        </div>
      </div>
    </section>
  );
};
