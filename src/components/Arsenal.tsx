import React, { useState } from 'react';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import { Terminal, ExternalLink, Check, Copy, ArrowUpRight, Cpu, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';

export const Arsenal: React.FC = () => {
  const [activeProject, setActiveProject] = useState(PROJECTS[0].id);
  const [copiedCmd, setCopiedCmd] = useState(false);

  const current = PROJECTS.find((p) => p.id === activeProject) || PROJECTS[0];

  const handleCopyCmd = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <section id="arsenal" className="py-20 sm:py-28 border-b border-white/[0.08] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Index Marker */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
            [ 04 / 09 ]
          </span>
          <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
            // ARSENAL & SYSTEMS
          </span>
        </div>

        {/* Honey Bold Headline */}
        <div className="max-w-4xl mb-6">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-honey-bone uppercase leading-[1.05]">
            CodeGraph meets AI.
            <br />
            AI meets Determinism.
          </h2>
        </div>

        <p className="max-w-3xl text-honey-muted text-base sm:text-xl font-normal leading-relaxed mb-12">
          Most AI developer tools throw entire raw directories into a prompt and hope for the best.
          Here is what happens when you build with compiler ASTs, SQLite incremental indexing, and line-level proof.
        </p>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/[0.08]">
          {PROJECTS.map((proj) => (
            <button
              key={proj.id}
              onClick={() => setActiveProject(proj.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2 ${
                activeProject === proj.id
                  ? 'bg-honey-bone text-[#09090b] font-bold shadow-md'
                  : 'bg-white/[0.03] text-honey-muted hover:text-honey-bone hover:bg-white/[0.07] border border-white/5'
              }`}
            >
              <span>[{proj.number}]</span>
              <span>{proj.title}</span>
              {proj.badge && (
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded font-mono ${
                    activeProject === proj.id
                      ? 'bg-black/20 text-black font-semibold'
                      : 'bg-honey-accent/15 text-honey-accent'
                  }`}
                >
                  {proj.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Active Project Deep Dive Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#111114] border border-white/[0.1] rounded-3xl p-6 sm:p-10 lg:p-12 relative overflow-hidden">
          {/* Left Column: Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs tracking-widest text-honey-accent font-semibold">
                  // {current.category}
                </span>
                {current.badge && (
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-honey-accent/10 border border-honey-accent/25 text-honey-accent">
                    {current.badge}
                  </span>
                )}
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-honey-bone mb-3">
                {current.title}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-honey-muted mb-6 leading-relaxed">
                {current.tagline}
              </p>

              <p className="text-honey-bone/90 text-sm sm:text-base leading-relaxed mb-8">
                {current.description}
              </p>

              {/* Highlights */}
              <div className="space-y-3 mb-8">
                <span className="font-mono text-xs text-honey-muted tracking-wider uppercase block">
                  KEY ARCHITECTURAL PROOFS:
                </span>
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-honey-bone/85">
                    <span className="text-honey-accent mt-0.5">✦</span>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack & Links */}
            <div>
              <div className="flex flex-wrap gap-2 mb-8 pt-6 border-t border-white/[0.08]">
                {current.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-honey-bone/80"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {current.links.pypi && (
                  <a
                    href={current.links.pypi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full bg-honey-bone text-[#09090b] font-mono text-xs font-bold tracking-wider hover:bg-honey-accent hover:text-white transition-all flex items-center gap-1.5"
                  >
                    <span>VIEW ON PYPI</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {current.links.github && (
                  <a
                    href={current.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-honey-bone font-mono text-xs tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>SOURCE REPO</span>
                  </a>
                )}
                {current.links.live && (
                  <a
                    href={current.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/[0.08] text-honey-bone font-mono text-xs tracking-wider transition-all flex items-center gap-1.5"
                  >
                    <span>LIVE PLATFORM</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Terminal Interactive Window */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            {current.terminalSnippet ? (
              <div className="rounded-2xl bg-[#09090b] border border-white/[0.12] overflow-hidden shadow-2xl">
                {/* Terminal Header */}
                <div className="px-4 py-3 bg-[#161619] border-b border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                    <span className="font-mono text-[11px] text-honey-muted ml-2">
                      terminal://{current.id}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopyCmd(current.terminalSnippet!.command)}
                    className="p-1 rounded text-honey-muted hover:text-honey-bone transition-colors"
                    title="Copy command"
                  >
                    {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                {/* Terminal Body */}
                <div className="p-5 font-mono text-xs leading-relaxed space-y-3 overflow-x-auto">
                  <div className="flex items-center gap-2 text-honey-accent">
                    <span className="text-honey-muted">$</span>
                    <span className="text-honey-bone font-semibold">{current.terminalSnippet.command}</span>
                  </div>

                  <div className="pt-2 border-t border-white/[0.06] space-y-1.5">
                    {current.terminalSnippet.output.map((line, idx) => (
                      <p
                        key={idx}
                        className={`font-mono text-[11px] ${
                          line.startsWith('✓')
                            ? 'text-emerald-400 font-medium'
                            : line.includes('0 tokens wasted') || line.includes('100% Deterministic')
                            ? 'text-honey-accent font-semibold'
                            : 'text-honey-muted'
                        }`}
                      >
                        {line}
                      </p>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-honey-darkMuted text-[10px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>DETERMINISTIC EVALUATION: VERIFIED ON AST BENCHMARKS</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full rounded-2xl bg-[#09090b] border border-white/[0.08] p-8 flex flex-col justify-center items-center text-center">
                <Code2 className="w-12 h-12 text-honey-accent mb-4 opacity-80" />
                <h4 className="font-mono text-sm text-honey-bone font-bold mb-2 uppercase">
                  Architecture Blueprint
                </h4>
                <p className="font-mono text-xs text-honey-muted max-w-xs">
                  Full backend microservice topology with spatial indexing & transactional state management.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
