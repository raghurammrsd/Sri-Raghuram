import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { Terminal, Copy, Check, ArrowUpRight, GitFork, Globe } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Projects: React.FC = () => {
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

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
    <section id="projects" className="scroll-mt-20 py-16 sm:py-24 border-b border-white/[0.08] relative bg-charcoal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 03 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // RESUME VERIFIED ARSENAL & DEPLOYMENTS
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-4">
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-warm-white uppercase leading-[0.96]">
            Flagship weapons.
            <br />
            <span className="text-electric-orange">Built and deployed.</span>
          </h2>
        </div>

        <p className="max-w-2xl font-sans text-warm-muted text-sm sm:text-base mb-8">
          Direct repositories, PyPI packages, and live architecture workbenches straight from my resume.
        </p>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8 pb-3 border-b border-white/[0.08]">
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                sound.click();
                setActiveProjectId(proj.id);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2.5 ${
                activeProjectId === proj.id
                  ? 'bg-warm-white text-charcoal-950 font-black shadow-lg scale-102'
                  : 'bg-charcoal-850/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              <span className="text-electric-orange font-bold">[{proj.number}]</span>
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Active Project Case Study Layout — Perfectly Proportioned */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-charcoal-850/90 border border-white/[0.1] rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl"
          >
            {/* Left Column: Case Study Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="font-mono text-xs tracking-widest text-electric-orange font-black uppercase">
                    // {activeProject.category}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>{activeProject.deploymentStatus}</span>
                  </span>
                </div>

                <h3 className="font-syne text-2xl sm:text-4xl font-black text-warm-white mb-2">
                  {activeProject.title}
                </h3>

                <p className="font-mono text-xs text-warm-muted mb-5 leading-relaxed">
                  {activeProject.tagline}
                </p>

                {/* Challenge & Solution Grid */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm leading-relaxed">
                  <div className="p-4 rounded-xl bg-charcoal-950/80 border border-white/[0.06]">
                    <span className="font-mono text-xs text-electric-orange uppercase tracking-wider block mb-1 font-bold">
                      THE ARCHITECTURAL BOTTLENECK:
                    </span>
                    <p className="text-warm-muted font-sans">{activeProject.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-950/80 border border-white/[0.06]">
                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block mb-1 font-bold">
                      THE VERIFIED SOLUTION:
                    </span>
                    <p className="text-warm-cream font-sans">{activeProject.solution}</p>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-xs text-warm-muted uppercase tracking-wider block font-bold">
                    KEY VERIFIED CAPABILITIES:
                  </span>
                  {activeProject.architectureHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-warm-white/90">
                      <span className="text-electric-orange mt-0.5">✦</span>
                      <span className="font-sans">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Links */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-warm-cream"
                    >
                      {tech}
                    </span>
                  ))}
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
                        className="px-5 py-2.5 rounded-full bg-electric-orange text-white font-mono text-xs font-black tracking-wider hover:bg-electric-light transition-all flex items-center gap-2 shadow-lg shadow-electric-orange/20"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>
                          {activeProject.id === 'codegraph-mcp' ? 'VIEW ON PYPI REGISTRY' : 'LAUNCH LIVE DEMO'}
                        </span>
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
                        className="px-5 py-2.5 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs font-bold tracking-wider hover:bg-white transition-all flex items-center gap-2 shadow-md"
                      >
                        <GithubIcon className="w-3.5 h-3.5" />
                        <span>GITHUB REPO</span>
                      </a>
                    </Magnetic>
                  )}

                  {activeProject.links.github && (
                    <button
                      onClick={() => handleCopyClone(activeProject.links.github!)}
                      className="px-3.5 py-2.5 rounded-full border border-white/10 hover:border-white/25 text-warm-muted hover:text-warm-white font-mono text-xs tracking-wider transition-all flex items-center gap-1.5"
                      title="Copy git clone command"
                    >
                      {copiedClone ? <Check className="w-3 h-3 text-emerald-400" /> : <GitFork className="w-3 h-3" />}
                      <span>{copiedClone ? 'COPIED' : 'GIT CLONE'}</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Simulation & Real Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {activeProject.terminalSimulation ? (
                <div className="rounded-xl bg-charcoal-950 border border-white/[0.1] overflow-hidden shadow-xl">
                  {/* Terminal Header */}
                  <div className="px-3.5 py-2.5 bg-charcoal-900 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                      <span className="font-mono text-[10px] text-warm-muted ml-2">
                        terminal://{(activeProject.repoName || activeProject.title).toLowerCase()}
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
                  <div className="p-4 font-mono text-xs leading-relaxed space-y-2">
                    <div className="flex items-center gap-2 text-electric-orange text-[11px]">
                      <span className="text-warm-dark">$</span>
                      <span className="text-warm-white font-semibold">
                        {activeProject.terminalSimulation.command}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/[0.05] space-y-1">
                      {activeProject.terminalSimulation.outputLines.map((line, idx) => (
                        <p
                          key={idx}
                          className={`font-mono text-[10px] ${
                            line.startsWith('✓')
                              ? 'text-emerald-400 font-medium'
                              : line.includes('100% Deterministic')
                              ? 'text-electric-orange font-bold'
                              : 'text-warm-muted'
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-1 gap-2.5 mt-3">
                {activeProject.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-lg bg-charcoal-950/80 border border-white/[0.06] flex items-center justify-between font-mono">
                    <span className="text-[11px] text-warm-muted uppercase">{m.label}</span>
                    <span className={`text-xs font-bold ${m.color || 'text-warm-white'}`}>{m.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
