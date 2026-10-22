import React from 'react';
import { INTERNSHIP_PROJECTS } from '../../data/portfolioData';
import { ExternalLink, Database, Network, Cpu, ArrowUpRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const InternshipHighlights: React.FC = () => {
  const icons = [Database, Network, Cpu];

  return (
    <section id="internship" className="py-24 sm:py-36 border-b border-white/[0.08] relative bg-charcoal-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 02 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // INTERNSHIP & PRODUCTION SYSTEMS
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-warm-white uppercase leading-[0.96]">
            High-concurrency systems
            <br />
            <span className="text-electric-orange">built in production.</span>
          </h2>
        </div>

        <p className="max-w-3xl font-sans text-warm-muted text-base sm:text-xl font-normal leading-relaxed mb-16">
          Verified production engineering from my internship at <strong className="text-warm-white">The AI Signal / One Atlas</strong> and my founding work at <strong className="text-warm-white">Frontier Atlas</strong>. Ingesting from 600+ technical sources, orchestrating multi-LLM workflows, and structuring dense knowledge graphs.
        </p>

        {/* Deep Dive Internship Systems Grid */}
        <div className="space-y-12">
          {INTERNSHIP_PROJECTS.map((system, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={system.id}
                className="p-8 sm:p-12 rounded-3xl bg-charcoal-850/80 border border-white/[0.09] hover:border-electric-orange/40 transition-all duration-300 relative overflow-hidden shadow-2xl"
              >
                {/* Header row */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-8">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="font-mono text-xs tracking-widest text-electric-orange font-bold uppercase">
                        {system.badge}
                      </span>
                      <span className="font-mono text-xs text-warm-muted px-2 py-0.5 rounded bg-white/[0.04] border border-white/10">
                        {system.company}
                      </span>
                      <span className="font-mono text-xs text-warm-dark">
                        {system.period}
                      </span>
                    </div>

                    <h3 className="font-syne text-2xl sm:text-4xl font-extrabold text-warm-white">
                      {system.systemName}
                    </h3>
                  </div>

                  {system.liveUrls && system.liveUrls.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {system.liveUrls.map((link, lIdx) => (
                        <Magnetic key={lIdx} strength={0.25}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => sound.click()}
                            className="px-5 py-2.5 rounded-full bg-electric-orange text-white font-mono text-xs font-bold tracking-wider hover:bg-electric-light transition-all flex items-center gap-2 shadow-lg"
                            data-cursor-text="VISIT"
                          >
                            <span>{link.label}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        </Magnetic>
                      ))}
                    </div>
                  )}
                </div>

                {/* Overview narrative */}
                <p className="font-sans text-warm-cream text-base sm:text-lg leading-relaxed mb-8 max-w-4xl">
                  {system.overview}
                </p>

                {/* Architectural Highlights & Impact in 2 Columns */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
                  {/* Innovations */}
                  <div className="lg:col-span-7 space-y-3">
                    <span className="font-mono text-xs text-warm-muted uppercase tracking-wider block font-bold mb-2">
                      KEY ARCHITECTURAL INNOVATIONS:
                    </span>
                    {system.keyInnovations.map((inn, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm sm:text-base text-warm-white/90">
                        <span className="text-electric-orange mt-1">✦</span>
                        <span>{inn}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Impact Metrics */}
                  <div className="lg:col-span-5 p-6 rounded-2xl bg-charcoal-950/80 border border-white/[0.06] flex flex-col justify-between">
                    <div>
                      <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block font-bold mb-4 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span>VERIFIED PRODUCTION IMPACT</span>
                      </span>
                      <div className="space-y-3">
                        {system.verifiedImpact.map((impact, impIdx) => (
                          <div key={impIdx} className="flex items-center gap-2.5 text-xs sm:text-sm font-mono text-warm-cream">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>{impact}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 mt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                      {system.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-warm-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
