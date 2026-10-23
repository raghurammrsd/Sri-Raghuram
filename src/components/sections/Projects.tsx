import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectCore3D } from '../3d/ProjectCore3D';
import { Globe, ArrowUpRight, GitFork, Check, Copy } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
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

  return (
    <section
      id="projects"
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
                03 · FLAGSHIP WEAPONS
              </span>
              <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
                RESUME VERIFIED ARSENAL
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-3 font-syne text-3xl sm:text-5xl font-black uppercase tracking-tight leading-tight">
              <span className="text-warm-white">FLAGSHIP ARSENAL.</span>
              <span
                style={{ backgroundColor: '#ff5500', color: '#000000' }}
                className="px-4 py-0.5 rounded-sm inline-block font-black shadow-xl"
              >
                BUILT AND DEPLOYED.
              </span>
            </div>
          </div>

          {/* Project Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {PROJECTS.map((proj) => {
              const isSelected = activeProjectId === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    sound.click();
                    setActiveProjectId(proj.id);
                  }}
                  className={`px-4 py-2 rounded-full font-mono text-xs tracking-wider transition-all flex items-center gap-2 border ${
                    isSelected
                      ? 'bg-warm-white text-charcoal-950 font-black shadow-lg border-warm-white'
                      : 'bg-charcoal-900/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.06] border-white/[0.08]'
                  }`}
                >
                  <span className={isSelected ? 'text-charcoal-950 font-black' : 'text-electric-orange'}>
                    {proj.number}
                  </span>
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 12-Column Case Study: Left Narrative | Right 3D Reactor & Architecture Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center my-auto py-6">
          {/* Left Column (7 Cols): The Architectural Reality */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:col-span-7 flex flex-col justify-between space-y-5"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-electric-orange">
                    {activeProject.category}
                  </span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-bold">
                    {activeProject.deploymentStatus}
                  </span>
                </div>

                <h3 className="font-syne text-3xl sm:text-4xl font-black text-electric-orange tracking-tight leading-tight mb-3">
                  {activeProject.title}
                </h3>

                <p className="font-sans text-sm text-warm-cream/90 leading-relaxed mb-6">
                  {activeProject.tagline}
                </p>

                {/* Challenge & Solution Architecture Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl">
                    <span className="font-mono text-[10px] text-warm-muted uppercase tracking-widest block mb-1.5 font-bold">
                      THE ARCHITECTURAL BOTTLENECK:
                    </span>
                    <p className="font-sans text-xs text-warm-cream/80 leading-relaxed">
                      {activeProject.challenge}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-xl">
                    <span className="font-mono text-[10px] text-electric-orange uppercase tracking-widest block mb-1.5 font-bold">
                      THE ENGINEERED SOLUTION:
                    </span>
                    <p className="font-sans text-xs text-warm-cream leading-relaxed">
                      {activeProject.solution}
                    </p>
                  </div>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.techStack.map((tech) => (
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
                {activeProject.links.liveDemo && (
                  <Magnetic strength={0.25}>
                    <a
                      href={activeProject.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className="px-6 py-3 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-2 bg-electric-orange text-white hover:bg-electric-light shadow-xl shadow-electric-orange/20"
                    >
                      <Globe className="w-4 h-4" />
                      <span>{activeProject.id === 'codegraph-mcp' ? 'VIEW ON PYPI REGISTRY' : 'LAUNCH LIVE DEMO'}</span>
                      <ArrowUpRight className="w-4 h-4" />
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
                      className="px-6 py-3 rounded-full bg-charcoal-900/90 hover:bg-white/[0.08] border border-white/10 text-warm-white font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-2"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>VIEW REPOSITORY</span>
                    </a>
                  </Magnetic>
                )}

                {activeProject.links.github && (
                  <button
                    onClick={() => handleCopyClone(activeProject.links.github!)}
                    className="px-4 py-3 rounded-full border border-white/10 hover:border-white/20 text-warm-muted hover:text-warm-white font-mono text-xs tracking-wider transition-all flex items-center gap-2 bg-charcoal-900/60"
                    title="Copy git clone command"
                  >
                    {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <GitFork className="w-3.5 h-3.5" />}
                    <span>{copiedClone ? 'COPIED TO CLIPBOARD' : 'GIT CLONE'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Right Column (5 Cols): Bespoke 3D Holographic Core & Verified Specifications */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            {/* Real Interactive 3D Reactor */}
            <div className="relative w-full aspect-video max-h-[220px] rounded-2xl bg-charcoal-900/50 border border-white/[0.08] flex items-center justify-center overflow-hidden">
              <ProjectCore3D colorHex={activeColorHex} />
            </div>

            {/* Architecture Metrics Grid */}
            <div className="grid grid-cols-1 gap-2.5">
              {activeProject.metrics.map((m, i) => (
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
            <span className="text-warm-muted">100% REPOSITORY VERIFIED · RUNS LOCALLY OR IN CONTAINER</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">ARCHITECTURE ID: #RG-2026-CORE</span>
        </div>
      </div>
    </section>
  );
};
