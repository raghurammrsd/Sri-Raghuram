import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ShieldCheck, Zap, GitBranch, Cpu, Terminal } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Story: React.FC = () => {
  const principles = [
    {
      number: '01',
      title: 'Ground Truth over Guesswork',
      description:
        'Language models are probabilistic. Production code demands determinism. We anchor AI agents to concrete compiler ASTs, line-level symbol definitions, and verifiable call graphs rather than noisy token search.',
      metric: 'DETERMINISTIC COMPILER RESOLUTION',
      icon: Cpu,
    },
    {
      number: '02',
      title: 'Local-First Velocity',
      description:
        'Developer tools must feel instantaneous. By caching indexed syntax trees in local SQLite databases, queries resolve in sub-millisecond timeframes with zero dependency on cloud roundtrips.',
      metric: '< 1ms LOCAL QUERY LATENCY',
      icon: Zap,
    },
    {
      number: '03',
      title: 'Production Concurrency',
      description:
        'High-throughput web ingestion requires relentless resilience. We utilize AsyncIO worker pools with exponential backoff, automated dead-letter queues, and strict Pydantic schema validation.',
      metric: 'ASYNCIO HIGH-THROUGHPUT RUNTIME',
      icon: GitBranch,
    },
  ];

  return (
    <section
      id="story"
      className="scroll-mt-20 min-h-screen flex flex-col justify-between py-12 sm:py-16 border-b border-white/[0.08] relative bg-transparent"
    >
      {/* Background Volumetric Depth */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-electric-orange/[0.035] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Section Header with Staggered Kinetic Typography */}
        <div className="pb-6 border-b border-white/[0.08]">
          {/* Top Tag with Pulse */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 mb-3"
          >
            <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
              01 · PHILOSOPHY
            </span>
            <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
              ENGINEERING THESIS
            </span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="overflow-hidden">
              {/* Line 1 Kinetic Reveal */}
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="font-syne text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-warm-white leading-[0.95]"
              >
                Not just models.
              </motion.h2>

              {/* Line 2 Kinetic Reveal with Solid Orange Banner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  style={{ backgroundColor: '#ff5500', color: '#000000' }}
                  className="px-4 sm:px-6 py-1 rounded-sm inline-block font-black shadow-2xl mt-2 font-syne text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase"
                >
                  SYSTEMS THAT WORK.
                </span>
              </motion.div>
            </div>

            {/* Paragraph with Smooth Unmasking */}
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="font-sans text-xs sm:text-sm text-warm-cream/90 max-w-xl leading-relaxed"
            >
              Most AI prototypes fail when context windows drown in noise and agents hallucinate imports. My focus is practical AI engineering: building deterministic tools, local-first repository intelligence, and high-concurrency data systems.
            </motion.p>
          </div>
        </div>

        {/* 3 Sophisticated Architectural Principle Cards with Kinetic Stagger & Progress Lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-auto py-6">
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 45, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: idx * 0.15 + 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                onMouseEnter={() => sound.hover()}
                className="p-7 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] hover:border-electric-orange/50 transition-all duration-300 flex flex-col justify-between shadow-2xl relative group backdrop-blur-xl overflow-hidden"
              >
                {/* Dynamic Top Progress Accent Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 + idx * 0.2, ease: 'easeOut' }}
                  className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-electric-orange via-electric-orange/80 to-transparent"
                />

                {/* Ambient Card Glare on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-electric-orange/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black text-warm-dark group-hover:text-electric-orange transition-colors">
                      {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-warm-muted group-hover:text-electric-orange group-hover:border-electric-orange/40 transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="font-syne text-xl font-bold text-electric-orange tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/[0.08] mt-6 flex items-center justify-between font-mono text-[11px] text-warm-cream">
                  <span className="tracking-wider">{item.metric}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-electric-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark"
        >
          <div className="flex items-center gap-2">
            <span className="text-electric-orange">●</span>
            <span>SYSTEM ARCHITECTURE PRINCIPLES</span>
          </div>
          <span>ZERO GUESSWORK · HIGH PRECISION</span>
        </motion.div>
      </div>
    </section>
  );
};
