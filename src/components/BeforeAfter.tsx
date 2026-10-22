import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export const BeforeAfter: React.FC = () => {
  const [viewMode, setViewMode] = useState<'both' | 'before' | 'after'>('both');

  const beforeItems = [
    {
      num: "01",
      title: "GREP & PRAY.",
      desc: "AI coding agents blindly grep 40,000 files, burn token contexts to a cinder, and guess imports based on vibes. You pay hundreds of dollars in API credits to watch an agent loop in circles and hallucinate non-existent symbols.",
    },
    {
      num: "02",
      title: "VECTOR SPAM.",
      desc: "Naive text chunks tossed into a vector store with no AST structure or schema understanding. Cosine similarity returns vague paragraphs with zero verifiable line-level citations.",
    },
    {
      num: "03",
      title: "TOY DEMO SYNDROME.",
      desc: "Fragile Twitter demos that look cute for 30 seconds, but immediately disintegrate the second real-world malformed data, concurrent traffic, or unhandled exceptions hit production.",
    },
  ];

  const afterItems = [
    {
      num: "01",
      title: "AST GROUND TRUTH.",
      desc: "Deterministic static analysis queries exact symbols, callers, callees, and database models in milliseconds. Zero wasted tokens. 100% verifiable file:line evidence before an agent even touches a token.",
    },
    {
      num: "02",
      title: "HYBRID KNOWLEDGE GRAPHS.",
      desc: "Structured entity resolution and relational graphs with auditable schema contracts. Every retrieved relationship is backed by structural proof, not generative guessing.",
    },
    {
      num: "03",
      title: "INDUSTRIAL DETERMINISM.",
      desc: "High-throughput AsyncIO concurrency, strict Pydantic v2 schemas, automated regression tests, and published MCP tools that engineers rely on in production environments.",
    },
  ];

  return (
    <section id="contrast" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
              [ 05 / 09 ]
            </span>
            <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
              // THE CONTRAST: BEFORE vs AFTER
            </span>
          </div>

          {/* View mode toggle */}
          <div className="hidden sm:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10">
            <button
              onClick={() => setViewMode('both')}
              className={`px-3 py-1 rounded-full font-mono text-[11px] transition-all ${
                viewMode === 'both' ? 'bg-white/15 text-white' : 'text-honey-muted hover:text-honey-bone'
              }`}
            >
              SIDE BY SIDE
            </button>
            <button
              onClick={() => setViewMode('before')}
              className={`px-3 py-1 rounded-full font-mono text-[11px] transition-all ${
                viewMode === 'before' ? 'bg-rose-500/20 text-rose-300' : 'text-honey-muted hover:text-honey-bone'
              }`}
            >
              BEFORE ONLY
            </button>
            <button
              onClick={() => setViewMode('after')}
              className={`px-3 py-1 rounded-full font-mono text-[11px] transition-all ${
                viewMode === 'after' ? 'bg-emerald-500/20 text-emerald-300' : 'text-honey-muted hover:text-honey-bone'
              }`}
            >
              AFTER ONLY
            </button>
          </div>
        </div>

        {/* Honey Bold Headline */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            Vibe Coder vs Deterministic Architect.
          </h2>
          <p className="font-mono text-honey-muted text-sm sm:text-lg mt-2">
            The difference between building demos and engineering production systems.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* BEFORE COLUMN */}
          {(viewMode === 'both' || viewMode === 'before') && (
            <div className="rounded-3xl bg-[#111114] border border-rose-500/20 p-6 sm:p-10 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-rose-500/15 mb-8">
                <div className="flex items-center gap-2 text-rose-400">
                  <AlertCircle className="w-4 h-4" />
                  <span className="font-mono text-xs tracking-widest font-bold uppercase">
                    BEFORE // STOCHASTIC GUESSWORK
                  </span>
                </div>
                <span className="font-mono text-xs text-rose-400/60">[0.0/10]</span>
              </div>

              <div className="space-y-8">
                {beforeItems.map((item) => (
                  <div key={item.num} className="group">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs text-rose-400 font-semibold tracking-wider">
                      <span>[{item.num}]</span>
                      <h4 className="text-lg font-bold text-rose-200">{item.title}</h4>
                    </div>
                    <p className="text-sm sm:text-base text-honey-muted leading-relaxed font-normal pl-6 border-l border-rose-500/20">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* AFTER COLUMN */}
          {(viewMode === 'both' || viewMode === 'after') && (
            <div className="rounded-3xl bg-[#111114] border border-emerald-500/25 p-6 sm:p-10 relative overflow-hidden">
              <div className="flex items-center justify-between pb-6 border-b border-emerald-500/20 mb-8">
                <div className="flex items-center gap-2 text-emerald-400">
                  <CheckCircle2 className="w-4 h-4" />
                  <span className="font-mono text-xs tracking-widest font-bold uppercase">
                    AFTER // RAGHURAM DETERMINISTIC AI
                  </span>
                </div>
                <span className="font-mono text-xs text-emerald-400/80">[10/10]</span>
              </div>

              <div className="space-y-8">
                {afterItems.map((item) => (
                  <div key={item.num} className="group">
                    <div className="flex items-center gap-2 mb-2 font-mono text-xs text-emerald-400 font-semibold tracking-wider">
                      <span>[{item.num}]</span>
                      <h4 className="text-lg font-bold text-emerald-200">{item.title}</h4>
                    </div>
                    <p className="text-sm sm:text-base text-honey-bone/90 leading-relaxed font-normal pl-6 border-l border-emerald-500/30">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
