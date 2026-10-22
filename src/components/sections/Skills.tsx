import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Cpu, Server, Database, Wrench, Check } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Skills: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);

  const categoryIcons = [Cpu, Server, Database, Wrench];
  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  return (
    <section id="skills" className="py-24 sm:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 03 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // TECHNICAL MATRIX
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-4">
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] text-warm-white uppercase leading-[0.98]">
            Technical Arsenal.
          </h2>
          <p className="font-mono text-warm-muted text-sm sm:text-base mt-3">
            Grounded in systems engineering, deterministic data structures, and production delivery.
          </p>
        </div>

        {/* Interactive Category Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const isSelected = activeCategoryIndex === idx;

            return (
              <button
                key={cat.title}
                onClick={() => {
                  sound.click();
                  setActiveCategoryIndex(idx);
                }}
                className={`p-6 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-charcoal-800 border-electric-orange text-warm-white shadow-xl'
                    : 'bg-charcoal-850/60 border-white/[0.06] text-warm-muted hover:border-white/20 hover:text-warm-white'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-electric-orange font-bold">
                    0{idx + 1}
                  </span>
                  <Icon className={`w-5 h-5 ${isSelected ? 'text-electric-orange' : 'text-warm-dark'}`} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-warm-white mb-1">{cat.title}</h4>
                  <p className="font-mono text-[11px] text-warm-muted line-clamp-2">{cat.description}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Category Skills Grid */}
        <div className="p-8 sm:p-12 rounded-3xl bg-charcoal-850/80 border border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/[0.06]">
            <div>
              <span className="font-mono text-xs text-electric-orange font-bold uppercase tracking-wider block mb-1">
                // ACTIVE DOMAIN
              </span>
              <h3 className="text-2xl font-black text-warm-white">
                {activeCategory.title}
              </h3>
            </div>
            <p className="font-mono text-xs text-warm-muted max-w-md">
              {activeCategory.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className={`p-4 rounded-xl border transition-all flex items-center justify-between ${
                  skill.highlight
                    ? 'bg-electric-orange/[0.06] border-electric-orange/30 text-warm-white'
                    : 'bg-charcoal-950/60 border-white/[0.05] text-warm-cream hover:border-white/15'
                }`}
              >
                <span className="font-mono text-xs sm:text-sm font-semibold">
                  {skill.name}
                </span>
                {skill.highlight && (
                  <span className="font-mono text-[9px] text-electric-orange bg-electric-orange/15 px-1.5 py-0.5 rounded font-bold">
                    CORE
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
