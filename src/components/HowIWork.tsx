import React from 'react';
import { HOW_I_WORK_STEPS } from '../data/portfolioData';
import { Target, Timer, ShieldCheck } from 'lucide-react';

export const HowIWork: React.FC = () => {
  const stepIcons = [Target, Timer, ShieldCheck];

  return (
    <section id="how-i-work" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
            [ 03 / 09 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
            // HOW I WORK
          </span>
        </div>

        {/* Honey Bold Headline */}
        <div className="max-w-4xl mb-4">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            It’s not black magic.
          </h2>
          <p className="font-mono text-honey-muted text-sm sm:text-lg mt-2">
            (The methodology is as simple as 1… 2… 3…)
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
          {HOW_I_WORK_STEPS.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <div
                key={step.number}
                className="group p-8 sm:p-10 rounded-2xl bg-[#111114] border border-white/[0.08] hover:border-white/25 transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
              >
                {/* Background Number Watermark */}
                <span className="absolute -top-4 -right-2 font-mono text-7xl sm:text-8xl font-black text-white/[0.02] group-hover:text-honey-accent/[0.04] transition-colors select-none pointer-events-none">
                  {step.number}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-xs tracking-widest text-honey-accent font-semibold px-2.5 py-1 rounded bg-honey-accent/10 border border-honey-accent/20">
                      STEP {step.number}
                    </span>
                    <Icon className="w-5 h-5 text-honey-muted group-hover:text-honey-bone transition-colors" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-honey-bone mb-3 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  <p className="font-mono text-xs text-honey-accent/90 mb-4 font-medium tracking-wide">
                    {step.subtitle}
                  </p>

                  <p className="text-honey-muted text-sm sm:text-base leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-honey-darkMuted group-hover:text-honey-muted transition-colors">
                  <span>PHASE {step.number} OF 03</span>
                  <span className="text-honey-accent">→</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
