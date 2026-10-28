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
      domain: '01 · AI INTELLIGENCE',
      title: 'Artificial Intelligence',
      icon: Cpu,
      description:
        'Deterministic code intelligence via Python AST static analysis, Model Context Protocol (MCP) servers, and line-level symbol resolution. Eliminating token hallucination with ground truth.',
      tag: 'AST · MCP · 0.8ms',
      portSide: 'right',
    },
    {
      id: 'systems',
      domain: '02 · SYSTEMS ARCHITECTURE',
      title: 'Systems & Blueprints',
      icon: Layout,
      description:
        'High-concurrency AsyncIO backend engines, strict Pydantic v2 schemas across service boundaries, and state-machine driven developer platforms designed for zero runtime drift.',
      tag: 'FastAPI · Pydantic v2 · Contracts',
      portSide: 'right',
    },
    {
      id: 'data',
      domain: '03 · DATA PIPELINES',
      title: 'Creative Technology',
      icon: Database,
      description:
        'Asynchronous crawling pipelines ingesting, validating, and structuring technical data from 600+ sources simultaneously using Crawl4AI, worker pools, and batched PostgreSQL transactions.',
      tag: 'Crawl4AI · 600+ Sources',
      portSide: 'left',
    },
    {
      id: 'product',
      domain: '04 · SPATIAL COMMERCE',
      title: 'Product Strategy',
      icon: Network,
      description:
        'Hyperlocal commerce backends, spatial location indexing, real-time transactional inventory sync, and multilingual voice search parsing engines built for high reliability.',
      tag: 'DUNDOO · Spatial Sync',
      portSide: 'left',
    },
  ];

  return (
    <section
      id="expertise"
      className="scroll-mt-20 min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 border-b-2 border-[#e5d3af]/60 relative bg-transparent overflow-hidden"
    >
      {/* Crisp Pure-SVG Ring (Zero-Lag, Zero-Heating) */}
      <ChromaticRingScene />

      {/* Atmospheric Ambient Depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#966b44]/15 rounded-full blur-[200px] pointer-events-none" />

      {/* Main 12-Column Spatial Grid: Positioned comfortably with breathing room */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto py-2">
        {/* Left Column (3 Cols): Box 1 (Top Left) & Box 2 (Bottom Left) with clean vertical separation */}
        <div className="lg:col-span-3 flex flex-col gap-6 sm:gap-8 justify-center my-auto order-2 lg:order-1">
          {/* Box 1: Artificial Intelligence */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, x: 80, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            animate={{
              y: [-5, 5, -5],
              rotateX: [-1.5, 1.5, -1.5],
              rotateY: [-1.2, 1.2, -1.2],
              transition: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#790d16"
              className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_30px_rgba(121,13,22,0.06)] group relative overflow-hidden transition-all duration-300"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-3.5 right-3.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
                <span className="w-1 h-1 rounded-full bg-[#790d16]" />
              </div>

              {/* Domain Tag */}
              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] font-bold text-[#790d16] tracking-wider uppercase">
                  {cards[0].domain}
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-syne text-base sm:text-lg font-black text-black group-hover:text-[#790d16] transition-colors tracking-tight mb-2">
                {cards[0].title}
              </h3>

              <p className="font-sans text-[11px] sm:text-xs text-[#222222] font-medium leading-relaxed mb-3">
                {cards[0].description}
              </p>

              <div className="pt-2.5 border-t border-[#e5d3af] font-mono text-[9px] text-black font-bold flex items-center justify-between">
                <span>{cards[0].tag}</span>
                <Cpu className="w-3.5 h-3.5 text-[#790d16]" />
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
              y: [5, -5, 5],
              rotateX: [1.5, -1.5, 1.5],
              rotateY: [1.2, -1.2, 1.2],
              transition: { duration: 6.5, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#790d16"
              className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_30px_rgba(121,13,22,0.06)] group relative overflow-hidden transition-all duration-300"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-3.5 right-3.5 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
                <span className="w-1 h-1 rounded-full bg-[#790d16]" />
              </div>

              <div className="flex items-center gap-2 mb-1.5">
                <span className="font-mono text-[9px] font-bold text-[#790d16] tracking-wider uppercase">
                  {cards[1].domain}
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-syne text-base sm:text-lg font-black text-black group-hover:text-[#790d16] transition-colors tracking-tight mb-2">
                {cards[1].title}
              </h3>

              <p className="font-sans text-[11px] sm:text-xs text-[#222222] font-medium leading-relaxed mb-3">
                {cards[1].description}
              </p>

              <div className="pt-2.5 border-t border-[#e5d3af] font-mono text-[9px] text-black font-bold flex items-center justify-between">
                <span>{cards[1].tag}</span>
                <Layout className="w-3.5 h-3.5 text-[#790d16]" />
              </div>
            </TiltCard3D>
          </motion.div>
        </div>

        {/* Center: The Core Ring Heading */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-6 flex flex-col items-center justify-center text-center p-2 order-1 lg:order-2 my-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border-2 border-[#e5d3af] mb-3 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
            <span className="font-mono text-[11px] text-black tracking-widest uppercase font-bold">
              CORE CAPABILITIES
            </span>
          </div>

          <h2 className="font-syne text-3xl sm:text-5xl font-black tracking-tight mb-2.5">
            <span className="text-black drop-shadow-sm">Areas of </span>
            <span className="text-[#790d16]">Expertise.</span>
          </h2>

          <p className="font-sans text-xs sm:text-sm text-[#222222] font-semibold max-w-sm leading-relaxed mb-5">
            Bridging probabilistic AI models and production systems with deterministic AST static analysis, asynchronous crawlers, and verifiable contracts.
          </p>

          <Magnetic strength={0.25}>
            <a
              href="#internship"
              onClick={() => sound.click()}
              className="px-7 py-3 rounded-full font-mono text-xs font-black tracking-wider bg-[#790d16] text-[#ffffff] hover:bg-[#5c0910] transition-all flex items-center gap-2 shadow-[0_8px_24px_rgba(121,13,22,0.25)] hover:scale-105 active:scale-95 cursor-pointer"
            >
              <span>EXPLORE SYSTEMS</span>
              <ArrowUpRight className="w-4 h-4 text-[#ffffff] stroke-[2.5]" />
            </a>
          </Magnetic>
        </motion.div>

        {/* Right Column (3 Cols): Box 3 (Top Right) & Box 4 (Bottom Right) with clean vertical separation */}
        <div className="lg:col-span-3 flex flex-col gap-6 sm:gap-8 justify-center my-auto order-3">
          {/* Box 3: Creative Technology */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75, x: -80, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            animate={{
              y: [-5, 5, -5],
              rotateX: [-1.5, 1.5, -1.5],
              rotateY: [1.2, -1.2, 1.2],
              transition: { duration: 6.8, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#790d16"
              className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_30px_rgba(121,13,22,0.06)] group relative overflow-hidden transition-all duration-300"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#790d16]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
              </div>

              <div className="flex items-center justify-end gap-2 mb-1.5">
                <span className="font-mono text-[9px] font-bold text-[#790d16] tracking-wider uppercase">
                  {cards[2].domain}
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-syne text-base sm:text-lg font-black text-black group-hover:text-[#790d16] transition-colors tracking-tight mb-2">
                {cards[2].title}
              </h3>

              <p className="font-sans text-[11px] sm:text-xs text-[#222222] font-medium leading-relaxed mb-3">
                {cards[2].description}
              </p>

              <div className="pt-2.5 border-t border-[#e5d3af] font-mono text-[9px] text-black font-bold flex items-center justify-between">
                <span>{cards[2].tag}</span>
                <Database className="w-3.5 h-3.5 text-[#790d16]" />
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
              y: [5, -5, 5],
              rotateX: [1.5, -1.5, 1.5],
              rotateY: [-1.2, 1.2, -1.2],
              transition: { duration: 7.2, repeat: Infinity, ease: 'easeInOut' },
            }}
          >
            <TiltCard3D
              glowColor="#790d16"
              className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_8px_30px_rgba(121,13,22,0.06)] group relative overflow-hidden transition-all duration-300"
            >
              {/* Ring Docking Energy Port */}
              <div className="absolute top-3.5 left-3.5 flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-[#790d16]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
              </div>

              <div className="flex items-center justify-end gap-2 mb-1.5">
                <span className="font-mono text-[9px] font-bold text-[#790d16] tracking-wider uppercase">
                  {cards[3].domain}
                </span>
              </div>

              {/* Heading */}
              <h3 className="font-syne text-base sm:text-lg font-black text-black group-hover:text-[#790d16] transition-colors tracking-tight mb-2">
                {cards[3].title}
              </h3>

              <p className="font-sans text-[11px] sm:text-xs text-[#222222] font-medium leading-relaxed mb-3">
                {cards[3].description}
              </p>

              <div className="pt-2.5 border-t border-[#e5d3af] font-mono text-[9px] text-black font-bold flex items-center justify-between">
                <span>{cards[3].tag}</span>
                <Network className="w-3.5 h-3.5 text-[#790d16]" />
              </div>
            </TiltCard3D>
          </motion.div>
        </div>
      </div>

      {/* Bottom Status Ticker - Clearly separated at the bottom */}
      <div className="pt-3 border-t-2 border-[#e5d3af] flex items-center justify-between font-mono text-xs text-[#333333] relative z-10 font-bold mt-2">
        <div className="flex items-center gap-2">
          <span className="text-[#790d16]">●</span>
          <span className="text-black font-semibold">DETERMINISTIC AI · HIGH-CONCURRENCY INGESTION · VERIFIED CONTRACTS</span>
        </div>
        <span className="hidden sm:inline text-black font-bold">INTERACTIVE CORE ARCHITECTURE</span>
      </div>
    </section>
  );
};
