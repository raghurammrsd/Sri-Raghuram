import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowDown, Terminal, Check, Copy, ExternalLink, Sparkles, Cpu, Layers } from 'lucide-react';

interface HeroProps {
  onCopyPip: () => void;
  pipCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyPip, pipCopied }) => {
  return (
    <section className="relative pt-12 pb-20 sm:pt-20 sm:pb-28 border-b border-white/[0.08] overflow-hidden honey-grid-bg">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-honey-accent/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Index Marker */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-semibold tracking-widest text-honey-accent bg-honey-accent/10 border border-honey-accent/20 px-2.5 py-1 rounded">
              [ 01 / 09 ]
            </span>
            <span className="font-mono text-xs sm:text-sm tracking-wider text-honey-muted uppercase">
              // ORIGIN & THESIS
            </span>
          </div>
          <span className="hidden sm:inline-block font-mono text-xs tracking-wider text-honey-muted">
            {PERSONAL_INFO.location}
          </span>
        </div>

        {/* Massive Honey-Style Headline */}
        <div className="mb-8 sm:mb-12 max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-black tracking-[-0.04em] text-honey-bone leading-[0.98] uppercase">
            Engineer like a <span className="text-transparent bg-clip-text bg-gradient-to-r from-honey-bone via-white to-honey-muted">founder</span>
            <br />
            even when the problem
            <br />
            feels <span className="underline decoration-honey-accent decoration-[3px] sm:decoration-[5px] underline-offset-8">impossible</span>.
          </h1>
        </div>

        {/* Editorial Subheadline & Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-8">
            <p className="text-lg sm:text-2xl text-honey-muted font-normal leading-relaxed max-w-3xl">
              <strong className="text-honey-bone font-semibold">{PERSONAL_INFO.name}</strong> is a founding AI engineer building deterministic code intelligence, local-first MCP servers, and high-throughput async pipelines that replace hallucinated vibes with mathematical precision.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            {/* Quick Install Pill */}
            <div className="p-3.5 rounded-xl border border-white/10 bg-[#121215] flex items-center justify-between gap-3 shadow-lg">
              <div className="flex items-center gap-2 overflow-hidden">
                <Terminal className="w-4 h-4 text-honey-accent shrink-0" />
                <code className="font-mono text-xs text-honey-bone truncate">pip install codegraph-mcp</code>
              </div>
              <button
                onClick={onCopyPip}
                className="shrink-0 p-1.5 rounded-md hover:bg-white/10 text-honey-muted hover:text-white transition-colors"
                title="Copy pip install command"
              >
                {pipCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>
            <p className="font-mono text-[11px] text-honey-darkMuted text-right">
              PyPI Published • AST Repository Intelligence Engine
            </p>
          </div>
        </div>

        {/* CTAs & Links */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/[0.08]">
          <a
            href="#arsenal"
            className="group px-6 py-3.5 rounded-full bg-honey-bone text-[#09090b] font-mono text-xs sm:text-sm font-bold tracking-wider hover:bg-honey-accent hover:text-white transition-all flex items-center gap-2"
          >
            <span>EXPLORE ARSENAL</span>
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>

          <a
            href={PERSONAL_INFO.pypi}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-honey-bone font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2"
          >
            <span>VIEW ON PYPI</span>
            <ExternalLink className="w-3.5 h-3.5 text-honey-muted" />
          </a>

          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-honey-bone font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2"
          >
            <span>GITHUB</span>
            <ExternalLink className="w-3.5 h-3.5 text-honey-muted" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 text-honey-bone font-mono text-xs sm:text-sm tracking-wider transition-all flex items-center gap-2"
          >
            <span>LINKEDIN</span>
            <ExternalLink className="w-3.5 h-3.5 text-honey-muted" />
          </a>
        </div>

        {/* Ticker / Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <span className="font-mono text-[10px] text-honey-muted tracking-widest block uppercase">EXPERIENCE & ROLES</span>
            <span className="text-sm sm:text-base font-semibold text-honey-bone mt-1 block">Founding AI Engineer</span>
            <span className="font-mono text-xs text-honey-darkMuted">Frontier Atlas & One Atlas</span>
          </div>

          <div>
            <span className="font-mono text-[10px] text-honey-muted tracking-widest block uppercase">FLAGSHIP REPO</span>
            <span className="text-sm sm:text-base font-semibold text-honey-bone mt-1 block">CodeGraph MCP</span>
            <span className="font-mono text-xs text-honey-darkMuted">Deterministic Codebase AST</span>
          </div>

          <div>
            <span className="font-mono text-[10px] text-honey-muted tracking-widest block uppercase">SPECIALTY</span>
            <span className="text-sm sm:text-base font-semibold text-honey-bone mt-1 block">Zero-Hallucination AI</span>
            <span className="font-mono text-xs text-honey-darkMuted">Knowledge Graphs & Schema Locks</span>
          </div>

          <div>
            <span className="font-mono text-[10px] text-honey-muted tracking-widest block uppercase">ACADEMICS</span>
            <span className="text-sm sm:text-base font-semibold text-honey-bone mt-1 block">B.Tech CSE (AI)</span>
            <span className="font-mono text-xs text-honey-darkMuted">Parul University · CGPA 8.21</span>
          </div>
        </div>
      </div>
    </section>
  );
};
