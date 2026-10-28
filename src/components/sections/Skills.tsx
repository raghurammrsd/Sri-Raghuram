import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SKILL_CATEGORIES } from '../../data/portfolioData';
import { Cpu, Server, Database, Wrench, Sparkles } from 'lucide-react';
import { sound } from '../../utils/sound';

export const Skills: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [filterMode, setFilterMode] = useState<'all' | 'core'>('all');

  const categoryIcons = [Cpu, Server, Database, Wrench];

  // 120fps Hardware-Accelerated Section Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [25, -25]);
  const gridY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  // Specific custom telemetry badges for each domain
  const domainBadges: Record<string, string> = {
    'AI & Intelligent Systems': '0.8ms AST COMPILER RESOLUTION',
    'Backend & Systems': 'ASYNCIO 64-COROUTINES POOL',
    'Databases & Storage': 'ACID RELATIONAL & VECTOR CACHE',
    'Tools & Infrastructure': 'DISTROLESS CONTAINERIZATION',
  };

  const domainSubtitles: Record<string, string> = {
    'AI & Intelligent Systems': 'Eliminating model hallucination via compiler ASTs, MCP protocols & knowledge graphs.',
    'Backend & Systems': 'High-concurrency AsyncIO event loops, strict Pydantic v2 schemas & zero runtime drift.',
    'Databases & Storage': 'ACID guarantees, local SQLite caching, PostgreSQL connection pools & embeddings.',
    'Tools & Infrastructure': 'Containerized cloud deployment, edge workers, git workflows & POSIX environments.',
  };

  // Bento span widths for 60/40 and 40/60 asymmetric creative composition
  const bentoColSpans = [
    'lg:col-span-7 border-[#790d16]/30', // Top Left (60%)
    'lg:col-span-5 border-[#aec4d4]',    // Top Right (40%)
    'lg:col-span-5 border-[#e5d3af]',    // Bottom Left (40%)
    'lg:col-span-7 border-[#790d16]/30', // Bottom Right (60%)
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="scroll-mt-16 min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 border-b-2 border-[#e5d3af]/60 relative bg-transparent overflow-hidden"
    >
      {/* Background Volumetric Depth */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-[#966b44]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between my-auto space-y-2.5 sm:space-y-3">
        {/* Creative Editorial Header with Smooth Parallax Float */}
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-2.5 pb-2.5 border-b-2 border-[#e5d3af]/70"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10.5px] font-bold tracking-widest text-[#790d16] bg-[#790d16]/10 border border-[#790d16]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
                04 · TECHNICAL ARSENAL
              </span>
              <span className="font-mono text-[10.5px] tracking-wider text-[#555555] uppercase font-bold">
                PRODUCTION RUNTIMES & ARCHITECTURES
              </span>
            </div>

            <h2 className="font-syne text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
              <span className="text-black">Engineered Arsenal. </span>
              <span className="text-[#790d16]">Zero Fluff.</span>
            </h2>

            <p className="font-sans text-xs text-[#222222] font-medium mt-0.5 max-w-xl">
              Every tool in this matrix has survived high-concurrency production deployments and strict latency thresholds.
            </p>
          </div>

          {/* Luxury Sliding Pill Filter Dock */}
          <div className="relative inline-flex items-center gap-1 p-1 rounded-full bg-white border-2 border-[#e5d3af] shadow-xs self-start lg:self-end">
            <button
              onClick={() => {
                sound.click();
                setFilterMode('all');
              }}
              className={`relative z-10 px-3.5 py-1 rounded-full font-mono text-[10.5px] font-black tracking-wider transition-colors duration-200 cursor-pointer ${
                filterMode === 'all' ? 'text-white' : 'text-black hover:text-[#790d16]'
              }`}
            >
              {filterMode === 'all' && (
                <motion.div
                  layoutId="skillsActiveFilterPill"
                  className="absolute inset-0 bg-[#790d16] rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <span className="relative z-10">ALL TECHNOLOGIES (25)</span>
            </button>

            <button
              onClick={() => {
                sound.click();
                setFilterMode('core');
              }}
              className={`relative z-10 px-3.5 py-1 rounded-full font-mono text-[10.5px] font-black tracking-wider transition-colors duration-200 cursor-pointer flex items-center gap-1.5 ${
                filterMode === 'core' ? 'text-white' : 'text-black hover:text-[#790d16]'
              }`}
            >
              {filterMode === 'core' && (
                <motion.div
                  layoutId="skillsActiveFilterPill"
                  className="absolute inset-0 bg-[#790d16] rounded-full -z-10 shadow-sm"
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              <Sparkles className={`w-3 h-3 relative z-10 ${filterMode === 'core' ? 'text-[#e5d3af]' : 'text-[#c4a47c]'}`} />
              <span className="relative z-10">CORE ARCHITECTURES (13)</span>
            </button>
          </div>
        </motion.div>

        {/* 3D Double-Door Closing Perspective Matrix */}
        <motion.div
          style={{ y: gridY, perspective: 1200 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-3.5 py-0.5"
        >
          {SKILL_CATEGORIES.map((cat, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            const spanClass = bentoColSpans[idx];
            const badgeText = domainBadges[cat.title] || 'PRODUCTION VERIFIED';
            const subtitleText = domainSubtitles[cat.title] || cat.description;

            // Determine if this is a Left Door or a Right Door in the 2-column layout
            const isLeftDoor = idx % 2 === 0;

            return (
              <motion.div
                key={cat.title}
                initial={{
                  opacity: 0,
                  rotateY: isLeftDoor ? -40 : 40,
                  x: isLeftDoor ? -35 : 35,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  rotateY: 0,
                  x: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.75,
                  delay: Math.floor(idx / 2) * 0.16 + (isLeftDoor ? 0 : 0.08),
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  rotateY: isLeftDoor ? 2.5 : -2.5,
                  scale: 1.01,
                  transition: { duration: 0.25 },
                }}
                style={{
                  transformOrigin: isLeftDoor ? 'left center' : 'right center',
                  transformStyle: 'preserve-3d',
                }}
                className={`p-3.5 sm:p-4 rounded-2xl bg-white/70 backdrop-blur-xl border-2 hover:border-[#790d16] transition-colors duration-300 shadow-[0_10px_25px_rgba(121,13,22,0.04)] flex flex-col justify-between group overflow-hidden relative ${spanClass}`}
              >
                {/* 3D Door Hinge Aesthetic Indicator */}
                <div
                  className={`absolute top-4 bottom-4 w-1 bg-[#790d16]/30 rounded-full transition-opacity group-hover:bg-[#790d16] ${
                    isLeftDoor ? 'left-1' : 'right-1'
                  }`}
                />

                {/* Top Subtle Gradient Accent Rail */}
                <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#790d16] via-[#aec4d4] to-[#e5d3af]" />

                <div>
                  {/* Module Header Bar */}
                  <div className="flex items-center justify-between mb-1.5 pb-1.5 border-b border-[#e5d3af]/70">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-[#fcf9f2] border border-[#e5d3af] flex items-center justify-center text-[#790d16] group-hover:bg-[#790d16] group-hover:text-white transition-all shadow-xs">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[9px] text-[#790d16] font-black">
                            0{idx + 1}
                          </span>
                          <h3 className="font-syne text-sm sm:text-base font-black text-black tracking-tight">
                            {cat.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    {/* Architectural Telemetry Badge */}
                    <span className="font-mono text-[8.5px] sm:text-[9px] text-[#790d16] font-extrabold tracking-wider bg-[#790d16]/10 px-2 py-0.5 rounded-full border border-[#790d16]/20">
                      {badgeText}
                    </span>
                  </div>

                  {/* One-Line Engineering Philosophy */}
                  <p className="font-sans text-[11px] text-[#333333] font-medium leading-relaxed mb-2.5">
                    {subtitleText}
                  </p>

                  {/* Tactile Keycap Skill Chips with Smooth Micro-Physics */}
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill) => {
                      const isDimmed = filterMode === 'core' && !skill.highlight;

                      return (
                        <motion.div
                          key={skill.name}
                          onMouseEnter={() => sound.hover()}
                          whileHover={{ y: -2, scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          animate={{
                            opacity: isDimmed ? 0.28 : 1,
                            scale: isDimmed ? 0.95 : 1,
                          }}
                          transition={{ duration: 0.25, ease: 'easeOut' }}
                          className={`px-2.5 py-1 rounded-lg font-mono text-[10px] sm:text-[10.5px] transition-all flex items-center gap-1.5 cursor-pointer shadow-xs ${
                            skill.highlight
                              ? 'bg-white border-2 border-[#790d16]/30 text-black font-extrabold hover:border-[#790d16] hover:bg-[#fcf9f2] shadow-xs'
                              : 'bg-white/80 border border-[#e5d3af] text-[#222222] font-semibold hover:border-[#aec4d4] hover:bg-white'
                          }`}
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: skill.highlight ? '#790d16' : '#aec4d4' }}
                          />
                          <span>{skill.name}</span>
                          {skill.highlight && (
                            <span className="font-mono text-[8px] px-1.5 py-0.2 rounded font-black tracking-wider bg-[#790d16]/10 text-[#790d16] border border-[#790d16]/20 shrink-0">
                              CORE
                            </span>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
