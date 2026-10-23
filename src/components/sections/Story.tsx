import React from 'react';
import { motion } from 'framer-motion';
import { STORY_SECTION } from '../../data/portfolioData';
import { ArrowUpRight, ShieldCheck, Zap, GitBranch } from 'lucide-react';

export const Story: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Ground Truth over Guesswork',
      description:
        'Language models are probabilistic. Production code demands determinism. We anchor AI agents to concrete compiler ASTs, line-level symbol definitions, and verifiable call graphs rather than noisy token search.',
      metric: 'DETERMINISTIC COMPILER RESOLUTION',
    },
    {
      number: '02',
      title: 'Local-First Velocity',
      description:
        'Developer tools must feel instantaneous. By caching indexed syntax trees in local SQLite databases, queries resolve in sub-millisecond timeframes with zero dependency on cloud roundtrips.',
      metric: '< 1ms LOCAL QUERY LATENCY',
    },
    {
      number: '03',
      title: 'Production Concurrency',
      description:
        'High-throughput web ingestion requires relentless resilience. We utilize AsyncIO worker pools with exponential backoff, automated dead-letter queues, and strict Pydantic schema validation.',
      metric: 'ASYNCIO HIGH-THROUGHPUT RUNTIME',
    },
  ];

  return (
    <section
      id="story"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-8 sm:py-12 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="pb-6 border-b border-white/[0.08]"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded">
              01 · PHILOSOPHY
            </span>
            <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
              ENGINEERING THESIS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-warm-white leading-[0.95]">
              Not just models.
              <br />
              <span
                style={{ backgroundColor: '#ff5500', color: '#000000' }}
                className="px-4 py-0.5 rounded-sm inline-block font-black shadow-xl mt-1.5"
              >
                SYSTEMS THAT WORK.
              </span>
            </h2>

            <p className="font-sans text-xs sm:text-sm text-warm-cream/90 max-w-xl leading-relaxed">
              Most AI prototypes fail when context windows drown in noise and agents hallucinate imports. My focus is practical AI engineering: building deterministic tools, local-first repository intelligence, and high-concurrency data systems.
            </p>
          </div>
        </motion.div>

        {/* 3 Sophisticated Architectural Principle Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-6">
          {principles.map((item, idx) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="p-7 rounded-2xl bg-charcoal-900/60 border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between shadow-xl relative group backdrop-blur-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-2xl font-black text-warm-dark group-hover:text-electric-orange transition-colors">
                    {item.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-electric-orange transition-colors" />
                </div>

                <h3 className="font-syne text-xl font-bold text-electric-orange tracking-tight mb-3">
                  {item.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.06] font-mono text-[10px] text-warm-cream flex items-center justify-between">
                <span>ARCHITECTURAL STANDARD</span>
                <span className="text-electric-orange font-bold">{item.metric}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div className="flex items-center gap-2">
            <span className="text-electric-orange">●</span>
            <span className="text-warm-muted">DETERMINISTIC GROUND TRUTH · COMPILER AST · REPOSITORY INTELLIGENCE</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">GROUND TRUTH OVER GENERATIVE GUESSWORK</span>
        </div>
      </div>
    </section>
  );
};
