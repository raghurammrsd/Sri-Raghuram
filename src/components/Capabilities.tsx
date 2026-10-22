import React from 'react';
import { CAPABILITIES } from '../data/portfolioData';
import { Sparkles, ArrowRight, Binary, Network, Database, Cpu } from 'lucide-react';

export const Capabilities: React.FC = () => {
  const marqueeItems = [
    "REPOSITORY INTELLIGENCE",
    "MODEL CONTEXT PROTOCOL (MCP)",
    "AST DETERMINISTIC ANALYSIS",
    "KNOWLEDGE GRAPHS",
    "HYBRID RAG PIPELINES",
    "ASYNCIO DATA PIPELINES",
    "FASTAPI & PYDANTIC V2",
    "POSTGRESQL & SQLITE INDEXING",
    "CRAWL4AI WEB EXTRACTION",
    "ZERO-HALLUCINATION SCHEMAS",
  ];

  const icons = [Binary, Network, Database, Cpu];

  return (
    <section id="capabilities" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
            [ 02 / 09 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
            // CAPABILITIES & CRAFT
          </span>
        </div>

        {/* Honey Bold Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            I write, architect and deploy for high-velocity teams.
          </h2>
        </div>

        {/* Unapologetic Editorial Copy */}
        <div className="max-w-3xl mb-14 text-honey-muted text-base sm:text-xl font-normal leading-relaxed space-y-4">
          <p>
            AI agents that don't spin in circles burning token budgets. Local-first AST parsers sharper than a scalpel. Knowledge graphs as dense and reliable as reinforced concrete.
          </p>
          <p>
            AsyncIO pipelines that devour messy data for breakfast. Pydantic validation tight enough to choke runtime bugs before they exist. And custom MCP tooling that gives engineers an unfair competitive advantage.
          </p>
        </div>

        {/* Honey Style Horizontal Animated Marquee */}
        <div className="relative w-full overflow-hidden py-4 border-y border-white/[0.08] bg-white/[0.01] mb-16">
          <div className="animate-marquee flex gap-8 items-center">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <div key={idx} className="flex items-center gap-8 shrink-0">
                <span className="font-mono text-xs sm:text-sm tracking-widest text-honey-bone font-semibold uppercase">
                  {item}
                </span>
                <span className="text-honey-accent text-sm">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* 4 Deep-Dive Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((cap, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <div
                key={cap.number}
                className="group p-8 sm:p-10 rounded-2xl bg-[#111114] border border-white/[0.08] hover:border-white/25 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs tracking-widest text-honey-muted group-hover:text-honey-accent transition-colors">
                      // DISCIPLINE {cap.number}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-white/[0.03] border border-white/10 flex items-center justify-center text-honey-bone group-hover:border-honey-accent/40 group-hover:text-honey-accent transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-honey-bone mb-4 group-hover:text-white transition-colors">
                    {cap.title}
                  </h3>

                  <p className="text-honey-muted text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {cap.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.06] flex flex-wrap gap-2">
                  {cap.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.07] text-honey-bone/80 group-hover:border-white/15 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
