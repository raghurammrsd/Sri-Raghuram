import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectCore3D } from '../3d/ProjectCore3D';
import { Globe, ArrowUpRight, GitFork, Check, Copy, AlertCircle, CheckCircle, Cpu, Terminal, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { TiltCard3D } from '../ui/TiltCard3D';
import { sound } from '../../utils/sound';

export const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const [copiedClone, setCopiedClone] = useState(false);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];
  const activeColorHex = '#ff5500';

  const handleCopyClone = (repoUrl: string) => {
    sound.click();
    navigator.clipboard.writeText(`git clone ${repoUrl}.git`);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  const projectTabMeta: Record<string, string> = {
    'codegraph-mcp': 'PYPI · AST GRAPH · <4ms',
    'ai-app-compiler': 'FASTAPI · COMPILER · BLUEPRINTS',
    'dundoo': 'GEOSPATIAL · FLASK · VOICE AI',
    'realmock-ai': 'LLM EVALUATION · INTERVIEW AI',
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 min-h-screen flex flex-col justify-between py-12 sm:py-16 border-b border-white/[0.08] relative bg-charcoal-950"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-electric-orange/[0.04] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Section Header */}
        <div className="pb-4 border-b border-white/[0.08]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-electric-orange animate-ping" />
                03 · FLAGSHIP WEAPONS
              </span>
              <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
                RESUME VERIFIED ARSENAL
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
              <span className="text-warm-white">FLAGSHIP ARSENAL.</span>
              <motion.span
                whileHover={{ scale: 1.02 }}
                style={{ backgroundColor: '#ff5500', color: '#000000' }}
                className="px-4 py-0.5 rounded-sm inline-block font-black shadow-2xl cursor-default"
              >
                BUILT AND DEPLOYED.
              </motion.span>
            </div>
          </motion.div>
        </div>

        {/* High-Visibility Recruiter Project Selector Deck (Bold 4-Card Responsive Grid) */}
        <div className="pt-4 pb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PROJECTS.map((proj) => {
              const isSelected = activeProjectId === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    sound.click();
                    setActiveProjectId(proj.id);
                  }}
                  className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-charcoal-900 border-electric-orange shadow-[0_0_25px_rgba(255,85,0,0.25)] ring-1 ring-electric-orange/60'
                      : 'bg-charcoal-900/60 border-white/15 hover:border-electric-orange/50 hover:bg-white/[0.05]'
                  }`}
                >
                  {/* Top Highlight Indicator Bar for Active Project */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectTopBar"
                      className="absolute top-0 left-0 right-0 h-1 bg-electric-orange shadow-[0_0_12px_#ff5500]"
                    />
                  )}

                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`font-mono text-xs font-black tracking-wider ${
                        isSelected ? 'text-electric-orange' : 'text-warm-muted group-hover:text-electric-orange'
                      }`}
                    >
                      {proj.number}
                    </span>

                    <span
                      className={`font-mono text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-electric-orange text-black font-black'
                          : 'bg-white/[0.05] border border-white/10 text-warm-muted'
                      }`}
                    >
                      {isSelected ? 'ACTIVE VIEW' : 'CLICK TO VIEW'}
                    </span>
                  </div>

                  <h4
                    className={`font-syne text-sm sm:text-base font-black tracking-tight mb-1 truncate ${
                      isSelected ? 'text-warm-white' : 'text-warm-cream group-hover:text-white'
                    }`}
                  >
                    {proj.title}
                  </h4>

                  <p className="font-mono text-[10px] text-warm-muted truncate">
                    {projectTabMeta[proj.id] || proj.category}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* 12-Column Case Study: Left Narrative | Right 3D Reactor & Architecture Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center my-auto py-4 sm:py-6">
          {/* Left Column (7 Cols): The Architectural Reality */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: -30, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 flex flex-col justify-between space-y-4 sm:space-y-5"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-electric-orange">
                    {activeProject.category}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {activeProject.deploymentStatus}
                  </span>
                </div>

                <h3 className="font-syne text-3xl sm:text-4xl font-black text-electric-orange tracking-tight leading-tight mb-3">
                  {activeProject.title}
                </h3>

                <p className="font-sans text-sm text-warm-cream/90 leading-relaxed mb-5">
                  {activeProject.tagline}
                </p>

                {/* 3D Hardware Accelerated Bottleneck & Solution Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
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
                      {activeProject.challenge}
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
                      {activeProject.solution}
                    </p>
                  </TiltCard3D>
                </div>

                {/* Tech Stack Chips with Dynamic Hover Lift */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {activeProject.techStack.map((tech) => (
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

              {/* Prominent High-Visibility Recruiter Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-white/[0.08]">
                {activeProject.links.liveDemo && (
                  <Magnetic strength={0.25}>
                    <a
                      href={activeProject.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className="px-6 py-3.5 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-2 bg-electric-orange text-charcoal-950 hover:bg-white hover:text-charcoal-950 shadow-xl shadow-electric-orange/25 hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <Globe className="w-4 h-4 stroke-[2.5]" />
                      <span className="font-black">
                        {activeProject.id === 'codegraph-mcp' ? 'VIEW ON PYPI REGISTRY' : 'LAUNCH LIVE DEMO'}
                      </span>
                      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                    </a>
                  </Magnetic>
                )}

                {activeProject.links.github && (
                  <Magnetic strength={0.25}>
                    <a
                      href={activeProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className="px-6 py-3.5 rounded-full bg-charcoal-900/90 hover:bg-white/[0.1] border border-white/20 hover:border-white/40 text-warm-white font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-2 hover:scale-105 active:scale-95"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GITHUB REPOSITORY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-warm-muted" />
                    </a>
                  </Magnetic>
                )}

                {activeProject.links.github && (
                  <button
                    onClick={() => handleCopyClone(activeProject.links.github!)}
                    className="px-4 py-3.5 rounded-full border border-white/10 hover:border-white/25 text-warm-muted hover:text-warm-white font-mono text-xs tracking-wider transition-all flex items-center gap-2 bg-charcoal-900/60 hover:scale-105 active:scale-95 cursor-pointer"
                    title="Copy git clone command"
                  >
                    {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <GitFork className="w-3.5 h-3.5 text-electric-orange" />}
                    <span>{copiedClone ? 'COPIED TO CLIPBOARD' : 'GIT CLONE'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Column (5 Cols): Bespoke 3D Holographic Core & Verified Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between space-y-4"
          >
            {/* 3D Geometry Reactor Frame (Clean without distracting text) */}
            <div className="relative w-full aspect-video max-h-[220px] rounded-2xl bg-charcoal-900/60 border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl">
              <ProjectCore3D colorHex={activeColorHex} />
            </div>

            {/* Architecture Metrics Grid with Staggered Entrance */}
            <div className="grid grid-cols-1 gap-2.5">
              {activeProject.metrics.map((m, i) => (
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
            <span className="text-warm-muted">100% REPOSITORY VERIFIED · RUNS LOCALLY OR IN CONTAINER</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">ARCHITECTURE ID: #RG-2026-CORE</span>
        </div>
      </div>
    </section>
  );
};
