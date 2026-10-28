import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { EDUCATION_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { PedigreeSphere3D } from '../3d/PedigreeSphere3D';
import { FileDown, GraduationCap, Award } from 'lucide-react';
import { Magnetic } from '../Magnetic';
import { sound } from '../../utils/sound';

export const Experience: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // 120fps Hardware-Accelerated Scroll Motion Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const headerY = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const leftColY = useTransform(scrollYProgress, [0, 1], [35, -35]);
  const rightColY = useTransform(scrollYProgress, [0, 1], [-25, 25]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="scroll-mt-16 min-h-screen flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 border-b-2 border-[#e5d3af]/60 relative bg-transparent overflow-hidden"
    >
      {/* Background Volumetric Depth */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#966b44]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex flex-col justify-between my-auto space-y-2.5 sm:space-y-3">
        {/* Section Header with Parallax Float */}
        <motion.div
          style={{ y: headerY }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-2.5 pb-2.5 border-b-2 border-[#e5d3af]/70"
        >
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="font-mono text-[10.5px] font-bold tracking-widest text-[#790d16] bg-[#790d16]/10 border border-[#790d16]/30 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#790d16] animate-ping" />
                05 · EDUCATION & RIGOR
              </span>
              <span className="font-mono text-[10.5px] tracking-wider text-[#555555] uppercase font-bold">
                ACADEMIC CREDENTIALS & STANDING
              </span>
            </div>

            <h2 className="font-syne text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight">
              <span className="text-black">Academic Foundation. </span>
              <span className="text-[#790d16]">Verified Rigor.</span>
            </h2>
          </div>

          <div className="font-mono text-xs text-black flex items-center gap-2 bg-white/80 border border-[#e5d3af] px-3 py-1 rounded-full shadow-xs self-start sm:self-end">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span className="text-[#790d16] font-bold">ACTIVE ENROLLMENT</span> · <span className="font-semibold text-black">B.TECH CSE (AI)</span>
          </div>
        </motion.div>

        {/* 12-Column Grid: Left Academic Dossier | Right 3D Astrolabe & Official Resume */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 lg:gap-5 items-stretch py-0.5">
          {/* Left Column (7 Cols): Glassomorphic Academic Dossier with Scroll Parallax */}
          <motion.div
            style={{ y: leftColY }}
            className="lg:col-span-7 p-4 sm:p-5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] hover:border-[#790d16] transition-all duration-300 shadow-[0_10px_30px_rgba(121,13,22,0.05)] flex flex-col justify-between space-y-3 relative overflow-hidden group"
          >
            {/* Top Accent Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#790d16] via-[#aec4d4] to-[#e5d3af]" />

            <div>
              {/* Institution Header Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-2.5 border-b border-[#e5d3af]/70">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#fcf9f2] border border-[#e5d3af] flex items-center justify-center text-[#790d16] group-hover:bg-[#790d16] group-hover:text-white transition-all shadow-xs">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-syne text-lg sm:text-xl font-black text-black leading-tight">
                      {EDUCATION_DATA.institution}
                    </h3>
                    <p className="font-mono text-xs text-[#555555] font-medium">{EDUCATION_DATA.location}</p>
                  </div>
                </div>

                <span className="font-mono text-xs text-black px-3 py-1 rounded-full bg-[#fcf9f2] border border-[#e5d3af] font-bold shadow-xs">
                  {EDUCATION_DATA.period}
                </span>
              </div>

              {/* Degree & Concentration */}
              <div className="my-2.5">
                <span className="font-mono text-[9.5px] text-[#555555] uppercase tracking-wider block mb-0.5 font-bold">
                  DEGREE & CONCENTRATION:
                </span>
                <p className="font-syne text-base sm:text-lg font-black text-black leading-snug">
                  {EDUCATION_DATA.degree}
                </p>
              </div>

              {/* CGPA Badge */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="p-3 sm:p-3.5 rounded-xl bg-[#fcf9f2] border-2 border-[#e5d3af] flex items-center justify-between mb-2.5 shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#790d16]" />
                  <span className="font-mono text-xs text-[#444444] uppercase font-bold tracking-wider">
                    ACADEMIC STANDING:
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-[#555555] font-bold">CUMULATIVE CGPA:</span>
                  <span className="font-mono text-sm sm:text-base font-black text-white bg-[#790d16] px-3 py-0.5 rounded-lg shadow-xs">
                    {EDUCATION_DATA.cgpa} / 10.0
                  </span>
                </div>
              </motion.div>

              {/* Coursework Foundations */}
              <div>
                <span className="font-mono text-[9.5px] text-[#555555] uppercase tracking-wider block mb-1.5 font-bold">
                  RIGOROUS TECHNICAL DISCIPLINES:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {EDUCATION_DATA.coursework.map((course) => (
                    <motion.span
                      key={course}
                      whileHover={{ y: -2, scale: 1.02 }}
                      onMouseEnter={() => sound.hover()}
                      className="font-mono text-[10.5px] px-2.5 py-1 rounded-lg bg-white/80 border border-[#e5d3af] text-black font-semibold hover:border-[#790d16] hover:bg-white transition-all shadow-xs cursor-default"
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Meta */}
            <div className="pt-2 border-t border-[#e5d3af]/60 flex items-center justify-between font-mono text-[10.5px] text-[#555555]">
              <span className="font-semibold text-black">B.TECH CSE (AI) · 2023–2027</span>
              <span className="text-[#790d16] font-bold">HONORS STANDING</span>
            </div>
          </motion.div>

          {/* Right Column (5 Cols): 3D Astrolabe Sphere with Live 3D Scroll Physics & Official Resume Card */}
          <motion.div
            style={{ y: rightColY }}
            className="lg:col-span-5 flex flex-col justify-between space-y-2.5"
          >
            {/* 3D Celestial Astrolabe Glass Container with Live 3D Scroll Parallax */}
            <div className="relative w-full rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] flex items-center justify-center overflow-hidden shadow-[0_10px_30px_rgba(121,13,22,0.05)] p-2">
              <PedigreeSphere3D scrollProgress={scrollYProgress} />
            </div>

            {/* Official Resume Download Card */}
            <div className="p-4 sm:p-4.5 rounded-2xl bg-white/70 backdrop-blur-xl border-2 border-[#e5d3af] shadow-[0_10px_30px_rgba(121,13,22,0.05)] flex flex-col justify-between space-y-2.5 relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#790d16] via-[#aec4d4] to-[#e5d3af]" />

              <div>
                <div className="flex items-center justify-between mb-1">
                  <h4 className="font-syne text-lg font-black text-black">
                    Official Resume
                  </h4>
                  <span className="font-mono text-[9.5px] text-[#790d16] font-bold px-2 py-0.5 rounded-full bg-[#790d16]/10 border border-[#790d16]/20">
                    UPDATED OCT 2026
                  </span>
                </div>
                <p className="font-sans text-xs text-[#333333] font-medium leading-relaxed">
                  Comprehensive technical track record, verified internship deliverables, repositories, and academic transcripts.
                </p>
              </div>

              <Magnetic strength={0.25}>
                <a
                  href={PERSONAL_INFO.resumePdf}
                  download="Mohan_Sri_Raghuram_resume.pdf"
                  onClick={() => sound.click()}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#790d16] hover:bg-[#5c0910] text-white font-mono text-xs font-black tracking-wider hover:scale-[1.02] active:scale-95 transition-all shadow-md cursor-pointer"
                  data-cursor-text="DOWNLOAD"
                >
                  <FileDown className="w-4 h-4 stroke-[2.5]" />
                  <span>DOWNLOAD VERIFIED RESUME (PDF)</span>
                </a>
              </Magnetic>
            </div>
          </motion.div>
        </div>

        {/* Bottom Status Ticker */}
        <div className="pt-2 border-t-2 border-[#e5d3af] flex items-center justify-between font-mono text-[10.5px] sm:text-[11px] text-black font-bold">
          <div className="flex items-center gap-2">
            <span className="text-[#790d16]">●</span>
            <span className="font-semibold">INSTITUTION CODE: PU-CSE-AI · VERIFIED ENROLLMENT</span>
          </div>
          <span className="hidden sm:inline font-bold">HASH ID: #MSR-ACAD-2027</span>
        </div>
      </div>
    </section>
  );
};
