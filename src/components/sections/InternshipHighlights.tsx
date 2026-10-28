import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { INTERNSHIP_PROJECTS } from '../../data/portfolioData';
import { Globe, ArrowUpRight, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../Icons';
import { Magnetic } from '../Magnetic';
import { InteractivePipelineVisualizer } from '../ui/InteractivePipelineVisualizer';
import { sound } from '../../utils/sound';

export const InternshipHighlights: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeSystemId, setActiveSystemId] = useState(INTERNSHIP_PROJECTS[0].id);

  const activeSystem =
    INTERNSHIP_PROJECTS.find((p) => p.id === activeSystemId) || INTERNSHIP_PROJECTS[0];

  // 120fps Hardware-Accelerated Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const leftColY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  // Precise matching for the 3 production system tabs
  const tabTitles: Record<string, string> = {
    'graph-one-pipeline': '01 · 600+ INGESTION',
    'llm-entity-extraction': '02 · LLM ROUTER',
    'frontier-atlas-platform': '03 · ONE ATLAS PLATFORM',
    'frontier-atlas': '03 · ONE ATLAS PLATFORM',
  };

  return (
    <section
      ref={sectionRef}
      id="internship"
      className="scroll-mt-16 min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 border-b-2 border-[#e5d3af]/60 relative bg-transparent overflow-hidden"
    >
      {/* Dynamic Ambient Depth */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#966b44]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between my-auto space-y-2.5 sm:space-y-3">
        {/* Section Header with Segmented Dock & Scroll Parallax */}
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 pb-2.5 border-b-2 border-[#e5d3af]/70"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10.5px] font-bold tracking-widest text-[#790d16] bg-[#790d16]/10 border border-[#790d16]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
                02 · PRODUCTION SYSTEMS
              </span>
              <span className="font-mono text-[10.5px] tracking-wider text-[#555555] uppercase font-bold">
                THE AI SIGNAL & ONE ATLAS
              </span>
            </div>

            <h2 className="font-syne text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
              <span className="text-black">Production Pipelines. </span>
              <span className="text-[#790d16]">Scaled to 600+ Sources.</span>
            </h2>
          </div>

          {/* Clean Segmented Dock with Guaranteed High-Contrast Active Tab */}
          <div className="relative inline-flex items-center gap-1 p-1 rounded-full bg-white border-2 border-[#e5d3af] shadow-xs self-start lg:self-end">
            {INTERNSHIP_PROJECTS.map((system) => {
              const isSelected = activeSystemId === system.id;
              return (
                <button
                  key={system.id}
                  onClick={() => {
                    sound.click();
                    setActiveSystemId(system.id);
                  }}
                  className={`relative z-10 px-3.5 py-1 rounded-full font-mono text-[10.5px] sm:text-[11px] font-black tracking-wider transition-colors duration-200 cursor-pointer ${
                    isSelected
                      ? 'text-white'
                      : 'text-black hover:text-[#790d16]'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="internshipActivePill"
                      className="absolute inset-0 bg-[#790d16] rounded-full -z-10 shadow-sm"
                      transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{tabTitles[system.id] || system.title}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Executive Case Study Grid with Dual-Axis Scroll Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-5 items-stretch py-0.5">
          {/* Left Column (7 Cols): Stable Wrapper Prevents Grid Layout Jumps */}
          <motion.div
            style={{ y: leftColY }}
            className="lg:col-span-7 flex flex-col justify-between"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSystem.id}
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
                      {activeSystem.category}
                    </span>
                    <span className="font-mono text-[9.5px] px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 font-bold flex items-center gap-1">
                      <Activity className="w-2.5 h-2.5 text-emerald-600 animate-pulse" />
                      {activeSystem.deploymentStatus}
                    </span>
                  </div>

                  <h3 className="font-syne text-lg sm:text-xl font-black text-black tracking-tight leading-tight mb-1.5">
                    {activeSystem.title}
                  </h3>

                  <p className="font-sans text-xs text-[#222222] font-medium leading-relaxed mb-2.5">
                    {activeSystem.summary}
                  </p>

                  {/* Architectural Bottleneck & Breakthrough Cards */}
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
                        {activeSystem.challenge}
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
                        {activeSystem.solution}
                      </p>
                    </div>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1 mb-2.5">
                    {activeSystem.techStack.map((tech) => (
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
                  {activeSystem.links.liveDemo && (
                    <Magnetic strength={0.25}>
                      <a
                        href={activeSystem.links.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className="px-4 py-2 rounded-full font-mono text-xs font-black tracking-wider transition-all flex items-center gap-1.5 bg-[#790d16] text-[#ffffff] hover:bg-[#5c0910] hover:scale-105 active:scale-95 shadow-md cursor-pointer"
                      >
                        <Globe className="w-3.5 h-3.5 text-white" />
                        <span>LAUNCH PLATFORM</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                      </a>
                    </Magnetic>
                  )}

                  {activeSystem.links.github && (
                    <Magnetic strength={0.25}>
                      <a
                        href={activeSystem.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => sound.click()}
                        className="px-4 py-2 rounded-full bg-white hover:bg-[#fcf9f2] border-2 border-[#aec4d4] hover:border-[#790d16] text-black font-mono text-xs font-bold tracking-wider transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 shadow-xs cursor-pointer"
                      >
                        <GithubIcon className="w-3.5 h-3.5 text-black" />
                        <span>VIEW REPOSITORY</span>
                      </a>
                    </Magnetic>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Column (5 Cols): Live Pipeline Terminal & Integrated Telemetry with Counter-Parallax */}
          <motion.div
            style={{ y: rightColY }}
            className="lg:col-span-5 flex flex-col justify-between"
          >
            {/* The Live Interactive Pipeline Visualizer with Integrated 3-Column Metrics */}
            <InteractivePipelineVisualizer systemId={activeSystem.id} metrics={activeSystem.metrics} />
          </motion.div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-2 border-t-2 border-[#e5d3af] flex items-center justify-between font-mono text-[10.5px] sm:text-[11px] text-black font-bold">
          <div className="flex items-center gap-2">
            <span className="text-[#790d16]">●</span>
            <span className="font-semibold">DEPLOYED AT THE AI SIGNAL / ONE ATLAS · FRONTIER ATLAS PLATFORM</span>
          </div>
          <span className="hidden sm:inline font-bold">600+ VERIFIED INGESTION SOURCES</span>
        </div>
      </div>
    </section>
  );
};
