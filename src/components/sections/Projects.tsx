import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ExternalLink, Terminal, Copy, Check, ArrowUpRight, Code2, GitFork } from 'lucide-react';
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
    <section id="projects" className="py-24 sm:py-32 border-b border-white/[0.06] relative bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-electric-orange bg-electric-orange/10 border border-electric-orange/20 px-3 py-1 rounded">
            [ 02 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // RESUME VERIFIED ARSENAL
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-12">
          <h2 className="text-4xl sm:text-6xl font-black tracking-[-0.04em] text-warm-white uppercase leading-[0.98]">
            Architected to solve
            <br />
            <span className="text-electric-orange">real bottlenecks.</span>
          </h2>
          <p className="font-mono text-warm-muted text-xs sm:text-sm mt-3">
            Direct repositories, evidence-backed architectures, and production-tested systems from my resume.
          </p>
        </div>

        {/* Project Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-12 pb-4 border-b border-white/[0.08]">
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => {
                sound.click();
                setActiveProjectId(proj.id);
              }}
              className={`px-5 py-3 rounded-full font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2.5 ${
                activeProjectId === proj.id
                  ? 'bg-warm-white text-charcoal-950 font-bold shadow-lg'
                  : 'bg-charcoal-850/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.08] border border-white/5'
              }`}
            >
              <span>[{proj.number}]</span>
              <span>{proj.title}</span>
            </button>
          ))}
        </div>

        {/* Active Project Case Study Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-charcoal-850/80 border border-white/[0.08] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden"
          >
            {/* Left Column: Case Study Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="font-mono text-xs tracking-widest text-electric-orange font-bold uppercase">
                    // {activeProject.category}
                  </span>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-warm-muted border border-white/10">
                    repo: {activeProject.repoName}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black text-warm-white mb-3">
                  {activeProject.title}
                </h3>

                <p className="font-mono text-xs sm:text-sm text-warm-muted mb-8 leading-relaxed">
                  {activeProject.tagline}
                </p>

                {/* Challenge & Solution Grid */}
                <div className="space-y-4 mb-8 text-sm sm:text-base leading-relaxed">
                  <div className="p-4 rounded-xl bg-charcoal-950/70 border border-white/[0.05]">
                    <span className="font-mono text-xs text-electric-orange uppercase tracking-wider block mb-1 font-bold">
                      THE ARCHITECTURAL BOTTLENECK:
                    </span>
                    <p className="text-warm-muted text-sm">{activeProject.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-950/70 border border-white/[0.05]">
                    <span className="font-mono text-xs text-emerald-400 uppercase tracking-wider block mb-1 font-bold">
                      THE VERIFIED SOLUTION:
                    </span>
                    <p className="text-warm-cream text-sm">{activeProject.solution}</p>
                  </div>
                </div>

                {/* Architecture Highlights */}
                <div className="space-y-2 mb-8">
                  <span className="font-mono text-xs text-warm-muted uppercase tracking-wider block">
                    KEY VERIFIED CAPABILITIES:
                  </span>
                  {activeProject.architectureHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-warm-white/90">
                      <span className="text-electric-orange mt-0.5">✦</span>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-white/[0.06]">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.07] text-warm-cream"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  {/* Direct GitHub Link */}
                  <Magnetic strength={0.25}>
                    <a
                      href={activeProject.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className="px-6 py-3 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs font-bold tracking-wider hover:bg-electric-orange hover:text-white transition-all flex items-center gap-2 shadow-lg"
                      data-cursor-text="REPO"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GITHUB REPO →</span>
                    </a>
                  </Magnetic>

                  {/* PyPI Link if available */}
                  {activeProject.links.pypi && (
                    <Magnetic strength={0.25}>
                      <a
                        href={activeProject.links.pypi}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className="px-5 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] text-warm-white font-mono text-xs tracking-wider transition-all flex items-center gap-1.5"
                        data-cursor-text="PYPI"
                      >
                        <span>PYPI PACKAGE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-warm-muted" />
                      </a>
                    </Magnetic>
                  )}

                  {/* Copy Clone Command */}
                  <button
                    onClick={() => handleCopyClone(activeProject.links.github)}
                    className="px-4 py-3 rounded-full border border-white/10 hover:border-white/25 text-warm-muted hover:text-warm-white font-mono text-xs tracking-wider transition-all flex items-center gap-1.5"
                    title="Copy git clone command"
                  >
                    {copiedClone ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <GitFork className="w-3.5 h-3.5" />}
                    <span>{copiedClone ? 'CLONE COMMAND COPIED' : 'COPY GIT CLONE'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Simulation & Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {activeProject.terminalSimulation ? (
                <div className="rounded-2xl bg-charcoal-950 border border-white/[0.1] overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="px-4 py-3 bg-charcoal-900 border-b border-white/[0.06] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                      <span className="font-mono text-[11px] text-warm-muted ml-2">
                        terminal://{activeProject.repoName.toLowerCase()}
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyCmd(activeProject.terminalSimulation!.command)}
                      className="p-1 rounded text-warm-muted hover:text-warm-white transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-5 font-mono text-xs leading-relaxed space-y-3">
                    <div className="flex items-center gap-2 text-electric-orange">
                      <span className="text-warm-dark">$</span>
                      <span className="text-warm-white font-semibold">
                        {activeProject.terminalSimulation.command}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/[0.05] space-y-1.5">
                      {activeProject.terminalSimulation.outputLines.map((line, idx) => (
                        <p
                          key={idx}
                          className={`font-mono text-[11px] ${
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
              <div className="grid grid-cols-1 gap-2.5 mt-4">
                {activeProject.metrics.map((m, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-charcoal-950/80 border border-white/[0.06] flex items-center justify-between font-mono">
                    <span className="text-[11px] text-warm-muted uppercase">{m.label}</span>
                    <span className="text-xs text-warm-white font-bold">{m.value}</span>
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
