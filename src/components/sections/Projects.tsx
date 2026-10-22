import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectCore3D } from '../3d/ProjectCore3D';
import { Terminal, Copy, Check, ArrowUpRight, GitFork, Globe } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const getColorConfig = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          hex: '#00f0ff',
          text: 'text-cyan-400',
          border: 'border-cyan-400/40',
          button: 'bg-cyan-400 text-charcoal-950 hover:bg-cyan-300 shadow-cyan-400/25',
          badge: 'border-cyan-400/30 text-cyan-300 bg-cyan-500/10',
          dot: 'bg-cyan-400',
        };
      case 'emerald':
        return {
          hex: '#10b981',
          text: 'text-emerald-400',
          border: 'border-emerald-400/40',
          button: 'bg-emerald-400 text-charcoal-950 hover:bg-emerald-300 shadow-emerald-400/25',
          badge: 'border-emerald-400/30 text-emerald-300 bg-emerald-500/10',
          dot: 'bg-emerald-400',
        };
      case 'purple':
        return {
          hex: '#a855f7',
          text: 'text-purple-400',
          border: 'border-purple-400/40',
          button: 'bg-purple-400 text-white hover:bg-purple-300 shadow-purple-400/25',
          badge: 'border-purple-400/30 text-purple-300 bg-purple-500/10',
          dot: 'bg-purple-400',
        };
      default:
        return {
          hex: '#ff5500',
          text: 'text-electric-orange',
          border: 'border-electric-orange/40',
          button: 'bg-electric-orange text-white hover:bg-electric-light shadow-electric-orange/25',
          badge: 'border-electric-orange/30 text-electric-orange bg-electric-orange/10',
          dot: 'bg-electric-orange',
        };
    }
  };

  const currentTheme = getColorConfig(activeProject.accentColor);

  const handleCopyCmd = (text: string) => {
    sound.click();
    navigator.clipboard.writeText(text);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const handleCopyClone = (repoUrl: string) => {
    sound.click();
    navigator.clipboard.writeText(`git clone ${repoUrl}.git`);
    setCopiedClone(true);
    setTimeout(() => setCopiedClone(false), 2000);
  };

  return (
    <section
      id="projects"
      className="scroll-mt-20 min-h-screen lg:h-screen lg:max-h-[920px] flex flex-col justify-between py-6 sm:py-8 lg:py-10 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden"
    >
      {/* Subtle Dynamic Ambient Aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[180px] pointer-events-none opacity-15 transition-all duration-700"
        style={{ backgroundColor: currentTheme.hex }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 my-auto flex flex-col justify-between h-full">
        {/* Header with Solid Orange Banner Element */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-3 border-b border-white/[0.08]">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-[11px] font-bold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/25 px-2.5 py-0.5 rounded">
                [ 03 / 05 ]
              </span>
              <span className="font-mono text-[11px] tracking-wider text-warm-muted uppercase">
                // RESUME VERIFIED ARSENAL
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 font-syne text-2xl sm:text-4xl font-black uppercase tracking-tight">
              <span className="text-warm-white">FLAGSHIP WEAPONS.</span>
              <span className="bg-electric-orange text-charcoal-950 px-3 py-0.5 rounded-sm inline-block shadow-lg">
                BUILT & DEPLOYED.
              </span>
            </div>
          </div>

          {/* Interactive Project Switcher Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {PROJECTS.map((proj) => {
              const isSelected = activeProjectId === proj.id;
              const theme = getColorConfig(proj.accentColor);
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    sound.click();
                    setActiveProjectId(proj.id);
                  }}
                  className={`px-3.5 py-1.5 rounded-full font-mono text-xs tracking-wider transition-all flex items-center gap-2 border ${
                    isSelected
                      ? `bg-warm-white text-charcoal-950 font-black shadow-lg scale-102 border-warm-white`
                      : 'bg-charcoal-900/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.06] border-white/[0.08]'
                  }`}
                >
                  <span className={isSelected ? 'text-charcoal-950 font-black' : theme.text}>
                    {proj.number}
                  </span>
                  <span>{proj.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Spatial HUD: Left Narrative | Center 3D Core | Right Terminal (NO bullet points!) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center my-auto py-3">
          {/* Left Column (5 Cols): Editorial Pitch & Direct Deployments */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="lg:col-span-5 flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`font-mono text-[10px] font-black uppercase tracking-wider ${currentTheme.text}`}>
                    // {activeProject.category}
                  </span>
                  <span className={`font-mono text-[10px] px-2 py-0.5 rounded font-bold border flex items-center gap-1.5 ${currentTheme.badge}`}>
                    <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: currentTheme.hex }} />
                    <span>{activeProject.deploymentStatus}</span>
                  </span>
                </div>

                <h3 className="font-syne text-3xl sm:text-4xl font-black text-warm-white tracking-tight leading-tight mb-2">
                  {activeProject.title}
                </h3>

                <p className="font-mono text-xs text-warm-cream/90 leading-relaxed mb-3">
                  {activeProject.tagline}
                </p>

                {/* Executive Architectural Synthesis (Zero bullet points!) */}
                <div className="p-4 rounded-xl bg-charcoal-900/80 border border-white/[0.08] backdrop-blur-md mb-3 shadow-xl">
                  <span className="font-mono text-[10px] text-warm-muted uppercase tracking-widest block mb-1 font-bold">
                    ARCHITECTURAL BLUEPRINT:
                  </span>
                  <p className="font-sans text-xs text-warm-white leading-relaxed">
                    {activeProject.solution}
                  </p>
                </div>

                {/* Tech Stack Chips */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-warm-cream"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                {activeProject.links.liveDemo && (
                  <Magnetic strength={0.25}>
                    <a
                      href={activeProject.links.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className={`px-5 py-2.5 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-2 shadow-xl ${currentTheme.button}`}
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{activeProject.id === 'codegraph-mcp' ? 'PYPI REGISTRY' : 'LAUNCH DEMO'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
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
                      className="px-5 py-2.5 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs font-bold tracking-wider hover:bg-white transition-all flex items-center gap-2 shadow-lg"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>REPO</span>
                    </a>
                  </Magnetic>
                )}

                {activeProject.links.github && (
                  <button
                    onClick={() => handleCopyClone(activeProject.links.github!)}
                    className="px-3.5 py-2.5 rounded-full border border-white/10 hover:border-white/25 text-warm-muted hover:text-warm-white font-mono text-xs tracking-wider transition-all flex items-center gap-1.5 bg-charcoal-900/60"
                    title="Copy git clone command"
                  >
                    {copiedClone ? <Check className="w-3 h-3 text-emerald-400" /> : <GitFork className="w-3 h-3" />}
                    <span>{copiedClone ? 'COPIED' : 'CLONE'}</span>
                  </button>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Center Column (3 Cols): Bespoke 3D Holographic Crystal Reactor */}
          <div className="lg:col-span-3 flex flex-col items-center justify-center relative">
            <div className="relative w-full aspect-square max-w-[270px] sm:max-w-[310px] mx-auto flex items-center justify-center">
              <ProjectCore3D colorHex={currentTheme.hex} />
            </div>

            {/* Floating Spatial Telemetry Pill */}
            <div className={`mt-1 px-3 py-1 rounded-full bg-charcoal-900/90 border ${currentTheme.border} backdrop-blur-xl shadow-xl flex items-center gap-2`}>
              <span className="w-1.5 h-1.5 rounded-full animate-ping" style={{ backgroundColor: currentTheme.hex }} />
              <span className="font-mono text-[10px] text-warm-white font-bold tracking-wider uppercase">
                AST TOPOLOGY MATRIX
              </span>
            </div>
          </div>

          {/* Right Column (4 Cols): Interactive Terminal & Real Telemetry */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            {activeProject.terminalSimulation && (
              <div className="rounded-xl bg-charcoal-900/90 border border-white/[0.1] overflow-hidden shadow-2xl backdrop-blur-xl">
                {/* Terminal Header */}
                <div className="px-3 py-2 bg-charcoal-950/80 border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span className="font-mono text-[10px] text-warm-muted ml-2">
                      terminal://{(activeProject.repoName || activeProject.title).toLowerCase().replace(/\s+/g, '-')}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCmd(activeProject.terminalSimulation!.command)}
                    className="p-1 rounded text-warm-muted hover:text-warm-white transition-colors"
                    title="Copy command"
                  >
                    {copiedCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-3.5 font-mono text-xs leading-relaxed space-y-2">
                  <div className="flex items-center gap-2 text-warm-white text-[11px] font-semibold">
                    <span className={currentTheme.text}>$</span>
                    <span>{activeProject.terminalSimulation.command}</span>
                  </div>

                  <div className="pt-2 border-t border-white/[0.05] space-y-1">
                    {activeProject.terminalSimulation.outputLines.map((line, idx) => (
                      <p
                        key={idx}
                        className={`font-mono text-[10px] ${
                          line.startsWith('✓')
                            ? 'text-emerald-400 font-medium'
                            : line.includes('Deterministic') || line.includes('Generated')
                            ? currentTheme.text
                            : 'text-warm-muted'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Verified Metrics Cards (Compact horizontal grid) */}
            <div className="grid grid-cols-1 gap-2">
              {activeProject.metrics.map((m, i) => (
                <div
                  key={i}
                  className="px-3.5 py-2.5 rounded-xl bg-charcoal-900/80 border border-white/[0.06] flex items-center justify-between font-mono backdrop-blur-md"
                >
                  <span className="text-[10px] text-warm-muted uppercase tracking-wider">{m.label}</span>
                  <span className={`text-xs font-bold ${m.color || 'text-warm-white'}`}>{m.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-2.5 border-t border-white/[0.06] flex items-center justify-between font-mono text-[11px] text-warm-dark">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400">●</span>
            <span className="text-warm-muted">100% REPOSITORY VERIFIED · RUNS LOCALLY OR IN DOCKER</span>
          </div>
          <span className="hidden sm:inline text-warm-dark">ARCHITECTURE ID: #RG-2026-CORE</span>
        </div>
      </div>
    </section>
  );
};
