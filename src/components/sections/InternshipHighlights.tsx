import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { INTERNSHIP_PROJECTS } from '../../data/portfolioData';
import { Globe, Terminal, Copy, Check, ArrowUpRight, GitFork, ShieldCheck, Database, Cpu, Sparkles } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const InternshipHighlights: React.FC = () => {
  const [activeSystemId, setActiveSystemId] = useState(INTERNSHIP_PROJECTS[0].id);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [copiedClone, setCopiedClone] = useState(false);

  const activeSystem = INTERNSHIP_PROJECTS.find((p) => p.id === activeSystemId) || INTERNSHIP_PROJECTS[0];

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

  // Dynamic accent color classes
  const getAccentStyles = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          text: 'text-cyan-400',
          badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
          button: 'bg-cyan-500 hover:bg-cyan-400 text-charcoal-950 shadow-cyan-500/25',
          border: 'border-cyan-500/40',
        };
      case 'emerald':
        return {
          text: 'text-emerald-400',
          badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          button: 'bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 shadow-emerald-500/25',
          border: 'border-emerald-500/40',
        };
      case 'amber':
        return {
          text: 'text-amber-400',
          badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
          button: 'bg-amber-500 hover:bg-amber-400 text-charcoal-950 shadow-amber-500/25',
          border: 'border-amber-500/40',
        };
      default:
        return {
          text: 'text-electric-orange',
          badge: 'bg-electric-orange/10 border-electric-orange/30 text-electric-orange',
          button: 'bg-electric-orange hover:bg-electric-light text-white shadow-electric-orange/25',
          border: 'border-electric-orange/40',
        };
    }
  };

  const accents = getAccentStyles(activeSystem.accentColor);

  return (
    <section id="internship" className="py-24 sm:py-36 border-b border-white/[0.08] relative bg-charcoal-900/60 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.04] rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded">
            [ 02 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // INTERNSHIP PRODUCTION SYSTEMS (THE AI SIGNAL & FRONTIER ATLAS)
          </span>
        </div>

        {/* Section Headline with Radiant Color Gradient */}
        <div className="max-w-5xl mb-6">
          <h2 className="font-syne text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-warm-white uppercase leading-[0.96]">
            Production pipelines.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Scaled to 600+ sources.
            </span>
          </h2>
        </div>

        <p className="max-w-3xl font-sans text-warm-muted text-base sm:text-xl font-normal leading-relaxed mb-14">
          Verified production engineering from my internship at <strong className="text-cyan-300 font-bold">The AI Signal / One Atlas</strong> and my founding work at <strong className="text-electric-orange font-bold">Frontier Atlas</strong>. Built with the same rigor, live deployment endpoints, and architectural depth as my flagship open-source repos.
        </p>

        {/* System Selector Pills (Identical interactive style as Projects!) */}
        <div className="flex flex-wrap gap-3 mb-12 pb-4 border-b border-white/[0.08]">
          {INTERNSHIP_PROJECTS.map((system) => {
            const isSelected = activeSystemId === system.id;
            return (
              <button
                key={system.id}
                onClick={() => {
                  sound.click();
                  setActiveSystemId(system.id);
                }}
                className={`px-6 py-3.5 rounded-full font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-3 ${
                  isSelected
                    ? 'bg-warm-white text-charcoal-950 font-black shadow-2xl scale-105'
                    : 'bg-charcoal-850/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                <span className="text-cyan-400 font-bold">[{system.number}]</span>
                <span>{system.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active System Case Study Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSystem.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 bg-charcoal-850/90 border ${accents.border} rounded-3xl p-6 sm:p-10 lg:p-14 relative overflow-hidden shadow-2xl`}
          >
            {/* Left Column: Narrative & Technical Depth */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className={`font-mono text-xs tracking-widest font-black uppercase ${accents.text}`}>
                    // {activeSystem.category}
                  </span>
                  <span className={`font-mono text-xs px-2.5 py-1 rounded font-semibold flex items-center gap-1.5 ${accents.badge}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>{activeSystem.deploymentStatus}</span>
                  </span>
                  <span className="font-mono text-[11px] text-warm-muted px-2 py-0.5 rounded bg-white/[0.04]">
                    {activeSystem.repoName}
                  </span>
                </div>

                <h3 className="font-syne text-3xl sm:text-5xl font-black text-warm-white mb-3">
                  {activeSystem.title}
                </h3>

                <p className="font-mono text-xs sm:text-sm text-warm-muted mb-8 leading-relaxed">
                  {activeSystem.tagline}
                </p>

                {/* Challenge & Solution Grid */}
                <div className="space-y-4 mb-8 text-sm sm:text-base leading-relaxed">
                  <div className="p-5 rounded-2xl bg-charcoal-950/80 border border-white/[0.06]">
                    <span className="font-mono text-xs text-electric-orange uppercase tracking-wider block mb-1 font-bold">
                      THE PRODUCTION BOTTLENECK:
                    </span>
                    <p className="text-warm-muted text-sm font-sans">{activeSystem.challenge}</p>
                  </div>

                  <div className="p-5 rounded-2xl bg-charcoal-950/80 border border-white/[0.06]">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                      THE ARCHITECTURAL SOLUTION:
                    </span>
                    <p className="text-warm-cream text-sm font-sans">{activeSystem.solution}</p>
                  </div>
                </div>

                {/* Key Verified Capabilities */}
                <div className="space-y-2 mb-8">
                  <span className="font-mono text-xs text-warm-muted uppercase tracking-wider block font-bold">
                    VERIFIED PRODUCTION DELIVERABLES:
                  </span>
                  {activeSystem.architectureHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-warm-white/90">
                      <span className="text-cyan-400 mt-0.5">✦</span>
                      <span className="font-sans">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Direct Links */}
              <div>
                <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-white/[0.06]">
                  {activeSystem.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-warm-cream font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                  {/* Live Platform Link */}
                  {activeSystem.links.liveDemo && (
                    <Magnetic strength={0.3}>
                      <a
                        href={activeSystem.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className={`px-6 py-3.5 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-2 shadow-xl ${accents.button}`}
                        data-cursor-text="VISIT"
                      >
                        <Globe className="w-4 h-4" />
                        <span>LAUNCH PRODUCTION PLATFORM</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </Magnetic>
                  )}

                  {/* GitHub Repo */}
                  <Magnetic strength={0.25}>
                    <a
                      href={activeSystem.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className="px-6 py-3.5 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs font-bold tracking-wider hover:bg-white transition-all flex items-center gap-2 shadow-lg"
                      data-cursor-text="CODE"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>GITHUB REPO</span>
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Simulation & Real Impact Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {activeSystem.terminalSimulation ? (
                <div className="rounded-2xl bg-charcoal-950 border border-white/[0.1] overflow-hidden shadow-2xl">
                  {/* Terminal Header */}
                  <div className="px-4 py-3 bg-charcoal-900 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                      <span className="w-3 h-3 rounded-full bg-cyan-400 inline-block shadow-[0_0_8px_#00f0ff]" />
                      <span className="font-mono text-[11px] text-warm-muted ml-2">
                        production://oneatlas/pipeline
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyCmd(activeSystem.terminalSimulation!.command)}
                      className="p-1 rounded text-warm-muted hover:text-warm-white transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-5 font-mono text-xs leading-relaxed space-y-3">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                      <span className="text-warm-dark">$</span>
                      <span className="text-warm-white">
                        {activeSystem.terminalSimulation.command}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/[0.05] space-y-1.5">
                      {activeSystem.terminalSimulation.outputLines.map((line, idx) => (
                        <p
                          key={idx}
                          className={`font-mono text-[11px] ${
                            line.startsWith('✓')
                              ? 'text-cyan-300 font-medium'
                              : 'text-warm-muted'
                          }`}
                        >
                          {line}
                        </p>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-white/[0.05] flex items-center justify-between text-[10px] text-warm-dark">
                      <span>RUNNING ON ASYNCIO + CRAWL4AI</span>
                      <span className="text-cyan-400 font-bold">100% RELIABILITY</span>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-1 gap-3 mt-4">
                {activeSystem.metrics.map((m, i) => (
                  <div key={i} className="p-4 rounded-xl bg-charcoal-950/80 border border-white/[0.06] flex items-center justify-between font-mono">
                    <span className="text-xs text-warm-muted uppercase">{m.label}</span>
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
