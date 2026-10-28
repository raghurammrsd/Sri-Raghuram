import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTERNSHIP_PROJECTS } from '../../data/portfolioData';
import { Globe, ArrowUpRight, Cpu, Database, Network, ArrowRight, Layers, Activity, Sparkles, AlertCircle, CheckCircle } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { TiltCard3D } from '../ui/TiltCard3D';
import { InteractivePipelineVisualizer } from '../ui/InteractivePipelineVisualizer';
import { sound } from '../../utils/sound';

export const InternshipHighlights: React.FC = () => {
  const [activeSystemId, setActiveSystemId] = useState(INTERNSHIP_PROJECTS[0].id);

  const activeSystem = INTERNSHIP_PROJECTS.find((p) => p.id === activeSystemId) || INTERNSHIP_PROJECTS[0];

  return (
    <section
      id="internship"
      className="scroll-mt-20 min-h-screen flex flex-col justify-between py-10 sm:py-14 border-b border-white/[0.08] relative bg-transparent"
    >
      {/* Dynamic Ambient Glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-electric-orange/[0.045] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between space-y-6">
        {/* Section Header with Staggered Kinetic Typography */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
                02 · PRODUCTION SYSTEMS
              </span>
              <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
                THE AI SIGNAL & FRONTIER ATLAS
              </span>
            </div>

            <h2 className="font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight text-warm-white">
              Production Pipelines. <span className="text-electric-orange">Scaled to 600+ Sources.</span>
            </h2>
          </motion.div>

          {/* System Selector Switcher with Animated Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-2"
          >
            {INTERNSHIP_PROJECTS.map((system) => {
              const isSelected = activeSystemId === system.id;
              return (
                <button
                  key={system.id}
                  onClick={() => {
                    sound.click();
                    setActiveSystemId(system.id);
                  }}
                  className={`relative px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'text-charcoal-950 font-black border-warm-white'
                      : 'bg-charcoal-900/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.06] border-white/[0.08]'
                  }`}
                >
                  {isSelected && (
                    <motion.span
                      layoutId="internshipActivePill"
                      className="absolute inset-0 bg-warm-white rounded-full -z-10 shadow-lg"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={isSelected ? 'text-charcoal-950 font-black' : 'text-electric-orange'}>
                    {system.number}
                  </span>
                  <span>{system.title}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* Executive Case Study: Left Narrative (3D Tilt Cards) | Right Interactive Visualizer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-2 pb-4">
          {/* Left Column (7 Cols): The Engineering Reality */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystem.id}
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-electric-orange">
                    {activeSystem.category}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-electric-orange/10 border border-electric-orange/25 text-electric-orange font-bold flex items-center gap-1.5">
                    <Activity className="w-3 h-3 animate-pulse" />
                    {activeSystem.deploymentStatus}
                  </span>
                </div>

                <h3 className="font-syne text-3xl sm:text-4xl font-black text-warm-white tracking-tight leading-tight mb-3">
                  {activeSystem.title}
                </h3>

                <p className="font-sans text-sm text-warm-cream/90 leading-relaxed mb-6">
                  {activeSystem.summary}
                </p>

                {/* 3D Hardware Accelerated Bottleneck & Solution Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <TiltCard3D
                    glowColor="#ffffff"
                    className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/10 hover:border-white/30 backdrop-blur-xl shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <AlertCircle className="w-3.5 h-3.5 text-warm-muted" />
                      <span className="font-mono text-[10px] text-warm-muted uppercase tracking-widest font-bold">
                        THE ARCHITECTURAL BOTTLENECK:
                      </span>
                    </div>
                    <p className="font-sans text-xs text-warm-cream/80 leading-relaxed">
                      {activeSystem.challenge}
                    </p>
                  </TiltCard3D>

                  <TiltCard3D
                    glowColor="#ff5500"
                    className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/10 hover:border-electric-orange/50 backdrop-blur-xl shadow-xl transition-all"
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <CheckCircle className="w-3.5 h-3.5 text-electric-orange" />
                      <span className="font-mono text-[10px] text-electric-orange uppercase tracking-widest font-bold">
                        THE ENGINEERED SOLUTION:
                      </span>
                    </div>
                    <p className="font-sans text-xs text-warm-cream leading-relaxed">
                      {activeSystem.solution}
                    </p>
                  </TiltCard3D>
                </div>

                {/* Tech Stack Chips with Dynamic Hover Lift */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeSystem.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ y: -2, scale: 1.05 }}
                      className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-warm-cream hover:border-electric-orange/50 hover:text-white transition-all cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div className="flex flex-wrap items-center gap-3">
                {activeSystem.links.liveDemo && (
                  <Magnetic strength={0.25}>
                    <a
                      href={activeSystem.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className="px-6 py-3 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-2 bg-electric-orange text-white hover:scale-105 active:scale-95 shadow-xl shadow-electric-orange/20"
                    >
                      <Globe className="w-4 h-4" />
                      <span>LAUNCH PLATFORM</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </Magnetic>
                )}

                <Magnetic strength={0.25}>
                  <a
                    href={activeSystem.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => sound.click()}
                    className="px-6 py-3 rounded-full bg-charcoal-900/90 hover:bg-white/[0.08] border border-white/10 text-warm-white font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW REPOSITORY</span>
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Column (5 Cols): Real Interactive Holographic Pipeline Reactor */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* The Live Laser Pipeline Visualizer */}
            <InteractivePipelineVisualizer systemId={activeSystem.id} />

            {/* Production Telemetry Grid with Animated Gauges */}
            <div className="grid grid-cols-1 gap-2.5">
              {activeSystem.metrics.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="px-5 py-3 rounded-xl bg-charcoal-900/70 border border-white/[0.08] hover:border-electric-orange/40 transition-all flex items-center justify-between font-mono shadow-lg group"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-electric-orange group-hover:animate-ping" />
                    <span className="text-[11px] text-warm-muted uppercase tracking-wider">{m.label}</span>
                  </div>
                  <span className="text-xs font-black text-warm-white group-hover:text-electric-orange transition-colors">
                    {m.value}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div className="flex items-center gap-2">
            <span className="text-electric-orange">●</span>
            <span className="text-warm-muted">DEPLOYED AT THE AI SIGNAL / ONE ATLAS · FRONTIER ATLAS PLATFORM</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">600+ VERIFIED INGESTION SOURCES</span>
        </div>
      </div>
    </section>
  );
};
