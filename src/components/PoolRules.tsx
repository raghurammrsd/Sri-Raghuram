import React from 'react';
import { POOL_RULES } from '../data/portfolioData';

export const PoolRules: React.FC = () => {
  return (
    <section id="rules" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
            [ 07 / 09 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
            // POOL RULES: THE MANIFESTO
          </span>
        </div>

        {/* Honey Bold Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            Pool Rules.
          </h2>
        </div>

        {/* Honey Intro Story */}
        <div className="max-w-3xl text-honey-muted text-base sm:text-lg font-normal leading-relaxed mb-16 space-y-3">
          <p>
            At every public pool, you can find a sun-faded, water-logged sign on the wall displaying a set of <strong className="text-honey-bone">"Pool Rules"</strong>. No diving. No running. No open wounds. Etcetera. These rules exist to keep things from getting out of hand.
          </p>
          <p>
            Here are my 14 non-negotiable Pool Rules for engineering deterministic AI and distributed systems that outlast the hype cycle.
          </p>
        </div>

        {/* Rules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {POOL_RULES.map((rule) => (
            <div
              key={rule.id}
              className="group p-6 sm:p-7 rounded-2xl bg-[#111114] border border-white/[0.08] hover:border-honey-accent/40 hover:bg-[#151519] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-honey-accent">
                    {rule.number}.
                  </span>
                  <span className="font-mono text-[10px] text-honey-darkMuted group-hover:text-honey-muted transition-colors">
                    RULE // {rule.number}
                  </span>
                </div>

                <h3 className="font-mono text-sm sm:text-base font-black tracking-tight text-honey-bone uppercase leading-snug mb-3 group-hover:text-white transition-colors">
                  {rule.title}
                </h3>
              </div>

              {rule.description && (
                <p className="text-xs sm:text-sm text-honey-muted leading-relaxed font-normal pt-3 border-t border-white/[0.06] group-hover:text-honey-bone/80 transition-colors">
                  {rule.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
