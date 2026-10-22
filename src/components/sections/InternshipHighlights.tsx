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

  const activeSystem = INTERNSHIP_PROJECTS.find((p) => p.id === activeSystemId) || INTERNSHIP_PROJECTS[0];

  const handleCopyCmd = (text: string) => {
    sound.click();
    navigator.clipboard.writeText(text);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const getAccentStyles = (color: string) => {
    switch (color) {
      case 'cyan':
        return {
          text: 'text-cyan-400',
          badge: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-400',
          button: 'bg-cyan-500 hover:bg-cyan-400 text-charcoal-950 shadow-cyan-500/20',
          border: 'border-cyan-500/30',
        };
      case 'emerald':
        return {
          text: 'text-emerald-400',
          badge: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
          button: 'bg-emerald-500 hover:bg-emerald-400 text-charcoal-950 shadow-emerald-500/20',
          border: 'border-emerald-500/30',
        };
      case 'amber':
        return {
          text: 'text-amber-400',
          badge: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
          button: 'bg-amber-500 hover:bg-amber-400 text-charcoal-950 shadow-amber-500/20',
          border: 'border-amber-500/30',
        };
      default:
        return {
          text: 'text-electric-orange',
          badge: 'bg-electric-orange/10 border-electric-orange/30 text-electric-orange',
          button: 'bg-electric-orange hover:bg-electric-light text-white shadow-electric-orange/20',
          border: 'border-electric-orange/30',
        };
    }
  };

  const accents = getAccentStyles(activeSystem.accentColor);

  return (
    <section id="internship" className="scroll-mt-20 py-16 sm:py-24 border-b border-white/[0.08] relative bg-charcoal-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Marker */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 rounded">
            [ 02 / 05 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-warm-muted uppercase">
            // INTERNSHIP PRODUCTION SYSTEMS
          </span>
        </div>

        {/* Section Headline */}
        <div className="max-w-4xl mb-4">
          <h2 className="font-syne text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-warm-white uppercase leading-[0.96]">
            Production pipelines.
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Scaled to 600+ sources.
            </span>
          </h2>
        </div>

        <p className="max-w-2xl font-sans text-warm-muted text-sm sm:text-base mb-8">
          Verified production engineering from my internship at <strong className="text-cyan-300 font-bold">The AI Signal / One Atlas</strong> and my founding work at <strong className="text-electric-orange font-bold">Frontier Atlas</strong>.
        </p>

        {/* System Selector Pills */}
        <div className="flex flex-wrap gap-2.5 mb-8 pb-3 border-b border-white/[0.08]">
          {INTERNSHIP_PROJECTS.map((system) => {
            const isSelected = activeSystemId === system.id;
            return (
              <button
                key={system.id}
                onClick={() => {
                  sound.click();
                  setActiveSystemId(system.id);
                }}
                className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2.5 ${
                  isSelected
                    ? 'bg-warm-white text-charcoal-950 font-black shadow-lg scale-102'
                    : 'bg-charcoal-850/80 text-warm-muted hover:text-warm-white hover:bg-white/[0.08] border border-white/5'
                }`}
              >
                <span className="text-cyan-400 font-bold">[{system.number}]</span>
                <span>{system.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active System Case Study Card — Compact & Balanced */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSystem.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-8 bg-charcoal-850/90 border ${accents.border} rounded-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl`}
          >
            {/* Left Column: Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className={`font-mono text-xs tracking-widest font-black uppercase ${accents.text}`}>
                    // {activeSystem.category}
                  </span>
                  <span className={`font-mono text-[11px] px-2 py-0.5 rounded font-semibold flex items-center gap-1.5 ${accents.badge}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>{activeSystem.deploymentStatus}</span>
                  </span>
                </div>

                <h3 className="font-syne text-2xl sm:text-4xl font-black text-warm-white mb-2">
                  {activeSystem.title}
                </h3>

                <p className="font-mono text-xs text-warm-muted mb-5 leading-relaxed">
                  {activeSystem.tagline}
                </p>

                {/* Challenge & Solution Grid */}
                <div className="space-y-3 mb-6 text-xs sm:text-sm leading-relaxed">
                  <div className="p-4 rounded-xl bg-charcoal-950/80 border border-white/[0.06]">
                    <span className="font-mono text-xs text-electric-orange uppercase tracking-wider block mb-1 font-bold">
                      THE BOTTLENECK:
                    </span>
                    <p className="text-warm-muted font-sans">{activeSystem.challenge}</p>
                  </div>

                  <div className="p-4 rounded-xl bg-charcoal-950/80 border border-white/[0.06]">
                    <span className="font-mono text-xs text-cyan-400 uppercase tracking-wider block mb-1 font-bold">
                      THE SOLUTION:
                    </span>
                    <p className="text-warm-cream font-sans">{activeSystem.solution}</p>
                  </div>
                </div>

                {/* Deliverables */}
                <div className="space-y-1.5 mb-6">
                  <span className="font-mono text-xs text-warm-muted uppercase tracking-wider block font-bold">
                    VERIFIED DELIVERABLES:
                  </span>
                  {activeSystem.architectureHighlights.map((hl, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-warm-white/90">
                      <span className="text-cyan-400 mt-0.5">✦</span>
                      <span className="font-sans">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stack & Actions */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/[0.06]">
                  {activeSystem.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-warm-cream"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  {activeSystem.links.liveDemo && (
                    <Magnetic strength={0.25}>
                      <a
                        href={activeSystem.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className={`px-5 py-2.5 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-2 shadow-lg ${accents.button}`}
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>LAUNCH PRODUCTION PLATFORM</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </Magnetic>
                  )}

                  <Magnetic strength={0.25}>
                    <a
                      href={activeSystem.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => sound.click()}
                      className="px-5 py-2.5 rounded-full bg-warm-white text-charcoal-950 font-mono text-xs font-bold tracking-wider hover:bg-white transition-all flex items-center gap-2"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>GITHUB REPO</span>
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>

            {/* Right Column: Terminal Simulation & Real Impact Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              {activeSystem.terminalSimulation ? (
                <div className="rounded-xl bg-charcoal-950 border border-white/[0.1] overflow-hidden shadow-xl">
                  {/* Terminal Header */}
                  <div className="px-3.5 py-2.5 bg-charcoal-900 border-b border-white/[0.08] flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                      <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 inline-block" />
                      <span className="font-mono text-[10px] text-warm-muted ml-2">
                        production://oneatlas/pipeline
                      </span>
                    </div>
                    <button
                      onClick={() => handleCopyCmd(activeSystem.terminalSimulation!.command)}
                      className="p-1 rounded text-warm-muted hover:text-warm-white transition-colors"
                      title="Copy command"
                    >
                      {copiedCmd ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  {/* Terminal Body */}
                  <div className="p-4 font-mono text-xs leading-relaxed space-y-2">
                    <div className="flex items-center gap-2 text-cyan-400 font-semibold text-[11px]">
                      <span className="text-warm-dark">$</span>
                      <span className="text-warm-white">
                        {activeSystem.terminalSimulation.command}
                      </span>
                    </div>

                    <div className="pt-2 border-t border-white/[0.05] space-y-1">
                      {activeSystem.terminalSimulation.outputLines.map((line, idx) => (
                        <p
                          key={idx}
                          className={`font-mono text-[10px] ${
                            line.startsWith('✓')
                              ? 'text-cyan-300 font-medium'
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
                {activeSystem.metrics.map((m, i) => (
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
