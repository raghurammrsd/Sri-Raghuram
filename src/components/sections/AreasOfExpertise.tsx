import React from 'react';
import { motion } from 'framer-motion';
import { ChromaticRingScene } from '../3d/ChromaticRingScene';
import { ArrowUpRight, Cpu, Database, Network, Layout, Sparkles } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const AreasOfExpertise: React.FC = () => {
  return (
    <section id="expertise" className="scroll-mt-20 min-h-screen flex items-center justify-center relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 lg:px-8 bg-charcoal-950 border-b border-white/[0.08]">
      {/* Real-Time 3D Chromatic Energy Ring */}
      <ChromaticRingScene />

      {/* Atmospheric Dual-Color Radial Back-Glows (matching the image) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-red-500/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[450px] h-[450px] bg-blue-600/[0.05] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[450px] h-[450px] bg-electric-orange/[0.07] rounded-full blur-[160px] pointer-events-none" />

      {/* Main Grid: Centered Ring with 4 Floating Framing Cards */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Top-Left & Bottom-Left Floating Cards */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-2 lg:order-1">
          {/* Card 1: ARTIFICIAL INTELLIGENCE */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/75 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,240,255,0.06)] hover:border-cyan-400/40 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-cyan-400 opacity-80" />
            <div className="flex items-center justify-between mb-3">
              <span className="font-syne text-xl sm:text-2xl font-black text-warm-white tracking-wider uppercase group-hover:text-cyan-300 transition-colors">
                ARTIFICIAL INTELLIGENCE
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
              Deterministic repository intelligence, local-first AST analysis, and Model Context Protocol (MCP) servers.
            </p>
          </motion.div>

          {/* Card 3: USER EXPERIENCE */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/75 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(0,102,255,0.06)] hover:border-blue-400/40 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-blue-500 opacity-80" />
            <div className="flex items-center justify-between mb-3">
              <span className="font-syne text-xl sm:text-2xl font-black text-warm-white tracking-wider uppercase group-hover:text-blue-300 transition-colors">
                USER EXPERIENCE
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
              Automated architecture synthesis with Pydantic cross-layer validation and interactive FastAPI workbenches.
            </p>
          </motion.div>
        </div>

        {/* Center: The Core Ring Information Overlay */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center text-center p-6 sm:p-10 order-1 lg:order-2">
          {/* Section Marker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
            <span className="font-mono text-[10px] text-warm-white tracking-widest uppercase font-bold">
              3D CHROMATIC CORE
            </span>
          </div>

          {/* Center Heading with Luxury Editorial Italic (from uploaded image) */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light text-warm-white tracking-wide mb-4">
            Areas of <span className="font-serif italic font-normal text-warm-white">Expertise</span>
          </h2>

          {/* Center Pitch */}
          <p className="font-sans text-sm sm:text-base text-warm-cream/90 max-w-md leading-relaxed mb-8">
            I combine deterministic AST intelligence, high-concurrency pipelines, and verified knowledge graphs to engineer software that works in production.
          </p>

          {/* Center Pill Button with Dual-Color Gradient Border (from uploaded image) */}
          <Magnetic strength={0.3}>
            <a
              href="#internship"
              onClick={() => sound.click()}
              className="px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-black tracking-wider gradient-border-chromatic text-warm-white hover:text-white transition-all flex items-center gap-2.5 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-4 h-4 text-electric-orange" />
            </a>
          </Magnetic>
        </div>

        {/* Right Column: Top-Right & Bottom-Right Floating Cards */}
        <div className="lg:col-span-3 flex flex-col gap-6 justify-between order-3">
          {/* Card 2: CREATIVE TECHNOLOGY */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/75 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(255,85,0,0.06)] hover:border-red-500/40 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-red-500 opacity-80" />
            <div className="flex items-center justify-between mb-3">
              <span className="font-syne text-xl sm:text-2xl font-black text-warm-white tracking-wider uppercase group-hover:text-red-400 transition-colors">
                CREATIVE TECHNOLOGY
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
              High-concurrency data pipelines ingesting from 600+ sources using AsyncIO, Crawl4AI, and PostgreSQL.
            </p>
          </motion.div>

          {/* Card 4: PRODUCT STRATEGY */}
          <motion.div
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="p-6 sm:p-7 rounded-2xl bg-charcoal-900/75 backdrop-blur-2xl border border-white/10 shadow-[0_0_30px_rgba(255,51,0,0.06)] hover:border-electric-orange/40 transition-all relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-2 h-full bg-electric-orange opacity-80" />
            <div className="flex items-center justify-between mb-3">
              <span className="font-syne text-xl sm:text-2xl font-black text-warm-white tracking-wider uppercase group-hover:text-orange-400 transition-colors">
                PRODUCT STRATEGY
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-warm-muted leading-relaxed">
              Hyperlocal commerce, spatial map navigation, real-time inventory management, and multilingual voice AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
