import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';
import { ProjectCore3D } from '../3d/ProjectCore3D';
import { Globe, ArrowUpRight, GitFork, Check, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Projects: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  const [copiedClone, setCopiedClone] = useState(false);

  const activeProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  // 120fps Hardware-Accelerated Scroll Motion Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const leftColY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [-25, 25]);
  const deckY = useTransform(scrollYProgress, [0, 1], [15, -15]);

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
      ref={sectionRef}
      id="projects"
      className="scroll-mt-16 min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 border-b-2 border-[#e5d3af]/60 relative bg-transparent overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#966b44]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between my-auto space-y-2.5 sm:space-y-3">
        {/* Section Header with Scroll Parallax */}
        <motion.div style={{ y: headerY }} className="pb-2.5 border-b-2 border-[#e5d3af]/70">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10.5px] font-bold tracking-widest text-[#790d16] bg-[#790d16]/10 border border-[#790d16]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
                03 · FEATURED PROJECTS
              </span>
              <span className="font-mono text-[10.5px] tracking-wider text-[#555555] uppercase font-bold">
                PRODUCTION SYSTEMS & RUNTIMES
              </span>
            </div>

            <h2 className="font-syne text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
              <span className="text-black">Selected Works. </span>
              <span className="text-[#790d16]">Built & Deployed.</span>
            </h2>
          </div>
        </motion.div>

        {/* Compact High-Contrast 4-Project Architectural Selector Deck */}
        <motion.div style={{ y: deckY }}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5">
            {PROJECTS.map((proj) => {
              const isSelected = activeProjectId === proj.id;
              return (
                <button
                  key={proj.id}
                  onClick={() => {
                    sound.click();
                    setActiveProjectId(proj.id);
                  }}
                  className={`text-left p-2.5 sm:p-3 rounded-xl border-2 transition-all duration-200 relative overflow-hidden group cursor-pointer ${
                    isSelected
                      ? 'bg-[#fcf9f2] border-[#790d16] shadow-xs ring-1 ring-[#790d16]/40'
                      : 'bg-white/70 backdrop-blur-xl border-[#e5d3af] hover:border-[#aec4d4] hover:bg-white'
                  }`}
                >
                  {/* Top Highlight Accent for Active Tab */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeProjectTopBar"
                      className="absolute top-0 left-0 right-0 h-1 bg-[#790d16]"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-mono text-xs font-black tracking-wider ${
                        isSelected ? 'text-[#790d16]' : 'text-[#666666] group-hover:text-[#790d16]'
                      }`}
                    >
                      {proj.number}
                    </span>

                    <span
                      className={`font-mono text-[8.5px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                        isSelected
                          ? 'bg-[#790d16] text-white font-black'
                          : 'bg-[#e5d3af]/30 text-[#555555]'
                      }`}
                    >
                      {isSelected ? 'ACTIVE VIEW' : 'CLICK TO VIEW'}
                    </span>
                  </div>

                  <h4 className="font-syne text-xs sm:text-sm font-black text-black tracking-tight mb-0.5 truncate">
                    {proj.title}
                  </h4>

                  <p className="font-mono text-[9px] text-[#555555] font-medium truncate">
                    {projectTabMeta[proj.id] || proj.category}
                  </p>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* 12-Column Case Study Grid with Dual-Axis Scroll Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-5 items-stretch py-0.5">
          {/* Left Column (7 Cols): Stable Wrapper Prevents Grid Layout Jumps */}
          <motion.div
            style={{ y: leftColY }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_10px_30px_rgba(121,13,22,0.05)] flex flex-col justify-between h-full transition-colors duration-300"
              >
                <div>
                  {/* Meta Badges */}
                  <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                    <span className="font-mono text-[9.5px] font-black uppercase tracking-wider text-[#790d16] bg-[#790d16]/10 border border-[#790d16]/25 px-2 py-0.5 rounded-full">
                      {activeProject.category}
                    </span>
                    <span className="font-mono text-[9.5px] px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                      {activeProject.deploymentStatus}
                    </span>
                  </div>

                  <h3 className="font-syne text-lg sm:text-xl font-black text-black tracking-tight leading-tight mb-1.5">
                    {activeProject.title}
                  </h3>

                  <p className="font-sans text-xs text-[#222222] font-medium leading-relaxed mb-2.5">
                    {activeProject.tagline}
                  </p>

                  {/* Architectural Bottleneck & Solution Cards */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 mb-2.5">
                    {/* Bottleneck Card */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-[#fcf9f2] border-2 border-[#e5d3af] shadow-xs">
                      <div className="flex items-center gap-1.5 mb-1 text-[#790d16]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-mono text-[9.5px] uppercase tracking-wider font-extrabold">
                          ARCHITECTURAL BOTTLENECK:
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#222222] leading-relaxed">
                        {activeProject.challenge}
                      </p>
                    </div>

                    {/* Solution Card */}
                    <div className="p-2.5 sm:p-3 rounded-xl bg-white border-2 border-[#790d16]/35 shadow-xs">
                      <div className="flex items-center gap-1.5 mb-1 text-[#790d16]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-mono text-[9.5px] uppercase tracking-wider font-extrabold">
                          ENGINEERED BREAKTHROUGH:
                        </span>
                      </div>
                      <p className="font-sans text-[11px] text-[#222222] leading-relaxed">
                        {activeProject.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    {activeProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[9.5px] px-2 py-0.5 rounded-full bg-[#fcf9f2] border border-[#e5d3af] text-black font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#e5d3af]/60">
                  {activeProject.links.liveDemo && (
                    <Magnetic strength={0.25}>
                      <a
                        href={activeProject.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className="px-4 py-2 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-1.5 bg-[#790d16] text-[#ffffff] hover:bg-[#5c0910] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      >
                        <Globe className="w-3.5 h-3.5 text-white" />
                        <span>{activeProject.id === 'codegraph-mcp' ? 'VIEW ON PYPI REGISTRY' : 'LAUNCH LIVE DEMO'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
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
                        className="px-4 py-2 rounded-full bg-white hover:bg-[#fcf9f2] border-2 border-[#aec4d4] hover:border-[#790d16] text-black font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-black" />
                        <span>GITHUB REPOSITORY</span>
                      </a>
                    </Magnetic>
                  )}

                  {activeProject.links.github && (
                    <button
                      onClick={() => handleCopyClone(activeProject.links.github!)}
                      className="px-3.5 py-2 rounded-full bg-[#fcf9f2] hover:bg-white border border-[#e5d3af] hover:border-[#790d16] text-black font-mono text-xs font-semibold tracking-wider transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer shadow-xs"
                      title="Copy git clone command"
                    >
                      {copiedClone ? <Check className="w-3 h-3 text-emerald-600" /> : <GitFork className="w-3 h-3 text-[#790d16]" />}
                      <span>{copiedClone ? 'COPIED' : 'GIT CLONE'}</span>
                    </button>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column (5 Cols): Authentic 3D Rotating Core Console with Live 3D Scroll Physics */}
          <motion.div
            style={{ y: rightColY }}
            className="lg:col-span-5 p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] shadow-[0_10px_30px_rgba(121,13,22,0.05)] flex flex-col justify-between h-full transition-colors duration-300"
          >
            {/* Console Header */}
            <div className="flex items-center justify-between pb-2 mb-1 border-b border-[#e5d3af]/70">
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#790d16] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#790d16]"></span>
                </span>
                <span className="font-mono text-[9.5px] sm:text-[10px] text-black font-black tracking-widest uppercase">
                  3D TENSOR ARCHITECTURE CORE
                </span>
              </div>
              <span className="font-mono text-[9px] text-[#790d16] font-bold">
                SCROLL PARALLAX 3D
              </span>
            </div>

            {/* Authentic 3D Rotating Gyroscopic Core with Live Scroll-Driven 3D Rotation */}
            <div className="my-auto py-1">
              <ProjectCore3D projectId={activeProject.id} scrollProgress={scrollYProgress} />
            </div>

            {/* Integrated 3 Architecture Metrics */}
            <div className="space-y-1.5 pt-2 border-t border-[#e5d3af]/70">
              {activeProject.metrics.map((m, i) => (
                <div
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-[#fcf9f2] border border-[#e5d3af] flex items-center justify-between font-mono text-[9.5px]"
                >
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#790d16]" />
                    <span className="text-[#555555] uppercase font-bold tracking-wider">{m.label}</span>
                  </div>
                  <span className="text-black font-black">
                    {m.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-2 border-t-2 border-[#e5d3af] flex items-center justify-between font-mono text-[10.5px] sm:text-[11px] text-black font-bold">
          <div className="flex items-center gap-2">
            <span className="text-[#790d16]">●</span>
            <span className="font-semibold">100% REPOSITORY VERIFIED · RUNS LOCALLY OR IN CONTAINER</span>
          </div>
          <span className="hidden sm:inline font-bold">ARCHITECTURE ID: #RG-2026-CORE</span>
        </div>
      </div>
    </section>
  );
};
