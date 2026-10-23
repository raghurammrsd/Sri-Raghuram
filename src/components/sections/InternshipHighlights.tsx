import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTERNSHIP_PROJECTS } from '../../data/portfolioData';
import { Globe, ArrowUpRight, Cpu, Database, Network, CheckCircle2, Layers } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const InternshipHighlights: React.FC = () => {
  const [activeSystemId, setActiveSystemId] = useState(INTERNSHIP_PROJECTS[0].id);

  const activeSystem = INTERNSHIP_PROJECTS.find((p) => p.id === activeSystemId) || INTERNSHIP_PROJECTS[0];

  return (
    <section
      id="internship"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-8 sm:py-12 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-white/[0.08]"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded">
                02 · PRODUCTION SYSTEMS
              </span>
              <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
                THE AI SIGNAL & FRONTIER ATLAS
              </span>
            </div>
            <h2 className="font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight text-warm-white leading-tight">
              Production pipelines. <span className="text-electric-orange">Scaled to 600+ sources.</span>
            </h2>
          </div>

          {/* System Selector Switcher */}
          <div className="flex flex-wrap items-center gap-2">
            {INTERNSHIP_PROJECTS.map((system) => {
              const isSelected = activeSystemId === system.id;
              return (
                <button
                  key={system.id}
                  onClick={() => {
                    sound.click();
                    setActiveSystemId(system.id);
                  }}
                  className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-warm-white text-charcoal-950 font-black shadow-lg border-warm-white'
                      : 'bg-charcoal-900/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.06] border-white/[0.08]'
                  }`}
                >
                  <span className={isSelected ? 'text-charcoal-950 font-black' : 'text-electric-orange'}>
                    {system.number}
                  </span>
                  <span>{system.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Executive Case Study: Left Narrative | Right Architecture Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          {/* Left Column (7 Cols): The Engineering Reality */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSystem.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-electric-orange">
                    {activeSystem.category}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-electric-orange/10 border border-electric-orange/25 text-electric-orange font-bold">
                    {activeSystem.deploymentStatus}
                  </span>
                </div>

                <h3 className="font-syne text-3xl sm:text-4xl font-black text-electric-orange tracking-tight leading-tight mb-3">
                  {activeSystem.title}
                </h3>

                <p className="font-sans text-sm text-warm-cream/90 leading-relaxed mb-6">
                  {activeSystem.summary}
                </p>

                {/* Challenge & Solution Architecture Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl">
                    <span className="font-mono text-[10px] text-warm-muted uppercase tracking-widest block mb-1.5 font-bold">
                      THE ARCHITECTURAL BOTTLENECK:
                    </span>
                    <p className="font-sans text-xs text-warm-cream/80 leading-relaxed">
                      {activeSystem.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl">
                    <span className="font-mono text-[10px] text-electric-orange uppercase tracking-widest block mb-1.5 font-bold">
                      THE ENGINEERED SOLUTION:
                    </span>
                    <p className="font-sans text-xs text-warm-cream leading-relaxed">
                      {activeSystem.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeSystem.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-warm-cream"
                    >
                      {tech}
                    </span>
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
                      className="px-6 py-3 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-2 bg-electric-orange text-white hover:bg-electric-light shadow-xl shadow-electric-orange/20"
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
                    className="px-6 py-3 rounded-full bg-charcoal-900/90 hover:bg-white/[0.08] border border-white/10 text-warm-white font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>VIEW REPOSITORY</span>
                  </a>
                </Magnetic>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Column (5 Cols): Real Architecture Pipeline Flow & Production Telemetry */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* System Architecture Flow Diagram (No fake terminal!) */}
            <div className="p-6 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl shadow-2xl space-y-4">
              <span className="font-mono text-[10px] text-warm-muted uppercase tracking-widest block font-bold">
                VERIFIED ARCHITECTURAL PIPELINE:
              </span>

              <div className="space-y-3 font-mono text-xs">
                {/* Pipeline Step 1 */}
                <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-electric-orange" />
                    <span className="text-warm-white font-bold">01 · High-Concurrency Crawlers</span>
                  </div>
                  <span className="text-[10px] text-warm-muted">AsyncIO / Crawl4AI</span>
                </div>

                {/* Pipeline Step 2 */}
                <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-warm-white" />
                    <span className="text-warm-white font-bold">02 · Multi-Model Extraction</span>
                  </div>
                  <span className="text-[10px] text-warm-muted">Groq & Gemini JSON</span>
                </div>

                {/* Pipeline Step 3 */}
                <div className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-electric-orange" />
                    <span className="text-warm-white font-bold">03 · Persistent Storage</span>
                  </div>
                  <span className="text-[10px] text-warm-muted">PostgreSQL ACID</span>
                </div>
              </div>
            </div>

            {/* Production Telemetry Grid */}
            <div className="grid grid-cols-1 gap-2.5">
              {activeSystem.metrics.map((m, i) => (
                <div
                  key={i}
                  className="px-5 py-3.5 rounded-xl bg-charcoal-900/60 border border-white/[0.06] flex items-center justify-between font-mono"
                >
                  <span className="text-[11px] text-warm-muted uppercase tracking-wider">{m.label}</span>
                  <span className="text-xs font-bold text-warm-white">{m.value}</span>
                </div>
              ))}
            </div>
          </div>
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
