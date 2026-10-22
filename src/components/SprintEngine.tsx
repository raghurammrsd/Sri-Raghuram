import React, { useState } from 'react';
import { SPRINT_PHASES } from '../data/portfolioData';
import { Compass, Code2, ShieldAlert, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

export const SprintEngine: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const activePhase = SPRINT_PHASES[activePhaseIndex];

  const icons = [Compass, Code2, ShieldAlert, Rocket];
  const CurrentIcon = icons[activePhaseIndex];

  return (
    <section id="sprint" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
            [ 06 / 09 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
            // THE SPRINT ENGINE
          </span>
        </div>

        {/* Honey Bold Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            How We Sprint.
          </h2>
        </div>

        <p className="max-w-3xl text-honey-muted text-base sm:text-xl font-normal leading-relaxed mb-14">
          We work in disciplined two-week execution cycles. This allows us to move at the pace of a jackrabbit in Moon Boots, while engineering systems with surgical precision.
        </p>

        {/* 4 Phase Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {SPRINT_PHASES.map((phase, idx) => {
            const PhaseIcon = icons[idx];
            const isSelected = activePhaseIndex === idx;

            return (
              <button
                key={phase.number}
                onClick={() => setActivePhaseIndex(idx)}
                className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white/[0.08] border-honey-bone text-white shadow-xl'
                    : 'bg-[#111114] border-white/[0.06] text-honey-muted hover:border-white/20 hover:text-honey-bone'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`font-mono text-xs font-semibold px-2 py-0.5 rounded ${
                      isSelected ? 'bg-honey-accent text-white' : 'bg-white/5 text-honey-muted'
                    }`}
                  >
                    PHASE {phase.number}
                  </span>
                  <PhaseIcon className={`w-4 h-4 ${isSelected ? 'text-honey-accent' : 'text-honey-darkMuted'}`} />
                </div>
                <div>
                  <h4 className="font-bold text-base text-honey-bone mb-1">{phase.title}</h4>
                  <p className="font-mono text-[11px] text-honey-muted">{phase.subtitle}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Deep Dive Preview Card */}
        <div className="rounded-3xl bg-[#111114] border border-white/[0.1] p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-widest text-honey-accent font-semibold">
                  // CURRENTLY INSPECTING PHASE {activePhase.number}
                </span>
                <span className="font-mono text-[11px] text-honey-muted">
                  [14-DAY CADENCE]
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-honey-bone mb-4">
                {activePhase.title}: {activePhase.subtitle}
              </h3>

              <p className="text-honey-bone/85 text-base sm:text-lg leading-relaxed mb-8">
                {activePhase.description}
              </p>

              {/* Artifacts Checklist */}
              <div>
                <span className="font-mono text-xs text-honey-muted uppercase tracking-wider block mb-3">
                  DELIVERABLE ARTIFACTS:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activePhase.artifacts.map((art, i) => (
                    <div
                      key={i}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span className="font-mono text-xs text-honey-bone">{art}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual Cadence Stepper */}
            <div className="lg:w-80 shrink-0 p-6 rounded-2xl bg-[#09090b] border border-white/[0.08] flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/[0.08]">
                <span className="font-mono text-xs text-honey-muted uppercase">SPRINT PROGRESS</span>
                <span className="font-mono text-xs text-honey-accent font-bold">
                  {((activePhaseIndex + 1) / 4) * 100}%
                </span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                {SPRINT_PHASES.map((p, idx) => (
                  <div
                    key={p.number}
                    className={`flex items-center justify-between py-1.5 px-2 rounded cursor-pointer transition-colors ${
                      idx === activePhaseIndex
                        ? 'bg-white/10 text-white font-semibold'
                        : idx < activePhaseIndex
                        ? 'text-emerald-400/80 line-through'
                        : 'text-honey-darkMuted'
                    }`}
                    onClick={() => setActivePhaseIndex(idx)}
                  >
                    <span>{p.number}. {p.title}</span>
                    <span>{idx <= activePhaseIndex ? '✓' : '—'}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-white/[0.08] text-center">
                <span className="font-mono text-[10px] text-honey-muted uppercase tracking-wider">
                  TWO-WEEK GUARANTEED SHIP CYCLE
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
