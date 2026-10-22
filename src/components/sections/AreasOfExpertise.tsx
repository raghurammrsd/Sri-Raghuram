import React from 'react';
import { motion } from 'framer-motion';
import { ChromaticRingScene } from '../3d/ChromaticRingScene';
import { ArrowUpRight, Cpu, Database, Network, Layout, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const AreasOfExpertise: React.FC = () => {
  return (
    <section id="expertise" className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between relative overflow-hidden py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8 bg-charcoal-950 border-b border-white/[0.08]">
      {/* 3D Chromatic Plasma Ring (Decreased size & 360 Full Circle) */}
      <ChromaticRingScene />

      {/* Atmospheric Dual-Color Radial Back-Glows matching the reference image */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-cyan-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[420px] h-[420px] bg-red-500/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[380px] h-[380px] bg-blue-600/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[380px] h-[380px] bg-electric-orange/[0.06] rounded-full blur-[140px] pointer-events-none" />

      {/* Main Grid: Centered Ring with 4 Professional Floating Framing Cards */}
      <div className="max-w-7xl w-full mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: Top-Left & Bottom-Left Professional Cards */}
        <div className="lg:col-span-3 flex flex-col gap-5 justify-between order-2 lg:order-1">
          {/* Card 1: ARTIFICIAL INTELLIGENCE */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="p-5 sm:p-6 rounded-2xl bg-charcoal-900/85 backdrop-blur-2xl border border-white/[0.09] hover:border-cyan-400/40 transition-all shadow-[0_0_25px_rgba(0,240,255,0.05)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-cyan-400 opacity-90 shadow-[0_0_10px_#00f0ff]" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                <span>AST REPO INTELLIGENCE</span>
              </span>
              <Cpu className="w-4 h-4 text-cyan-400/70 group-hover:text-cyan-400 transition-colors" />
            </div>

            <h3 className="font-syne text-lg sm:text-xl font-black text-warm-white tracking-wider uppercase mb-2 group-hover:text-cyan-300 transition-colors">
              ARTIFICIAL INTELLIGENCE
            </h3>

            <p className="font-sans text-xs text-warm-muted leading-relaxed mb-3">
              Deterministic code intelligence via Python AST static analysis, Model Context Protocol (MCP) servers, and line-level symbol resolution.
            </p>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-warm-dark pt-2.5 border-t border-white/[0.06]">
              <span className="text-cyan-400">●</span>
              <span>Python · MCP · SQLite · PyPI Published</span>
            </div>
          </motion.div>

          {/* Card 3: USER EXPERIENCE & ARCHITECTURE */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="p-5 sm:p-6 rounded-2xl bg-charcoal-900/85 backdrop-blur-2xl border border-white/[0.09] hover:border-blue-400/40 transition-all shadow-[0_0_25px_rgba(0,102,255,0.05)] relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-500 opacity-90 shadow-[0_0_10px_#0066ff]" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-blue-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                <span>SCHEMA SYNTHESIS</span>
              </span>
              <Layout className="w-4 h-4 text-blue-400/70 group-hover:text-blue-400 transition-colors" />
            </div>

            <h3 className="font-syne text-lg sm:text-xl font-black text-warm-white tracking-wider uppercase mb-2 group-hover:text-blue-300 transition-colors">
              USER EXPERIENCE
            </h3>

            <p className="font-sans text-xs text-warm-muted leading-relaxed mb-3">
              Deterministic multi-tier software blueprints, Pydantic cross-layer validation, and interactive FastAPI architecture workbenches.
            </p>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-warm-dark pt-2.5 border-t border-white/[0.06]">
              <span className="text-blue-400">●</span>
              <span>FastAPI · Pydantic v2 · State Machines</span>
            </div>
          </motion.div>
        </div>

        {/* Center: The Core Ring Information Overlay */}
        <div className="lg:col-span-6 flex flex-col items-center justify-center text-center p-4 sm:p-6 order-1 lg:order-2">
          {/* Section Marker */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900/90 border border-white/10 mb-3 shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
            <span className="font-mono text-[10px] text-warm-white tracking-widest uppercase font-bold">
              AREAS OF EXPERTISE
            </span>
          </div>

          {/* Center Heading with Luxury Editorial Italic (Exact match to Image 1 & 3) */}
          <h2 className="text-3xl sm:text-5xl font-light text-warm-white tracking-wide mb-3">
            Areas of <span className="font-serif italic font-normal text-warm-white">Expertise</span>
          </h2>

          {/* Center Pitch */}
          <p className="font-sans text-xs sm:text-sm text-warm-cream/90 max-w-sm leading-relaxed mb-6">
            We combine deterministic AI, high-concurrency data engineering, and verifiable architectures to build software that scales reliably in production.
          </p>

          {/* Center Pill Button with Dual-Color Gradient Border (Exact match) */}
          <Magnetic strength={0.25}>
            <a
              href="#internship"
              onClick={() => sound.click()}
              className="px-7 py-3 rounded-full font-mono text-xs font-black tracking-wider gradient-border-chromatic text-warm-white hover:text-white transition-all flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>GET STARTED</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-electric-orange" />
            </a>
          </Magnetic>
        </div>

        {/* Right Column: Top-Right & Bottom-Right Professional Cards */}
        <div className="lg:col-span-3 flex flex-col gap-5 justify-between order-3">
          {/* Card 2: CREATIVE TECHNOLOGY & DATA PIPELINES */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="p-5 sm:p-6 rounded-2xl bg-charcoal-900/85 backdrop-blur-2xl border border-white/[0.09] hover:border-red-500/40 transition-all shadow-[0_0_25px_rgba(255,51,0,0.05)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-1.5 h-full bg-red-500 opacity-90 shadow-[0_0_10px_#ff1800]" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-red-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                <span>600+ SOURCE PIPELINES</span>
              </span>
              <Database className="w-4 h-4 text-red-400/70 group-hover:text-red-400 transition-colors" />
            </div>

            <h3 className="font-syne text-lg sm:text-xl font-black text-warm-white tracking-wider uppercase mb-2 group-hover:text-red-300 transition-colors">
              CREATIVE TECHNOLOGY
            </h3>

            <p className="font-sans text-xs text-warm-muted leading-relaxed mb-3">
              High-concurrency data pipelines ingesting, validating, and structuring technical data from 600+ sources using AsyncIO, Crawl4AI, and PostgreSQL.
            </p>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-warm-dark pt-2.5 border-t border-white/[0.06]">
              <span className="text-red-400">●</span>
              <span>The AI Signal / One Atlas · AsyncIO · Crawl4AI</span>
            </div>
          </motion.div>

          {/* Card 4: PRODUCT STRATEGY & COMMERCE */}
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 22 }}
            className="p-5 sm:p-6 rounded-2xl bg-charcoal-900/85 backdrop-blur-2xl border border-white/[0.09] hover:border-electric-orange/40 transition-all shadow-[0_0_25px_rgba(255,85,0,0.05)] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-1.5 h-full bg-electric-orange opacity-90 shadow-[0_0_10px_#ff5500]" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] text-electric-orange font-bold uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange" />
                <span>COMMERCE & VOICE AI</span>
              </span>
              <Network className="w-4 h-4 text-electric-orange/70 group-hover:text-electric-orange transition-colors" />
            </div>

            <h3 className="font-syne text-lg sm:text-xl font-black text-warm-white tracking-wider uppercase mb-2 group-hover:text-orange-400 transition-colors">
              PRODUCT STRATEGY
            </h3>

            <p className="font-sans text-xs text-warm-muted leading-relaxed mb-3">
              Hyperlocal commerce backends, spatial map navigation, real-time transactional inventory sync, and multilingual voice search parsing.
            </p>

            <div className="flex items-center gap-1.5 font-mono text-[10px] text-warm-dark pt-2.5 border-t border-white/[0.06]">
              <span className="text-electric-orange">●</span>
              <span>DUNDOO Platform · Flask · PostgreSQL</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
