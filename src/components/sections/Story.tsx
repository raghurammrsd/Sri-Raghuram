import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Cpu, Zap, GitBranch } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Story: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // 120fps Hardware-Accelerated Scroll Motion Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const cardsY = useTransform(scrollYProgress, [0, 1], [35, -35]);

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
      ref={sectionRef}
      id="story"
      className="scroll-mt-20 min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 border-b-2 border-[#e5d3af]/60 relative bg-transparent overflow-hidden"
    >
      {/* Background Volumetric Depth */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#966b44]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Section Header with Clean Framing & Scroll Parallax */}
        <motion.div style={{ y: headerY }} className="pb-5 border-b border-[#e5d3af]/70">
          {/* Top Tag with Pulse */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <span className="font-mono text-[11px] font-bold tracking-widest text-[#790d16] bg-[#790d16]/10 border border-[#790d16]/30 px-3 py-0.5 rounded-full flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
              01 · PHILOSOPHY
            </span>
            <span className="font-mono text-[11px] tracking-wider text-[#555555] uppercase font-bold">
              ENGINEERING THESIS
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6">
            <div>
              <h2 className="font-syne text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-[0.94]">
                Not just models. <br />
                <span className="text-[#790d16]">Systems that work.</span>
              </h2>
            </div>

            {/* Paragraph with High Contrast Crisp Black Text */}
            <p className="font-sans text-xs sm:text-sm text-[#222222] max-w-xl leading-relaxed font-medium">
              Most AI prototypes fail when context windows drown in noise and agents hallucinate imports. My focus is practical AI engineering: building deterministic tools, local-first repository intelligence, and high-concurrency data systems.
            </p>
          </div>
        </motion.div>

        {/* 3 Sophisticated Architectural Principle Cards with Scroll Parallax */}
        <motion.div
          style={{ y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 my-auto py-4 sm:py-5"
        >
          {principles.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.number}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                onMouseEnter={() => sound.hover()}
                className="p-5 sm:p-6 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] transition-all duration-300 flex flex-col justify-between shadow-[0_8px_24px_rgba(121,13,22,0.05)] relative group overflow-hidden"
              >
                {/* Dynamic Top Progress Accent Bar */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#790d16] via-[#aec4d4] to-[#e5d3af]" />

                {/* Subtle Card Glare on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#790d16]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-[#790d16] group-hover:scale-105 transition-transform">
                      {item.number}
                    </span>
                    <div className="w-8 h-8 rounded-lg bg-[#e5d3af]/30 border border-[#e5d3af] flex items-center justify-center text-[#790d16] group-hover:bg-[#790d16] group-hover:text-white transition-all shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Solid High-Contrast Title */}
                  <h3 className="font-syne text-lg sm:text-xl font-extrabold text-black group-hover:text-[#790d16] transition-colors tracking-tight mb-2.5">
                    {item.title}
                  </h3>

                  {/* Clean Readable Description */}
                  <p className="font-sans text-xs sm:text-sm text-[#333333] leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Metric Footer */}
                <div className="pt-4 border-t border-[#e5d3af]/80 mt-5 flex items-center justify-between font-mono text-[11px] text-black font-bold">
                  <span className="tracking-wider text-[#555555]">{item.metric}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#790d16] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Telemetry Ticker */}
        <div className="pt-3 border-t border-[#e5d3af]/60 flex items-center justify-between font-mono text-[11px] text-black">
          <div className="flex items-center gap-2">
            <span className="text-[#790d16]">●</span>
            <span className="font-bold">SYSTEM ARCHITECTURE PRINCIPLES</span>
          </div>
          <span className="font-bold">ZERO GUESSWORK · HIGH PRECISION</span>
        </div>
      </div>
    </section>
  );
};
