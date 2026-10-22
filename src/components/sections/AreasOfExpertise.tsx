import React from 'react';
import { motion } from 'framer-motion';
import { ChromaticRingScene } from '../3d/ChromaticRingScene';
import { TiltCard3D } from '../ui/TiltCard3D';
import { ArrowUpRight, Cpu, Database, Network, Layout, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const AreasOfExpertise: React.FC = () => {
  const cards = [
    {
      id: 'ai',
      role: 'DETERMINISTIC CODE INTELLIGENCE',
      title: 'Artificial Intelligence',
      icon: Cpu,
      accentColor: '#00f0ff',
      accentBorder: 'hover:border-cyan-400/40',
      tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
      description:
        'Python AST static analysis, Model Context Protocol (MCP) servers, and deterministic call graph extraction. Eliminating token hallucination with ground-truth repository intelligence.',
      highlight: 'AST · Model Context Protocol · Symbol Resolution',
      position: 'top-left',
    },
    {
      id: 'systems',
      role: 'DISTRIBUTED ARCHITECTURES',
      title: 'Systems & Blueprints',
      icon: Layout,
      accentColor: '#3b82f6',
      accentBorder: 'hover:border-blue-400/40',
      tagColor: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
      description:
        'High-concurrency AsyncIO backend engines, strict Pydantic v2 schemas across service boundaries, and state-machine driven developer platforms designed for zero drift.',
      highlight: 'FastAPI · Pydantic v2 · Schema Contracts',
      position: 'bottom-left',
    },
    {
      id: 'data',
      role: 'HIGH-CONCURRENCY INGESTION',
      title: 'Creative Technology',
      icon: Database,
      accentColor: '#ff4433',
      accentBorder: 'hover:border-red-400/40',
      tagColor: 'text-red-400 bg-red-400/10 border-red-400/20',
      description:
        'Asynchronous crawling pipelines ingesting and validating technical data from 600+ sources simultaneously using Crawl4AI, worker pools, and batched PostgreSQL transactions.',
      highlight: 'The AI Signal · AsyncIO · 600+ Feeds',
      position: 'top-right',
    },
    {
      id: 'product',
      role: 'SPATIAL COMMERCE & VOICE',
      title: 'Product Strategy',
      icon: Network,
      accentColor: '#ff5500',
      accentBorder: 'hover:border-electric-orange/40',
      tagColor: 'text-electric-orange bg-electric-orange/10 border-electric-orange/20',
      description:
        'Hyperlocal commerce backends, spatial location indexing, real-time inventory synchronization, and multilingual voice parsing engines engineered for low-bandwidth environments.',
      highlight: 'DUNDOO Platform · Flask · Spatial Search',
      position: 'bottom-right',
    },
  ];

  return (
    <section
      id="expertise"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between relative overflow-hidden py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]"
    >
      {/* 3D Chromatic Plasma Ring Scene (Center Vortex) */}
      <ChromaticRingScene />

      {/* Atmospheric Ambient Depth */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[450px] h-[450px] bg-red-500/[0.05] rounded-full blur-[160px] pointer-events-none" />

      {/* Main 12-Column Spatial Grid: 4 Editorial Glass Consoles framing the Ring */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">
        {/* Left Column (3 Cols): Top-Left & Bottom-Left */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-2 lg:order-1">
          {cards.slice(0, 2).map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: -50, y: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                animate={{
                  y: idx === 0 ? [-4, 4, -4] : [4, -4, 4],
                  transition: { duration: 6 + idx, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <TiltCard3D
                  glowColor={card.accentColor}
                  className={`p-6 sm:p-7 rounded-2xl bg-charcoal-900/80 backdrop-blur-2xl border border-white/[0.09] ${card.accentBorder} transition-all duration-300 shadow-xl group relative overflow-hidden`}
                >
                  {/* Subtle Top Accent Highlight Line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[1.5px] opacity-75"
                    style={{ backgroundColor: card.accentColor }}
                  />

                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${card.tagColor}`}>
                      {card.role}
                    </span>
                    <Icon className="w-4 h-4 text-warm-muted group-hover:text-warm-white transition-colors" />
                  </div>

                  <h3 className="font-syne text-xl font-bold text-warm-white tracking-tight mb-2.5">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs text-warm-muted leading-relaxed mb-4">
                    {card.description}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] font-mono text-[10px] text-warm-cream flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} />
                    <span>{card.highlight}</span>
                  </div>
                </TiltCard3D>
              </motion.div>
            );
          })}
        </div>

        {/* Center: The Core Ring Editorial Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-center justify-center text-center p-4 order-1 lg:order-2"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-900/90 border border-white/10 mb-4 shadow-xl backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
            <span className="font-mono text-[10px] text-warm-white tracking-widest uppercase font-bold">
              CORE CAPABILITIES
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-light text-warm-white tracking-tight mb-3">
            Areas of <span className="font-serif italic font-normal text-warm-white">Expertise</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-warm-cream/90 max-w-sm leading-relaxed mb-6">
            Bridging probabilistic AI models and production systems with deterministic AST static analysis, asynchronous crawlers, and verifiable contracts.
          </p>

          <Magnetic strength={0.25}>
            <a
              href="#internship"
              onClick={() => sound.click()}
              className="px-8 py-3.5 rounded-full font-mono text-xs font-black tracking-wider gradient-border-chromatic text-warm-white hover:text-white transition-all flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>EXPLORE SYSTEMS</span>
              <ArrowUpRight className="w-4 h-4 text-electric-orange" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Right Column (3 Cols): Top-Right & Bottom-Right */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-3">
          {cards.slice(2, 4).map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, x: 50, y: idx === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.15 + idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                animate={{
                  y: idx === 0 ? [-4, 4, -4] : [4, -4, 4],
                  transition: { duration: 6.5 + idx, repeat: Infinity, ease: 'easeInOut' },
                }}
              >
                <TiltCard3D
                  glowColor={card.accentColor}
                  className={`p-6 sm:p-7 rounded-2xl bg-charcoal-900/80 backdrop-blur-2xl border border-white/[0.09] ${card.accentBorder} transition-all duration-300 shadow-xl group relative overflow-hidden`}
                >
                  {/* Subtle Top Accent Highlight Line */}
                  <div
                    className="absolute top-0 left-6 right-6 h-[1.5px] opacity-75"
                    style={{ backgroundColor: card.accentColor }}
                  />

                  <div className="flex items-center justify-between mb-3">
                    <span className={`font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${card.tagColor}`}>
                      {card.role}
                    </span>
                    <Icon className="w-4 h-4 text-warm-muted group-hover:text-warm-white transition-colors" />
                  </div>

                  <h3 className="font-syne text-xl font-bold text-warm-white tracking-tight mb-2.5">
                    {card.title}
                  </h3>

                  <p className="font-sans text-xs text-warm-muted leading-relaxed mb-4">
                    {card.description}
                  </p>

                  <div className="pt-3 border-t border-white/[0.06] font-mono text-[10px] text-warm-cream flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: card.accentColor }} />
                    <span>{card.highlight}</span>
                  </div>
                </TiltCard3D>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Bottom Status Ticker */}
      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-electric-orange">●</span>
          <span className="text-warm-muted">DETERMINISTIC AI · HIGH-CONCURRENCY INGESTION · VERIFIED CONTRACTS</span>
        </div>
        <span className="hidden sm:inline text-warm-dark">INTERACTIVE CORE ARCHITECTURE</span>
      </div>
    </section>
  );
};
