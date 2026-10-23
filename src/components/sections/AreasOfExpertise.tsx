import React from 'react';
import { motion } from 'framer-motion';
import { ChromaticRingScene } from '../3d/ChromaticRingScene';
import { TiltCard3D } from '../ui/TiltCard3D';
import { RingEnergyConduits } from '../ui/RingEnergyConduits';
import { ArrowUpRight, Cpu, Database, Network, Layout, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const AreasOfExpertise: React.FC = () => {
  const cards = [
    {
      id: 'ai',
      domain: '01 · AI INTELLIGENCE',
      title: 'Artificial Intelligence',
      icon: Cpu,
      description:
        'Deterministic code intelligence via Python AST static analysis, Model Context Protocol (MCP) servers, and line-level symbol resolution. Eliminating token hallucination with ground truth.',
      tag: 'AST · Model Context Protocol · 0.8ms',
      portSide: 'right', // connecting to ring
    },
    {
      id: 'systems',
      domain: '02 · SYSTEMS ARCHITECTURE',
      title: 'Systems & Blueprints',
      icon: Layout,
      description:
        'High-concurrency AsyncIO backend engines, strict Pydantic v2 schemas across service boundaries, and state-machine driven developer platforms designed for zero runtime drift.',
      tag: 'FastAPI · Pydantic v2 · Schema Contracts',
      portSide: 'right',
    },
    {
      id: 'data',
      domain: '03 · DATA PIPELINES',
      title: 'Creative Technology',
      icon: Database,
      description:
        'Asynchronous crawling pipelines ingesting, validating, and structuring technical data from 600+ sources simultaneously using Crawl4AI, worker pools, and batched PostgreSQL transactions.',
      tag: 'The AI Signal · Crawl4AI · 600+ Sources',
      portSide: 'left',
    },
    {
      id: 'product',
      domain: '04 · SPATIAL COMMERCE',
      title: 'Product Strategy',
      icon: Network,
      description:
        'Hyperlocal commerce backends, spatial location indexing, real-time transactional inventory sync, and multilingual voice search parsing engines built for high reliability.',
      tag: 'DUNDOO Platform · Flask · Spatial Sync',
      portSide: 'left',
    },
  ];

  return (
    <section
      id="expertise"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between relative overflow-hidden py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-white/[0.08]"
    >
      {/* 3D Chromatic Plasma Ring Scene (Center Vortex) */}
      <ChromaticRingScene />

      {/* Animated Laser Energy Conduits: Connecting the 3D Ring to the 4 Floating Boxes */}
      <RingEnergyConduits />

      {/* Atmospheric Ambient Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-electric-orange/[0.045] rounded-full blur-[200px] pointer-events-none" />

      {/* Main 12-Column Spatial Grid: 4 Pristine 3D Floating Boxes emerging from the Ring */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto">
        {/* Left Column (3 Cols): Box 1 (Top Left) & Box 2 (Bottom Left) */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-2 lg:order-1">
          {/* Box 1: Artificial Intelligence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, x: 80, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            animate={{
              y: [-8, 8, -8],
              rotateX: [-2.5, 2.5, -2.5],
              rotateY: [-2, 2, -2],
              transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#ff5500"
              className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/90 backdrop-blur-2xl border border-white/10 hover:border-electric-orange/50 shadow-2xl group relative overflow-hidden"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-electric-orange animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
              </div>

              {/* Domain Tag */}
              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] font-bold text-electric-orange tracking-wider uppercase">
                  {cards[0].domain}
                </span>
              </div>

              {/* Heading in Electric Orange as requested */}
              <h3 className="font-syne text-xl sm:text-2xl font-black text-electric-orange tracking-tight mb-2.5">
                {cards[0].title}
              </h3>

              <p className="font-sans text-xs text-warm-muted leading-relaxed mb-4">
                {cards[0].description}
              </p>

              <div className="pt-3 border-t border-white/[0.08] font-mono text-[10px] text-warm-cream flex items-center justify-between">
                <span>{cards[0].tag}</span>
                <Cpu className="w-3.5 h-3.5 text-electric-orange" />
              </div>
            </TiltCard3D>
          </motion.div>

          {/* Box 2: Systems & Blueprints */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, x: 80, y: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            animate={{
              y: [8, -8, 8],
              rotateX: [2.5, -2.5, 2.5],
              rotateY: [2, -2, 2],
              transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#ff5500"
              className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/90 backdrop-blur-2xl border border-white/10 hover:border-electric-orange/50 shadow-2xl group relative overflow-hidden"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-4 right-4 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-electric-orange animate-ping" />
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
              </div>

              <div className="flex items-center gap-2 mb-3">
                <span className="font-mono text-[10px] font-bold text-electric-orange tracking-wider uppercase">
                  {cards[1].domain}
                </span>
              </div>

              {/* Heading in Electric Orange */}
              <h3 className="font-syne text-xl sm:text-2xl font-black text-electric-orange tracking-tight mb-2.5">
                {cards[1].title}
              </h3>

              <p className="font-sans text-xs text-warm-muted leading-relaxed mb-4">
                {cards[1].description}
              </p>

              <div className="pt-3 border-t border-white/[0.08] font-mono text-[10px] text-warm-cream flex items-center justify-between">
                <span>{cards[1].tag}</span>
                <Layout className="w-3.5 h-3.5 text-electric-orange" />
              </div>
            </TiltCard3D>
          </motion.div>
        </div>

        {/* Center: The Core Ring Heading (Orange Accent as requested!) */}
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
            Areas of <span className="font-serif italic font-normal text-electric-orange">Expertise</span>
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

        {/* Right Column (3 Cols): Box 3 (Top Right) & Box 4 (Bottom Right) */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-3">
          {/* Box 3: Creative Technology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, x: -80, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            animate={{
              y: [-7, 9, -7],
              rotateX: [-2.5, 2.5, -2.5],
              rotateY: [2.5, -2.5, 2.5],
              transition: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#ff5500"
              className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/90 backdrop-blur-2xl border border-white/10 hover:border-electric-orange/50 shadow-2xl group relative overflow-hidden"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
                <span className="w-2 h-2 rounded-full bg-electric-orange animate-ping" />
              </div>

              <div className="flex items-center justify-end gap-2 mb-3">
                <span className="font-mono text-[10px] font-bold text-electric-orange tracking-wider uppercase">
                  {cards[2].domain}
                </span>
              </div>

              {/* Heading in Electric Orange */}
              <h3 className="font-syne text-xl sm:text-2xl font-black text-electric-orange tracking-tight mb-2.5">
                {cards[2].title}
              </h3>

              <p className="font-sans text-xs text-warm-muted leading-relaxed mb-4">
                {cards[2].description}
              </p>

              <div className="pt-3 border-t border-white/[0.08] font-mono text-[10px] text-warm-cream flex items-center justify-between">
                <span>{cards[2].tag}</span>
                <Database className="w-3.5 h-3.5 text-electric-orange" />
              </div>
            </TiltCard3D>
          </motion.div>

          {/* Box 4: Product Strategy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, x: -80, y: -40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            animate={{
              y: [9, -7, 9],
              rotateX: [2.5, -2.5, 2.5],
              rotateY: [-2.5, 2.5, -2.5],
              transition: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#ff5500"
              className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/90 backdrop-blur-2xl border border-white/10 hover:border-electric-orange/50 shadow-2xl group relative overflow-hidden"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-4 left-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
                <span className="w-2 h-2 rounded-full bg-electric-orange animate-ping" />
              </div>

              <div className="flex items-center justify-end gap-2 mb-3">
                <span className="font-mono text-[10px] font-bold text-electric-orange tracking-wider uppercase">
                  {cards[3].domain}
                </span>
              </div>

              {/* Heading in Electric Orange */}
              <h3 className="font-syne text-xl sm:text-2xl font-black text-electric-orange tracking-tight mb-2.5">
                {cards[3].title}
              </h3>

              <p className="font-sans text-xs text-warm-muted leading-relaxed mb-4">
                {cards[3].description}
              </p>

              <div className="pt-3 border-t border-white/[0.08] font-mono text-[10px] text-warm-cream flex items-center justify-between">
                <span>{cards[3].tag}</span>
                <Network className="w-3.5 h-3.5 text-electric-orange" />
              </div>
            </TiltCard3D>
          </motion.div>
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
